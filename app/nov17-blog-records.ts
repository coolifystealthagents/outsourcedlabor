export const november17BlogPosts = [
  {
    "slug": "audit-delegated-mailbox-permissions-after-a-client-contact-leaves",
    "title": "Audit delegated mailbox permissions after a client contact leaves",
    "excerpt": "A mailbox permission audit that starts with the departure event, separates ownership from delegation, tests every path into the inbox, and closes with evidence.",
    "minutes": 7,
    "publicationDate": "2026-11-17",
    "publishedAt": "2026-11-17",
    "image": "/daily17/outsourcedlabor/audit-delegated-mailbox-permissions-after-a-client-contact-leaves.png",
    "body": [
      "## Start from the departure event and the mailbox record",
      "A client contact who leaves can still sit on shared mailbox permissions months later. The audit begins with the departure date, the mailbox, and the list of people who can read or send on behalf of that address. Pull the delegate list from the mail platform rather than from memory. A name on a sticky note is not evidence of current access.",
      "Ask the client for the departure date and the exact mailbox or alias involved. Record whether the mailbox is a personal account, a shared inbox, or a role address. The treatment differs because ownership sits in different places. Write the answer beside the audit row before any permission is changed.",
      "Collect the current permission list with the date and the tool used to read it. Include full-access delegates, send-as rights, send-on-behalf rights, calendar delegates, and forwarding rules. Each one is a separate path into the same mailbox. Missing a path leaves a silent copy of client correspondence.",
      "Compare the permission list with the approved request that created each entry. A permission without a request is a finding even when the person seems trustworthy. Note who granted it and when. The audit is about the record, not about suspicion.",
      "## Separate ownership from delegation",
      "Ownership belongs to the client, while delegation is a temporary grant from the owner to a named worker. Write the owner for every shared mailbox and the date the delegation was approved. A mailbox with no owner cannot decide who should keep access. Escalate that gap before removing anything.",
      "Distinguish a role mailbox from a personal mailbox. A role address such as support at the company can pass to a new team without touching any individual account. A personal address must be closed, forwarded under a rule, or left dormant by client decision. Record which choice the client made.",
      "Keep a delegated worker's personal mailbox separate from the client's mailbox rights. A specialist may need to read the shared inbox but should not gain the departed contact's identity. Remove send-as before full access when the client wants a staged change. Stage the change in a written order.",
      "Name the person who can approve a new delegate after the audit. The approver may be the client's operations lead or a named manager in the service team. Record the channel for that approval. Without a current approver, the next request will recreate the same drift.",
      "## Test each delegated path with a non-destructive check",
      "Test the permission list without opening client mail. Use the admin console to confirm the delegate entry and its scope. Do not ask a worker to prove access by reading a live message. A read receipt or login test creates its own record and can confuse the client.",
      "Check calendar delegation separately from mail delegation. A calendar editor can see meeting details even when mailbox access is gone. Review the calendar permission list for the same names. Remove entries that no longer match an approved role.",
      "Review forwarding rules, automatic replies, and inbox rules that send copies outside the mailbox. A forwarding rule can outlive every visible delegate. Record the destination and the rule owner. Remove a rule only after the client confirms it is not part of an active service.",
      "Record the result of each test as present, removed, or awaiting client decision. Add the evidence reference and the tester's name. A row that says checked without a result cannot be reviewed. The audit closes on evidence, not on a meeting.",
      "## Handle shared and role-based mailboxes",
      "A shared mailbox may serve several clients and several workers at once. Audit it by work lane rather than by person. Map each lane to the workers who need it and the client who owns the address. Remove a worker only when no active lane still depends on that access.",
      "A role mailbox that survives a contact's departure needs a new accountable owner. Assign the owner before the next shift uses the address. Update the signature, the automatic reply, and the escalation line in the same change. A role address that still names a departed person confuses customers.",
      "Check distribution groups and aliases that feed the mailbox. A group membership can grant access without appearing in the mailbox delegate list. Compare the group roster with the current team list. Remove stale members and record the change.",
      "Keep a short handover note for the next reviewer. State which mailboxes changed, which stayed, and which decision is still open. Link the client's approval. A future audit should not need to rebuild the history from email threads.",
      "## Close the audit with evidence and a review date",
      "Close the audit only when every row has a result and an owner. Mark the rows that need client approval and the date the request was sent. A row left open without a follow-up date will be forgotten. The closure note should show the remaining risk in plain language.",
      "Send the client a short summary of what was removed and what remains. Name the mailbox, the access type, and the reason for any retained entry. Do not include unnecessary personal details. The client should be able to approve the outcome without opening the admin console.",
      "Set the next review date from the risk, not from the calendar alone. A mailbox tied to a departing executive may need a check in thirty days. A stable role inbox may need a quarterly review. Write the trigger that would force an earlier check.",
      "Use the audit findings to improve the departure checklist. Add mailbox delegation to the same list that covers laptop return and system access. Name the person who confirms the change. A checklist that stops at the login misses the mailbox that outlives it."
    ]
  },
  {
    "slug": "set-a-courier-pickup-cut-off-for-a-delegated-dispatch-desk",
    "title": "Set a courier pickup cut-off for a delegated dispatch desk",
    "excerpt": "A courier pickup cut-off that comes from the carrier schedule, protects the booking window, and gives a missed collection one owner and a review trail.",
    "minutes": 7,
    "publicationDate": "2026-11-17",
    "publishedAt": "2026-11-17",
    "image": "/daily17/outsourcedlabor/set-a-courier-pickup-cut-off-for-a-delegated-dispatch-desk.png",
    "body": [
      "## Define the cut-off from the carrier's schedule",
      "A pickup cut-off is the latest time the dispatch desk can book a courier and still expect collection that day. It comes from the carrier's route and the warehouse's closing time, not from the desk's convenience. Write the cut-off for each carrier and each service level. A single company-wide time will be wrong for at least one route.",
      "Confirm the cut-off with the carrier in writing and record the date it was confirmed. A dispatcher who relies on a remembered time will eventually miss a collection. Store the confirmation beside the booking screen. The note should name the carrier contact who confirmed it.",
      "Separate the booking cut-off from the physical pickup window. A carrier may accept a booking until five but arrive between six and eight. The customer promise should use the pickup window, not the booking time. Record both so the desk does not promise an earlier handover than the carrier can keep.",
      "Review the cut-off when the carrier changes a route, a holiday, or a service level. Update the record with an effective date. Tell the desk before the first affected shift. An outdated cut-off is worse than no cut-off because it looks authoritative.",
      "## Record the pickup request in one queue",
      "Every pickup request should enter one queue with the order reference, parcel count, destination, and requested service. A request buried in a chat is hard to count and easy to duplicate. Give the queue a stable identifier the carrier can quote. The queue becomes the source of truth for the day.",
      "Record the time the request arrived and the time it was booked. The gap shows where the desk loses minutes. A request that arrives after the cut-off belongs in tomorrow's plan unless the carrier confirms an exception. Mark that decision on the record.",
      "Capture the carrier's confirmation number and the promised pickup window. Store them with the order, not only in the carrier portal. The next shift should see the commitment without logging in again. A confirmation that lives in one person's browser is not a record.",
      "Mark a request as booked only when the carrier confirms it. A submitted form is not a confirmed pickup. Distinguish queued, booked, collected, and missed. The status should tell the desk what to do next.",
      "## Protect the cut-off from late order intake",
      "Late order intake is the main cause of missed pickups. Set an internal release time that is earlier than the carrier cut-off. The desk needs enough minutes to pack, label, and book before the carrier's deadline. Publish the release time to the sales and warehouse teams.",
      "Give the desk a rule for an order that arrives after the release time. It may wait for tomorrow, use a faster service at a named cost, or go to a manual review. Write who can approve the extra cost. A dispatcher should not invent that answer under pressure.",
      "Protect a short booking block near the cut-off from meetings and live calls. The desk cannot book pickups while handling an unrelated queue. Rotate the block or assign a named backup. Record which arrangement was used each day.",
      "Review late arrivals weekly by source. A cluster from one sales channel may need an earlier release rule. A cluster from the warehouse may need a packing change. Fix the source instead of asking the desk to absorb the delay.",
      "## Handle a missed pickup with a named owner",
      "A missed pickup is an exception with a customer consequence. Assign one owner at a time and record the carrier's reason. The reason may be a late booking, a route failure, or a parcel that was not ready. Each cause leads to a different next action.",
      "Tell the customer the new collection or delivery expectation only after the carrier confirms it. A promise made before confirmation creates a second failure. Record the channel and the time of the message. Keep the wording factual and free of blame.",
      "Rebook the pickup for the next available window and note any added cost. If the customer needs same-day delivery, escalate to the account owner rather than quietly upgrading the service. The account owner should decide who pays for the difference. Record that decision with the new booking.",
      "Close the exception when the parcel is collected and the customer has an updated expectation. Record the evidence and the final cost. A missed pickup that was rebooked but never tracked is still an open risk. The next review should see the whole chain.",
      "## Review misses by route and carrier",
      "Group missed pickups by carrier, route, day of week, and hour of booking. A single route with repeated misses may need a different cut-off. A carrier with failures across routes may need a service review. The grouping should guide the conversation.",
      "Compare the booking time with the carrier's cut-off for every miss. A miss that happened after the deadline is an intake problem. A miss after an on-time booking is a carrier problem. Report the two separately so neither hides the other.",
      "Ask the desk which requests are hardest to book. They hear the carrier's answers and know where the form fails. Use one example in the next team review. A small change to the request form can remove many repeat calls.",
      "Test one change for a defined period. Record the old cut-off, the new rule, and the result. Compare misses per hundred pickups and the added cost. A change that improves the rate while creating overtime is not yet a success."
    ]
  },
  {
    "slug": "build-an-attachment-handling-rule-for-a-delegated-support-inbox",
    "title": "Build an attachment-handling rule for a delegated support inbox",
    "excerpt": "An attachment rule that classifies files before opening, keeps the first open inside an approved tool, and records what each document proves.",
    "minutes": 7,
    "publicationDate": "2026-11-17",
    "publishedAt": "2026-11-17",
    "image": "/daily17/outsourcedlabor/build-an-attachment-handling-rule-for-a-delegated-support-inbox.png",
    "body": [
      "## Classify attachments before opening them",
      "An attachment rule starts with the kinds of files the inbox receives. List invoices, delivery notes, identity documents, screenshots, and archives by name. State which types the desk may open and which must go to a specialist. A vague instruction to be careful gives no usable boundary.",
      "Classify by the consequence of a wrong action, not only by the file extension. A harmless-looking spreadsheet can carry customer records. A PDF can hold a payment instruction. The rule should name the sensitive content the desk must look for before opening.",
      "Treat an unexpected file from an unknown sender as untrusted until verified. Check the sender against the customer record or the vendor master. Do not rely on the display name alone. A short verification step prevents most bad attachments from being opened.",
      "Record the classification on the ticket before any file is downloaded. Include the sender, the file type, and the reason for the decision. The record should let a reviewer see why the desk opened or held the file. A decision without a reason cannot be reviewed.",
      "## Keep the first open inside an approved tool",
      "The first open should happen in the approved viewer, not in a personal download folder. A viewer can limit macros and keep the file inside the managed environment. State the tool in the rule and remove alternatives that bypass it. The specialist should not choose between convenience and policy.",
      "Disable macros and external content by default for documents from outside the organization. A file that asks to enable editing needs a second decision. Record who approved the exception. The request itself is a signal that the file deserves more care.",
      "Keep the attachment with the case rather than on the desktop. A local copy can outlive the ticket and escape the retention rule. Use the case system's attachment store where it exists. If the file cannot be stored there, document the approved alternative.",
      "Limit who can download a sensitive file. A specialist who only needs to read a document should not also receive a copy. Grant the narrowest access the tool allows. Review the access after the case closes.",
      "## Record what the attachment proves",
      "An attachment is evidence of something specific. Name the fact it supports, such as a delivery date, a signed approval, or a stated amount. A file without a purpose becomes clutter. Write the purpose in the ticket before the file is filed.",
      "Capture the key fields in text as well as the image. A scan can be unreadable or later removed. The text record should include the date, the reference number, and the name on the document. It should not include more personal data than the case needs.",
      "Note any mismatch between the attachment and the case record. A different address, amount, or account number is a finding. Do not correct the case to match the file without approval. Escalate the difference with both records attached.",
      "Mark an attachment as unverified when its source cannot be confirmed. A forwarded file with no chain of custody is not strong evidence. Record the gap and the next step. The case should not close on an unverified document.",
      "## Set a safe path for unexpected files",
      "An unexpected archive, executable, or password-protected file needs a stop rule. The desk should not open it to find out what it is. Route it to the security or system owner through a named channel. Record the time and the sender.",
      "Do not request a password in the same channel as the file. A password sent beside the archive protects nothing. Use an approved separate channel or ask the sender to upload through a secure portal. Write the method into the rule.",
      "If a file looks like a payment instruction, stop and verify with the known contact. Use a phone number from the vendor master, not from the email. Record the verification and the person who confirmed it. This step protects both the client and the specialist.",
      "Preserve the suspicious message without forwarding it widely. Forwarding can spread the problem and destroy the original headers. Keep it in the approved quarantine location. Tell only the people who need to act.",
      "## Review attachment incidents and update the rule",
      "Review attachment incidents monthly by type, sender, and outcome. Group near misses with actual incidents. A file that was stopped before opening still teaches something. The review should focus on the rule, not on blaming the person who noticed it.",
      "Look for patterns in the request itself. Repeated password-protected files from one vendor may need a portal change. Repeated screenshots from customers may need a better form. Fix the source when the same risky attachment keeps arriving.",
      "Update the rule when a tool or a client changes. A new case system may store files differently. A new client may send a format the desk has never seen. Record the effective date and tell the team before the next shift.",
      "Test the rule with one realistic example during onboarding. Ask the new specialist to classify a file and explain the next step. Correct the reasoning, not only the answer. A rule that cannot be applied in practice will be ignored."
    ]
  },
  {
    "slug": "write-a-replacement-order-note-for-a-delegated-support-queue",
    "title": "Write a replacement-order note for a delegated support queue",
    "excerpt": "A replacement-order note that separates replacement from refund, captures the failed item, states the decision limit, and keeps a status until the customer has the item.",
    "minutes": 7,
    "publicationDate": "2026-11-17",
    "publishedAt": "2026-11-17",
    "image": "/daily17/outsourcedlabor/write-a-replacement-order-note-for-a-delegated-support-queue.png",
    "body": [
      "## Separate replacement from refund and return",
      "A replacement is a new shipment, not a refund and not a return. The note should say which remedy the customer chose and who approved it. Mixing the three creates duplicate credits and lost stock. Write the distinction at the top of the record.",
      "Record the original order and the item that failed. Include the SKU, the quantity, and the specific defect or loss. A note that says wrong item cannot support a replacement. The warehouse needs the detail to send the right product.",
      "Decide whether the customer must return the original item before a replacement ships. This is a policy decision, not a desk preference. Record the policy and any exception. The note should state whether a return label was issued.",
      "Keep the replacement value within the desk's written limit. A high-value replacement needs an owner's approval before the order is created. Record the approver and the time. A limit that exists only in training is not a control.",
      "## Capture the original order and the failed item",
      "Start from the order record rather than the customer's description alone. Confirm the purchase date, the shipping address, and the item on file. Compare that record with the photo or message the customer sent. The comparison is the evidence for the replacement.",
      "Ask for a photo when the defect is visible and the policy allows it. Give the customer a clear reason for the request. Do not demand a photo for a missing parcel that was never delivered. Match the evidence request to the actual failure.",
      "Check whether the item is still in stock before promising a replacement. A promise made without a stock check becomes a second failure. If stock is unavailable, offer the approved alternative or escalate. Record the choice the customer made.",
      "Note any prior replacement on the same order. A second replacement can signal a recurring defect or a misuse pattern. Escalate the pattern rather than processing another shipment automatically. The history belongs in the note.",
      "## State the decision owner and the limit",
      "Write the name of the person who approved the replacement. A queue that says approved without a name cannot be audited. Include the role and the time of approval. The owner should be reachable if the warehouse asks a question.",
      "Separate the decision to replace from the decision to expedite. An expedited shipment may cost more and needs its own approval. Record the service level and who authorized it. Do not let urgency quietly expand the desk's authority.",
      "Give the desk a clear stop rule for suspected fraud. Repeated replacements to different addresses or names should pause for review. Record the signal and the reviewer. The stop rule protects the customer relationship as well as the margin.",
      "Tell the customer what was approved and what happens next. State the item, the address, and the expected ship date. Avoid promising a delivery date the warehouse has not confirmed. The message should match the record exactly.",
      "## Give the note a status and a follow-up date",
      "Use a small status set such as requested, approved, shipped, delivered, and closed. Each status should have a next action and a time limit. A note that only says open does not tell the team what to do. Sort the queue by the next due action.",
      "Set a follow-up date for the warehouse confirmation. A replacement that was approved but never shipped is invisible without one. Check the date on the next shift. Record the result of the check.",
      "Record the tracking number when the replacement ships. Link it to the original order and the case. The customer should not have to explain the history again. A linked record also prevents a duplicate replacement.",
      "Close the note only when the customer has the item or an agreed alternative. Delivery confirmation is the preferred evidence. If the customer cannot be reached, record the attempts and the final disposition. The queue should distinguish resolved from simply quiet.",
      "## Review replacements for repeat causes",
      "Review replacements weekly by product, reason, and destination. A product with repeated defects may need a quality check. A destination with repeated losses may need a carrier review. Group the cases before choosing a fix.",
      "Compare the replacement rate with the return rate and the refund rate. A rising replacement rate with stable returns may mean the desk is choosing the easiest remedy. Report the three measures together. A single measure can hide a shift in behavior.",
      "Ask the warehouse and the customer team what the note misses. They see the packing problem and the customer's real complaint. Use one example in the next review. A small field can remove a long email thread.",
      "Update the note template when the policy or the system changes. Remove fields that no one uses and add the one fact that keeps causing delays. Record the effective date. A template that grows without review becomes a form to skip."
    ]
  },
  {
    "slug": "set-a-calendar-hold-expiry-on-a-delegated-executive-calendar",
    "title": "Set a calendar hold expiry on a delegated executive calendar",
    "excerpt": "A calendar-hold expiry rule that names the decision needed, keeps the hold visible, and releases or converts the slot on a fixed routine.",
    "minutes": 7,
    "publicationDate": "2026-11-17",
    "publishedAt": "2026-11-17",
    "image": "/daily17/outsourcedlabor/set-a-calendar-hold-expiry-on-a-delegated-executive-calendar.png",
    "body": [
      "## Put an expiry on every temporary hold",
      "A temporary hold is a reservation without a confirmed booking. It should carry an expiry time from the moment it is created. A hold with no expiry can block a real meeting for weeks. The calendar should show the expiry in the event title or description.",
      "Choose the expiry from the decision the executive needs to make. A hold for a tentative lunch may expire in two days. A hold for a board meeting may need a week. Write the rule by meeting type. The specialist should not guess each time.",
      "Record who asked for the hold and what would confirm it. A hold requested by an assistant in another company is different from one requested by the executive. The note should name the next action and the owner. A hold without a next action is only a block.",
      "Apply the expiry in the calendar tool, not only in a task list. A reminder that lives elsewhere will not release the slot. Set the event to show as tentative until it is confirmed. The calendar should tell the truth without a separate lookup.",
      "## Make the hold visible to the executive",
      "The executive should see that a slot is held and what it is waiting for. Use a consistent label such as HOLD followed by the subject. Do not hide the purpose behind a generic block. A visible hold invites a faster decision.",
      "Keep the hold's details short enough to read on a phone. Include the requester, the decision needed, and the expiry date. Put the full context in the event notes. The title should work when the screen is small.",
      "Avoid stacking several holds on the same slot without a priority. Two holds on one hour create a false sense of availability. Mark the preferred hold and release the others. Record which request was declined and why.",
      "Tell the requester when the hold is created and when it will expire. A requester who knows the deadline can supply the missing detail. Send one short message with the date. Do not leave the requester waiting for a silent calendar.",
      "## Release or convert holds on a fixed routine",
      "Check the hold list at the start and end of each working day. A morning check catches holds that expired overnight. An end-of-day check catches holds that will expire before the next shift. Both checks should take only a few minutes.",
      "Convert a hold to a confirmed meeting only when the required detail is present. The detail may be an agenda, a participant list, or a signed approval. Record the confirmation and remove the HOLD label. A converted hold should look different from a tentative one.",
      "Release a hold that has expired unless the owner renews it in writing. Do not extend a hold because the requester is important. The rule should apply to everyone. Record the release and notify the requester.",
      "Keep a short log of released and converted holds. The log shows how often the calendar was blocked by indecision. Review it with the executive's preferences in mind. The goal is a calendar that reflects real commitments.",
      "## Protect holds that depend on another person",
      "Some holds depend on a client, a venue, or a travel booking. Those holds need a different expiry because the desk does not control the answer. Record the dependency and the date the other party promised a response. Set the expiry after that date, not before it.",
      "Check the dependency before releasing the hold. A venue may have confirmed by phone while the email is still unread. Record the source of the confirmation. Do not release a slot on the strength of an empty inbox alone.",
      "Escalate a dependency that misses its promised date. Tell the executive what is waiting and what will happen to the slot. Offer a clear choice to hold longer, release, or choose an alternative. The decision belongs to the executive or a named delegate.",
      "Record the final outcome in the event and in the requester's thread. Both sides should see the same answer. A hold that disappears without a note creates a second round of scheduling. Close the loop in writing.",
      "## Review expired holds for scheduling loss",
      "Review expired holds weekly by meeting type and requester. A type that often expires may need a shorter approval path. A requester who repeatedly misses the deadline may need a different channel. Group the causes before changing the rule.",
      "Measure how much executive time was blocked and then released. A large block of released time is not automatically waste, but it is a signal. Compare it with the meetings that were actually confirmed. Use the ratio in the review.",
      "Ask the executive which holds are useful and which are noise. Their preference should shape the expiry rule. A protective hold before travel may be worth keeping. A speculative sales hold may not be.",
      "Update the rule after a holiday or a travel season. Calendar patterns change, and an expiry that worked last quarter may now be too long. Record the change and tell the requesters. A rule that is never reviewed becomes a source of friction."
    ]
  }
];

