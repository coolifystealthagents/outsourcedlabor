export const sep28BlogTopics = [
  ['philippines-support-callback-identity-check', 'Verify Identity Before a Customer Support Callback', 'customer callback identity verification', 'customer-support'],
  ['filipino-admin-meeting-preread-packet', 'Build a Decision-Ready Meeting Pre-Read With Filipino Admin Support', 'meeting pre-read packet preparation', 'admin-support'],
  ['outsourced-order-partial-shipment-reconciliation', 'Reconcile Partial Shipments With Outsourced Order Support', 'partial shipment reconciliation', 'order-operations'],
  ['philippines-vendor-promised-date-variance', 'Track Supplier Promised-Date Variances With Philippines Vendor Support', 'vendor promised-date variance tracking', 'vendor-coordination'],
  ['filipino-inventory-unit-of-measure-mismatch', 'Triage Inventory Unit-of-Measure Mismatches With Filipino Support', 'inventory unit-of-measure mismatch triage', 'inventory-administration'],
  ['outsourced-crm-duplicate-ownership-review', 'Review CRM Duplicate Ownership With Outsourced Data Support', 'CRM duplicate ownership review', 'crm-data-stewardship'],
  ['philippines-procurement-po-acknowledgment', 'Follow Up Purchase Order Acknowledgments With Philippines Support', 'purchase order acknowledgment follow-up', 'procurement-follow-up'],
  ['filipino-qa-root-cause-evidence-packet', 'Prepare a Root-Cause Evidence Packet With Filipino QA Support', 'quality root-cause evidence preparation', 'quality-audit-support'],
  ['outsourced-workforce-skill-coverage-matrix', 'Build a Skill Coverage Matrix With Outsourced Workforce Support', 'workforce skill coverage analysis', 'workforce-scheduling'],
  ['philippines-reporting-metric-definition-register', 'Maintain a Metric Definition Register With Philippines Reporting Support', 'metric definition register maintenance', 'workforce-reporting'],
  ['filipino-dispatch-stalled-work-recovery', 'Recover Stalled Work With Filipino Operations Dispatch Support', 'stalled work recovery in operations dispatch', 'operations-dispatch'],
  ['outsourced-sop-exception-to-procedure-review', 'Turn Recurring Exceptions Into an SOP Review', 'exception-to-procedure review', 'sop-documentation'],
] as const;

export const sep28BlogPosts = sep28BlogTopics.map(([slug, title, focus]) => ({
  slug,
  title,
  excerpt: `A practical guide to ${focus}, including source evidence, authority boundaries, and a reviewable handoff.`,
  minutes: 10,
}));
