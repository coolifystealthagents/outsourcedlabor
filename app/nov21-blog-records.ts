type Nov21BlogPost = {
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

export const november21BlogPosts: Nov21BlogPost[] = [
  {
    "slug": "build-a-chargeback-evidence-packet-checklist-for-a-delegated-billing-desk",
    "title": "Build a chargeback evidence packet checklist for a delegated billing desk",
    "excerpt": "A chargeback packet is stronger when the desk assembles the transaction, delivery, and customer-contact evidence in one order before the response deadline.",
    "minutes": 7,
    "publicationDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "image": "/daily21/outsourcedlabor/build-a-chargeback-evidence-packet-checklist-for-a-delegated-billing-desk.png",
    "body": [
      "## Start with the transaction record",
      "A chargeback response should begin with the transaction itself and not with the customer complaint. Pull the order number, payment reference, amount, currency, authorization result, and the timestamp of the original charge. Confirm that the packet matches the exact transaction under dispute rather than a similar order from the same customer. A clean transaction spine keeps the rest of the evidence from drifting.",
      "Collect the authorization record, the address verification result, and any risk score the payment provider returned at the time of sale. Save the raw response instead of retyping the values into a summary. If the provider exposes a device or browser signal, export that field with its timestamp. The packet should show what the system saw when the payment was approved.",
      "Match the customer-facing descriptor to the merchant account that processed the charge. A recognizable descriptor is often the difference between a customer recognizing the purchase and filing a dispute. Record the descriptor exactly as it appeared on the statement. If the descriptor changed during the period, note the change and its effective date.",
      "Name the person who assembled the packet and the owner who reviewed it before submission. Record the review time and any field that was corrected during review. A second pair of eyes catches mismatched amounts and missing pages while there is still time to repair them. The review line also gives the client a clear escalation contact.",
      "## Prove the customer received the product",
      "Attach the fulfillment record with the ship date, carrier, tracking number, and delivery status. Save a dated copy of the carrier page rather than a link that may expire before the network reads it. If the carrier shows a delivery scan, include the scan location and time. The packet should let a reviewer follow the parcel without calling the desk.",
      "Add the order confirmation, the shipping confirmation, and any delivery notice sent to the customer. Show the email address or phone number used for each message and the time it was sent. A confirmation that the customer opened or clicked a tracking link is useful when the provider retains it. Keep the customer's personal data to the minimum the dispute requires.",
      "For digital goods or services, replace delivery proof with an access record. Export the login, download, activation, or usage event with a timestamp and the account identifier. If the product was delivered inside a client system, attach a screenshot that shows the account state. The evidence should connect the disputed charge to a specific benefit the customer received.",
      "When delivery is incomplete, do not manufacture a positive proof. State the known facts, attach the carrier exception, and explain the remedy already offered. A truthful partial packet is stronger than a polished claim that the record contradicts. Record the customer's response to the remedy and the date of that contact.",
      "## Write the response in the network's order",
      "Use the evidence order the card network requests and keep the packet paginated and labeled. Put the transaction summary first, then delivery proof, then customer contact, then policy excerpts. Reviewers read many packets in one day and a predictable order reduces avoidable confusion. Remove internal notes that do not answer a required evidence field.",
      "Write short captions that identify what each attachment proves. A caption such as delivery scan for order 1842 is better than a file name with no context. Reference the relevant transaction field beside each exhibit number. The reviewer should not have to guess which page supports which claim.",
      "Separate facts from argument and keep the argument brief. State the service delivered, the date, the amount, and the customer contact that preceded the dispute. Avoid blaming language and avoid claims the evidence cannot support. A calm summary is easier to verify and less likely to trigger a follow-up request.",
      "Check the response against the network deadline and the client's approval cutoff before submitting. Record the submission confirmation, the packet version, and the name of the approver. Keep a read-only copy of exactly what was sent. The desk needs the sent version when a follow-up or a second dispute arrives.",
      "## Keep a post-submission learning log",
      "Record the outcome of each chargeback and the reason given by the network. Group the reasons into a small set such as missing delivery proof, unclear descriptor, or late response. Review the set monthly with the billing owner and the client. The pattern should point to one fix in intake, fulfillment, or evidence handling.",
      "Track the time from dispute notice to packet submission and the number of internal revisions. A packet that takes three revisions usually has a missing source or an unclear checklist. Record which field caused each revision and update the checklist when the same field repeats. The checklist should get shorter and more precise over time.",
      "Share only the learning summary with the wider team and keep customer details in the restricted case record. Use one accepted packet and one corrected packet as training examples. Explain why each was strong or weak without turning the review into a blame session. Staff need to see what good evidence looks like.",
      "Review the checklist whenever the payment provider, the card network rules, or the client's refund policy changes. Record the version and the effective date at the top of the checklist. Retire old examples that no longer match the current process. A current packet is a business record, not a one-time writing exercise.",
    ],
    "takeaways": [
      "Open the packet from the transaction record, not from the complaint.",
      "Require proof of delivery and prior customer contact before drafting.",
      "Write the response in the network's evidence order.",
      "Log every submission outcome so the next packet improves.",
    ],
    "faqs": [
      {
        "q": "Who should approve a chargeback response?",
        "a": "A named billing owner should approve the facts and the amount before submission. The specialist can assemble the packet, but the owner keeps the decision on disputed money."
      },
      {
        "q": "What if the evidence deadline falls on a weekend?",
        "a": "Work backward from the network deadline and set an internal cutoff at least two business days earlier. Record the internal cutoff in the queue so the packet is never assembled under avoidable time pressure."
      },
    ],
    "sources": [
      {
        "name": "Consumer Financial Protection Bureau, credit cards",
        "url": "https://www.consumerfinance.gov/consumer-tools/credit-cards/",
        "note": "Consumer-facing context for billing disputes and card protections."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning recurring financial work."
      },
      {
        "name": "PCI Security Standards Council",
        "url": "https://www.pcisecuritystandards.org/",
        "note": "Payment-data handling context for evidence exports."
      },
    ],
    "related": ["build-a-daily-reconciliation-between-a-help-desk-and-a-billing-queue", "build-a-rework-log-for-a-delegated-order-processing-team", "set-a-client-approved-tone-guide-for-a-delegated-inbox"]
  },
  {
    "slug": "set-a-duplicate-shipment-check-for-a-delegated-fulfillment-desk",
    "title": "Set a duplicate shipment check for a delegated fulfillment desk",
    "excerpt": "A duplicate shipment check compares order, address, and label signals before a second parcel leaves the building.",
    "minutes": 7,
    "publicationDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "image": "/daily21/outsourcedlabor/set-a-duplicate-shipment-check-for-a-delegated-fulfillment-desk.png",
    "body": [
      "## Define the signals that make a shipment look duplicate",
      "A duplicate check should start with a short list of signals the desk can actually see. Use the same order identifier, the same customer, the same address, and an active label or pickup scan within a defined window. Add a second signal only when it changes the decision, such as an identical item and quantity. The list should be short enough to apply during a busy packing hour.",
      "Treat a replacement or reship record as a separate signal, not as an exception to ignore. If a reship was approved, the desk should see the reason, the approver, and the original tracking number. That record explains why two parcels may be legitimate. Without it, the second parcel should pause for review.",
      "Decide how far back the check should look. A seven-day window may catch most accidental repeats, while a thirty-day window catches slower order cycles. Record the window beside the rule and review it against real cases. The window should match the client's shipping rhythm, not a generic policy.",
      "Write the check as a stop condition rather than a warning. A warning that appears beside a label button is easy to click past during a rush. A stop condition that requires a reason before purchase creates a record. The desk should know exactly which signal stopped the shipment and who cleared it.",
      "## Check before the label is purchased",
      "Run the check after the order is picked but before the label is bought. At that point the item, address, and service level are known and the cost has not yet been committed. Save the check result with the order record. A check that runs after handoff to the carrier is a reconciliation, not a prevention step.",
      "Compare the shipping address against the most recent completed order for the same customer. Flag a move only when the address change is new and the customer has not confirmed it. A legitimate move can look like a duplicate because the old order remains in history. The desk should ask for confirmation rather than guess.",
      "Check whether a label already exists for the order and whether it has been voided or used. A voided label is not proof that the parcel did not ship. Look for a pickup scan, a carrier acceptance, or a warehouse dispatch record. The label state and the parcel state are two different facts.",
      "Require the specialist to record one of three outcomes: release, hold for review, or cancel the duplicate. Add a short reason and the source used for the decision. The outcome should be visible to the next shift. A silent release teaches the team that the check is optional.",
      "## Handle address edits as a new fulfillment event",
      "An address edit after label purchase should create a new check rather than a simple field update. The old label may still be active and the carrier may still deliver to the old address. Record the edit time, the old address, the new address, and who requested the change. The edit is a fulfillment event with its own risk.",
      "Decide whether the original label must be voided before a replacement is bought. Require a void confirmation or a carrier instruction that the parcel will be intercepted. If the carrier cannot confirm, hold the replacement until the original status is clear. Two active labels for one order is the exact condition the check exists to prevent.",
      "Tell the customer what will happen next in one clear message. Name the address that will be used, the expected ship date, and whether the original parcel will be stopped. Avoid promising a refund for a parcel that may still arrive. The customer needs a factual next step, not a guess.",
      "Review address edits weekly for repeat causes. A client checkout that accepts an old default address may create the same problem many times. Record the pattern and raise it with the client owner. The desk fix addresses the symptom while the checkout fix reduces the cause.",
      "## Review duplicate releases with the client",
      "Count every second parcel released, including the legitimate reships. Separate the count by reason: customer request, carrier loss, damage, warehouse error, or unclear record. The mix tells the client whether the check is working. A single duplicate total hides the difference between a controlled reship and an accidental repeat.",
      "Sample a few released duplicates each week and read the reason and evidence. A reason such as customer asked is not enough without the request record. Check that the approver had the authority to release the parcel. The sample should test the decision, not only the label.",
      "Review the cost of duplicate parcels alongside the count. A low count of high-value repeats may matter more than a high count of low-value samples. Record the shipping cost, the replacement cost, and any refund attached to the case. Cost helps the client prioritize the fix.",
      "Update the rule after each review and record the version date. Remove a signal that never changes a decision and add one that repeatedly explains a miss. Train the team on the current version with two real examples. The check should become clearer as the desk learns.",
    ],
    "takeaways": [
      "Check duplicate signals before buying a second label.",
      "Treat an address edit as a new fulfillment event.",
      "Require a named owner to release an intentional reship.",
      "Review duplicate releases weekly by cause.",
    ],
    "faqs": [
      {
        "q": "Is a duplicate shipment always an error?",
        "a": "No. A replacement parcel can be legitimate when the first was lost or damaged. The check should require a recorded reason and an owner approval, not forbid every second shipment."
      },
      {
        "q": "What is the strongest duplicate signal?",
        "a": "The same order identifier with an active label and no cancellation or reship record is usually the strongest signal. Address and customer name help, but the order identifier should drive the stop."
      },
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, tracking and delivery",
        "url": "https://www.usps.com/manage/track.htm",
        "note": "Public tracking context for parcel status and delivery scans."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning recurring fulfillment work."
      },
      {
        "name": "National Institute of Standards and Technology, cybersecurity framework",
        "url": "https://www.nist.gov/cyberframework",
        "note": "Risk-review framing for controlled process changes."
      },
    ],
    "related": ["build-a-rework-log-for-a-delegated-order-processing-team", "add-a-second-verification-step-to-customer-address-changes-in-a-delegated-order-desk", "build-a-daily-reconciliation-between-a-help-desk-and-a-billing-queue"]
  },
  {
    "slug": "create-a-lost-parcel-tracer-checklist-for-a-delegated-logistics-desk",
    "title": "Create a lost parcel tracer checklist for a delegated logistics desk",
    "excerpt": "A tracer checklist turns a missing-parcel complaint into a carrier-ready case with scans, addresses, and a dated customer promise.",
    "minutes": 7,
    "publicationDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "image": "/daily21/outsourcedlabor/create-a-lost-parcel-tracer-checklist-for-a-delegated-logistics-desk.png",
    "body": [
      "## Confirm the parcel is actually untraced",
      "Start by reading the full tracking history and not only the latest status. Confirm the service level, the ship date, and the carrier's expected delivery window. Check whether the parcel is marked delivered to a neighbor, a locker, or a front desk. A tracer opened before these checks wastes the carrier's time and delays the customer.",
      "Look for a delivery exception, an address correction, or a customs hold in the scan history. These states explain many missing-parcel complaints and each has a different next step. Record the exact exception text and the time it appeared. Do not paraphrase a carrier status into a generic delay.",
      "Contact the customer once to confirm the delivery address and any safe-place instruction. Ask whether someone else in the household or building accepted the parcel. Record the answer and the time of contact. A short confirmation prevents a trace for a parcel that was already found.",
      "Apply the carrier's minimum waiting period before opening a formal trace. Record the rule and the date the case becomes eligible. If the customer is upset, explain the waiting period and the next update date. A clear expectation is better than an early case that cannot progress.",
      "## Build one complete tracer packet",
      "Collect the order number, the tracking number, the ship date, the service level, and the full scan history. Add the sender address, the recipient address, and the contact details the carrier requires. Save the carrier's case reference in the same record. The packet should be usable without opening three other systems.",
      "Capture a dated copy of the tracking page rather than a live link. Include the last known scan location and the carrier's stated exception. If the parcel was handed to a partner carrier, record the handoff reference. The trace should show the chain rather than a single status label.",
      "Write a short factual description of the contents and the packaging. Avoid listing unrelated customer purchases or unnecessary personal details. Give the carrier enough information to identify the parcel without exposing more than the case needs. Record who approved the description.",
      "Attach the customer's original delivery instructions and any address confirmation. If the address changed after shipment, include the old and new values with the change time. A carrier cannot resolve a mismatch that the desk has not documented. The packet should make the address history obvious.",
      "## Submit one tracer request and track the deadline",
      "Send the tracer through the carrier's official channel and keep the confirmation. Record the submission time, the case number, and the expected response date. Avoid sending the same request through chat, email, and phone unless the carrier requires it. Duplicate requests create conflicting case notes.",
      "Set a follow-up date before the carrier's response deadline. If the carrier asks for more information, answer in one message with the requested item and the case reference. Record the request and the response. A tracer that stalls usually lacks a named contact or a complete first packet.",
      "Tell the customer the case number, the expected update date, and what happens if the parcel is not found. Use plain language and avoid blaming the carrier or the customer. Record the message and the channel used. The customer should not have to ask for the next step.",
      "Escalate when the deadline passes without a substantive response. Give the client owner the packet, the carrier case, the last scan, and the proposed remedy options. Keep the money decision with the owner. The desk's job is to make the decision easy and evidence-based.",
      "## Close the case with a dated outcome",
      "Close the tracer with one of a small set of outcomes. Use found and delivered, returned to sender, confirmed lost, or unresolved after the carrier deadline. Record the evidence for the outcome and the date. A closed case without an outcome reason cannot be reviewed or learned from.",
      "If the parcel is found, confirm the delivery address and the customer's receipt before closing. If it is returned, record the return tracking and the condition on arrival. If it is lost, attach the carrier's written response or the expired deadline. The outcome should match the remedy the client approves.",
      "Send the customer a final message that states the outcome and the remedy. Include the date, the amount if any, and the next owner. Avoid reopening the same case for a new question unless the parcel status changes. A clear close keeps the queue honest.",
      "Review tracer cases monthly for repeat carriers, routes, or packaging problems. Count the cases by outcome and by time to close. Share the pattern with the client and the carrier contact. The checklist should improve the next trace, not only document the last one.",
    ],
    "takeaways": [
      "Confirm the parcel is genuinely untraced before opening a case.",
      "Collect every scan, address, and case reference in one packet.",
      "Give the carrier one complete tracer request, not a series of messages.",
      "Close the case with a dated customer outcome.",
    ],
    "faqs": [
      {
        "q": "When should the desk open a carrier trace?",
        "a": "Open the trace when the parcel has missed its expected window and has no movement after the last scan. Follow the carrier's minimum waiting period and record it in the case."
      },
      {
        "q": "Who decides whether to reship or refund?",
        "a": "The client's named owner decides after the carrier responds or the trace deadline passes. The desk can prepare the options and the evidence, but the money decision stays with the owner."
      },
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, tracking and delivery",
        "url": "https://www.usps.com/manage/track.htm",
        "note": "Public tracking and missing-mail context for parcel cases."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and reviewing recurring work."
      },
      {
        "name": "Plain Language Action and Information Network, guidelines",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "note": "Practical rules for clear customer updates."
      },
    ],
    "related": ["create-an-end-of-day-handover-note-for-a-philippines-support-team", "build-a-daily-reconciliation-between-a-help-desk-and-a-billing-queue", "set-a-client-approved-tone-guide-for-a-delegated-inbox"]
  },
  {
    "slug": "set-a-call-recording-consent-reminder-for-a-delegated-phone-support-desk",
    "title": "Set a call recording consent reminder for a delegated phone support desk",
    "excerpt": "A consent reminder keeps recording notices consistent at the start of a call and gives the desk a clear path when a customer objects.",
    "minutes": 7,
    "publicationDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "image": "/daily21/outsourcedlabor/set-a-call-recording-consent-reminder-for-a-delegated-phone-support-desk.png",
    "body": [
      "## Decide the consent rule before the queue opens",
      "Write down who records the call, which system stores it, and how long it is kept. Name the client owner who approves the rule and the review date. Check which jurisdictions the customers and the specialists are in before choosing one script. A recording policy copied from another site may not fit the calls this desk handles.",
      "Separate one-party and all-party consent situations in the written rule. If the client operates in more than one region, list the regions and the required notice for each. Give the specialist a simple decision table rather than a legal memo. The table should say what to do, not only why the rule exists.",
      "Decide which calls are exempt, such as a wrong number or an immediate hang-up. Record the exemption and the reason in the quality guide. Do not let exemptions grow informally through habit. A narrow written list is easier to audit than a broad exception.",
      "Name the person who can change the script and the process for urgent legal updates. Record the version and effective date at the top of the script. Remove old wording from saved replies and agent prompts at the same time. A current script in one place and an old one in another creates inconsistent notices.",
      "## Put the notice in the first ten seconds",
      "Write one short sentence that says the call may be recorded and why. Keep it plain and avoid legal jargon that the customer cannot follow. Put the sentence before the identity verification questions. The customer should hear the notice before sharing sensitive information.",
      "Test the sentence at normal speaking speed and measure how long it takes. If it runs past ten seconds, shorten it without dropping the essential fact. Record the tested wording and the date. A notice that is rushed or buried is hard to hear and hard to audit.",
      "Add a short pause after the notice so the customer can respond. The specialist should not talk over a question or a refusal. Record the pause as part of the script. A pause is a small change that makes the consent step real.",
      "Give the specialist a second line for a customer who asks why the call is recorded. The line should name quality, training, or record-keeping only if that is true. Do not invent a reason the client has not approved. Record the approved explanation beside the script.",
      "## Handle a refusal without improvising",
      "Write a calm response for a customer who objects to recording. Offer the approved alternative, such as a callback without recording or a written channel. Record the customer's choice and the time. The specialist should not argue, guess, or continue recording after a clear refusal.",
      "If the client's policy requires recording to continue service, the specialist should explain the limit and route the customer to the named owner. Record the escalation and the customer's preferred contact method. Do not trap the customer in a call they cannot complete. The owner should have a documented fallback.",
      "Log the refusal in a way that does not expose unnecessary personal detail. Note the call time, the queue, the disposition, and the alternative offered. Keep the recording status accurate. A refusal record helps the client see whether the script or the service path needs repair.",
      "Review refusals weekly for patterns. A cluster may mean the notice is unclear, the queue is calling the wrong list, or the alternative is hard to use. Record one fix and its owner. The goal is not a low refusal count but a process the customer can understand.",
      "## Audit a small sample and keep the record current",
      "Draw a monthly sample of calls across queues and shifts. Check whether the notice was read, whether it came before verification, and whether the disposition matched the call. Record the sample size and the queue mix. A small structured sample is more useful than an occasional listen.",
      "Score the notice for clarity as well as presence. A specialist who reads the words too fast or skips the pause has not delivered the notice in practice. Record one good example and one correction. Use the examples in the next team huddle.",
      "Keep recordings and transcripts only as long as the client's retention rule allows. Restrict access to the named reviewers and log who listened. Delete or archive on schedule and record the action. A recording policy without retention discipline creates a new risk.",
      "Review the consent rule whenever the client changes its phone system, recording tool, or customer regions. Record the change and retrain the affected shifts. Update the quality sample to test the new wording. The reminder should live in the work, not in a policy folder nobody opens.",
    ],
    "takeaways": [
      "Decide who records, where notice appears, and which calls are exempt.",
      "Put the notice in the first ten seconds of the call script.",
      "Give the specialist a calm script for a refusal.",
      "Audit a small call sample for notice and disposition.",
    ],
    "faqs": [
      {
        "q": "Can the desk keep taking the call if the customer refuses recording?",
        "a": "Follow the client's written policy and the law that applies to the call. The specialist should offer the approved alternative, such as a callback without recording, rather than improvise."
      },
      {
        "q": "Should the notice be read on every call?",
        "a": "Read it whenever the client's policy or applicable law requires notice. Keep the same wording at the start of the call so the customer hears a consistent statement."
      },
    ],
    "sources": [
      {
        "name": "Federal Communications Commission, Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/consumers/guides/telephone-consumer-protection-act-1991",
        "note": "Consumer context for telephone rules and recorded calls."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for delegated phone support."
      },
      {
        "name": "Plain Language Action and Information Network, guidelines",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "note": "Practical rules for a short spoken notice."
      },
    ],
    "related": ["set-a-client-approved-tone-guide-for-a-delegated-inbox", "build-a-password-reset-request-record-for-a-delegated-service-desk", "set-an-access-review-cadence-for-contractor-accounts-on-client-systems"]
  },
  {
    "slug": "set-a-thirty-day-quality-gate-for-a-new-outsourced-specialist",
    "title": "Set a thirty-day quality gate for a new outsourced specialist",
    "excerpt": "A thirty-day gate uses a small set of real work samples to decide whether a new specialist continues, needs coaching, or should stop.",
    "minutes": 7,
    "publicationDate": "2026-11-21",
    "publishedAt": "2026-11-21",
    "image": "/daily21/outsourcedlabor/set-a-thirty-day-quality-gate-for-a-new-outsourced-specialist.png",
    "body": [
      "## Define the gate before day one",
      "Write the gate as a short list of evidence the reviewer will examine on day thirty. Include the work types, the sample size, the quality dimensions, and the decision options. Give the specialist the list on the first day. A gate revealed at the end of the month is a surprise, not a standard.",
      "Choose three or four dimensions that matter for the lane, such as accuracy, completeness, timeliness, and escalation judgment. Define each one with an example of pass and an example of needs coaching. Avoid a single overall score that hides which dimension failed. The dimensions should match the work the client actually reviews.",
      "Set the sample size and how it will be drawn. A random sample from the specialist's completed work is better than a set of cases chosen by the specialist. Record the queue, the date range, and the reviewer. The sample should be large enough to show a pattern and small enough to review carefully.",
      "Decide who will review and how the specialist can respond. Name the client owner, the provider lead, and the specialist in the gate record. Give the specialist a chance to explain a case before the decision. A gate that feels like a tribunal produces defensiveness instead of learning.",
      "## Build a week-one baseline",
      "Review a small set of early work in the first week and record what the specialist already does well. Do not wait for day thirty to name a problem that a short correction could fix. Record the coaching and the date. The early review protects the client and gives the specialist a fair chance.",
      "Check whether the specialist can find the source of truth for each task. A quality miss in week one is often a missing link or an unclear instruction. Record the source used and the question asked. Fix the instruction before treating the miss as a skill gap.",
      "Ask the specialist to write a short note about what is still unclear. Review the note with the provider lead and update the onboarding guide. Record the changes and the date. The first month should improve the instructions as well as the person.",
      "Set a mid-point check around day fourteen. Use the same dimensions as the final gate so the specialist sees progress against a stable standard. Record the scores and one coaching action. The mid-point is a correction opportunity, not an early verdict.",
      "## Run the day-thirty review",
      "Draw the agreed sample and score each dimension against the written definitions. Keep a short note for every case that fails, including the evidence and the expected result. Do not score from memory or from the latest mistake. The record should let another reviewer reach the same conclusion.",
      "Compare the sample with the week-one baseline and the mid-point check. Look for improvement, stability, or decline in each dimension. Record the direction rather than only the final number. A specialist who improved from a low start may deserve a different decision from one who declined from a high start.",
      "Separate a skill gap from an instruction gap before deciding. If several cases fail on the same missing field, the guide or the source may be wrong. Record the cause and the owner. A gate that blames the specialist for a broken process will not improve the work.",
      "Hold one review conversation with the evidence in front of everyone. State what passed, what did not, and what the next step will be. Record the decision and the date. Avoid vague language such as needs improvement without a specific action.",
      "## Choose one of three outcomes",
      "Use a small set of outcomes: continue, continue with a focused coaching plan, or stop the assignment. Define what each outcome means for access, schedule, and review frequency. Record the outcome in the gate note. A clear decision is kinder than an indefinite probation.",
      "For a continue decision, set the next review date and the dimensions to watch. Do not remove all review on day thirty just because the gate passed. Record the reduced sample and the owner. The review should taper with evidence, not with relief.",
      "For a coaching plan, name the one or two behaviors to change and the support the specialist will receive. Set a short review interval and a clear pass condition. Record the plan and the date. A plan with five priorities is usually a plan with none.",
      "For a stop decision, follow the client's and provider's written process for access removal and handover. Record the last day, the access changes, and the open work. Keep the tone factual and private. The same evidence that supported the decision should support a fair exit.",
    ],
    "takeaways": [
      "Define the gate before the first day of work.",
      "Use real samples and a small number of scored dimensions.",
      "Separate a skill gap from a missing instruction.",
      "Record one decision and one next review date.",
    ],
    "faqs": [
      {
        "q": "Is thirty days enough to judge a new specialist?",
        "a": "It is enough to judge a bounded lane with clear samples. It is not enough to judge every future task. Treat the gate as a decision about the current scope and review it again after the scope changes."
      },
      {
        "q": "Who should make the gate decision?",
        "a": "The client owner and the provider lead should decide together using the same evidence. The specialist should see the evidence and the specific next step before the decision is final."
      },
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for hiring and managing recurring work."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Occupational context for delegated support roles."
      },
      {
        "name": "Plain Language Action and Information Network, guidelines",
        "url": "https://www.plainlanguage.gov/guidelines/",
        "note": "Practical rules for clear written feedback."
      },
    ],
    "related": ["set-an-access-review-cadence-for-contractor-accounts-on-client-systems", "set-a-client-approved-tone-guide-for-a-delegated-inbox", "create-an-end-of-day-handover-note-for-a-philippines-support-team"]
  },
];

type Nov21BlogSection = { heading: string; paragraphs: string[] };

const nov21Sections = (body: string[]): Nov21BlogSection[] => {
  const sections: Nov21BlogSection[] = [];
  for (const line of body) {
    if (line.startsWith("## ")) {
      sections.push({ heading: line.slice(3), paragraphs: [] });
    } else if (sections.length) {
      sections[sections.length - 1].paragraphs.push(line);
    }
  }
  return sections;
};

export const november21BlogDetails: Record<string, {
  updated: string;
  published: string;
  takeaways: string[];
  sections: Nov21BlogSection[];
  faqs: { q: string; a: string }[];
  sources: { name: string; url: string; note: string }[];
  related: string[];
}> = Object.fromEntries(
  november21BlogPosts.map((post) => [post.slug, {
    updated: "2026-11-21",
    published: "2026-11-21",
    takeaways: post.takeaways,
    sections: nov21Sections(post.body),
    faqs: post.faqs,
    sources: post.sources,
    related: post.related
  }])
);
