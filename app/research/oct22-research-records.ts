export const october22ResearchRecords=[
  {
    "slug": "assignment-end-access-removal-lag",
    "title": "Assignment End to Access Removal Lag",
    "excerpt": "A protocol for measuring the interval between an assignment end and the removal of system access.",
    "published": "2026-10-22",
    "image": "/october-22-2026/assignment-end-access-removal-lag.svg",
    "body": [
      "## Research question and scope",
      "How long after an assignment ends does the worker still have access to client systems? The purpose is a repeatable description of the record, not a performance score. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about assignment end access removal in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "## Population and unit of analysis",
      "Assignments ending in a defined quarter, including voluntary exits, client removals, and transfers.",
      "The unit is one assignment and one access account. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "## Definitions that make the measure reproducible",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as days from end date to access removal, accounts still active after seven days, and shared credentials rotated. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "## Evidence standard and data dictionary",
      "Each case needs the assignment end date, the access list, the removal log, the equipment return, and the client confirmation. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "## Sampling and collection",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "## Reviewer independence and agreement",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "## What the evidence can support",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support an offboarding checklist, a weekly access review, and a client notification standard.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not decide whether the worker should have been removed earlier for cause. Keep those limits in the finding rather than in a closing footnote.",
      "## Limitations and sources of error",
      "A client may remove access without telling the workforce team.",
      "A shared account may not identify the individual. A transfer may keep a legitimate account active under a new assignment. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "## Sensitivity and alternative explanations",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "## Privacy, access, and retention",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "NIST access control and internal control guidance frames the measure. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "## Operational interpretation and reporting",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "## Effort and practical constraints",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "## A calibration case",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the assignment end date, the access list, and the removal log and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "## Reporting package and reopening conditions",
      "Publish the case flow, the definitions, days from end date to access removal, accounts still active after seven days, and shared credentials rotated, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "## Interpreting a small sample",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "## Governance and stopping conditions",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "SBA manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "credential-expiry-tracking-completeness",
      "timekeeping-exception-ownership"
    ],
    "cta": "Turn one protocol into a bounded workforce review before delegating live volume.",
    "service": {
      "href": "/services/operations-support",
      "heading": "Test the control before scaling the role",
      "body": "Define the population, evidence, owner decisions, and stop rules first.",
      "label": "Workforce operations support"
    },
    "headlineStat": "How long after an assignment ends does the worker still have access to client systems?",
    "keyStats": [
      "days from end date to access removal",
      "accounts still active after seven days",
      "shared credentials rotated"
    ],
    "takeaways": [
      "The protocol does not decide whether the worker should have been removed earlier for cause.",
      "A client may remove access without telling the workforce team."
    ],
    "faqs": [
      {
        "q": "Who owns the decision?",
        "a": "The the workforce operations manager owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "Start with the governing record and the date observed, then add the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ]
  },
  {
    "slug": "credential-expiry-tracking-completeness",
    "title": "Credential Expiry Tracking Completeness",
    "excerpt": "A protocol for testing whether credential records include the requirement, evidence, expiry, and assignment link.",
    "published": "2026-10-22",
    "image": "/october-22-2026/credential-expiry-tracking-completeness.svg",
    "body": [
      "## Research question and scope",
      "What share of required credentials have a verified record and an expiry date linked to the assignment? The measure is only useful if a second reviewer can reproduce it from the same files. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about credential tracking in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "## Population and unit of analysis",
      "Workers assigned to restricted tasks in a defined quarter.",
      "The unit is one credential for one worker. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "## Definitions that make the measure reproducible",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as credentials with a verified record, credentials expiring within 30 days, and assignments with a missing link. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "## Evidence standard and data dictionary",
      "Each case needs the requirement, the certificate, the issuing body, the expiry date, the assignment record, and the renewal request. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "## Sampling and collection",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "## Reviewer independence and agreement",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "## What the evidence can support",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a credential matrix, a renewal calendar, and an assignment block rule.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not determine whether a credential is sufficient for a regulated task. Keep those limits in the finding rather than in a closing footnote.",
      "## Limitations and sources of error",
      "A card copy may be expired or altered.",
      "A requirement may differ by site even for the same task. A renewal receipt may be accepted before the new card arrives. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "## Sensitivity and alternative explanations",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "## Privacy, access, and retention",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "OSHA and DOL recordkeeping guidance frames the evidence question. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "## Operational interpretation and reporting",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "## Effort and practical constraints",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "## A calibration case",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the requirement, the certificate, and the issuing body and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "## Reporting package and reopening conditions",
      "Publish the case flow, the definitions, credentials with a verified record, credentials expiring within 30 days, and assignments with a missing link, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "## Interpreting a small sample",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "## Governance and stopping conditions",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ],
    "sources": [
      {
        "name": "OSHA recordkeeping",
        "url": "https://www.osha.gov/recordkeeping"
      },
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      }
    ],
    "related": [
      "timekeeping-exception-ownership",
      "overtime-approval-consistency"
    ],
    "cta": "Turn one protocol into a bounded workforce review before delegating live volume.",
    "service": {
      "href": "/services/operations-support",
      "heading": "Test the control before scaling the role",
      "body": "Define the population, evidence, owner decisions, and stop rules first.",
      "label": "Workforce operations support"
    },
    "headlineStat": "What share of required credentials have a verified record and an expiry date linked to the assignment?",
    "keyStats": [
      "credentials with a verified record",
      "credentials expiring within 30 days",
      "assignments with a missing link"
    ],
    "takeaways": [
      "The protocol does not determine whether a credential is sufficient for a regulated task.",
      "A card copy may be expired or altered."
    ],
    "faqs": [
      {
        "q": "Who owns the decision?",
        "a": "The the workforce operations manager owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "Start with the governing record and the date observed, then add the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ]
  },
  {
    "slug": "timekeeping-exception-ownership",
    "title": "Timekeeping Exception Ownership and Resolution",
    "excerpt": "A protocol for testing whether timekeeping exceptions have a named owner and a correction that reaches payroll.",
    "published": "2026-10-22",
    "image": "/october-22-2026/timekeeping-exception-ownership.svg",
    "body": [
      "## Research question and scope",
      "What share of timekeeping exceptions have an owner, evidence, and a correction confirmed in payroll? The measure is only useful if a second reviewer can reproduce it from the same files. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about timekeeping exceptions in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "## Population and unit of analysis",
      "Exceptions raised in a defined pay period, including missing punches, schedule mismatches, and overtime.",
      "The unit is one exception on one time record. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "## Definitions that make the measure reproducible",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as exceptions with an owner, corrections confirmed in payroll, and exceptions reopened next period. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "## Evidence standard and data dictionary",
      "Each case needs the time record, the schedule, the supervisor note, the correction, and the payroll file. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "## Sampling and collection",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "## Reviewer independence and agreement",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "## What the evidence can support",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a cutoff checklist, an owner map, and a payroll reconciliation.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not decide whether the pay rule is lawful or whether the worker was treated fairly. Keep those limits in the finding rather than in a closing footnote.",
      "## Limitations and sources of error",
      "A correction may be overwritten by the next system sync.",
      "An exception may be closed with a note but no payroll change. A pay period boundary can split one event into two records. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "## Sensitivity and alternative explanations",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "## Privacy, access, and retention",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "DOL recordkeeping and IRS employment tax guidance frame the record expectation. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "## Operational interpretation and reporting",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "## Effort and practical constraints",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "## A calibration case",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the time record, the schedule, and the supervisor note and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "## Reporting package and reopening conditions",
      "Publish the case flow, the definitions, exceptions with an owner, corrections confirmed in payroll, and exceptions reopened next period, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "## Interpreting a small sample",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "## Governance and stopping conditions",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "IRS employment tax recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping"
      },
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      }
    ],
    "related": [
      "overtime-approval-consistency",
      "roster-change-propagation"
    ],
    "cta": "Turn one protocol into a bounded workforce review before delegating live volume.",
    "service": {
      "href": "/services/operations-support",
      "heading": "Test the control before scaling the role",
      "body": "Define the population, evidence, owner decisions, and stop rules first.",
      "label": "Workforce operations support"
    },
    "headlineStat": "What share of timekeeping exceptions have an owner, evidence, and a correction confirmed in payroll?",
    "keyStats": [
      "exceptions with an owner",
      "corrections confirmed in payroll",
      "exceptions reopened next period"
    ],
    "takeaways": [
      "The protocol does not decide whether the pay rule is lawful or whether the worker was treated fairly.",
      "A correction may be overwritten by the next system sync."
    ],
    "faqs": [
      {
        "q": "Who owns the decision?",
        "a": "The the workforce operations manager owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "Start with the governing record and the date observed, then add the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ]
  },
  {
    "slug": "overtime-approval-consistency",
    "title": "Overtime Approval Evidence Consistency",
    "excerpt": "A protocol for testing whether overtime approvals have the same evidence and timing across supervisors.",
    "published": "2026-10-22",
    "image": "/october-22-2026/overtime-approval-consistency.svg",
    "body": [
      "## Research question and scope",
      "Do overtime records across supervisors include a reason, an approval, and a payroll match at the same rate? The purpose is a repeatable description of the record, not a performance score. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about overtime approvals in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "## Population and unit of analysis",
      "Overtime records in a defined quarter across sites and supervisors.",
      "The unit is one overtime entry. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "## Definitions that make the measure reproducible",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as entries with a recorded reason, approvals before the shift, and payroll matches. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "## Evidence standard and data dictionary",
      "Each case needs the time entry, the shift need, the approval, the client authorization, and the payroll record. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "## Sampling and collection",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "## Reviewer independence and agreement",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "## What the evidence can support",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a supervisor checklist, a client billing review, and a payroll audit sample.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not decide whether the overtime was legally required or billable. Keep those limits in the finding rather than in a closing footnote.",
      "## Limitations and sources of error",
      "An approval may be given verbally and recorded later.",
      "A client may authorize overtime under a different rule. A supervisor may approve overtime for work that was not actually performed. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "## Sensitivity and alternative explanations",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "## Privacy, access, and retention",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "DOL and IRS guidance frames the time and payroll record question. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "## Operational interpretation and reporting",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "## Effort and practical constraints",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "## A calibration case",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the time entry, the shift need, and the approval and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "## Reporting package and reopening conditions",
      "Publish the case flow, the definitions, entries with a recorded reason, approvals before the shift, and payroll matches, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "## Interpreting a small sample",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "## Governance and stopping conditions",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "IRS employment tax recordkeeping",
        "url": "https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-recordkeeping"
      },
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "EEOC recordkeeping requirements",
        "url": "https://www.eeoc.gov/employers/recordkeeping-requirements"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      }
    ],
    "related": [
      "roster-change-propagation",
      "assignment-end-access-removal-lag"
    ],
    "cta": "Turn one protocol into a bounded workforce review before delegating live volume.",
    "service": {
      "href": "/services/operations-support",
      "heading": "Test the control before scaling the role",
      "body": "Define the population, evidence, owner decisions, and stop rules first.",
      "label": "Workforce operations support"
    },
    "headlineStat": "Do overtime records across supervisors include a reason, an approval, and a payroll match at the same rate?",
    "keyStats": [
      "entries with a recorded reason",
      "approvals before the shift",
      "payroll matches"
    ],
    "takeaways": [
      "The protocol does not decide whether the overtime was legally required or billable.",
      "An approval may be given verbally and recorded later."
    ],
    "faqs": [
      {
        "q": "Who owns the decision?",
        "a": "The the workforce operations manager owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "Start with the governing record and the date observed, then add the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ]
  },
  {
    "slug": "roster-change-propagation",
    "title": "Roster Change Propagation Across Systems",
    "excerpt": "A protocol for testing whether a roster change reaches the internal schedule, the client portal, and the worker.",
    "published": "2026-10-22",
    "image": "/october-22-2026/roster-change-propagation.svg",
    "body": [
      "## Research question and scope",
      "After a roster change, how many systems and people still show the prior assignment? The purpose is a repeatable description of the record, not a performance score. The scope is the operational record held by the team, not the legal, financial, or clinical conclusion that may follow from it.",
      "The study is deliberately narrow. It asks what the record can show about roster changes in a defined population, during a defined window, using a stated evidence standard. It does not estimate an industry rate or claim that one staffing model performs better than another.",
      "## Population and unit of analysis",
      "Roster changes made in a defined month, including shift swaps, transfers, and coverage changes.",
      "The unit is one roster change. Keeping the unit explicit prevents a team from counting linked events as independent cases. Record the opening count, additions, withdrawals, resolutions, and unresolved items at the end of the window so the denominator can be reconstructed.",
      "## Definitions that make the measure reproducible",
      "Write down the start event, the stop event, the pause rule, and the treatment of missing evidence before looking at results. Define the measures as systems updated by the effective date, worker acknowledgments, and coverage gaps after the change. A measure without a stated denominator or observation window is not yet a measure.",
      "Use the same definitions for every case. If a definition changes during the review, keep the earlier classification and apply the new rule only to later cases. A protocol that quietly rewrites its own definitions cannot support a comparison.",
      "## Evidence standard and data dictionary",
      "Each case needs the change request, the approval, the internal roster, the client portal, and the worker notification. Record the source, the observation time, the field it supports, and the reviewer. Mark missing, unavailable, and confirmed negative values separately; they mean different things and should not be collapsed into one blank.",
      "Use a pseudonymous case key. Keep the crosswalk between the key and the customer or worker identity in an approved system with restricted access. The analysis file should carry only the fields needed for the question.",
      "## Sampling and collection",
      "Select cases from the frozen population using a written rule. Include ordinary cases, exceptions, and cases that were reopened or withdrawn. Add a small random sample so the review does not depend only on the items someone remembered.",
      "Collect on a fixed cadence and preserve the source version observed at that time. A later export can overwrite a value that was present during the review. If the team must use a later export, record the difference rather than replacing the original observation.",
      "## Reviewer independence and agreement",
      "Have two reviewers classify the same cases independently before discussing them. Compare the first classifications and group the differences by cause: missing evidence, ambiguous definition, authority question, or calculation error.",
      "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow the agreement check with a completeness check on the items both reviewers marked as supported. A disagreement is useful evidence about the record, not a personal failure.",
      "## What the evidence can support",
      "The evidence can show whether the required fields are present, whether the source is current, whether an owner is named, and where the record is thin. It can show how a queue behaves in the reviewed window. Those findings can support a change checklist, a system inventory, and a coverage review.",
      "It cannot show that a customer will receive a particular outcome, that a regulator will agree, or that a change in staffing caused a result. The protocol does not decide whether the staffing level is adequate. Keep those limits in the finding rather than in a closing footnote.",
      "## Limitations and sources of error",
      "A client portal may update on a delay.",
      "A worker may see the change only in a chat message. A change can create a gap that is filled informally and never recorded. A single window may not represent another month, and a convenience sample may not represent the queue. Report the window, the volume, the mix, and the exclusions beside the result.",
      "## Sensitivity and alternative explanations",
      "Repeat the main count under at least two reasonable alternatives: a different pause rule and a different treatment of unresolved cases. If the direction changes, the finding is fragile and should be reported as such.",
      "Name the plausible alternatives instead of choosing the most convenient one. A busier period, a system migration, a changed approval rule, or a different client mix can all explain a shift without any change in the quality of the work.",
      "## Privacy, access, and retention",
      "Collect the minimum fields required. Use named accounts, role-based access, masked identifiers, and an approved working location. Log who accessed the file and set a disposal date before the review begins.",
      "GAO internal control and NIST access guidance frame the propagation question. The cited public sources frame records management, internal control, privacy, and security practice. They do not provide a result for this sample and do not replace legal or compliance review.",
      "## Operational interpretation and reporting",
      "Publish the case flow, the definitions, the counts, the unresolved items, the disagreement summary, and the limits together. A reader should be able to tell which statements are observations, which are calculations, and which are owner judgments.",
      "Use the result to test one change, such as a required source field or a named owner at handoff. Recheck the same measure on a later window. If the change does not move the measure, the likely cause is upstream in the source or the rule, not in the reporting.",
      "## Effort and practical constraints",
      "A review of this kind fits in a short cycle when the files are accessible: roughly one day to freeze the population and definitions, one to pull and mask the sample, and two to review and reconcile. The expensive step is usually locating evidence across systems, not the analysis.",
      "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem in its own right. Keep the scope small enough to finish, and write down what was excluded so the next reviewer can extend it deliberately.",
      "## A calibration case",
      "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers independently reconstruct the change request, the approval, and the internal roster and record their classifications before discussion. The protocol owner compares the first judgments and records why any difference arose.",
      "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If the reviewers need different documents to reach the same code, the record is ambiguous and the data dictionary should be revised before the main review begins.",
      "## Reporting package and reopening conditions",
      "Publish the case flow, the definitions, systems updated by the effective date, worker acknowledgments, and coverage gaps after the change, the unresolved count, the disagreement summary, and the limitations together. A reader should be able to see which numbers are observations, which are calculations, and which are owner judgments.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client or patient mix, or a material shift in volume. Name the next review date and the owner who will decide whether the finding still applies. A protocol without a reopening condition becomes an old opinion dressed as data.",
      "## Interpreting a small sample",
      "A small review is useful for finding where the record breaks, not for ranking teams or estimating a population rate. Report the number of cases, the number of fields checked, and the number of unresolved items. A count of five missing fields in twenty cases is easier to act on than a percentage with no denominator.",
      "If the sample is too small to support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix. It should not be a general claim about the quality of the team, the vendor, or the client relationship.",
      "## Governance and stopping conditions",
      "Name the protocol owner, the data custodian, the operational owner, and the reviewer who can pause the study. Pause on unauthorised disclosure, a source that cannot be verified, or a request to change the sample after results are known.",
      "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material shift in volume. The brief is complete when the next reviewer can repeat the method without asking the original author what was meant."
    ],
    "sources": [
      {
        "name": "GAO Standards for Internal Control",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "DOL recordkeeping fact sheet",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "name": "National Archives records management",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "name": "SBA manage your business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "assignment-end-access-removal-lag",
      "credential-expiry-tracking-completeness"
    ],
    "cta": "Turn one protocol into a bounded workforce review before delegating live volume.",
    "service": {
      "href": "/services/operations-support",
      "heading": "Test the control before scaling the role",
      "body": "Define the population, evidence, owner decisions, and stop rules first.",
      "label": "Workforce operations support"
    },
    "headlineStat": "After a roster change, how many systems and people still show the prior assignment?",
    "keyStats": [
      "systems updated by the effective date",
      "worker acknowledgments",
      "coverage gaps after the change"
    ],
    "takeaways": [
      "The protocol does not decide whether the staffing level is adequate.",
      "A client portal may update on a delay."
    ],
    "faqs": [
      {
        "q": "Who owns the decision?",
        "a": "The the workforce operations manager owns the decision. The specialist prepares evidence and records the source."
      },
      {
        "q": "What is the first evidence to collect?",
        "a": "Start with the governing record and the date observed, then add the approval and the destination evidence."
      },
      {
        "q": "What would reopen the finding?",
        "a": "A system, policy, population, or volume change that affects the measured record."
      }
    ]
  }
] as const;
