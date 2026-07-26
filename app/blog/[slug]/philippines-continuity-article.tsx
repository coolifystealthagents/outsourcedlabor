import { JsonLd, LogoMark } from '../../components';
import { site } from '../../data';

export const continuitySlug = 'philippines-outsourced-labor-business-continuity-plan';
export const continuityTitle = 'Build a Philippines outsourced labor business continuity plan';
export const continuityDescription = 'A practical continuity plan for Philippines-based teams, with typhoon triggers, backup work rules, data controls, and a tested recovery checklist.';
export const continuityMarker = 'ph-continuity-plan-2026';

const baseUrl = `https://${site.domain.toLowerCase()}`;
const articleUrl = `${baseUrl}/blog/${continuitySlug}`;

const sources = [
  { name: 'PAGASA: Tropical Cyclone Information', url: 'https://www.pagasa.dost.gov.ph/climate/tropical-cyclone-information' },
  { name: 'World Bank: Stronger Climate Action Will Support Sustainable Recovery', url: 'https://www.worldbank.org/en/news/press-release/2022/11/09/stronger-climate-action-will-support-sustainable-recovery-and-accelerate-poverty-reduction-in-the-philippines' },
  { name: 'World Bank and ITU: Individuals using the Internet, Philippines', url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH' },
  { name: 'World Bank: Access to electricity, Philippines', url: 'https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS?locations=PH' },
  { name: 'Republic Act No. 11165, Telecommuting Act', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html' },
  { name: 'NIST SP 800-34 Rev. 1: Contingency Planning Guide', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final' },
  { name: 'CISA: Emergency Services Sector Continuity Planning Suite', url: 'https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience/critical-infrastructure-sectors/emergency-services-sector/continuity-planning-suite' },
] as const;

const faqs = [
  { q: 'Should every Philippines-based worker have a second internet line?', a: 'Not every role needs the same backup. Test the real work first, then match each fallback to the longest pause the business can accept.' },
  { q: 'When should a typhoon continuity plan start?', a: 'Use PAGASA notices with local conditions and staff check-ins. Set the trigger before the season, but let safety and local instructions override the work plan.' },
  { q: 'Can a backup worker use the main worker\'s account?', a: 'Use a named account with the smallest useful access. Shared credentials make review and offboarding harder, and they can expose more data than the backup task needs.' },
  { q: 'How often should the plan be tested?', a: 'Run a small test before peak typhoon months and after a major tool or team change. Record what failed, assign the fix, and test the weak step again.' },
] as const;

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': `${articleUrl}#article`,
      headline: continuityTitle,
      description: continuityDescription,
      datePublished: '2026-07-25',
      dateModified: '2026-07-25',
      mainEntityOfPage: { '@id': `${articleUrl}#webpage` },
      author: { '@type': 'Organization', name: site.brand, url: baseUrl },
      publisher: { '@type': 'Organization', name: site.brand, url: baseUrl },
      citation: sources.map((source) => source.url),
    },
    {
      '@type': 'WebPage',
      '@id': `${articleUrl}#webpage`,
      name: continuityTitle,
      url: articleUrl,
      description: continuityDescription,
      mainEntity: { '@id': `${articleUrl}#article` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${articleUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
        { '@type': 'ListItem', position: 3, name: continuityTitle, item: articleUrl },
      ],
    },
  ],
};

function ContinuityHeader() {
  return <header className="nav continuity-nav"><div className="nav-inner"><a className="logo" href="/" aria-label="Outsourced Labor home"><LogoMark /></a><nav className="links" aria-label="Article navigation"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/research">Research</a><a href="/contact">Contact Us</a></nav></div></header>;
}

function ContinuityFooter() {
  return <footer className="continuity-footer"><div className="container"><a className="footer-logo" href="/"><LogoMark /></a><p>Plan repeat work for Philippines-based specialists with clear owners, safe access, and a review path.</p><nav aria-label="Footer navigation"><a href="/services">Services</a><a href="/blog">Blog</a><a href="/privacy">Privacy Policy</a><a href="/contact">Contact Us</a></nav></div></footer>;
}

function Banner({ slot, title, children }: { slot: number; title: string; children: React.ReactNode }) {
  return <aside className="article-banner" data-banner-slot={slot}><p className="eyebrow">Continuity check</p><h2>{title}</h2><p>{children}</p><a href="/contact">Map the work lane</a></aside>;
}

export default function PhilippinesContinuityArticle() {
  return <>
    <ContinuityHeader />
    <main className="continuity-page">
      <JsonLd data={schema} />
      <article className="container article-shell continuity-article" data-article-marker={continuityMarker}>
        <header className="article-header">
          <p className="eyebrow">Philippines operations guide</p>
          <h1>{continuityTitle}</h1>
          <p className="lead">Keep people safe, protect client work, and make recovery less chaotic. This guide turns a vague backup idea into a plan your team can test.</p>
          <div className="article-meta"><span>15 min read</span><span>Updated July 25, 2026</span><span>Evidence checked</span></div>
        </header>

        <aside className="takeaway-box" aria-labelledby="continuity-takeaways">
          <p className="eyebrow" id="continuity-takeaways">Quick takeaways</p>
          <ul>
            <li>Put staff safety before task recovery and say so in writing.</li>
            <li>Choose essential work by client impact, not by whoever asks loudest.</li>
            <li>Test people, power, connection, systems, and decision ownership as separate dependencies.</li>
            <li>Give backup workers named access only after the transfer is approved.</li>
          </ul>
        </aside>

        <section className="article-body">
          <h2>Why a Philippines continuity plan belongs in normal operations</h2>
          <p>The Philippines handles severe weather as part of ordinary life, but a client should not expect a worker to improvise through danger. PAGASA says an average of 20 tropical cyclones enter the Philippine Area of Responsibility each year, and about 8 or 9 cross the country. It also identifies July through October as the peak period, when nearly 70% of typhoons develop.<sup><a href="#source-1">1</a></sup></p>
          <p>The business effect can spread well beyond one missed shift. In a report published on November 9, 2022, the World Bank said estimated annual losses from typhoons were equal to 1.2% of Philippine GDP.<sup><a href="#source-2">2</a></sup> That figure does not predict what will happen to your team, but it shows why continuity deserves a written owner and a real test.</p>
          <p>A good plan is not a demand for perfect attendance during a storm. It tells the team when work pauses, who checks on people, which tasks truly cannot wait, and how a backup receives only the access needed. The first line should be simple: local safety orders and personal safety come before the queue.</p>
        </section>

        <Banner slot={1} title="Know which work can safely pause">List the client tasks that matter during the first 4, 12, and 24 hours of an interruption. Give each one an owner, a backup, and a clear stop rule.</Banner>

        <section className="fit-matrix continuity-table" aria-labelledby="priority-table-title">
          <div className="module-heading"><p className="eyebrow">Priority table</p><h2 id="priority-table-title">Sort work before the weather alert</h2></div>
          <p>Use this as a starting point, then change the times to fit real client promises. A manager should approve the final list and every exception.</p>
          <div className="wide-region" tabIndex={0} aria-label="Scrollable continuity priority table">
            <p className="scroll-cue">Swipe or use arrow keys to see every column.</p>
            <table>
              <thead><tr><th>Work lane</th><th>First response</th><th>Backup action</th><th>Owner-only decision</th></tr></thead>
              <tbody>
                <tr><th>Safety check</th><td>Confirm staff status and local conditions</td><td>Pause assigned work until the person checks in</td><td>Return-to-work approval</td></tr>
                <tr><th>Customer queue</th><td>Post one timestamped notice</td><td>Move approved urgent items to a named backup</td><td>Refunds, promises, and policy exceptions</td></tr>
                <tr><th>Orders or records</th><td>Save the last known queue state</td><td>Continue only from source records</td><td>Changes with money or legal effect</td></tr>
                <tr><th>Reports</th><td>Mark the missing data and new delivery time</td><td>Prepare a partial draft with source links</td><td>Final interpretation and client signoff</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-body">
          <h2>Map five dependencies, one by one</h2>
          <p>Start with people and location. Record the city or province only at the level needed for planning, the worker's normal work site, and the approved alternative. Do not collect private family details or ask staff to travel during unsafe conditions just to keep a task moving.</p>
          <p>Next, test power and connection with the real job. World Bank data list Philippine electricity access at 94.8% of the population in 2024, while the World Bank and ITU internet-use indicator lists 67.3% for that year.<sup><a href="#source-3">3</a></sup><sup><a href="#source-4">4</a></sup> These are national access measures, not proof that one home has stable power, enough bandwidth, or service during a typhoon.</p>
          <p>Ask the worker to complete a normal file upload, call, and system login from each approved setup. Write down battery life, the tested backup connection, and the point when the worker should stop rather than risk lost data. If a role cannot work from a safe alternative, the plan needs another person or an honest client pause.</p>
          <p>The fourth dependency is systems and records. Keep source files in approved shared tools, use named accounts, and protect them with multifactor authentication where available. A backup should never depend on a password sent in chat or on a file stored only on the unavailable worker's device.</p>
          <p>The fifth dependency is authority. Name who may activate the plan, who can move work, who speaks to the client, and who closes the event. A Philippines-based specialist can prepare a status note or transfer sheet, but the buyer's manager keeps approval over customer promises, sensitive access, and final business judgment.</p>
        </section>

        <section className="visual-module" aria-labelledby="access-chart-heading">
          <div className="module-heading"><p className="eyebrow">National context</p><h2 id="access-chart-heading">Philippine internet use and electricity access, 2019–2024</h2></div>
          <div className="wide-region" tabIndex={0} aria-label="Scrollable line chart of Philippine internet use and electricity access">
            <p className="scroll-cue">Swipe or use arrow keys to reach the 2024 labels.</p>
            <svg className="continuity-chart" viewBox="0 0 860 430" role="img" aria-labelledby="chart-title chart-desc">
              <title id="chart-title">Philippine internet use and electricity access indicators from 2019 through 2024</title>
              <desc id="chart-desc">Electricity access stays near 95 percent. Internet use rises from 43.0 percent in 2019 to 67.3 percent in 2024, with a published high of 77.9 percent in 2023.</desc>
              <rect x="0" y="0" width="860" height="430" rx="24" fill="#f7f1df" />
              {[20,40,60,80,100].map((tick) => <g key={tick}><line x1="90" x2="790" y1={350-tick*2.8} y2={350-tick*2.8} stroke="#c8d5cd" /><text x="48" y={356-tick*2.8} fontSize="14" fill="#49645c">{tick}%</text></g>)}
              <line x1="90" x2="790" y1="350" y2="350" stroke="#49645c" />
              {['2019','2020','2021','2022','2023','2024'].map((year,index) => <text key={year} x={90+index*140} y="382" textAnchor="middle" fontSize="14" fill="#49645c">{year}</text>)}
              <polyline points="90,229.6 230,199.4 370,162.7 510,139.4 650,131.9 790,161.6" fill="none" stroke="#e56f32" strokeWidth="5" />
              <polyline points="90,83.2 230,80.1 370,77 510,84.6 650,75.6 790,84.6" fill="none" stroke="#14745f" strokeWidth="5" strokeDasharray="12 8" />
              <text x="600" y="216" fontSize="16" fontWeight="700" fill="#b94f1d">Internet use</text><text x="770" y="166" textAnchor="end" fontSize="15" fontWeight="800" fill="#b94f1d">67.3%</text>
              <text x="600" y="48" fontSize="16" fontWeight="700" fill="#0d6653">Electricity access</text><text x="770" y="108" textAnchor="end" fontSize="15" fontWeight="800" fill="#0d6653">94.8%</text>
              <text x="440" y="412" textAnchor="middle" fontSize="14" fill="#49645c">Year</text><text x="20" y="214" transform="rotate(-90 20 214)" textAnchor="middle" fontSize="14" fill="#49645c">Share of population</text>
            </svg>
          </div>
          <p className="methods-note"><strong>Methods:</strong> Annual Philippine observations come from World Bank indicators IT.NET.USER.ZS and EG.ELC.ACCS.ZS. Internet-use data come through the World Bank from the ITU, values are rounded to one decimal, and neither series measures local service quality, outage length, or disaster availability.</p>
        </section>

        <Banner slot={2} title="Turn the plan into working instructions">Use <a href="/services/sop-documentation">SOP documentation support</a> to record triggers, source files, access steps, and stop rules. Then connect the plan to your <a href="/services/workforce-scheduling">workforce schedule</a> so backups know when they are truly on call.</Banner>

        <section className="article-body">
          <h2>Write activation rules that a tired manager can follow</h2>
          <p>Do not use a storm name alone as the trigger. Combine PAGASA information with the worker's local conditions, power status, connection status, and local authority instructions. A team in Cebu may face a different problem from a team in Metro Manila on the same day.</p>
          <p>Use one simple status board with the time, person, safety state, work state, next check, and assigned owner. Keep safety language separate from performance language so nobody feels pushed to claim they are available. If a person cannot check in, mark the work unavailable and start the approved backup step.</p>
          <p>Client messages should say what is known, what is paused, what continues, and when the next update will arrive. Do not promise a recovery time until the owner has checked the dependencies. One honest note is better than several chat messages that disagree.</p>
          <p>Philippine law also gives useful operating context. The Telecommuting Act, approved in 2018, defines telecommuting as work from an alternative workplace using telecommunications or computer technology, and it calls for written information about the program and worker duties.<sup><a href="#source-5">5</a></sup> The same law says the employer is responsible for suitable measures to protect data used and processed for professional work.</p>
        </section>

        <section className="visual-module process-module" aria-labelledby="recovery-map-title">
          <div className="module-heading"><p className="eyebrow">Separate graphic</p><h2 id="recovery-map-title">From alert to tested recovery</h2></div>
          <div className="wide-region" tabIndex={0} aria-label="Scrollable continuity process graphic">
            <p className="scroll-cue">Swipe or use arrow keys to follow all six steps.</p>
            <svg className="recovery-map" viewBox="0 0 980 310" role="img" aria-labelledby="map-title map-desc">
              <title id="map-title">Six-step Philippine outsourced labor continuity process</title>
              <desc id="map-desc">The process starts with safety and essential work, then checks dependencies, activates backup work, communicates, verifies records, and improves the plan.</desc>
              <rect width="980" height="310" rx="24" fill="#153e38" />
              <rect x="38" y="28" width="850" height="38" rx="19" fill="#f6d46e" /><text x="463" y="53" textAnchor="middle" fontSize="16" fontWeight="800" fill="#153e38">Guardrail: people follow local safety advice before work instructions</text>
              {[
                ['1','Name essential work'],['2','Check people and tools'],['3','Approve the transfer'],['4','Send one client note'],['5','Verify records'],['6','Fix and retest'],
              ].map(([n,label],index) => <g key={n} transform={`translate(${34+index*150} 105)`}><rect width="128" height="118" rx="16" fill={index<3?'#d8f0df':'#fff8ee'} /><circle cx="24" cy="26" r="14" fill="#f58b49" /><text x="24" y="31" textAnchor="middle" fontSize="14" fontWeight="900" fill="#153e38">{n}</text><text x="14" y="62" fontSize="14" fontWeight="800" fill="#153e38">{label.split(' ').slice(0,2).join(' ')}</text><text x="14" y="84" fontSize="14" fontWeight="800" fill="#153e38">{label.split(' ').slice(2).join(' ')}</text>{index<5&&<path d="M132 58 H148" stroke="#f6d46e" strokeWidth="5" />}</g>)}
              <rect x="38" y="250" width="850" height="34" rx="17" fill="#0c2926" stroke="#75b9a4" /><text x="463" y="272" textAnchor="middle" fontSize="15" fontWeight="700" fill="#d8f0df">Guardrail: named access, approved records, and manager control stay in place</text>
            </svg>
          </div>
          <p className="methods-note">This graphic adapts the planning cycle in NIST SP 800-34 Rev. 1 and the essential-function approach in CISA's continuity suite.<sup><a href="#source-6">6</a></sup><sup><a href="#source-7">7</a></sup> NIST wrote its guide for federal information systems, so use it as a planning aid rather than as Philippine law.</p>
        </section>

        <section className="article-body">
          <h2>Test the plan without waiting for a typhoon</h2>
          <p>Run a 30-minute desk test first. Say that one worker, one home connection, and one client system are unavailable, then ask the team to find the approved source record and name the next owner. Do not create a fake emergency or ask anyone to work extra hours for the exercise.</p>
          <p>Next, run one live transfer with low-risk sample work. Measure the time from activation to safe access, the time to the first accurate client note, and the number of missing records. A successful test ends with access removed or returned, source data checked, and the normal owner clearly restored.</p>
          <p>Keep a short findings log. Record the date, tested failure, result, fix owner, due date, and retest date. Your <a href="/services/workforce-reporting">workforce reporting process</a> can hold this log, while the <a href="/blog/outsourced-labor-onboarding-checklist">first-week onboarding checklist</a> can make continuity part of every new start.</p>
          <p>The strongest plans are boring to use. People know where to look, the backup can reach only what is needed, and the client receives one clear update. After the event, check unfinished work and data changes before returning the queue to its normal owner.</p>
        </section>

        <blockquote className="expert-quote" cite={sources[1].url}>
          <p>"Climate impacts threaten to significantly lower the country's GDP and the well-being of Filipinos by 2040."</p>
          <footer>Manuela V. Ferro, World Bank Vice President for East Asia and Pacific, November 9, 2022<sup><a href="#source-2">2</a></sup></footer>
        </blockquote>

        <Banner slot={3} title="Build the fallback before the next alert">Bring the role, tools, work hours, and approval limits. We can help turn them into a Philippines staffing request with a clear primary owner and backup path.</Banner>

        <section className="article-faq" aria-labelledby="continuity-faq-title">
          <p className="eyebrow">Buyer questions</p><h2 id="continuity-faq-title">Philippines continuity plan FAQ</h2>
          <div className="cards">{faqs.map((faq) => <div className="card" key={faq.q}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}</div>
        </section>

        <section className="source-list" aria-labelledby="continuity-sources-title">
          <p className="eyebrow">Numbered sources</p><h2 id="continuity-sources-title">Evidence used in this guide</h2>
          <ol>{sources.map((source,index) => <li id={`source-${index+1}`} key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.name}</a></li>)}</ol>
        </section>
      </article>
    </main>
    <ContinuityFooter />
  </>;
}
