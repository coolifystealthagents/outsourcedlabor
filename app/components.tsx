import * as data from './data';
import { SiteNavigation } from './site-navigation';

const site=(data as any).site||{};
const domain=site.domain||'OutsourcedLabor.com';
const year=new Date().getFullYear();

export function JsonLd({data}:{data:any}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}

export function LogoMark(){return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Outsourced Labor" width="42" height="42"/><span className="logo-name">{site.brand||'Outsourced Labor'}</span></span>}

export function ParentBrandMark({compact=false}:{compact?:boolean}){return <span className={`parent-brand${compact?' compact':''}`}><span>Powered by</span><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="StealthAgents"/></span>}

export function CTA(){return <section className="final-cta"><p className="eyebrow">Philippines staffing</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to shape a practical Philippines staffing request.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>}

export {RefreshHeader as Header,RefreshFooter as Footer} from './refresh-experience';
