export const sep14BlogTopics = [
  ['outsourced-labor-shift-coverage-verification', 'Verify Shift Coverage Before an Outsourced Labor Schedule Goes Live', 'shift coverage verification', 'coverage verification sheet', 'required interval, assigned specialist, approved leave, backup owner, uncovered period, reviewer, and release decision'],
  ['philippines-workforce-queue-capacity-plan', 'Build a Queue Capacity Plan for a Philippines Workforce Team', 'queue capacity planning', 'capacity planning board', 'arrival volume, available hours, review allowance, carryover, priority rule, constraint, and planning owner'],
  ['filipino-operations-approval-decision-packet', 'Prepare an Approval Decision Packet with Filipino Operations Staff', 'approval decision preparation', 'decision packet', 'request, governing rule, verified facts, options, consequence, deadline, and accountable approver'],
  ['outsourced-labor-access-removal-checklist', 'Use an Access Removal Checklist When Outsourced Work Changes', 'access removal controls', 'access removal checklist', 'person, system, permission, change trigger, disable time, evidence link, and access owner'],
  ['philippines-remote-work-handoff-clock', 'Set a Handoff Clock for Philippines-Based Remote Work', 'time-zone handoff timing', 'handoff clock', 'work item, current state, receiving owner, local deadline, dependency, escalation time, and acceptance note'],
  ['filipino-staff-source-conflict-log', 'Keep a Source Conflict Log for Filipino Operations Staff', 'source conflict handling', 'source conflict log', 'record, source versions, conflicting fields, affected action, decision owner, resolution, and effective date'],
  ['outsourced-labor-quality-sample-register', 'Create a Quality Sample Register for Outsourced Labor', 'quality sampling', 'sample register', 'population, selection rule, sampled item, criterion, finding, reviewer, and corrective action'],
  ['philippines-operations-exception-owner-map', 'Map Exception Owners for a Philippines Operations Queue', 'exception ownership', 'exception owner map', 'exception class, detection signal, preparation step, decision owner, response window, fallback, and closure evidence'],
  ['filipino-workforce-recurring-control-calendar', 'Build a Recurring Control Calendar for a Filipino Workforce Team', 'recurring control scheduling', 'control calendar', 'control, frequency, source record, operator, reviewer, due window, and missed-run action'],
  ['outsourced-labor-change-request-boundaries', 'Set Boundaries for Outsourced Labor Change Requests', 'change request boundaries', 'change request record', 'requested change, current rule, affected records, access impact, approval owner, test window, and rollback condition'],
  ['philippines-support-knowledge-transfer-proof', 'Require Knowledge Transfer Proof in Philippines Support Handoffs', 'knowledge transfer evidence', 'transfer proof record', 'topic, approved source, example case, learner explanation, observed attempt, reviewer, and follow-up gap'],
  ['filipino-operations-recovery-readiness-drill', 'Run a Recovery Readiness Drill with Filipino Operations Staff', 'operations recovery readiness', 'recovery drill log', 'scenario, protected records, fallback procedure, recovery owner, elapsed time, failed dependency, and follow-up test'],
] as const;

export const sep14BlogPosts = sep14BlogTopics.map(([slug, title, focus]) => ({
  slug,
  title,
  excerpt: `A practical guide to ${focus} in a bounded Philippines-based operations lane.`,
  minutes: 11,
}));
