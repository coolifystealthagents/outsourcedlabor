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
    "title": "How to plan an outsourced labor role",
    "excerpt": "Build a clear role scope, access plan, review routine, and first-week test before you hire.",
    "minutes": 10
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

export const blogDetails = {
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
          "Outsourced staff can prepare work without owning every decision. A customer support worker may draft a reply but need approval for a large refund. An admin worker may prepare an invoice list but should not change bank details. A reporting worker may flag an odd number while a manager decides what it means for the business.",
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
      { q: "Who should train outsourced staff?", a: "The person who knows the current work should lead the first examples. A manager should own approval rules even if another team member records the SOP." },
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

export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
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
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
