import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'Consultation Booked | What Happens Next',
  description: 'Your consultation with the Stealth Agents team is booked. Review what to prepare before the conversation.',
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage(){return <><Header/><main id="main-content" className="confirmation-page"><section className="confirmation-card"><img src="/logo.svg" width="72" height="72" alt="Outsourced Labor logo"/><p className="eyebrow">Consultation confirmed</p><h1>Your conversation is booked.</h1><p className="lead">Thank you for scheduling time with the Stealth Agents team. Your confirmation and calendar details will arrive through the booking system.</p><div className="confirmation-next"><h2>What happens next</h2><p>Prepare the following items before the call:</p><ul><li>One recurring work queue you want to hand off</li><li>A recent example of the finished work</li><li>The tools, schedule, and access limits involved</li><li>The decisions and exceptions your manager will keep</li></ul></div><div className="confirmation-actions"><a className="btn primary" href="/services">Review service lanes</a><a className="btn" href="/">Return home</a></div></section></main><Footer/></>}
