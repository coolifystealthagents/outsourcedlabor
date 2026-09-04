export const sep4BlogTopics = [
  ['philippines-operations-shift-start-check','Run a Shift-Start Check for Philippines Operations','shift-start readiness','a five-minute opening record','queue health, overnight changes, source availability, urgent items, and the first owner check'],
  ['outsourced-labor-approval-expiry-register','Track Approval Expiry in Outsourced Labor','approval expiry','an approval-expiry register','approved action, scope, approving owner, effective time, expiry event, and renewal status'],
  ['filipino-specialist-work-recovery-note','Write a Work-Recovery Note for a Filipino Specialist','work recovery','a recovery note','last verified state, interrupted step, protected records, open risk, next safe action, and owner'],
  ['philippines-support-queue-aging-review','Review Queue Aging in Philippines Support','queue aging','an aging review','arrival time, readiness, wait reason, consequence, current owner, and next decision'],
  ['outsourced-labor-source-access-fallback','Plan a Source-Access Fallback for Outsourced Labor','source-access fallback','a fallback card','unavailable source, permitted alternate, prohibited inference, safe work, escalation owner, and retry time'],
  ['filipino-team-duplicate-work-prevention','Prevent Duplicate Work Across a Filipino Team','duplicate-work prevention','a claim-and-handoff record','item identity, current assignee, claimed time, work state, evidence link, and release rule'],
  ['philippines-operations-decision-receipt','Keep a Decision Receipt in Philippines Operations','decision receipts','a compact decision receipt','question, verified context, authorized decision, scope, effective time, and follow-up owner'],
  ['outsourced-labor-sensitive-data-minimization','Minimize Sensitive Data in Outsourced Labor Tasks','data minimization','a task-data map','business need, required field, approved system, access group, retention rule, and removal check'],
  ['filipino-specialist-example-library-review','Review an Example Library With Filipino Specialists','example-library maintenance','an example review sheet','example purpose, governing rule, source version, edge case, owner, and retirement status'],
  ['philippines-team-service-recovery-handoff','Build a Service-Recovery Handoff for a Philippines Team','service recovery','a recovery handoff','affected work, customer impact facts, containment, current state, decision needed, and next owner'],
  ['outsourced-labor-metric-definition-card','Create a Metric Definition Card for Outsourced Labor','metric definitions','a metric card','business question, numerator, denominator, exclusions, source system, owner, and review date'],
  ['filipino-operations-weekly-risk-scan','Run a Weekly Risk Scan for Filipino Operations Support','weekly risk scanning','a one-page risk scan','new dependency, repeated exception, stale instruction, access change, capacity signal, and owner action'],
] as const;

export const sep4BlogPosts = sep4BlogTopics.map(([slug,title,focus])=>({slug,title,excerpt:`A practical ${focus} routine for Philippines-based outsourced work.`,minutes:13}));
