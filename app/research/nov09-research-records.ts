export const november09ResearchRecords = [
  {
    "slug": "how-often-does-a-delegated-queue-reopen-a-closed-item",
    "title": "How often does a delegated queue reopen a closed item?",
    "excerpt": "A protocol for measuring reopened cases, separating a true reopening from a new request, and tracing the cause to the first closure.",
    "published": "2026-11-09",
    "image": "/daily09/outsourcedlabor/how-often-does-a-delegated-queue-reopen-a-closed-item.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a closed item in a delegated queue is reopened. The unit is one closed record that returns to an open state for the same issue. A new request from the same customer is not a reopening unless it concerns the same record and outcome. The measure describes closure durability, not the quality of the original decision.",
      "Set the scope to one queue, one work type, and a fixed observation window after closure. Record the closure definition and the reopening window, such as thirty days. If the window changes, the result is not comparable. A longer window will usually show more reopenings.",
      "Keep the observation separate from a performance review. The purpose is to find process gaps, not to rank specialists. A neutral framing makes it easier for the team to report a reopening honestly. State the observation window in the report.",
      "Record whether the customer or the team initiated the reopening. A customer reopening may indicate an unclear answer, while a team reopening may indicate a quality issue. The two causes need different follow-up. Separate them in the data.",
      "Record whether the reopening happened within the same shift or after a handoff. A same-shift reopening may be a quick correction, while a later reopening may be a missed issue. The timing changes the interpretation. Report it with the share.",
      "## Population and unit of analysis",
      "Define the population as every record closed during the window. The unit is the record, not the message, because one record can generate several follow-up messages. Count a record once even if it is reopened more than once, and note the number of repeat reopenings separately. A record with two reopenings is still one record.",
      "Exclude records that were closed by the customer before the team acted, and count them separately. Include records that were reopened by the team for an internal correction. An internal reopening is still a closure that did not hold. Record who reopened the record and why.",
      "Record the original closure date, the reopening date, and the issue. The time between the two is part of the measure. A reopening after one day is different from one after three weeks. Report the distribution, not only the share.",
      "Include records that were closed by an automated rule as well as by a person. An automated closure can miss a condition that a person would have caught. Record the closure method. A rule-based closure needs its own review.",
      "Include records that were reopened and closed again during the window. A second closure is part of the durability story. Count the record once but note the number of closures. A record that closes twice may need a different fix.",
      "## Definitions that make the measure reproducible",
      "Define a reopening as a return to an open state for the same issue within the observation window. Define a new request as a different issue, even when it comes from the same customer. Apply the same rule to every record and publish two boundary examples. A second reviewer should reach the same classification.",
      "Decide whether a record reopened for a missing attachment counts. If the attachment was part of the original closure, the closure did not hold. If the customer later sends a new document for a new purpose, it may be a new request. Write the choice into the method and apply it consistently.",
      "Record the closure note and the reopening reason. A closure note that says done without a summary makes the cause hard to find. The reviewer should be able to see what the customer was told. A clear note is part of the evidence.",
      "Write the reopening reason list before reading the sample. Use no more than six reasons and test them on ten records. A reason that does not fit should go to an other category with a short note. A consistent list makes the pattern visible.",
      "Check whether the closure note names the customer's next step. A note that ends with done gives the next person nothing to verify. A clear next step is easier to test. Include note quality in a small subsample.",
      "## Sampling and data collection",
      "Draw the sample from the queue export rather than a list of complaints. Record the export date, the filters, and the row count. Include records from every owner and every work type so the result is not dominated by one person. If the population is small, review every closed record.",
      "Match the reopening to the original record using the record identifier, not the customer name. A name may be duplicated or misspelled. If the system does not link the two, use the customer and the issue with a manual check. Report the match rate and keep unmatched cases in an exception list.",
      "Capture the closure note, the reopening message, the time between, and the person who handled each step. Add the customer's stated reason if one is available. Store the evidence with the record so the classification can be checked. A number without the records cannot be audited.",
      "Record the time from closure to reopening in business hours and state the calendar. A reopening after two business days means something different from one after two weeks. The calendar should match the queue's operating hours. Publish it with the result.",
      "Record the owner who closed the record and the owner who reopened it. A pattern across owners may reflect a shared rule rather than an individual habit. Report the pattern without naming people unless the team agrees. The process is the focus.",
      "## Measuring reopening frequency",
      "Report the share of closed records reopened at least once, the share reopened more than once, and the median time to reopening. A high single-reopening share may be normal in a complex service, while a high repeat share suggests a closure process that is not resolving the issue. Show both. Report the count of records behind each share so the reader can judge the base.",
      "Break the result down by work type, owner, and closure note type. A work type with a high share may need a clearer closing script. An owner with a high share may need a different review, but do not report names without the team's agreement. The pattern matters more than the individual.",
      "Report the reasons for reopening using a short list, such as incomplete answer, wrong information, missing document, or customer changed their mind. A reason list that is too long will not be applied consistently. Test the list on ten records before the full sample. Keep the reason list stable across the comparison period.",
      "Show the reopening share for records closed with a summary note and those closed without one. A summary may improve durability, but it may also reflect a more careful owner. The comparison is a useful starting point, not proof of cause. Report it with the counts.",
      "## Analysis, limitations, and next action",
      "The record cannot show a customer who gave up instead of reopening. It also cannot show a reopening that happened in a private channel and was never logged. Treat the result as a lower bound on closure failure. Note the channels that were not included.",
      "Give the result to the queue owner and the team with one change to test. The change might be a closing checklist, a required summary, or a second review for a high-risk work type. Record the effective date and repeat the measure with the same window. A controlled change is easier to evaluate.",
      "Review the closure notes in the next sample and check whether the change improved the summary. If reopenings fell but the notes became longer without becoming clearer, the fix may be cosmetic. Look at both the rate and the note quality. A durable closure is the goal.",
      "Set the next observation date before the review ends. A measure that is not repeated becomes a one-time story. Use the same window and definitions. Put the date in the operations calendar so it is not forgotten.",
      "Record the next review date and the person who will run it. A measure that is repeated by a different analyst is a stronger test of the definition. Put the date in the operations calendar. The second observation should use the same closure and reopening rules, and it should note any process change that happened in between so the comparison stays honest."
    ],
    "takeaways": [
      "Define a reopening by the same record and the same issue.",
      "Separate a new request from a reopened case.",
      "Measure the time between closure and reopening.",
      "Trace the cause to the closure note, not only the new message."
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
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "what-share-of-support-records-lack-a-named-owner",
      "how-much-of-an-owner-report-is-copied-from-the-queue"
    ],
    "cta": "Measure one queue before changing the closure script."
  },
  {
    "slug": "what-share-of-support-records-lack-a-named-owner",
    "title": "What share of support records lack a named owner?",
    "excerpt": "A protocol for counting unowned records, separating a shared queue from an owner, and finding where ownership disappears.",
    "published": "2026-11-09",
    "image": "/daily09/outsourcedlabor/what-share-of-support-records-lack-a-named-owner.png",
    "body": [
      "## Research question and scope",
      "This protocol measures the share of open support records that have no named owner at a fixed observation time. The unit is one open record. An owner is one person who is accountable for the next action, not a team name or a shared inbox. The measure describes the ownership gap, not the workload of the people who do have records.",
      "Set the scope to one queue, one client, and one observation window. Record the queue definition and the field used to store the owner. If the field changes during the window, keep the earlier definition for the full sample. A new assignment rule can change the share without changing the work.",
      "Keep the observation separate from a staffing review. The purpose is to find where ownership disappears. A neutral description makes it easier for the team to accept the finding. State the observation time and the system used.",
      "Record the queue's assignment rule at the time of the observation. A rule that assigns to a team rather than a person will produce a high unowned share. The rule is part of the context, not an excuse. State it in the report.",
      "Record whether the queue has a default owner for new records. A default owner can hide a gap by assigning everything to one person. Check the load as well as the share. An owner who is assigned everything is not a real control.",
      "## Population and unit of analysis",
      "Define the population as every record that was open at the observation time, including records that arrived before the window. The unit is the record, not the message. A record with several messages and no owner is one unowned record. A record with a team name in the owner field is also unowned under this definition.",
      "Exclude records that are closed but awaiting an administrative step, and count them separately. Include records that are waiting on a customer if a named person is still responsible. A waiting record without an owner is more serious than a waiting record with one. Record the state and the owner together.",
      "Record the intake source, the work type, and the date the record was created. These fields help explain where ownership is lost. A record created by a web form may enter without an owner, while a record created by phone may be assigned at intake. The difference is a process clue.",
      "Include records that were created by an integration or an automated form. An integration may not set an owner even when a human queue would. Record the source and compare it with manual intake. The difference often points to a configuration fix.",
      "Include records that are assigned to a person who is on leave or has changed roles. Record the availability separately. A name without availability is only partial coverage. The distinction matters for the next action.",
      "## Definitions that make the measure reproducible",
      "Define an owner as a single person who can state the next action and the date. A team name, a role, or a shared inbox does not count. A record with two names counts as owned only if one is clearly primary. Publish two examples so a second reviewer can apply the rule the same way.",
      "Decide how to treat a record that is assigned to a person on leave. It is owned, but the owner cannot act. Record a separate flag for availability so the reader can see the difference. A record with an unavailable owner may need a backup, not a new assignment.",
      "Record the last ownership change and the person who made it. A record that lost its owner during a handoff is a different problem from one that never had an owner. The history helps the owner choose the fix. Capture it when the system allows.",
      "Decide whether a record assigned to a person who has left the company counts as owned. It has a name but no available owner. Record it as a separate category. The distinction prevents a false sense of coverage.",
      "Check whether the owner field is free text or a fixed list. A free-text field can contain a team name, a misspelling, or an old employee. A fixed list is easier to measure. Recommend a list if the field is free text.",
      "## Sampling and data collection",
      "Draw the sample from the queue export at a fixed time, not from a list of escalations. Record the export time, the filters, and the row count. Include every owner group and work type so the result is not dominated by one lane. If the population is small, review every open record.",
      "Capture the record identifier, state, owner field, intake source, work type, and age. Add the last message and the last assignment event. Store the export with the report so the observation can be repeated. A share without the records cannot be checked.",
      "Check a small overlap sample with a second reviewer. If the two reviewers disagree on whether a record is owned, the definition is too vague. Rewrite the definition and retest before the full sample. A clear rule is more important than a large sample.",
      "Record the last assignment event and the time. A record that was never assigned is different from one that lost its owner at a handoff. The history helps the owner choose the fix. Capture it when the system keeps an audit trail.",
      "Record the time since the last ownership change. A record that has been unowned for a long time is a different risk from one that just arrived. Report the age distribution. The oldest records are the first to review.",
      "## Measuring the ownership gap",
      "Report the share of open records with no named owner, then break it down by intake source, work type, and age. A gap concentrated in one intake source may be a form or routing problem. A gap that grows with age may be a handoff problem. Compare like with like and state the denominator.",
      "Also report the share of records assigned to an unavailable owner. A record with a name but no available person is not truly covered. Show the two shares side by side. The owner can then see whether the problem is assignment or coverage.",
      "Report the oldest unowned record and the reason it has no owner. One example is easier to discuss than a long list. If the same reason appears several times, name the pattern. A single case can point to a missing default owner.",
      "Report the share of unowned records that are also past their lane threshold. An unowned record that is still new is less urgent than one that is already late. The combination shows where the risk is concentrated. Show the two measures together.",
      "## Limitations and next action",
      "The record cannot show work that was done without an assignment, such as a quick reply from a shared inbox. It also cannot show a record that was owned in a private chat but not in the system. Treat the result as a measure of the system record. Note the channels that were not included.",
      "Give the result to the queue owner and the intake owner together. Ask for one change, such as a default owner at intake or a required assignment before a record can leave the queue. Record the date and repeat the observation with the same definition. A small change can close a large gap.",
      "Review the ownership field itself. If it allows a team name, the gap will return. A field that requires a person is easier to measure. A short validation rule at intake is often more effective than a weekly cleanup.",
      "Ask the intake team which step is most likely to skip the owner field. A form that allows a blank field will be left blank under pressure. A required field or a default owner can close the gap. Test the fix on one intake channel first.",
      "Check the owner field after the fix to confirm that it now requires a person. A rule that is written but not enforced by the system will drift back. Test a few new records from each intake source. Record the result and the date of the check so the next review starts from evidence rather than a promise."
    ],
    "takeaways": [
      "An owner is one named person, not a shared inbox.",
      "Count unowned records at a fixed observation time.",
      "Break the gap down by intake source and work type.",
      "Trace ownership loss to the handoff, not only the queue."
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
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "how-often-does-a-delegated-queue-reopen-a-closed-item",
      "how-many-backup-assignments-are-untested-before-a-leave"
    ],
    "cta": "Count one queue before changing the assignment rule."
  },
  {
    "slug": "how-much-of-an-owner-report-is-copied-from-the-queue",
    "title": "How much of an owner report is copied from the queue?",
    "excerpt": "A protocol for measuring how much of a weekly report repeats queue data and how much adds interpretation the owner can use.",
    "published": "2026-11-09",
    "image": "/daily09/outsourcedlabor/how-much-of-an-owner-report-is-copied-from-the-queue.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how much of a weekly owner report is copied from the queue rather than interpreted for the owner. The unit is one report line or table row. A copied line repeats a queue field without adding context. An interpreted line explains what changed and what decision it supports. The measure describes report efficiency, not the quality of the underlying work.",
      "Set the scope to one team, one report format, and a fixed number of weekly reports. Record the report template and the queue fields available at the start. If the template changes during the window, keep the earlier version or split the sample. A new template can change the copied share without improving the report.",
      "Keep the review separate from a judgment of the writer. The purpose is to make the report shorter and more useful. A neutral framing makes it easier to remove fields that nobody uses. State the template version in the report.",
      "Record whether the report was written by a person or generated from a template. A generated report may copy more by design. A hand-written report may add interpretation but vary by writer. Note the method with the sample.",
      "Record whether the report has a fixed template or is written from scratch. A fixed template may encourage copying, while a blank page may produce a long narrative. Note the format. The design shapes the content.",
      "## Population and unit of analysis",
      "Define the population as every line and table row in the selected reports. The unit is the line, not the report, because one report can mix copied and interpreted content. A line that repeats a queue count with no comparison is copied. A line that compares this week with last week is summarized or interpreted.",
      "Exclude headings, page numbers, and the signature block from the count. Include footnotes if they carry a caveat or a decision. A long footnote that explains a number is part of the interpretation. Record the exclusion rule so the count is reproducible.",
      "Record whether the line led to a decision, a question, or no response in the following meeting. The response is the best evidence of value. A copied line can still lead to a decision, but it is less likely. Compare the two groups.",
      "Count a table row as one line even when it contains several numbers. A row that repeats a queue count is still one copied line. A row that compares two periods is summarized. Keep the unit consistent across reports.",
      "Include the appendix in the count if it repeats queue data. An appendix is often where copied tables accumulate. A report can look short on the first page and long in the appendix. Count the whole document.",
      "## Definitions that make the measure reproducible",
      "Define a copied line as a direct repetition of a queue field without comparison or explanation. Define a summarized line as a count or trend with a short comparison. Define an interpreted line as a statement of what changed, why, and what it means for the owner. Publish one example of each.",
      "Define a decision line as a line that names a choice or an approval the owner must make. A line that only describes the week is not a decision line. A report can have no decision line, and that is a finding. Count it explicitly rather than inferring one.",
      "Apply the same definitions to every report and use a second reviewer on a small overlap sample. If the reviewers disagree, the distinction between summarized and interpreted is probably too fine. Simplify the categories before continuing. A clear rule is more useful than a detailed one.",
      "Define a decision line as a line that asks for an approval, a choice, or a change in scope. A line that requests information is a question, not a decision. Count the two separately. A report full of questions may still be useful but it is not decision-ready.",
      "Check whether the report repeats the same number in several places. Repetition adds length without adding information. Count a repeated number once and note the duplication. A shorter report is easier to read.",
      "## Sampling and data collection",
      "Select consecutive weekly reports rather than the best examples. Record the report date, the writer, and the template version. Include reports from busy and quiet weeks so the result is not skewed. If the team has several report formats, treat each as a separate sample.",
      "Capture each line as text, its classification, and the meeting response. Add the length of the report and the number of decisions. Store the reports with the classification so the count can be checked. A number without the source reports is not auditable.",
      "Ask the owner after the sample which lines they remember and which they skip. The answer is a useful check on the classification. A line classified as interpreted but never read may not be valuable. Record the owner's comments separately from the line count.",
      "Ask the owner to mark the lines they used in the meeting. A line that was read but not used is different from one that changed a decision. The mark is a simple value check. Use it to test the classification.",
      "Ask the owner how long the report takes to read. A report that takes twenty minutes will be skimmed. A five-minute report is more likely to be used. Record the reading time as context.",
      "## Measuring copied share and decision value",
      "Report the share of lines that are copied, summarized, or interpreted. Also report the share of reports with at least one decision line. A report can be long and mostly copied while still containing one useful decision. Show both the composition and the decision value.",
      "Compare report length with the number of decisions and the owner's response. A longer report with no additional decision is a candidate for trimming. A short report with a clear decision is the target. Use counts as well as shares when the sample is small.",
      "Break the result down by writer and by week. A writer with a high copied share may be following the template rather than choosing the content. A busy week may produce more copying because there is less time to interpret. The pattern suggests a template or workload fix.",
      "Compare the copied share in a busy week with a quiet week. A busy week may produce more copying because there is less time to interpret. If the pattern holds, the fix may be a shorter template rather than more training. Report the comparison.",
      "## Limitations and next action",
      "The classification cannot capture the value of a copied line that the owner happens to need that week. It also cannot capture a decision that was made outside the meeting. Treat the result as a guide to report design, not as a complete measure of value. Note the meetings that were not observed.",
      "Give the finding to the report writer and the owner together. Remove one copied field and add one interpretation line. Test the new format for a month and repeat the classification. A shorter report that leads to one decision is a better outcome than a complete report that is ignored.",
      "Review the template after the test and keep the fields that changed a decision. A report format should earn its length. The goal is not a perfect classification but a habit of asking what the owner will do differently after reading. Remove a field that never changed a decision.",
      "Remove one copied field and add one interpretation line in a trial report. Ask the owner whether the trial was more useful. A small experiment is more convincing than a debate about report design. Record the result and the date.",
      "Keep the trial report beside the old report for one month. A side-by-side comparison makes it easier to see what was gained and what was lost. Ask the owner which version they would keep. Record the answer and the reason so the next template change starts from a real preference.",
      "Ask the owner to circle one line that changed their thinking. A line that changed a decision is worth keeping, even if it is copied. A line that was never read is a candidate for removal. Use the circles to guide the next template."
    ],
    "takeaways": [
      "Classify each report line as copied, summarized, or interpreted.",
      "Measure the share of lines that led to a decision.",
      "Compare report length with decision value.",
      "Remove copied fields before adding new ones."
    ],
    "sources": [
      {
        "name": "U.S. Bureau of Labor Statistics, management analysts",
        "url": "https://www.bls.gov/ooh/business-and-financial/management-analysts.htm"
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
      "design-a-weekly-owner-report-for-a-delegated-work-lane",
      "how-often-does-a-delegated-queue-reopen-a-closed-item"
    ],
    "cta": "Classify one month of reports before redesigning the template."
  },
  {
    "slug": "measuring-first-week-time-to-independence-for-new-operations-hires",
    "title": "Measuring first-week time to independence for new operations hires",
    "excerpt": "A protocol for measuring how quickly a new hire handles a lane without help, using observed cases instead of self-report.",
    "published": "2026-11-09",
    "image": "/daily09/outsourcedlabor/measuring-first-week-time-to-independence-for-new-operations-hires.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how quickly a new operations hire can handle one lane without help. The unit is one observed case handled during the first week. Independence means the case was completed correctly without a question, a correction, or a takeover. The measure describes the onboarding plan, not the person's potential.",
      "Set the scope to one role, one lane, and one onboarding cohort or hire. Record the training materials, the daily review, and the access granted at the start. If the plan changes during the week, keep the earlier version for the sample or treat the change as a new period. A new guide can change the result.",
      "Keep the measure separate from a performance rating. A slow first week may reflect a complex lane or an incomplete guide. A neutral framing makes it easier for the coach to improve the plan. State the lane and the complexity in the report.",
      "Record the new hire's prior experience with the tool and the work type. A person with relevant experience may reach independence faster for reasons unrelated to the onboarding plan. Note the background as context. Do not use it to excuse a missing guide.",
      "Record the coach's available hours during the first week. A hire with a full-time coach may reach independence faster than one with a shared coach. The support level is part of the context. Report it beside the result.",
      "## Population and unit of analysis",
      "Define the population as every case handled by the new hire during the first week. The unit is the case, not the day. A hire can handle several cases in one day and none on another. Include cases that were corrected before the customer saw them. A corrected case is not independent.",
      "Exclude training cases that were handled jointly with the coach. Count them separately as practice. Include the first real case even if it was simple, because the first real case is the start of the clock. Record the case type and the time.",
      "Record whether the hire asked for help, received a correction, or needed a takeover. The type of help matters more than the count. A question about a tool is different from a question about the decision rule. Separate the two in the data.",
      "Include cases that were handled with a written guide but no live help. A person who can follow the guide is partially independent. Record the guide use separately from a question to a colleague. The distinction shows whether the guide is working.",
      "Include the new hire's questions that were answered by the written guide as a separate category. A guide that answers questions is working. A guide that is never opened may be too long or hard to find. Note the use.",
      "## Definitions that make the measure reproducible",
      "Define independence as a case that met the quality check without help or correction. Define partial independence as a case completed with a question but no correction. Define dependent as a case that needed a correction or a takeover. Publish one example of each and apply the same rule to every case.",
      "Define the start of the clock as the first real case, not the first day of training. The first day may be all orientation. The measure should reflect the work, not the calendar. Record the date and time of the first real case.",
      "Set the quality check before the observation. Use the same fields and the same reviewer as the normal quality sample. Do not invent a special standard for the new hire. A consistent check makes the result comparable with later weeks.",
      "Define a correction as a change to the output after the case was completed. Define a takeover as the coach finishing the case. The two are different levels of dependence. Count them separately so the result is not flattened.",
      "Define a quality check that covers the output and the customer message. A case can be technically correct but poorly communicated. Use the same check as the normal sample. A narrow check may overstate independence.",
      "## Sampling and data collection",
      "Observe every real case in the first week if the volume is small. If the volume is large, select a fixed interval and note the rule. Record the case, the help type, the outcome, and the time. Do not rely on the hire's memory at the end of the week.",
      "Ask the coach to log each help event as it happens. A short form with three fields is enough: case, type, and reason. A log written later will miss the small questions. The coach should not have to write a paragraph for each event.",
      "Check a sample of cases against the quality record. A case marked independent should pass the same check as any other case. If the two records disagree, the definition is unclear. Fix the definition before the next observation.",
      "Collect the help events during the week, not after it. A daily log is more accurate than a weekly recall. Ask the coach to record the reason in a few words. A short log is enough to see the pattern.",
      "Record the time of day when the independent case happened. A case handled at the end of a long day may be a different test from one handled fresh. The context is useful. Report it with the case.",
      "## Measuring time to independence",
      "Report the number of cases handled, the share independent, the share partial, and the share dependent. Add the day of the first independent case. A hire who reaches independence on day three is on a different path from one who reaches it on day five. Show the day, not only the share.",
      "Break the result down by case type and help reason. A lane with many tool questions may need a better tool guide. A lane with decision questions may need a clearer rule. The pattern tells the coach where to invest the next training hour.",
      "Compare only lanes with similar complexity and similar volume. A simple lane will always look faster. If the lanes differ, report them separately. A single average across all lanes can mislead the onboarding plan.",
      "Report the first independent case by day and by case type. A hire may be independent on a simple case but not on a complex one. The case type matters. Show both so the reader does not overgeneralize.",
      "## Limitations and next action",
      "The measure cannot show how much the hire learned after the first week or how they will perform under pressure. It also cannot show the coach's time, which is a real cost. Note the coaching hours in the report. A fast independence may have required a lot of support.",
      "Give the result to the coach and the hiring owner with one change to the plan. The change might be an extra example, a shorter guide, or a different first case. Record the date and repeat the observation with the next hire. A small change to the first week can improve the whole ramp.",
      "Review the measure after two hires and check whether the definition still fits the lane. A lane that changes its tools or rules may need a new baseline. Keep the definition stable within a comparison. The goal is a better onboarding plan, not a faster number.",
      "Compare the result with the next hire only if the lane and the guide are the same. A change in either makes the comparison weak. If the plan changed, treat the next hire as a new baseline. State the change in the report.",
      "Write the onboarding changes into the one-page guide before the next hire. A finding that stays in a report will not change the first week. Ask the coach to confirm the change and the date. A short, tested guide is more useful than a longer report about the last hire.",
      "Record the first case the hire handled after the observation week. A hire who remains independent in the second week is a stronger result than one who needed help again. A short follow-up at day ten adds context to the first-week number. Record the result with the same quality check as the first week."
    ],
    "takeaways": [
      "Define independence as a correct case handled without help.",
      "Measure from the first real case, not the first training day.",
      "Record the type of help requested.",
      "Compare lanes with the same complexity."
    ],
    "sources": [
      {
        "name": "U.S. Bureau of Labor Statistics, training and development specialists",
        "url": "https://www.bls.gov/ooh/business-and-financial/training-and-development-specialists.htm"
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
      "write-a-first-week-plan-for-a-new-philippines-operations-hire",
      "how-many-backup-assignments-are-untested-before-a-leave"
    ],
    "cta": "Observe one hire for a week before changing the training plan."
  },
  {
    "slug": "how-many-backup-assignments-are-untested-before-a-leave",
    "title": "How many backup assignments are untested before a leave?",
    "excerpt": "A protocol for checking whether named backups have actually handled the lane before the primary goes on leave.",
    "published": "2026-11-09",
    "image": "/daily09/outsourcedlabor/how-many-backup-assignments-are-untested-before-a-leave.png",
    "body": [
      "## Research question and scope",
      "This protocol measures the share of backup assignments that have not been tested before a planned leave. The unit is one lane backup assignment for one leave. Tested means the backup has handled at least one real case in the lane with the primary available. The measure describes coverage readiness, not the backup's general ability.",
      "Set the scope to one team, one leave calendar, and a fixed period. Record the lane list, the backup names, and the leave dates. If a lane has more than one backup, count the primary backup and note the second separately. A list with several untested names is not stronger than one tested name.",
      "Keep the review separate from a performance judgment. The purpose is to find a gap before the leave, not to grade the backup. A neutral framing makes it easier for the team to report an untested assignment. State the leave and the lane in the report.",
      "Record whether the leave was planned more than two weeks in advance. A short-notice leave may not allow a test, which changes the interpretation. Note the lead time. The same untested assignment is more concerning when there was time to prepare.",
      "Record whether the lane changed since the last test. A lane that added a tool or a rule may need a new test even if the backup passed before. The change date matters. A recent test on an old process is weak evidence.",
      "## Population and unit of analysis",
      "Define the population as every planned leave in the period that has a named backup for at least one lane. The unit is the lane assignment, not the person, because one person may back up several lanes. A backup tested in one lane is not automatically tested in another. Count each lane separately.",
      "Exclude unplanned absences from the main measure and report them separately. An unplanned absence rarely allows a test, but the coverage gap is still relevant. Include planned leaves with no named backup as a separate failure. The two failures need different fixes.",
      "Record the practice date, the case type, and the help the backup received. A practice that was only a shadowing session is different from a case handled independently. Define the minimum test before collecting the data. A clear minimum prevents a generous interpretation.",
      "Include lanes with no named backup as a separate failure. A lane with no name is worse than a lane with an untested name, but both need attention. Report the two counts. The owner can then choose the first fix.",
      "Include the backup's other commitments during the leave. A person who is backing up three lanes at once may not be available. The load is part of coverage. Report the number of lanes per backup.",
      "## Definitions that make the measure reproducible",
      "Define a tested backup as a person who handled at least one real case in the lane in the previous ninety days with the primary reachable. Define a shadowed backup as a person who observed but did not handle a case. Define an untested backup as a name with neither. Publish one example of each.",
      "Decide whether a case handled during a previous leave counts as a test. It should count if the person completed the case and the quality check passed. A case handled under pressure without support may be even better evidence. Record the context so the reader can judge.",
      "Define the quality check used for the test. Use the same check as the normal sample. A test that is not checked is only an activity. Record the result and any correction. The quality check turns the test into evidence.",
      "Define a recent test as one within the last ninety days. A test from a year ago may not reflect the current process. Use the same window for every lane. A recent test is stronger evidence.",
      "Check whether the test case was a typical case or an easy one. An easy case may not show the gaps. Use a case with one ordinary complication. Record the case type so the reader can judge.",
      "## Sampling and data collection",
      "Collect the leave calendar and the lane list before the leave begins. Match each lane to a named backup and to the practice record. If the practice record is missing, mark the assignment untested rather than assuming it happened. A missing record is a finding.",
      "Interview the primary and the backup separately for a small sample. Ask what the backup handled and what they had to ask. The two answers may differ. Record the difference rather than resolving it. A gap in perception is useful information.",
      "Capture the lane, the leave dates, the backup name, the practice date, the case type, and the quality result. Store the data with the leave record. A count without the dates cannot show whether the test was recent. Recency matters for a fast-changing lane.",
      "Ask the backup whether they felt ready, not only whether they passed the test. A person who passed but felt unsure may need another practice. The self-report is context, not proof. Record it beside the quality result.",
      "Record the time the backup would have to respond to an urgent item during the leave. A backup who is only available in the evening may not cover a morning queue. The hours are part of the plan. Report them with the assignment.",
      "## Measuring untested coverage",
      "Report the share of lane assignments with a tested backup, a shadowed backup, or no test. Also report the share of leaves with no named backup at all. The two measures show different risks. A leave can have a name and still have no coverage.",
      "Break the result down by lane and by backup. A lane with a high untested share may need a scheduled practice. A backup with several untested lanes may be over-assigned. Compare only lanes with similar complexity and volume.",
      "Report the age of the last test. A test from a year ago may not reflect the current process. Show the median age and the oldest test. A recent test is stronger evidence than an old one, even if both are recorded as tested.",
      "Report the share of lanes with a tested backup and the share of leaves fully covered. A leave may have one tested lane and one untested lane. The second measure shows the full risk. Show both. Report the count of records behind each share so the reader can judge the base.",
      "## Limitations and next action",
      "The measure cannot show how the backup will perform under a real deadline or an unusual case. It also cannot show the primary's willingness to let go. Note any observed handoff friction. A tested backup can still fail if the primary does not share the state.",
      "Give the result to the team lead and the lane owners before the next leave. Schedule one practice for the highest-risk untested lane. Record the date and repeat the review after the leave. A short practice is cheaper than a failed handoff.",
      "Keep the backup list current and remove names that no longer work in the lane. A stale name creates false confidence. Review the list at a fixed interval and after any role change. A small, tested list is better than a long, untested one.",
      "Schedule the practice for the highest-risk untested lane before the next leave. Record the date and the result. A practice that is scheduled is more likely to happen than a general reminder. Review the list after the leave.",
      "Add the backup test to the leave request checklist so it is scheduled at the same time as the time off. A separate reminder is easy to postpone. The checklist should name the lane, the backup, and the test date. A small process change keeps the list from becoming a document nobody uses.",
      "Ask the primary to confirm that the backup has access on the first morning. A test that happened weeks earlier may not cover a changed password or a new queue. A quick access check on the day is a small but useful safeguard. Add the access check to the leave checklist."
    ],
    "takeaways": [
      "Count a backup only if the person has handled a real case.",
      "Measure the practice date and the help received.",
      "Separate a name on a list from tested coverage.",
      "Review the list before the leave, not after."
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
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "related": [
      "create-a-backup-coverage-list-for-a-distributed-support-team",
      "measuring-first-week-time-to-independence-for-new-operations-hires"
    ],
    "cta": "Check the next leave calendar before the primary departs."
  }
] as const;
