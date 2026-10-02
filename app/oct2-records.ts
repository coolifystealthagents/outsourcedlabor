export const oct2BlogTopics = [
  ['outsourced-accounts-payable-three-way-match-exception', 'Resolve Three-Way Match Exceptions With Outsourced Accounts Payable Support', 'three-way match exception handling', 'finance-operations'],
  ['philippines-customer-support-refund-evidence-packet', 'Prepare Refund Evidence Packets With Philippines Customer Support', 'refund evidence packet preparation', 'customer-support'],
  ['filipino-sales-operations-lead-routing-sla', 'Recover Lead-Routing SLA Breaches With Filipino Sales Operations Support', 'lead-routing SLA recovery', 'crm-data-stewardship'],
  ['outsourced-recruiting-interview-scorecard-completeness', 'Improve Interview Scorecard Completeness With Outsourced Recruiting Support', 'interview scorecard completeness', 'recruitment-support'],
  ['philippines-ecommerce-backorder-promise-update', 'Control Backorder Promise Updates With Philippines Ecommerce Support', 'backorder promise updates', 'order-operations'],
  ['filipino-admin-contract-renewal-notice-calendar', 'Maintain a Contract Renewal Notice Calendar With Filipino Admin Support', 'contract renewal notice tracking', 'admin-support'],
  ['outsourced-crm-consent-suppression-audit', 'Audit CRM Consent Suppression With Outsourced Data Support', 'CRM consent suppression auditing', 'crm-data-stewardship'],
  ['philippines-qa-accessibility-defect-reproduction', 'Build Accessibility Defect Reproduction Packets With Philippines QA Support', 'accessibility defect reproduction', 'quality-audit-support'],
  ['filipino-workforce-schedule-shrinkage-assumptions', 'Document Schedule Shrinkage Assumptions With Filipino Workforce Support', 'schedule shrinkage assumption control', 'workforce-scheduling'],
  ['outsourced-sop-version-retirement-control', 'Retire Obsolete SOP Versions With Outsourced Documentation Support', 'SOP version retirement', 'sop-documentation'],
  ['philippines-inventory-cycle-count-variance-handoff', 'Handoff Cycle-Count Variances With Philippines Inventory Support', 'cycle-count variance handoffs', 'inventory-administration'],
  ['filipino-procurement-supplier-document-expiry', 'Track Supplier Document Expiry With Filipino Procurement Support', 'supplier document expiry tracking', 'procurement-follow-up'],
] as const;

export const oct2BlogPosts = oct2BlogTopics.map(([slug, title, focus]) => ({
  slug,
  title,
  excerpt: `A practical guide to ${focus}, including source evidence, authority boundaries, and a reviewable handoff.`,
  minutes: 10,
}));
