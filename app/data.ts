export const site = {
  "domain": "OutsourcedLabor.com",
  "slug": "outsourcedlabor",
  "brand": "Outsourced Labor",
  "primary": "outsourced labor",
  "audience": "owners comparing outsourced labor models for recurring business work",
  "angle": "role scoping, plan controls, training, labor mix, and quality checks",
  "style": "Industrial staffing board",
  "dark": "#18181b",
  "color": "#52525b",
  "accent": "#f97316",
  "heroImage": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "alt": "distributed team completing business operations tasks",
  "badge": "Labor model"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using outsourced labor with clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["order updates and vendor follow-up", "daily task boards and status notes", "SOP cleanup from recorded work", "simple research and list building"],
    "qualityControls": ["daily done list with links", "weekly owner scorecard", "approval rules for refunds, spend, and customer promises"],
    "firstWeek": ["share five real examples", "limit tool access to the first task lane", "review output each day before adding more work"],
    "faqs": [
      { "q": "What operations work should be outsourced first?", "a": "Start with repeat work that already has examples, such as updates, lists, checklists, and vendor follow-up." },
      { "q": "Who should own process changes?", "a": "Keep process decisions with a manager. The outsourced staff member can suggest fixes, but an owner should approve changes." }
    ]
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using outsourced labor with clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["ticket triage and tagging", "saved-reply support for common questions", "order status updates", "call notes and follow-up tasks"],
    "qualityControls": ["sample replies before live sending", "response-time and CSAT review", "clear escalation list for refunds or angry customers"],
    "firstWeek": ["train on the top 20 questions", "start with draft replies", "review ten real tickets together"],
    "faqs": [
      { "q": "Can outsourced labor answer customers directly?", "a": "Yes, after training. Start with drafts or low-risk replies, then open live responses once quality is steady." },
      { "q": "What should stay with the business owner?", "a": "Refund decisions, policy exceptions, angry VIP customers, and anything that can change the customer relationship." }
    ]
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using outsourced labor with clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["calendar cleanup and scheduling", "inbox sorting", "document formatting", "CRM updates and data cleanup"],
    "qualityControls": ["access only to needed folders", "daily admin log", "manager approval before sending sensitive messages"],
    "firstWeek": ["record the current admin process", "hand over one inbox or calendar lane", "check mistakes daily and update the SOP"],
    "faqs": [
      { "q": "Is admin support a good first outsourced role?", "a": "Often, yes. It works best when the tasks repeat and the owner can show examples of good work." },
      { "q": "How much access should an admin assistant get?", "a": "Give the smallest access that lets the work get done. Add more only after the first tasks are stable." }
    ]
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using outsourced labor with clear SOPs, weekly review, and measurable handoffs.",
    "bestTasks": ["weekly KPI updates", "sample checks on tickets or orders", "spreadsheet cleanup", "manager-ready summary notes"],
    "qualityControls": ["source links for every number", "sample-size notes", "red flag list for odd data", "second check before reports go to clients"],
    "firstWeek": ["pick one weekly report", "define the source of truth", "compare the first report against a manager version"],
    "faqs": [
      { "q": "Can outsourced staff own QA reporting?", "a": "They can prepare and check reports. A manager should still own the final business decision." },
      { "q": "What makes QA handoff safe?", "a": "Use source links, a scorecard, and a clear list of issues that must be escalated." }
    ]
  }
] as const;
export const blogPosts = [
  {
    "slug": "outsourced-labor-planning",
    "title": "Outsourced Labor: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "outsourced-labor-tasks-to-outsource",
    "title": "Outsourced Labor: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-labor-provider-questions",
    "title": "Outsourced Labor: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-labor-onboarding-checklist",
    "title": "Outsourced Labor: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;
export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const stealthOffer = {
  partner: 'Stealth Agents',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
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
  { step: '2', title: 'Match the staff', body: 'Stealth Agents can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and Stealth Agents can guide the best fit.';
