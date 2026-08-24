import { august13BlogDetails, august13BlogPosts } from './blog/aug13-blog-records';
import { august14BlogDetails, august14BlogPosts } from './blog/aug14-blog-records';
import { august17BlogDetails, august17BlogPosts } from './blog/aug17-blog-records';
import { august19BlogDetails, august19BlogPosts } from './blog/aug19-blog-records';
import { aug21Posts } from './aug21-posts';
import { aug23Posts } from './aug23-posts';

export const site = {
  "domain": "OutsourcedLabor.com",
  "slug": "outsourcedlabor",
  "brand": "Outsourced Labor",
  "primary": "outsourced labor",
  "audience": "owners comparing Philippines staffing models for recurring business work",
  "angle": "role scoping, plan controls, training, labor mix, and quality checks",
  "style": "Industrial staffing board",
  "dark": "#18181b",
  "color": "#52525b",
  "accent": "#f97316",
  "heroImage": "/filipino-operations-specialist.svg",
  "serviceImage": "/filipino-operations-specialist.svg",
  "alt": "illustrated operations specialist working at a desk with a task board",
  "badge": "Labor model"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations support with Filipino talent, clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["order updates and vendor follow-up", "daily task boards and status notes", "SOP cleanup from recorded work", "simple research and list building"],
    "qualityControls": ["daily done list with links", "weekly owner scorecard", "approval rules for refunds, spend, and customer promises"],
    "firstWeek": ["share five real examples", "limit tool access to the first task lane", "review output each day before adding more work"],
    "faqs": [
      { "q": "What operations work should Filipino talent handle first?", "a": "Start with repeat work that already has examples, such as updates, lists, checklists, and vendor follow-up." },
      { "q": "Who should own process changes?", "a": "Keep process decisions with a manager. The Filipino staff member can suggest fixes, but an owner should approve changes." }
    ]
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer support with Filipino talent, clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["ticket triage and tagging", "saved-reply support for common questions", "order status updates", "call notes and follow-up tasks"],
    "qualityControls": ["sample replies before live sending", "response-time and CSAT review", "clear escalation list for refunds or angry customers"],
    "firstWeek": ["train on the top 20 questions", "start with draft replies", "review ten real tickets together"],
    "faqs": [
      { "q": "Can Filipino support talent answer customers directly?", "a": "Yes, after training. Start with drafts or low-risk replies, then open live responses once quality is steady." },
      { "q": "What should stay with the business owner?", "a": "Refund decisions, policy exceptions, angry VIP customers, and anything that can change the customer relationship." }
    ]
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin support with Filipino talent, clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["calendar cleanup and scheduling", "inbox sorting", "document formatting", "CRM updates and data cleanup"],
    "qualityControls": ["access only to needed folders", "daily admin log", "manager approval before sending sensitive messages"],
    "firstWeek": ["record the current admin process", "hand over one inbox or calendar lane", "check mistakes daily and update the SOP"],
    "faqs": [
      { "q": "Is admin support a good first role for Filipino talent?", "a": "Often, yes. It works best when the tasks repeat and the owner can show examples of good work." },
      { "q": "How much access should an admin assistant get?", "a": "Give the smallest access that lets the work get done. Add more only after the first tasks are stable." }
    ]
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA with Filipino talent, clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["weekly KPI updates", "sample checks on tickets or orders", "spreadsheet cleanup", "manager-ready summary notes"],
    "qualityControls": ["source links for every number", "sample-size notes", "red flag list for odd data", "second check before reports go to clients"],
    "firstWeek": ["pick one weekly report", "define the source of truth", "compare the first report against a manager version"],
    "faqs": [
      { "q": "Can Filipino staff own QA reporting?", "a": "They can prepare and check reports. A manager should still own the final business decision." },
      { "q": "What makes QA handoff safe?", "a": "Use source links, a scorecard, and a clear list of issues that must be escalated." }
    ]
  }
] as const;
const allBlogPosts = [
  {
    "slug": "philippines-outsourced-labor-business-continuity-plan",
    "title": "Build a Philippines outsourced labor business continuity plan",
    "excerpt": "A practical plan for typhoon triggers, backup work, data controls, and a tested recovery path for Philippines-based teams.",
    "minutes": 15
  },
  {
    "slug": "outsourced-labor-planning",
    "title": "How to plan a Filipino staffing role",
    "excerpt": "Build a clear role scope, access plan, review routine, and first-week test before you hire.",
    "minutes": 10
  },
  { slug: 'philippines-operations-support-sop', title: 'How to build an operations support SOP for Filipino talent', excerpt: 'Turn recurring operations work into a clear SOP with inputs, decisions, handoffs, and review checks.', minutes: 11 },
  { slug: 'filipino-customer-support-training-plan', title: 'A practical customer support training plan for Filipino staff', excerpt: 'Build a staged training plan that moves from examples to supervised replies and dependable service.', minutes: 12 },
  { slug: 'philippines-admin-assistant-onboarding', title: 'Philippines admin assistant onboarding checklist', excerpt: 'Set up tools, examples, access limits, and daily feedback before an admin assistant handles live work.', minutes: 9 },
  { slug: 'outsourced-labor-quality-scorecard', title: 'Create a quality scorecard for outsourced labor', excerpt: 'Measure accuracy, completeness, speed, and escalation judgment without rewarding careless volume.', minutes: 10 },
  { slug: 'filipino-virtual-assistant-daily-routine', title: 'A daily routine for a Filipino virtual assistant', excerpt: 'Use a visible queue, priorities, completion notes, and escalation rules to make daily support predictable.', minutes: 9 },
  { slug: 'philippines-bookkeeping-support-controls', title: 'Controls for Philippines bookkeeping support', excerpt: 'Separate data preparation from financial approval with source checks, permissions, and a review trail.', minutes: 12 },
  { slug: 'outsourced-labor-inbox-management', title: 'How to hand off inbox management safely', excerpt: 'Define triage labels, reply boundaries, sensitive messages, and a manager review loop for shared inboxes.', minutes: 10 },
  { slug: 'filipino-lead-research-workflow', title: 'A repeatable lead research workflow for Filipino staff', excerpt: 'Create a research process with fit rules, source links, freshness checks, and clean handoffs to sales.', minutes: 10 },
  { slug: 'philippines-ecommerce-order-support', title: 'Philippines support for ecommerce order operations', excerpt: 'Organize order checks, customer updates, exception handling, and escalation for an ecommerce queue.', minutes: 11 },
  { slug: 'outsourced-labor-weekly-review-meeting', title: 'Run a useful weekly review with outsourced staff', excerpt: 'Keep weekly reviews focused on output, blockers, quality trends, and the next process improvement.', minutes: 8 },
  { slug: 'filipino-staff-access-management', title: 'Access management for Philippines-based staff', excerpt: 'Grant only the access a role needs, document approvals, and close accounts cleanly when work changes.', minutes: 10 },
  { slug: 'philippines-content-operations-workflow', title: 'A content operations workflow for Filipino talent', excerpt: 'Coordinate briefs, research, drafts, edits, metadata, and approvals with a simple publishing queue.', minutes: 12 },
  { slug: 'outsourced-labor-call-handling-sop', title: 'Build a call-handling SOP for outsourced staff', excerpt: 'Give call support a clear script, verification steps, note format, and escalation path.', minutes: 10 },
  { slug: 'filipino-data-entry-quality-checks', title: 'Data entry quality checks that scale', excerpt: 'Reduce rework with field rules, samples, source references, and exception handling.', minutes: 8 },
  { slug: 'philippines-backup-coverage-schedule', title: 'Plan backup coverage for a Philippines support team', excerpt: 'Design handoffs and coverage notes so recurring work keeps moving when a primary worker is unavailable.', minutes: 10 },
  { slug: 'outsourced-labor-task-queue-design', title: 'Design a task queue for outsourced labor', excerpt: 'Make work visible with clear priorities, owners, due times, definitions of done, and blocked states.', minutes: 9 },
  { slug: 'filipino-staff-performance-feedback', title: 'Give effective feedback to Filipino staff', excerpt: 'Use specific examples, shared standards, and a consistent follow-up rhythm to improve work fairly.', minutes: 9 },
  { slug: 'philippines-research-assistant-brief', title: 'Write a better research assistant brief', excerpt: 'Specify the question, acceptable sources, output format, freshness standard, and decision owner.', minutes: 8 },
  { slug: 'outsourced-labor-process-improvement-loop', title: 'A simple process improvement loop for outsourced work', excerpt: 'Capture recurring errors, update the SOP, test the change, and measure whether the handoff improves.', minutes: 10 },
  { slug: 'filipino-team-manager-handoff-plan', title: 'Plan the manager handoff for Filipino staff', excerpt: 'Clarify who trains, reviews, approves, and escalates as a staffing role becomes dependable.', minutes: 10 },
  { slug: 'philippines-operations-daily-dashboard', title: 'Build a daily operations dashboard for Philippines-based staff', excerpt: 'Use a compact dashboard to show queue health, completed work, blockers, and owner decisions.', minutes: 9 },
  { slug: 'filipino-customer-escalation-matrix', title: 'Create a customer escalation matrix for Filipino support staff', excerpt: 'Map common support cases to response rules, approval limits, and the right escalation owner.', minutes: 10 },
  { slug: 'outsourced-labor-sop-version-control', title: 'Use SOP version control for outsourced labor workflows', excerpt: 'Keep instructions current, reviewable, and tied to the work examples that shaped each change.', minutes: 8 },
  { slug: 'philippines-virtual-assistant-calendar-controls', title: 'Set calendar controls for a Philippines virtual assistant', excerpt: 'Define scheduling rules, sensitive meetings, time zones, and approval steps before sharing a calendar.', minutes: 9 },
  { slug: 'filipino-operations-handoff-notes', title: 'Write better handoff notes for Filipino operations teams', excerpt: 'Make every handoff actionable with context, status, evidence, next action, and a named owner.', minutes: 8 },
  { slug: 'outsourced-labor-approval-workflow', title: 'Design an approval workflow for outsourced labor', excerpt: 'Separate routine execution from decisions involving money, policy, customers, or risk.', minutes: 10 },
  { slug: 'philippines-support-knowledge-base', title: 'Build a support knowledge base for Philippines-based staff', excerpt: 'Turn recurring questions into searchable answers with examples, limits, sources, and review dates.', minutes: 11 },
  { slug: 'filipino-operations-error-log', title: 'Keep an error log for Filipino operations work', excerpt: 'Track recurring mistakes without blame so the team can improve examples, checks, and SOPs.', minutes: 8 },
  { slug: 'outsourced-labor-shift-handoff', title: 'Plan a reliable shift handoff for outsourced labor', excerpt: 'Define what the next person needs to know so queues do not stall between working hours.', minutes: 9 },
  { slug: 'philippines-remote-team-meeting-agenda', title: 'Run focused meetings with a Philippines remote team', excerpt: 'Use a short agenda that covers decisions, blockers, quality signals, and follow-up owners.', minutes: 8 },
  { slug: 'filipino-staff-documentation-checklist', title: 'A documentation checklist for Filipino staff workflows', excerpt: 'Capture inputs, steps, decisions, evidence, and exceptions before a recurring task is handed off.', minutes: 9 },
  { slug: 'outsourced-labor-capacity-planning', title: 'Plan capacity for an outsourced labor queue', excerpt: 'Match incoming work, available hours, review time, and backup coverage before promising output.', minutes: 10 },
  { slug: 'philippines-customer-data-handling', title: 'Set customer data handling rules for Philippines-based staff', excerpt: 'Limit access, define safe handling, and create clear escalation rules for customer information.', minutes: 11 },
  { slug: 'filipino-lead-follow-up-process', title: 'Create a lead follow-up process for Filipino staff', excerpt: 'Give lead follow-up a clear cadence, source record, qualification rule, and manager boundary.', minutes: 10 },
  { slug: 'outsourced-labor-backlog-triage', title: 'Triage an outsourced labor backlog without losing quality', excerpt: 'Rank work by impact and deadline while protecting review standards and escalation paths.', minutes: 9 },
  { slug: 'philippines-admin-file-organization', title: 'Organize shared files for Philippines admin support', excerpt: 'Create naming, folder, permission, and archive rules that keep documents findable and controlled.', minutes: 8 },
  { slug: 'filipino-staff-weekly-scorecard', title: 'Build a weekly scorecard for Filipino staff', excerpt: 'Combine output, quality, timeliness, questions, and process improvements in one fair review.', minutes: 9 },
  { slug: 'outsourced-labor-onboarding-portal', title: 'Set up an onboarding portal for outsourced labor', excerpt: 'Give new staff one dependable place for examples, access steps, policies, and launch checks.', minutes: 10 },
  { slug: 'philippines-ecommerce-refund-escalation', title: 'Control ecommerce refund escalations for Philippines support', excerpt: 'Let staff prepare refund cases while keeping approval, evidence, and policy exceptions with a manager.', minutes: 10 },
  { slug: 'filipino-research-fact-checking-workflow', title: 'Create a fact-checking workflow for Filipino research staff', excerpt: 'Connect each claim to a source, date, caveat, and review decision before publication.', minutes: 11 },
  { slug: 'outsourced-labor-coverage-risk-review', title: 'Review coverage risk in an outsourced labor team', excerpt: 'Identify single points of failure, backup needs, access gaps, and recovery actions.', minutes: 9 },
  { slug: 'philippines-content-calendar-controls', title: 'Control a content calendar with Philippines-based support', excerpt: 'Coordinate briefs, deadlines, approvals, metadata, and publishing ownership in one visible queue.', minutes: 10 },
  { slug: 'outsourced-labor-daily-briefing', title: 'Write a daily briefing for outsourced labor teams', excerpt: 'Give a remote team the priorities, context, decisions, and handoff details needed to start well.', minutes: 8 },
  { slug: 'philippines-virtual-assistant-task-priorities', title: 'Set task priorities for a Philippines virtual assistant', excerpt: 'Turn a mixed request list into a clear daily order with deadlines, owner decisions, and a visible finish line.', minutes: 9 },
  { slug: 'outsourced-labor-work-instructions', title: 'Write work instructions for outsourced labor', excerpt: 'Create instructions that show inputs, steps, examples, exceptions, and the evidence needed for review.', minutes: 10 },
  { slug: 'filipino-operations-morning-checklist', title: 'Build a morning checklist for Filipino operations staff', excerpt: 'Give a remote operations team a dependable start with queue checks, priorities, risks, and handoff notes.', minutes: 8 },
  { slug: 'philippines-customer-support-qa-sampling', title: 'Design QA sampling for Philippines customer support', excerpt: 'Use a fair sample of support interactions to catch quality issues while keeping review work manageable.', minutes: 10 },
  { slug: 'outsourced-labor-shared-inbox-rules', title: 'Set shared inbox rules for outsourced labor', excerpt: 'Define ownership, labels, reply limits, and escalation paths before a remote team handles a shared inbox.', minutes: 9 },
  { slug: 'filipino-staff-knowledge-transfer-plan', title: 'Plan knowledge transfer for Filipino staff', excerpt: 'Move process knowledge from an owner to a remote team with examples, practice, observation, and sign-off.', minutes: 11 },
  { slug: 'philippines-order-status-workflow', title: 'Create an order status workflow for Philippines support', excerpt: 'Keep order updates accurate with source checks, customer language, exception rules, and dated follow-up.', minutes: 9 },
  { slug: 'outsourced-labor-daily-output-report', title: 'Create a daily output report for outsourced labor', excerpt: 'Summarize completed work, quality signals, blockers, and decisions without turning reporting into busywork.', minutes: 8 },
  { slug: 'filipino-admin-calendar-handoff', title: 'Plan a calendar handoff for Filipino admin support', excerpt: 'Share scheduling work safely with time-zone rules, sensitive-event limits, and approval checkpoints.', minutes: 9 },
  { slug: 'philippines-remote-team-coverage-notes', title: 'Write coverage notes for a Philippines remote team', excerpt: 'Make backup coverage practical by documenting queues, current status, access, priorities, and escalation owners.', minutes: 9 },
  { slug: 'outsourced-labor-source-checklist', title: 'Use a source checklist for outsourced labor research', excerpt: 'Help research staff capture current, authoritative sources and connect each finding to a business decision.', minutes: 10 },
  { slug: 'filipino-staff-work-queue-review', title: 'Run a work queue review with Filipino staff', excerpt: 'Review queue age, blocked items, quality patterns, and next actions in a short manager routine.', minutes: 8 },
  { slug: 'philippines-admin-document-retention', title: 'Set document retention rules for Philippines admin support', excerpt: 'Keep shared records findable and controlled with naming, retention, archive, and deletion boundaries.', minutes: 10 },
  { slug: 'outsourced-labor-escalation-response-time', title: 'Set escalation response times for outsourced labor', excerpt: 'Define when a worker should pause, who responds, and how urgent exceptions are recorded.', minutes: 9 },
  { slug: 'filipino-customer-support-reply-library', title: 'Build a reply library for Filipino customer support', excerpt: 'Turn approved answers into reusable replies with source notes, limits, review dates, and escalation triggers.', minutes: 10 },
  { slug: 'philippines-workforce-absence-plan', title: 'Plan absence coverage for Philippines-based staff', excerpt: 'Protect recurring work with backup owners, current notes, access checks, and a simple return-to-work handoff.', minutes: 9 },
  { slug: 'outsourced-labor-approval-matrix', title: 'Create an approval matrix for outsourced labor', excerpt: 'Map routine actions, approval thresholds, sensitive cases, and named decision owners in one practical table.', minutes: 10 },
  { slug: 'filipino-research-claim-review', title: 'Review research claims with Filipino staff', excerpt: 'Check dates, definitions, source quality, caveats, and wording before research becomes published content.', minutes: 10 },
  { slug: 'philippines-operations-weekly-scorecard', title: 'Build a weekly operations scorecard for Philippines staff', excerpt: 'Combine quality, timeliness, queue health, questions, and process improvements in a useful weekly review.', minutes: 9 },
  { slug: 'outsourced-labor-process-audit', title: 'Audit an outsourced labor process', excerpt: 'Check whether a recurring work lane has clear inputs, permissions, quality checks, evidence, and ownership.', minutes: 11 },
  { slug: 'filipino-staff-offboarding-checklist', title: 'Create an offboarding checklist for Filipino staff', excerpt: 'Close access, transfer work, preserve records, and document follow-up when a staffing role changes.', minutes: 10 },
  { slug: 'philippines-content-brief-template', title: 'Create a content brief for Philippines-based writers', excerpt: 'Give writers a clear search intent, audience, evidence standard, structure, links, and approval path.', minutes: 10 },
  { slug: 'outsourced-labor-handoff-quality-check', title: 'Add a quality check to every outsourced labor handoff', excerpt: 'Use a small evidence check to confirm that work is complete, understandable, and ready for the next owner.', minutes: 8 },
  { slug: 'philippines-admin-inbox-triage', title: 'Set up inbox triage for Philippines admin support', excerpt: 'Turn a crowded admin inbox into a manageable queue with ownership, labels, response rules, and a clear escalation lane.', minutes: 9 },
  { slug: 'filipino-support-call-notes', title: 'Write useful call notes for Filipino support staff', excerpt: 'Capture the customer question, verified facts, promise made, and next owner so a call never disappears into memory.', minutes: 8 },
  { slug: 'outsourced-labor-workload-forecast', title: 'Forecast workload for an outsourced labor team', excerpt: 'Use recent demand, handling time, review capacity, and seasonal exceptions to plan a realistic work lane.', minutes: 10 },
  { slug: 'philippines-crm-cleanup-plan', title: 'Create a CRM cleanup plan for Philippines staff', excerpt: 'Define duplicate rules, required fields, source checks, and approval boundaries before changing customer records.', minutes: 10 },
  { slug: 'filipino-vendor-follow-up-tracker', title: 'Build a vendor follow-up tracker for Filipino staff', excerpt: 'Keep supplier questions moving with dated requests, promised replies, evidence links, and an owner for each exception.', minutes: 9 },
  { slug: 'outsourced-labor-reporting-calendar', title: 'Create a reporting calendar for outsourced labor', excerpt: 'Give recurring reports dependable due dates, source owners, review time, and a simple route for late or missing data.', minutes: 9 },
  { slug: 'philippines-customer-feedback-coding', title: 'Code customer feedback with Philippines-based support', excerpt: 'Use a small, shared category set to turn support conversations into trends a manager can review and act on.', minutes: 10 },
  { slug: 'filipino-admin-travel-coordination', title: 'Set boundaries for Filipino admin travel coordination', excerpt: 'Handle research and draft itineraries while keeping payment, policy exceptions, and final booking decisions with the owner.', minutes: 9 },
  { slug: 'outsourced-labor-document-review', title: 'Organize document review for outsourced labor', excerpt: 'Separate intake, completeness checks, comments, approval, and filing so documents move without unclear ownership.', minutes: 10 },
  { slug: 'philippines-ecommerce-catalog-updates', title: 'Manage ecommerce catalog updates from the Philippines', excerpt: 'Protect product accuracy with a source record, change list, preview check, and approval step before updates go live.', minutes: 10 },
  { slug: 'filipino-staff-meeting-follow-up', title: 'Turn meetings into follow-up work for Filipino staff', excerpt: 'Record decisions, owners, due dates, and unresolved questions so a remote team can act on the conversation.', minutes: 8 },
  { slug: 'outsourced-labor-quality-calibration', title: 'Calibrate quality standards for outsourced labor', excerpt: 'Compare real examples against the same rubric so managers and staff share a practical definition of good work.', minutes: 10 },
  { slug: 'philippines-admin-invoice-preparation', title: 'Control invoice preparation for Philippines admin support', excerpt: 'Let staff gather and check invoice details while preserving approval for amounts, bank changes, and unusual charges.', minutes: 10 },
  { slug: 'filipino-research-source-freshness', title: 'Check source freshness with Filipino research staff', excerpt: 'Add publication dates, retrieval context, and review triggers so research does not quietly rely on stale evidence.', minutes: 9 },
  { slug: 'outsourced-labor-work-sample-review', title: 'Use work samples to choose an outsourced labor scope', excerpt: 'Start with representative tasks and a shared rubric before expanding a role beyond what the examples prove.', minutes: 9 },
  { slug: 'philippines-support-weekend-coverage', title: 'Plan weekend coverage for Philippines support', excerpt: 'Define urgent cases, response windows, backup ownership, and the Monday handoff before opening a weekend queue.', minutes: 9 },
  { slug: 'filipino-operations-exception-register', title: 'Keep an exception register for Filipino operations work', excerpt: 'Make unusual cases visible with the decision needed, evidence, deadline, and outcome instead of hiding them in chat.', minutes: 8 },
  { slug: 'outsourced-labor-training-example-library', title: 'Build a training example library for outsourced labor', excerpt: 'Pair approved examples with explanations, edge cases, and review dates so new staff can learn the actual standard.', minutes: 10 },
  { slug: 'philippines-admin-permission-review', title: 'Review permissions for Philippines admin support', excerpt: 'Recheck tool access against current duties, remove convenience permissions, and document approvals for sensitive areas.', minutes: 9 },
  { slug: 'filipino-customer-status-updates', title: 'Write accurate customer status updates from the Philippines', excerpt: 'Use verified facts, plain language, next-update dates, and escalation rules for customers waiting on a resolution.', minutes: 9 },
  { slug: 'outsourced-labor-monthly-operations-review', title: 'Run a monthly operations review with outsourced labor', excerpt: 'Look beyond daily output at recurring errors, queue trends, capacity, access, and the next improvement to test.', minutes: 10 },
  { slug: 'philippines-remote-staff-goal-setting', title: 'Set practical goals for Philippines-based staff', excerpt: 'Tie goals to controllable work quality, reliable handoffs, learning, and business outcomes a manager can actually observe.', minutes: 9 },
  { slug: 'philippines-outsourced-order-reconciliation', title: 'Reconcile outsourced order records from the Philippines', excerpt: 'Compare order, payment, and fulfillment records without handing off the approval decisions that need an owner.', minutes: 10 },
  { slug: 'filipino-support-sla-expectations', title: 'Set clear service expectations for Filipino support staff', excerpt: 'Turn response expectations into practical queues, exceptions, and customer-safe handoffs.', minutes: 9 },
  { slug: 'outsourced-labor-knowledge-base-audit', title: 'Audit a knowledge base before outsourced staff use it', excerpt: 'Find stale, duplicated, and ownerless instructions before they create inconsistent work.', minutes: 10 },
  { slug: 'philippines-admin-file-naming', title: 'Create file-naming rules for Philippines admin support', excerpt: 'Make shared records easier to find with names that carry status, date, owner, and document type.', minutes: 8 },
  { slug: 'filipino-ecommerce-shipping-status', title: 'Handle ecommerce shipping status updates with Filipino staff', excerpt: 'Use verified carrier facts and clear next-update rules when customers are waiting on delivery.', minutes: 9 },
  { slug: 'outsourced-labor-manager-review-notes', title: 'Write manager review notes for outsourced labor', excerpt: 'Capture evidence, decisions, corrections, and next steps without turning feedback into vague impressions.', minutes: 9 },
  { slug: 'philippines-remote-staff-timezone-planning', title: 'Plan time-zone coverage for Philippines remote staff', excerpt: 'Map overlap, handoff windows, urgent work, and owner availability before setting service expectations.', minutes: 10 },
  { slug: 'filipino-bookkeeping-receipt-index', title: 'Build a receipt index with Filipino bookkeeping support', excerpt: 'Organize source documents for review while keeping coding and payment decisions with the right owner.', minutes: 10 },
  { slug: 'outsourced-labor-work-handoff-template', title: 'Create a practical handoff template for outsourced labor', excerpt: 'Give the next owner the status, evidence, risk, and action needed to continue work confidently.', minutes: 8 },
  { slug: 'philippines-crm-contact-deduplication', title: 'Set contact-duplicate rules for Philippines CRM support', excerpt: 'Make duplicate review safer with match fields, evidence, merge limits, and approval boundaries.', minutes: 10 },
  { slug: 'filipino-admin-approval-tracker', title: 'Build an approval tracker for Filipino admin support', excerpt: 'Keep requests visible from submission through decision, follow-up, and a documented outcome.', minutes: 9 },
  { slug: 'outsourced-labor-customer-commitment-log', title: 'Keep a customer commitment log for outsourced support', excerpt: 'Track promises, sources, due dates, and owners so updates remain accurate across a remote team.', minutes: 9 },
  { slug: 'philippines-vendor-onboarding-support', title: 'Scope vendor onboarding support from the Philippines', excerpt: 'Collect required details and checks while keeping acceptance and exceptions with a manager.', minutes: 10 },
  { slug: 'filipino-calendar-conflict-review', title: 'Review calendar conflicts with Filipino admin support', excerpt: 'Resolve scheduling collisions with rules for priorities, private events, time zones, and approval.', minutes: 8 },
  { slug: 'outsourced-labor-blocked-task-review', title: 'Review blocked tasks in an outsourced labor queue', excerpt: 'Separate missing information, owner decisions, and process failures so blocked work can move.', minutes: 9 },
  { slug: 'philippines-support-refund-evidence', title: 'Prepare refund evidence with Philippines support staff', excerpt: 'Assemble the facts a manager needs without transferring refund approval or policy exceptions.', minutes: 10 },
  { slug: 'filipino-operations-incident-notes', title: 'Write incident notes for Filipino operations support', excerpt: 'Record what happened, what was verified, what changed, and who owns the next action.', minutes: 9 },
  { slug: 'outsourced-labor-permission-change-log', title: 'Keep a permission-change log for outsourced labor', excerpt: 'Tie access changes to duties, approvals, dates, and offboarding actions.', minutes: 9 },
  { slug: 'philippines-admin-payment-support-boundaries', title: 'Set payment-support boundaries for Philippines admin staff', excerpt: 'Let staff prepare payment records while retaining approval, bank changes, and exceptions.', minutes: 10 },
  { slug: 'filipino-customer-complaint-triage', title: 'Triage customer complaints with Filipino support staff', excerpt: 'Classify urgency, verify facts, and route sensitive complaints without making unauthorized promises.', minutes: 10 },
  { slug: 'outsourced-labor-role-expansion-test', title: 'Test whether an outsourced role is ready to expand', excerpt: 'Use evidence from quality, exceptions, access, and manager review before adding a new work lane.', minutes: 9 },
  { slug: 'philippines-remote-staff-holiday-coverage', title: 'Plan holiday coverage for Philippines remote staff', excerpt: 'Protect recurring work with coverage owners, queue notes, escalation rules, and a clean return handoff.', minutes: 9 },
  ...august13BlogPosts,
  ...august14BlogPosts,
  ...august17BlogPosts,
  ...august19BlogPosts,
  ...aug21Posts,
  ...aug23Posts,
  { slug: 'outsourced-labor-daily-article-briefing', title: 'Run a daily article briefing for outsourced content teams', excerpt: 'A practical daily briefing routine for keeping Philippines-based article work focused, sourced, and reviewable.', minutes: 12 },
  { slug: 'philippines-content-source-freshness', title: 'Keep source freshness visible in Philippines content research', excerpt: 'How content teams can track source age, change risk, and review triggers without making unsupported freshness claims.', minutes: 12 },
  { slug: 'filipino-writer-feedback-loop', title: 'Build a useful feedback loop with Filipino article writers', excerpt: 'A practical way to make article feedback specific, teachable, and connected to the reader’s decision.', minutes: 12 },
  { slug: 'outsourced-blog-research-queue', title: 'Design a research queue for outsourced blog production', excerpt: 'How to route blog research from question to usable evidence while keeping the site’s Philippines staffing niche central.', minutes: 12 },
  { slug: 'philippines-article-refresh-review', title: 'Run a refresh review for Philippines staffing articles', excerpt: 'A bounded review method for updating guidance when sources, workflows, or reader questions change.', minutes: 12 },
  { slug: 'filipino-content-escalation-map', title: 'Map escalation paths for Filipino content support', excerpt: 'How to show writers and researchers when routine article work must move to an accountable owner.', minutes: 12 },
  { slug: 'outsourced-labor-content-brief-archive', title: 'Create an archive that makes outsourced content briefs reusable', excerpt: 'How to preserve useful editorial decisions without copying old articles or flattening distinct reader questions.', minutes: 12 },
  { slug: 'philippines-blog-reader-intent', title: 'Translate reader intent into Philippines staffing guidance', excerpt: 'A practical method for turning a search question into an article that helps a staffing decision.', minutes: 12 },
  { slug: 'filipino-article-proof-boundaries', title: 'Set proof boundaries for Filipino article production', excerpt: 'How to keep useful guidance separate from unsupported claims when remote content staff prepare public articles.', minutes: 12 },
  { slug: 'outsourced-content-handoff-window', title: 'Design a clean handoff window for outsourced content', excerpt: 'How to move article work between time zones without losing source context, decision ownership, or publication readiness.', minutes: 12 },
  { slug: 'philippines-content-calendar-recovery', title: 'Recover a Philippines content calendar after a delay', excerpt: 'How to restore an article routine after missed dates without hiding risk or rewriting publication history.', minutes: 12 },
  { slug: 'outsourced-labor-editorial-retrospective', title: 'Run an editorial retrospective for outsourced labor content', excerpt: 'A practical retrospective for improving recurring article work while keeping decisions, evidence, and role boundaries visible.', minutes: 12 },
] as const;

