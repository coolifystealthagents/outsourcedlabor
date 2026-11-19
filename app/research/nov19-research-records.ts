export const november19ResearchRecords = [
  {
    "slug": "how-often-do-delegated-queues-pause-without-a-recorded-outage-notice",
    "title": "How often do delegated queues pause without a recorded outage notice?",
    "excerpt": "A protocol for sampling queue pauses, separating a planned hold from an unrecorded stoppage, and timing the resume against the system check.",
    "published": "2026-11-19",
    "image": "/daily19/outsourcedlabor/how-often-do-delegated-queues-pause-without-a-recorded-outage-notice.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a delegated queue pauses without a recorded outage notice. The unit is one pause event for one queue. An unrecorded pause means work stopped or slowed for a system reason and the queue record shows no notice, start time, or scope. The measure describes the visibility of downtime, not the reliability of the platform.",
      "Set the scope to one queue, one client, and a fixed period. Record the systems the queue depends on and the definition of a pause in force. If the definition changes during the period, split the sample at the effective date. A different threshold creates a different denominator.",
      "Keep the measure separate from a missed service level. A recorded pause can still cause a late reply, and an unrecorded pause may have no customer impact. The purpose is to test whether the desk knows when it stopped. Report service performance separately.",
      "State the decision the result will inform before collection begins. The client may use it to justify a status page, a queue banner, or a faster escalation to the system owner. A measure without a decision tends to become an unused report. Write the intended action beside the scope.",
      "Name the report audience and the review date before collection begins. A report for the platform owner may need different detail from a report for the client service lead. Record the audience and the meeting where the result will be discussed. A measure with no scheduled review is easy to postpone indefinitely.",
      "## Population and unit of analysis",
      "Define the population as every pause that affected the queue during the period. Include pauses called by the team, pauses announced by the platform, and pauses inferred from a gap in completions. The unit is the pause event, not the ticket or the hour. One outage that stops three task types is one event when it shares a start time and cause.",
      "Include partial pauses where some tasks continued. Mark the stopped and continuing tasks on the record. Exclude a scheduled maintenance window that was announced in advance and respected by the queue. Report the excluded count so the reader can see the desk's share of unexpected downtime.",
      "Exclude a pause caused only by a single specialist stepping away. That is a staffing event, not a system event. Record it in a separate staffing log if the client tracks coverage. State the exclusion rule before sampling so a second reviewer can apply it the same way.",
      "Decide how to treat a pause that began before the period and continued into it. Count it at the start date if the start is visible, and mark it as carried in. A pause that began without a record is itself a finding. Record the rule in the report so the boundary is clear.",
      "List every queue that shares the same platform before drawing the population. A platform outage can stop three queues at once, and each queue may record it differently. Record the shared dependency and whether the queues are counted together or apart. The choice changes the denominator and must be made once.",
      "## Definitions that make the measure reproducible",
      "Define a recorded pause as a notice with a start time, a scope, a cause, an owner, and a resume decision. Define a partial record as one missing element. Define an unrecorded pause as no notice at all, even when the team later described it in chat. Publish one example of each before sampling.",
      "Define the pause threshold in measurable terms. A queue may count as paused when no task can be completed for fifteen minutes, or when a named system returns an error on save. Avoid a vague rule such as unusually slow. A threshold that two reviewers interpret differently will not reproduce.",
      "Define the resume check as a test transaction completed by a named person after the system owner reports recovery. A resume without a test is a hope, not a control. Record the test reference and the time. The gap between recovery notice and resume test is part of the result.",
      "Decide how to classify a pause with an unknown cause. Keep it as unknown and report it separately rather than assigning a likely reason. An invented cause hides the need for better monitoring. The unknown group is often the most useful part of the report.",
      "Agree how a pause ends before you count duration. A pause may end when the system owner reports recovery, when the first test passes, or when the queue reopens. Record the end definition beside the start definition. Using different ends for different systems makes the duration comparison meaningless.",
      "## Sampling and data collection",
      "Draw the sample from the queue export, the platform status feed, and the team chat for the full period. Record the export date, the filters, and the row count. Do not build the sample from customer complaints alone. A complaint-based sample cannot show the pauses that customers never noticed.",
      "Capture the queue, the start and end time, the cause, the scope, the notice channel, the owner, the resume test, and the customer-facing message. Store the exports with the report. The notice time and the resume test are the core evidence. A record missing either field counts as partial even when the chat thread is complete.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a chat message counts as a notice, the definition is too vague. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent reconciling the queue export with the status feed. A report that requires reading every chat thread will not be repeated. Note the systems that do not keep a status history. The collection cost belongs beside the result.",
      "Keep a small pilot sample of ten pause events before the full collection. Use the pilot to test the definitions and the export fields. Record what was missing and how long each record took. A pilot that takes an hour per event is a warning about the full sample cost.",
      "## Measuring unrecorded pauses",
      "Report the share of pauses with a complete record, a partial record, and no record. Show the counts behind each share. The three groups describe different levels of visibility and should not be collapsed. A single unrecorded rate hides the pause that had a start time but no resume test.",
      "Break the result down by system, shift, and task type. A platform with no status feed may show more unrecorded pauses. A night shift may rely on chat because the system owner is offline. Compare only groups with similar volume and dependency.",
      "Report the median time from the first failed task to the first notice. A long gap means the team is discovering outages through customer reports. Include the median time from notice to resume test. Both numbers describe the response, not only the record.",
      "Report the share of pauses that produced a customer-facing message. A pause can be fully recorded internally and still leave customers without an explanation. Include the message channel and the approval owner. The external silence is a separate risk.",
      "Compare pauses that were announced before the first customer complaint with those announced after. The comparison shows whether the desk is monitoring or reacting. Record the source of the first signal. A team that learns from customers is not monitoring its own queue.",
      "## Limitations and next action",
      "The measure cannot show whether a pause was necessary or whether work could have continued safely. It also cannot show a platform outage that the team worked around without stopping. Treat the result as a measure of recorded visibility. Note the systems and shifts that were not included.",
      "Give the result to the service owner and the platform owner with one change to test. The change might be a queue banner, a required pause form, or a status-feed subscription. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before widening the threshold. A few short pauses with a clear chat notice may explain a large share of partial records. Fix the notice template first if that is the pattern. The goal is a queue that knows when it stopped, not a lower number by definition.",
      "Repeat the measure after the change with the same scope and definitions. Report the before and after counts together, including the sample size. Record any new system or queue that entered the period. A comparison with a changed denominator is not a comparison."
    ],
    "takeaways": [
      "Count pause events, not tickets or lost hours.",
      "Separate complete, partial, and missing pause records.",
      "Measure the gap from first failed task to first notice.",
      "Report customer-facing silence outside the internal record."
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-34 Rev. 1, contingency planning guide",
        "url": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
        "note": "Guidance on continuity, downtime procedures, and recovery testing."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Prioritized practices for service continuity and incident response."
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
      "what-share-of-shift-starts-miss-a-required-system-check",
      "what-share-of-after-hours-escalations-reach-the-named-contact"
    ],
    "cta": "Check the pause log before the next system review."
  },
  {
    "slug": "what-share-of-shared-drive-files-follow-the-agreed-naming-standard",
    "title": "What share of shared drive files follow the agreed naming standard?",
    "excerpt": "A protocol for sampling shared drive files, scoring the name against the written pattern, and separating a real exception from a naming drift.",
    "published": "2026-11-19",
    "image": "/daily19/outsourcedlabor/what-share-of-shared-drive-files-follow-the-agreed-naming-standard.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a shared drive file follows the agreed naming standard. The unit is one file in one folder family. A compliant name matches the written pattern for that family and contains the required fields in the required order. The measure describes naming discipline, not the quality of the file contents.",
      "Set the scope to one drive, one folder family, and a fixed period. Record the naming pattern and the exception list in force. If the pattern changes during the period, split the sample at the effective date. A different pattern creates a different denominator.",
      "Keep the measure separate from a retrieval or duplicate-file count. A well-named file can still be hard to find if the folder structure is poor, and a badly named file can be found by someone who already knows it. The purpose is to test the written standard. Report retrieval separately.",
      "Name the decision the result will support before collection starts. The client may use it to decide whether to retrain, revise the pattern, or migrate a folder. A report that cannot change a decision adds work without value. Write the intended action beside the scope.",
      "Name the folder families that will be excluded before the sample is drawn. A shared drive often holds personal folders, archived projects, and system exports that should not be judged by the current standard. Record the exclusion list and the owner who approved it. An unexplained exclusion looks like cherry-picking.",
      "## Population and unit of analysis",
      "Define the population as every file saved in the selected folder family during the period. Include files created by the client team and files created by the outsourced team. The unit is the file, not the folder. A batch of ten reports is ten units when each file has its own name.",
      "Include files in subfolders and shared links that point to the same drive. Mark the source folder and the creator where the drive records it. Exclude temporary files, lock files, and system-generated exports with a fixed name. Report the excluded count so the denominator is visible.",
      "Exclude a file that was renamed during the period from a noncompliant to a compliant name. Count it at its final state and record that a rename occurred. A migration that fixes names is not the same as a team that follows the pattern at save time. State the rule before sampling.",
      "Decide whether a deleted file counts in the population. A deleted file can still show a naming habit, but it no longer affects retrieval. Exclude it and report the count separately. The rule should be written down so the next reviewer does not reopen the question.",
      "Decide how to treat a file that matches the pattern but uses a nonstandard separator or date format. Score each required field separately and report the format issue as its own category. A single compliant or noncompliant label hides which part of the pattern is hard to follow. Record the sub-scores in the export.",
      "## Definitions that make the measure reproducible",
      "Define the written pattern as the exact field order, separator, and date format published for the folder family. Define a compliant name as one that matches every required field with no extra free text. Define a partial name as one missing a required field or using the wrong order. Publish one example of each before sampling.",
      "Define the required fields by folder family rather than by the whole drive. A support folder may need client, queue, case, and period, while a payroll folder may need client, pay period, and run type. Record the field list beside each family. A universal rule applied to unrelated work produces false failures.",
      "Define an approved exception as a name on the written exception list with an owner and a reason. A name that looks unusual but is not on the list is noncompliant. Record the exception reference. This prevents a reviewer from accepting a familiar name without evidence.",
      "Decide how to handle a file with a personal name in it. Score the naming pattern first, then report the privacy issue separately. Personal data in a filename is a different risk from a missing period field. The two findings need different owners and fixes.",
      "Agree how to score a name that is correct but unreadable because it is very long. Add a length limit to the pattern and report an over-length name as a format issue. Record the limit in characters. A technically complete name that the interface cuts off does not help the reader.",
      "## Sampling and data collection",
      "Draw the sample from the drive inventory export for the full period. Record the export date, the folder filters, and the row count. Do not build the sample from a list of files someone remembers. A memory-based sample overrepresents recent and unusual work.",
      "Capture the file path, the folder family, the creator, the save date, the current name, the required fields found, the missing fields, and any exception reference. Store the inventory export with the report. The name and the folder family are the core evidence. Keep the original export so a reviewer can recompute the score later.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a field is present, the pattern is ambiguous. Rewrite the pattern and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent classifying each file. A report that requires opening every document will not be repeated. Note whether the drive exposes the creator and save date in the export. The collection cost belongs beside the result.",
      "Sample across the whole period rather than the most recent month. A recent-only sample may reflect a migration or a new template instead of the steady habit. Record the date range and the number of files from each week. The spread shows whether the result is stable.",
      "## Measuring naming compliance",
      "Report the share of files with a compliant name, a partial name, and a noncompliant name. Show the counts behind each share. The three groups describe different levels of adherence and should not be collapsed. A single compliance rate hides the file that is missing only one field.",
      "Break the result down by folder family, creator group, and month. A newly migrated folder may show a temporary drop. A client-created folder may follow a different habit. Compare only groups with the same pattern and a similar volume.",
      "Report the most common missing fields and the most common format errors. A missing period field may point to a template that omits it. A separator error may point to a person who learned an older rule. The pattern should lead to one specific fix.",
      "Report the share of files that were renamed after creation. A high rename rate suggests the team knows the standard but saves before applying it. Include the median time to rename. The rename is evidence of a recovery step, not compliance at save time.",
      "Compare the rename rate with the share of files that were never touched after saving. A team with a high rename rate and a low untouched rate may be saving first and checking later. Record both numbers together. The pair describes the workflow better than either measure alone.",
      "## Limitations and next action",
      "The measure cannot show whether a file was easy to find or whether its contents were correct. It also cannot show a file that was renamed outside the drive history. Treat the result as a measure of current names. Note the folder families and export gaps that were not included.",
      "Give the result to the operations owner and the drive owner with one change to test. The change might be a save template, a shorter field list, or a rename step at the end of each shift. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before tightening the pattern. A few legacy folders may explain a large share of partial names. Fix the migration or the exception list first if that is the pattern. The goal is a name the next person can find, not a lower number by definition.",
      "Write a one-page summary with the sample size, the main gap, and one action. Give the action an owner and a review date. Record the next sample date in the same note. A report that ends without a date will be remembered as a complaint rather than a plan."
    ],
    "takeaways": [
      "Count files, not folders or storage size.",
      "Score required fields separately from separators and date formats.",
      "Report approved exceptions beside the compliance rate.",
      "Measure renames after save to see whether the habit or the template is failing."
    ],
    "sources": [
      {
        "name": "ISO 15489-1, information and documentation — records management",
        "url": "https://www.iso.org/standard/62542.html",
        "note": "Principles for records, naming, and reliable retrieval."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "AICPA and CIMA, audit and accounting resources",
        "url": "https://www.aicpa-cima.com/resources",
        "note": "Professional context for supporting records and evidence."
      },
      {
        "name": "International Labour Organization, digital labour platforms",
        "url": "https://www.ilo.org/digital-labour-platforms",
        "note": "Context on remote and digitally mediated work arrangements."
      }
    ],
    "related": [
      "what-share-of-shared-documents-fail-a-redaction-check",
      "how-complete-is-the-holiday-calendar-handoff-between-client-and-provider"
    ],
    "cta": "Sample one folder family before the next drive cleanup."
  },
  {
    "slug": "how-often-does-the-same-reviewer-handle-consecutive-peer-reviews",
    "title": "How often does the same reviewer handle consecutive peer reviews?",
    "excerpt": "A protocol for measuring reviewer concentration, separating a declared conflict from an accidental repeat, and testing the rotation rule.",
    "published": "2026-11-19",
    "image": "/daily19/outsourcedlabor/how-often-does-the-same-reviewer-handle-consecutive-peer-reviews.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often the same reviewer handles consecutive peer reviews in a small quality team. The unit is one review assignment, not one article or one reviewer. A repeat means the same reviewer reviewed two assignments in a row for the same queue, regardless of the writer. The measure describes rotation discipline, not reviewer competence.",
      "Set the scope to one queue, one review type, and a fixed period. Record the rotation rule and the declared conflict list in force. If the rule changes during the period, split the sample at the effective date. A different rule creates a different denominator.",
      "Keep the measure separate from a correction rate. A reviewer can repeat assignments and still catch every issue, or rotate perfectly and miss the same error in each case. The purpose is to test independence and coverage. Report correction quality separately.",
      "Name the decision the result will support before collection starts. The client may use it to add a backup reviewer, change the rotation order, or accept a smaller team. A measure that cannot change the roster or the rule is only a curiosity. Write the intended action beside the scope.",
      "Record the review type and the risk level for each queue before sampling. A queue of routine acknowledgments may not need the same rotation as a queue of money-related replies. Record the risk level beside the queue name. The same repeat rate means different things at different risk levels.",
      "## Population and unit of analysis",
      "Define the population as every peer review assignment completed during the period. Include reviews of customer replies, internal records, and sample audits. The unit is the assignment, not the reviewer or the ticket. A ticket reviewed twice by two people is two assignments.",
      "Include assignments where the reviewer declared a conflict and was replaced. Mark the replacement and the original assignment separately. Exclude a review that was cancelled before any reading began. Report the excluded count and the reason. A cancelled assignment is not evidence of rotation.",
      "Exclude a second review of the same item caused by an appeal. Record the appeal separately and link it to the original. An appeal is a quality escalation, not a routine rotation event. State the exclusion rule before sampling so a second reviewer applies it the same way.",
      "Decide how to treat a reviewer who is the only person trained for a task type. Count the assignment and mark it as a sole-reviewer case. Report those cases separately rather than hiding them inside the repeat rate. The sole-reviewer group shows where the team has no real rotation.",
      "Include reviews done by a team lead or a quality manager in the assignment count. A manager who reviews every hard case is part of the rotation pattern. Record the reviewer role beside the name. Leaving leaders out hides the concentration at the top of the team.",
      "## Definitions that make the measure reproducible",
      "Define a review assignment as a named reviewer, a named writer, a review type, a start time, and a decision. Define a consecutive repeat as two assignments for the same queue with no different reviewer between them. Define a declared conflict as a written note that names the relationship or prior involvement. Publish one example of each.",
      "Define the review queue order by the assignment time, not by the ticket creation time. A reviewer can pick up an old ticket today and still be repeating the last reviewer. Record the assignment time and the ticket age separately. The two orderings answer different questions.",
      "Define independence as no self-review and no review of work the reviewer helped write. A reviewer may still be independent when they share a shift with the writer. Record the specific conflict rather than a general concern. Independence should be judged on evidence, not on discomfort.",
      "Decide how to classify a reviewer who reviews two assignments in a row for different queues. Count the repeat only within the same queue and review type. A small team may legitimately rotate across unrelated work. Report the cross-queue pattern separately if the client wants it.",
      "Agree whether a reviewer who declines an assignment counts in the order. A decline can break a run without any review taking place. Record the decline and the reason in the log. Treating a decline as a review would understate the repeat pattern.",
      "## Sampling and data collection",
      "Draw the sample from the review log and the assignment queue for the full period. Record the export date, the filters, and the row count. Do not build the sample from the reviewers' own notes. A self-reported log tends to omit the hurried assignments.",
      "Capture the assignment identifier, the reviewer, the writer, the queue, the review type, the assignment time, the decision, and any conflict note. Add the ticket age and the reviewer's other assignments that day. Store the export with the report. The reviewer and assignment time are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether two assignments are consecutive, the ordering rule is ambiguous. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent matching the review log to the assignment queue. A report that requires reading every review note will not be repeated. Note the fields the review tool does not capture. The collection cost belongs beside the result.",
      "Collect the reviewer's own assignment list as well as the queue log. A reviewer may pick up work that was never formally assigned through the queue. Record the source of each assignment and the overlap. The two sources together give a more complete picture of concentration.",
      "## Measuring reviewer concentration",
      "Report the share of assignments that follow the same reviewer, a different reviewer, and a sole-reviewer case. Show the counts behind each share. The three groups describe different levels of rotation and should not be collapsed. A single repeat rate hides the queue where no backup exists.",
      "Break the result down by queue, review type, and shift. A night shift may show more repeats because fewer reviewers are online. A complex queue may show repeats because only one person is trained. Compare only groups with a similar volume and skill base.",
      "Report the longest run of consecutive assignments for one reviewer. A single long run is different from scattered repeats across the team. Include the run length and the queue. The distribution shows whether the issue is a roster gap or a scheduling habit.",
      "Report the share of assignments with a declared conflict and the share replaced after the declaration. A low declaration rate may mean the conflict rule is not understood. A high replacement rate may mean the roster is too small. Both numbers belong beside the rotation result.",
      "Report the share of assignments that were reviewed by someone outside the queue's trained group. An outsider may be a manager helping out or a specialist borrowed from another team. Record the role and the reason. The pattern shows whether the rotation depends on informal borrowing.",
      "## Limitations and next action",
      "The measure cannot show whether a reviewer was biased or whether a different reviewer would have caught more. It also cannot show a review performed informally in chat. Treat the result as a measure of recorded assignments. Note the queues and review types that were not included.",
      "Give the result to the quality lead and the operations owner with one change to test. The change might be a named backup, a rotation order, or a conflict prompt in the review form. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before forcing a strict rotation. A few specialist queues may explain a large share of sole-reviewer cases. Train a second reviewer first if that is the pattern. The goal is independent coverage, not a lower repeat number by definition.",
      "Set the next review date and the person who will run it. Include the same queues and review types so the comparison is fair. Record any change to the team or the tool in the note. A follow-up with a different scope cannot show whether the rotation improved."
    ],
    "takeaways": [
      "Count review assignments, not reviewers or tickets.",
      "Order consecutive repeats by assignment time, not ticket age.",
      "Report sole-reviewer cases separately from accidental repeats.",
      "Pair the repeat rate with declared conflicts and replacements."
    ],
    "sources": [
      {
        "name": "ISO 9001, quality management systems",
        "url": "https://www.iso.org/standard/62085.html",
        "note": "Process, review, and continual-improvement requirements."
      },
      {
        "name": "Project Management Institute, standards",
        "url": "https://www.pmi.org/standards",
        "note": "Quality, stakeholder, and change-control standards."
      },
      {
        "name": "U.S. Small Business Administration, manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business",
        "note": "Operating guidance for assigning and managing recurring work."
      },
      {
        "name": "International Labour Organization, digital labour platforms",
        "url": "https://www.ilo.org/digital-labour-platforms",
        "note": "Context on remote and digitally mediated work arrangements."
      }
    ],
    "related": [
      "how-often-does-a-delegated-queue-reopen-a-closed-item",
      "how-much-review-capacity-does-a-delegated-queue-consume"
    ],
    "cta": "Check one review log before changing the rotation."
  },
  {
    "slug": "what-share-of-knowledge-articles-are-past-their-review-date",
    "title": "What share of knowledge articles are past their review date?",
    "excerpt": "A protocol for sampling support articles, separating an overdue review from a stale article, and finding which page types age fastest.",
    "published": "2026-11-19",
    "image": "/daily19/outsourcedlabor/what-share-of-knowledge-articles-are-past-their-review-date.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a knowledge article is past its review date. The unit is one published article in one knowledge base. An overdue article has a recorded review date earlier than the review date and no completed review after that date. The measure describes review discipline, not whether the content is correct.",
      "Set the scope to one knowledge base, one audience, and a fixed period. Record the review interval and the owner rule in force. If the interval changes during the period, split the sample at the effective date. A different interval creates a different denominator.",
      "Keep the measure separate from a repeat-question count. An overdue article may still be accurate, and a current article may still fail to answer the question. The purpose is to test the review calendar. Report repeat questions separately.",
      "Name the decision the result will support before collection starts. The client may use it to add review capacity, change an interval, or retire a page family. A report that only lists overdue pages creates guilt without a choice. Write the intended action beside the scope.",
      "Record the knowledge base and the export format before sampling. A wiki export may include page history, while a help-center export may show only the current state. Note which fields are native and which must be inferred. The tool limits the questions the report can answer.",
      "## Population and unit of analysis",
      "Define the population as every article visible to the support team or the customer during the period. Include articles in the internal wiki and the public help center, and mark the audience. The unit is the article, not the section or the link. A long page with five sections is one unit.",
      "Include articles with no recorded review date. Mark them as undated rather than dropping them from the sample. Exclude drafts that were never published. Report the excluded count and the reason. An undated article is a finding, not a missing row.",
      "Exclude a page that is a redirect to another article. Count the destination once and record the redirect. A redirect is a navigation aid, not a separate knowledge claim. State the exclusion rule before sampling so a second reviewer can apply it the same way.",
      "Decide how to treat a page that was updated but not formally reviewed. Mark it as edited and report it separately from a completed review. An edit may fix a typo while leaving the policy example stale. The two states answer different questions.",
      "Decide whether a page with no traffic stays in the population. A page that no one reads can still be a compliance record, while a high-traffic page carries immediate risk. Record the traffic band and the page type. The reader should see both before judging the overdue count.",
      "## Definitions that make the measure reproducible",
      "Define the review date as the date on the article record, not the date in the page footer. Define a completed review as a decision by the named owner with a date and a result. Define keep, update, redirect, and retire as the four allowed results. Publish one example of each.",
      "Define overdue in whole days from the review date to the sample date. A page due today is not yet overdue. Use the same time zone for every calculation. Record the formula in the report so the count can be reproduced.",
      "Define the owner as the person or role named on the article record. A team inbox is not an owner unless a named person is accountable for the review. Record the owner field and whether it was blank. Owner coverage is part of the result.",
      "Decide how to classify an article whose owner has left the team. Keep it overdue and add an owner-missing category. Do not reset the date because the owner changed. The reassignment is a separate action that should appear in the report.",
      "Agree how to treat an article that is a duplicate of another page. A duplicate may need a merge rather than a review, and its owner may be the same person. Record the duplicate pair and the chosen action. Counting both as independent overdue pages inflates the workload.",
      "## Sampling and data collection",
      "Draw the sample from the knowledge base export for the full period. Record the export date, the audience filter, and the row count. Do not build the sample from pages that received complaints. A complaint-based sample cannot show the quiet pages that are also stale.",
      "Capture the article identifier, the title, the audience, the owner, the last review date, the next review date, the last edit date, and the current status. Add the page type and the traffic band where available. Store the export with the report. The review date and owner are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether an edit counts as a review, the definition is ambiguous. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent matching the export to the page status. A report that requires opening every article will not be repeated. Note the fields the knowledge tool does not expose. The collection cost belongs beside the result.",
      "Sample the page status on the same day as the export. A review completed between the export and the check can make a current page look overdue. Record the export time and the check time. The gap is small but should be documented.",
      "## Measuring overdue reviews",
      "Report the share of articles current, overdue, undated, and missing an owner. Show the counts behind each share. The four groups describe different failures and should not be collapsed. A single overdue rate hides the page that no one owns.",
      "Break the result down by audience, page type, and review interval. A public policy page may age faster than an internal how-to. A quarterly interval may be too long for a pricing page. Compare only groups with a similar change rate.",
      "Report the age of the oldest overdue article and the median days overdue. A single forgotten page is different from a whole family that missed a quarter. Include the page type and the owner status. The distribution shows where the review capacity is failing.",
      "Report the share of overdue articles that were edited without a recorded review. An edit can create false confidence in a page that still carries an old policy. Include the last edit date and the editor where available. The two signals together describe the real risk.",
      "Compare the overdue rate for pages with a named owner against pages without one. A large gap suggests the ownership rule matters more than the review interval. Record both counts and the ownership status. The comparison points to a fix that does not require more reviewing hours.",
      "## Limitations and next action",
      "The measure cannot show whether an article is accurate or whether readers found it useful. It also cannot show a review completed outside the knowledge tool. Treat the result as a measure of recorded review. Note the bases and page types that were not included.",
      "Give the result to the support lead and the content owner with one change to test. The change might be a shorter interval for policy pages, a monthly review block, or an owner reassignment rule. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before shortening every interval. A few stable how-to pages may not need the same cadence as pricing or policy. Fix the page-type rule first if that is the pattern. The goal is a page a reader can trust, not a lower overdue number by definition.",
      "Schedule the next measurement for the same week in the following quarter. Keep the page types and audience filter unchanged so the comparison is fair. Record any change in the review tool or the owner rule. A trend built from different definitions is not a trend."
    ],
    "takeaways": [
      "Count articles, not sections or links.",
      "Report undated and ownerless pages beside the overdue rate.",
      "Split results by page type and audience before changing intervals.",
      "Track edits without review as a separate risk signal."
    ],
    "sources": [
      {
        "name": "ISO 9001, quality management systems",
        "url": "https://www.iso.org/standard/62085.html",
        "note": "Documented information and review requirements."
      },
      {
        "name": "ISO 15489-1, information and documentation — records management",
        "url": "https://www.iso.org/standard/62542.html",
        "note": "Principles for retaining, reviewing, and disposing of records."
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
      "can-a-knowledge-base-audit-reduce-repeat-questions",
      "audit-a-shared-knowledge-base-before-it-slows-a-support-team"
    ],
    "cta": "Check the knowledge review calendar before the next content sprint."
  },
  {
    "slug": "how-often-do-customer-address-changes-bypass-a-second-verification",
    "title": "How often do customer address changes bypass a second verification?",
    "excerpt": "A protocol for sampling address change records, separating a verified change from a same-channel confirmation, and linking the gap to shipment edits.",
    "published": "2026-11-19",
    "image": "/daily19/outsourcedlabor/how-often-do-customer-address-changes-bypass-a-second-verification.png",
    "body": [
      "## Research question and scope",
      "This protocol measures how often a customer address change is completed without a second verification. The unit is one address change request tied to one account. A bypass means the record shows no confirmation through a separate channel before the change took effect. The measure describes the verification control, not the intent of the customer.",
      "Set the scope to one order desk, one account system, and a fixed period. Record the approved verification methods and the change policy in force. If the policy changes during the period, split the sample at the effective date. A different method creates a different denominator.",
      "Keep the measure separate from a fraud loss count. A change can be verified and still be part of a scheme, and an unverified change may be entirely legitimate. The purpose is to test the control before a loss occurs. Report fraud outcomes separately.",
      "Name the decision the result will support before collection starts. The client may use it to add a callback step, restrict same-thread confirmation, or require a hold on open shipments. A report without a decision leaves the desk with the same risk. Write the intended action beside the scope.",
      "Record whether the account is consumer or business before sampling. A business account may have an authorized contact who can confirm a change, while a consumer account usually needs the holder. Record the account type and the authority rule. Mixing the two rates hides where the control actually fails.",
      "## Population and unit of analysis",
      "Define the population as every address change request that reached the desk during the period. Include changes made by phone, chat, email, and the customer portal. The unit is the request, not the order or the customer. A customer who changes a billing and a shipping address in one request is one unit when the change is recorded together.",
      "Include requests that were refused and requests that were later reverted. Mark the outcome on each record. Exclude a change made by the client's own finance team through a system that does not use the desk. Report the excluded count so the desk's share is visible.",
      "Exclude a duplicate request for the same account and address within the same session. Link it to the original and count it once. Duplicate handling is a separate efficiency measure. State the exclusion rule before sampling so a second reviewer applies it the same way.",
      "Decide how to treat a change that only corrects a postal code typo. Include it but mark it as a minor correction. A minor correction may still redirect a parcel, but it carries a different risk from a full street change. Report the two groups separately.",
      "Decide whether a change made at the customer's request during a return is in scope. A return address is not the same as a delivery address, and the authority may sit with a different team. Record the case type and the team that handled it. The exclusion should be written before the sample, not after a difficult case appears.",
      "## Definitions that make the measure reproducible",
      "Define a second verification as a confirmation through a channel different from the one that carried the request, with the person and time recorded. Define a partial verification as a same-channel reply or an unrecorded callback. Define a bypass as no second verification before the change took effect. Publish one example of each.",
      "Define the change effective time as the moment the account or order record was saved with the new address. A verification completed after that time does not protect the change. Record both times. The gap between them is part of the result.",
      "Define the approved channels in writing, such as a callback to the number on file or a code sent to the verified contact. A reply in the same email thread is not a separate channel. Record the channel used and the reference. This rule is the core of the measure.",
      "Define what counts as a completed second check. A call that rings out is not a confirmation, and a voicemail is not a conversation. Record the outcome as confirmed, attempted, or unavailable. A failed attempt is different from a check that never happened.",
      "Decide how to classify a change requested by a third party, such as a gift recipient or a reseller. Keep it in the sample and mark the requester type. A third-party request has a different authority question and should not be merged into the customer rate. Report the third-party share beside the main result so the reader can judge the mix.",
      "## Sampling and data collection",
      "Draw the sample from the change log, the order system, and the contact queue for the full period. Record the export date, the filters, and the row count. Do not build the sample from fraud alerts alone. An alert-based sample cannot show the changes that were never flagged.",
      "Capture the request identifier, the account, the requester, the channel, the requested address, the effective time, the verification method, the confirming person, and the shipment state. Add the order edit reference where one exists. Store the exports with the report. The verification field and the effective time are the core evidence.",
      "Check a small overlap sample with a second reviewer. If the reviewers disagree about whether a same-thread reply counts as a second channel, the definition is too vague. Rewrite the rule and retest before the full sample. Agreement matters more than sample size.",
      "Record the time spent matching change records to order edits. A report that requires reading every chat thread will not be repeated. Note the fields the order system does not capture. The collection cost belongs beside the result.",
      "Take a small pilot sample from two channels before the full draw. A phone change and a portal change may require different evidence and different export fields. Record the pilot size and what was missing. The pilot prevents a full sample from discovering a missing field at the end.",
      "## Measuring bypassed verification",
      "Report the share of changes with a complete verification, a partial verification, and a bypass. Show the counts behind each share. The three groups describe different levels of control and should not be collapsed. A single bypass rate hides the change that had a same-channel reply.",
      "Break the result down by channel, requester type, and shift. A portal change may carry its own login check, while a phone request may rely on a callback. A night shift may lack the person who can approve a hold. Compare only groups with a similar method and volume.",
      "Report the share of bypassed changes that affected an open shipment. A change to a future order is different from a change that reroutes a parcel already in transit. Include the carrier intercept cost where one was incurred. The shipment link shows where the risk becomes money.",
      "Report the share of changes that were reverted within thirty days. A revert may signal a mistake, a fraud attempt, or a customer who changed their mind. Include the reason where recorded. The revert rate belongs beside the bypass count, not in place of it.",
      "Report the time between the address change and the first customer contact about it. A quick contact may mean the confirmation message was unclear, while a late contact may mean the parcel arrived at the wrong place. Record the median and the longest gap. The timing helps separate a communication issue from a control failure.",
      "## Limitations and next action",
      "The measure cannot show whether a change was fraudulent or whether a customer understood the check. It also cannot show a verification completed in a system that the desk does not record. Treat the result as a measure of the recorded control. Note the channels and account types that were not included.",
      "Give the result to the order desk owner and the account security owner with one change to test. The change might be a required callback field, a hold on open shipments, or a same-channel block. Record the effective date and repeat the measure with the same definitions. A controlled change is easier to judge.",
      "Review the boundary cases before tightening every channel. A few business accounts with a named authorized contact may explain a large share of partial records. Fix the authority rule first if that is the pattern. The goal is a verified change before the parcel moves, not a lower bypass number by definition.",
      "Set the next measurement date and keep the same channels and account types. Record any change to the verification method in the note. Compare the bypass rate and the shipment-edit rate together. A drop in one without the other may mean the recording improved rather than the control."
    ],
    "takeaways": [
      "Count address change requests, not orders or customers.",
      "Require a channel different from the one that carried the request.",
      "Compare the verification time with the effective time, not the close time.",
      "Link bypassed changes to open shipments and later reverts."
    ],
    "sources": [
      {
        "name": "NIST Special Publication 800-63B, digital identity guidelines",
        "url": "https://pages.nist.gov/800-63-3/sp800-63b.html",
        "note": "Guidance on identity proofing, authentication, and account recovery."
      },
      {
        "name": "CISA Cybersecurity Performance Goals",
        "url": "https://www.cisa.gov/cybersecurity-performance-goals",
        "note": "Prioritized security practices for access and account controls."
      },
      {
        "name": "U.S. Federal Trade Commission, data breach response",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/data-breach-response",
        "note": "Business guidance on protecting customer account information."
      },
      {
        "name": "U.S. Bureau of Labor Statistics, customer service representatives",
        "url": "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm",
        "note": "Occupational context for delegated support and dispatch work."
      }
    ],
    "related": [
      "what-share-of-shipped-orders-lack-a-matching-delivery-proof",
      "what-share-of-replacement-orders-lack-a-recorded-reason"
    ],
    "cta": "Sample an address change log before the next account review."
  }
] as const;
