import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug14-2026/research.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const records = fs.readFileSync(path.join(root, 'app/research/aug14-research-records.ts'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const assert = (ok, message) => { if (!ok) throw new Error(message); };

assert(manifest.requiredCount === 10 && manifest.entries.length === 10, 'count is not exactly 10');
assert(new Set(manifest.entries.map((entry) => entry.slug)).size === 10, 'duplicate slugs');
assert(source.includes('august14ResearchRecords, ...august13ResearchReplacements'), 'newest-first source ordering missing');
assert(route.includes('datePublished:post.published') && route.includes('formatPublicDate(post.published)'), 'date rendering wiring missing');
assert(sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)'), 'research sitemap membership missing');

for (const entry of manifest.entries) {
  const recordStart = records.indexOf(`slug:'${entry.slug}'`);
  assert(recordStart >= 0, `source record missing: ${entry.slug}`);
  const record = records.slice(recordStart, recordStart + 1600);
  assert(record.includes("published:'2026-08-14'"), `direct date binding missing: ${entry.slug}`);
  assert(!/\bpaperclip\b|\bagents?\b|\bprompts?\b|\bschedulers?\b|\bcoolify\b|\bprices?\b|\brates?\b/i.test(record), `prohibited topic in record: ${entry.slug}`);
  const builtPath = path.join(root, '.next/server/app/research', `${entry.slug}.html`);
  const built = fs.readFileSync(builtPath, 'utf8');
  const words = built.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ').trim().split(/\s+/).filter(Boolean).length;
  assert(words >= 1200, `rendered article under 1200 words for ${entry.slug}: ${words}`);
  assert(built.includes('datePublished') && built.includes('2026-08-14'), `structured date missing: ${entry.slug}`);
  assert(built.includes('August 14, 2026'), `visible date missing: ${entry.slug}`);
  assert(built.includes(`canonical\" href=\"https://outsourcedlabor.com${entry.route}`), `canonical missing: ${entry.slug}`);
}

const index = fs.readFileSync(path.join(root, '.next/server/app/research.html'), 'utf8');
const listed = [...index.matchAll(/href=\"\/research\/([a-z0-9-]+)\"/g)].map((match) => match[1]);
assert(manifest.entries.every((entry, indexPosition) => listed[indexPosition] === entry.slug), 'August 14 batch is not first and deterministic');
console.log('PASS: exactly 10 August 14 Research routes, direct date binding, 1200+ rendered words, visible and structured dates, canonical routes, sitemap membership, and newest-first ordering');
