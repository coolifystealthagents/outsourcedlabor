export const oct2DraftArticles = [{
  slug: 'outsourced-accounts-payable-three-way-match-exception',
  title: 'Resolve Three-Way Match Exceptions With Outsourced Accounts Payable Support',
  service: 'finance-operations',
  sections: [
    {
      heading: 'Define the exception before assigning the queue',
      body: `A three-way match compares the purchase order, evidence of receipt, and supplier invoice before payment. The useful outsourced role is not to make an invoice appear to match. It is to identify the exact disagreement, assemble the approved evidence, and send a bounded question to the person who can resolve it. Start by documenting which records are authoritative, which fields are compared, the permitted tolerances, and who owns each type of exception.

Classify observable differences rather than using a single “mismatch” status. Quantity, unit price, unit of measure, tax, freight, currency, supplier identity, purchase-order reference, receipt date, duplicate invoice number, and closed-order status each point to a different owner. Record both values, their sources, and the time observed. Do not calculate a replacement value or edit one system to agree with another.

Test the intake design with an invoice containing ten cases, a receipt recorded as 120 units, and a purchase order priced per case. The numbers may describe the same goods, but the specialist needs an approved unit conversion and source hierarchy before clearing the difference. Without those rules, apparently simple arithmetic can conceal a receiving or ordering error.`,
    },
    {
      heading: 'Build a source map that preserves record authority',
      body: `Name the system and field that controls the purchase order, receipt, and invoice values. A PDF attached to email may be evidence of what a supplier sent, while the accounts-payable platform holds the accepted invoice record. A warehouse message may explain a short receipt without replacing the receiving transaction. The procedure should distinguish evidence from the authoritative record so a helpful note does not silently change the ledger.

For each queue item, capture stable identifiers, supplier, invoice date and number, purchase-order line, receipt reference, compared quantities and units, price and currency, applicable tolerance, exception code, source links, current owner, and next due time. Link to controlled records instead of downloading unnecessary copies. If access differs across systems, the client should grant named least-privilege access or keep that verification with an internal reviewer.

Conflicting source records require a stop. The specialist should not choose the newest timestamp by instinct, delete a duplicate receipt, reopen a purchase order, or rewrite an invoice reference. Preserve the conflict and route it to the record owner. A clear source map makes the escalation narrow: it asks which approved record should govern, not whether the outsourced worker can improvise a correction.`,
    },
    {
      heading: 'Separate clerical preparation from approval authority',
      body: `The delegated lane can retrieve records, compare approved fields, apply documented tolerances, label exceptions, request missing evidence, and prepare a decision packet. Keep supplier-master changes, purchase-order amendments, receipt corrections, accounting treatment, payment release, fraud judgments, and tolerance overrides with named client owners. Those actions change financial obligations or control records and should not drift into the support role through repetition.

Write the boundary beside each queue status. “Ready for buyer review” should mean that the purchase-order facts and precise variance are present; it must not imply that the buyer approved a price change. “Receipt evidence requested” should show who was asked and when, not create a receipt. “Within tolerance” should cite the tolerance version and calculation so a reviewer can reproduce the result.

Urgency does not expand authority. A supplier threatening a hold, an early-payment deadline, or a senior manager asking for immediate release may change the escalation speed, but it does not authorize alteration of evidence. The specialist records the operational consequence and alerts the designated owner. The owner decides whether an exception can be approved and how that decision must appear in the finance system.`,
    },
    {
      heading: 'Use one evidence packet for each decision',
      body: `A review packet should let the owner answer one defined question without reconstructing the history from email. Include the invoice and line identifier, purchase-order line, receipt transaction, variance type, side-by-side values, tolerance result, prior requests, relevant supplier message, and the exact action awaiting approval. Mark missing fields explicitly. Do not fill gaps with assumptions such as “warehouse probably received the balance.”

For a partial receipt, show ordered quantity, cumulative accepted receipts, returns or reversals, invoice quantity, remaining open quantity, and timing. For price differences, distinguish base price from freight, tax, discount, or currency conversion. For possible duplicates, show the matching attributes and differences without declaring fraud. Topic-specific packets help reviewers reach consistent decisions and make recurring defects easier to diagnose.

Keep sensitive bank, tax, and contact data out of the packet unless the decision genuinely requires it and access is approved. References to authoritative records are safer than uncontrolled attachments. The business remains responsible for retention, privacy, segregation of duties, and accounting policy. Support prepares traceable facts under those rules; it does not define the rules.`,
    },
    {
      heading: 'Control supplier and internal follow-up',
      body: `Create approved request templates for distinct missing items: corrected invoice, purchase-order reference, proof of delivery, receiving confirmation, or buyer decision. Each message should identify the record, describe the observed difference without accusation, ask for one specific response, and state the next review time. Do not expose internal approval limits, unrelated invoices, or notes about another supplier.

Track every request by recipient, channel, timestamp, requested evidence, response deadline, and result. Avoid parallel outreach from accounts payable, procurement, and receiving. Duplicate messages invite conflicting answers and make it unclear which record was accepted. Assign a communication owner and link internal stakeholders to the same case.

When a response changes the facts, re-run the approved comparison rather than simply marking the item resolved. A corrected invoice may still have a quantity difference; a late receipt may use a different unit; a buyer approval may require a formal purchase-order amendment before payment. Resolution means the required authoritative records agree or an authorized exception is documented, not merely that someone replied.`,
    },
    {
      heading: 'Measure queue health without rewarding unsafe clearance',
      body: `Report incoming exceptions by type, age by current owner, time awaiting external evidence, returns for incomplete packets, tolerance outcomes, approved exceptions, and recurring supplier or process patterns. Pair clearance totals with quality review. A rapidly shrinking queue can reflect unauthorized edits, broad tolerance use, or premature closure rather than better operations.

Sample cleared, escalated, and still-open items. Verify authoritative sources, comparison logic, tolerance version, evidence completeness, approval identity, and final system state. Include high-value and old items, but do not review only dramatic cases. Routine exceptions show whether the standard lane is reliable.

Use patterns to improve upstream work. Repeated unit-of-measure differences may need catalog or purchase-order controls; missing receipts may indicate warehouse process gaps; price variances may point to contract or supplier communication issues. The specialist can quantify and illustrate the pattern. Procurement, receiving, finance, and system owners decide the corrective action.`,
    },
    {
      heading: 'Launch with a bounded pilot and acceptance review',
      body: `Begin with one entity, supplier group, invoice type, or low-risk exception class. Provide accepted and returned examples, source access, exception codes, tolerance rules, escalation owners, communication templates, review sample, overlap hours, and contingency instructions. Use named accounts and keep payment release outside the pilot unless the client has separately designed and approved that authority.

During the pilot, review decisions daily. Ask whether two trained reviewers classify the same facts alike, whether owners receive answerable questions, whether evidence remains in approved systems, and whether final records reflect the decision. Repair ambiguous fields and examples before adding volume. Do not compensate for unclear rules by relying on one experienced specialist’s memory.

At the end, choose keep, repair, expand, or stop. Keep the lane when evidence and authority are reproducible. Repair repeated classification or handoff defects. Expand only to exception types with documented owners and acceptance rules. Stop when the work cannot be separated from accounting judgment or when systems cannot preserve segregation of duties. A controlled exception queue can make accounts payable faster without disguising the decisions that must remain with the client.`,
    },
  ],
  sources: [
    'https://www.gao.gov/greenbook',
    'https://www.cisa.gov/topics/cyber-threats-and-advisories/identity-and-access-management',
    'https://privacy.gov.ph/data-privacy-act/',
  ],
}] as const;
