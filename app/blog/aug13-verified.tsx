type Source = { name: string; url: string; note: string };
type Detail = { updated: string; takeaways: string[]; fitRows: { signal: string; example: string; reason: string }[]; sections: { heading: string; paragraphs: string[] }[]; brief: string[]; faqs: { q: string; a: string }[]; sources: Source[]; related: string[] };

const source: Source = { name: 'U.S. Small Business Administration — Hiring and managing employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-and-manage-employees', note: 'Reference for defining responsibilities, access, training, and management boundaries.' };

const topics = [
  ['philippines-outsourced-inbox-triage', 'Triage a shared inbox for outsourced customer support', 'Sort incoming messages by intent, evidence, urgency, and the next safe action.', 'shared inbox triage', 'Label the customer request, verified account detail, required response, owner boundary, and due follow-up before assigning the case.'],
  ['philippines-outsourced-customer-intent-tags', 'Use customer-intent tags that improve support handoffs', 'Create a small tagging scheme that helps the next support person understand why a customer wrote.', 'customer-intent tagging', 'Choose tags for the customer goal, not the channel, and document examples for ambiguous messages.'],
  ['philippines-outsourced-calendar-prep', 'Prepare calendars for recurring remote meetings', 'Make meetings easier to coordinate by checking participants, time zones, links, and agenda ownership.', 'calendar preparation', 'Record the meeting purpose, confirmed time zone, attendees, access link, agenda source, and missing approval.'],
  ['philippines-outsourced-document-naming', 'Set document names that make admin records findable', 'Use predictable names so a remote support contributor can file and retrieve records without duplicating them.', 'document naming', 'Combine record type, subject, date, and status while keeping personal or sensitive details out of filenames.'],
  ['philippines-outsourced-lead-research', 'Prepare qualified lead research for owner review', 'Gather verifiable business details without turning research into an unapproved sales commitment.', 'lead research', 'Capture the source, access date, relevant role, evidence of fit, uncertainty, and the specific question for the owner.'],
  ['philippines-outsourced-qa-escalation', 'Build an escalation note from a support quality review', 'Turn a discovered quality issue into a concise, actionable decision packet.', 'quality escalation notes', 'Show the case, expected standard, observed gap, customer impact, evidence, and owner decision needed.'],
  ['philippines-outsourced-crm-cleanup', 'Clean CRM records without losing customer history', 'Improve record completeness while protecting uncertain fields and active commitments.', 'CRM record cleanup', 'Change only fields supported by evidence, preserve prior notes, and route conflicting identities for approval.'],
  ['philippines-outsourced-renewal-followup', 'Organize renewal follow-ups for a service business', 'Keep upcoming customer decisions visible without promising terms or outcomes.', 'renewal follow-ups', 'List the customer, contract reference, decision date, prior contact, open question, and owner responsible for the next message.'],
  ['philippines-outsourced-appointment-confirmation', 'Confirm appointments with a clear support checklist', 'Reduce missed appointments by checking the details customers and providers actually need.', 'appointment confirmation', 'Verify date, time zone, participants, location or link, preparation requirement, and the source of each detail.'],
  ['philippines-outsourced-product-catalog-audit', 'Audit product catalog fields with a source trail', 'Find incomplete or conflicting catalog information before it reaches customer-facing work.', 'product catalog audits', 'Compare each field to its approved source, mark uncertainty, and separate correction requests from changes requiring approval.'],
  ['philippines-outsourced-shipping-lookup', 'Prepare shipping-status lookups for customer support', 'Give support a reliable fact pattern for delivery questions without inventing carrier explanations.', 'shipping-status lookups', 'Record the order identifier, carrier source, latest event, timestamp, expected next event, and unresolved discrepancy.'],
  ['philippines-outsourced-refund-evidence', 'Assemble refund evidence without approving the refund', 'Make an owner decision easier by presenting a complete, neutral record of the request.', 'refund evidence packets', 'Include order facts, policy source, customer request, prior remedy, missing evidence, and the approval question.'],
  ['philippines-outsourced-meeting-notes', 'Write meeting notes that support remote follow-through', 'Convert a meeting into owned actions, decisions, open questions, and source links.', 'meeting notes', 'Separate decisions from suggestions, name one owner per action, add a due date, and preserve the relevant context link.'],
  ['philippines-outsourced-knowledge-base-gaps', 'Find knowledge-base gaps from repeated support questions', 'Use recurring questions to identify unclear guidance without publishing unverified policy.', 'knowledge-base gap reviews', 'Group similar questions, link the cases, state the missing answer, and route proposed wording to the policy owner.'],
  ['philippines-outsourced-data-entry-check', 'Check data-entry work before it reaches an operations report', 'Catch missing, mismatched, and unsupported values through a focused review sample.', 'data-entry checks', 'Compare the entered value with its source, record the correction reason, and escalate unclear source records.'],
  ['philippines-outsourced-review-response', 'Prepare responses to customer reviews with care', 'Give a business owner a factual draft that acknowledges the experience without making an unapproved promise.', 'review response drafts', 'Quote only the relevant issue, verify the account context, draft a calm response, and flag any remedy for approval.'],
  ['philippines-outsourced-marketplace-messages', 'Organize marketplace messages for timely replies', 'Keep channel-specific customer requests clear when policy and order details must be checked.', 'marketplace message handling', 'Capture the marketplace case, order reference, customer goal, policy source, draft response, and escalation trigger.'],
  ['philippines-outsourced-receivables-followup', 'Prepare receivables follow-ups for owner approval', 'Make overdue-account follow-up consistent while keeping collection decisions with the authorized owner.', 'receivables follow-ups', 'Verify the account record, document history, agreed terms, open discrepancy, and the exact message awaiting approval.'],
  ['philippines-outsourced-inventory-reconciliation', 'Reconcile inventory records before investigating shortages', 'Compare records systematically so a suspected mismatch is described with evidence.', 'inventory reconciliation', 'State the item, locations, count dates, source systems, movement records, variance, and next investigation owner.'],
  ['philippines-outsourced-client-onboarding', 'Prepare a client onboarding packet for a smooth handoff', 'Gather the information a new service relationship needs before work begins.', 'client onboarding packets', 'Include scope, contacts, systems, access owner, first milestone, open questions, and decisions still held by the client.'],
  ['philippines-outsourced-document-control', 'Maintain document control for recurring operations work', 'Keep current forms and instructions distinguishable from retired or draft versions.', 'document control', 'Record the document owner, effective date, revision reason, approved location, and retirement status without rewriting policy.'],
  ['philippines-outsourced-workflow-handoff', 'Design a workflow handoff another person can run', 'Describe inputs, outputs, exceptions, and ownership so recurring work survives a staffing change.', 'workflow handoffs', 'Show the trigger, required fields, ordinary steps, stop conditions, evidence of completion, and escalation owner.'],
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
  'philippines-outsourced-inbox-triage': { updated: '2026-08-13', ...detail('shared inbox triage', topics[0][4]) },
  'philippines-outsourced-customer-intent-tags': { updated: '2026-08-13', ...detail('customer-intent tagging', topics[1][4]) },
  'philippines-outsourced-calendar-prep': { updated: '2026-08-13', ...detail('calendar preparation', topics[2][4]) },
  'philippines-outsourced-document-naming': { updated: '2026-08-13', ...detail('document naming', topics[3][4]) },
  'philippines-outsourced-lead-research': { updated: '2026-08-13', ...detail('lead research', topics[4][4]) },
  'philippines-outsourced-qa-escalation': { updated: '2026-08-13', ...detail('quality escalation notes', topics[5][4]) },
  'philippines-outsourced-crm-cleanup': { updated: '2026-08-13', ...detail('CRM record cleanup', topics[6][4]) },
  'philippines-outsourced-renewal-followup': { updated: '2026-08-13', ...detail('renewal follow-ups', topics[7][4]) },
  'philippines-outsourced-appointment-confirmation': { updated: '2026-08-13', ...detail('appointment confirmation', topics[8][4]) },
  'philippines-outsourced-product-catalog-audit': { updated: '2026-08-13', ...detail('product catalog audits', topics[9][4]) },
  'philippines-outsourced-shipping-lookup': { updated: '2026-08-13', ...detail('shipping-status lookups', topics[10][4]) },
  'philippines-outsourced-refund-evidence': { updated: '2026-08-13', ...detail('refund evidence packets', topics[11][4]) },
  'philippines-outsourced-meeting-notes': { updated: '2026-08-13', ...detail('meeting notes', topics[12][4]) },
  'philippines-outsourced-knowledge-base-gaps': { updated: '2026-08-13', ...detail('knowledge-base gap reviews', topics[13][4]) },
  'philippines-outsourced-data-entry-check': { updated: '2026-08-13', ...detail('data-entry checks', topics[14][4]) },
  'philippines-outsourced-review-response': { updated: '2026-08-13', ...detail('review response drafts', topics[15][4]) },
  'philippines-outsourced-marketplace-messages': { updated: '2026-08-13', ...detail('marketplace message handling', topics[16][4]) },
  'philippines-outsourced-receivables-followup': { updated: '2026-08-13', ...detail('receivables follow-ups', topics[17][4]) },
  'philippines-outsourced-inventory-reconciliation': { updated: '2026-08-13', ...detail('inventory reconciliation', topics[18][4]) },
  'philippines-outsourced-client-onboarding': { updated: '2026-08-13', ...detail('client onboarding packets', topics[19][4]) },
  'philippines-outsourced-document-control': { updated: '2026-08-13', ...detail('document control', topics[20][4]) },
  'philippines-outsourced-workflow-handoff': { updated: '2026-08-13', ...detail('workflow handoffs', topics[21][4]) },
};
