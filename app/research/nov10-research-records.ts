export const november10ResearchRecords = [
  {
    "slug": "how-often-do-invoices-fail-a-duplicate-payment-check",
    "title": "How often do invoices fail a duplicate-payment check?",
    "excerpt": "A protocol for measuring duplicate-check holds, separating true duplicates from recurring bills, and tracing each hold to the record that caused it.",
    "published": "2026-11-10",
    "image": "/daily10/outsourcedlabor/how-often-do-invoices-fail-a-duplicate-payment-check.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often an invoice or payment request fails a duplicate-payment check. The unit is one candidate payment that enters the check during the observation period. A failure means the check placed the payment on hold for a possible duplicate. The measure describes the check and the records, not the honesty of any vendor or specialist.",
      "Set the scope to one accounts queue, one payment system, and a fixed period. Record the matching rules, the review window, and the statuses used at the time. If the rules change during the period, split the sample at the change date. A new rule can change the failure rate without changing the underlying records.",
      "Keep the measure separate from a fraud investigation. A duplicate hold may come from a data error, a reissued invoice, or a genuine second charge. The purpose is to find where the records allow a duplicate to enter. State that purpose in the report.",
      "## Population and unit of analysis",
      "Define the population as every candidate payment that entered the check, including payments that cleared without a hold. The unit is the candidate payment, not the invoice document. One invoice can generate a correction and a second candidate, and each candidate should be counted. A hold rate without the cleared payments has no denominator.",
      "Include payments that were held and later released as valid. A release is part of the check's result because it shows a false positive or a legitimate second charge. Count the reason for the release. Excluding releases would overstate the accuracy of the rule.",
      "Exclude payments that never reached the check because they were rejected at intake. Report those separately as an intake failure. The duplicate check cannot catch a record it never sees. Keeping the two stages apart makes the result easier to interpret.",
      "## Definitions that make the measure reproducible",
      "Define a hold as a candidate payment that the check prevents from entering the scheduled batch. Define a true duplicate as a second payment for the same obligation and period. Define a recurring bill as a separate obligation that happens to share an amount or a description. Publish one example of each.",
      "Define a release as a held payment that an authorized reviewer allows to proceed. Record the reviewer, the evidence, and the date. A release without evidence is a control gap rather than a valid result. The definition should make that distinction clear.",
      "Set the review window before reading the sample. Use the same window for every vendor unless the vendor has a documented billing cycle. Record the window with the result. A short window will miss late duplicates and a long window will produce more false positives.",
      "Decide whether a credit note or a reissued invoice counts as a duplicate attempt. A reissue may be legitimate when the original was voided. Record the status of the original before classifying the candidate. A clear rule prevents the same case from being counted differently by two reviewers.",
      "## Sampling and data collection",
      "Draw the sample from the payment system rather than from a list of known problems. Record the export date, the filters, and the row count. Include every vendor and every payment method in the period. A sample built from holds alone cannot produce a failure rate.",
      "Capture the candidate identifier, the vendor identifier, the invoice number, the amount, the period, the bank record, and the hold status. Add the original payment that triggered the match. Store the evidence with the record. A count without the matched records cannot be audited.",
      "Check a small overlap sample with a second reviewer. If the two reviewers disagree about whether a payment is a true duplicate, the definition is too vague. Rewrite the definition and retest before the full sample. Agreement matters more than sample size for a rule that will be reused.",
      "Record the time from hold to release or cancellation. A hold that is resolved after the payment cutoff has no effect on that run. Report the timing with the result. The rate alone does not show whether the check changed the outcome.",
      "## Measuring duplicate-check failures",
      "Report the share of candidate payments that were held, the share that were true duplicates, and the share that were released as valid. Show the counts behind each share. A high hold rate with few true duplicates may mean the rule is too broad. A low hold rate with a known duplicate may mean the rule is too narrow.",
      "Break the result down by cause, such as same invoice number, same amount and period, changed bank account, or vendor reissue. A cause that appears often points to a specific fix. Keep the list short and stable across the comparison period. Add a short note to each cause so a new reviewer can classify the next case.",
      "Report the vendors with more than one hold and the oldest unresolved hold. A repeated vendor may need a cleaner invoice process rather than a stricter check. The oldest hold may show a decision that no one owns. Both examples make the aggregate result actionable.",
      "## Limitations and next action",
      "The measure cannot show duplicates that were paid without entering the check or that were caught by the bank after release. It also cannot show a duplicate that the vendor never reported. Treat the result as a measure of the check, not of all payment risk. Note the systems that were not included.",
      "Give the result to the accounts owner and the payment approver with one rule to test. The change might be a required invoice-period field, a tighter bank-change review, or a shorter matching window. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the holds after the change and confirm that the true duplicates still appear. A rule that reduces false positives by missing real duplicates is not an improvement. Look at both sides before keeping the change. The goal is a check that the team can trust and use."
    ],
    "takeaways": [
      "Count the candidate payment, not the invoice file.",
      "Separate a true duplicate from a recurring bill.",
      "Report holds by cause and by vendor.",
      "Treat a cleared hold as a result, not a failure."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, bookkeeping, accounting, and auditing clerks",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm"
      },
      {
        "name": "Internal Revenue Service, About Form W-9",
        "url": "https://www.irs.gov/forms-pubs/about-form-w-9"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "build-a-duplicate-payment-check-for-a-delegated-accounts-queue",
      "how-many-approvals-does-a-delegated-invoice-queue-really-need"
    ],
    "cta": "Measure one payment batch before changing the matching rule."
  },
  {
    "slug": "what-share-of-delegated-tasks-miss-the-same-day-cutoff",
    "title": "What share of delegated tasks miss the same-day cutoff?",
    "excerpt": "A protocol for measuring cutoff misses, separating a late input from a slow decision, and reporting the result without blaming the queue.",
    "published": "2026-11-10",
    "image": "/daily10/outsourcedlabor/what-share-of-delegated-tasks-miss-the-same-day-cutoff.png",
    "body": [
      "## Research question and scope",
      "This protocol measures the share of delegated work items that miss a published same-day cutoff. The unit is one work item that was expected to finish before the cutoff. A miss means the item was not complete at the cutoff time, even if it finished later that day. The measure describes the promise and the queue, not the effort of the specialist.",
      "Set the scope to one desk, one client promise, and one time zone. Record the cutoff, the work types covered, and the handoff point that defines completion. If the promise changes during the period, split the sample at the change date. A different promise creates a different denominator.",
      "Keep the measure separate from a performance rating. A miss may come from a late request, an approval delay, or a capacity shortfall. The purpose is to find where the promise breaks. A neutral framing makes the team more willing to report the real cause.",
      "## Population and unit of analysis",
      "Define the population as every work item that carried a same-day promise during the period. The unit is the item, not the message or the customer. One customer may send several messages about one item, and each message should not count as a separate miss. Use the record identifier to group them.",
      "Include items that were completed after the cutoff and items that were still open at the end of the day. Exclude items that were cancelled by the requester before the cutoff. Report cancellations separately because they change the denominator. A cancelled item is not a late item.",
      "Include items that were reassigned during the day. A reassignment does not remove the promise, and the item still counts. Record the owner at the cutoff and the owner at completion. The handoff may be the cause of the miss, so the history matters.",
      "## Definitions that make the measure reproducible",
      "Define completion as the point when the result reaches the agreed handoff and meets the quality check. A draft that is waiting for review is not complete under this definition. Publish one example of a complete item and one example of an item that was finished but not accepted. The boundary should be the same for every reviewer.",
      "Define the cutoff with a date, a time, and a time zone. Convert the cutoff into the desk's local time and the client's local time in the report. A time without a zone is not a usable definition. Keep the conversion rule in the method so the result can be repeated.",
      "Define a late input as a request that arrived after the intake cutoff for the same-day window. Define a slow decision as an item that was ready but waited for an approval. Define a capacity miss as an item that had no available owner before the cutoff. Use these causes consistently.",
      "## Sampling and data collection",
      "Draw the sample from the queue export at the end of each day. Record the export time, the filters, and the row count. If the volume is large, select every item in a fixed set of days rather than the easiest items. A sample of only completed items cannot measure a miss.",
      "Capture the item identifier, the arrival time, the promised time, the completion time, the owner, the work type, and the blocking reason. Add the handoff time when the result left the desk. Store the export with the report. The timestamps are the core evidence.",
      "Check a small sample against the client-facing record. If the desk marked an item complete but the client did not receive it, the definition may be wrong. Record the discrepancy and correct the method before the full sample. A measure that stops at the desk can overstate on-time performance.",
      "Record the reason for each miss in the specialist's own words, then map it to one of the defined causes. Keep the original note for review. A coded cause without the note can hide a problem that does not fit the list. That note should stay short enough to read with the code.",
      "## Measuring cutoff misses",
      "Report the share of items completed by the cutoff, the share completed later the same day, and the share still open at the end of the day. Show the counts behind each share. The three groups describe different levels of failure and should not be collapsed into one rate. A rate that mixes them will hide the boundary problem.",
      "Break the result down by work type, owner group, and cause. A work type with a high miss rate may need a longer promise or a smaller scope. A cause concentrated in approvals points to a decision path rather than the queue. Compare only groups with similar volume and complexity.",
      "Report the median and oldest delay for the missed items. A miss of ten minutes is different from a miss of two days. The delay distribution shows whether the problem is at the boundary or earlier in the day. Include the cutoff time in the report so the reader can interpret it.",
      "## Limitations and next action",
      "The measure cannot show work that was promised verbally and never entered the queue. It also cannot show a client who did not check the result until the next day. Treat the result as a measure of the recorded promise. Note the channels and work types that were not included.",
      "Give the result to the desk owner and the client contact with one change to test. The change might be an earlier intake cutoff, a faster approval, or a different promise for one work type. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to evaluate than a broad push.",
      "Review the boundary cases before changing the whole promise. A few items that arrived in the last ten minutes may explain a large share of the misses. Fix the intake rule first if that is the pattern. The goal is a promise the desk can keep, not a lower number by definition."
    ],
    "takeaways": [
      "Define the cutoff from the client promise and time zone.",
      "Count the work item, not the message.",
      "Separate late input from slow decision and capacity.",
      "Report the misses by work type and cause."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm"
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "set-a-same-day-cutoff-for-a-philippines-operations-desk",
      "how-much-of-a-delegated-queue-waits-on-a-written-decision"
    ],
    "cta": "Measure one week of promised work before changing the cutoff."
  },
  {
    "slug": "how-long-does-a-correction-memo-take-to-close-a-quality-failure",
    "title": "How long does a correction memo take to close a quality failure?",
    "excerpt": "A protocol for measuring correction-memo cycle time from the failed check to the recheck, with causes that separate repair work from waiting.",
    "published": "2026-11-10",
    "image": "/daily10/outsourcedlabor/how-long-does-a-correction-memo-take-to-close-a-quality-failure.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how long a correction memo takes to close a quality failure. The clock starts when the failed check is recorded and stops when the recheck passes. The unit is one memo linked to one failed task. The measure describes the correction process, not the severity of the original error.",
      "Set the scope to one team, one review standard, and a fixed period of failed checks. Record the memo template, the repair owners, and the recheck method used at the time. If the template changes, split the sample at the change date. A new template can change both the speed and the quality of the closure.",
      "Keep the measure separate from a disciplinary process. A memo that is delayed because the repair needs a system change is different from one that is delayed because no owner was named. The purpose is to find where correction stalls. State that purpose in the report.",
      "## Population and unit of analysis",
      "Define the population as every failed check that required a correction memo during the period. The unit is the memo, not the message or the meeting. One failed task may generate one memo with several actions. Count the memo once and note the number of actions separately.",
      "Include memos that were reopened after a failed recheck. A reopened memo is still one case, but the reopening is part of the cycle time. Record the number of rechecks and the reason for each reopening. A memo that closes and reopens is not the same as a memo that closes once.",
      "Exclude a failed check that was corrected immediately before any customer impact and did not require a memo. Report those cases separately as same-shift corrections. The two paths have different evidence requirements. Mixing them would make the memo process look slower than it is.",
      "## Definitions that make the measure reproducible",
      "Define the start as the timestamp of the failed check in the review record. Define the end as the timestamp of the passed recheck, not the date the memo was filed. Define the repair as the change to the guide, form, system, or training material. Publish one example of each timestamp.",
      "Separate elapsed days from working days. A memo that spans a weekend may look slow in calendar days and normal in working days. Choose one calendar and use it for the whole sample. Report the choice with the result.",
      "Define waiting time as the period when the memo was blocked on an approval, a system change, or missing evidence. Define active time as the period when the repair owner was working on it. The two measures need different fixes. Use a short reason list to classify the waiting.",
      "## Sampling and data collection",
      "Draw the sample from the review ledger rather than from a list of memos that were easy to close. Include memos that are still open at the observation date. Record the export date and the filters. A sample of closed memos only will understate the cycle time.",
      "Capture the memo identifier, the failed check, the start and end timestamps, the repair owner, the recheck owner, the waiting reason, and the final status. Add the number of rechecks and the customer impact. Store the evidence with the record so the classification can be checked. The missing field is often the first clue about a stalled repair.",
      "Interview the repair owner for a small sample of long memos. Ask what the owner was waiting for and what would have shortened the wait. The answer may reveal an approval step that is not visible in the ledger. Record the answer beside the timestamp.",
      "Check whether the recheck used a case that would have failed under the old process. A recheck on an easy case does not prove the repair. Record the case type and the result. A closure without a valid recheck should be treated as open.",
      "## Measuring correction cycle time",
      "Report the median and the longest cycle time, the share of memos closed within the target, and the share still open at the observation date. Show the counts behind each share. A median alone can hide a long tail of blocked memos. The open share is part of the result.",
      "Break the result down by cause, repair owner group, and work type. A cause concentrated in system changes may need a different planning step. A work type with many rechecks may need a clearer standard. Compare groups with similar complexity and avoid ranking individuals.",
      "Report active time and waiting time beside the total. A team that repairs quickly but waits weeks for approval has a different problem from a team that works slowly. The split shows where to intervene. Use the same reason list for every memo in the sample.",
      "## Limitations and next action",
      "The measure cannot show the quality of the repair or whether the same error returned months later. It also cannot show the time spent on memos that were never recorded. Treat the result as a measure of the recorded correction path. Note the work that was corrected informally.",
      "Give the result to the review owner and the repair owners with one change to test. The change might be a named approval path, a standard recheck case, or a shorter memo template. Record the effective date and repeat the measure with the same definitions. A small change to the blocking step is often more useful than a broad reminder.",
      "Review the reopened memos separately and look for a repair that did not address the cause. A fast closure with a failed recheck is not a good result. The goal is a correction that holds, even when the memo takes a little longer to close. A repair that only shortens the memo is not a repair."
    ],
    "takeaways": [
      "Start the clock at the failed check, not the memo date.",
      "Separate repair time from waiting time.",
      "Count a memo closed only after the recheck passes.",
      "Compare causes, not only the average days."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, secretaries and administrative assistants",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm"
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "write-a-correction-memo-after-a-delegated-task-fails-review",
      "how-many-quality-samples-are-needed-before-expanding-a-lane"
    ],
    "cta": "Time ten correction memos before changing the review target."
  },
  {
    "slug": "what-share-of-after-hours-escalations-reach-the-named-contact",
    "title": "What share of after-hours escalations reach the named contact?",
    "excerpt": "A protocol for measuring after-hours escalation reach, separating a wrong number from an unanswered call and a contact without authority.",
    "published": "2026-11-10",
    "image": "/daily10/outsourcedlabor/what-share-of-after-hours-escalations-reach-the-named-contact.png",
    "body": [
      "## Research question and scope",
      "This protocol measures the share of after-hours escalations that reach the named contact. The unit is one escalation attempt for one incident. Reaching the contact means the named person or the named backup acknowledged the message and could make the first decision. A call that rings without an answer is not a reach.",
      "Set the scope to one support team, one after-hours window, and one escalation tree. Record the triggers, the contacts, and the channels used at the time. If the tree changes during the period, split the sample at the change date. A new contact or number can change the result.",
      "Keep the measure separate from a judgment about the incident. A serious incident can have a fast reach, and a minor one can fail. The purpose is to test the path, not to rank the people on it. State that purpose in the report.",
      "## Population and unit of analysis",
      "Define the population as every escalation attempt made during the after-hours window. The unit is the attempt, because one incident may require several calls before a decision owner is reached. Count each attempt and link it to the incident. A per-incident rate can be reported separately.",
      "Include attempts that were made to a backup after the first contact did not answer. Include attempts that used a different channel, such as a chat message or a call. Record the channel and the order. Excluding a failed attempt would overstate the reach.",
      "Exclude incidents that were resolved by the on-duty person without an escalation. Report them separately as self-resolved. They are part of the workload but not part of the reach measure. Keep the two groups distinct in the analysis.",
      "## Definitions that make the measure reproducible",
      "Define a reach as an acknowledgment from the named contact or backup within the response target. Define a no-answer as an attempt with no acknowledgment in the target. Define a wrong-contact as an attempt that reached a person without the authority to make the first decision. Publish one example of each.",
      "Define the response target before the sample. A target of ten minutes will produce a different result from a target of one hour. Record the target and the clock used. Use the same target for every contact in the comparison.",
      "Define the first decision as the action the contact is allowed to take under the tree, such as approving a rollback or calling the client. A contact who only listens is not a decision owner. The definition should match the tree, not an assumption about seniority. Record that permission in the tree so the role is not confused with the title.",
      "## Sampling and data collection",
      "Draw the sample from the incident log and the escalation channel. Record the export date, the filters, and the number of incidents. Include incidents that were closed quickly and incidents that were reopened. A sample of serious incidents only will not represent the path.",
      "Capture the incident identifier, the trigger, the attempt time, the channel, the contact, the acknowledgment time, the decision time, and the outcome. Add the reason if the contact was unavailable. Store the timestamps with the record. The sequence is the evidence.",
      "Check the contact list against the tree on the observation date. A number that is correct in the tree but wrong in the channel is a different finding. Record the version of the list used. A reach measure without the list version is hard to reproduce.",
      "Ask the on-duty person whether they knew which contact to call. A person who guessed may have reached the right number by luck. Record the answer separately from the outcome. The knowledge gap is a process finding even when the call succeeded.",
      "## Measuring escalation reach",
      "Report the share of attempts that reached a decision owner, the share that reached a contact without authority, and the share with no acknowledgment. Show the counts behind each share. The three groups need different fixes and should not be combined into one rate. A rate without the attempt count is easy to misread.",
      "Break the result down by trigger, contact, channel, and time of night. A channel that fails at one hour may work at another. A contact with several misses may need a backup rather than a reminder. Compare only contacts with similar roles and hours.",
      "Report the median time to acknowledge and the median time to the first decision. A fast acknowledgment without authority is not a successful reach. Show both times beside the reach rate. The pair tells the reader whether the path is fast and useful. A rate without the attempt count is easy to misread.",
      "## Limitations and next action",
      "The measure cannot show an escalation that was never attempted because the on-duty person decided to wait. It also cannot show a contact who was reachable but unwilling to decide. Treat the result as a measure of the recorded path. Note the incidents that were not escalated.",
      "Give the result to the team lead and the contacts with one change to test. The change might be a verified backup number, a shorter response target, or a different first contact for one trigger. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the tree with the people who answer the calls. They see the gaps that the log does not capture. A short review after each quarter is enough for a stable service. The goal is a path that works at the hour it is needed."
    ],
    "takeaways": [
      "Count the escalation attempt, not the incident.",
      "Separate no answer from no authority.",
      "Record the time to acknowledge and to decide.",
      "Review the path with the people who answer."
    ],
    "sources": [
      {
        "name": "CISA, Cybersecurity Best Practices",
        "url": "https://www.cisa.gov/topics/cybersecurity-best-practices"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm"
      }
    ],
    "related": [
      "create-an-after-hours-escalation-tree-for-a-client-support-team",
      "how-complete-are-escalation-briefs-in-a-distributed-support-team"
    ],
    "cta": "Test one after-hours path before the next quarter."
  },
  {
    "slug": "how-many-purchase-orders-need-a-second-approver-before-release",
    "title": "How many purchase orders need a second approver before release?",
    "excerpt": "A protocol for measuring second-approval demand, separating policy thresholds from judgment calls, and finding where purchase orders wait.",
    "published": "2026-11-10",
    "image": "/daily10/outsourcedlabor/how-many-purchase-orders-need-a-second-approver-before-release.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how many purchase orders need a second approver before release. The unit is one purchase order submitted for approval during the period. A second approval means a reviewer beyond the first approver must approve before the order can be released. The measure describes the approval load, not the value of the purchase.",
      "Set the scope to one procurement queue, one policy version, and a fixed period. Record the thresholds, the approver roles, and the system rules used at the time. If the policy changes during the period, split the sample at the effective date. A new threshold can change the share without changing the work.",
      "Keep the measure separate from a judgment about spending. A second approval may be required by policy even when the purchase is routine. The purpose is to understand the demand and the wait. State that purpose in the report.",
      "## Population and unit of analysis",
      "Define the population as every purchase order that entered the approval queue, including orders that were approved at the first step. The unit is the purchase order, not the approval message. One order may generate several messages and reminders. Count the order once and note the number of steps.",
      "Include orders that were rejected, returned for changes, and withdrawn. A returned order is part of the approval load and may need a second review. Report the final status separately. Excluding returns would understate the work.",
      "Exclude orders that were cancelled before any approval step. Report them separately as withdrawals. The approval queue never saw them, so they do not belong in the denominator. Keep the two groups distinct in the analysis.",
      "## Definitions that make the measure reproducible",
      "Define a second approval as a recorded approval from a person other than the first approver after the first approval is complete. Define a policy-required second approval as one triggered by a written threshold or rule. Define a judgment second approval as one requested by a reviewer without a written trigger. Publish one example of each.",
      "Define the release point as the timestamp when the order becomes available to the supplier or the buying system. Define the approval time as the period from the first submission to the final required approval. A measure that stops at the approval message may miss a system hold. Keep both timestamps in the same time zone.",
      "Define the approver role by the permission in the system, not by the job title. A person with the title manager may not have the approval permission for a given amount. Record the role and the permission. The distinction prevents a false comparison between teams.",
      "## Sampling and data collection",
      "Draw the sample from the procurement system rather than from a list of escalated orders. Record the export date, the filters, and the row count. Include every requester group and spend category in the period. A sample of high-value orders only will overstate the second-approval share.",
      "Capture the order identifier, the amount, the category, the requester, the first approver, the second approver, the policy threshold, the timestamps, and the final status. Add the reason for any judgment approval. Store the record with the report. The policy threshold is needed to separate the two causes.",
      "Check a small sample against the written policy. If an order was routed for a second approval without a matching rule, the system or the reviewer added a step. Record the reason. A policy that is not reflected in the system is a process risk, not only a measurement issue.",
      "Record the time each approver had the order. A total approval time can hide a long wait at one step. Use the timestamps to split the wait. The step with the longest wait is the first place to review.",
      "## Measuring second-approval demand",
      "Report the share of orders that needed a second approval, the share required by policy, and the share requested by judgment. Show the counts behind each share. A high judgment share may mean the policy is unclear or the first approver is avoiding a decision. A policy that produces most of the demand may need a simpler threshold.",
      "Break the result down by amount band, category, requester group, and approver. A category with many second approvals may need a clearer threshold. A requester group with many returns may need a better intake form. Compare groups with similar spend and complexity.",
      "Report the median and longest wait at the second step. A second approval that takes minutes is a different problem from one that takes days. Show the wait beside the share. The pair tells the reader whether the load is a volume issue or a bottleneck.",
      "## Limitations and next action",
      "The measure cannot show an approval that happened in a private channel and was never recorded. It also cannot show the quality of the decision. Treat the result as a measure of the recorded approval path. Note the channels and order types that were not included.",
      "Give the result to the procurement owner and the approvers with one change to test. The change might be a clearer threshold, a delegate for a busy approver, or a shorter review for a low-risk category. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the judgment approvals first because they are the least predictable. If they repeat for the same category, write a rule or remove the step. A second approval should protect a real risk, not compensate for an unclear first decision. A rule that is not enforced by the system will drift back."
    ],
    "takeaways": [
      "Count the purchase order, not the approval message.",
      "Separate a policy threshold from a reviewer judgment.",
      "Measure the wait at each approval step.",
      "Compare approval demand with the written policy."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, bookkeeping, accounting, and auditing clerks",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm"
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "how-many-approvals-does-a-delegated-invoice-queue-really-need",
      "set-a-decision-limit-for-refunds-in-a-delegated-queue"
    ],
    "cta": "Measure one approval queue before changing the threshold."
  }
] as const;
