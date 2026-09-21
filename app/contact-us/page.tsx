import type { Metadata } from "next";
import { Header, Footer } from "../components";
import { site, services } from "../data";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";


const pageUrl = "https://outsourcedlabor.com/contact-us";
const prep = [
  "The repeatable work and finished examples",
  "Tools, hours, permissions, and access limits",
  "Approval owners, exceptions, and review cadence",
];


export const metadata: Metadata = {
  title: "Contact Outsourced Labor | Plan a Philippines Staffing Role",
  description: "Plan outsourced labor around documented tasks, controlled access, clear approvals, and measurable handoffs.",
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title: "Contact Outsourced Labor", description: "Scope a reliable Philippines-based support role.", url: pageUrl, type: "website" },
};


export default function ContactUsPage() {
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.shellGrid}>
      <div><p className={styles.eyebrow}>Build a controlled staffing lane</p><h1>Turn recurring work into a role your team can manage.</h1><p className={styles.lead}>Share the tasks, systems, schedule, and decisions involved. We’ll prepare a focused conversation about Philippines-based support with ownership and review built in.</p><div className={styles.checks}>{prep.map(item => <span key={item}>✓ {item}</span>)}</div><a className={styles.powered} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div>
      <div id="consultation-form"><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
    </div></section>
    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>A useful first conversation</p><h2>Bring the work, not a vague job title.</h2><div className={styles.cards}>{prep.map((item, index) => <article key={item}><b>0{index + 1}</b><h3>{item}</h3><p>Specific examples make the role easier to scope, train, review, and expand safely.</p></article>)}</div></div></section>
    <section className={`${styles.section} ${styles.soft}`}><div className={styles.shellGrid}><div><p className={styles.kicker}>Role design</p><h2>Choose one dependable work lane first.</h2><p className={styles.sub}>Start with repeatable work that already has examples and a named reviewer. Keep spending, policy, customer promises, and sensitive decisions with your owner.</p><a className={styles.textLink} href="#consultation-form">Plan my staffing role →</a></div><div className={styles.tags}>{services.map(service => <span key={service.slug}>{service.title}</span>)}</div></div></section>
    <section className={`${styles.section} ${styles.about}`}><div className={styles.shellGrid}><img src={site.serviceImage} alt={site.alt}/><div><p className={styles.kicker}>The team behind the intake</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><a className={styles.textLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a></div></div></section>
    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>A safer launch</p><h2>Clarity before access expands.</h2><div className={styles.cards}><article><h3>Documented scope</h3><p>Define inputs, outputs, due times, and the result that counts as complete.</p></article><article><h3>Minimum access</h3><p>Open only the systems and records required for the approved work lane.</p></article><article><h3>Owner review</h3><p>Check early work and exceptions before adding new responsibilities.</p></article></div></div></section>
    <section className={styles.final}><div className={styles.shell}><h2>Ready to build a clearer support role?</h2><p>Share the workflow, schedule, systems, and approval limits you need covered.</p><a href="#consultation-form">Book a free consultation</a></div></section>
  </main><Footer/></>;
}

