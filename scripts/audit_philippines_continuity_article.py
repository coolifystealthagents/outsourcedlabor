#!/usr/bin/env python3
"""Deterministic rendered gate for the Philippines continuity article."""
from __future__ import annotations

import html
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

SLUG = "philippines-outsourced-labor-business-continuity-plan"
TITLE = "Build a Philippines outsourced labor business continuity plan"
MARKER = "ph-continuity-plan-2026"
DEFAULT_HTML = Path(f".next/server/app/blog/{SLUG}.html")


class AuditParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.article_depth = 0
        self.skip_depth = 0
        self.classes: list[set[str]] = []
        self.text: list[str] = []
        self.h1_text: list[str] = []
        self.h1_depth = 0
        self.paragraph: list[str] | None = None
        self.paragraphs: list[str] = []
        self.links: list[str] = []
        self.ids: set[str] = set()
        self.title_text: list[str] = []
        self.in_title = False
        self.canonical: list[str] = []
        self.json_scripts: list[str] = []
        self.json_buffer: list[str] | None = None
        self.counts = {
            "articles": 0,
            "banners": 0,
            "tables": 0,
            "svgs": 0,
            "charts": 0,
            "graphics": 0,
            "wide_regions": 0,
            "focusable_wide_regions": 0,
            "methods_notes": 0,
            "source_lists": 0,
            "expert_quotes": 0,
        }

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attrs_dict = dict(attrs)
        classes = set((attrs_dict.get("class") or "").split())
        if tag == "title":
            self.in_title = True
        if tag == "link" and attrs_dict.get("rel") == "canonical" and attrs_dict.get("href"):
            self.canonical.append(attrs_dict["href"] or "")
        if tag == "script" and attrs_dict.get("type") == "application/ld+json":
            self.json_buffer = []
        if tag == "article" and attrs_dict.get("data-article-marker") == MARKER:
            self.article_depth = 1
            self.counts["articles"] += 1
            self.classes.append(classes)
            return
        if not self.article_depth:
            return
        self.article_depth += 1
        self.classes.append(classes)
        if tag in {"script", "style"}:
            self.skip_depth += 1
        if attrs_dict.get("id"):
            self.ids.add(attrs_dict["id"] or "")
        if tag == "a" and attrs_dict.get("href"):
            self.links.append(attrs_dict["href"] or "")
        if tag == "h1":
            self.h1_depth = 1
        elif self.h1_depth:
            self.h1_depth += 1
        if tag == "p" and any("article-body" in item for item in self.classes[:-1]):
            self.paragraph = []
        if "article-banner" in classes:
            self.counts["banners"] += 1
        if tag == "table":
            self.counts["tables"] += 1
        if tag == "svg":
            self.counts["svgs"] += 1
            if "continuity-chart" in classes:
                self.counts["charts"] += 1
            if "recovery-map" in classes:
                self.counts["graphics"] += 1
        if "wide-region" in classes:
            self.counts["wide_regions"] += 1
            if attrs_dict.get("tabindex") == "0":
                self.counts["focusable_wide_regions"] += 1
        if "methods-note" in classes:
            self.counts["methods_notes"] += 1
        if "source-list" in classes:
            self.counts["source_lists"] += 1
        if tag == "blockquote" and "expert-quote" in classes:
            self.counts["expert_quotes"] += 1

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if tag == "script" and self.json_buffer is not None:
            self.json_scripts.append("".join(self.json_buffer))
            self.json_buffer = None
        if not self.article_depth:
            return
        if tag in {"script", "style"} and self.skip_depth:
            self.skip_depth -= 1
        if tag == "p" and self.paragraph is not None:
            self.paragraphs.append(clean_text(" ".join(self.paragraph)))
            self.paragraph = None
        if self.h1_depth:
            self.h1_depth -= 1
        self.article_depth -= 1
        if self.classes:
            self.classes.pop()

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_text.append(data)
        if self.json_buffer is not None:
            self.json_buffer.append(data)
        if self.article_depth and not self.skip_depth:
            self.text.append(data)
            if self.h1_depth:
                self.h1_text.append(data)
            if self.paragraph is not None:
                self.paragraph.append(data)


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def sentence_count(value: str) -> int:
    safe = re.sub(r"(?:\s+\d+)+$", "", value)
    safe = re.sub(r"(?<=\d)\.(?=\d)", "·", safe)
    safe = re.sub(r"\b(?:U\.S|e\.g|i\.e)\.", lambda m: m.group(0).replace(".", "·"), safe)
    parts = re.split(r"(?<=[.!?])[\"']?\s+", safe)
    return len([part for part in parts if part.strip()])


