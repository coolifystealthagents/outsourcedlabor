export const november07ResearchRecords = [
  {
    "slug": "how-long-do-refund-approvals-wait-in-a-delegated-support-queue",
    "title": "How long do refund approvals wait in a delegated support queue?",
    "excerpt": "A measurement protocol that separates evidence collection, approver review, and customer notification so waiting time points to a specific fix.",
    "published": "2026-11-07",
    "image": "/daily07/outsourcedlabor/how-long-do-refund-approvals-wait-in-a-delegated-support-queue.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how long a refund request waits for an approval after the evidence packet is complete. The unit is one refund case, identified by the order, the customer, and the date the packet reached the approver. Elapsed time is split into evidence collection, approver review, and customer notification so the owner can see which stage creates the delay. The study measures waiting time, not whether the refund decision was correct.",
      "Set the scope to one client, one refund queue, and one approval tier for a fixed window. Record the policy version, the approver group, and the systems used when collection starts. If the tier or policy changes during the window, keep the earlier definition for the full sample or treat the change as a separate period. A policy edit can shorten apparent waiting without improving the work.",
      "## Population and unit of analysis",
      "Define the population as every refund case that entered the queue during the window. The unit is the case, not the message, because one case can produce several customer messages and internal notes. A case that is reopened after a denial remains one unit and receives a second approval segment. Record both segments so the analysis does not hide the repeat.",
      "Exclude cases withdrawn by the customer before the packet was complete, and record the exclusion count. Include cases denied at the first tier and sent to a second approver, because escalation is part of the waiting time. Include small goodwill refunds if they follow the same queue. Test the unit definition on five ordinary cases before collection begins.",
      "## Definitions that make the measure reproducible",
      "Define packet completion as the moment every required field and attachment is present. Define approver review as the time from packet completion to the first decision, including requests for more evidence. Define notification as the time from the decision to the message the customer can see. A case that waits for a missing receipt is an evidence delay, not an approval delay.",
      "Do not count the customer's own response time as queue time. Do not count a weekend or holiday unless the approver group was scheduled to work. Each definition should include one positive case and one boundary case so a second reviewer can apply it the same way. Publish the definitions with the sample so the numbers can be checked.",
      "## Evidence standard and data dictionary",
      "For each case, capture the order identifier, amount, reason, required attachments, timestamps, approver, tier, and final decision. Add the message sent to the customer and the system events that show when the packet changed. Store the packet with the case record so the evidence survives a later review. A timestamp without the record cannot show what the approver actually saw.",
      "Record whether the approver asked for more evidence and how long the specialist took to supply it. Record the approver's availability during the window, including leave and time-zone gaps. If the reason code is other, require a short note. A reviewer should be able to classify the case from the packet without interviewing the specialist.",
      "## Sampling and collection",
      "Draw the sample from the refund system rather than a list of complaints. Record the export date, filters, row count, and selection rule. Include cases from every weekday, every approver, and every tier so the result is not dominated by one person. If the population is ordered by date, a fixed interval spreads the sample across the window.",
      "Collect the packet as it existed at each timestamp, not as it looks after later edits. If the approver added a note after the decision, record when it was added. Do not reconstruct a missing field from the final message. Note the collection date separately so the reader can see how much of the record has aged.",
      "## Measuring elapsed time in stages",
      "Report the median and the range for evidence collection, approver review, and notification. Use the same clock and time zone for every case, and state whether the clock includes weekends. A median alone hides the slow cases that frustrate customers, so show the slowest decile as well. The reader should be able to see both the typical wait and the worst wait.",
      "Break the stages down by tier, approver, and reason. A tier that looks slow may be waiting for evidence rather than a decision. An approver who looks slow may be carrying an unreasonable share of cases. Keep the comparison within the same tier so a complex case is not compared with a simple one.",
      "## Analysis and reporting",
      "Report the number of cases, the share that missed the target, and the median wait for each stage. Show the reasons for delay in a small table using the same categories as the definitions. Use the same denominator for every rate and state the exclusions. A percentage without its base is not actionable for the operations owner.",
      "Compare the stages within the sample rather than against an external benchmark that may use different rules. Report the cases that never received a decision separately, because an open case has no final wait. If the sample is small, show counts instead of percentages. Do not present a difference as causation without a controlled comparison.",
      "## Limitations and sources of error",
      "The record cannot show how often a customer abandoned the request before the packet was complete. It also cannot show the cost of a delay that the specialist absorbed by working around the queue. A slow approval may be invisible if the customer was told a different timeline. The study measures recorded waiting, not the full customer experience.",
      "Packets can be edited, deleted, or split across systems with different clocks. A verbal approval may never appear in the system even though the work moved. Record those cases and their treatment rather than dropping them. If the approver and the specialist report to the same manager, note the independence limitation.",
      "## Review cadence and next action",
      "Give the result to the approver group and the operations owner and ask for one observable change. The change might be a shorter packet, a named backup, or a rule that small refunds do not need a second tier. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the packet and the approval tier at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same stages. If approval time fell but evidence time rose, the new field may be shifting work without reducing the wait. If only one approver improved, the change may not be the cause. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "## Separating evidence delay from decision delay",
      "Evidence delay and decision delay need different fixes. If most of the wait happens before the packet is complete, the queue needs clearer requirements or better source access. If most of the wait happens after completion, the approval tier or the approver schedule is the problem. Reporting one combined number hides which fix will help.",
      "Add a field that records the first missing item for every incomplete packet. Count those items across the sample and rank them. A single missing document that appears in half the cases is a strong candidate for a template change. A decision delay that concentrates on one approver is a staffing question, not a training question.",
      "## Reporting to the client",
      "Report the result in a form the client can act on: which stage, which tier, and which missing item caused the most waiting. Avoid presenting the numbers as a grade for the team. Use examples with identifying details removed. The client should leave with one change it can approve and one measure it can watch.",
      "Show the denominator and the exclusions so the client can judge the sample. If the sample is too small to support a conclusion, say so. A cautious report is more useful than a confident one built on six cases. Offer to repeat the measurement after the change and name the date.",
      "## Replication and version control",
      "Keep the definition, the policy version, and the export query with the report. A second analyst should be able to repeat the measurement on a later window and compare the same stages. If the definition changes, publish a new baseline rather than mixing periods. Replication is what turns a one-time review into an operating measure.",
      "Schedule the next measurement before the first report is filed. The date should be far enough away for the change to take effect but close enough to keep attention. Assign the owner who will run it. A protocol that is never repeated becomes a story about the past. Put the date in the same calendar as the operations review so it is not forgotten."
    ],
    "sources": [
      {
        "name": "U.S. Federal Trade Commission, consumer protection and refunds",
        "url": "https://www.ftc.gov/business-guidance/resources/consumer-protection-and-refunds"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "how-complete-are-escalation-briefs-in-a-distributed-support-team",
      "how-much-of-a-delegated-inbox-is-exception-work"
    ],
    "cta": "Measure one refund tier before changing the approval policy."
  },
  {
    "slug": "what-share-of-vendor-follow-ups-arrive-after-the-promised-date",
    "title": "What share of vendor follow-ups arrive after the promised date?",
    "excerpt": "A protocol for comparing vendor promises with actual replies so the team can see whether the cadence or the vendor is causing the delay.",
    "published": "2026-11-07",
    "image": "/daily07/outsourcedlabor/what-share-of-vendor-follow-ups-arrive-after-the-promised-date.png",
    "body": [
      "## Research question and scope",
      "This protocol measures the share of vendor follow-ups that arrive after the date the vendor promised. The unit is one promised item, such as a quote, a document, a delivery date, or a replacement confirmation. A follow-up is late when the first usable response arrives after the promised date. The study measures promise reliability, not whether the vendor was polite or responsive.",
      "Set the scope to one client, one vendor list, and one follow-up channel for a fixed window. Record the request types included and the cadence version in use at the start. If the vendor list or cadence changes during the window, keep the earlier definition for the full sample. A new reminder rule can change the measured rate without changing vendor behavior.",
      "## Population and unit of analysis",
      "Define the population as every vendor promise recorded during the window. The unit is the promise, not the thread, because one thread can contain several promised items with different dates. A promise that is revised remains one unit with a revision event. Record each revision so the analysis can separate a new commitment from a missed one.",
      "Exclude promises that were withdrawn before the date and record the exclusion count. Include promises that were met by a different contact or channel, because the customer only sees the result. Include items with no promised date as a separate category rather than forcing them into the late group. Test the unit definition on five threads before collection begins.",
      "## Definitions and date rules",
      "Define the promised date as the date the vendor stated in writing or the date recorded by the team after a call. Define arrival as the first response that contains the usable item, not the first message that acknowledges the request. Define late as arrival after the end of the promised business day in the client's time zone. Write these rules before looking at the results.",
      "Do not treat a promise to try as a promised date. Do not count an automated acknowledgment as a usable response. If the vendor promised a range, record the end of the range and note the range in the packet. Each definition needs a positive and a boundary case so a second reviewer can apply it consistently.",
      "## Evidence standard and data dictionary",
      "For each promise, capture the thread identifier, vendor, request type, promised date, promised item, actual arrival, contact, and channel. Add the message that contains the promise and the message that contains the arrival. Record any revision and the reason given. Store the packet with the vendor record so the evidence survives a later dispute.",
      "Also capture whether the team followed the cadence on time. A late response caused by a late reminder is a team problem, not a vendor problem. Record the reminder dates and the person who sent them. If the reason code is other, require a short note. A reviewer should be able to verify the result from the packet without reading the entire thread.",
      "## Sampling and collection",
      "Draw the sample from the shared follow-up log rather than from a list of complaints. Record the export date, filters, row count, and selection rule. Include every vendor and request type that appears in the log during the window. If one vendor dominates the population, report its share separately so the overall rate is not mistaken for the whole vendor base.",
      "Collect the thread as it existed at the promised date, not as it looks after later edits. If the vendor changed the date in a later message, record both dates and the time of the change. Do not infer a promise from the team's expectation. Note the collection date separately so the reader can judge the age of the record.",
      "## Measuring promise versus arrival",
      "Report the number of promises, the share that arrived late, and the median days late. Break the result down by vendor, request type, and contact. A vendor that is late on quotes but reliable on delivery needs a different response from one that misses everything. The breakdown is more useful than a single vendor score.",
      "Show on-time promises separately from promises that were revised before the date. A revision is not the same as a miss, but it can still delay the customer. Report the revision rate beside the late rate. If revisions are common, the first promise may be unrealistic rather than the vendor unreliable.",
      "## Analysis and reporting",
      "Report counts and rates with the same denominator for every comparison. Show the distribution of lateness rather than only the average, because a few very late items can distort the mean. Use a small table with the request types and the number of promises in each. State the exclusions and the missing records.",
      "Compare the late rate with the cadence version and the reminder dates. If lateness falls when the team sends the second reminder earlier, the cadence is doing the work. If lateness stays the same across cadence versions, the vendor's behavior is the stronger explanation. Do not claim causation from an uncontrolled comparison.",
      "## Limitations and sources of error",
      "The log cannot show promises made in a call that nobody recorded. It also cannot show work that arrived early but was unusable, unless the reviewer recorded the quality problem. A vendor may be late because the request was incomplete, and the packet may not make that visible. The study measures recorded promises and recorded arrivals.",
      "Threads can be split across channels, and a vendor may reply to one person while another waits. An automated message may look like a response until someone checks the content. Record those cases and their treatment rather than dropping them. If the person who sent the reminder also recorded the arrival, note the independence limitation.",
      "## Review cadence and next action",
      "Give the result to the vendor owner and the operations lead and ask for one observable change. The change might be a required promised date, a named backup contact, or a second reminder that fires sooner. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the cadence and the vendor contact at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same request types. If lateness fell but the number of promises also fell, the team may be recording fewer commitments rather than getting better service. Ask the vendor owner to confirm that the same work is still being tracked. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "## Vendor-level patterns",
      "Rank vendors by the number of late promises and by the median days late. Do not rank by percentage alone when the volume is small. A vendor with two promises and one late item is not the same risk as a vendor with forty promises and twelve late items. Show both the count and the rate beside each name.",
      "Look for a pattern in the request type and the contact. A vendor may be reliable with the account manager and unreliable with the finance desk. The fix may be a different route rather than a tougher reminder. Record what changed after the team switched contacts so the next review can test it.",
      "## Reporting to the client",
      "Report the result in a form the client can use in a vendor conversation: which request types are late, which promises were missed, and what the team did before escalating. Avoid framing the report as a complaint about the vendor. Use examples with identifying details removed. The client should leave with one change it can request.",
      "Show the denominator and the exclusions so the client can judge the sample. If the sample is too small to support a conclusion, say so. A cautious report is more useful than a confident one built on a handful of threads. Offer to repeat the measurement after the vendor conversation and name the date.",
      "## Replication and version control",
      "Keep the definition, the cadence version, and the export query with the report. A second analyst should be able to repeat the measurement on a later window and compare the same request types. If the definition changes, publish a new baseline rather than mixing periods. Replication is what turns a vendor complaint into an operating measure.",
      "Schedule the next measurement before the first report is filed. The date should be far enough away for the vendor change to take effect but close enough to keep attention. Assign the owner who will run it. A protocol that is never repeated becomes a story about the past. Put the date in the same calendar as the vendor review so it is not forgotten."
    ],
    "sources": [
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Small Business Administration, marketing and sales",
        "url": "https://www.sba.gov/business-guide/manage-your-business/marketing-sales"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, secretaries and administrative assistants",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "how-much-of-a-delegated-inbox-is-exception-work",
      "how-long-do-refund-approvals-wait-in-a-delegated-support-queue"
    ],
    "cta": "Measure one vendor list before tightening the follow-up cadence."
  },
  {
    "slug": "how-much-of-a-delegated-inbox-is-exception-work",
    "title": "How much of a delegated inbox is exception work?",
    "excerpt": "A work-mix protocol that separates routine handling from exceptions, measures time by type, and shows where queue design creates hidden rework.",
    "published": "2026-11-07",
    "image": "/daily07/outsourcedlabor/how-much-of-a-delegated-inbox-is-exception-work.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how much of a delegated inbox is routine work and how much is exception work. The unit is one handled item, identified by the message, the record it touches, and the person who handled it. Exception work is any item that cannot be completed with the written routine and needs a decision, a search, or a new rule. The study measures work mix, not individual productivity.",
      "Set the scope to one client, one inbox, and one shift pattern for a fixed window. Record the routine guide version, the queue rules, and the tools used when collection starts. If the guide changes during the window, keep the earlier definition for the full sample. A new guide can move items from exception to routine without changing the underlying demand.",
      "## Population and unit of analysis",
      "Define the population as every item handled in the inbox during the window. The unit is the item, not the thread, because one thread can contain a request and a later correction. An item that is reopened remains one unit with a second handling event. Record both events so the analysis does not hide the repeat.",
      "Exclude spam and clearly personal messages, and record the exclusion count. Include items that were forwarded to another team, because the inbox still spent time classifying them. Include items that were answered with a saved reply, because routine work is part of the mix. Test the unit definition on ten ordinary items before collection begins.",
      "## Classifying routine and exception work",
      "Define routine work as an item that matches a written rule and can be completed without a new decision. Define exception work as an item that needs a policy decision, a missing record, a vendor contact, or a customer promise outside the guide. Add a third category for unclear items that cannot be classified without more information. Publish one positive and one boundary example for each category.",
      "Do not classify by how long the item took. A routine item can be slow because the system is slow, and an exception can be fast because the owner has seen it before. Classify by what the work required, then measure time separately. That separation is what makes the work mix comparable across shifts.",
      "## Evidence standard and data dictionary",
      "For each item, capture the message, sender, record identifier, routine guide section, classification, handling time, and outcome. Add the person who handled it and whether they asked for help. Record the reason for the exception in a short code. Store the packet with the inbox record so the evidence survives a later review.",
      "Also capture whether the item returned within seven days. A routine answer that creates a second question may be a hidden exception. Record the customer's next message and the reason it arrived. If the reason code is other, require a note. A reviewer should be able to classify the item from the packet without asking the handler.",
      "## Sampling and collection",
      "Draw the sample from the inbox export rather than from a list of difficult cases. Record the export date, filters, row count, and selection rule. Include every weekday and every handler so the result is not dominated by one busy Monday. If the inbox is ordered by time, a fixed interval spreads the sample across the window.",
      "Collect the message as it existed when it arrived, not as it looks after the reply. If the customer added detail later, record the edit time and analyze the first version separately. Do not reconstruct a missing field from the final answer. Note the collection date separately so the reader can see how much of the record has aged.",
      "## Measuring time by work type",
      "Report the median handling time for routine, exception, and unclear items separately. Use the same clock and include the time spent searching, asking, and waiting. A routine item that takes twenty minutes may be a guide problem, not a slow person. Show the slowest decile as well as the median so the tail is visible.",
      "Break the time down by handler and by work type within the same week. A handler with a high exception share will look slower even if their routine work is fast. Do not compare raw averages across handlers without adjusting for the mix. The mix is the finding, not a nuisance to control away.",
      "## Analysis and reporting",
      "Report the number of items, the share in each category, and the median time by category. Show the exception reasons in a small table and rank them by count and by time. Use the same denominator for every rate and state the exclusions. A percentage without its base is not actionable for the queue owner.",
      "Compare the exception share across weeks and shifts. A rising share may mean the guide is missing a case, the product changed, or the team is receiving a new request type. A falling share may mean the guide improved or the team is classifying difficult work as routine. Check a sample of classifications before trusting the trend.",
      "## Limitations and sources of error",
      "The record cannot show work that was handled outside the inbox, such as a phone call or a direct message. It also cannot show the time spent worrying about an item after it was closed. A handler may classify an item as routine to avoid asking for help. The study measures recorded classification and recorded time.",
      "Messages can be deleted or moved, and a thread may span several systems with different clocks. A verbal decision may never appear in the record even though the work moved. Record those cases and their treatment rather than dropping them. If the person who classified the item also set the time target, note the independence limitation.",
      "## Review cadence and next action",
      "Give the result to the queue owner and the training lead and ask for one observable change. The change might be a new guide section, a saved reply, or a rule that a certain exception no longer needs a manager. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the guide and the classification rule at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same categories. If the exception share fell but handling time rose, the new guide may be adding work without removing decisions. If only one handler improved, the change may not be the cause. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "## Queue design implications",
      "A high exception share is not automatically a staffing problem. It may mean the inbox is collecting work that belongs in a different queue. Split the inbox by request type and route the exceptions to a lane with the right decision owner. A specialist who handles routine work and exceptions at the same time will switch context and slow both.",
      "Use the exception reasons to decide what to automate or document first. A missing record that appears in many items is a data problem. A policy question that repeats is a guide problem. A vendor delay is a follow-up problem. Each cause points to a different owner, and the work mix shows which one deserves the next improvement.",
      "## Reporting to the client",
      "Report the work mix in a form the client can act on: which request types create exceptions, which reasons dominate, and what the team does when the guide runs out. Avoid presenting the numbers as a grade for individual specialists. Use examples with identifying details removed. The client should leave with one change it can approve.",
      "Show the denominator and the exclusions so the client can judge the sample. If the sample is too small to support a conclusion, say so. A cautious report is more useful than a confident one built on a handful of items. Offer to repeat the measurement after the change and name the date.",
      "## Replication and version control",
      "Keep the definitions, the guide version, and the export query with the report. A second analyst should be able to repeat the measurement on a later window and compare the same categories. If the definition changes, publish a new baseline rather than mixing periods. Replication is what turns a one-time review into an operating measure.",
      "Schedule the next measurement before the first report is filed. The date should be far enough away for the change to take effect but close enough to keep attention. Assign the owner who will run it. A protocol that is never repeated becomes a story about the past. Put the date in the same calendar as the queue review so it is not forgotten."
    ],
    "sources": [
      {
        "name": "U.S. Bureau of Labor Statistics, secretaries and administrative assistants",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm"
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
        "name": "U.S. Department of Labor, Wage and Hour Division",
        "url": "https://www.dol.gov/agencies/whd"
      }
    ],
    "related": [
      "what-share-of-vendor-follow-ups-arrive-after-the-promised-date",
      "how-complete-are-escalation-briefs-in-a-distributed-support-team"
    ],
    "cta": "Measure one inbox before splitting the queue."
  },
  {
    "slug": "can-a-knowledge-base-audit-reduce-repeat-questions",
    "title": "Can a knowledge base audit reduce repeat questions?",
    "excerpt": "A before-and-after protocol for testing whether a focused knowledge base audit reduces repeat questions and the time specialists spend searching.",
    "published": "2026-11-07",
    "image": "/daily07/outsourcedlabor/can-a-knowledge-base-audit-reduce-repeat-questions.png",
    "body": [
      "## Research question and scope",
      "This protocol asks whether a focused knowledge base audit reduces repeat questions in a delegated support team. The unit is one question event, identified by the asker, the topic, the channel, and the time it was asked. A repeat question is a question on a topic that the knowledge base already covers. The study measures repeat questions and search time, not the number of pages edited.",
      "Set the scope to one client, one team, and one knowledge base for a fixed baseline and follow-up window. Record the search tool, the page inventory, and the guide version at the start. If the tool or the page structure changes during the study, keep the earlier definition for the full baseline or analyze the change separately. A new search tool can change the result without changing the content.",
      "## Unit and population",
      "Define the population as every question asked by a specialist during the window, including questions sent to a teammate, a manager, or a chat channel. Exclude purely social messages and record the exclusion count. Include questions that were answered by a saved reply if the person still had to ask where the reply lived. Test the unit definition on ten question events before collection begins.",
      "A single conversation can contain several questions on different topics. Split the conversation into question events by topic rather than by message. Record the topic using a short controlled list so the baseline and follow-up can be compared. If a topic does not fit the list, add it with a written definition rather than forcing it into another category.",
      "## Defining a repeat question",
      "Define a repeat question as one whose answer exists in a live knowledge base page at the time it is asked. Define a new question as one with no matching page or with a page that the asker could not find. The distinction matters because a new question may need content, while a repeat question needs findability or trust. Publish one positive and one boundary example for each.",
      "Do not count a question as a repeat just because the topic is familiar to an experienced person. Check whether the page existed, whether it was live, and whether it answered the specific question. If the page was wrong, the question is a content defect rather than a repeat. A second reviewer should be able to classify the question from the page snapshot.",
      "## Evidence standard",
      "For each question event, capture the asker, topic, channel, time, the page that should have answered it, and how the answer was found. Add the search terms used, if any, and whether the page appeared in the first three results. Store the page snapshot with the event so a later edit does not change the evidence. A question without the page snapshot cannot be classified reliably.",
      "Record whether the asker had used the knowledge base before and whether they had received training on the topic. Record the answer source, such as a page, a teammate, or a manager. If the answer came from a teammate, note whether the teammate pointed to the page. A reviewer should be able to follow the path from question to answer without interviewing the asker.",
      "## Baseline measurement",
      "Collect two to four weeks of question events before the audit. Use the same channels and the same classification rules throughout. Report the number of questions, the repeat share, the median search time, and the share answered by a page. Keep the raw events with the summary so the follow-up can use the same definitions.",
      "Do not announce a target during the baseline. A target can change how people report questions, especially if they think a repeat question reflects badly on them. Ask for the raw event, not a judgment. The baseline should describe the current work, not a performance review. Explain why the baseline is being collected so the team reports events rather than impressions.",
      "## The audit intervention",
      "Limit the audit to a defined set of actions: fix the top conflicting pages, add missing search aliases, assign owners, and retire dead pages. Do not rewrite the entire knowledge base during the study. Record each action with the page, the change, the owner, and the date. A focused intervention is easier to connect to a change in the question rate.",
      "Keep the audit separate from any change to the queue rules or the product. If the product changes during the window, note the date and the affected topics. A product change can create new questions that look like a failed audit. The analysis should separate questions about changed topics from questions about stable ones.",
      "## Sampling and comparison",
      "Use the same sampling rule for the baseline and the follow-up. If the baseline uses every question in a two-week window, the follow-up should use every question in a comparable window. If the volume is too high, sample by topic and day rather than by convenience. Record the export date and the filters for both periods.",
      "Compare the same topics and the same channels. A drop in repeat questions on one channel may mean the team moved the conversation elsewhere. A rise in new questions may mean the audit surfaced gaps that were previously hidden. Report both repeat and new questions so the reader can see the whole change.",
      "## Analysis and reporting",
      "Report the repeat share, the median search time, and the share answered by a page for both periods. Show counts beside every percentage and state the exclusions. Break the result down by topic so the owner can see where the audit helped and where it did not. A single overall number can hide a worsening topic.",
      "Compare the change with the audit actions and the product changes. If repeat questions fell only on the pages that were edited, the audit is a plausible cause. If they fell everywhere, the team may have changed its reporting behavior. Do not present a difference as causation without a controlled comparison.",
      "## Limitations and sources of error",
      "The record cannot show questions that were never asked because the person gave up or guessed. It also cannot show the time spent reading a page that was correct but hard to understand. A team may ask fewer questions because it is busier, not because the knowledge base improved. The study measures recorded questions and recorded search time.",
      "Pages can be edited, moved, or deleted during the window, and a snapshot may not capture the version the asker saw. Chat retention may be shorter than the study period. Record those cases and their treatment rather than dropping them. If the person who ran the audit also classified the questions, note the independence limitation.",
      "## Ownership and review cadence",
      "Give every audited page an owner and a review date. The owner confirms the content, not the formatting. Group pages by owner so the review load is visible. A page without an owner will drift again, and the next audit will repeat the same work. The ownership record is part of the intervention, not an administrative extra.",
      "Schedule a light review each quarter and a focused review after any policy or product change. Review the question log at the same time to see which topics are returning. If the same page keeps generating questions, the problem may be findability rather than content. Change the title, the aliases, or the entry point before rewriting the page again.",
      "## Reporting to the client",
      "Report the result in a form the client can act on: which topics improved, which pages still cause questions, and which searches still fail. Avoid presenting the numbers as a grade for the team. Use examples with identifying details removed. The client should leave with one content change and one ownership change it can approve.",
      "Show the denominator and the exclusions so the client can judge the sample. If the sample is too small to support a conclusion, say so. A cautious report is more useful than a confident one built on a few days. Offer to repeat the measurement after the next review and name the date.",
      "## Replication and version control",
      "Keep the definitions, the page inventory, and the export query with the report. A second analyst should be able to repeat the measurement on a later window and compare the same topics. If the definition changes, publish a new baseline rather than mixing periods. Replication is what turns a one-time audit into a learning loop.",
      "Schedule the next measurement before the first report is filed. The date should be far enough away for the content to settle but close enough to keep attention. Assign the owner who will run it. A protocol that is never repeated becomes a story about the past. Put the date in the same calendar as the content review so it is not forgotten."
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, secretaries and administrative assistants",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm"
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals"
      }
    ],
    "related": [
      "how-complete-are-escalation-briefs-in-a-distributed-support-team",
      "how-much-of-a-delegated-inbox-is-exception-work"
    ],
    "cta": "Measure repeat questions before rewriting the knowledge base."
  },
  {
    "slug": "how-complete-are-escalation-briefs-in-a-distributed-support-team",
    "title": "How complete are escalation briefs in a distributed support team?",
    "excerpt": "A scoring protocol for escalation briefs that checks the decision question, facts, impact, options, recommendation, deadline, and fallback.",
    "published": "2026-11-07",
    "image": "/daily07/outsourcedlabor/how-complete-are-escalation-briefs-in-a-distributed-support-team.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how many escalation briefs contain the information an owner needs to decide. The unit is one escalation event, identified by the case, the sender, the receiver, and the time it was sent. A brief is complete when it names the decision, the facts, the customer impact, the options, the recommendation, the deadline, and the fallback. The study measures brief completeness, not the quality of the decision.",
      "Set the scope to one client, one support team, and one escalation channel for a fixed window. Record the template version, the owner group, and the service expectation at the start. If the template or channel changes during the window, keep the earlier definition for the full sample or analyze the change separately. A new template can change the measured rate without changing the underlying habit.",
      "## Unit and population",
      "Define the population as every escalation sent during the window. The unit is the escalation event, not the case, because one case can be escalated more than once. An escalation that is reopened or re-sent remains one unit with a second event. Record each event so the analysis can show whether the second attempt was more complete.",
      "Exclude messages that only notify an owner without asking for a decision, and record the exclusion count. Include escalations sent through chat if that is the channel the team uses. Include escalations that were answered immediately, because a fast answer can hide an incomplete brief. Test the unit definition on five real escalations before collection begins.",
      "## Defining a complete brief",
      "Define the decision question as the specific choice the owner must make. Define the facts as the customer, commitment, current state, and evidence needed to evaluate the choice. Define the impact as what the customer will experience if the owner does nothing. Define the options, recommendation, deadline, and fallback as separate fields. A brief that omits any field is incomplete.",
      "Do not score the brief on length or politeness. A short brief can be complete, and a long one can omit the decision. Use a binary present or absent score for each field, plus a short note for a field that is present but unusable. The binary score keeps two reviewers consistent; the note explains the gray cases.",
      "## Evidence standard",
      "For each escalation, capture the message, the case record, the sender, the receiver, the time, and the response. Add the template version and the channel. Store the brief with the case so the evidence survives a later review. A message without the case record cannot show whether the facts were accurate or whether the owner had context.",
      "Record whether the owner asked a follow-up question and what field it concerned. A follow-up is evidence that a field was missing or unclear even if the brief technically included it. Record whether the sender was available to answer during the decision window. If the reason code is other, require a short note from the scorer.",
      "## Sampling and collection",
      "Draw the sample from the escalation channel rather than from a list of difficult cases. Record the export date, filters, row count, and selection rule. Include every sender and every owner group so the result is not dominated by one person or one busy week. If the channel is ordered by time, a fixed interval spreads the sample across the window.",
      "Collect the brief as it was sent, not as it looks after later edits. If the sender added facts in a follow-up message, record the edit time and score the first version separately. Do not reconstruct a missing field from the owner's reply. Note the collection date separately so the reader can see how much of the record has aged.",
      "## Scoring the brief",
      "Score each of the seven fields as present or absent, then calculate the share of complete briefs and the average number of fields present. Report the fields that are most often missing. A brief with six of seven fields may still be unusable if the missing field is the decision. Show the field-level result, not only the total.",
      "Have a second reviewer score a sample of ten briefs independently and compare the results. Where the two disagree, refine the definition or the example. A scoring rule that cannot survive two reviewers is not ready for a wider sample. Publish the scored examples, with identifying details removed, beside the result.",
      "## Analysis and reporting",
      "Report the number of escalations, the share that were complete, and the field-level completion rate. Break the result down by sender, owner group, and request type. Use the same denominator for every rate and state the exclusions. A percentage without its base is not actionable for the operations owner. Show the field-level table beside the headline rate so the owner can see what to fix.",
      "Compare the completion rate with the template version and the training dates. If completion rose after a template change, the template may be doing the work. If it rose only for one sender, the training or the person may be the cause. Do not present a difference as causation without a controlled comparison.",
      "## Limitations and sources of error",
      "The record cannot show briefs that were never sent because the specialist solved the case alone. It also cannot show a complete brief that the owner ignored. A brief may be complete in the message but rely on a link that later broke. The study measures recorded completeness, not the quality of the eventual decision.",
      "Messages can be edited or deleted, and a decision may happen in a call that leaves no record. A sender may write a better brief when they know the sample is being scored. Record those cases and their treatment rather than dropping them. If the person who wrote the template also scored the briefs, note the independence limitation.",
      "## Review cadence and next action",
      "Give the result to the support lead and the owner group and ask for one observable change. The change might be a required first line, a shorter template, or a rule that the fallback must be pre-approved. Record the owner, the effective date, and the measure that will show whether the change worked. Avoid changing the template and the training at the same time.",
      "Repeat the protocol with the same definitions after the change and compare the same fields. If completeness rose but the number of escalations fell, the team may be solving more cases alone rather than writing better briefs. Ask the owner group to confirm that the same cases still reach them. Close the review when the owner accepts the finding and the next sample is scheduled.",
      "## Training implications",
      "Use the missing fields as training material, not as a general reminder to communicate better. Give each specialist two real briefs, one complete and one incomplete, and ask them to name the missing field. Practice rewriting the first three lines until the decision and impact are clear. The exercise should take fifteen minutes and produce one corrected brief.",
      "Train the owners as well. An owner who answers a vague brief without asking for the decision teaches the team that completeness is optional. Give owners a short response they can use to return an incomplete brief with the missing field named. The standard has to hold on both sides of the escalation.",
      "## Reporting to the client",
      "Report the result in a form the client can act on: which fields are missing most often, which request types produce incomplete briefs, and what the team will change. Avoid presenting the numbers as a grade for individual specialists. Use examples with identifying details removed. The client should leave with one change it can approve.",
      "Show the denominator and the exclusions so the client can judge the sample. If the sample is too small to support a conclusion, say so. A cautious report is more useful than a confident one built on a handful of messages. Offer to repeat the measurement after the change and name the date.",
      "## Replication and version control",
      "Keep the definitions, the template version, and the export query with the report. A second analyst should be able to repeat the measurement on a later window and compare the same fields. If the definition changes, publish a new baseline rather than mixing periods. Replication is what turns a one-time review into an operating measure.",
      "Schedule the next measurement before the first report is filed. The date should be far enough away for the change to take effect but close enough to keep attention. Assign the owner who will run it. A protocol that is never repeated becomes a story about the past. Put the date in the same calendar as the template review so it is not forgotten."
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals"
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm"
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "how-long-do-refund-approvals-wait-in-a-delegated-support-queue",
      "can-a-knowledge-base-audit-reduce-repeat-questions"
    ],
    "cta": "Score ten real escalation briefs before changing the template."
  }
] as const;
