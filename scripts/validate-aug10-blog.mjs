import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const manifestPath = path.join(root, '.paperclip/aug10-2026/blog.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const routeSource = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
const buildDir = path.join(root, '.next/server/app/blog');
const introducingCommit = 'f96fa31ce047542429d08d735b086430d2cb5eb1';
const before = execFileSync('git', ['show', `${introducingCommit}^:app/data.ts`], { cwd: root, encoding: 'utf8' });
const introduced = execFileSync('git', ['show', `${introducingCommit}:app/data.ts`], { cwd: root, encoding: 'utf8' });

if (manifest.entries.length < 22) throw new Error('accepted count is below 22');
if (manifest.entries.length !== new Set(manifest.entries.map((entry) => entry.slug)).size) throw new Error('duplicate slugs');
const positions = manifest.entries.map((entry) => source.indexOf(`'${entry.slug}'`));
for (const [index, entry] of manifest.entries.entries()) {
  if (!/^\/blog\/[a-z0-9-]+$/.test(entry.route) || entry.route !== `/blog/${entry.slug}`) throw new Error(`bad route: ${entry.slug}`);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'blogDetails[slug].updated') throw new Error(`bad source mapping: ${entry.slug}`);
  if (!source.includes(`'${entry.slug}'`) && !source.includes(`"${entry.slug}"`)) throw new Error(`missing source record: ${entry.slug}`);
  if (entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`bad date: ${entry.slug}`);
  if (!entry.renderedDateFields.includes('datePublished') || !entry.renderedDateFields.includes('time[datetime]')) throw new Error(`missing rendered date fields: ${entry.slug}`);
  if (entry.renderedDateFields.length !== 2) throw new Error(`unexpected rendered fields: ${entry.slug}`);
  if (!sitemap.includes("...blogPosts.map(p=>`/blog/${p.slug}`)")) throw new Error('blog sitemap route is not eligible');
  if (!/^f96fa31ce047542429d08d735b086430d2cb5eb1$/.test(entry.introducedByCommit)) throw new Error(`unexpected provenance: ${entry.slug}`);
  if (before.includes(`'${entry.slug}'`) || before.includes(`"${entry.slug}"`) || !introduced.includes(`'${entry.slug}'`)) throw new Error(`bad absent-before/present-after proof: ${entry.slug}`);
  if (index > 0 && positions[index] < 0) throw new Error(`untraceable slug: ${entry.slug}`);

  const builtPath = path.join(buildDir, `${entry.slug}.html`);
  if (!fs.existsSync(builtPath)) throw new Error(`missing built route: ${entry.slug}`);
  const built = fs.readFileSync(builtPath, 'utf8');
  if (!built.includes(`datePublished\\\":\\\"2026-08-10`) && !built.includes('datePublished":"2026-08-10')) throw new Error(`missing built JSON-LD date: ${entry.slug}`);
  if (!built.includes('<time dateTime="2026-08-10">')) throw new Error(`missing built visible date: ${entry.slug}`);
  if (!built.includes(`<link rel="canonical" href="https://outsourcedlabor.com${entry.route}"`)) throw new Error(`missing built canonical: ${entry.slug}`);
}
if (!routeSource.includes("datePublished: detail.updated") || !routeSource.includes('<time dateTime={detail.updated}>Updated {detail.updated}</time>')) throw new Error('rendered date wiring missing');
if (!source.includes('export const blogPosts = [...allBlogPosts].sort')) throw new Error('index newest-first wiring missing');
const firstAug10 = source.indexOf("'philippines-virtual-assistant-task-priorities'");
if (firstAug10 < 0) throw new Error('August 10 source set missing');
const builtIndexPaths = [path.join(buildDir, 'page.html')];
const builtPageDir = path.join(buildDir, 'page');
if (fs.existsSync(builtPageDir)) {
  builtIndexPaths.push(...fs.readdirSync(builtPageDir).filter((file) => file.endsWith('.html')).map((file) => path.join(builtPageDir, file)));
}
const existingIndexPaths = builtIndexPaths.filter((file) => fs.existsSync(file));
if (!existingIndexPaths.length) throw new Error('missing built blog index');
const builtIndex = existingIndexPaths.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const accepted = new Set(manifest.entries.map((entry) => entry.slug));
const listed = [...builtIndex.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((match) => match[1]).filter((slug) => accepted.has(slug));
const listedUnique = [...new Set(listed)];
if (listedUnique.length < manifest.entries.length || listedUnique.slice(0, manifest.entries.length).join('|') !== manifest.entries.map((entry) => entry.slug).join('|')) throw new Error('built blog index is not newest-first for accepted set');
console.log(`PASS: ${manifest.entries.length} Blog entries, source/rendered date wiring, canonical sitemap eligibility, and manifest provenance checks`);
