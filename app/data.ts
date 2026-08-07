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
export const blogPosts = [
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
] as const;

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

export const blogDetails = { ...baseBlogDetails, ...batchDetails } as const;

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
