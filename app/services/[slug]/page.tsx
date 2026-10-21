import { notFound } from 'next/navigation';
import { CTA, Footer, Header, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';
import { serviceDetails } from '../../service-details';
import { site } from '../../data';

export function generateStaticParams(){return fleetServices.map(service=>({slug:service.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=fleetServices.find(item=>item.slug===slug);
  const detail=serviceDetails[slug];
  if(!service||!detail)return {};
  const path=`/services/${service.slug}`;
  return {title:service.title,description:service.summary,alternates:{canonical:path},openGraph:{title:service.title,description:service.summary,url:path,type:'website',images:[{url:detail.image,alt:detail.imageAlt}]}};
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=fleetServices.find(item=>item.slug===slug);
  const detail=serviceDetails[slug];
  if(!service||!detail)notFound();
  const base=`https://${site.domain.toLowerCase()}`;
  const url=`${base}/services/${service.slug}`;
  const related=detail.related.map(relatedSlug=>fleetServices.find(item=>item.slug===relatedSlug)).filter((item):item is (typeof fleetServices)[number]=>Boolean(item));
  const schema={'@context':'https://schema.org','@graph':[
    {'@type':'Service','@id':`${url}#service`,name:service.title,description:service.summary,url,image:`${base}${detail.image}`,audience:{'@type':'BusinessAudience',audienceType:detail.audience},serviceOutput:detail.outcomes},
    {'@type':'HowTo','@id':`${url}#launch-plan`,name:`How to launch ${service.title.toLowerCase()} support`,step:service.launch.map((text,index)=>({'@type':'HowToStep',position:index+1,name:text,text,url:`${url}#launch-plan`}))},
    {'@type':'FAQPage',mainEntity:detail.faqs.map(faq=>({'@type':'Question',name:faq.q,acceptedAnswer:{'@type':'Answer',text:faq.a}}))},
    {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:base},{'@type':'ListItem',position:2,name:'Services',item:`${base}/services`},{'@type':'ListItem',position:3,name:service.title,item:url}]}
  ]};

  return <><Header/><main id="main-content" className="fleet-main service-manual">
    <JsonLd data={schema}/>
    <section className="service-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Philippines operations service</p><h1>{service.title}</h1><p className="lead">{service.summary}</p><p className="service-audience"><strong>Best suited for:</strong> {detail.audience}</p><a className="btn primary" href="/contact-us">Discuss this service</a></div><figure><img src={detail.image} width="1200" height="630" alt={detail.imageAlt}/><figcaption>Operational brief: {service.title}</figcaption></figure></div></section>

    <section className="section"><div className="container service-opening"><div><p className="eyebrow">The operating problem</p><h2>Why this work needs a defined lane</h2></div><p>{detail.problem}</p></div></section>

    <section className="section service-ledger"><div className="container service-ledger-grid">
      <article><h2>Inputs your team provides</h2><ul>{detail.inputs.map(item=><li key={item}>{item}</li>)}</ul></article>
      <article><h2>Work in scope</h2><ul>{service.tasks.map(item=><li key={item}>{item}</li>)}</ul></article>
      <article><h2>Outputs you can review</h2><ul>{detail.outcomes.map(item=><li key={item}>{item}</li>)}</ul></article>
    </div></section>

    <section className="section"><div className="container service-two-column">
      <div><p className="eyebrow">Working boundaries</p><h2>Routine execution stays separate from owner decisions.</h2><p>The specialist can process documented work, maintain records, prepare communications, and surface exceptions. Your manager retains authority for policy, money, sensitive access, employment decisions, unusual promises, and any exception outside the written rule.</p><h3>Controls to set before access opens</h3><ul>{service.controls.map(item=><li key={item}>{item}</li>)}</ul></div>
      <aside><h2>Quality controls</h2><ul>{detail.quality.map(item=><li key={item}>{item}</li>)}</ul><p>Start with a small sample and review errors while the source evidence is still available. Expand only after the same standards produce repeatable results.</p></aside>
    </div></section>

    <section className="section service-scenarios"><div className="container"><p className="eyebrow">Common starting scenarios</p><h2>Recognizable work, with the exception line already visible</h2><div className="scenario-list">{detail.scenarios.map(item=><article key={item}><h3>{item}</h3><p>The specialist follows the approved source, records the outcome, and stops for review when the decision exceeds the defined authority.</p></article>)}</div></div></section>

    <section className="section" id="launch-plan"><div className="container service-launch"><div><p className="eyebrow">Launch workflow</p><h2>Move from examples to a controlled queue.</h2></div><ol>{service.launch.map(item=><li key={item}><h3>{item}</h3><p>Record what was used, what was completed, and what still requires an owner.</p></li>)}</ol></div></section>

    <section className="section"><div className="container service-faq"><p className="eyebrow">Decision support</p><h2>{service.title} FAQ</h2>{detail.faqs.map(faq=><details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>

    <section className="section related-services"><div className="container"><p className="eyebrow">Connected work lanes</p><h2>Related services</h2><div>{related.map(item=><a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.summary}</p></a>)}</div></div></section>
    <CTA/>
  </main><Footer/></>;
}
