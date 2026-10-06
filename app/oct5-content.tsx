import fs from 'node:fs';
import path from 'node:path';
import type {Metadata} from 'next';
import {CTA,Footer,Header,JsonLd} from './components';
import {oct5BlogTopics,oct5Services} from './oct5-records';

const site='https://outsourcedlabor.com';
// Reconcile immediately before the sole production push if UTC has crossed into another date.
export const oct5PublicationDate='2026-10-06';
const visibleDate='Published: October 6, 2026';
const titles=Object.fromEntries(oct5BlogTopics.map(([slug,title])=>[slug,title])) as Record<string,string>;
export const oct5BlogSlugs=new Set(oct5BlogTopics.map(([slug])=>slug));

type Section={heading:string;paragraphs:string[]};
type Parsed={title:string;intro:string[];sections:Section[];sources:string[]};
function sourcePath(slug:string){return path.join(process.cwd(),'content','blog',`${slug}.md`)}
function parse(slug:string):Parsed{
  const raw=fs.readFileSync(sourcePath(slug),'utf8').trim();
  const [article,sourceBlock='']=raw.split('\nSources checked for this draft:\n');
  const lines=article.split('\n');
  const title=lines.shift()?.replace(/^# /,'')||titles[slug];
  const intro:string[]=[];const sections:Section[]=[];let current:Section|undefined;let buffer:string[]=[];
  const flush=()=>{const value=buffer.join(' ').trim();if(value)(current?current.paragraphs:intro).push(value);buffer=[]};
  for(const line of lines){if(line.startsWith('## ')){flush();current={heading:line.slice(3),paragraphs:[]};sections.push(current)}else if(!line.trim())flush();else buffer.push(line.trim())}flush();
  const sources=sourceBlock.split('\n').map(x=>x.match(/https?:\/\/\S+/)?.[0]).filter((x):x is string=>Boolean(x));
  return {title,intro,sections,sources};
}
function inline(text:string){const parts=text.split(/(\[[^\]]+\]\([^)]+\))/g);return parts.map((part,index)=>{const match=part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);return match?<a href={match[2]} key={index}>{match[1]}</a>:part})}
export function getOct5BlogMetadata(slug:string):Metadata{const title=titles[slug],canonical=`${site}/blog/${slug}`,description=`A practical guide to ${title.toLowerCase()}, with evidence boundaries and review checks.`;return{title,description,alternates:{canonical},openGraph:{title,description,url:canonical,type:'article',publishedTime:oct5PublicationDate,images:[{url:'/filipino-operations-specialist.svg',alt:'Operations specialist reviewing a controlled work queue'}]}}}
export function renderOct5BlogArticle(slug:string){const article=parse(slug),canonical=`${site}/blog/${slug}`,description=`A practical guide to ${article.title.toLowerCase()}, with evidence boundaries and review checks.`,schema={'@context':'https://schema.org','@type':'Article',headline:article.title,description,datePublished:oct5PublicationDate,mainEntityOfPage:canonical,image:`${site}/filipino-operations-specialist.svg`,author:{'@type':'Organization',name:'Outsourced Labor',url:site},publisher:{'@type':'Organization',name:'Outsourced Labor',url:site},citation:article.sources};return <><Header/><main className="article-page"><JsonLd data={schema}/><article className="container article-shell"><header className="article-header"><p className="eyebrow">Philippines staffing operations guide</p><h1>{article.title}</h1><p className="lead">{description}</p><div className="article-meta"><span>10 min read</span><time dateTime={oct5PublicationDate}>{visibleDate}</time></div><img src="/filipino-operations-specialist.svg" alt="Operations specialist reviewing a controlled work queue" width="1200" height="630"/></header><div className="article-body">{article.intro.map((p,i)=><p key={`intro-${i}`}>{inline(p)}</p>)}{article.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((p,i)=><p key={i}>{inline(p)}</p>)}</section>)}<p>For a scoped next step, review <a href={`/services/${oct5Services[slug]}`}>{oct5Services[slug].replaceAll('-',' ')}</a> or <a href="/contact-us">contact Outsourced Labor</a>. Keep consequential approvals with the accountable client owner.</p></div><section className="source-list"><h2>Authoritative references</h2><ol>{article.sources.map(url=><li key={url}><a href={url} target="_blank" rel="noreferrer">{url}</a></li>)}</ol></section></article><CTA/></main><Footer/></>}
