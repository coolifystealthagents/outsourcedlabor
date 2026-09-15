type Source = { name: string; url: string };
const gao: Source = { name: 'GAO Standards for Internal Control in the Federal Government', url: 'https://www.gao.gov/products/gao-14-704g' };
const nist: Source = { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' };
const ilo: Source = { name: 'ILO: Working from home, from invisibility to decent work', url: 'https://www.ilo.org/publications/major-publications/working-home-invisibility-decent-work' };
const cisa: Source = { name: 'CISA: Identity and Access Management', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management' };

export const september14ResearchRecords = [
  {
    slug: 'research-outsourced-labor-coverage-gap-signals',
    title: 'Which signals reveal coverage gaps in an outsourced labor schedule?',
    excerpt: 'A bounded schedule audit separating planned coverage, approved absence, late changes, and unresolved intervals.',
    sources: [gao, ilo],
    related: ['research-philippines-queue-capacity-forecast-error', 'research-philippines-handoff-state-recoverability'],
    cta: 'Audit one scheduling cohort with preserved versions and time zones.',
    body: [
      'Scope: examine every published and superseded schedule for one outsourced operations lane during a fixed four-week period. Define the required coverage intervals, time zone, approved absence rules, and what counts as a gap before reviewing outcomes. Include ordinary days, holidays, late changes, and days with no recorded demand.',
      'Methodology: preserve each schedule version, approval timestamp, availability record, absence notice, swap, and escalation. Compare required intervals with assigned and accepted coverage, then classify uncovered periods as planned, approval waiting, late absence, schedule error, system failure, or unknown. Have a second reviewer verify a sample and report disputed classifications.',
      'Inference boundaries: GAO and ILO material supports reliable records, accountability, and remote-work context. It does not establish a universal coverage target, prove service quality, or attribute a gap to a country, worker, or provider. This study describes the selected lane and period only.',
      'Limitations: informal swaps, clock differences, demand that changes after publication, private messages, and missing acceptance records can distort the result. Report the denominator, duration, and unknown intervals; do not convert absent evidence into confirmed coverage or nonperformance.',
    ],
  },
  {
    slug: 'research-philippines-queue-capacity-forecast-error',
    title: 'How accurately does a Philippines operations queue forecast capacity?',
    excerpt: 'A prospective comparison of planned arrivals, available work hours, review load, and completed queue demand.',
    sources: [gao, ilo, nist],
    related: ['research-outsourced-labor-coverage-gap-signals', 'research-filipino-operations-approval-packet-completeness'],
    cta: 'Freeze one forecast before the work period and compare it with the complete cohort.',
    body: [
      'Scope: select one recurring Philippines operations queue and create forecasts before each workweek for six consecutive weeks. Define an arrival, available hour, review hour, completion, carryover, and excluded case. Preserve cancelled and reopened work so the demand denominator cannot change after results are known.',
      'Methodology: record the forecast version, recent arrival history, planned staffing, known leave, handling-time assumption, review allowance, and special events. After each week, compare forecast and observed arrivals, productive capacity, review demand, and ending carryover. Report absolute errors and signed errors separately rather than averaging over shortages and surpluses.',
      'Inference boundaries: the cited sources inform control evidence, risk management, and remote-work conditions. They provide no benchmark for forecast accuracy and do not show that a forecast error was caused by the team’s location. The study tests a local planning method, not workforce quality.',
      'Limitations: shifting priorities, undocumented work, outages, learning effects, case mix, and overtime can alter both demand and capacity. Six weeks may miss seasonality. Publish assumptions and missing records, then use the findings to adjust one planning input at a time.',
    ],
  },
  {
    slug: 'research-filipino-operations-approval-packet-completeness',
    title: 'Are Filipino operations approval packets complete enough for a decision?',
    excerpt: 'A blinded record review of the facts, governing rule, options, consequences, owner, and requested deadline.',
    sources: [gao, nist],
    related: ['research-outsourced-access-removal-lag', 'research-philippines-handoff-state-recoverability'],
    cta: 'Define the decision fields before sampling completed and returned packets.',
    body: [
      'Scope: review a consecutive cohort of approval packets prepared for one Filipino operations lane under one rule version. Include approved, rejected, returned, withdrawn, expired, and pending requests. Define completeness from the information an authorized owner needs, not from the eventual decision.',
      'Methodology: blind reviewers to outcome where practical and score the request, governing rule, verified facts, source links, feasible options, stated consequence, deadline, and named approver. Record whether the owner requested missing factual context before deciding. Double-code a sample and publish disagreements, exclusions, and unavailable evidence.',
      'Inference boundaries: GAO and NIST support control information, responsibility, and decision evidence. They do not prescribe this checklist or prove that a complete packet produces a correct or faster decision. Completeness is a property of the saved record, not a judgment about an individual worker.',
      'Limitations: verbal decisions, sensitive redactions, owner familiarity, urgency, and changing rules can affect both the packet and response. A returned packet may reflect a changed request rather than missing preparation. Preserve these categories and avoid causal claims.',
    ],
  },
  {
    slug: 'research-outsourced-access-removal-lag',
    title: 'How long does access removal take after outsourced work changes?',
    excerpt: 'An event-history audit from approved scope change to verified removal across named systems and permissions.',
    sources: [cisa, nist, gao],
    related: ['research-filipino-operations-approval-packet-completeness', 'research-outsourced-labor-coverage-gap-signals'],
    cta: 'Reconcile one change cohort against authoritative permission exports.',
    body: [
      'Scope: identify every approved departure, role change, or task-lane closure affecting outsourced personnel in one defined period and system set. Record the required removal time under the policy in force for each event. Include transferred, suspended, reactivated, service, and shared accounts as separate categories.',
      'Methodology: join the approved change record, identity directory, access request, system permission export, disable event, exception approval, and verification timestamp by stable identifiers. Calculate lag only when both trigger and removal are evidenced. Classify unverified cases separately and have a second reviewer inspect a risk-based sample.',
      'Inference boundaries: CISA, NIST, and GAO support identity governance, least privilege, and control evidence. They do not certify a removal workflow, set one universal deadline, or prove that delayed removal caused misuse. The audit reports documented state transitions for the selected systems.',
      'Limitations: synchronization delay, emergency exceptions, shared credentials, incomplete logs, time-zone conversion, and retroactive tickets can bias elapsed time. A disabled account does not prove every token or downstream permission was revoked, so report the systems and verification limits explicitly.',
    ],
  },
  {
    slug: 'research-philippines-handoff-state-recoverability',
    title: 'Can a new reviewer recover the state of a Philippines operations handoff?',
    excerpt: 'A blinded retrieval test of status, source evidence, uncertainty, next owner, and deadline without private context.',
    sources: [ilo, gao, nist],
    related: ['research-philippines-queue-capacity-forecast-error', 'research-outsourced-access-removal-lag'],
    cta: 'Run the same retrieval protocol on ordinary, waiting, corrected, and exceptional handoffs.',
    body: [
      'Scope: sample consecutive handoffs from one Philippines operations lane during a fixed month. Include completed, waiting, corrected, cancelled, and exceptional items. Before selection, define the five facts a reviewer must recover: requested outcome, current state, supporting source, unresolved uncertainty, and next owner with deadline.',
      'Methodology: give authorized reviewers the approved shared record but no private chat or help from the preparer. Record whether each required fact is correct, time to reconstruction, extra systems opened, and clarification questions. Randomize order, double-score a subset, and retain failures instead of replacing them with easier examples.',
      'Inference boundaries: ILO, GAO, and NIST provide context for remote work, records, and governance. They establish no universal recovery-time target and do not show that a record format, provider, worker, or location caused the outcome. The results apply only to the sampled lane and access conditions.',
      'Limitations: reviewer familiarity, search skill, permissions, item complexity, redaction, and platform indexing influence retrieval. Silent guessing can appear fast, so score correctness and confidence alongside time. Use findings to test a specific record improvement and repeat the protocol.',
    ],
  },
].map((record) => ({
  ...record,
  published: '2026-09-14',
  image: `/sep14-heroes/${record.slug}`,
  headlineStat: undefined,
  keyStats: undefined,
  takeaways: undefined,
  service: undefined,
  faqs: undefined,
}));
