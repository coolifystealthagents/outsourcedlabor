type Source = { name: string; url: string; note: string };
type Detail = { updated: string; takeaways: string[]; fitRows: { signal: string; example: string; reason: string }[]; sections: { heading: string; paragraphs: string[] }[]; brief: string[]; faqs: { q: string; a: string }[]; sources: Source[]; related: string[] };

const source: Source = { name: 'U.S. Small Business Administration — Hiring and managing employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-and-manage-employees', note: 'Reference for defining responsibilities, access, training, and management boundaries.' };

const topics = [
  ['aug13-verified-order-exception-notes', 'Write useful order exception notes for outsourced support', 'Capture the evidence behind an order problem so a manager can decide quickly.', 'order exception notes', 'Record the order state, promised next step, source checked, and owner decision needed.'],
  ['aug13-verified-support-context-cards', 'Preserve context in outsourced customer support cases', 'Keep a customer case understandable when several people handle it across a day.', 'support case context', 'A good case card separates the customer statement, verified facts, action already taken, and unresolved question.'],
  ['aug13-verified-admin-request-intake', 'Build a clean intake for recurring admin requests', 'Turn scattered admin asks into complete requests with a source, deadline, and decision owner.', 'admin request intake', 'Require the requester, desired outcome, source location, due date, and approval boundary before work enters the queue.'],
  ['aug13-verified-vendor-record-check', 'Check vendor records before outsourced follow-up', 'Give operations support a repeatable way to verify vendor details without making commitments.', 'vendor record checks', 'Compare the request against the current vendor record, flag conflicting fields, and leave contract decisions with the owner.'],
  ['aug13-verified-support-macro-review', 'Review saved replies for Philippines customer support', 'Keep reusable support language accurate, bounded, and easy for a manager to revise.', 'support macro review', 'Each saved reply needs a use case, source of truth, forbidden promise, and review trigger.'],
  ['aug13-verified-shared-drive-index', 'Create a useful shared-drive index for admin support', 'Make recurring records findable while keeping folder access narrow and intentional.', 'shared-drive indexing', 'Index the record name, owner, date, location, retention note, and access group instead of copying sensitive contents.'],
  ['aug13-verified-returns-case-brief', 'Prepare ecommerce returns cases for owner review', 'Organize return evidence so support can prepare the case without approving an exception.', 'returns case briefs', 'Show order facts, policy paragraph, customer request, prior contact, and the exact decision waiting on the owner.'],
  ['aug13-verified-calendar-request-log', 'Log calendar requests for remote admin support', 'Prevent scheduling confusion by recording time zones, attendees, constraints, and confirmation status.', 'calendar request logs', 'Treat a request as unconfirmed until the time zone, participants, meeting purpose, and organizer approval are recorded.'],
  ['aug13-verified-research-source-trail', 'Keep a source trail for outsourced business research', 'Connect each research finding to the source, date, question, and caveat a reviewer needs.', 'research source trails', 'Store one claim per row with the source URL, access date, definition, limitation, and suggested use.'],
  ['aug13-verified-customer-merge-review', 'Review customer record merges with clear evidence', 'Reduce duplicate records without allowing uncertain identity matches to overwrite history.', 'customer merge reviews', 'Match stable identifiers first, list conflicting fields, and require owner approval when either record has active commitments.'],
  ['aug13-verified-invoice-exception-queue', 'Separate invoice preparation from invoice exceptions', 'Let admin support assemble complete invoice information while keeping unusual charges visible.', 'invoice exception queues', 'A complete packet includes the source document, service period, vendor, missing fields, and the question an approver must answer.'],
  ['aug13-verified-operations-status-board', 'Use an operations status board that reflects reality', 'Show what is complete, blocked, waiting, or at risk without confusing activity with progress.', 'operations status boards', 'Use statuses tied to evidence: ready, in progress, waiting for input, waiting for approval, and complete.'],
  ['aug13-verified-support-policy-boundary', 'Set policy boundaries for outsourced customer support', 'Give support staff room to solve ordinary cases while routing exceptions safely.', 'support policy boundaries', 'List standard remedies separately from exceptions, and give every exception a stop phrase and escalation owner.'],
  ['aug13-verified-file-request-tracker', 'Track missing files in a remote admin queue', 'Make document requests visible without turning follow-up into an unowned memory task.', 'file request tracking', 'Track who requested the file, why it is needed, where it should arrive, follow-up date, and the stop condition.'],
  ['aug13-verified-order-note-standard', 'Standardize order notes for a dependable handoff', 'Make order history readable to the next support person without adding speculation.', 'order note standards', 'Use a fixed order: verified status, customer wording, action taken, promised follow-up, and unresolved exception.'],
  ['aug13-verified-weekly-queue-sample', 'Sample an outsourced queue without chasing volume', 'Use a small, defined sample to see accuracy, completeness, and unresolved risk together.', 'weekly queue samples', 'Select cases by a stated rule, record the denominator, and review both accepted work and cases that needed correction.'],
  ['aug13-verified-access-review-cycle', 'Run an access review for Philippines-based staff', 'Keep permissions aligned with the current work lane as responsibilities change.', 'access review cycles', 'Compare each permission with a live task, a current owner approval, and a removal date when the assignment ends.'],
  ['aug13-verified-customer-followup-calendar', 'Keep customer follow-ups tied to an owner', 'Prevent missed commitments with a dated next action and verified case status.', 'customer follow-up calendars', 'A follow-up entry should name the customer, promised action, evidence checked, date, owner, and escalation condition.'],
  ['aug13-verified-backlog-age-review', 'Review backlog age in outsourced operations', 'Find stuck work before age becomes a customer or operational risk.', 'backlog age reviews', 'Sort by age and impact, then distinguish missing input, owner decision, capacity constraint, and invalid request.'],
  ['aug13-verified-training-case-notes', 'Write training case notes from real support examples', 'Turn ordinary and exceptional cases into practical guidance for new staff.', 'training case notes', 'Explain the initial facts, rule applied, exception noticed, action taken, and why the final handoff was acceptable.'],
  ['aug13-verified-service-recovery-intake', 'Prepare service recovery cases without overpromising', 'Give an owner the facts needed to decide a recovery response while protecting customer trust.', 'service recovery intakes', 'Record the impact, timeline, prior promises, available evidence, and proposed options without presenting any option as approved.'],
  ['aug13-verified-report-source-map', 'Map report figures back to their source records', 'Make recurring operations reports reviewable instead of relying on unexplained totals.', 'report source maps', 'For every important figure, record the source system, filter, period, calculation, and known limitation.'],
] as const;

