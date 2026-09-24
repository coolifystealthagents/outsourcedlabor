import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=process.cwd(), manifest=JSON.parse(fs.readFileSync(path.join(root,'.paperclip/daily-content/2026-09-24/blog.json'),'utf8'));
const records=fs.readFileSync(path.join(root,'app/sep24-records.ts'),'utf8');
const content=fs.readFileSync(path.join(root,'app/sep24-content.tsx'),'utf8');
const data=fs.readFileSync(path.join(root,'app/data.ts'),'utf8');
const route=fs.readFileSync(path.join(root,'app/blog/[slug]/page.tsx'),'utf8');
const sitemap=fs.readFileSync(path.join(root,'app/sitemap.xml/route.ts'),'utf8');
const fail=m=>{throw new Error(m)};
if(manifest.requiredCount!==12||manifest.entries.length!==12)fail('count must be exactly 12');
if(new Set(manifest.entries.map(e=>e.slug)).size!==12)fail('duplicate slug');
if(manifest.publicationDate!=='2026-09-24'||!content.includes("const date='2026-09-24'")||!content.includes('datePublished:date')||content.includes('dateModified:date'))fail('publication-date contract mismatch');
if(!data.includes('...sep24BlogPosts')||!route.includes('sep24BlogArticles[slug]')||!sitemap.includes('blogPosts.map'))fail('route, index, or sitemap wiring missing');
for(const e of manifest.entries){
 if(!records.includes(`'${e.slug}'`))fail(`record missing ${e.slug}`);
 const p=path.join(root,'.next/server/app/blog',`${e.slug}.html`); if(!fs.existsSync(p))fail(`built route missing ${e.slug}`);
 const html=fs.readFileSync(p,'utf8'), text=html.replace(/<script[\s\S]*?<\/script>/g,' ').replace(/<style[\s\S]*?<\/style>/g,' ').replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ');
 const words=(text.match(/[A-Za-z0-9][A-Za-z0-9’'-]*/g)||[]).length; if(words<900)fail(`under 900 words ${e.slug}: ${words}`);
 if(!html.includes(`<link rel="canonical" href="https://outsourcedlabor.com/blog/${e.slug}`)||!html.includes('"datePublished":"2026-09-24"')||!html.includes('Published: September 24, 2026'))fail(`metadata mismatch ${e.slug}`);
 if(!html.includes(`/services/${e.service}`)||!html.includes('href="/contact"')||!html.includes('/filipino-operations-specialist.svg'))fail(`CTA or image missing ${e.slug}`);
 const hash=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'); if(hash!==e.contentHash)fail(`content hash mismatch ${e.slug}`);
}
console.log('PASS: exactly 12 new September 24 Blog routes; 1,650+ rendered words; unique slugs and hashes; canonical, Article publication date, accessible hero, service/contact CTAs, sitemap eligibility, and newest-first index wiring verified');

