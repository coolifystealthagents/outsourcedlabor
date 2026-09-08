export const sep8BlogTopics = [
  ['philippines-operations-morning-source-check','Start the Day With a Source Check for Philippines Operations','morning source verification','a morning source card','queue, authoritative source, last change, affected work, checker, and escalation point'],
  ['outsourced-labor-decision-deadline-map','Map Decision Deadlines in an Outsourced Work Queue','decision deadline mapping','a decision-deadline map','decision, business deadline, evidence needed, approver, fallback, and next check'],
  ['filipino-specialist-evidence-ready-status','Define Evidence-Ready Status for Filipino Specialists','evidence-ready handoffs','an evidence-ready checklist','requested decision, verified facts, source links, open uncertainty, owner, and handoff time'],
  ['philippines-support-conversation-context-card','Preserve Customer Context With a Philippines Support Team','customer context preservation','a conversation context card','customer request, relevant history, verified policy, commitment, sensitivity, and next owner'],
  ['outsourced-labor-safe-stop-rule','Write a Safe-Stop Rule for Outsourced Labor','safe-stop rules','a safe-stop rule','trigger, work to pause, record to preserve, notification route, decision owner, and restart condition'],
  ['filipino-team-definition-of-ready','Set a Definition of Ready for a Filipino Operations Team','work readiness','a definition-of-ready card','requester, required input, authority, example, deadline, and rejection reason'],
  ['philippines-admin-sensitive-change-review','Review Sensitive Admin Changes Before Execution','sensitive change review','a sensitive-change review','requested change, verified requester, current state, consequence, approver, and audit record'],
  ['outsourced-labor-queue-interruption-note','Use an Interruption Note in Outsourced Work Queues','interruption recovery','an interruption note','paused item, last safe state, interruption reason, urgent replacement, owner, and resume cue'],
  ['filipino-specialist-rework-prevention-sample','Sample Work Early to Prevent Repeat Rework','early quality sampling','an early-sample record','batch boundary, sample rule, checked fields, defect pattern, correction, and release decision'],
  ['philippines-operations-fallback-task-list','Build a Responsible Fallback Task List for Philippines Operations','fallback work planning','a fallback-task register','primary blocker, approved fallback, prerequisites, access boundary, stop condition, and reviewer'],
  ['outsourced-labor-weekly-control-cleanup','Run a Weekly Control Cleanup for Outsourced Labor','weekly control maintenance','a control-cleanup log','stale instruction, conflicting source, unused field, repeated exception, owner decision, and effective date'],
  ['filipino-team-acceptance-evidence-note','Record Acceptance Evidence for Filipino Team Handoffs','acceptance evidence','an acceptance evidence note','deliverable, acceptance criteria, reviewer, result, correction link, and close time'],
] as const;

export const sep8BlogPosts = sep8BlogTopics.map(([slug,title,focus]) => ({
  slug,
  title,
  excerpt: `A practical ${focus} routine for recurring work handled with a Philippines-based team.`,
  minutes: 12,
}));