def collect_types(value: object) -> set[str]:
    found: set[str] = set()
    if isinstance(value, dict):
        kind = value.get("@type")
        if isinstance(kind, str):
            found.add(kind)
        elif isinstance(kind, list):
            found.update(item for item in kind if isinstance(item, str))
        for child in value.values():
            found.update(collect_types(child))
    elif isinstance(value, list):
        for child in value:
            found.update(collect_types(child))
    return found


def main() -> int:
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_HTML
    raw = path.read_text(encoding="utf-8")
    parser = AuditParser()
    parser.feed(raw)
    visible = clean_text(" ".join(parser.text))
    words = re.findall(r"\b[\w’'-]+\b", visible)
    internal = [href for href in parser.links if href.startswith("/") and not href.startswith("//")]
    external = [href for href in parser.links if href.startswith("https://")]
    bad_paragraphs = [
        {"sentences": sentence_count(text), "text": text[:150]}
        for text in parser.paragraphs
        if sentence_count(text) not in {2, 3}
    ]
    schema_types: set[str] = set()
    schema_errors: list[str] = []
    for item in parser.json_scripts:
        try:
            schema_types.update(collect_types(json.loads(item)))
        except json.JSONDecodeError as exc:
            schema_errors.append(str(exc))
    forbidden = sorted(set(match.group(0) for match in re.finditer(r"(?i)\b(?:pricing|rates|tiers)\b|/pricing", raw)))
    checks = {
        "one_target_article": parser.counts["articles"] == 1,
        "word_range": 1500 <= len(words) <= 2000,
        "exact_h1": clean_text(" ".join(parser.h1_text)) == TITLE,
        "title_contains_exact": TITLE in clean_text(" ".join(parser.title_text)),
        "canonical_exact": parser.canonical == [f"https://outsourcedlabor.com/blog/{SLUG}"],
        "exact_three_banners": parser.counts["banners"] == 3,
        "one_table": parser.counts["tables"] == 1,
        "two_distinct_svgs": parser.counts["svgs"] == 2 and parser.counts["charts"] == 1 and parser.counts["graphics"] == 1,
        "wide_regions_focusable": parser.counts["wide_regions"] == 3 and parser.counts["focusable_wide_regions"] == 3,
        "methods_note_present": parser.counts["methods_notes"] >= 1,
        "expert_quote_exact": "Climate impacts threaten to significantly lower the country's GDP and the well-being of Filipinos by 2040." in visible,
        "three_dated_stats": all(marker in visible for marker in ["1.2%", "94.8%", "67.3%", "November 9, 2022"]),
        "internal_links": len(internal) >= 3,
        "external_links": len(set(external)) >= 4,
        "seven_numbered_sources": all(f"source-{index}" in parser.ids for index in range(1, 8)),
        "paragraph_gate": len(parser.paragraphs) >= 10 and not bad_paragraphs,
        "required_schema": {"BlogPosting", "FAQPage", "BreadcrumbList"}.issubset(schema_types),
        "schema_parses": not schema_errors,
        "forbidden_absent_full_document": not forbidden,
    }
    result = {
        "status": "PASS" if all(checks.values()) else "FAIL",
        "file": str(path),
        "article_words": len(words),
        "narrative_paragraphs": len(parser.paragraphs),
        "bad_paragraphs": bad_paragraphs,
        "counts": parser.counts,
        "internal_links": len(internal),
        "external_links": len(set(external)),
        "schema_types": sorted(schema_types),
        "forbidden": forbidden,
        "checks": checks,
        "schema_errors": schema_errors,
    }
    print(json.dumps(result, indent=2))
    return 0 if result["status"] == "PASS" else 1


if __name__ == "__main__":
    raise SystemExit(main())
