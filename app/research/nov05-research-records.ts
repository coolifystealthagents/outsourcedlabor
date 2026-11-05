export const november05ResearchRecords = [
  {
    "slug": "how-often-does-a-shift-handover-lose-an-open-action",
    "title": "How often does a shift handover lose an open action?",
    "excerpt": "A measurement protocol for tracking open actions across a shift handover, with a frozen queue, a clear unit, and a dated review.",
    "published": "2026-11-05",
    "image": "/daily05/outsourcedlabor/how-often-does-a-shift-handover-lose-an-open-action.png",
    "body": [
      "## Research question and scope",
      "This protocol asks how often an open action survives a shift handover and how often it disappears from the next shift's working view. The unit is one open action that existed at the moment of handover, identified by the case, the action, and the owner. The study measures whether the action appears in the handover note, whether it is acknowledged, and whether it is completed or explicitly reassigned. It does not measure whether the customer was satisfied with the outcome.",
      "Set the scope to one queue, one shift pair, and one handover template. Record the ticketing system, the note template, and the shift schedule in force at the start. If the template changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A template change can look like an improvement in handover behavior when it is only a change in the form.",
      "## Population and unit of analysis",
      "Define the population as every handover that occurred during the observation window for the selected queue. The unit is the open action, not the handover itself, because one handover can carry several actions with different outcomes. A single action that moves across three shifts is one chain with three handover events. Record each event in the chain so the analysis can show where the action was lost.",
      "Exclude actions that were already closed before the handover, and record the exclusion count. Include actions that were waiting on the client, because a waiting action still needs a next review date. Include actions that were reassigned during the handover, because a reassignment is a legitimate outcome only when it is recorded. Test the unit definition on two ordinary handovers before collection begins.",
      "## Definitions that make the measure reproducible",
      "Define an open action as a task with a named owner and a next step that has not been completed at the moment the outgoing shift ends. Define a carried action as one that appears in the handover note with enough detail for the next shift to act. Define an acknowledged action as one the receiving person explicitly accepts. Define a lost action as one that is absent from the next shift's working view and was not explicitly deferred.",
      "Do not count a general statement such as keep an eye on the queue as a carried action. Do not count an action as acknowledged when the receiver only read the note without responding. A verbal handover can count only when it is written into the shared record before the outgoing shift ends. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently.",
      "## Evidence standard and data dictionary",
      "For each handover event, capture the case identifier, the action, the owner before and after, the promised date, the note reference, and the acknowledgement time. Add whether the action appeared in the note, whether it was acknowledged, and whether it was completed or reassigned by the next handover. Record the source system for each field and whether the value was observed or inferred. Store the thread reference with the sample so the evidence remains available. Keep the file in one approved repository so the evidence can be found later. Keep the packet with the case record so a later reviewer can repeat the check.",
      "Also capture the shift pair, the queue, and whether the handover occurred on a weekend or holiday. These fields help explain a lost action that was caused by an unusual schedule rather than a weak template. If a note was edited after the handover, record the edit time and analyze the original version separately. A reviewer should be able to rebuild the event from the packet without asking the outgoing person. Store the packet with the handover record so the evidence stays available.",
      "## Sampling and collection",
      "Draw the sample from the handover log or the shift schedule rather than from a list of memorable failures. Record the export date, the filters, the row count, and the selection rule. Include handovers from every shift pair and every day of the week so the result is not dominated by one busy Monday. If the population is ordered by date, a fixed interval spreads the sample across the window.",
      "Collect the handover note as it existed at the time of the handover, not as it looks after later edits. Do not reconstruct a missing action from the eventual resolution, because that measures the investigator rather than the process. If a note is stored only in a chat channel, record the channel and the retention limit. Note the collection date separately from the handover date.",
      "## Analysis and reporting",
      "Report the number of handover events, the number of open actions, and the share carried, acknowledged, and lost. Show the counts by shift pair and by action type. Present the median time between handover and acknowledgement and the share of actions that were reassigned without a written reason. Use the same denominator for every rate and show the number of actions with incomplete evidence.",
      "Inspect the lost actions and describe the pattern without naming the person. A cluster in one shift pair may point to a schedule gap, while a cluster in one action type may point to a missing field in the template. Compare the result with the weekend schedule, because a handover at the end of a long week may fail for reasons unrelated to the note. Report the exclusions and the missing evidence separately.",
      "A useful additional view is the action's age at each handover. An action that has crossed three handovers without a decision is a different risk from a new action that was lost once. Show the age distribution and the number of handovers per action. That view helps the owner distinguish a template problem from an ownership problem.",
      "A second view is to compare the handover note with the next shift's first hour of activity. If the next person opens the same three cases and ignores the fourth that the note emphasized, the note may be prioritizing the wrong work. Record the first actions taken and compare them with the stated priorities. That comparison shows whether the handover changed behavior or only documented it.",
      "## Limitations and sources of error",
      "The record cannot show whether the next shift understood the action but chose not to do it. It can show only what was written, acknowledged, and completed. A lost action is not proof of carelessness, and a carried action is not proof that the work was correct. The protocol also cannot capture a handover that happened entirely in person and left no written trace.",
      "Handover notes can be edited, deleted, or stored in a channel with a short retention period. A note that was clarified in a call may look incomplete in the record. Record those cases and their treatment instead of dropping them silently. If the same person wrote the note and performed the next shift, note the independence limitation and analyze that subgroup separately.",
      "## Review cadence and next action",
      "Give the result to the shift lead and the operations owner and ask them to choose one observable change. The change might be a required next-action field, an acknowledgement step, or a rule that no handover closes without a named receiver. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the shift schedule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If carrying improved but completion did not, the note may be clearer without the work becoming easier. If acknowledgement improved but lost actions did not, the receiver may be accepting too many items without the capacity to act. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "International Labour Organization, working time",
        "url": "https://www.ilo.org/topics/working-time"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Department of Labor, Wage and Hour Division",
        "url": "https://www.dol.gov/agencies/whd"
      }
    ],
    "related": [
      "what-share-of-delegated-refund-requests-exceed-the-written-limit",
      "how-complete-is-the-onboarding-evidence-for-a-new-outsourced-role"
    ]
  },
  {
    "slug": "what-share-of-delegated-refund-requests-exceed-the-written-limit",
    "title": "What share of delegated refund requests exceed the written limit?",
    "excerpt": "A protocol for measuring refund requests against a written authority limit, including split requests, missing evidence, and the owner decision that follows.",
    "published": "2026-11-05",
    "image": "/daily05/outsourcedlabor/what-share-of-delegated-refund-requests-exceed-the-written-limit.png",
    "body": [
      "## Research question and scope",
      "This protocol asks what share of refund requests fall outside a written authority limit and how the queue handles them. The unit is one refund request, identified by the customer, the order, and the request date. The study measures whether the amount, frequency, and evidence conditions were met and whether the request was escalated to the correct owner. It does not evaluate whether the refund was a good commercial decision.",
      "Set the scope to one queue, one refund policy version, and one observation window. Record the policy limits, the approval roles, and the system of record at the start. If the policy changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A limit change can look like a change in request behavior when it is only a change in the rule.",
      "## Population and unit of analysis",
      "Define the population as every refund request that reached a decision during the window, including requests that were refused or withdrawn. The unit is the request, not the customer, because one customer can make several unrelated requests. A request that is reopened after new evidence remains one unit with a revision history. A separate request for a different order is a new unit.",
      "Record the customer type, the order value, the request channel, and whether the customer had prior refunds in the period. These strata matter because a first-time duplicate charge and a repeated claim carry different risk. Include requests that were approved within the limit, because the base rate is needed to interpret the exceptions. Test the unit definition on two ordinary cases before collection begins.",
      "## Definitions that make the measure reproducible",
      "Define the written limit as the amount and frequency stated in the policy version that applied on the request date. Define an excess request as one whose amount exceeds the limit or whose frequency exceeds the permitted count. Define a split request as two or more refunds for the same order within a short window that together exceed the limit. Define a complete request as one with the order, charge, customer request, and reason recorded.",
      "Do not count a request as within the limit when the amount is under the threshold but the frequency is over it. Do not count a request as complete when the reason field says other without a note. A refund that was approved by the owner outside the limit is still an excess request, because the measure is about the request, not the outcome. Each definition should include one positive example and one boundary example.",
      "## Evidence standard and data dictionary",
      "For each request, capture the order identifier, the amount, the request date, the reason code, the evidence attached, the approval role, and the decision. Add the customer's prior refund count and whether the request was split across transactions. Record whether the specialist or the owner made the decision and whether the decision was recorded in the system of record. Keep the packet with the refund record for the next review.",
      "Also capture the time from request to decision and the number of follow-up messages. These fields help explain an excess request that was escalated correctly but handled slowly. If the amount was entered in a different currency, record the conversion rate and the date used. A second reviewer should be able to reproduce the classification from the packet without asking the specialist. Keep the packet with the refund record for the next review. Keep the packet with the refund record so the evidence survives a later audit.",
      "## Sampling and collection",
      "Draw the sample from the refund system rather than from a list of large refunds. Record the export date, the filters, the row count, and the selection rule. Include requests from every channel and every amount band so the result is not dominated by one source. If the population is ordered by request date, a fixed interval spreads the sample across the window.",
      "Collect the request as it existed at the decision, not as it looks after later edits. If the customer added evidence after the first decision, record the edit time and analyze the first decision separately. Do not reconstruct a missing reason from the final outcome. Note the collection date separately from the request date so the reader can see how much of the record has aged.",
      "## Analysis and reporting",
      "Report the number of requests, the share within the limit, the share above the amount limit, the share above the frequency limit, and the share with incomplete evidence. Show the counts by channel and by customer type. Present the median decision time and the share of excess requests that reached the named owner. Use the same denominator for every rate.",
      "Inspect the excess requests and describe the pattern without naming the customer. A cluster in one reason code may point to a product or billing problem, while a cluster in one channel may point to a missing prompt in the intake form. Compare the result with the policy version, because a recent limit change can explain a temporary spike. Report the split requests separately, since they are a different control failure.",
      "A useful additional view is the distribution of amounts just below the limit. A spike near the threshold may indicate deliberate splitting or a pricing pattern that the policy did not anticipate. Show the distribution in bands and describe the largest band without disclosing customer identities. That view helps the owner decide whether the limit is set correctly.",
      "The review should also check the customer's original channel and the agent who first handled the request. A request that began in a phone call may lack the written evidence that an email request carries. Record the channel and the handoff point for every excess request. That detail helps the owner decide whether the intake form or the training needs the first change.",
      "## Limitations and sources of error",
      "The record cannot show whether the customer was treated fairly or whether the refund was economically justified. It can show only whether the request met the written conditions and how it was routed. A high excess rate is not proof of poor performance, because the policy may be set below the normal range of legitimate requests. The protocol also cannot capture a refund that was issued outside the system.",
      "Refund systems can omit manual adjustments, chargebacks, and credits issued in a different tool. A request that was resolved by a payment provider may never appear in the queue. Record those cases and their treatment instead of dropping them silently. If the same person approved the request and recorded the evidence, note the independence limitation and analyze that subgroup separately.",
      "## Review cadence and next action",
      "Give the result to the finance owner and the support lead and ask them to choose one observable change. The change might be a clearer evidence field, a lower frequency threshold, or a rule that split refunds are reviewed together. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the limit and the intake form at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If excess requests fell but decision time rose, the new evidence requirement may be too heavy. If split requests fell but customer complaints rose, the rule may be too rigid for legitimate cases. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "sources": [
      {
        "name": "Federal Trade Commission, protecting personal information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Department of Labor, Wage and Hour Division",
        "url": "https://www.dol.gov/agencies/whd"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "how-often-does-a-shift-handover-lose-an-open-action",
      "how-complete-is-the-onboarding-evidence-for-a-new-outsourced-role"
    ]
  },
  {
    "slug": "how-complete-is-the-onboarding-evidence-for-a-new-outsourced-role",
    "title": "How complete is the onboarding evidence for a new outsourced role?",
    "excerpt": "A protocol for checking whether a new role's onboarding file proves the person was trained, authorized, and reviewed before live work began.",
    "published": "2026-11-05",
    "image": "/daily05/outsourcedlabor/how-complete-is-the-onboarding-evidence-for-a-new-outsourced-role.png",
    "body": [
      "## Research question and scope",
      "This protocol asks how complete the onboarding evidence is for a new outsourced role before the person handles live work. The unit is one onboarding file for one person and one role. The study measures whether the file contains the task walkthrough, the access approval, the supervised case, and the first review. It does not evaluate the person's overall performance or the quality of the training content.",
      "Set the scope to one site, one role family, and one onboarding template. Record the access system, the review process, and the start date definitions at the beginning. If the template changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new checklist can look like better evidence when it is only a new form.",
      "## Population and unit of analysis",
      "Define the population as every person who started the selected role during the window, including people who left before the first review. The unit is the onboarding file, identified by the person and the start date. A person who changes roles within the window is a new unit with a new role. A person who is rehired after a break is a new unit with a reference to the earlier file.",
      "Record the role, the start date, the reviewer, and whether the person handled live work during the window. These strata matter because a file for a role that never touched customer data carries a different risk. Include files that are incomplete because the person left early, and record the reason. Test the unit definition on two ordinary files before collection begins.",
      "## Definitions that make the measure reproducible",
      "Define a complete onboarding file as one that contains the signed role brief, the task walkthrough record, the access approval with a named approver, the supervised first case, and the 30-day review. Define a supervised case as one where a named reviewer inspected the work before it reached a customer or a live record. Define an access approval as a record that names the permission, the system, and the expiry. Write these definitions into the onboarding template before the next person starts.",
      "Do not count a welcome email as a walkthrough record. Do not count a shared password as an access approval. A review that exists only in a chat message counts only when the message names the file and the reviewer. Each definition should include one positive example and one boundary example so a second reviewer can apply it consistently. Write the definitions into the onboarding template before the next hire starts.",
      "## Evidence standard and data dictionary",
      "For each file, capture the person identifier, the role, the start date, the reviewer, the walkthrough date, the access request date, the approval date, the supervised case date, and the review date. Add whether the file contains the role brief and whether the access was removed at the end of the engagement. Record the source system for each field and whether the value was observed or inferred. Keep the file in one approved repository so the evidence can be found later.",
      "Also capture whether the person handled live work before the supervised case and whether any access was broader than the role required. These fields help explain a gap that a simple checklist count would miss. If a document was signed after the start date, record both dates. A second reviewer should be able to rebuild the timeline from the file without asking the manager. Keep the file in one approved repository so the evidence can be found later.",
      "## Sampling and collection",
      "Draw the sample from the onboarding tracker or the human resources system rather than from a list of recent hires the manager remembers. Record the export date, the filters, the row count, and the selection rule. Include people from every role family and every start month so the result is not dominated by one cohort. If the population is ordered by start date, a fixed interval spreads the sample across the window.",
      "Collect the file as it existed at the end of the observation window, not as it was reconstructed later. If a missing document was added after the person started live work, record the addition date and analyze the original gap separately. Do not accept a verbal confirmation in place of a missing record. Note the collection date separately from the start date.",
      "## Analysis and reporting",
      "Report the number of files, the share complete, the share missing each required element, and the share where live work began before the supervised case. Show the counts by role family and by reviewer. Present the median time from start date to walkthrough and from start date to review. Use the same denominator for every rate and show the number of files with incomplete evidence.",
      "Inspect the files with the largest gaps and describe the pattern without naming the person. A cluster under one reviewer may point to a workload problem, while a cluster in one role may point to a missing template. Compare the result with the access log, because a file can look complete while the permissions were broader than recorded. Report the early departures separately.",
      "A useful additional view is the order in which the evidence appeared. A file where access was approved before the walkthrough tells a different story from one where the review happened before the first live case. Show the sequence for the longest gaps and describe the consequence. That view helps the owner fix the process rather than asking for more documents.",
      "Another useful measure is the time between the supervised case and the first unsupervised batch. A short gap may be appropriate for a simple queue, while a complex role may need a longer practice period. Record the batch size and the reviewer's sample rate beside the gap. The owner can then judge whether the pace matched the risk rather than the calendar.",
      "## Limitations and sources of error",
      "The file cannot show whether the person actually understood the training or whether the reviewer was effective. It can show only whether the required evidence exists and when it was recorded. A complete file is not proof of competence, and an incomplete file is not proof that the person was untrained. The protocol also cannot capture informal coaching that left no record.",
      "Trackers can omit people who started through a different process, and files can be stored in more than one system. A document that was completed in a meeting may not appear in the repository. Record those cases and their treatment instead of dropping them silently. If the reviewer also approved the access, note the independence limitation and analyze that subgroup separately.",
      "## Review cadence and next action",
      "Give the result to the operations owner and the onboarding reviewer and ask them to choose one observable change. The change might be a required walkthrough date, an access expiry, or a rule that live work cannot begin without a supervised case. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the checklist and the access process at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If completeness improved but the time to first live case rose, the new step may be creating a bottleneck. If access gaps fell but review gaps did not, the problem may be reviewer capacity rather than the checklist. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, occupational outlook",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm"
      },
      {
        "name": "International Labour Organization, working time",
        "url": "https://www.ilo.org/topics/working-time"
      }
    ],
    "related": [
      "how-often-does-a-shift-handover-lose-an-open-action",
      "what-share-of-delegated-refund-requests-exceed-the-written-limit"
    ]
  },
  {
    "slug": "where-does-a-shared-inbox-accumulate-unowned-messages",
    "title": "Where does a shared inbox accumulate unowned messages?",
    "excerpt": "A protocol for locating unowned conversations in a shared inbox by label, hour, and customer type before adding headcount.",
    "published": "2026-11-05",
    "image": "/daily05/outsourcedlabor/where-does-a-shared-inbox-accumulate-unowned-messages.png",
    "body": [
      "## Research question and scope",
      "This protocol asks where a shared inbox accumulates messages that have no assigned owner and no next action. The unit is one inbound conversation, identified by the thread and the arrival time. The study measures the unowned interval, the label, the arrival hour, and the action that eventually closed the conversation. It does not evaluate the quality of the reply or the customer's satisfaction.",
      "Set the scope to one inbox, one assignment system, and one observation window. Record the labels, the routing rules, and the shift schedule in force at the start. If the routing rules change during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new rule can look like a change in ownership behavior when it is only a change in the queue.",
      "## Population and unit of analysis",
      "Define the population as every inbound conversation that arrived during the window and required a human response. The unit is the conversation, not the message, because one conversation can contain several messages with different owners. A conversation that is reopened after a customer reply remains one unit with a new unowned interval. A separate thread about a different request is a new unit.",
      "Record the label, the customer type, the arrival hour, and whether the conversation was assigned at arrival. These strata matter because an unowned message at the end of a shift carries a different risk from one that arrives during a staffed hour. Include conversations that were answered by an automated reply, because a reply is not an owner. Test the unit definition on two ordinary threads before collection begins.",
      "## Definitions that make the measure reproducible",
      "Define an unowned conversation as one with no named human owner and no next action in the shared system. Define the unowned interval as the time between arrival and the first assignment to a named owner. Define a closed conversation as one where the customer's request was answered or a next step was agreed. Define a reopened conversation as one with a new customer message after closure.",
      "Do not count a conversation as owned when it is assigned to a general queue rather than a person. Do not count an automatic acknowledgement as a response. A conversation that is waiting on the customer is still owned when a named person is responsible for the next review. Each definition should include one positive example and one boundary example.",
      "## Evidence standard and data dictionary",
      "For each conversation, capture the thread identifier, the arrival time, the label, the assigned owner, the assignment time, the first human reply time, and the closing action. Add the customer type, the shift, and whether the conversation was reopened. Record the source system for each field and whether the value was observed or inferred. Store the thread reference with the sample so the evidence remains available.",
      "Also capture whether a second person replied and whether the conversation was moved to another label. These fields help explain a duplicate reply or a handoff that was never acknowledged. If the assignment was made in a chat message rather than the system, record the message time and the system assignment time separately. A second reviewer should be able to classify the thread from the record. Store the thread reference with the sample so the evidence remains available.",
      "## Sampling and collection",
      "Draw the sample from the inbox export rather than from a list of complaints. Record the export date, the filters, the row count, and the selection rule. Include conversations from every label and every arrival hour so the result is not dominated by one busy period. If the population is ordered by arrival time, a fixed interval spreads the sample across the window.",
      "Collect the thread as it existed at the first assignment, not as it looks after later edits. If a conversation was reassigned several times, record each interval and the reason when available. Do not reconstruct a missing assignment from the final reply. Note the collection date separately from the arrival date so the reader can see how much of the record has aged.",
      "## Analysis and reporting",
      "Report the number of conversations, the share unowned at arrival, the median unowned interval, and the share never assigned to a named person. Show the counts by label, arrival hour, and shift. Present the share of conversations that received a duplicate reply and the share that were reopened. Use the same denominator for every rate.",
      "Inspect the unowned conversations and describe the pattern without naming the customer. A cluster after a certain hour may point to a shift gap, while a cluster under one label may point to an unclear owner. Compare the result with the routing rules, because a rule that sends a label to a group can create an unowned queue. Report the automated replies separately, since they can hide the gap.",
      "A useful additional view is the time from first assignment to first human reply, not only arrival to assignment. A conversation can be assigned quickly and still wait for the owner to act. Show both intervals and describe the larger one. That split helps the owner decide whether to change the routing or add capacity.",
      "The review should also compare the inbox with the other channels the business uses. A conversation that moved from email to chat may appear unowned in the inbox while a person is actively handling it elsewhere. Record the channel switch and the time it happened. That context prevents the analysis from counting an active customer as neglected.",
      "## Limitations and sources of error",
      "The record cannot show whether a customer gave up or went to another channel. It can show only what happened in the inbox. An unowned conversation is not proof of neglect, because the assignment may have happened in a channel the export does not capture. The protocol also cannot measure the quality of the eventual answer.",
      "Inbox exports can omit calls, direct messages, and conversations handled outside the shared system. A thread that was resolved in person may look unowned in the record. Record those cases and their treatment instead of dropping them silently. If the same person assigns and answers the conversation, note the independence limitation and analyze that subgroup separately.",
      "## Review cadence and next action",
      "Give the result to the inbox owner and the operations lead and ask them to choose one observable change. The change might be a named owner for a label, a routing rule for an arrival hour, or a rule that no conversation stays in a group queue overnight. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the labels and the schedule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If the unowned share fell but the reply time rose, the new owner may be overloaded. If duplicate replies fell but reopenings rose, the routing may be sending conversations to the wrong person. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "Federal Trade Commission, protecting personal information",
        "url": "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business"
      },
      {
        "name": "International Labour Organization, working time",
        "url": "https://www.ilo.org/topics/working-time"
      }
    ],
    "related": [
      "how-often-does-a-shift-handover-lose-an-open-action",
      "what-share-of-delegated-refund-requests-exceed-the-written-limit"
    ]
  },
  {
    "slug": "how-much-review-capacity-does-a-delegated-queue-consume",
    "title": "How much review capacity does a delegated queue consume?",
    "excerpt": "A protocol for measuring the reviewer time a delegated queue requires, including samples, exceptions, and the hidden cost of unclear rules.",
    "published": "2026-11-05",
    "image": "/daily05/outsourcedlabor/how-much-review-capacity-does-a-delegated-queue-consume.png",
    "body": [
      "## Research question and scope",
      "This protocol asks how much reviewer time a delegated queue consumes and where that time is spent. The unit is one review event, identified by the batch or case, the reviewer, and the date. The study measures the minutes spent preparing, inspecting, questioning, and deciding, plus the rework that followed. It does not evaluate whether the reviewer's judgment was correct.",
      "Set the scope to one queue, one reviewer group, and one review cadence. Record the sample size, the review template, and the escalation rules at the start. If the cadence changes during the window, keep the earlier definition for the full sample or analyze the change as a separate period. A new template can look like a change in reviewer effort when it is only a change in the form.",
      "## Population and unit of analysis",
      "Define the population as every review event that occurred during the window for the selected queue. The unit is the review event, not the case, because one case can be reviewed several times. A batch review counts as one event when the reviewer inspects several cases in a single sitting. A follow-up review after rework is a separate event with a link to the first.",
      "Record the reviewer, the queue, the batch size, and the review type. These strata matter because a routine sample review and an exception review consume different effort. Include reviews that found no problem, because the base cost matters as much as the exceptions. Test the unit definition on two ordinary reviews before collection begins.",
      "## Definitions that make the measure reproducible",
      "Define review time as the elapsed minutes the reviewer spends on the queue, excluding time spent on unrelated work. Define preparation time as the time spent reading the handoff, opening the records, and setting up the sample. Define inspection time as the time spent checking the cases. Define decision time as the time spent approving, rejecting, or routing the result.",
      "Do not count a meeting that covers several queues as a review of one queue unless the time is allocated. Do not count time spent waiting for a missing document unless the reviewer was actively following up. A review that is interrupted should be recorded with the interruption and the adjusted time. Each definition should include one positive example and one boundary example.",
      "## Evidence standard and data dictionary",
      "For each review event, capture the date, the reviewer, the queue, the batch size, the number of cases inspected, and the minutes in each phase. Add the number of questions sent back, the number of cases requiring rework, and the time to close the rework. Record whether the review used a written checklist and whether the reviewer had another queue open. Keep the log with the queue record so the sample can be repeated.",
      "Also capture the number of exceptions that required the owner and the time spent waiting for a decision. These fields help explain a review that was slow because of authority rather than case complexity. If the times were estimated rather than observed, record the method. A second reviewer should be able to reconstruct the total from the data dictionary. Keep the review log with the queue record so the sample can be repeated.",
      "## Sampling and collection",
      "Draw the sample from the review log or the queue system rather than from a list of difficult cases. Record the export date, the filters, the row count, and the selection rule. Include reviews from every reviewer and every weekday so the result is not dominated by one person. If the population is ordered by date, a fixed interval spreads the sample across the window.",
      "Collect the times as close to the event as possible, because a retrospective estimate tends to round toward the memorable parts of the work. Use a timer or a system timestamp when available. If only an estimate exists, record the estimation method and treat the value separately. Note the collection date and whether the reviewer was interrupted.",
      "## Analysis and reporting",
      "Report the median and range for preparation, inspection, decision, and rework time. Show the total reviewer minutes per case and per batch, and the share of time spent on exceptions. Present the counts by reviewer and by review type. Use the same denominator for every rate and show the number of events with estimated rather than observed times.",
      "Inspect the events with the highest rework time and describe the pattern without naming the reviewer. A cluster in one queue may point to an unclear rule, while a cluster in one reviewer may point to a different sample or schedule. Compare the review time with the number of questions sent back, because a fast review that generates rework may cost more overall. Report the waiting time separately.",
      "A useful additional view is the reviewer's total queue load, including other queues. A reviewer covering three queues may appear slow on one while the real constraint is the combined load. Show the load beside the review time and describe the relationship. That view helps the owner decide whether to add capacity, simplify the rule, or reduce the sample.",
      "A final view is the reviewer's error and rework rate, not only the minutes spent. A short review that produces frequent rework may consume more total capacity than a longer review that catches problems early. Show the rework rate beside the review time and describe the tradeoff. The owner can then decide whether to protect review time or simplify the queue.",
      "## Limitations and sources of error",
      "The record cannot show whether the reviewer's attention was adequate or whether a quick review missed a defect. It can show only how long the review took and what happened afterward. A long review is not proof of quality, and a short review is not proof of negligence. The protocol also cannot capture informal advice given outside the recorded review.",
      "Timers can be forgotten, meetings can overlap, and a reviewer can switch queues without recording the change. Those errors tend to understate the true cost rather than overstate it. Record the interruptions and the estimated times instead of dropping them. If the reviewer also performs the work being reviewed, note the independence limitation and analyze that subgroup separately.",
      "## Review cadence and next action",
      "Give the result to the operations owner and the reviewer group and ask them to choose one observable change. The change might be a smaller sample, a clearer rule, a different approval path, or a dedicated review block. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the sample and the rule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If total time fell but rework rose, the smaller sample may be too small. If rework fell but review time stayed high, the bottleneck may be the approval step rather than inspection. Close the review when the owner accepts the finding and the next sample is scheduled."
    ],
    "sources": [
      {
        "name": "U.S. Department of Labor, Wage and Hour Division",
        "url": "https://www.dol.gov/agencies/whd"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "International Labour Organization, working time",
        "url": "https://www.ilo.org/topics/working-time"
      }
    ],
    "related": [
      "how-often-does-a-shift-handover-lose-an-open-action",
      "what-share-of-delegated-refund-requests-exceed-the-written-limit"
    ]
  }
];
