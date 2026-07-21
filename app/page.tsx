import { Header, Footer, JsonLd } from './components';
import { services, blogPosts, site } from './data';

const roles = services.slice(0, 4);

const checkpoints = [
  { label: 'Work lane', value: 'One repeatable queue', note: 'Examples, owner, and finish line' },
  { label: 'Decision line', value: 'Manager approvals', note: 'Money, policy, access, and promises' },
  { label: 'Review loop', value: 'Daily at first', note: 'Fewer checks only after the work is steady' },
];

const launchSteps = [
  ['01', 'Bring the real work', 'Share a week of tickets, reports, inbox items, or order updates. We use the actual queue, not a vague job title.'],
  ['02', 'Set the guardrails', 'Write down what the Filipino specialist can finish and what still needs a manager. Keep access narrow at the start.'],
  ['03', 'Run a short pilot', 'Review the first batch closely. Fix the instructions before adding more tasks or tools.'],
];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: `https://${site.domain}`,
    description: 'Practical planning for businesses hiring Filipino talent for recurring operations work.',
  };

  return <>
    <Header />
    <main className="labor-home" data-design="labor-ops-2026-07">
      <JsonLd data={schema} />

      <section className="labor-hero">
        <div className="labor-shell hero-layout">
          <div className="hero-copy">
            <p className="labor-kicker"><span>Philippines-only staffing</span><i>Independent planning guide</i></p>
            <h1>Build a Filipino operations bench without losing the controls.</h1>
            <p className="hero-deck">Hand off the repeat work, keep the decisions that belong with your team. We help you shape a role for Filipino talent around real tasks, safe access, and a review routine you can stick to.</p>
            <div className="hero-actions">
              <a className="labor-button primary" href="/contact">Request a labor plan</a>
              <a className="labor-button ghost" href="#work-lanes">See the work lanes</a>
            </div>
            <p className="routing-note">This is an independent referral site. Your request may be sent to a staffing partner that sources talent only in the Philippines.</p>
          </div>

          <div className="hero-visual" aria-label="Illustration of an operations specialist working through a task queue">
            <div className="visual-tag"><span className="status-dot" /> Manila desk online</div>
            <img src="/filipino-operations-specialist.svg" alt="Illustrated operations specialist working at a desk with a task board" />
            <div className="queue-card">
              <div><span>Today&apos;s handoff</span><b>Order update queue</b></div>
              <strong>8 / 8</strong>
            </div>
            <div className="approval-card"><span>Needs your call</span><b>2 policy exceptions</b></div>
          </div>
        </div>
        <div className="labor-shell control-strip" aria-label="Planning controls">
          {checkpoints.map((item) => <article key={item.label}>
            <span>{item.label}</span><b>{item.value}</b><p>{item.note}</p>
          </article>)}
        </div>
      </section>

      <section className="labor-shell work-section" id="work-lanes">
        <div className="section-intro">
          <div><p className="labor-kicker">Good first handoffs</p><h2>Start with a queue you can see.</h2></div>
          <p>Filipino talent can take on plenty of recurring work. The safest first role has clear inputs, a visible result, and a manager who knows when to step in.</p>
        </div>
        <div className="work-grid">
          {roles.map((role, index) => <a className="work-card" href={`/services/${role.slug}`} key={role.slug}>
            <span className="work-number">0{index + 1}</span>
            <div><h3>{role.title}</h3><p>{role.desc}</p></div>
            <b>Open the handoff guide <span aria-hidden="true">↗</span></b>
          </a>)}
        </div>
      </section>

      <section className="decision-section">
        <div className="labor-shell decision-layout">
          <div className="decision-copy">
            <p className="labor-kicker light">The decision line</p>
            <h2>Your specialist runs the lane. Your manager owns the exceptions.</h2>
            <p>A clean handoff does not dump every judgment call on a new hire. It separates routine work from the decisions that can change money, policy, customer promises, or account access.</p>
            <a href="/blog/outsourced-labor-planning">Read the role planning guide <span aria-hidden="true">→</span></a>
          </div>
          <div className="decision-board">
            <div className="board-head"><span>Example: order operations</span><i>Approval map</i></div>
            <div className="board-row clear"><span>Filipino specialist</span><b>Check status, update the record, draft the customer note</b><em>Clear to finish</em></div>
            <div className="board-row review"><span>Manager</span><b>Approve refunds, policy exceptions, and unusual promises</b><em>Stop and ask</em></div>
            <p>Use your own rules. This example shows the level of detail the plan should reach.</p>
          </div>
        </div>
      </section>

      <section className="labor-shell launch-section">
        <div className="section-intro compact">
          <div><p className="labor-kicker">The first week</p><h2>Make the launch boring. That&apos;s a good thing.</h2></div>
          <p>No grand rollout. Give one Filipino specialist a real work lane, check the output, and widen the scope only when the handoff holds up.</p>
        </div>
        <div className="launch-grid">
          {launchSteps.map(([number, heading, body]) => <article key={number}>
            <span>{number}</span><h3>{heading}</h3><p>{body}</p>
          </article>)}
        </div>
      </section>

      <section className="labor-shell guide-section">
        <div className="guide-title"><p className="labor-kicker">Field notes</p><h2>Useful before you open the role.</h2></div>
        <div className="guide-list">
          {blogPosts.slice(0, 3).map((post) => <a href={`/blog/${post.slug}`} key={post.slug}>
            <span>{post.minutes} min read</span><h3>{post.title}</h3><p>{post.excerpt}</p><b>Read guide →</b>
          </a>)}
        </div>
      </section>

      <section className="labor-shell labor-final">
        <div><p className="labor-kicker light">One role. Clear boundaries.</p><h2>Bring the messy task list. Leave with a workable Filipino staffing brief.</h2></div>
        <a className="labor-button warm" href="/contact">Request a labor plan</a>
      </section>
    </main>
    <Footer />
  </>;
}
