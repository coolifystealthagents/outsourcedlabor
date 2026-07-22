import {notFound} from 'next/navigation';
import {Header,Footer,CTA,JsonLd} from '../../components';
import {fleetServices} from '../../fleet-content';
import {site} from '../../data';

export function generateStaticParams(){return fleetServices.map(s=>({slug:s.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=fleetServices.find(x=>x.slug===slug);
  if(!service)return {};
  const path=`/services/${service.slug}`;
  return {
    title:service.title,
    description:service.summary,
    alternates:{canonical:path},
    openGraph:{title:service.title,description:service.summary,url:path,type:'website'},
  };
}

export default async function ServicePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const service=fleetServices.find(x=>x.slug===slug);
  if(!service)notFound();
  const base=`https://${site.domain.toLowerCase()}`;
  const url=`${base}/services/${service.slug}`;
  const serviceId=`${url}#service`;
  const howToId=`${url}#launch-plan`;
  const schema={
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'Service',
        '@id':serviceId,
        name:service.title,
        description:service.summary,
        url,
        audience:{'@type':'BusinessAudience',audienceType:'Businesses planning recurring remote operations work'},
        serviceOutput:'Remote operations support provided by talent recruited and hired only in the Philippines',
        hasPart:{'@id':howToId},
      },
      {
        '@type':'HowTo',
        '@id':howToId,
        name:`How to launch ${service.title.toLowerCase()} support`,
        step:service.launch.map((text,index)=>({
          '@type':'HowToStep',
          position:index+1,
          name:`Step ${index+1}`,
          text,
          url:`${url}#launch-plan`,
        })),
      },
      {
        '@type':'BreadcrumbList',
        itemListElement:[
          {'@type':'ListItem',position:1,name:'Home',item:base},
          {'@type':'ListItem',position:2,name:'Services',item:`${base}/services`},
          {'@type':'ListItem',position:3,name:service.title,item:url},
        ],
      },
    ],
  };

  return <>
    <Header/>
    <main className="fleet-main">
      <JsonLd data={schema}/>
      <section className="fleet-hero"><div className="container">
        <p className="eyebrow">Philippines service</p>
        <h1>{service.title}</h1>
        <p className="lead">{service.summary}</p>
        <a className="btn primary" href="/contact">Discuss this service</a>
      </div></section>
      <section className="section"><div className="container fleet-detail-grid">
        <article><h2>Work this role can support</h2><ul>{service.tasks.map(x=><li key={x}>{x}</li>)}</ul></article>
        <article><h2>Controls to set first</h2><ul>{service.controls.map(x=><li key={x}>{x}</li>)}</ul></article>
        <article id="launch-plan"><h2>Practical launch plan</h2><ol>{service.launch.map(x=><li key={x}>{x}</li>)}</ol></article>
      </div></section>
      <CTA/>
    </main>
    <Footer/>
  </>;
}