const aug10BlogSlugs = new Set([
  'philippines-virtual-assistant-task-priorities',
  'outsourced-labor-work-instructions',
  'filipino-operations-morning-checklist',
  'philippines-customer-support-qa-sampling',
  'outsourced-labor-shared-inbox-rules',
  'filipino-staff-knowledge-transfer-plan',
  'philippines-order-status-workflow',
  'outsourced-labor-daily-output-report',
  'filipino-admin-calendar-handoff',
  'philippines-remote-team-coverage-notes',
  'outsourced-labor-source-checklist',
  'filipino-staff-work-queue-review',
  'philippines-admin-document-retention',
  'outsourced-labor-escalation-response-time',
  'filipino-customer-support-reply-library',
  'philippines-workforce-absence-plan',
  'outsourced-labor-approval-matrix',
  'filipino-research-claim-review',
  'philippines-operations-weekly-scorecard',
  'outsourced-labor-process-audit',
  'filipino-staff-offboarding-checklist',
  'philippines-content-brief-template',
  'outsourced-labor-handoff-quality-check',
]);
const aug11BlogSlugs = new Set([
  'philippines-admin-inbox-triage','filipino-support-call-notes','outsourced-labor-workload-forecast','philippines-crm-cleanup-plan','filipino-vendor-follow-up-tracker','outsourced-labor-reporting-calendar','philippines-customer-feedback-coding','filipino-admin-travel-coordination','outsourced-labor-document-review','philippines-ecommerce-catalog-updates','filipino-staff-meeting-follow-up','outsourced-labor-quality-calibration','philippines-admin-invoice-preparation','filipino-research-source-freshness','outsourced-labor-work-sample-review','philippines-support-weekend-coverage','filipino-operations-exception-register','outsourced-labor-training-example-library','philippines-admin-permission-review','filipino-customer-status-updates','outsourced-labor-monthly-operations-review','philippines-remote-staff-goal-setting',
]);
const aug13BlogSlugs: Set<string> = new Set(august13BlogPosts.map((post) => post.slug));
const aug14BlogSlugs: Set<string> = new Set(august14BlogPosts.map((post) => post.slug));
const aug17BlogSlugs: Set<string> = new Set(august17BlogPosts.map((post) => post.slug));
const aug19BlogSlugs: Set<string> = new Set(august19BlogPosts.map((post) => post.slug));
const aug20BlogSlugs: Set<string> = new Set(['outsourced-labor-daily-article-briefing','philippines-content-source-freshness','filipino-writer-feedback-loop','outsourced-blog-research-queue','philippines-article-refresh-review','filipino-content-escalation-map','outsourced-labor-content-brief-archive','philippines-blog-reader-intent','filipino-article-proof-boundaries','outsourced-content-handoff-window','philippines-content-calendar-recovery','outsourced-labor-editorial-retrospective']);
const aug21BlogSlugs: Set<string> = new Set(aug21Posts.map((post) => post.slug));
const aug23BlogSlugs: Set<string> = new Set(aug23Posts.map((post) => post.slug));