export const november17BlogDetails = {
  "audit-delegated-mailbox-permissions-after-a-client-contact-leaves": {
    "updated": "2026-11-17",
    "published": "2026-11-17",
    "takeaways": [
      "Start from the departure date and the mailbox rather than from a list of names.",
      "Separate client ownership from temporary delegation before removing access.",
      "Test delegated paths without opening live mail or asking a worker to prove access.",
      "Close the audit with a client summary and a named next review date."
    ],
    "sections": [
      {
        "heading": "Start from the departure event and the mailbox record",
        "paragraphs": [
          "A client contact who leaves can still sit on shared mailbox permissions months later. The audit begins with the departure date, the mailbox, and the list of people who can read or send on behalf of that address. Pull the delegate list from the mail platform rather than from memory. A name on a sticky note is not evidence of current access.",
          "Ask the client for the departure date and the exact mailbox or alias involved. Record whether the mailbox is a personal account, a shared inbox, or a role address. The treatment differs because ownership sits in different places. Write the answer beside the audit row before any permission is changed.",
          "Collect the current permission list with the date and the tool used to read it. Include full-access delegates, send-as rights, send-on-behalf rights, calendar delegates, and forwarding rules. Each one is a separate path into the same mailbox. Missing a path leaves a silent copy of client correspondence.",
          "Compare the permission list with the approved request that created each entry. A permission without a request is a finding even when the person seems trustworthy. Note who granted it and when. The audit is about the record, not about suspicion."
        ]
      },
      {
        "heading": "Separate ownership from delegation",
        "paragraphs": [
          "Ownership belongs to the client, while delegation is a temporary grant from the owner to a named worker. Write the owner for every shared mailbox and the date the delegation was approved. A mailbox with no owner cannot decide who should keep access. Escalate that gap before removing anything.",
          "Distinguish a role mailbox from a personal mailbox. A role address such as support at the company can pass to a new team without touching any individual account. A personal address must be closed, forwarded under a rule, or left dormant by client decision. Record which choice the client made.",
          "Keep a delegated worker's personal mailbox separate from the client's mailbox rights. A specialist may need to read the shared inbox but should not gain the departed contact's identity. Remove send-as before full access when the client wants a staged change. Stage the change in a written order.",
          "Name the person who can approve a new delegate after the audit. The approver may be the client's operations lead or a named manager in the service team. Record the channel for that approval. Without a current approver, the next request will recreate the same drift."
        ]
      },
      {
        "heading": "Test each delegated path with a non-destructive check",
        "paragraphs": [
          "Test the permission list without opening client mail. Use the admin console to confirm the delegate entry and its scope. Do not ask a worker to prove access by reading a live message. A read receipt or login test creates its own record and can confuse the client.",
          "Check calendar delegation separately from mail delegation. A calendar editor can see meeting details even when mailbox access is gone. Review the calendar permission list for the same names. Remove entries that no longer match an approved role.",
          "Review forwarding rules, automatic replies, and inbox rules that send copies outside the mailbox. A forwarding rule can outlive every visible delegate. Record the destination and the rule owner. Remove a rule only after the client confirms it is not part of an active service.",
          "Record the result of each test as present, removed, or awaiting client decision. Add the evidence reference and the tester's name. A row that says checked without a result cannot be reviewed. The audit closes on evidence, not on a meeting."
        ]
      },
      {
        "heading": "Handle shared and role-based mailboxes",
        "paragraphs": [
          "A shared mailbox may serve several clients and several workers at once. Audit it by work lane rather than by person. Map each lane to the workers who need it and the client who owns the address. Remove a worker only when no active lane still depends on that access.",
          "A role mailbox that survives a contact's departure needs a new accountable owner. Assign the owner before the next shift uses the address. Update the signature, the automatic reply, and the escalation line in the same change. A role address that still names a departed person confuses customers.",
          "Check distribution groups and aliases that feed the mailbox. A group membership can grant access without appearing in the mailbox delegate list. Compare the group roster with the current team list. Remove stale members and record the change.",
          "Keep a short handover note for the next reviewer. State which mailboxes changed, which stayed, and which decision is still open. Link the client's approval. A future audit should not need to rebuild the history from email threads."
        ]
      },
      {
        "heading": "Close the audit with evidence and a review date",
        "paragraphs": [
          "Close the audit only when every row has a result and an owner. Mark the rows that need client approval and the date the request was sent. A row left open without a follow-up date will be forgotten. The closure note should show the remaining risk in plain language.",
          "Send the client a short summary of what was removed and what remains. Name the mailbox, the access type, and the reason for any retained entry. Do not include unnecessary personal details. The client should be able to approve the outcome without opening the admin console.",
          "Set the next review date from the risk, not from the calendar alone. A mailbox tied to a departing executive may need a check in thirty days. A stable role inbox may need a quarterly review. Write the trigger that would force an earlier check.",
          "Use the audit findings to improve the departure checklist. Add mailbox delegation to the same list that covers laptop return and system access. Name the person who confirms the change. A checklist that stops at the login misses the mailbox that outlives it."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Should a departed contact's mailbox be deleted immediately?",
        "a": "Not without the client's decision. The address may still carry customer correspondence or legal retention needs, so the owner should choose whether to close, forward, or leave it dormant."
      },
      {
        "q": "How often should delegated mailbox access be reviewed?",
        "a": "At every departure and at least quarterly for stable role inboxes. A high-risk executive mailbox may need a thirty-day check after a change."
      }
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Framing for access, identity, and protective controls."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Prioritized security practices for small teams and access controls."
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards",
        "note": "Quality, stakeholder, and change-control standards."
      }
    ],
    "related": [
      "outsourced-labor-contract-end-access-removal",
      "outsourced-labor-permission-change-log"
    ]
  },
  "set-a-courier-pickup-cut-off-for-a-delegated-dispatch-desk": {
    "updated": "2026-11-17",
    "published": "2026-11-17",
    "takeaways": [
      "Set the cut-off per carrier and service level from written confirmation.",
      "Separate the booking deadline from the physical pickup window.",
      "Protect an internal release time so the desk can pack and book before the deadline.",
      "Give a missed pickup one owner and report intake misses separately from carrier misses."
    ],
    "sections": [
      {
        "heading": "Define the cut-off from the carrier's schedule",
        "paragraphs": [
          "A pickup cut-off is the latest time the dispatch desk can book a courier and still expect collection that day. It comes from the carrier's route and the warehouse's closing time, not from the desk's convenience. Write the cut-off for each carrier and each service level. A single company-wide time will be wrong for at least one route.",
          "Confirm the cut-off with the carrier in writing and record the date it was confirmed. A dispatcher who relies on a remembered time will eventually miss a collection. Store the confirmation beside the booking screen. The note should name the carrier contact who confirmed it.",
          "Separate the booking cut-off from the physical pickup window. A carrier may accept a booking until five but arrive between six and eight. The customer promise should use the pickup window, not the booking time. Record both so the desk does not promise an earlier handover than the carrier can keep.",
          "Review the cut-off when the carrier changes a route, a holiday, or a service level. Update the record with an effective date. Tell the desk before the first affected shift. An outdated cut-off is worse than no cut-off because it looks authoritative."
        ]
      },
      {
        "heading": "Record the pickup request in one queue",
        "paragraphs": [
          "Every pickup request should enter one queue with the order reference, parcel count, destination, and requested service. A request buried in a chat is hard to count and easy to duplicate. Give the queue a stable identifier the carrier can quote. The queue becomes the source of truth for the day.",
          "Record the time the request arrived and the time it was booked. The gap shows where the desk loses minutes. A request that arrives after the cut-off belongs in tomorrow's plan unless the carrier confirms an exception. Mark that decision on the record.",
          "Capture the carrier's confirmation number and the promised pickup window. Store them with the order, not only in the carrier portal. The next shift should see the commitment without logging in again. A confirmation that lives in one person's browser is not a record.",
          "Mark a request as booked only when the carrier confirms it. A submitted form is not a confirmed pickup. Distinguish queued, booked, collected, and missed. The status should tell the desk what to do next."
        ]
      },
      {
        "heading": "Protect the cut-off from late order intake",
        "paragraphs": [
          "Late order intake is the main cause of missed pickups. Set an internal release time that is earlier than the carrier cut-off. The desk needs enough minutes to pack, label, and book before the carrier's deadline. Publish the release time to the sales and warehouse teams.",
          "Give the desk a rule for an order that arrives after the release time. It may wait for tomorrow, use a faster service at a named cost, or go to a manual review. Write who can approve the extra cost. A dispatcher should not invent that answer under pressure.",
          "Protect a short booking block near the cut-off from meetings and live calls. The desk cannot book pickups while handling an unrelated queue. Rotate the block or assign a named backup. Record which arrangement was used each day.",
          "Review late arrivals weekly by source. A cluster from one sales channel may need an earlier release rule. A cluster from the warehouse may need a packing change. Fix the source instead of asking the desk to absorb the delay."
        ]
      },
      {
        "heading": "Handle a missed pickup with a named owner",
        "paragraphs": [
          "A missed pickup is an exception with a customer consequence. Assign one owner at a time and record the carrier's reason. The reason may be a late booking, a route failure, or a parcel that was not ready. Each cause leads to a different next action.",
          "Tell the customer the new collection or delivery expectation only after the carrier confirms it. A promise made before confirmation creates a second failure. Record the channel and the time of the message. Keep the wording factual and free of blame.",
          "Rebook the pickup for the next available window and note any added cost. If the customer needs same-day delivery, escalate to the account owner rather than quietly upgrading the service. The account owner should decide who pays for the difference. Record that decision with the new booking.",
          "Close the exception when the parcel is collected and the customer has an updated expectation. Record the evidence and the final cost. A missed pickup that was rebooked but never tracked is still an open risk. The next review should see the whole chain."
        ]
      },
      {
        "heading": "Review misses by route and carrier",
        "paragraphs": [
          "Group missed pickups by carrier, route, day of week, and hour of booking. A single route with repeated misses may need a different cut-off. A carrier with failures across routes may need a service review. The grouping should guide the conversation.",
          "Compare the booking time with the carrier's cut-off for every miss. A miss that happened after the deadline is an intake problem. A miss after an on-time booking is a carrier problem. Report the two separately so neither hides the other.",
          "Ask the desk which requests are hardest to book. They hear the carrier's answers and know where the form fails. Use one example in the next team review. A small change to the request form can remove many repeat calls.",
          "Test one change for a defined period. Record the old cut-off, the new rule, and the result. Compare misses per hundred pickups and the added cost. A change that improves the rate while creating overtime is not yet a success."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Should the cut-off be the same for every carrier?",
        "a": "No. Each carrier and service level has its own route timing. Confirm the cut-off for each one in writing and record the confirmation date."
      },
      {
        "q": "What should the desk do with an order that arrives after the release time?",
        "a": "Use the written rule: wait for the next window, book a faster service with named approval, or send the order to manual review. Do not let the desk invent the answer under pressure."
      }
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Occupational context for delegated support and dispatch work."
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards",
        "note": "Quality, stakeholder, and change-control standards."
      },
      {
        "name": "International Labour Organization, digital labour platforms",
        "url": "https://www.ilo.org/digital-labour-platforms",
        "note": "Context on remote and digitally mediated work arrangements."
      }
    ],
    "related": [
      "set-a-same-day-cutoff-for-a-philippines-operations-desk",
      "philippines-vendor-promised-date-variance"
    ]
  },
  "build-an-attachment-handling-rule-for-a-delegated-support-inbox": {
    "updated": "2026-11-17",
    "published": "2026-11-17",
    "takeaways": [
      "Classify attachments by consequence before anyone opens them.",
      "Keep the first open inside an approved viewer and disable macros and external content.",
      "Record the fact an attachment proves, not only the file name.",
      "Give unexpected archives and payment files a stop rule and a quarantine path."
    ],
    "sections": [
      {
        "heading": "Classify attachments before opening them",
        "paragraphs": [
          "An attachment rule starts with the kinds of files the inbox receives. List invoices, delivery notes, identity documents, screenshots, and archives by name. State which types the desk may open and which must go to a specialist. A vague instruction to be careful gives no usable boundary.",
          "Classify by the consequence of a wrong action, not only by the file extension. A harmless-looking spreadsheet can carry customer records. A PDF can hold a payment instruction. The rule should name the sensitive content the desk must look for before opening.",
          "Treat an unexpected file from an unknown sender as untrusted until verified. Check the sender against the customer record or the vendor master. Do not rely on the display name alone. A short verification step prevents most bad attachments from being opened.",
          "Record the classification on the ticket before any file is downloaded. Include the sender, the file type, and the reason for the decision. The record should let a reviewer see why the desk opened or held the file. A decision without a reason cannot be reviewed."
        ]
      },
      {
        "heading": "Keep the first open inside an approved tool",
        "paragraphs": [
          "The first open should happen in the approved viewer, not in a personal download folder. A viewer can limit macros and keep the file inside the managed environment. State the tool in the rule and remove alternatives that bypass it. The specialist should not choose between convenience and policy.",
          "Disable macros and external content by default for documents from outside the organization. A file that asks to enable editing needs a second decision. Record who approved the exception. The request itself is a signal that the file deserves more care.",
          "Keep the attachment with the case rather than on the desktop. A local copy can outlive the ticket and escape the retention rule. Use the case system's attachment store where it exists. If the file cannot be stored there, document the approved alternative.",
          "Limit who can download a sensitive file. A specialist who only needs to read a document should not also receive a copy. Grant the narrowest access the tool allows. Review the access after the case closes."
        ]
      },
      {
        "heading": "Record what the attachment proves",
        "paragraphs": [
          "An attachment is evidence of something specific. Name the fact it supports, such as a delivery date, a signed approval, or a stated amount. A file without a purpose becomes clutter. Write the purpose in the ticket before the file is filed.",
          "Capture the key fields in text as well as the image. A scan can be unreadable or later removed. The text record should include the date, the reference number, and the name on the document. It should not include more personal data than the case needs.",
          "Note any mismatch between the attachment and the case record. A different address, amount, or account number is a finding. Do not correct the case to match the file without approval. Escalate the difference with both records attached.",
          "Mark an attachment as unverified when its source cannot be confirmed. A forwarded file with no chain of custody is not strong evidence. Record the gap and the next step. The case should not close on an unverified document."
        ]
      },
      {
        "heading": "Set a safe path for unexpected files",
        "paragraphs": [
          "An unexpected archive, executable, or password-protected file needs a stop rule. The desk should not open it to find out what it is. Route it to the security or system owner through a named channel. Record the time and the sender.",
          "Do not request a password in the same channel as the file. A password sent beside the archive protects nothing. Use an approved separate channel or ask the sender to upload through a secure portal. Write the method into the rule.",
          "If a file looks like a payment instruction, stop and verify with the known contact. Use a phone number from the vendor master, not from the email. Record the verification and the person who confirmed it. This step protects both the client and the specialist.",
          "Preserve the suspicious message without forwarding it widely. Forwarding can spread the problem and destroy the original headers. Keep it in the approved quarantine location. Tell only the people who need to act."
        ]
      },
      {
        "heading": "Review attachment incidents and update the rule",
        "paragraphs": [
          "Review attachment incidents monthly by type, sender, and outcome. Group near misses with actual incidents. A file that was stopped before opening still teaches something. The review should focus on the rule, not on blaming the person who noticed it.",
          "Look for patterns in the request itself. Repeated password-protected files from one vendor may need a portal change. Repeated screenshots from customers may need a better form. Fix the source when the same risky attachment keeps arriving.",
          "Update the rule when a tool or a client changes. A new case system may store files differently. A new client may send a format the desk has never seen. Record the effective date and tell the team before the next shift.",
          "Test the rule with one realistic example during onboarding. Ask the new specialist to classify a file and explain the next step. Correct the reasoning, not only the answer. A rule that cannot be applied in practice will be ignored."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can a specialist open a customer attachment on a personal device?",
        "a": "No. The first open should happen in the approved viewer inside the managed environment so the file stays within the client's access and retention rules."
      },
      {
        "q": "What should the desk do with a password-protected archive?",
        "a": "Stop and route it to the security or system owner through the named channel. Do not ask for the password in the same email thread as the file."
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Framing for access, identity, and protective controls."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Prioritized security practices for small teams and access controls."
      },
      {
        "name": "Federal Trade Commission, protecting personal information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "note": "Practical guidance for handling personal information and documents."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      }
    ],
    "related": [
      "write-a-redaction-check-before-a-delegated-team-shares-a-file",
      "set-a-document-retention-rule-for-outsourced-support-records"
    ]
  },
  "write-a-replacement-order-note-for-a-delegated-support-queue": {
    "updated": "2026-11-17",
    "published": "2026-11-17",
    "takeaways": [
      "Separate a replacement from a refund and a return before creating the order.",
      "Capture the original order, the failed item, and the evidence the customer supplied.",
      "Name the approval owner and the written value limit on the note.",
      "Keep a status and a follow-up date until the customer has the item or an agreed alternative."
    ],
    "sections": [
      {
        "heading": "Separate replacement from refund and return",
        "paragraphs": [
          "A replacement is a new shipment, not a refund and not a return. The note should say which remedy the customer chose and who approved it. Mixing the three creates duplicate credits and lost stock. Write the distinction at the top of the record.",
          "Record the original order and the item that failed. Include the SKU, the quantity, and the specific defect or loss. A note that says wrong item cannot support a replacement. The warehouse needs the detail to send the right product.",
          "Decide whether the customer must return the original item before a replacement ships. This is a policy decision, not a desk preference. Record the policy and any exception. The note should state whether a return label was issued.",
          "Keep the replacement value within the desk's written limit. A high-value replacement needs an owner's approval before the order is created. Record the approver and the time. A limit that exists only in training is not a control."
        ]
      },
      {
        "heading": "Capture the original order and the failed item",
        "paragraphs": [
          "Start from the order record rather than the customer's description alone. Confirm the purchase date, the shipping address, and the item on file. Compare that record with the photo or message the customer sent. The comparison is the evidence for the replacement.",
          "Ask for a photo when the defect is visible and the policy allows it. Give the customer a clear reason for the request. Do not demand a photo for a missing parcel that was never delivered. Match the evidence request to the actual failure.",
          "Check whether the item is still in stock before promising a replacement. A promise made without a stock check becomes a second failure. If stock is unavailable, offer the approved alternative or escalate. Record the choice the customer made.",
          "Note any prior replacement on the same order. A second replacement can signal a recurring defect or a misuse pattern. Escalate the pattern rather than processing another shipment automatically. The history belongs in the note."
        ]
      },
      {
        "heading": "State the decision owner and the limit",
        "paragraphs": [
          "Write the name of the person who approved the replacement. A queue that says approved without a name cannot be audited. Include the role and the time of approval. The owner should be reachable if the warehouse asks a question.",
          "Separate the decision to replace from the decision to expedite. An expedited shipment may cost more and needs its own approval. Record the service level and who authorized it. Do not let urgency quietly expand the desk's authority.",
          "Give the desk a clear stop rule for suspected fraud. Repeated replacements to different addresses or names should pause for review. Record the signal and the reviewer. The stop rule protects the customer relationship as well as the margin.",
          "Tell the customer what was approved and what happens next. State the item, the address, and the expected ship date. Avoid promising a delivery date the warehouse has not confirmed. The message should match the record exactly."
        ]
      },
      {
        "heading": "Give the note a status and a follow-up date",
        "paragraphs": [
          "Use a small status set such as requested, approved, shipped, delivered, and closed. Each status should have a next action and a time limit. A note that only says open does not tell the team what to do. Sort the queue by the next due action.",
          "Set a follow-up date for the warehouse confirmation. A replacement that was approved but never shipped is invisible without one. Check the date on the next shift. Record the result of the check.",
          "Record the tracking number when the replacement ships. Link it to the original order and the case. The customer should not have to explain the history again. A linked record also prevents a duplicate replacement.",
          "Close the note only when the customer has the item or an agreed alternative. Delivery confirmation is the preferred evidence. If the customer cannot be reached, record the attempts and the final disposition. The queue should distinguish resolved from simply quiet."
        ]
      },
      {
        "heading": "Review replacements for repeat causes",
        "paragraphs": [
          "Review replacements weekly by product, reason, and destination. A product with repeated defects may need a quality check. A destination with repeated losses may need a carrier review. Group the cases before choosing a fix.",
          "Compare the replacement rate with the return rate and the refund rate. A rising replacement rate with stable returns may mean the desk is choosing the easiest remedy. Report the three measures together. A single measure can hide a shift in behavior.",
          "Ask the warehouse and the customer team what the note misses. They see the packing problem and the customer's real complaint. Use one example in the next review. A small field can remove a long email thread.",
          "Update the note template when the policy or the system changes. Remove fields that no one uses and add the one fact that keeps causing delays. Record the effective date. A template that grows without review becomes a form to skip."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can a replacement be approved without a return?",
        "a": "Only when the written policy allows it. Record the policy and the approver so the warehouse and the accounts team see the same decision."
      },
      {
        "q": "What belongs in the replacement note?",
        "a": "The original order, the failed item, the evidence, the remedy, the approver, the value, the shipping address, the status, and the next follow-up date."
      }
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, bookkeeping, accounting, and auditing clerks",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm",
        "note": "Occupational context for delegated accounts and records work."
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards",
        "note": "Quality, stakeholder, and change-control standards."
      },
      {
        "name": "Federal Trade Commission, protecting personal information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business",
        "note": "Practical guidance for handling personal information and documents."
      }
    ],
    "related": [
      "design-a-refund-decision-lane-for-an-outsourced-support-team",
      "outsourced-order-partial-shipment-reconciliation"
    ]
  },
  "set-a-calendar-hold-expiry-on-a-delegated-executive-calendar": {
    "updated": "2026-11-17",
    "published": "2026-11-17",
    "takeaways": [
      "Give every temporary hold an expiry time and a next action.",
      "Label holds so the executive can see the purpose on a phone.",
      "Check holds at the start and end of the working day.",
      "Protect holds that depend on another party and escalate the missed dates."
    ],
    "sections": [
      {
        "heading": "Put an expiry on every temporary hold",
        "paragraphs": [
          "A temporary hold is a reservation without a confirmed booking. It should carry an expiry time from the moment it is created. A hold with no expiry can block a real meeting for weeks. The calendar should show the expiry in the event title or description.",
          "Choose the expiry from the decision the executive needs to make. A hold for a tentative lunch may expire in two days. A hold for a board meeting may need a week. Write the rule by meeting type. The specialist should not guess each time.",
          "Record who asked for the hold and what would confirm it. A hold requested by an assistant in another company is different from one requested by the executive. The note should name the next action and the owner. A hold without a next action is only a block.",
          "Apply the expiry in the calendar tool, not only in a task list. A reminder that lives elsewhere will not release the slot. Set the event to show as tentative until it is confirmed. The calendar should tell the truth without a separate lookup."
        ]
      },
      {
        "heading": "Make the hold visible to the executive",
        "paragraphs": [
          "The executive should see that a slot is held and what it is waiting for. Use a consistent label such as HOLD followed by the subject. Do not hide the purpose behind a generic block. A visible hold invites a faster decision.",
          "Keep the hold's details short enough to read on a phone. Include the requester, the decision needed, and the expiry date. Put the full context in the event notes. The title should work when the screen is small.",
          "Avoid stacking several holds on the same slot without a priority. Two holds on one hour create a false sense of availability. Mark the preferred hold and release the others. Record which request was declined and why.",
          "Tell the requester when the hold is created and when it will expire. A requester who knows the deadline can supply the missing detail. Send one short message with the date. Do not leave the requester waiting for a silent calendar."
        ]
      },
      {
        "heading": "Release or convert holds on a fixed routine",
        "paragraphs": [
          "Check the hold list at the start and end of each working day. A morning check catches holds that expired overnight. An end-of-day check catches holds that will expire before the next shift. Both checks should take only a few minutes.",
          "Convert a hold to a confirmed meeting only when the required detail is present. The detail may be an agenda, a participant list, or a signed approval. Record the confirmation and remove the HOLD label. A converted hold should look different from a tentative one.",
          "Release a hold that has expired unless the owner renews it in writing. Do not extend a hold because the requester is important. The rule should apply to everyone. Record the release and notify the requester.",
          "Keep a short log of released and converted holds. The log shows how often the calendar was blocked by indecision. Review it with the executive's preferences in mind. The goal is a calendar that reflects real commitments."
        ]
      },
      {
        "heading": "Protect holds that depend on another person",
        "paragraphs": [
          "Some holds depend on a client, a venue, or a travel booking. Those holds need a different expiry because the desk does not control the answer. Record the dependency and the date the other party promised a response. Set the expiry after that date, not before it.",
          "Check the dependency before releasing the hold. A venue may have confirmed by phone while the email is still unread. Record the source of the confirmation. Do not release a slot on the strength of an empty inbox alone.",
          "Escalate a dependency that misses its promised date. Tell the executive what is waiting and what will happen to the slot. Offer a clear choice to hold longer, release, or choose an alternative. The decision belongs to the executive or a named delegate.",
          "Record the final outcome in the event and in the requester's thread. Both sides should see the same answer. A hold that disappears without a note creates a second round of scheduling. Close the loop in writing."
        ]
      },
      {
        "heading": "Review expired holds for scheduling loss",
        "paragraphs": [
          "Review expired holds weekly by meeting type and requester. A type that often expires may need a shorter approval path. A requester who repeatedly misses the deadline may need a different channel. Group the causes before changing the rule.",
          "Measure how much executive time was blocked and then released. A large block of released time is not automatically waste, but it is a signal. Compare it with the meetings that were actually confirmed. Use the ratio in the review.",
          "Ask the executive which holds are useful and which are noise. Their preference should shape the expiry rule. A protective hold before travel may be worth keeping. A speculative sales hold may not be.",
          "Update the rule after a holiday or a travel season. Calendar patterns change, and an expiry that worked last quarter may now be too long. Record the change and tell the requesters. A rule that is never reviewed becomes a source of friction."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How long should a temporary hold last?",
        "a": "Set it from the decision the executive needs to make. A tentative lunch may need two days, while a board meeting may need a week. Apply the rule by meeting type."
      },
      {
        "q": "Should an assistant release a hold automatically?",
        "a": "Release it when it expires unless the owner renews it in writing. Record the release and notify the requester so the slot is not silently reused."
      }
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards",
        "note": "Quality, stakeholder, and change-control standards."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Occupational context for delegated support and dispatch work."
      },
      {
        "name": "International Labour Organization, digital labour platforms",
        "url": "https://www.ilo.org/digital-labour-platforms",
        "note": "Context on remote and digitally mediated work arrangements."
      }
    ],
    "related": [
      "philippines-virtual-assistant-calendar-controls",
      "filipino-admin-calendar-handoff"
    ]
  }
};
