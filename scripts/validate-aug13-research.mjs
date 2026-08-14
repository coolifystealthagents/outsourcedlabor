import fs from 'node:fs';
import path from 'node:path';
const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug13-2026/research.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const recordSource = fs.readFileSync(path.join(root, 'app/research/aug13-research-replacements-records.ts'), 'utf8');
const campaignSource = `${source}\n${recordSource}`;
const assert = (ok, msg) => { if (!ok) throw new Error(msg); };
assert(manifest.requiredCount === 10 && manifest.entries.length === 10, 'count is not exactly 10');
assert(new Set(manifest.entries.map(e => e.slug)).size === 10, 'duplicate slug');
assert(source.includes('researchRun20260813') && source.includes('researchRun20260813, ...researchRun20260811'), 'newest-first ordering missing');
for (const e of manifest.entries) {
  assert(campaignSource.includes(`slug: '${e.slug}'`) || campaignSource.includes(`slug:'${e.slug}'`), `source missing ${e.slug}`);
  const record = campaignSource.slice(campaignSource.indexOf(`slug:'${e.slug}'`) >= 0 ? campaignSource.indexOf(`slug:'${e.slug}'`) : campaignSource.indexOf(`slug: '${e.slug}'`), campaignSource.indexOf(`slug:'${e.slug}'`) >= 0 ? campaignSource.indexOf(`slug:'${e.slug}'`) + 5000 : campaignSource.indexOf(`slug: '${e.slug}'`) + 5000);
  assert(record.includes("published: '2026-08-13'") || record.includes("published:'2026-08-13'"), `direct date missing ${e.slug}`);
  const built = fs.readFileSync(path.join(root, '.next/server/app/research', e.slug + '.html'), 'utf8');
  const renderedWords = built.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  assert(renderedWords >= 1200, `rendered article under 1200 words for ${e.slug}: ${renderedWords}`);
  assert(built.includes('datePublished') && built.includes('2026-08-13'), `structured date missing ${e.slug}`);
  assert(built.includes('August 13, 2026'), `visible date missing ${e.slug}`);
  assert(built.includes(`canonical\" href=\"https://outsourcedlabor.com${e.route}`), `canonical missing ${e.slug}`);
}
const all = fs.readFileSync(path.join(root, '.next/server/app/research.html'), 'utf8');
const listed = [...all.matchAll(/href=\"\/research\/([a-z0-9-]+)\"/g)].map(m => m[1]);
assert(manifest.entries.every((e, i) => listed[i] === e.slug), 'batch is not first on research index');
assert(manifest.entries.every(e => !/paperclip|agent|prompt|scheduler|coolify|price|rate/i.test(e.slug)), 'prohibited term in route identity');
console.log('PASS: exactly 10 August 13 Research routes, direct date records, visible and structured dates, canonical routes, and newest-first index ordering');
