import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { TestimonialsRail } from '../booking-components';
import { services } from '../data';
import StandardContactForm from './StandardContactForm';
import styles from './contact.module.css';

const pageUrl = 'https://outsourcedlabor.com/contact-us';
const prep = [
  'A sample of the recurring work and a finished example',
  'The tools, working hours, permissions, and access limits',
  'The owner for approvals, exceptions, and quality review',
];

export const metadata: Metadata = {
  title: 'Contact Outsourced Labor | Plan a Philippines Staffing Role',
  description: 'Plan outsourced labor around documented tasks, controlled access, clear approvals, and measurable handoffs.',
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title: 'Contact Outsourced Labor', description: 'Scope a reliable Philippines-based support role.', url: pageUrl, type: 'website' },
};

export default function ContactUsPage() {
  return <><Header/><main id="main-content" className={styles.page}>
    <section className={styles.hero} aria-labelledby="contact-title"><div className={styles.heroGrid}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Build a controlled staffing lane</p>
        <h1 id="contact-title">Turn recurring work into a role your team can manage.</h1>
        <p className={styles.lead}>Share the tasks, systems, schedule, and decisions involved. We will prepare a focused conversation about Philippines-based support with ownership and review built in.</p>
        <div className={styles.checks}>{prep.map(item => <span key={item}>✓ {item}</span>)}</div>
        <TestimonialsRail contact/>
      </div>
      <div id="consultation-form" className={styles.formWrap}><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
    </div></section>

    <section className={styles.team} aria-labelledby="team-title"><div className={styles.teamGrid}>
      <figure className={styles.teamFigure}>
        <img src="/brand/stealth-agents-team-bacolod.jpg" width="1600" height="1067" alt="Stealth Agents operations team together in the Bacolod office"/>
        <figcaption><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="StealthAgents"/><strong>Official team, Bacolod</strong></figcaption>
      </figure>
      <div><p className={styles.kicker}>Managed operations partner</p><h2 id="team-title">Stealth Agents supports the people and operating structure behind your role.</h2><p>Outsourced Labor helps you define the work lane. Stealth Agents is the parent company and managed-service team that supports recruiting, onboarding, account coordination, and ongoing staffing operations.</p><p>Your company still owns policy, access, approvals, customer promises, and final decisions. That separation keeps the role useful without blurring responsibility.</p><a className={styles.textLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Learn about Stealth Agents</a></div>
    </div></section>

    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>A useful first conversation</p><h2>Bring the work, not a vague job title.</h2><div className={styles.prepList}>{prep.map(item => <article key={item}><h3>{item}</h3><p>Specific examples make the role easier to scope, train, review, and expand safely.</p></article>)}</div></div></section>

    <section className={styles.scope}><div className={styles.scopeGrid}><div><p className={styles.kicker}>Role design</p><h2>Choose one dependable work lane first.</h2><p>Start with repeatable work that already has examples and a named reviewer. Keep spending, policy, customer promises, and sensitive decisions with your owner.</p><a className={styles.textLink} href="#consultation-form">Plan my staffing role</a></div><div className={styles.tags}>{services.map(service => <span key={service.slug}>{service.title}</span>)}</div></div></section>

    <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>A safer launch</p><h2>Clarity before access expands.</h2><div className={styles.controls}><article><h3>Documented scope</h3><p>Define inputs, outputs, due times, and the result that counts as complete.</p></article><article><h3>Minimum access</h3><p>Open only the systems and records required for the approved work lane.</p></article><article><h3>Owner review</h3><p>Check early work and exceptions before adding new responsibilities.</p></article></div></div></section>

    <section className={styles.final}><div className={styles.shell}><h2>Ready to build a clearer support role?</h2><p>Share the workflow, schedule, systems, and approval limits you need covered.</p><a href="#consultation-form">Book a free consultation</a></div></section>
  </main><Footer/></>;
}
