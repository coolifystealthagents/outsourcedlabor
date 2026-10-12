import fs from 'node:fs';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';

const fail=message=>{throw new Error(message)};
const read=file=>fs.readFileSync(file,'utf8');
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const recordSource=read('app/oct12-records.ts');
const contentSource=read('app/oct12-content.tsx');
const researchSource=read('app/research/oct12-research-records.ts');
const blogs=JSON.parse(recordSource.match(/oct12BlogPosts=([\s\S]*?) as const;/)?.[1]??fail('cannot parse Blog records'));
const articles=JSON.parse(contentSource.match(/const articles=([\s\S]*?) as const;/)?.[1]??fail('cannot parse Blog articles'));
const research=JSON.parse(researchSource.match(/october12ResearchRecords:readonly Record\[]=([\s\S]*?);\n$/)?.[1]??fail('cannot parse Research records'));
if(manifest.site!=='OutsourcedLabor.com'||manifest.publicationDate!=='2026-10-12')fail('site/date mismatch');
if(blogs.length!==12||Object.keys(articles).length!==12||research.length!==5||manifest.entries.length!==17||manifest.blogCount!==12||manifest.researchCount!==5)fail('expected exactly 12 Blog and 5 Research');
const all=[...blogs.map(x=>({...x,type:'Blog',article:articles[x.slug]})),...research.map(x=>({...x,type:'Research',article:x}))];
if(all.some(x=>!x.article))fail('Blog registry item missing article');
if(new Set(all.map(x=>x.slug)).size!==17||new Set(all.map(x=>x.title)).size!==17)fail('title or slug duplicate');
if(all.some(x=>/\b(?:2026|oct(?:ober)?\s+12|10[-/]12)\b/i.test(x.title)))fail('date found in title');
for(const item of all){
  const published=item.type==='Blog'?item.publicationDate:item.published;
  if(published!=='2026-10-12'||(item.type==='Research'&&item.updated!=='2026-10-12'))fail(`date mismatch: ${item.slug}`);
  const record=manifest.entries.find(x=>x.slug===item.slug&&x.title===item.title&&x.type===item.type);
  const floor=item.type==='Blog'?1300:1150;
  if(!record||record.words<floor)fail(`manifest or word floor failed: ${item.slug} (${record?.words})`);
  if(record.route!==`/${item.type.toLowerCase()}/${item.slug}`)fail(`route mismatch: ${item.slug}`);
  const svg=read(`public${record.thumbnail}`);
  const escaped=item.title.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
  if(!svg.includes('width="1200" height="630"')||!svg.includes(`<title id="title">${escaped}</title>`))fail(`exact-title SVG contract failed: ${item.slug}`);
  let prior='';try{prior=execFileSync('git',['grep','-F',item.slug,'HEAD','--','app','content'],{encoding:'utf8'});}catch{}
  if(prior.trim())fail(`slug collision with HEAD: ${item.slug}`);
}
const allowed=new Set(['www.nist.gov','csrc.nist.gov','www.gao.gov','www.dol.gov','www.cisa.gov','www.ftc.gov','privacy.gov.ph','www.iso.org','legalinstruments.oecd.org']);
for(const item of research){
  if(item.sources.length!==10)fail(`Research must have exactly 10 sources: ${item.slug}`);
  for(const source of item.sources){const url=new URL(source.url);if(url.protocol!=='https:'||!allowed.has(url.hostname))fail(`source is not authoritative HTTPS: ${source.url}`);}
  if(item.related.length<3||!item.service||item.faqs.length<2)fail(`Research sidebar/related depth missing: ${item.slug}`);
}
const data=read('app/data.ts'),fleet=read('app/fleet-content.ts'),blogRoute=read('app/blog/[slug]/page.tsx'),blogIndex=read('app/blog/blog-listing.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),researchIndex=read('app/research/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
if(!data.includes('...oct12BlogPosts')||!data.includes('october12Rank')||!fleet.includes('...october12ResearchRecords'))fail('registry or newest ordering missing');
if(!blogRoute.includes('oct12BlogSlugs')||!blogRoute.includes('renderOct12BlogArticle')||!contentSource.includes('Published: October 12, 2026')||!blogIndex.includes('Published{" "}')||!blogIndex.includes('<time dateTime={published}>'))fail('Blog route/index/date missing');
if(!researchRoute.includes('formatPublicDate(post.published)')||!researchIndex.includes('<time dateTime={p.published}>'))fail('Research route/index/date missing');
if(!contentSource.includes('Bounded service handoff')||!contentSource.includes('Related October 12 guides'))fail('Blog sidebar/related behavior missing');
if(!researchRoute.includes('post.service')||!researchRoute.includes('Related research'))fail('Research sidebar/related behavior missing');
if(!sitemap.includes('...blogPosts.map')||!sitemap.includes('...researchPosts.map'))fail('sitemap registry routes missing');
const paragraphs=[];
for(const [slug,article] of Object.entries(articles))for(const section of article.sections)for(const raw of section.paragraphs){const normalized=raw.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normalized.split(' ').length>=20)paragraphs.push({slug,raw,normalized});}
for(const item of research)for(const raw of item.body.filter(x=>!x.startsWith('Section:'))){const normalized=raw.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(normalized.split(' ').length>=20)paragraphs.push({slug:item.slug,raw,normalized});}
const seen=new Map();for(const p of paragraphs){if(seen.has(p.normalized))fail(`duplicate substantive paragraph: ${seen.get(p.normalized)} and ${p.slug}`);seen.set(p.normalized,p.slug);}
for(const p of paragraphs){let prior='';try{prior=execFileSync('git',['grep','-F',p.raw,'HEAD','--','app','content'],{encoding:'utf8',maxBuffer:1024*1024});}catch{}if(prior.trim())fail(`paragraph duplicates HEAD: ${p.slug}`);}
const hashes=manifest.entries.map(e=>crypto.createHash('sha256').update(fs.readFileSync(`public${e.thumbnail}`)).digest('hex'));
if(new Set(hashes).size!==17)fail('thumbnails are not 17 unique images');
console.log(JSON.stringify({status:'PASS',date:'2026-10-12',blog:12,research:5,minBlogWords:Math.min(...manifest.entries.filter(x=>x.type==='Blog').map(x=>x.words)),minResearchWords:Math.min(...manifest.entries.filter(x=>x.type==='Research').map(x=>x.words)),sourcesPerResearch:10,uniqueExactTitleSvgs:17,dimensions:'1200x630',visibleDates:true,separateSystems:true,duplicateSubstantiveParagraphs:0,headCollisions:0},null,2));
