export const oct5BlogTopics = [
  ['outsourced-payroll-timecard-exception-packet','Prepare Timecard Exception Packets With Outsourced Payroll Support','finance-operations'],
  ['philippines-customer-support-subscription-cancellation-handoff','Build a Subscription Cancellation Handoff for Philippines Customer Support','customer-support'],
  ['filipino-sales-operations-quote-expiry-follow-up','Control Quote Expiry Follow-Up With Filipino Sales Operations Support','crm-data-stewardship'],
  ['outsourced-recruiting-reference-check-coordination','Coordinate Candidate Reference Checks With Outsourced Recruiting Support','recruitment-support'],
  ['philippines-ecommerce-address-change-review','Review Post-Order Address Changes With Philippines Ecommerce Support','order-operations'],
  ['filipino-admin-board-meeting-action-register','Maintain a Board Meeting Action Register With Filipino Admin Support','admin-support'],
  ['outsourced-crm-territory-assignment-audit','Audit CRM Territory Assignments With Outsourced Data Support','crm-data-stewardship'],
  ['philippines-qa-mobile-checkout-regression-packet','Build Mobile Checkout Regression Packets With Philippines QA Support','quality-audit-support'],
  ['filipino-workforce-overtime-approval-reconciliation','Reconcile Overtime Approvals With Filipino Workforce Support','workforce-scheduling'],
  ['outsourced-sop-control-owner-review-calendar','Run an SOP Control-Owner Review Calendar With Outsourced Documentation Support','sop-documentation'],
  ['philippines-inventory-return-to-vendor-reconciliation','Reconcile Return-to-Vendor Records With Philippines Inventory Support','inventory-administration'],
  ['filipino-procurement-minimum-order-quantity-review','Prepare Minimum Order Quantity Reviews With Filipino Procurement Support','procurement-follow-up'],
] as const;

export const oct5BlogPosts=oct5BlogTopics.map(([slug,title])=>({slug,title,excerpt:`A practical guide to ${title.toLowerCase()}, with evidence boundaries, owner decisions, and a reviewable handoff.`,minutes:10}));
export const oct5Services=Object.fromEntries(oct5BlogTopics.map(([slug,,service])=>[slug,service])) as Record<string,string>;
