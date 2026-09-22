export const sep22BlogTopics = [
  ['philippines-virtual-assistant-cost-planning', 'How to Plan the Cost of a Philippines Virtual Assistant', 'virtual assistant cost planning', 'a cost planning worksheet', 'admin-support'],
  ['outsourced-customer-support-coverage-model', 'Build an Outsourced Customer Support Coverage Model', 'customer support coverage', 'a coverage model', 'customer-support'],
  ['filipino-operations-specialist-interview-scorecard', 'Interview Scorecard for a Filipino Operations Specialist', 'operations specialist interviews', 'an interview scorecard', 'operations-support'],
  ['philippines-remote-staff-access-onboarding', 'Access Onboarding for Philippines Remote Staff', 'secure access onboarding', 'an access onboarding register', 'sop-documentation'],
  ['outsourced-labor-service-level-agreement-guide', 'A Practical Service-Level Agreement Guide for Outsourced Labor', 'service-level planning', 'a service-level worksheet', 'operations-support'],
  ['filipino-customer-support-knowledge-base-plan', 'Build a Knowledge Base for Filipino Customer Support Staff', 'customer support knowledge bases', 'a knowledge-base plan', 'customer-support'],
  ['philippines-virtual-assistant-time-zone-overlap', 'Plan Time-Zone Overlap With a Philippines Virtual Assistant', 'time-zone overlap planning', 'an overlap schedule', 'workforce-scheduling'],
  ['outsourced-data-entry-quality-control', 'Quality Control for Outsourced Data Entry', 'data-entry quality control', 'a quality-control checklist', 'quality-audit-support'],
  ['filipino-ecommerce-support-onboarding-plan', 'Onboard Filipino Ecommerce Support Without Rushing Live Access', 'ecommerce support onboarding', 'an onboarding plan', 'order-operations'],
  ['outsourced-labor-manager-weekly-review', 'Run a Weekly Review With an Outsourced Team', 'weekly outsourced-team reviews', 'a weekly review agenda', 'workforce-reporting'],
  ['philippines-remote-staff-backup-coverage', 'Design Backup Coverage for Philippines Remote Staff', 'backup coverage planning', 'a backup coverage map', 'workforce-scheduling'],
  ['outsourced-labor-pilot-success-criteria', 'Set Success Criteria for an Outsourced Labor Pilot', 'outsourced labor pilot evaluation', 'a pilot decision scorecard', 'quality-audit-support'],
] as const;

export const sep22BlogPosts = sep22BlogTopics.map(([slug, title, focus]) => ({
  slug, title,
  excerpt: `A practical buyer guide to ${focus} with clear ownership, examples, controls, and a reviewable handoff.`,
  minutes: 11,
}));
