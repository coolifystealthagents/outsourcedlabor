import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const manifestPath = '.paperclip/aug10-2026/research.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/fleet-content.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const assert = (condition, message) => { if (!condition) throw new Error(message); };

assert(manifest.schemaVersion === 1 && manifest.contract === 'sites3-aug10-public-date-v6', 'manifest contract mismatch');
assert(manifest.family === 'research' && manifest.domain === 'outsourcedlabor.com' && manifest.branch === 'main', 'manifest identity mismatch');
assert(manifest.entries.length >= 10 && manifest.entries.length >= manifest.minimum, 'count below minimum');
assert(new Set(manifest.entries.map(entry => entry.slug)).size === manifest.entries.length, 'duplicate slugs');
assert(manifest.entries.every(entry => entry.route === `/research/${entry.slug}`), 'family route mismatch');
assert(manifest.entries.every(entry => entry.sourcePath === 'app/fleet-content.ts' && fs.existsSync(entry.sourcePath)), 'source record missing');
assert(manifest.entries.every(entry => entry.sourceDateField === 'published' && entry.sourceDate === '2026-08-10'), 'source date mismatch');
assert(manifest.entries.every(entry => entry.renderedDate === '2026-08-10' && entry.renderedDateFields.includes('datePublished')), 'rendered date mismatch');
assert(route.includes('datePublished:post.published') && route.includes('article:published_time') && route.includes('alternates:{canonical'), 'route metadata mismatch');
assert(sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`)'), 'sitemap membership missing');
assert(source.includes('researchRun20260810b, ...researchRun20260810, ...researchRun, ...researchBatch, ...baseResearchPosts'), 'index is not newest-first');
assert(manifest.cleanBuildPassed && manifest.existingCompliancePassed && manifest.indexNewestFirstPassed, 'manifest validation flags incomplete');

for (const entry of manifest.entries) {
  assert(/^[0-9a-f]{40}$/.test(entry.introducedByCommit), 'invalid repair commit for ' + entry.slug);
  const parent = execFileSync('git', ['show', entry.introducedByCommit + '^:app/fleet-content.ts'], {encoding: 'utf8'});
  const introduced = execFileSync('git', ['show', entry.introducedByCommit + ':app/fleet-content.ts'], {encoding: 'utf8'});
  const datedTuple = new RegExp("\\['" + entry.slug + "',[^\\n]*,'2026-08-10'\\]");
  assert(!datedTuple.test(parent), 'dated source record existed before repair: ' + entry.slug);
  assert(datedTuple.test(introduced), 'exact dated tuple missing at repair: ' + entry.slug);
  const built = fs.readFileSync('.next/server/app' + entry.route + '.html', 'utf8');
  assert(built.includes('datePublished') && built.includes('article:published_time') && built.includes('2026-08-10'), 'rendered date missing: ' + entry.slug);
}

console.log(`PASS v6 research repair; entries=${manifest.entries.length}; manifestSha256=${crypto.createHash('sha256').update(fs.readFileSync(manifestPath)).digest('hex')}`);
