'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';

type TocItem={id:string;label:string;level:number};

const slugify=(value:string)=>value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g,'').replace(/\s+/g,'-').replace(/-+/g,'-');

export function EditorialNavigator({family}:{family:'blog'|'research'}){
  const pathname=usePathname();
  const [items,setItems]=useState<TocItem[]>([]);
  const [active,setActive]=useState('');
  const [mobileHost,setMobileHost]=useState<HTMLElement|null>(null);
  const [ctaHost,setCtaHost]=useState<HTMLElement|null>(null);
  const [footerVisible,setFooterVisible]=useState(false);
  const isDetail=pathname.split('/').filter(Boolean).length>1;

  useEffect(()=>{
    if(!isDetail)return;
    const article=document.querySelector('main article')||document.querySelector('main');
    if(!article)return;
    const headings=Array.from(article.querySelectorAll<HTMLElement>('h2, h3')).filter(heading=>!heading.closest('.editorial-navigator,.editorial-inline-cta'));
    const used=new Set<string>();
    const next=headings.map((heading,index)=>{
      let id=heading.id||slugify(heading.textContent||'')||`section-${index+1}`;
      const base=id; let suffix=2;
      while(used.has(id)||document.querySelectorAll(`#${CSS.escape(id)}`).length>1)id=`${base}-${suffix++}`;
      used.add(id); heading.id=id; heading.style.scrollMarginTop='92px';
      return {id,label:(heading.textContent||`Section ${index+1}`).trim(),level:Number(heading.tagName.slice(1))};
    });
    setItems(next);
    const mobile=document.createElement('div');
    mobile.className='editorial-mobile-host';
    const header=article.querySelector('header')||article.querySelector('h1')?.parentElement;
    if(header?.parentElement)header.insertAdjacentElement('afterend',mobile); else article.prepend(mobile);
    setMobileHost(mobile);
    const cta=document.createElement('div');
    cta.className='editorial-cta-host';
    const midpoint=headings[Math.max(0,Math.floor(headings.length/2)-1)];
    (midpoint?.parentElement||article).insertAdjacentElement('afterend',cta);
    setCtaHost(cta);
    const sectionObserver=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if(visible)setActive((visible.target as HTMLElement).id);
    },{rootMargin:'-96px 0px -65% 0px',threshold:[0,1]});
    headings.forEach(heading=>sectionObserver.observe(heading));
    const footer=document.querySelector('footer');
    const footerObserver=footer?new IntersectionObserver(entries=>setFooterVisible(entries[0].isIntersecting),{threshold:.01}):null;
    if(footer&&footerObserver)footerObserver.observe(footer);
    return()=>{sectionObserver.disconnect();footerObserver?.disconnect();mobile.remove();cta.remove()};
  },[isDetail,pathname]);

  if(!isDetail||!items.length)return null;
  const nav=<nav aria-label="Article table of contents"><ol>{items.map(item=><li key={item.id} className={`${item.level===3?'toc-subsection ':''}${active===item.id?'is-active':''}`}><a href={`#${item.id}`} aria-current={active===item.id?'location':undefined}>{item.label}</a></li>)}</ol></nav>;
  const related=family==='blog'?[['/services','Service briefs'],['/research','Operations research'],['/contact-us','Plan a work lane']]:[['/blog','Practical guides'],['/services','Related services'],['/contact-us','Discuss your workflow']];
  return <>
    <aside className={`editorial-navigator${footerVisible?' near-footer':''}`} aria-label="Article navigation"><p>On this page</p>{nav}<div className="editorial-support"><h2>Related reading</h2>{related.map(([href,label])=><a href={href} key={href}>{label}</a>)}<small>Published by Outsourced Labor, powered by StealthAgents.</small></div></aside>
    {mobileHost?createPortal(<details className="editorial-mobile-toc"><summary>On this page</summary>{nav}<div className="editorial-support">{related.map(([href,label])=><a href={href} key={href}>{label}</a>)}</div></details>,mobileHost):null}
    {ctaHost?createPortal(<aside className="editorial-inline-cta"><p>Need a controlled version of this workflow?</p><a href="/contact-us">Discuss this workflow</a></aside>,ctaHost):null}
  </>;
}
