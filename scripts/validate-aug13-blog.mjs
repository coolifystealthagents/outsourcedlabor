import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug13-2026/blog.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/data.ts'), 'utf8');
const recordSource = fs.readFileSync(path.join(root, 'app/blog/aug13-blog-records.ts'), 'utf8');
const listing = fs.readFileSync(path.join(root, 'app/blog/blog-listing.tsx'), 'utf8');
const route = fs.readFileSync(path.join(root, 'app/blog/[slug]/page.tsx'), 'utf8');
const sitemap = fs.readFileSync(path.join(root, 'app/sitemap.xml/route.ts'), 'utf8');
if (manifest.requiredCount !== 22 || manifest.entries.length !== 22) throw new Error('count is not exactly 22');
if (new Set(manifest.entries.map((entry) => entry.slug)).size !== 22) throw new Error('duplicate slugs');
if ((!source.includes('const aug13BlogSlugs') || !recordSource.includes("updated: '2026-08-13'"))) throw new Error('batch date binding missing');
if (!source.includes('aug13BlogSlugs.has(slug) ? 3')) throw new Error('new batch ordering missing');
if (!route.includes('datePublished: detail.updated') || !route.includes('<time dateTime={detail.updated}>') || !route.includes("toLocaleDateString('en-US'")) throw new Error('date rendering wiring missing');
if (!sitemap.includes('...blogPosts.map(p=>`/blog/${p.slug}`)')) throw new Error('sitemap wiring missing');
const builtRoot = path.join(root, '.next/server/app/blog');
for (const entry of manifest.entries) {
  if (entry.route !== `/blog/${entry.slug}` || (!source.includes(`'${entry.slug}'`) && !recordSource.includes(`'${entry.slug}'`))) throw new Error(`source route missing: ${entry.slug}`);
  const built = fs.readFileSync(path.join(builtRoot, `${entry.slug}.html`), 'utf8');
  if (!built.includes('datePublished') || !built.includes('2026-08-13')) throw new Error(`structured date missing: ${entry.slug}`);
  if (!built.includes('<time dateTime="2026-08-13">')) throw new Error(`visible date missing: ${entry.slug}`);
  if (!built.includes(`canonical" href="https://outsourcedlabor.com${entry.route}`)) throw new Error(`canonical missing: ${entry.slug}`);
}
const indexFiles = [path.join(builtRoot, 'page.html'), ...fs.readdirSync(path.join(builtRoot, 'page')).filter((file) => file.endsWith('.html')).map((file) => path.join(builtRoot, 'page', file))];
const indexHtml = indexFiles.filter(fs.existsSync).map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const listed = [...indexHtml.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((match) => match[1]);
const firstBatch = listed.filter((slug) => manifest.entries.some((entry) => entry.slug === slug)).slice(0, 22);
if (firstBatch.join('|') !== manifest.entries.map((entry) => entry.slug).join('|')) throw new Error('August 13 batch is not first and deterministic');
if (!listing.includes('PAGE_SIZE=20')) throw new Error('pagination size wiring missing');
console.log('PASS: exactly 22 August 13 Blog routes, direct date binding, visible and structured dates, sitemap, pagination ordering, and production loader checks');
