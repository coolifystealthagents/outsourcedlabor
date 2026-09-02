export const sep2BlogTopics = [
  ['philippines-work-intake-readiness-gate', 'Set a Work Intake Readiness Gate for a Philippines Team', 'intake readiness', 'a gate record covering request purpose, required inputs, deadline, authority, and acceptance evidence'],
  ['outsourced-labor-decision-rights-register', 'Build a Decision Rights Register for Outsourced Labor', 'decision rights', 'a register that distinguishes contributor actions, reviewer approvals, owner decisions, and mandatory escalations'],
  ['filipino-specialist-source-verification-log', 'Create a Source Verification Log for a Filipino Specialist', 'source verification', 'a dated log of source location, authority, freshness, claim supported, and reviewer disposition'],
  ['philippines-team-work-in-progress-limits', 'Set Work-in-Progress Limits for a Philippines Team', 'work-in-progress limits', 'a lane-level limit with entry rules, priority order, pause signals, and an overflow owner'],
  ['outsourced-labor-return-to-queue-protocol', 'Use a Return-to-Queue Protocol in Outsourced Labor', 'returned work', 'a return record naming the failed check, evidence, correction owner, priority, and new review condition'],
  ['filipino-specialist-data-handling-brief', 'Write a Data Handling Brief for a Filipino Specialist', 'data handling', 'a task-specific brief covering allowed records, approved systems, minimum access, prohibited transfers, and incident escalation'],
  ['philippines-operations-service-window-map', 'Map Service Windows for Philippines Operations', 'service windows', 'a coverage map connecting business deadlines, contributor windows, handoff cutoffs, backups, and exception owners'],
  ['outsourced-labor-reviewer-calibration-session', 'Run a Reviewer Calibration Session for Outsourced Labor', 'reviewer calibration', 'a comparison sheet with shared examples, independent judgments, disagreement reasons, and approved clarifications'],
  ['filipino-team-escalation-response-standard', 'Define an Escalation Response Standard for a Filipino Team', 'escalation response', 'a response standard with severity, acknowledgement target, decision owner, safe holding action, and closure evidence'],
  ['philippines-remote-operations-daily-close', 'Run a Daily Close for Philippines Remote Operations', 'daily close', 'a closeout record of completed items, open risks, unresolved waits, evidence links, and next-window ownership'],
  ['outsourced-labor-instruction-drift-audit', 'Audit Instruction Drift in Outsourced Labor Workflows', 'instruction drift', 'an audit comparing active guidance, source-of-truth versions, worker examples, correction patterns, and retirement status'],
  ['filipino-specialist-quality-feedback-loop', 'Build a Quality Feedback Loop for a Filipino Specialist', 'quality feedback', 'a feedback record linking an observed defect to its evidence, correction, systemic cause, owner, and follow-up sample'],
] as const;

export const sep2BlogPosts = sep2BlogTopics.map(([slug, title, focus]) => ({ slug, title, excerpt: `A practical ${focus} routine for dependable Philippines-based outsourced operations.`, minutes: 12 }));

const researchTopics = [
  ['research-philippines-intake-completeness-signals', 'Research: Intake Completeness Signals in Philippines Operations', 'intake completeness', 'request purpose, source availability, required fields, authority boundaries, return reasons, and review outcomes'],
  ['research-outsourced-labor-decision-latency-evidence', 'Research: Decision Latency Evidence in Outsourced Labor', 'decision latency', 'escalation timestamps, decision class, accountable owner, safe holding action, resolution evidence, and downstream effect'],
  ['research-filipino-team-instruction-drift-detection', 'Research: Instruction Drift Detection for Filipino Teams', 'instruction drift detection', 'active versions, superseded examples, source conflicts, correction records, acknowledgement evidence, and repeat defects'],
  ['research-philippines-work-in-progress-control', 'Research: Work-in-Progress Control in Philippines Teams', 'work-in-progress control', 'lane limits, arrival patterns, blocked states, completion evidence, overflow decisions, and aging distribution'],
  ['research-outsourced-labor-reviewer-agreement-method', 'Research: A Reviewer Agreement Method for Outsourced Labor', 'reviewer agreement', 'shared criteria, blinded judgments, disagreement categories, adjudication notes, revised guidance, and repeat samples'],
] as const;

export const sep2ResearchPosts = researchTopics.map(([slug, title, topic, dimensions], index) => ({
  slug, title, excerpt: `A bounded evidence method for studying ${topic} in distributed operations.`, published: '2026-09-02', image: '/filipino-operations-specialist.svg', headlineStat: undefined, keyStats: undefined, takeaways: undefined, service: undefined, faqs: undefined,
  body: [
    `This research note studies ${topic} in recurring work supported by Philippines-based specialists. Its question is whether retained operating records can support a reproducible management judgment. It does not presume that geography, staffing structure, or a particular tool causes an outcome.`,
    `Define the observation unit before collecting records. For ${topic}, capture ${dimensions}. State the review window, eligible work lanes, exclusions, and minimum evidence needed for a record to enter the sample.`,
    `Build a stratified sample that includes ordinary completions, incomplete requests, returned work, blocked items, and decisions near an authority boundary. Preserve original timestamps and versions so reviewers do not reconstruct the sequence from memory.`,
    `Code source facts, contributor actions, reviewer judgments, and accountable-owner decisions as separate fields. This separation lets a second reviewer test the record without treating workflow status, speed, or confidence as proof of quality.`,
    `Assess each ${topic} record for completeness, source authority, freshness, traceability, allowed action, decision ownership, and final disposition. Record missing evidence explicitly; absence should not be silently scored as success or failure.`,
    `Compare elapsed time with wait state and decision class. A deliberate pause for access approval may be correct, while a fast completion can omit a required check. Interpret time only beside evidence completeness and review outcome.`,
    `Use independent review on a defined subset, then classify disagreement by ambiguous criteria, missing evidence, version conflict, or judgment boundary. Revise instructions only through a dated owner decision and repeat the sample after the change.`,
    `Protect privacy by collecting only fields necessary for the stated question, limiting access, and following the organization's retention rules. Policy, legal, employment, security, financial, and customer commitments remain with authorized owners and specialists.`,
    `The method describes one bounded operating context and cannot establish causation or universal benchmarks. Its practical conclusion is that ${topic} becomes governable when ${dimensions} remain visible from intake through disposition and another reviewer can reproduce the reasoning.`,
  ],
  sources: [{ name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' }, { name: 'GAO Standards for Internal Control', url: 'https://www.gao.gov/products/gao-14-704g' }, { name: 'CISA Identity and Access Management', url: 'https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management' }],
  related: researchTopics.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map((item) => item[0]),
  cta: `Define a bounded ${topic} sample, document review decisions, and keep consequential authority with the accountable owner.`,
}));