const retiredAug13BlogSlugs = new Set([
  'philippines-outsourced-order-reconciliation','filipino-support-sla-expectations','outsourced-labor-knowledge-base-audit','philippines-admin-file-naming','filipino-ecommerce-shipping-status','outsourced-labor-manager-review-notes','philippines-remote-staff-timezone-planning','filipino-bookkeeping-receipt-index','outsourced-labor-work-handoff-template','philippines-crm-contact-deduplication','filipino-admin-approval-tracker','outsourced-labor-customer-commitment-log','philippines-vendor-onboarding-support','filipino-calendar-conflict-review','outsourced-labor-blocked-task-review','philippines-support-refund-evidence','filipino-operations-incident-notes','outsourced-labor-permission-change-log','philippines-admin-payment-support-boundaries','filipino-customer-complaint-triage','outsourced-labor-role-expansion-test','philippines-remote-staff-holiday-coverage',
]);

export const blogPosts = [...allBlogPosts].filter((post) => !retiredAug13BlogSlugs.has(post.slug)).sort((a, b) => {
  const batchRank = (slug: string) => aug23BlogSlugs.has(slug) ? 9 : aug21BlogSlugs.has(slug) ? 8 : aug20BlogSlugs.has(slug) ? 7 : aug19BlogSlugs.has(slug) ? 6 : aug17BlogSlugs.has(slug) ? 5 : aug14BlogSlugs.has(slug) ? 4 : aug13BlogSlugs.has(slug) ? 3 : aug11BlogSlugs.has(slug) ? 2 : aug10BlogSlugs.has(slug) ? 1 : 0;
  return batchRank(b.slug) - batchRank(a.slug) || a.slug.localeCompare(b.slug);
});