export const august13BlogPosts = topics.map(([slug, title, excerpt]) => ({ slug, title, excerpt, minutes: 9 }));

const detail = (topic: string, sentence: string): Omit<Detail, 'updated'> => ({
  takeaways: [sentence, 'Separate preparation from decisions involving money, policy exceptions, access, deletion, or customer promises.', 'Review a small set of completed cases before widening the work lane.'],
  fitRows: [
    { signal: 'Good first scope', example: 'Repeatable records, checks, updates, or drafts', reason: 'The finished output is visible and can be sampled' },
    { signal: 'Needs approval', example: 'Money, policy exceptions, sensitive data, or promises', reason: 'A named owner retains the decision' },
    { signal: 'Not ready', example: 'A broad function without examples or a clear queue', reason: 'The scope cannot be trained or reviewed reliably' },
  ],
  sections: [
    { heading: `Define ${topic} around evidence`, paragraphs: [sentence, `Start with a named input and a finished record for ${topic}. Include the source checked, the ordinary path, and the condition that makes the worker pause.`, 'Use real examples that include an exception. That gives the next person something concrete to compare rather than a vague instruction to use judgment.'] },
    { heading: 'Keep the decision line visible', paragraphs: ['A support contributor can gather facts, organize records, draft language, and flag a mismatch. A manager should retain decisions about refunds, payments, policy changes, access, deletion, and unusual customer commitments.', `For ${topic}, mark whether the case is ready, waiting for evidence, waiting for approval, or escalated. A status without an owner only hides delay.`, 'Use individual access and a written escalation path containing the evidence, question, deadline, and decision owner.'] },
    { heading: 'Review quality through examples', paragraphs: ['Check accuracy, completeness, timeliness, and handoff usefulness. Do not treat volume as proof of quality.', `Keep one accepted example and one corrected example for ${topic}. Explain the difference so the guidance improves from actual work.`, 'Expand the scope only after the review shows that the worker can follow the ordinary path and recognize exceptions.'] },
  ],
  brief: [`Role goal: Complete the ${topic} lane by the agreed cutoff.`, 'Work source: The named system, queue, report, or folder supplied by the manager.', 'Done means: Required fields are complete, evidence is linked, and the next action is dated.', 'Manager approves: Exceptions involving money, policy, access, deletion, or customer promises.'],
  faqs: [{ q: 'When should the worker pause?', a: 'Pause when the source is missing, the request crosses an approval boundary, or the instructions do not cover the case.' }, { q: 'What should the manager review first?', a: 'Review the source trail, completeness, exception handling, and whether the handoff makes the next decision clear.' }],
  sources: [source], related: ['outsourced-labor-planning', 'philippines-operations-support-sop'],
});

