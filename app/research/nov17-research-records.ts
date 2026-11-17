export const november17ResearchRecords = [
  {
    "slug": "how-often-do-delegated-mailbox-permissions-outlive-a-client-contact",
    "title": "How often do delegated mailbox permissions outlive a client contact?",
    "excerpt": "A protocol for measuring residual mailbox delegation after a client contact leaves, separating a stale grant from a legitimate role address.",
    "published": "2026-11-17",
    "image": "/daily17/outsourcedlabor/how-often-do-delegated-mailbox-permissions-outlive-a-client-contact.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a client contact's delegated mailbox access remains after the contact leaves. The unit is one mailbox-permission path tied to a named person who is no longer authorized. A path may be full access, send-as, send-on-behalf, calendar editing, or a forwarding rule. The measure describes the control around a departure, not the intent of the person who holds the access.",
      "Set the scope to one client, one mail platform, and a departure window. Record the date the contact left, the mailboxes involved, and the administrator who can read the permission list. If the platform or the client's mail policy changes during the period, split the sample at that date. A different permission model creates a different denominator.",
      "Keep the measure separate from a security incident count. A residual permission is a control failure even when no message was read. The purpose is to find where the departure process leaks. A neutral framing helps the client share the admin record without treating the audit as an accusation.",
      "## Population and unit of analysis",
      "Define the population as every mailbox that the departed contact could access or act for on the day before departure. Include personal mailboxes, shared inboxes, role addresses, and distribution groups. The unit is the permission path, not the mailbox. One mailbox may carry four paths, and each should be judged separately.",
      "Include paths that were intentionally retained for a defined business reason. Report them as approved retention with the owner and the end date. Exclude a path with no recorded approval from that group. The two categories describe different levels of risk.",
      "Exclude mailboxes that never had a delegated permission for the contact. Report the total number of mailboxes reviewed so the reader can see the base. A rate built only from the mailboxes that had access will overstate the problem across the client estate. State the exclusion count beside the denominator.",
      "## Definitions that make the measure reproducible",
      "Define a departure as the last authorized working day recorded by the client. Define a residual path as one that still resolves to the departed person after that day. A path that was reassigned to a new named person is not residual. Publish one example of each outcome before the sample begins.",
      "Define an approved retention as a written decision by the mailbox owner that names the reason and an end date. A verbal request is not enough. A role mailbox that no longer belongs to any individual is reviewed separately. The classification should be reproducible by two reviewers.",
      "Decide how to treat a forwarding rule that points to an alias rather than a personal address. Trace the alias to its current members before classifying it. An alias that still includes the departed person is residual. Record the trace method with the result.",
      "## Sampling and data collection",
      "Draw the sample from the mail administration export for the full period rather than from a list of known removals. Record the export date, the filters, and the row count. Include every mailbox type that the client authorized for review. A sample built from removed entries cannot measure what remains.",
      "Capture the mailbox, the path type, the grant date, the last authorized day, the current holder, the approval reference, and the review date. Add the admin console screenshot reference where the platform supports it. Store the export with the report. The permission list and the departure date are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a path is residual, the definition of reassignment is too vague. Rewrite the rule and retest before the full sample. Agreement matters more than sample size for a measure that will be reused.",
      "Record the time taken to collect the admin export. A report that requires a full day of manual work will not be repeated. Note the platform fields that were missing. The collection cost belongs beside the result.",
      "## Measuring residual delegation",
      "Report the share of permission paths that remained after departure, the share retained with written approval, and the share removed before the first review. Show the counts behind each share. The three groups describe different controls and should not be collapsed into one rate. A single residual figure hides the difference between an approved exception and a missed removal.",
      "Break the result down by path type and mailbox type. Send-as may be removed faster than calendar delegation because it is more visible. A role mailbox may show a different pattern from a personal inbox. Compare only groups with similar volume and review practice.",
      "Report the age of each residual path in days after departure. A path found at day three is different from one found at day ninety. Include the review date and the client's stated review cadence. The delay distribution shows whether the problem sits in the departure event or in a later audit.",
      "## Limitations and next action",
      "The measure cannot show whether a residual path was used to read or send mail. It also cannot show a path that was removed and later restored without a record. Treat the result as a measure of permission state, not of data exposure. Note the platforms and mailbox types that were not included.",
      "Give the result to the client owner and the service manager with one change to test. The change might be a same-day removal step, a departure checklist item, or a weekly permission export. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before widening the rule. A few role mailboxes with approved retention may explain a large share of residual paths. Fix the classification first if that is the pattern. The goal is a clean permission state, not a lower number by definition."
    ],
    "takeaways": [
      "Measure the mailbox, not the number of removed names.",
      "Separate personal addresses from role mailboxes before comparing results.",
      "Test full access, send-as, calendar delegation, and forwarding as different paths.",
      "Report client-approved retention separately from unapproved residual access."
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
      "research-outsourced-labor-offboarding-access-residuals",
      "research-outsourced-access-removal-lag"
    ],
    "cta": "Review a mailbox delegation audit before the next client departure."
  },
  {
    "slug": "what-share-of-courier-pickups-miss-the-booked-cut-off",
    "title": "What share of courier pickups miss the booked cut-off?",
    "excerpt": "A measurement protocol that separates a late booking from a carrier failure and reports missed courier pickups against the published cut-off.",
    "published": "2026-11-17",
    "image": "/daily17/outsourcedlabor/what-share-of-courier-pickups-miss-the-booked-cut-off.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a courier pickup misses the booked cut-off. The unit is one pickup request that was assigned to a carrier for a specific day. A miss means the carrier did not collect the parcel within the confirmed window. The measure describes the dispatch promise and the carrier route, not the effort of the desk.",
      "Set the scope to one warehouse, one carrier set, and a fixed period. Record the staffed hours, the service levels, and the time zone used for the cut-off. If the carrier changes a route during the period, split the sample at the change date. A different route creates a different expectation.",
      "Keep the measure separate from a customer delivery score. A pickup can be on time and the delivery late, or the reverse. The purpose is to test the collection promise. Report the two measures separately so neither hides the other.",
      "## Population and unit of analysis",
      "Define the population as every pickup request that entered the dispatch queue during the period. Include requests that were collected and requests that were missed. The unit is the request, not the parcel line. A single pickup with six parcels is one collection event.",
      "Include requests that were cancelled before the carrier arrived, and report them separately from misses. A cancellation is not a carrier failure. Exclude requests that were never booked with a carrier. The boundary should be visible in the report.",
      "Include requests that were booked after the cut-off and still collected. Mark them as late bookings but not misses. The distinction shows whether the desk recovered a late request. A rate that ignores late bookings will overstate the carrier's performance.",
      "## Definitions that make the measure reproducible",
      "Define the cut-off as the time confirmed in writing for that carrier and service level. Define the pickup window as the period the carrier promised for arrival. Define a miss as no collection before the end of that window. Publish one example of an on-time and a missed pickup.",
      "Define a late booking as a carrier confirmation recorded after the cut-off. Define an intake miss as a request that arrived after the desk's internal release time. The two are related but not identical. Record both timestamps so a reviewer can classify the case.",
      "Decide how to treat a partial collection where some parcels were taken and others were left. Mark it as partial with the count collected and the reason. Do not count it as a full miss or a full success. The detail explains a customer promise that may still be at risk.",
      "## Sampling and data collection",
      "Draw the sample from the dispatch queue and the carrier confirmation export for the full period. Record the export date, the filters, and the row count. Do not build the sample from missed-pickup emails alone. A sample built from complaints cannot produce a rate.",
      "Capture the request identifier, the arrival time, the booking time, the carrier, the route, the confirmed window, the collection time, and the outcome. Add the customer promise and the order value where available. Store the export with the report. The timestamps are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a collection was inside the window, the window definition is too vague. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent reconciling the carrier portal with the queue. A report that requires manual matching for every row will not be repeated. Note the fields that the carrier does not expose. The collection cost belongs beside the result.",
      "## Measuring missed pickups",
      "Report the share of requests collected inside the window, the share collected late, and the share not collected. Show the counts behind each share. The three groups describe different failures and should not be collapsed into one rate. A single miss rate hides whether the problem is timing or collection.",
      "Break the result down by carrier, route, day of week, and hour of booking. A single route with repeated misses may need a different cut-off. A carrier with failures across routes may need a service review. Compare only groups with similar volume and service level.",
      "Report the median and longest delay for late collections. A pickup missed by twenty minutes is different from one missed by a day. The delay distribution shows whether the problem sits at the boundary or earlier in the route. Include the confirmed window in the report.",
      "## Limitations and next action",
      "The measure cannot show a customer who arranged a private courier or a parcel that was handed over outside the booking. It also cannot show whether the carrier's scan was accurate. Treat the result as a measure of the dispatch promise. Note the routes and service levels that were not included.",
      "Give the result to the dispatch owner and the carrier contact with one change to test. The change might be an earlier release time, a different route, or a revised booking form. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before changing the whole cut-off. A few requests received in the last minutes may explain a large share of the misses. Fix the intake rule first if that is the pattern. The goal is a promise the desk can keep, not a lower number by definition."
    ],
    "takeaways": [
      "Count the pickup request, not each carrier scan.",
      "Separate an intake miss from a carrier miss with the booking timestamp.",
      "Report the missed pickup rate per hundred booked pickups.",
      "Test one release-time or carrier change before adjusting the promise."
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
      "research-philippines-order-delay-decision-boundary",
      "philippines-vendor-promised-date-variance"
    ],
    "cta": "Measure pickup misses before changing a dispatch cut-off."
  },
  {
    "slug": "how-often-do-support-inbox-attachments-arrive-without-a-safe-handling-check",
    "title": "How often do support inbox attachments arrive without a safe-handling check?",
    "excerpt": "A protocol for sampling support attachments, classifying the handling risk, and measuring how often a safe-handling decision is missing from the ticket.",
    "published": "2026-11-17",
    "image": "/daily17/outsourcedlabor/how-often-do-support-inbox-attachments-arrive-without-a-safe-handling-check.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often an attachment reaches a delegated support inbox without a recorded safe-handling decision. The unit is one attachment-ticket pair. A missing decision means the ticket does not show whether the file was classified, opened in an approved tool, or routed to a specialist. The measure describes the intake control, not the intent of the specialist.",
      "Set the scope to one support queue, one case system, and a fixed period. Record the attachment types the queue accepts and the handling rule in force. If the rule changes during the period, split the sample at the effective date. A different rule creates a different denominator.",
      "Keep the measure separate from an incident count. A file can be handled correctly without becoming an incident. The purpose is to find where the record is silent. A neutral framing helps the team report the gaps without fear of blame.",
      "## Population and unit of analysis",
      "Define the population as every ticket in the period that carried at least one attachment. The unit is one attachment-ticket pair, not each file inside an archive. A ticket with three separate documents is three units only when the system records them separately. State the rule before sampling.",
      "Include tickets that were closed without opening the file, and mark them as held or routed. Include tickets where the attachment was deleted after review. The unit still exists if the ticket records the decision. Exclude tickets with no attachment evidence at all.",
      "Exclude internal files created by the support team, such as saved replies or screenshots of the case system. The measure is about files arriving from outside the team. Keep the boundary visible in the report. State the exclusion count with the denominator.",
      "## Definitions that make the measure reproducible",
      "Define a handling decision as a recorded classification plus a recorded action. The classification may be routine, sensitive, unexpected, or blocked. The action may be open in viewer, store with case, route to specialist, or quarantine. Publish one example of each.",
      "Define a missing decision as a ticket with an attachment and no recorded classification or action. A note that says reviewed without naming the action is not a complete decision. A decision that was made in a chat outside the case system is also missing from the record. The case record is the unit of evidence for the main rate.",
      "Define a risky attachment as a type or sender pattern listed in the handling rule. The list may include archives, executables, password-protected files, and unsolicited payment instructions. Use the rule in force on the ticket date. Do not apply a later rule retroactively.",
      "## Sampling and data collection",
      "Draw the sample from the case system for the full period rather than from security reports. Record the export date, the filters, and the row count. Include every channel that feeds the queue. A sample built from reported incidents cannot produce a handling rate.",
      "Capture the ticket identifier, the received time, the sender type, the file type, the classification, the action, the reviewer, and the close time. Add the storage location and any routing reference. Store the export with the report. The classification and action fields are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether the decision is complete, the definition of action is too vague. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent matching attachments to tickets. A report that requires opening every file will not be repeated. Note the fields the case system does not capture. The collection cost belongs beside the result.",
      "## Measuring missing safe-handling decisions",
      "Report the share of attachment-ticket pairs with a complete decision, the share with a partial decision, and the share with no decision. Show the counts behind each share. The three groups describe different levels of control and should not be collapsed into one rate. A partial decision is not the same as an open file.",
      "Break the result down by file type, sender type, and queue. Archives may be handled differently from invoices. An unknown sender may trigger a check that a known customer does not. Compare only groups with similar volume and risk.",
      "Report the share of risky attachments that reached a ticket without a stop or route. Include the disposition of each one. A risky file that was opened in the approved viewer is different from one that was downloaded. The disposition shows where the rule actually holds.",
      "## Limitations and next action",
      "The measure cannot show whether a file was malicious or whether a specialist opened it outside the approved tool. It also cannot show a decision made verbally and never recorded. Treat the result as a measure of the case record. Note the channels and file types that were not included.",
      "Give the result to the support lead and the security owner with one change to test. The change might be a required classification field, a safer intake form, or a weekly sample. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before changing the whole rule. A few senders with repeated archive files may explain a large share of the gaps. Fix the sender path first if that is the pattern. The goal is a record that shows the decision, not a lower number by definition."
    ],
    "takeaways": [
      "Sample attachments from the case queue, not from reported incidents.",
      "Classify by consequence and verify whether a handling decision was recorded.",
      "Separate a missing decision from a decision that was made and documented.",
      "Report risky file types and sender patterns before changing the intake form."
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
      "research-outsourced-safe-stop-consistency",
      "research-outsourced-labor-export-minimization"
    ],
    "cta": "Measure attachment handling before widening a delegated inbox."
  },
  {
    "slug": "what-share-of-replacement-orders-lack-a-recorded-reason",
    "title": "What share of replacement orders lack a recorded reason?",
    "excerpt": "A protocol for measuring replacement orders without a documented failure reason, approval owner, or customer evidence.",
    "published": "2026-11-17",
    "image": "/daily17/outsourcedlabor/what-share-of-replacement-orders-lack-a-recorded-reason.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a replacement order is created without a recorded reason. The unit is one replacement order linked to one original order. A missing reason means the order record does not state the failure, the customer evidence, or the approval that justified the shipment. The measure describes the evidence around a remedy, not the honesty of the customer.",
      "Set the scope to one store, one order system, and a fixed period. Record the replacement policy, the value limit, and the approval roles in force. If the policy changes during the period, split the sample at the effective date. A different limit creates a different population.",
      "Keep the measure separate from a return or refund rate. A replacement can be appropriate even when returns are low. The purpose is to test whether the order record explains the decision. Report the three remedy rates separately.",
      "## Population and unit of analysis",
      "Define the population as every replacement order created in the period. Include orders created by the desk, by a supervisor, and by an automated rule. The unit is the replacement order, not the support ticket. One ticket may create two replacement orders, and each should be judged separately.",
      "Include replacements that were later cancelled before shipment, and mark the cancellation reason. Exclude exchanges that were processed as a return and a new purchase. The two paths have different records. Keep the boundary visible in the report.",
      "Exclude replacements for internal stock adjustments that never touched a customer. The measure is about customer-facing remedies. State the exclusion count so the reader can see the base. A stock correction is a different record and should not dilute the rate.",
      "## Definitions that make the measure reproducible",
      "Define a recorded reason as a stated failure category plus the evidence used. The category may be damaged, wrong item, missing, or not as described. The evidence may be a photo, a carrier record, or a customer statement. Publish one example of a complete and an incomplete reason.",
      "Define an approval as a named person and a time, not a status label. A note that says approved by ops is incomplete unless the person can be identified. A replacement within the desk limit still needs the desk's name. The rule should match the policy in force.",
      "Decide how to treat a reason recorded in a chat but not in the order. Classify it as missing from the order record and note where it exists. Do not merge the two sources for the main rate. A separate reconciliation can show the size of the gap.",
      "## Sampling and data collection",
      "Draw the sample from the order system for the full period, not from the support queue. Record the export date, the filters, and the row count. Include every sales channel that can create a replacement. A sample built from escalated cases will overstate the problem.",
      "Capture the replacement order, the original order, the failure category, the evidence type, the approver, the value, the ship date, and the close date. Add the support ticket reference where one exists. Store the export with the report. The reason and approver fields are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a reason is complete, the category list is too broad. Rewrite the definitions and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent matching replacement orders to tickets. A report that requires reading every thread will not be repeated. Note the fields the order system does not capture. The collection cost belongs beside the result.",
      "## Measuring missing replacement reasons",
      "Report the share of replacement orders with a complete reason, the share with a partial reason, and the share with no reason. Show the counts behind each share. The three groups describe different evidence gaps and should not be collapsed into one rate. A partial reason still leaves the reviewer guessing.",
      "Break the result down by product, failure category, channel, and approver group. A product with many missing reasons may need a better intake form. A channel with a high share may need a different evidence request. Compare only groups with similar volume and policy.",
      "Report the share of replacements above the desk limit that lack a named owner. A high-value shipment without an approver is a control failure even when the reason is clear. Keep the value band beside the result. The two measures answer different questions.",
      "## Limitations and next action",
      "The measure cannot show whether a replacement was justified or whether the customer told the truth. It also cannot show a reason that exists only in a phone call. Treat the result as a measure of the order record. Note the channels and systems that were not included.",
      "Give the result to the support lead and the finance owner with one change to test. The change might be a required reason field, a photo prompt, or a weekly sample. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before changing the policy. A few product lines with a shared failure may explain a large share of the missing reasons. Fix the intake or the product record first if that is the pattern. The goal is a record a reviewer can follow, not a lower number by definition."
    ],
    "takeaways": [
      "Count the replacement order, not the support ticket.",
      "Separate a missing reason from a reason recorded outside the order.",
      "Report the share by product, channel, and approval owner.",
      "Fix the note template before changing the replacement policy."
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
      "research-philippines-order-refund-exception-packet",
      "research-outsourced-work-acceptance"
    ],
    "cta": "Audit replacement-order evidence before changing a support policy."
  },
  {
    "slug": "how-often-do-executive-calendar-holds-expire-without-a-booking",
    "title": "How often do executive calendar holds expire without a booking?",
    "excerpt": "A protocol for measuring temporary calendar holds that expire without conversion, separating a healthy release from a slot lost to indecision.",
    "published": "2026-11-17",
    "image": "/daily17/outsourcedlabor/how-often-do-executive-calendar-holds-expire-without-a-booking.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a temporary executive calendar hold expires without becoming a booking. The unit is one hold event on one executive calendar. An expired hold means the expiry time passed and the event was neither confirmed nor renewed. The measure describes the scheduling control, not the importance of the meeting.",
      "Set the scope to one executive, one calendar system, and a fixed period. Record the meeting types, the expiry rule, and the assistant coverage hours. If the rule changes during the period, split the sample at the effective date. A different expiry creates a different expectation.",
      "Keep the measure separate from a calendar utilization score. A released hold can be the correct outcome when a meeting is no longer needed. The purpose is to find holds that expired without a decision. Report the reason where the record allows it.",
      "## Population and unit of analysis",
      "Define the population as every event labelled as a temporary hold during the period. Include holds created by the executive, the assistant, and external requesters. The unit is the hold event, not the requester. One requester may create several holds for different dates.",
      "Include holds that were converted to a booking, released before expiry, renewed with a new deadline, and expired. Report each outcome separately. Exclude confirmed meetings that were never marked as holds. The boundary should be visible in the report.",
      "Exclude personal reminders and focus blocks that were not requested by another party. The measure is about a reservation made for a decision. State the exclusion count with the result. A focus block is not a hold for another person.",
      "## Definitions that make the measure reproducible",
      "Define a hold as an event with an explicit temporary label and an owner who can confirm it. Define the expiry as the time recorded in the event or the rule. Define a conversion as a confirmed meeting with the required detail present. Publish one example of each outcome.",
      "Define a release as removal before expiry with a recorded reason. Define an expiry without booking as the end of the hold period with no confirmation. A hold that is renewed is counted once per renewal period. The rule should prevent the same slot from being counted twice.",
      "Decide how to treat a hold that was replaced by a new hold for the same meeting at a different time. Link the two events and classify the outcome once. Record the link method. A move is not automatically a loss.",
      "## Sampling and data collection",
      "Draw the sample from the calendar export for the full period rather than from the assistant's task list. Record the export date, the filters, and the row count. Include holds on shared calendars that the executive can see. A sample built from released holds alone cannot produce a rate.",
      "Capture the hold identifier, the requester, the meeting type, the created time, the expiry, the outcome, the confirmed time, and the owner. Add the event notes that explain the decision. Store the export with the report. The timestamps and the outcome are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a hold expired or was renewed, the renewal rule is too vague. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent reconciling calendar events with request threads. A report that requires reading every email will not be repeated. Note the fields the calendar does not capture. The collection cost belongs beside the result.",
      "## Measuring expired holds",
      "Report the share of holds converted, released with a reason, renewed, and expired without a decision. Show the counts behind each share. The four groups describe different outcomes and should not be collapsed into one rate. A release can be a healthy outcome, while an expiry without a decision is a gap.",
      "Break the result down by meeting type, requester group, and day of week. A type with many expiries may need a longer hold. A requester group with many expiries may need a clearer confirmation step. Compare only groups with similar volume and decision complexity.",
      "Report the executive hours blocked by holds that expired without a decision. Multiply the event duration by the number of expired holds and show the total. Include the share of the executive's working hours that the block represents. The time measure shows the cost that a count alone hides.",
      "## Limitations and next action",
      "The measure cannot show whether an expired hold was useful as protection or whether the executive was relieved to lose it. It also cannot show a decision made in a hallway and never recorded. Treat the result as a measure of the calendar record. Note the meeting types that were not included.",
      "Give the result to the executive and the scheduling owner with one change to test. The change might be a shorter expiry, a required confirmation field, or a twice-daily hold check. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before shortening every hold. A few meeting types with long dependencies may explain a large share of the expiries. Fix the dependency or the confirmation path first if that is the pattern. The goal is a calendar that reflects real commitments, not a lower hold count by definition."
    ],
    "takeaways": [
      "Count the temporary hold, not the calendar event.",
      "Separate an expected release from a hold that expired without a decision.",
      "Report blocked executive hours and the conversion rate together.",
      "Review expiry rules by meeting type before shortening every hold."
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
      "research-outsourced-approval-waiting-time",
      "research-outsourced-manager-decision-latency"
    ],
    "cta": "Measure calendar-hold loss before changing an executive scheduling rule."
  }
] as const;
