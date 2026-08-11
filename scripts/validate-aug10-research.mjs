import fs from 'node:fs';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const assert = (ok, message) => { if (!ok) throw new Error(message); };
assert(manifest.entries.length >= manifest.minimum && manifest.entries.length >= 10, 'accepted count below minimum');
assert(new Set(manifest.entries.map(e => e.slug)).size === manifest.entries.length, 'duplicate slugs');
assert(manifest.entries.every(e => e.route === `/research/${e.slug}`), 'family route mismatch');
assert(manifest.entries.every(e => e.sourcePath === 'app/fleet-content.ts' && fs.existsSync(e.sourcePath)), 'source record missing');
assert(manifest.entries.every(e => e.sourceDate === '2026-08-10' && e.sourceDateField === 'published'), 'source date mismatch');
assert(manifest.entries.every(e => source.includes(`'${e.slug}'`) && source.includes(`published:'2026-08-10'`)), 'slug/date not present in source');
for (const entry of manifest.entries) {
  assert(/^[0-9a-f]{40}$/.test(entry.introducedByCommit), `invalid introducing commit for ${entry.slug}`);
  const parentSource = execFileSync('git', ['show', `${entry.introducedByCommit}^:${entry.sourcePath}`], { encoding: 'utf8' });
  const introducedSource = execFileSync('git', ['show', `${entry.introducedByCommit}:${entry.sourcePath}`], { encoding: 'utf8' });
  assert(!parentSource.includes(`'${entry.slug}'`), `slug existed before introducing commit: ${entry.slug}`);
  assert(introducedSource.includes(`'${entry.slug}'`), `slug absent at introducing commit: ${entry.slug}`);
  const builtPath = `.next/server/app${entry.route}.html`;
  assert(fs.existsSync(builtPath), `built route missing: ${entry.route}`);
  const built = fs.readFileSync(builtPath, 'utf8');
  assert(built.includes('2026-08-10') && built.includes('datePublished') && built.includes('article:published_time'), `built date metadata missing: ${entry.slug}`);
}
assert(route.includes('datePublished:post.published') && route.includes('article:published_time') && route.includes('alternates:{canonical'), 'rendered date/canonical metadata missing');
assert(manifest.entries.every(e => e.renderedDate === '2026-08-10' && e.renderedDateFields.includes('datePublished')), 'rendered date audit mismatch');
assert(sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)'), 'research sitemap membership missing');
assert(source.indexOf('researchRun20260810b, ...researchRun20260810, ...researchRun, ...researchBatch, ...baseResearchPosts') !== -1, 'index is not newest-first');
assert(manifest.cleanBuildPassed && manifest.existingCompliancePassed && manifest.indexNewestFirstPassed, 'manifest validation flags incomplete');
console.log(`PASS ${manifest.entries.length} research entries; manifest sha256 ${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
