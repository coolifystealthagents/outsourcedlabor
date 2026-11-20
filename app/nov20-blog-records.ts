type Nov20BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  publicationDate: string;
  publishedAt: string;
  image: string;
  body: string[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
  sources: { name: string; url: string; note: string }[];
  related: string[];
};

export const november20BlogPosts: Nov20BlogPost[] = [
  {
    "slug": "set-a-client-approved-tone-guide-for-a-delegated-inbox",
    "title": "Set a client-approved tone guide for a delegated inbox",
    "excerpt": "A tone guide built from real replies, with short rules, clear decision boundaries, and a small audit that keeps the voice steady.",
    "minutes": 7,
    "publicationDate": "2026-11-20",
    "publishedAt": "2026-11-20",
    "image": "/daily20/outsourcedlabor/set-a-client-approved-tone-guide-for-a-delegated-inbox.png",
    "body": [
      "## Start from the replies the client already approves",
      "Collect twenty replies the client has approved in the last quarter and read them side by side. Mark the openings, the closings, the phrases that recur, and the places where the writer chose a softer word. The guide should describe the voice the client already trusts rather than invent a new one. A tone guide written from taste alone will be argued about instead of used.",
      "Ask the client which of those replies they would send again without editing and which they would change. Record the reason for each change in the client's own words. The difference between a good reply and an approved reply is usually small and specific. Capture that difference before writing any rule.",
      "Sort the samples by situation, such as a routine update, a delayed order, a refund, and a refusal. Note how the tone shifts between them and where it must stay the same. A single friendly voice can become careless in a complaint. The guide should show the range, not only the happy path.",
      "Ask the client to name one phrase they never want to see in a reply. Common examples include no worries, unfortunately, and per our policy. Record the banned phrases with the replacement the client prefers. A short ban list changes behavior faster than a page of adjectives.",
      "Write down who may approve a change to the guide and how often it is reviewed. A guide edited by every new specialist becomes a pile of preferences. Record the owner and the next review date on the first page. The owner should be reachable when a real reply does not fit the rule.",
      "## Write rules that change a sentence",
      "Turn each observation into a rule a writer can apply while typing. Use a before-and-after pair instead of an abstract instruction such as be warm but professional. A pair shows the length, the word choice, and the level of apology the client expects. The writer should be able to copy the pattern without guessing.",
      "Set a default length for the common reply types and a reason for the exceptions. A shipping update may need three sentences, while a complaint may need a short paragraph and a named next step. Record the target beside each type. A single length rule for every situation forces writers to pad or cut too much.",
      "Name the pronouns and the point of view the client prefers. Some clients want we and others want the team name, and some want the customer's name in the first line. Record the choice with an example. Small grammar decisions cause more rewrites than big policy questions.",
      "List the phrases that signal a promise, such as we will refund or it will arrive. Require the writer to check the facts before using them and to name the next step. Record the approval needed for a promise about money or timing. Tone rules must never make an unverified promise sound warmer.",
      "Keep the guide to two pages and put the examples beside the rule they explain. A writer under pressure will read the example before the paragraph. Record the version and the date at the top of both pages. A short guide that is actually open beats a complete manual that stays in a folder.",
      "## Separate tone from decision authority",
      "A tone guide changes how a decision is said, not who may make it. Refunds, credits, address changes, and policy exceptions keep their existing approval path. Record the decision owner beside each reply type in the guide. This prevents a friendly phrase from becoming an unauthorized promise.",
      "Give the writer an approved sentence for a decision they cannot make yet. A holding reply can acknowledge the request, name the reviewer, and state when the customer will hear back. Record the sentence and the review time. The customer gets a clear answer without the desk improvising authority.",
      "Decide what the writer should do when the client's preferred tone conflicts with a legal or safety notice. The required notice wins, and the guide should say so in one line. Record the escalation path for that conflict. A tone guide that overrides a regulated disclosure creates real risk.",
      "Keep the escalation language calm and specific. Avoid phrases that blame the customer or hint that the desk is powerless. Record two examples of an escalation that stayed warm and clear. The customer should know what happens next even when the answer is no. A calm escalation also gives the writer a clear next step to share with the customer.",
      "Review the guide whenever the client changes a policy or a product name. A tone rule can survive a price change, but an example cannot. Record the change and the date in the version line. The guide should never be the last place an old policy is still quoted.",
      "## Put the guide where the work happens",
      "Place the guide inside the reply tool or beside the queue, not only in a shared drive. A writer will not open a second system during a busy hour. Record the link and the shortcut the team uses. The nearest copy should be the current one.",
      "Add the most common before-and-after pairs as saved replies without locking the writer into them. A saved reply is a starting point that still needs the customer's details and a check. Record which parts may be edited and which are fixed. A locked template produces replies that feel copied.",
      "Train new writers with three real cases rather than a slide deck. Ask them to write the reply, compare it with the approved sample, and explain one difference. Record the exercise and the result in the onboarding note. A writer who can explain the difference is ready for the queue.",
      "Ask the client to review five live replies in the first month and mark only the changes that matter. Limit the feedback to tone, facts, and next step. Record the marks and the rule they connect to. A broad rewrite teaches the writer to wait for approval instead of deciding.",
      "Keep one channel for tone questions and one owner who answers them. A question answered in a private chat helps one person and disappears for the rest. Record the answer in the guide when it applies to everyone. The guide should grow from real questions, not from theory.",
      "## Audit tone with a small monthly sample",
      "Draw a random sample of replies each month and score four things: the opening, the clarity of the next step, the promise check, and the banned phrases. Record the sample size and the queue it came from. Four checks are enough to show drift without turning review into a rewrite. A score with no sample size is a story, not a measurement.",
      "Compare the sample with the guide rather than with the reviewer's personal style. A reviewer who prefers a different voice will mark good replies as wrong. Record the rule behind each finding. The score should point to a line the writer can change.",
      "Report the result by queue and by reply type, not by person in a public channel. A cluster in one queue may mean the template is weak or the facts are missing. Record one fix and its owner. Public ranking damages the honest reporting the audit needs.",
      "Recheck a few of the same replies after feedback to see whether the fix landed. A second read of the same case shows whether the writer understood the rule. Record the before and after score. If nothing changed, the rule or the example is probably unclear.",
      "Review the guide itself once a quarter and remove a rule that no longer earns its place. A guide that only grows becomes a list nobody reads. Record the removal and the reason. The voice should stay recognizable while the rules get simpler."
    ],
    "takeaways": [
      "Build the guide from replies the client already approves.",
      "Write before-and-after pairs instead of abstract adjectives.",
      "Keep decision authority separate from tone and phrasing.",
      "Audit a small sample monthly and fix one rule at a time."
    ],
    "faqs": [
      {
        "q": "How long should a tone guide be?",
        "a": "Two pages with real examples is usually enough. If a rule cannot be shown in a before-and-after pair, it is probably too vague to apply."
      },
      {
        "q": "Can the desk change a policy sentence to sound warmer?",
        "a": "Only the wording can change, and only when the meaning stays exact. Money, timing, and legal disclosures keep the approved language and the named approver."
      }
    ],
    "sources": [
      {
        "name": "Plain Language Action and Information Network, plain language guidelines",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "note": "Practical rules for clear, reader-first business writing."
      },
      {
        "name": "Nielsen Norman Group, tone of voice dimensions",
        "url": "https://www.nngroup.com/articles/tone-of-voice-dimensions/",
        "note": "Research-based framing for consistent written tone."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Occupational context for delegated support and dispatch work."
      }
    ],
    "related": [
      "create-a-system-outage-pause-log-for-a-delegated-support-queue",
      "build-a-peer-review-rotation-for-a-small-offshore-quality-team"
    ]
  },
  {
    "slug": "build-a-daily-reconciliation-between-a-help-desk-and-a-billing-queue",
    "title": "Build a daily reconciliation between a help desk and a billing queue",
    "excerpt": "A daily reconciliation that links the two queues with one reference, runs at a fixed time, and assigns every difference to a named owner.",
    "minutes": 8,
    "publicationDate": "2026-11-20",
    "publishedAt": "2026-11-20",
    "image": "/daily20/outsourcedlabor/build-a-daily-reconciliation-between-a-help-desk-and-a-billing-queue.png",
    "body": [
      "## Decide what must agree each day",
      "Start with the small set of facts that both the help desk and the billing queue claim to know. A refund request, a credit, a plan change, and a failed payment are common examples. Record the field, the queue that owns it, and the queue that copies it. A reconciliation should test ownership, not compare two complete databases.",
      "Choose the reference that links a support case to a billing record. An order number, an invoice number, or a case identifier can work if both teams use it the same way. Record the field name in each system and one real example. A link that exists only in a chat message cannot be reconciled.",
      "Decide how often the facts must agree. A refund may need a same-day check, while a billing address can wait for a weekly review. Record the cadence beside each fact. A daily check of stable data wastes attention and hides the fields that actually move.",
      "Agree what counts as a difference. A missing record, a different amount, a different status, and a different owner are four separate findings. Record the categories before the first run. A single mismatch count tells the team that something is wrong but not what to fix.",
      "Name the person who may declare the day reconciled and the person who may stop the check. The owner should be able to say the work is complete without waiting for a manager. Record both roles and a backup. A reconciliation without a decision owner becomes an open report.",
      "## Define the record that links both queues",
      "Use one row per case and carry the identifiers from both systems. Include the customer, the amount, the status, the owner, and the last update time. Record the source system for each field. A row that cannot show where a value came from cannot settle an argument.",
      "Keep the original values and the corrected values side by side. Overwriting the support value with the billing value hides which team changed the record and when. Record the correction time and the person who made it. The history is the evidence that the reconciliation worked.",
      "Decide which queue is authoritative for each field before the first difference appears. Billing usually owns the amount, while support owns the customer's request and the promised next step. Record the rule in the header of the sheet. A shared field with two owners will always disagree.",
      "Add the customer-facing state to the row, such as whether the customer was told about the refund. A billing record can be correct while the customer still waits for an explanation. Record the message time and the channel. The reconciliation should protect the promise, not only the ledger.",
      "Keep the row small enough to scan and complete in one sitting. A wide export with forty columns will be filtered until only easy cases remain. Record the required columns and leave the rest in the source system. The working sheet should fit on one screen.",
      "## Run the reconciliation at a fixed time",
      "Set a time that is after both queues finish their main work and before the next shift takes over. A check that runs at a different hour each day cannot be compared. Record the cut-off time and the time zone. The team should know when the data is considered final.",
      "Take a frozen export rather than reading live screens during the check. Live data changes while the reviewer reads it and creates differences that were never real. Record the export time and the filter used. Store the export with the day's sheet.",
      "Check the counts first, then the amounts, then the statuses. A count difference means a row is missing, while an amount difference means the link is probably correct. Record the order of the checks. The sequence stops the reviewer from chasing small values when a whole case is absent.",
      "Write the result before leaving the check, even when the result is no differences. A blank sheet is not evidence that the work happened. Record the reviewer, the time, and the export reference. The next person should be able to see that the day was covered.",
      "Stop the check and escalate when the export itself is incomplete. A failed export can look like a day with no differences. Record the error and the person notified. A reconciliation built on missing data is worse than no reconciliation because it creates false comfort.",
      "## Resolve differences with named owners",
      "Assign each difference to the queue that owns the field, not to the person who noticed it. The owner should correct the record or explain why the value is right. Record the owner, the due time, and the resolution. A difference without an owner becomes the next reviewer's problem.",
      "Set a short deadline for same-day items such as refunds and failed payments. A billing difference that waits three days can turn into a customer complaint. Record the deadline and the fallback contact. The deadline should respect the customer's expectation, not only the internal meeting schedule.",
      "Correct the record in the source system and then update the reconciliation sheet. A correction made only in the sheet leaves the customer-facing system wrong. Record the source change reference and the time. The sheet is a control, not the system of record.",
      "Tell the customer when the difference changed what they were promised. A corrected refund amount or date deserves a short update, even when the news is good. Record the message and the channel. Silence after a correction looks like a second mistake.",
      "Review the closed differences at the end of the run and count how many were resolved by the deadline. A high count of late fixes points to a capacity or ownership problem. Record the count and one change for the next day. The reconciliation should improve the queue, not only document it.",
      "## Review recurring gaps every week",
      "Group the week's differences by field, queue, and cause. A repeated missing reference may mean the intake form does not require it. A repeated amount mismatch may mean the billing system rounds differently. Record the pattern and the evidence.",
      "Choose one recurring gap and fix it at the source instead of adding another check. Add a required field, change a template, or move a decision earlier in the process. Record the change and the effective date. The reconciliation should get shorter as the causes are removed.",
      "Compare the weekly count with the volume of cases handled. A stable count on a growing queue may be a sign that the rate is falling. Record both numbers together. A raw count alone cannot show whether the process is improving.",
      "Ask the client which difference worries them most and why. The answer may point to a risk the desk has normalized. Record the concern and the change it produced. The client's priority should shape the next week's focus.",
      "Keep a short log of changes to the reconciliation itself. A new field, a new owner, or a new deadline changes the meaning of the numbers. Record the version and the date. A trend built across different rules is not a trend."
    ],
    "takeaways": [
      "Reconcile a small set of owned facts, not two whole databases.",
      "Use one reference that both queues already share.",
      "Run the check on a frozen export at a fixed time.",
      "Fix recurring gaps at the source and keep the check short."
    ],
    "faqs": [
      {
        "q": "Which queue should own the amount?",
        "a": "Usually the billing system, with support owning the customer request and the promised next step. Write the rule down before the first disagreement."
      },
      {
        "q": "What if the two systems cannot share a reference?",
        "a": "Create one at intake and require it in both queues. A reconciliation held together by manual matching will not survive a busy week."
      }
    ],
    "sources": [
      {
        "name": "GAO, Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Control design, documentation, and monitoring principles."
      },
      {
        "name": "ISO 9001, quality management systems",
        "url": "https://www.iso.org/standard/62085.html",
        "note": "Process, review, and continual-improvement requirements."
      },
      {
        "name": "AICPA and CIMA, audit and accounting resources",
        "url": "https://www.aicpa-cima.com/resources",
        "note": "Professional context for supporting records and evidence."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      }
    ],
    "related": [
      "add-a-second-verification-step-to-customer-address-changes-in-a-delegated-order-desk",
      "set-a-shared-drive-file-naming-standard-for-a-philippines-operations-team"
    ]
  },
  {
    "slug": "create-an-end-of-day-handover-note-for-a-philippines-support-team",
    "title": "Create an end-of-day handover note for a Philippines support team",
    "excerpt": "A handover note anchored to the client's day that records state, next owner, deadline, and the one question the next shift must answer.",
    "minutes": 7,
    "publicationDate": "2026-11-20",
    "publishedAt": "2026-11-20",
    "image": "/daily20/outsourcedlabor/create-an-end-of-day-handover-note-for-a-philippines-support-team.png",
    "body": [
      "## Anchor the note to the client's business day",
      "A handover note should begin with the client's day, not the team's shift. Record the date and time in the client's time zone and the hours the client will be offline. The next shift needs to know what the customer expects while the client sleeps. A note written only in local time creates a mental conversion at the worst moment.",
      "Name the queues that are live, paused, or waiting on the client. A queue can be open while one task type is stopped for a missing approval. Record the state of each queue in one line. The next person should not have to reopen five tools to learn what is running.",
      "Record the last customer-facing promise made during the shift. Include the customer, the channel, the exact promise, and the time it is due. A promise made at the end of a shift is the easiest one to miss. The next owner should see it before reading anything else.",
      "Note any scheduled event that will change the work, such as a release, a payment run, or a holiday. Record the time and the expected effect on the queue. A handover that ignores the calendar sends the next shift into a surprise. The note should also say who will confirm that the event actually happened.",
      "Keep the note in the same place every day and link it from the queue. A handover stored in a new thread each evening will be lost within a week. Record the location and the naming pattern. The next shift should find it without asking.",
      "## Record state instead of a diary",
      "Write the current state of each open item, not the story of what happened. A useful line says what is done, what is blocked, and what happens next. Record the case reference beside each line. A diary of effort helps the writer feel finished but does not help the reader act.",
      "Use four states for open work: waiting on us, waiting on the client, waiting on a system, and waiting on the customer. Record the state and the time it changed. The category tells the next shift whether to act, chase, or watch. A state that changes without a recorded time cannot be audited later.",
      "Put the oldest and riskiest item first in each group. Age and risk matter more than the order the cases arrived. Record the age in hours or business days. The next shift should not have to sort the list to find the urgent case.",
      "Leave out cases that are closed and need no follow-up. A handover full of completed work hides the items that still need a decision. Record the closed count in one line if the client asks for volume. The note should carry open state, not a full activity report.",
      "Write the note while the facts are still visible, not at the end of the shift from memory. Update it when a major item changes state. Record the last update time. A note written once at the end is usually a reconstruction.",
      "## Name the next action, owner, and deadline",
      "Every open line needs a next action that starts with a verb. Send the revised invoice, call the carrier, or confirm the refund date are actions. Record the action and the person who will do it. Check the case is not a suitable next action.",
      "Name one owner for each action, even when the whole team shares the queue. An owner can be a role, but the note should say who is on that role tonight. Record the backup when the owner is offline. Shared ownership without a name is how items wait.",
      "Give each action a deadline in the client's time zone and a reason for that time. A refund promised by noon should appear as an action due before noon. Record the deadline and the source of the promise. A deadline without a reason gets moved when the queue is busy.",
      "Mark the one question the next shift must answer before it starts other work. A pending approval or a missing address can block several cases at once. Record the question and the person who can answer it. The next shift should not discover the blocker case by case.",
      "Ask the next shift to acknowledge the note at the start of its day. A read receipt is weaker than a short reply that names the first action. Record the acknowledgement time. The handover is complete only when someone has taken ownership.",
      "## Keep the note short and searchable",
      "Set a length limit that fits on one screen, such as one page or twenty open lines. A longer note will be skimmed and the important line will be missed. Record the limit in the template. If the work exceeds the limit, group the routine items and keep the exceptions visible.",
      "Use the same headings every day so the reader can jump to the right section. State, promises, blockers, and questions are enough for most desks. Record the template version and the date it changed. A new heading every evening slows the reader down.",
      "Use the case reference in the first few words of each line. A reader searching for a case should find it without reading the whole note. Record the reference format and one example. Search is the most common way the next shift will use the note.",
      "Avoid abbreviations that only the current shift understands. A short form that saves three characters can cost a call to the client. Record the approved abbreviations in the template. The note should be readable by a new team member.",
      "Archive the notes by date and client so a pattern can be reviewed later. A single note is a snapshot, while a month of notes shows recurring blockers. Record the archive location and the retention period. The history is useful for the monthly review.",
      "## Audit whether the handover is usable",
      "Ask the next shift to rate the note on four things: state, next action, owner, and deadline. Record the rating and one example of what was missing. A simple score is enough to show whether the template works. Ask for one missing example rather than a general comment.",
      "Count the items that were still open at the next handover with no change. An item that survives two shifts without action is a sign that the owner or deadline was unclear. Record the count and the case references. The pattern points to a template or capacity problem.",
      "Check whether any customer promise was missed during the handover window. Record the promise, the time, and what the next shift knew. A missed promise is the clearest evidence that the note failed. Fix the template before blaming the person.",
      "Review the handover time itself. A note that takes an hour to write is either too detailed or missing a source of truth. Record the median time and the length. The handover should protect the customer without consuming the shift.",
      "Change one thing in the template each month and compare the next score. Record the change and the result. A template that is never revised slowly collects fields nobody reads. The goal is a note the next shift can act on in the first ten minutes."
    ],
    "takeaways": [
      "Write the handover in the client's time zone and business day.",
      "Record state, next action, owner, and deadline for each open item.",
      "Mark the one question the next shift must answer first.",
      "Audit whether the next shift could act without asking."
    ],
    "faqs": [
      {
        "q": "Should the handover include everything the shift did?",
        "a": "No. It should carry open state and promises. A short closed count is enough when the client asks for volume."
      },
      {
        "q": "Who owns an item that waits on the client?",
        "a": "The desk still owns the follow-up and the reminder. Record the client contact, the question, and the time the desk will chase it."
      }
    ],
    "sources": [
      {
        "name": "Agency for Healthcare Research and Quality, handoffs and signouts",
        "url": "https://www.ahrq.gov/teamstepps/officebasedcare/handouts/handoff.html",
        "note": "Structured handoff practice for transferring ownership of work."
      },
      {
        "name": "International Labour Organization, digital labour platforms",
        "url": "https://www.ilo.org/digital-labour-platforms",
        "note": "Context on remote and digitally mediated work arrangements."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Occupational context for delegated support and dispatch work."
      }
    ],
    "related": [
      "create-a-system-outage-pause-log-for-a-delegated-support-queue",
      "add-a-second-verification-step-to-customer-address-changes-in-a-delegated-order-desk"
    ]
  },
  {
    "slug": "set-an-access-review-cadence-for-contractor-accounts-on-client-systems",
    "title": "Set an access review cadence for contractor accounts on client systems",
    "excerpt": "An access review cadence that ranks accounts by risk, checks evidence instead of names, and removes access on a dated path.",
    "minutes": 8,
    "publicationDate": "2026-11-20",
    "publishedAt": "2026-11-20",
    "image": "/daily20/outsourcedlabor/set-an-access-review-cadence-for-contractor-accounts-on-client-systems.png",
    "body": [
      "## List the accounts that actually matter",
      "Start with the client systems that hold customer data, money movement, or production controls. List every contractor account that can read, change, approve, or export in those systems. Record the system, the account, the role, and the last login. A review that starts from a list of people rather than systems will miss shared and service accounts.",
      "Include accounts that belong to the provider rather than the client. An agency admin account can reach several client tenants and is often overlooked. Record the owner, the tenant scope, and the business reason. The review should cover every path into the client's data.",
      "Mark the accounts that are shared by a team, such as a queue mailbox or a reporting login. Shared accounts need a named human owner even when the password is in a vault. Record the owner and the people who may retrieve it. A shared account with no owner cannot be reviewed.",
      "Add service accounts and integrations that run without a person. Record the purpose, the data they touch, and the person who can revoke them. A service account that nobody remembers is a standing risk. Include it in the review even when it has no interactive login.",
      "Set the review scope with the client before the first cycle. Name the systems in scope and the systems that are explicitly out. Record the client sign-off and the date. An unclear scope produces arguments about coverage instead of decisions about access.",
      "## Set a cadence by risk, not by calendar habit",
      "Rank each account by the harm that would follow a misuse. Money movement and production change usually rank higher than a read-only report. Record the rank and one sentence of reasoning. The rank decides how often the account is reviewed.",
      "Review the highest-risk accounts monthly and the rest quarterly. A quarterly cycle is too slow for an account that can approve refunds, while a monthly cycle is wasteful for a dashboard login. Record the cadence beside the rank. The cadence should follow the risk, not the convenience of the reviewer.",
      "Trigger an extra review when a person changes role, leaves the project, or moves to another client. The calendar will not catch a departure in time. Record the trigger and the person who must report it. The provider and the client both need a way to raise the event.",
      "Review service accounts whenever the integration changes or the vendor changes ownership. Record the change and the review date. A service account can outlive the project that created it by years. A review that skips them leaves a standing key in the client environment.",
      "Put the next review date in the account record, not only in a spreadsheet. A date that lives in a personal calendar disappears when the owner is away. Record the owner and the backup. The review should survive a single person's vacation.",
      "## Run the review with evidence",
      "Ask for the business reason before looking at the permission list. An account without a current reason should be a candidate for removal, even if the permissions look normal. Record the reason and the person who confirmed it. A review that starts with permissions tends to preserve the status quo.",
      "Check the last login, the last action, and the access grant date for each account. A dormant account with broad access is a different finding from an active account with the right role. Record all three dates. The combination tells the reviewer whether the account is used and whether the access is still needed.",
      "Compare the granted role with the role described in the work instruction. A person may need read access but hold edit rights from an earlier project. Record the gap and the requested change. The review should test the fit between the job and the permission.",
      "Ask the client to confirm the accounts that touch their data, not only the provider manager. The client may know about a vendor or a shared login the provider has forgotten. Record the client confirmation and any new account discovered. Two-sided confirmation is stronger than a provider-only review.",
      "Record the evidence you used, such as an export, a screenshot, or a ticket reference. A review note that says checked is not evidence. Store the evidence with the review record. The next reviewer should be able to repeat the check without asking.",
      "## Remove access on a dated path",
      "Decide the removal date when the review identifies an account that is no longer needed. A finding without a date becomes a permanent exception. Record the date, the owner, and the system where the removal happens. The date should be close enough to matter and realistic enough to complete.",
      "Remove the access in the source system first, then update the inventory. A spreadsheet marked revoked while the account still works is a false control. Record the system confirmation and the time. The inventory should follow the system, not the other way around.",
      "Check the removal from the user's side, not only the admin screen. Ask the former user or a test account to attempt the access and record the result. A cached session or a group membership can keep the door open. The test is the proof that the removal worked.",
      "Handle shared and service accounts with a rotation and an owner update. Removing one person from a shared account is not enough if the credential stays the same. Record the rotation, the new owner, and the people who received it. The account should not remain a standing key to the client's data.",
      "Tell the client when a high-risk account is removed and when a replacement is created. A silent change can break a workflow or leave the client unsure who has access. Record the notice and the effective time. The client should never learn about an access change from a failed task.",
      "## Report gaps without turning the review into blame",
      "Report the count of accounts reviewed, removed, and still waiting for a decision. Add the number of accounts with no business reason and the number past their review date. Record the counts and the scope. A few clear numbers show whether the cadence is working.",
      "Group findings by system and by cause, such as a missing offboarding step or a role that was copied from an old project. Record one example per group without naming individuals in a public report. The cause points to a process fix, while a name points to a person. The cause is what the next fix can actually change.",
      "Give the client and the provider manager the same summary. A one-sided view hides the accounts each party owns. Record the recipients and the date. The review should produce a shared list of actions, not a private scorecard.",
      "Follow up on the removals that missed their date and record why. A missed removal may mean the system owner was unavailable or the dependency was not understood. Record the reason and the new date. The follow-up is where the control becomes real.",
      "Review the cadence itself once a quarter. Ask whether the high-risk list is still right, whether the evidence is easy to collect, and whether removals happen on time. Record one change and an owner. A cadence that is never reviewed becomes a ritual."
    ],
    "takeaways": [
      "Inventory accounts by system risk, including shared and service accounts.",
      "Set review frequency from the harm a misuse could cause.",
      "Confirm access with evidence from both the provider and the client.",
      "Remove access in the source system and test it from the user side."
    ],
    "faqs": [
      {
        "q": "How often should contractor access be reviewed?",
        "a": "High-risk accounts monthly and lower-risk accounts quarterly is a workable starting point. Add an event review when a person leaves or changes role."
      },
      {
        "q": "Do shared accounts need a review?",
        "a": "Yes. They need a named human owner, a stored credential, and a record of who may retrieve it. Shared access without an owner cannot be governed."
      }
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-53 Rev. 5, security and privacy controls",
        "url": "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final",
        "note": "Control guidance for access management and account review."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Prioritized practices for access control and incident response."
      },
      {
        "name": "NIST Special Publication 800-63B, digital identity guidelines",
        "url": "https://pages.nist.gov/800-63-3/sp800-63b.html",
        "note": "Guidance on identity proofing, authentication, and account recovery."
      },
      {
        "name": "U.S. Federal Trade Commission, data breach response",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-breach-response",
        "note": "Business guidance on protecting customer account information."
      }
    ],
    "related": [
      "audit-delegated-mailbox-permissions-after-a-client-contact-leaves",
      "set-a-document-retention-rule-for-outsourced-support-records"
    ]
  },
  {
    "slug": "build-a-rework-log-for-a-delegated-order-processing-team",
    "title": "Build a rework log for a delegated order-processing team",
    "excerpt": "A rework log that defines the unit, records the cause at the moment of correction, and turns repeated defects into one process fix.",
    "minutes": 7,
    "publicationDate": "2026-11-20",
    "publishedAt": "2026-11-20",
    "image": "/daily20/outsourcedlabor/build-a-rework-log-for-a-delegated-order-processing-team.png",
    "body": [
      "## Define rework before counting it",
      "Rework is work that had to be done again because the first pass was wrong or incomplete. A corrected typo, a resubmitted order, and a refund reopened after a bad entry are common examples. Record the definition with two examples and one non-example. A broad definition turns every follow-up into rework and hides the real defects.",
      "Decide the unit you will count. An order, a line item, a customer record, and a correction event are different units with different rates. Record the unit and the source system. A rate that mixes units cannot be compared across weeks.",
      "Separate rework caused by the desk from rework caused by the source data. A missing price from the client is not the same as a mistyped quantity by the specialist. Record the cause category on every entry. The split decides who can fix the problem.",
      "Exclude changes that the customer requested after the first pass. A customer who changes an address is not a quality defect. Record the exclusion rule and the count. The log should measure avoidable repeat work, not normal change.",
      "Agree the review owner and the meeting where the log is read. A log with no reader becomes a record of blame. Record the owner and the cadence. The team should know that the entries lead to a change, not a penalty.",
      "## Capture the cause at the moment of correction",
      "Open the log when the correction is made, not at the end of the week. The person correcting the order knows what was missing and why. Record the case, the field, the original value, and the corrected value. A later reconstruction loses the detail that makes the cause useful.",
      "Use a short cause list that the team helped write. Missing intake field, wrong system value, unclear instruction, and copy error cover most cases. Record one cause per entry and a note when two causes combine. A list of twenty causes will be used inconsistently.",
      "Record the time between the first pass and the correction. A correction found in minutes may be caught by review, while one found after a customer complaint has already reached the customer. Record both times. The gap shows where the quality check is failing.",
      "Note whether the correction changed a customer-facing promise, such as a price or a delivery date. Record the promise and the new message. A quiet ledger correction can leave the customer with the wrong expectation. The log should link to the message that fixed it.",
      "Keep the log in the same tool as the order or link it from the case. A separate spreadsheet that nobody opens during the work will be filled in late or not at all. Record the link and the owner. The nearest form wins.",
      "## Separate source data errors from desk errors",
      "Source data errors begin with a client system that is missing, stale, or contradictory. Record the field, the system, and the value the desk saw. The client needs this evidence to fix the input. A desk blamed for a client export will stop reporting the export problem.",
      "Desk errors begin with a choice the specialist could have made correctly with the information available. Record the instruction, the choice, and the correct path. The entry should show what a reasonable person would have needed to know. This keeps the review focused on the process rather than the person.",
      "Some errors sit between the two, such as an instruction that is technically correct but easy to misread. Record the ambiguity and the example that caused it. The fix may be a template change or a clearer field label. A category called unclear instruction is more useful than a general other.",
      "Count the source errors and the desk errors separately in the weekly summary. A high source-error count points to the client, while a high desk-error count points to training or review. Record both counts and the volume. The comparison should change the next action.",
      "Share a source-error example with the client without the customer's personal details. Show the field and the effect, not the person who noticed it. Record the example and the requested fix. A concrete case gets a faster response than a percentage.",
      "## Review the log weekly and choose one fix",
      "Read the week's entries together and group them by cause and by field. A repeated missing field is a stronger signal than a single dramatic error. Record the count and one example per group. The group is the unit of improvement.",
      "Choose one fix that removes the most repeated cause. Add a required field, change a template, or move a check earlier in the process. Record the fix, the owner, and the date. One fix is easier to verify than a list of five.",
      "Check whether the fix changed the count in the following weeks. Use the same unit, definition, and time window. Record the before and after counts. A drop in one field with no change elsewhere is a useful result.",
      "Keep a short list of fixes that did not work and why. A failed fix is evidence about the process, not a reason to stop measuring. Record the attempt and the result. The next team should not repeat the same change.",
      "Give the team the weekly result in a form that respects the work. Show the trend and the fix, not a ranking of individuals. Record the summary and the questions it raised. People report causes honestly when the log is used to improve the work.",
      "## Close the loop with the client and the queue",
      "Send the client a short monthly note with the volume, the rework rate, the top cause, and the fix in progress. Record the recipients and the date. A client who sees the cause can correct an input that the desk cannot change. A short note with one request is more likely to be read than a full report.",
      "Update the work instruction when a fix changes how the task is done. A log that improves the process but leaves the instruction stale creates a new source of rework. Record the instruction version and the effective date. The person doing the work should not have to remember which version was right.",
      "Check the fix in the actual queue rather than only in the log. Sample a few orders after the change and confirm the field or check is being used. Record the sample and the result. The log shows what people report, while the sample shows what happens.",
      "Retire a cause category when it no longer appears for a full quarter. A category kept for history can make the log look more complex than the work. Record the retirement and the date. The cause list should stay short enough to use at the moment of correction.",
      "Review the log's own cost once a quarter. If each entry takes more than a few minutes, the form is too long or the data is hard to find. Record the median time and one simplification. The log should pay for itself in fewer repeats."
    ],
    "takeaways": [
      "Define rework and its unit before calculating a rate.",
      "Record the cause at the moment of correction, not later.",
      "Split source-data errors from desk errors before assigning a fix.",
      "Choose one repeated cause each week and verify the change."
    ],
    "faqs": [
      {
        "q": "Should every correction be logged?",
        "a": "Log the corrections that repeat or affect a customer promise. A log of every typo becomes noise and stops being read."
      },
      {
        "q": "Is rework always a training problem?",
        "a": "No. Missing intake fields, stale system values, and unclear instructions are process causes. Training is only one of several fixes."
      }
    ],
    "sources": [
      {
        "name": "ASQ, quality resources",
        "url": "https://asq.org/quality-resources",
        "note": "Definitions and tools for defect, rework, and process analysis."
      },
      {
        "name": "ISO 9001, quality management systems",
        "url": "https://www.iso.org/standard/62085.html",
        "note": "Process, review, and continual-improvement requirements."
      },
      {
        "name": "GAO, Standards for Internal Control in the Federal Government",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "note": "Control design, documentation, and monitoring principles."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      }
    ],
    "related": [
      "build-a-peer-review-rotation-for-a-small-offshore-quality-team",
      "build-a-daily-reconciliation-between-a-help-desk-and-a-billing-queue"
    ]
  }
];

type Nov20BlogSection = { heading: string; paragraphs: string[] };

function nov20Sections(body: string[]): Nov20BlogSection[] {
  const sections: Nov20BlogSection[] = [];
  for (const line of body) {
    if (line.startsWith("## ")) {
      sections.push({ heading: line.slice(3), paragraphs: [] });
    } else if (sections.length) {
      sections[sections.length - 1].paragraphs.push(line);
    }
  }
  return sections;
}

export const november20BlogDetails: Record<string, {
  updated: string;
  published: string;
  takeaways: string[];
  sections: Nov20BlogSection[];
  faqs: { q: string; a: string }[];
  sources: { name: string; url: string; note: string }[];
  related: string[];
}> = Object.fromEntries(
  november20BlogPosts.map((post) => [post.slug, {
    updated: "2026-11-20",
    published: "2026-11-20",
    takeaways: post.takeaways,
    sections: nov20Sections(post.body),
    faqs: post.faqs,
    sources: post.sources,
    related: post.related
  }])
);