export const august13BlogDetails: Record<string, Detail> = {
  'aug13-verified-order-exception-notes': { updated: '2026-08-13', ...detail('order exception notes', topics[0][4]) },
  'aug13-verified-support-context-cards': { updated: '2026-08-13', ...detail('support case context', topics[1][4]) },
  'aug13-verified-admin-request-intake': { updated: '2026-08-13', ...detail('admin request intake', topics[2][4]) },
  'aug13-verified-vendor-record-check': { updated: '2026-08-13', ...detail('vendor record checks', topics[3][4]) },
  'aug13-verified-support-macro-review': { updated: '2026-08-13', ...detail('support macro review', topics[4][4]) },
  'aug13-verified-shared-drive-index': { updated: '2026-08-13', ...detail('shared-drive indexing', topics[5][4]) },
  'aug13-verified-returns-case-brief': { updated: '2026-08-13', ...detail('returns case briefs', topics[6][4]) },
  'aug13-verified-calendar-request-log': { updated: '2026-08-13', ...detail('calendar request logs', topics[7][4]) },
  'aug13-verified-research-source-trail': { updated: '2026-08-13', ...detail('research source trails', topics[8][4]) },
  'aug13-verified-customer-merge-review': { updated: '2026-08-13', ...detail('customer merge reviews', topics[9][4]) },
  'aug13-verified-invoice-exception-queue': { updated: '2026-08-13', ...detail('invoice exception queues', topics[10][4]) },
  'aug13-verified-operations-status-board': { updated: '2026-08-13', ...detail('operations status boards', topics[11][4]) },
  'aug13-verified-support-policy-boundary': { updated: '2026-08-13', ...detail('support policy boundaries', topics[12][4]) },
  'aug13-verified-file-request-tracker': { updated: '2026-08-13', ...detail('file request tracking', topics[13][4]) },
  'aug13-verified-order-note-standard': { updated: '2026-08-13', ...detail('order note standards', topics[14][4]) },
  'aug13-verified-weekly-queue-sample': { updated: '2026-08-13', ...detail('weekly queue samples', topics[15][4]) },
  'aug13-verified-access-review-cycle': { updated: '2026-08-13', ...detail('access review cycles', topics[16][4]) },
  'aug13-verified-customer-followup-calendar': { updated: '2026-08-13', ...detail('customer follow-up calendars', topics[17][4]) },
  'aug13-verified-backlog-age-review': { updated: '2026-08-13', ...detail('backlog age reviews', topics[18][4]) },
  'aug13-verified-training-case-notes': { updated: '2026-08-13', ...detail('training case notes', topics[19][4]) },
  'aug13-verified-service-recovery-intake': { updated: '2026-08-13', ...detail('service recovery intakes', topics[20][4]) },
  'aug13-verified-report-source-map': { updated: '2026-08-13', ...detail('report source maps', topics[21][4]) },
};