const baseBlogDetails = {
  "outsourced-labor-planning": {
    updated: "2026-07-21",
    takeaways: [
      "Choose one repeatable work lane, not a loose list of everything you want gone.",
      "Write down who approves money, policy changes, customer promises, and access requests.",
      "Test the role with real examples and a short review loop before adding more work."
    ],
    fitRows: [
      { signal: "Good first work", example: "Order updates, inbox sorting, CRM cleanup, report prep", reason: "The output is easy to show and check" },
      { signal: "Needs more planning", example: "Refund approval, pricing changes, legal replies, final payroll", reason: "A mistake can change money, policy, or risk" },
      { signal: "Poor first handoff", example: "Fix our operations or own the whole department", reason: "The goal and decision limits are not clear" }
    ],
    sections: [
      {
        heading: "Start with a work lane, not a job title",
        paragraphs: [
          "A title such as virtual assistant or operations specialist does not tell a worker what to do on Tuesday morning. Start with one lane of work that repeats. Customer ticket triage, order updates, calendar changes, CRM cleanup, and weekly report prep are easier to scope because you can point to a finished record.",
          "Gather five real examples from the last month. Mark what good work looks like, where the source data lives, and which cases needed a manager. If you cannot find examples, the process may still live in the owner's head. Record the work before hiring someone to run it.",
          "Keep the first scope narrow enough to review each day. Ten well-defined tasks are more useful than a page of broad duties. The worker should know where work arrives, what they may change, where they record the result, and when they must stop and ask."
        ]
      },
      {
        heading: "Draw the decision line",
        paragraphs: [
          "Filipino staff can prepare work without owning every decision. A customer support specialist may draft a reply but need approval for a large refund. An admin specialist may prepare an invoice list but should not change bank details. A reporting specialist may flag an odd number while a manager decides what it means for the business.",
          "Write these limits in plain words. Use two columns: the worker can do this, and a manager must approve this. Cover spending, customer promises, policy exceptions, account access, file deletion, public posts, and sensitive data. Add the name or role of the person who answers an escalation.",
          "Worker classification also needs a real review. The IRS says the label in a contract does not decide whether someone is an employee or an independent contractor. The working relationship and the level of control matter. Ask a qualified adviser about your setup rather than copying a contract from another business."
        ]
      },
      {
        heading: "Plan access before the start date",
        paragraphs: [
          "List every tool the role needs. Then remove anything that is only convenient. Create a named account for the worker instead of sharing an owner's login. Turn on multifactor authentication where the tool supports it. CISA recommends MFA because a stolen password alone is then not enough to enter the account.",
          "Start with the smallest useful permission. A support worker may need to read orders but not issue refunds. A report preparer may need a read-only data view rather than an admin account. Keep a simple access sheet with the tool, account owner, permission level, approval date, and offboarding step.",
          "NIST's Cybersecurity Framework 2.0 gives small and large organizations a common way to think about cyber risk. You do not need to turn a first hire into a security project, but you should know who owns access, how activity is reviewed, and how accounts are removed when work ends."
        ]
      },
      {
        heading: "Use a five-day launch test",
        paragraphs: [
          "Day one is for tools, examples, and one practice task. On day two, the worker completes a small batch while a manager checks every item. Days three and four repeat the work with fewer prompts. On day five, review errors, questions, speed, and any cases that crossed the decision line.",
          "Do not score the worker on output count alone. Check whether records are complete, links point to the right source, customer language matches your policy, and escalations arrived early enough to help. One short daily note can show work completed, blocked items, mistakes found, and questions for tomorrow.",
          "At the end of the week, choose one of three paths: keep the scope as it is, fix the instructions and test again, or stop the handoff. Add more tasks only when the first lane is steady. This keeps a weak process from spreading across more tools and customers."
        ]
      }
    ],
    brief: [
      "Role goal: Keep the order update queue current by 3 p.m. each business day.",
      "Work source: New items in the shared order board.",
      "Done means: Status checked, customer note drafted, source link saved, next action dated.",
      "Worker may decide: Tags, standard status wording, and follow-up date from the SOP.",
      "Manager approves: Refunds, rush fees, policy exceptions, and promises outside the SOP.",
      "Daily report: Completed items, blocked items, errors found, and questions."
    ],
    faqs: [
      { q: "How many tasks should the first role include?", a: "Use a small set that fits one work lane. The exact count matters less than having examples, a clear finish point, and enough manager time to review the work." },
      { q: "Should I hire a generalist or a specialist?", a: "Choose based on the first work lane. A generalist can handle related admin tasks. Work that needs a specific tool, license, or technical judgment may need a specialist." },
      { q: "Who should train Filipino staff?", a: "The person who knows the current work should lead the first examples. A manager should own approval rules even if another team member records the SOP." },
      { q: "When can I add more responsibilities?", a: "Add work after the first lane is accurate, access is controlled, and the review routine catches problems. Expand one related task group at a time." }
    ],
    sources: [
      { name: "IRS: Independent Contractor Defined", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined", note: "Worker classification depends on the facts of the relationship rather than the contract label alone." },
      { name: "NIST Cybersecurity Framework 2.0", url: "https://www.nist.gov/cyberframework", note: "A risk-management reference for access, oversight, and response planning." },
      { name: "CISA: Require Multifactor Authentication", url: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication", note: "Plain guidance for adding another layer of account protection." },
      { name: "SBA: Hire and Manage Employees", url: "https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees", note: "Small-business guidance on hiring duties and employee management." }
    ]
  }
} as const;

const batchTopics = [
  ['philippines-operations-support-sop', 'Operations support SOPs', 'an operations support SOP', 'SBA hiring and managing employees'],
  ['filipino-customer-support-training-plan', 'Customer support training', 'a customer support training plan', 'SBA hiring and managing employees'],
  ['philippines-admin-assistant-onboarding', 'Admin onboarding', 'an admin assistant onboarding checklist', 'NIST Cybersecurity Framework 2.0'],
  ['outsourced-labor-quality-scorecard', 'Quality scorecards', 'an outsourced labor quality scorecard', 'NIST Cybersecurity Framework 2.0'],
  ['filipino-virtual-assistant-daily-routine', 'Virtual assistant routines', 'a virtual assistant daily routine', 'SBA hiring and managing employees'],
  ['philippines-bookkeeping-support-controls', 'Bookkeeping support controls', 'bookkeeping support controls', 'IRS Independent Contractor Defined'],
  ['outsourced-labor-inbox-management', 'Inbox management', 'a safe inbox management handoff', 'CISA Require Multifactor Authentication'],
  ['filipino-lead-research-workflow', 'Lead research workflows', 'a lead research workflow', 'SBA hiring and managing employees'],
  ['philippines-ecommerce-order-support', 'Ecommerce order support', 'ecommerce order support', 'SBA hiring and managing employees'],
  ['outsourced-labor-weekly-review-meeting', 'Weekly reviews', 'a weekly outsourced labor review', 'SBA hiring and managing employees'],
  ['filipino-staff-access-management', 'Staff access management', 'staff access management', 'CISA Require Multifactor Authentication'],
  ['philippines-content-operations-workflow', 'Content operations', 'a content operations workflow', 'NIST Cybersecurity Framework 2.0'],
  ['outsourced-labor-call-handling-sop', 'Call handling', 'a call-handling SOP', 'SBA hiring and managing employees'],
  ['filipino-data-entry-quality-checks', 'Data entry checks', 'data entry quality checks', 'NIST Cybersecurity Framework 2.0'],
  ['philippines-backup-coverage-schedule', 'Backup coverage', 'a Philippines backup coverage schedule', 'SBA hiring and managing employees'],
  ['outsourced-labor-task-queue-design', 'Task queues', 'an outsourced labor task queue', 'SBA hiring and managing employees'],
  ['filipino-staff-performance-feedback', 'Performance feedback', 'feedback for Filipino staff', 'SBA hiring and managing employees'],
  ['philippines-research-assistant-brief', 'Research briefs', 'a research assistant brief', 'SBA hiring and managing employees'],
  ['outsourced-labor-process-improvement-loop', 'Process improvement', 'an outsourced labor improvement loop', 'NIST Cybersecurity Framework 2.0'],
  ['filipino-team-manager-handoff-plan', 'Manager handoffs', 'a manager handoff plan', 'SBA hiring and managing employees'],
] as const;

const batchSources: Record<string, { name: string; url: string; note: string }> = {
  'SBA hiring and managing employees': { name: 'SBA: Hire and Manage Employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'Small-business guidance for hiring, managing, and setting expectations.' },
  'NIST Cybersecurity Framework 2.0': { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework', note: 'A practical reference for identifying and managing access and operational risk.' },
  'IRS Independent Contractor Defined': { name: 'IRS: Independent Contractor Defined', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined', note: 'Worker classification depends on the facts of the working relationship.' },
  'CISA Require Multifactor Authentication': { name: 'CISA: Require Multifactor Authentication', url: 'https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication', note: 'Guidance for adding an extra layer of account protection.' },
};

const batchDetails = Object.fromEntries(batchTopics.map(([slug, topic, phrase, sourceKey], index) => {
  const previous = blogPosts[(index + 1) % blogPosts.length];
  const next = blogPosts[(index + 2) % blogPosts.length];
  const source = batchSources[sourceKey];
  return [slug, {
    updated: '2026-08-07',
    takeaways: [`Keep ${phrase} narrow enough to review every day.`, 'Write the decision line before granting access.', 'Use examples, a scorecard, and a named escalation owner.'],
    fitRows: [
      { signal: 'Good first scope', example: 'Repeatable records, updates, checks, or drafts', reason: 'The finished output is visible and easy to sample' },
      { signal: 'Needs approval', example: 'Money, policy exceptions, sensitive data, or promises', reason: 'A manager must retain the decision' },
      { signal: 'Not ready', example: 'Own the whole function without a queue or examples', reason: 'The scope cannot be trained or measured yet' },
    ],
    sections: [
      { heading: `Define ${topic.toLowerCase()} as a work lane`, paragraphs: [`Start with one repeatable queue for ${phrase}. Name where work arrives, what a complete item contains, and what evidence proves it is done. A narrow lane lets a manager compare real output against an example instead of judging vague effort.`, 'Collect five recent examples before training. Mark the source, the expected finish, common exceptions, and the person who made the final decision. Turn those examples into short steps and a checklist.', 'Keep the first week small. Review every item, record questions, and add a task only after the first one is accurate and predictable.'] },
      { heading: 'Set the decision and access boundaries', paragraphs: ['Separate preparation from approval. The staff member can gather, update, draft, tag, and flag work inside the SOP. A manager should approve refunds, unusual commitments, access changes, deletions, and policy exceptions.', 'Use a named account and the smallest useful permission. Keep an access list with the tool, permission, owner, approval date, and offboarding action. Never make a shared password the process.', 'Add an escalation route with a response expectation. A blocked item should show the source, the question, the deadline, and the person who can decide.'] },
      { heading: 'Measure quality before speed', paragraphs: ['A useful scorecard checks accuracy, completeness, source links, judgment, and timeliness. Count output only after the work meets the definition of done. One clear error pattern is more useful than a large volume number.', 'Run a daily review during launch, then move to samples when the work is steady. Discuss one strong example, one correction, and one instruction change. Keep the scorecard visible to both the worker and manager.', 'At the end of the first week, keep the scope, repair the SOP and retest, or stop the handoff. Do not expand a process that still hides repeated errors.'] },
    ],
    brief: [`Role goal: Complete the ${phrase} queue by the agreed daily cutoff.`, 'Work source: The named board, inbox, or report supplied by the manager.', 'Done means: The required fields are complete, the source is linked, and the next action is recorded.', 'Worker may decide: Standard tags, formatting, and actions listed in the SOP.', 'Manager approves: Exceptions involving money, policy, access, deletion, or customer promises.', 'Daily report: Completed items, blocked items, errors found, and questions.'],
    faqs: [
      { q: 'How should the first week be structured?', a: 'Use examples and practice on day one, supervised work on days two and three, lighter review on day four, and a scope decision on day five.' },
      { q: 'What should stay with the manager?', a: 'Keep financial approvals, policy exceptions, sensitive access, unusual customer promises, and process changes with a named manager.' },
      { q: 'When can the role expand?', a: 'Expand after the first lane is accurate, access is controlled, and the review process catches exceptions early.' },
    ],
    sources: [source],
    related: [previous.slug, next.slug, 'outsourced-labor-planning'],
  }];
}));

const nextBatchTopics = allBlogPosts.slice(-46).map((post, index) => [post.slug, post.title.replace(/^.*?for |^.*?a /i, '').replace(/:.*$/, ''), post.title.toLowerCase(), index % 3 === 0 ? 'NIST Cybersecurity Framework 2.0' : index % 3 === 1 ? 'SBA hiring and managing employees' : 'CISA Require Multifactor Authentication'] as const);
const explicitBlogDateOverrides = {
  'philippines-operations-support-sop': '2026-08-20',
  'philippines-virtual-assistant-task-priorities': '2026-08-10',
  'outsourced-labor-work-instructions': '2026-08-10',
  'filipino-operations-morning-checklist': '2026-08-10',
} as const;
const nextBatchDetails = Object.fromEntries(nextBatchTopics.map(([slug, topic, phrase, sourceKey], index) => {
  const source = batchSources[sourceKey];
  const related = blogPosts.filter((post) => post.slug !== slug).slice((index % 10), (index % 10) + 3).map((post) => post.slug);
  return [slug, {
    updated: explicitBlogDateOverrides[slug as keyof typeof explicitBlogDateOverrides] || '2026-08-10',
    takeaways: [`Keep ${topic.toLowerCase()} focused on one repeatable queue.`, 'Write approval and access limits before launch.', 'Review examples and exceptions before expanding the role.'],
    fitRows: [
      { signal: 'Good first scope', example: 'Repeatable records, updates, checks, or drafts', reason: 'The finished output is visible and easy to sample' },
      { signal: 'Needs approval', example: 'Money, policy exceptions, sensitive data, or promises', reason: 'A manager must retain the decision' },
      { signal: 'Not ready', example: 'A broad function without examples or a queue', reason: 'The scope cannot be trained or measured yet' },
    ],
    sections: [
      { heading: `Define ${topic.toLowerCase()} as a work lane`, paragraphs: [`Start with ${phrase} as one visible queue. Name where work arrives, what a complete item contains, and what evidence proves it is done. A narrow lane lets a manager compare real output against an example.`, 'Collect five recent examples before training. Mark the source, expected finish, common exceptions, and person who made the final decision. Turn those examples into short steps and a checklist.', 'Keep the first week small. Review every item, record questions, and add a task only after the first one is accurate and predictable.'] },
      { heading: 'Set the decision and access boundaries', paragraphs: ['Separate preparation from approval. Staff can gather, update, draft, tag, and flag work inside the SOP. A manager should approve refunds, unusual commitments, access changes, deletions, and policy exceptions.', 'Use a named account and the smallest useful permission. Keep an access list with the tool, permission, owner, approval date, and offboarding action. Never make a shared password the process.', 'Add an escalation route with a response expectation. A blocked item should show the source, question, deadline, and person who can decide.'] },
      { heading: 'Measure quality before speed', paragraphs: ['A useful scorecard checks accuracy, completeness, source links, judgment, and timeliness. Count output only after the work meets the definition of done.', 'Run a daily review during launch, then move to samples when the work is steady. Discuss one strong example, one correction, and one instruction change.', 'At the end of the first week, keep the scope, repair the SOP and retest, or stop the handoff. Do not expand a process that still hides repeated errors.'] },
    ],
    brief: [`Role goal: Complete the ${phrase} queue by the agreed daily cutoff.`, 'Work source: The named board, inbox, or report supplied by the manager.', 'Done means: Required fields are complete, the source is linked, and the next action is recorded.', 'Worker may decide: Standard tags, formatting, and actions listed in the SOP.', 'Manager approves: Exceptions involving money, policy, access, deletion, or customer promises.', 'Daily report: Completed items, blocked items, errors found, and questions.'],
    faqs: [
      { q: 'How should the first week be structured?', a: 'Use examples and practice on day one, supervised work on days two and three, lighter review on day four, and a scope decision on day five.' },
      { q: 'What should stay with the manager?', a: 'Keep financial approvals, policy exceptions, sensitive access, unusual customer promises, and process changes with a named manager.' },
      { q: 'When can the role expand?', a: 'Expand after the first lane is accurate, access is controlled, and the review process catches exceptions early.' },
    ],
    sources: [source],
    related,
  }];
}));

const aug11Topics = [
  ['philippines-admin-inbox-triage','Admin inbox triage','admin inbox triage','CISA Require Multifactor Authentication'],
  ['filipino-support-call-notes','Support call notes','support call notes','SBA hiring and managing employees'],
  ['outsourced-labor-workload-forecast','Workload forecasting','workload forecasting','SBA hiring and managing employees'],
  ['philippines-crm-cleanup-plan','CRM cleanup','CRM cleanup','NIST Cybersecurity Framework 2.0'],
  ['filipino-vendor-follow-up-tracker','Vendor follow-up','vendor follow-up tracking','SBA hiring and managing employees'],
  ['outsourced-labor-reporting-calendar','Reporting calendars','a reporting calendar','SBA hiring and managing employees'],
  ['philippines-customer-feedback-coding','Customer feedback coding','customer feedback coding','NIST Cybersecurity Framework 2.0'],
  ['filipino-admin-travel-coordination','Travel coordination','admin travel coordination','SBA hiring and managing employees'],
  ['outsourced-labor-document-review','Document review','document review','NIST Cybersecurity Framework 2.0'],
  ['philippines-ecommerce-catalog-updates','Ecommerce catalog updates','ecommerce catalog updates','SBA hiring and managing employees'],
  ['filipino-staff-meeting-follow-up','Meeting follow-up','meeting follow-up','SBA hiring and managing employees'],
  ['outsourced-labor-quality-calibration','Quality calibration','quality calibration','NIST Cybersecurity Framework 2.0'],
  ['philippines-admin-invoice-preparation','Invoice preparation','invoice preparation','SBA hiring and managing employees'],
  ['filipino-research-source-freshness','Source freshness','source freshness checks','NIST Cybersecurity Framework 2.0'],
  ['outsourced-labor-work-sample-review','Work sample review','work sample review','SBA hiring and managing employees'],
  ['philippines-support-weekend-coverage','Weekend coverage','weekend support coverage','SBA hiring and managing employees'],
  ['filipino-operations-exception-register','Exception registers','an operations exception register','NIST Cybersecurity Framework 2.0'],
  ['outsourced-labor-training-example-library','Training examples','a training example library','SBA hiring and managing employees'],
  ['philippines-admin-permission-review','Permission review','admin permission review','CISA Require Multifactor Authentication'],
  ['filipino-customer-status-updates','Customer status updates','customer status updates','SBA hiring and managing employees'],
  ['outsourced-labor-monthly-operations-review','Monthly operations reviews','a monthly operations review','SBA hiring and managing employees'],
  ['philippines-remote-staff-goal-setting','Staff goal setting','staff goal setting','SBA hiring and managing employees'],
] as const;
const aug11Details = Object.fromEntries(aug11Topics.map(([slug, topic, phrase, sourceKey], index) => {
  const source = batchSources[sourceKey];
  const related = blogPosts.filter((post) => post.slug !== slug).slice(index % 12, (index % 12) + 3).map((post) => post.slug);
  return [slug, {
    updated: '2026-08-12',
    takeaways: [`Keep ${phrase} tied to a visible business outcome.`, 'Separate preparation from decisions involving money, policy, access, or customer promises.', 'Use a dated example and a named owner when work needs review.'],
    fitRows: [
      { signal: 'Good first scope', example: 'Repeatable records, updates, checks, or drafts', reason: 'The finished output is visible and easy to sample' },
      { signal: 'Needs approval', example: 'Money, policy exceptions, sensitive data, or promises', reason: 'A manager must retain the decision' },
      { signal: 'Not ready', example: 'A broad function without examples or a queue', reason: 'The scope cannot be trained or measured' },
    ],
    sections: [
      { heading: `Define ${topic.toLowerCase()} around the reader's real work`, paragraphs: [`Start with ${phrase} as one bounded queue. Name the input, the finished record, and the decision that remains with the manager. The person doing the work should be able to tell when an item is complete without guessing.`, 'Use recent examples that include both ordinary cases and exceptions. Explain which facts came from the source, which fields must be checked, and what a useful handoff looks like. Examples make an abstract role teachable.', 'Pilot the lane with a small set of items. Review completeness and judgment before increasing volume; a fast queue that creates rework is not a dependable support lane.'] },
      { heading: 'Protect decisions and information', paragraphs: ['Let staff prepare, organize, draft, and flag work inside the agreed scope. Keep approvals for refunds, payments, policy exceptions, access changes, deletions, and unusual customer commitments with a named owner.', 'Use individual accounts and the smallest permission that works. Record what the role can see, what it can change, who approved it, and what happens when the assignment changes. This keeps convenience from becoming permanent access.', 'Give blocked work a clear escalation path. Include the source, question, deadline, and the person who can decide so an exception does not sit silently in the queue.'] },
      { heading: 'Review the signal that matters', paragraphs: ['Choose measures that fit the lane: accuracy, completeness, timeliness, source quality, or customer clarity. Explain what the measure does not prove so a single number is not mistaken for overall performance.', 'Review a few examples with the worker and manager together. Keep one strong example, one correction, and one instruction change. That small record improves the next handoff without turning review into a scorekeeping exercise.', 'After the pilot, keep the scope, revise the instructions and retest, or stop the lane. Expand only when the evidence shows that quality and ownership are holding.'] },
    ],
    brief: [`Role goal: Complete the ${phrase} queue by the agreed cutoff.`, 'Work source: The named inbox, board, report, or system supplied by the manager.', 'Done means: Required fields are complete, supporting evidence is linked, and the next action is dated.', 'Worker may decide: Standard formatting, tags, and steps listed in the approved instructions.', 'Manager approves: Exceptions involving money, policy, access, deletion, or customer promises.', 'Handoff note: Completed items, blocked items, questions, and any pattern worth reviewing.'],
    faqs: [
      { q: 'What should the first review cover?', a: 'Check whether the examples were followed, the evidence is traceable, the record is complete, and exceptions reached the right owner.' },
      { q: 'When should a worker pause?', a: 'Pause when the source is missing, the request crosses an approval boundary, or the instruction does not cover the case.' },
      { q: 'When can the scope expand?', a: 'Expand after the first lane is accurate, access is appropriate, and the review process catches exceptions early.' },
    ],
    sources: [source],
    related,
  }];
}));

const aug13Topics = [
  ['philippines-outsourced-order-reconciliation','order reconciliation','outsourced order reconciliation','SBA hiring and managing employees'], ['filipino-support-sla-expectations','support expectations','support service expectations','SBA hiring and managing employees'], ['outsourced-labor-knowledge-base-audit','knowledge base audit','a knowledge base audit','NIST Cybersecurity Framework 2.0'], ['philippines-admin-file-naming','file naming','admin file naming rules','NIST Cybersecurity Framework 2.0'], ['filipino-ecommerce-shipping-status','shipping status','ecommerce shipping status updates','SBA hiring and managing employees'], ['outsourced-labor-manager-review-notes','manager review notes','manager review notes','SBA hiring and managing employees'], ['philippines-remote-staff-timezone-planning','time-zone planning','remote staff time-zone planning','SBA hiring and managing employees'], ['filipino-bookkeeping-receipt-index','receipt indexing','bookkeeping receipt indexing','IRS Independent Contractor Defined'], ['outsourced-labor-work-handoff-template','handoff templates','a work handoff template','SBA hiring and managing employees'], ['philippines-crm-contact-deduplication','contact deduplication','CRM contact deduplication','NIST Cybersecurity Framework 2.0'], ['filipino-admin-approval-tracker','approval tracking','an admin approval tracker','SBA hiring and managing employees'], ['outsourced-labor-customer-commitment-log','commitment logs','a customer commitment log','SBA hiring and managing employees'], ['philippines-vendor-onboarding-support','vendor onboarding','vendor onboarding support','SBA hiring and managing employees'], ['filipino-calendar-conflict-review','calendar conflicts','calendar conflict review','SBA hiring and managing employees'], ['outsourced-labor-blocked-task-review','blocked task review','blocked task review','SBA hiring and managing employees'], ['philippines-support-refund-evidence','refund evidence','support refund evidence','SBA hiring and managing employees'], ['filipino-operations-incident-notes','incident notes','operations incident notes','NIST Cybersecurity Framework 2.0'], ['outsourced-labor-permission-change-log','permission changes','a permission change log','CISA Require Multifactor Authentication'], ['philippines-admin-payment-support-boundaries','payment support','admin payment support boundaries','SBA hiring and managing employees'], ['filipino-customer-complaint-triage','complaint triage','customer complaint triage','SBA hiring and managing employees'], ['outsourced-labor-role-expansion-test','role expansion','a role expansion test','SBA hiring and managing employees'], ['philippines-remote-staff-holiday-coverage','holiday coverage','remote staff holiday coverage','SBA hiring and managing employees'],
] as const;
const aug13DetailTemplate = (topic: string, phrase: string, sourceKey: keyof typeof batchSources, index: number) => {
  const source = batchSources[sourceKey];
  const related = blogPosts.slice(index % 14, (index % 14) + 3).map((post) => post.slug);
  return {
    takeaways: [`Keep ${phrase} tied to a visible business result.`, 'Separate preparation from decisions involving money, policy, access, or customer promises.', 'Use a named owner when a case needs review.'],
    fitRows: [{ signal: 'Good first scope', example: 'Repeatable records, updates, checks, or drafts', reason: 'The finished output is visible and easy to sample' }, { signal: 'Needs approval', example: 'Money, policy exceptions, sensitive data, or promises', reason: 'A manager must retain the decision' }, { signal: 'Not ready', example: 'A broad function without examples or a clear queue', reason: 'The scope cannot be trained or measured' }],
    sections: [
      { heading: `Define ${topic} around the real work`, paragraphs: [`Start with ${phrase} as one bounded lane. Name the input, the finished record, and the decision that remains with the manager. The person doing the work should know when an item is complete.`, 'Use recent examples that include ordinary cases and exceptions. Mark which facts came from the source, which fields need checking, and what a useful handoff contains. This makes the role easier to explain and review.', 'Pilot a small set of items. Check completeness and judgment before increasing volume. Fast work that creates rework is not dependable support.'] },
      { heading: 'Protect decisions and information', paragraphs: ['Let staff prepare, organize, draft, and flag work inside the agreed scope. Keep approvals for refunds, payments, policy exceptions, access changes, deletions, and unusual customer commitments with a named owner.', 'Use individual accounts and the smallest permission that works. Record what the role can see, what it can change, who approved it, and what happens when the assignment changes.', 'Give blocked work a clear escalation path. Include the source, question, deadline, and person who can decide so an exception does not sit silently.'] },
      { heading: 'Review the signal that matters', paragraphs: ['Choose measures that fit the lane: accuracy, completeness, timeliness, source quality, or customer clarity. Explain what the measure does not prove so one number is not mistaken for overall performance.', 'Review a few examples with the worker and manager together. Keep one strong example, one correction, and one instruction change. That small record improves the next handoff.', 'After the pilot, keep the scope, revise the instructions and retest, or stop the lane. Expand only when quality and ownership are holding.'] },
    ],
    brief: [`Role goal: Complete the ${phrase} lane by the agreed cutoff.`, 'Work source: The named inbox, board, report, or system supplied by the manager.', 'Done means: Required fields are complete, supporting evidence is linked, and the next action is dated.', 'Worker may decide: Standard formatting, tags, and steps listed in the approved instructions.', 'Manager approves: Exceptions involving money, policy, access, deletion, or customer promises.', 'Handoff note: Completed items, blocked items, questions, and patterns worth reviewing.'],
    faqs: [{ q: 'What should the first review cover?', a: 'Check whether examples were followed, evidence is traceable, the record is complete, and exceptions reached the right owner.' }, { q: 'When should a worker pause?', a: 'Pause when the source is missing, the request crosses an approval boundary, or the instruction does not cover the case.' }, { q: 'When can the scope expand?', a: 'Expand after the first lane is accurate, access is appropriate, and review catches exceptions early.' }],
    sources: [source], related,
  };
};

const aug13Details = {
  'philippines-outsourced-order-reconciliation': { updated: '2026-08-13', ...aug13DetailTemplate('order reconciliation', 'outsourced order reconciliation', 'SBA hiring and managing employees', 0) },
  'filipino-support-sla-expectations': { updated: '2026-08-13', ...aug13DetailTemplate('support expectations', 'support service expectations', 'SBA hiring and managing employees', 1) },
  'outsourced-labor-knowledge-base-audit': { updated: '2026-08-13', ...aug13DetailTemplate('knowledge base audit', 'a knowledge base audit', 'NIST Cybersecurity Framework 2.0', 2) },
  'philippines-admin-file-naming': { updated: '2026-08-13', ...aug13DetailTemplate('file naming', 'admin file naming rules', 'NIST Cybersecurity Framework 2.0', 3) },
  'filipino-ecommerce-shipping-status': { updated: '2026-08-13', ...aug13DetailTemplate('shipping status', 'ecommerce shipping status updates', 'SBA hiring and managing employees', 4) },
  'outsourced-labor-manager-review-notes': { updated: '2026-08-13', ...aug13DetailTemplate('manager review notes', 'manager review notes', 'SBA hiring and managing employees', 5) },
  'philippines-remote-staff-timezone-planning': { updated: '2026-08-13', ...aug13DetailTemplate('time-zone planning', 'remote staff time-zone planning', 'SBA hiring and managing employees', 6) },
  'filipino-bookkeeping-receipt-index': { updated: '2026-08-13', ...aug13DetailTemplate('receipt indexing', 'bookkeeping receipt indexing', 'IRS Independent Contractor Defined', 7) },
  'outsourced-labor-work-handoff-template': { updated: '2026-08-13', ...aug13DetailTemplate('handoff templates', 'a work handoff template', 'SBA hiring and managing employees', 8) },
  'philippines-crm-contact-deduplication': { updated: '2026-08-13', ...aug13DetailTemplate('contact deduplication', 'CRM contact deduplication', 'NIST Cybersecurity Framework 2.0', 9) },
  'filipino-admin-approval-tracker': { updated: '2026-08-13', ...aug13DetailTemplate('approval tracking', 'an admin approval tracker', 'SBA hiring and managing employees', 10) },
  'outsourced-labor-customer-commitment-log': { updated: '2026-08-13', ...aug13DetailTemplate('commitment logs', 'a customer commitment log', 'SBA hiring and managing employees', 11) },
  'philippines-vendor-onboarding-support': { updated: '2026-08-13', ...aug13DetailTemplate('vendor onboarding', 'vendor onboarding support', 'SBA hiring and managing employees', 12) },
  'filipino-calendar-conflict-review': { updated: '2026-08-13', ...aug13DetailTemplate('calendar conflicts', 'calendar conflict review', 'SBA hiring and managing employees', 13) },
  'outsourced-labor-blocked-task-review': { updated: '2026-08-13', ...aug13DetailTemplate('blocked task review', 'blocked task review', 'SBA hiring and managing employees', 14) },
  'philippines-support-refund-evidence': { updated: '2026-08-13', ...aug13DetailTemplate('refund evidence', 'support refund evidence', 'SBA hiring and managing employees', 15) },
  'filipino-operations-incident-notes': { updated: '2026-08-13', ...aug13DetailTemplate('incident notes', 'operations incident notes', 'NIST Cybersecurity Framework 2.0', 16) },
  'outsourced-labor-permission-change-log': { updated: '2026-08-13', ...aug13DetailTemplate('permission changes', 'a permission change log', 'CISA Require Multifactor Authentication', 17) },
  'philippines-admin-payment-support-boundaries': { updated: '2026-08-13', ...aug13DetailTemplate('payment support', 'admin payment support boundaries', 'SBA hiring and managing employees', 18) },
  'filipino-customer-complaint-triage': { updated: '2026-08-13', ...aug13DetailTemplate('complaint triage', 'customer complaint triage', 'SBA hiring and managing employees', 19) },
  'outsourced-labor-role-expansion-test': { updated: '2026-08-13', ...aug13DetailTemplate('role expansion', 'a role expansion test', 'SBA hiring and managing employees', 20) },
  'philippines-remote-staff-holiday-coverage': { updated: '2026-08-13', ...aug13DetailTemplate('holiday coverage', 'remote staff holiday coverage', 'SBA hiring and managing employees', 21) },
};

const replacementDetail = (topic: string, phrase: string, source: { name: string; url: string; note: string }) => ({
  takeaways: [`Define the evidence needed for ${topic} before work starts.`, 'Keep approvals for money, policy exceptions, access changes, and customer promises with a named owner.', 'Review a small set of completed cases before widening the lane.'],
  fitRows: [{ signal: 'Good first scope', example: 'Repeatable records, checks, updates, or drafts', reason: 'The result is visible and can be sampled' }, { signal: 'Needs approval', example: 'Money, policy exceptions, access changes, or promises', reason: 'A manager retains the decision' }, { signal: 'Not ready', example: 'A broad function without examples or a clear queue', reason: 'The work cannot be trained or reviewed reliably' }],
  sections: [
    { heading: `Make ${topic} a bounded work lane`, paragraphs: [`${phrase} should begin with a named input, a finished record, and a clear stop condition. A Philippines-based specialist can prepare and organize the work when those boundaries are visible.`, `Use recent examples to show the ordinary path and the exceptions. Record which source proves each important field and what the next owner needs to decide. This makes ${topic} teachable without relying on informal context.`, 'Start with a small sample and review the actual records. If the same question appears repeatedly, improve the instruction or source before increasing the queue.'] },
    { heading: 'Keep decisions with the right owner', paragraphs: ['Preparation and approval are different jobs. Staff may gather facts, draft a response, or flag a mismatch, while a manager retains decisions about refunds, payments, policy, access, deletion, and unusual customer commitments.', `Give each ${topic} case a status that explains what is happening: ready, waiting for source evidence, waiting for approval, or escalated. A status without an owner only hides delay.`, 'Use individual access and a written escalation path. Include the question, evidence, deadline, and decision owner so blocked work can move safely.'] },
    { heading: 'Review quality through real examples', paragraphs: [`For ${topic}, review accuracy, completeness, timeliness, and the usefulness of the handoff. Choose the measures that fit the lane instead of rewarding volume alone.`, 'Keep one accepted example and one corrected example in the working guidance. Explain why the result passed or needed revision so the standard remains practical.', 'After the review, keep the scope, revise the instructions, or stop the lane. Expansion should follow evidence from the work itself.'] },
  ],
  brief: [`Role goal: Complete the ${phrase} lane by the agreed cutoff.`, 'Work source: The named system, queue, or folder supplied by the manager.', 'Done means: Required fields are complete, evidence is linked, and the next action is dated.', 'Manager approves: Exceptions involving money, policy, access, deletion, or customer promises.'],
  faqs: [{ q: 'When should the worker pause?', a: 'Pause when the source is missing, the request crosses an approval boundary, or the instructions do not cover the case.' }, { q: 'What should the manager review first?', a: 'Review the source trail, completeness, exception handling, and whether the handoff makes the next decision clear.' }],
  sources: [source], related: ['outsourced-labor-planning', 'philippines-operations-support-sop'],
});

export const blogDetails = { ...baseBlogDetails, ...batchDetails, ...nextBatchDetails, ...aug11Details, ...aug13Details, ...august13BlogDetails, ...august14BlogDetails, ...august17BlogDetails, ...august19BlogDetails } as const;

export const stats = [{label:'First work lane',value:'One queue',note:'a visible input and finish line make review easier'},{label:'Pilot review',value:'Daily',note:'reduce checks only after the work is steady'},{label:'Decision line',value:'Written',note:'money, policy, access, and customer promises stay controlled'}] as const;

export const staffingOffer = {
  partner: 'a Philippines staffing partner',
  promise: 'Get a staffing plan for Filipino talent built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable Filipino talent but do not want to screen alone',
    'teams that want trained Philippines-based support, backup coverage, and a clear manager path',
    'companies that need Filipino talent for admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'A staffing partner can match Filipino talent to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every plan depends on the role, schedule, skills, tools, and management needs. Send the details and we can route the request to a partner that sources talent only in the Philippines.';
