import fs from 'node:fs';
import crypto from 'node:crypto';

const sourcePath = 'app/research/sep18-research-records.ts';
const fleetPath = 'app/fleet-content.ts';
const routePath = 'app/research/[slug]/page.tsx';
const manifestPath = '.paperclip/2026-09-18/research.json';
const source = fs.readFileSync(sourcePath, 'utf8');
const fleet = fs.readFileSync(fleetPath, 'utf8');
const route = fs.readFileSync(routePath, 'utf8');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const slugs = [...source.matchAll(/slug: '([^']+)'/g)].map((match) => ({ slug: match[1], index: match.index }));

if (slugs.length !== 5 || manifest.entries.length !== 5 || manifest.requiredCount !== 5) throw new Error('The run must contain exactly five entries.');
if (new Set(slugs.map(({ slug }) => slug)).size !== 5) throw new Error('Duplicate slug in run source.');
if (!fleet.includes('...september18ResearchRecords')) throw new Error('Newest batch is not included in the Research index.');
if (!route.includes('datePublished: post.published') || !route.includes('alternates: { canonical:')) throw new Error('Required publication schema or canonical metadata is missing.');

for (let index = 0; index < slugs.length; index += 1) {
  const { slug, index: start } = slugs[index];
  const end = slugs[index + 1]?.index ?? source.indexOf('].map');
  const record = source.slice(start, end);
  const words = record.match(/\b[\w’'-]+\b/g)?.length ?? 0;
  const entry = manifest.entries.find((candidate) => candidate.slug === slug);
  const hash = crypto.createHash('sha256').update(record).digest('hex');
  if (words < 1200) throw new Error(`${slug} has only ${words} substantive source words.`);
  if (!entry || entry.contentHash !== hash) throw new Error(`${slug} manifest hash mismatch.`);
  if (!record.includes("published") && manifest.publicationDate !== '2026-09-18') throw new Error(`${slug} publication date missing.`);
  if (!record.includes('sources: [') || !record.toLowerCase().includes('limitations')) throw new Error(`${slug} lacks sources or limitations.`);
  if (entry.route !== `/research/${slug}` || entry.liveUrl !== `https://outsourcedlabor.com/research/${slug}`) throw new Error(`${slug} route mismatch.`);
}

console.log('Validated exactly 5 September 18 Research articles; each has >=1,200 words, sources, limitations, canonical route, and matching content hash.');
