import * as data from './data';
import { SiteNavigation } from './site-navigation';

const site=(data as any).site||{};
const domain=site.domain||'OutsourcedLabor.com';
const year=new Date().getFullYear();

export function JsonLd({data}:{data:any}){return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>}

export function LogoMark(){return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Outsourced Labor" width="42" height="42"/><span className="logo-name">{site.brand||'Outsourced Labor'}</span></span>}

export function ParentBrandMark({compact=false}:{compact?:boolean}){return <span className={`parent-brand${compact?' compact':''}`}><span>Powered by</span><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="StealthAgents"/></span>}

export function Header(){return <><a className="skip-link" href="#main-content">Skip to main content</a><header className="nav fleet-nav"><div className="nav-inner"><a className="logo" href="/" aria-label="Outsourced Labor home"><LogoMark/></a><a className="header-parent" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents"><ParentBrandMark compact/></a><SiteNavigation/></div></header></>}

export function Footer(){return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/"><LogoMark/></a><p>{site.brand||'Outsourced Labor'} helps businesses define Philippines-based operations roles with clear inputs, authority limits, and review paths.</p><a className="footer-parent" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer"><ParentBrandMark/></a></div><div><h2>Explore</h2><div className="footer-links"><a href="/services">Services</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/research">Research</a></div></div><div><h2>Company</h2><div className="footer-links"><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand||'Outsourced Labor'}. All rights reserved.</span><span>{domain}</span></div></footer>}

export function CTA(){return <section className="final-cta"><p className="eyebrow">Philippines staffing</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to shape a practical Philippines staffing request.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>}
