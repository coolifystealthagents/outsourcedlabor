import {Header,Footer,CTA,JsonLd} from './components';
import {oct22BlogPosts} from './oct22-records';

const site='https://outsourcedlabor.com';
const published='2026-10-22';
const visible='Published October 22, 2026';

const articles={
  "shift-coverage-handoff-record": {
    "title": "Record Shift Coverage Handoffs That Actually Transfer",
    "excerpt": "A handoff record for open tasks, exceptions, and safety notes when coverage changes mid-shift.",
    "image": "/october-22-2026/shift-coverage-handoff-record.svg",
    "sections": [
      {
        "heading": "Why shift coverage handoffs needs its own control",
        "paragraphs": [
          "A worker calls out two hours before the shift. Coverage is arranged, but the handoff is a photo of a handwritten note with three tasks and no owner. Record Shift Coverage Handoffs That Actually Transfer turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. The incoming worker knows what is open, what is urgent, and who owns the next action.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The work is judged by what a second reviewer can reconstruct. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the shift coverage handoffs. In a typical case the reviewer needs the shift and coverage window, the open task list with owners, the exceptions and safety notes, the client or site contact, the equipment status, and the handoff acknowledgment. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The supervisor arranges coverage; the outgoing worker records the handoff; the incoming worker accepts it; the manager decides any schedule change. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The incoming worker starts without knowing an open safety note.",
          "The handoff lists tasks but not who was waiting on them. The acknowledgment is missing, so no one knows whether the handoff was received. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Use a standard handoff template with open, urgent, and waiting items.",
          "Second, Record the owner and the next action for every open item.",
          "Third, Require an acknowledgment from the incoming worker.",
          "Fourth, Carry unresolved items into the next shift."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If a safety item cannot be handed over in person, call the incoming worker and record the call before the shift starts. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track handoffs acknowledged before shift start, items carried across shifts, and safety notes without an owner. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "An open equipment fault is recorded with the site contact and a temporary workaround. The incoming worker acknowledges the note and confirms the workaround before starting. The fault is carried to the maintenance queue.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The shift log shows the handoff time, the acknowledgment, and the open items that remain. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "workforce operations support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "timekeeping-exception-review": {
    "title": "Review Timekeeping Exceptions Before Payroll Cutoff",
    "excerpt": "A cutoff review that separates missing punches, schedule mismatches, and approval gaps before payroll runs.",
    "image": "/october-22-2026/timekeeping-exception-review.svg",
    "sections": [
      {
        "heading": "Why timekeeping exceptions needs its own control",
        "paragraphs": [
          "The timekeeping report shows missing punches and a shift that is two hours longer than scheduled. The cutoff is tomorrow, and the supervisor is unavailable. Review Timekeeping Exceptions Before Payroll Cutoff turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. Every exception has a reason and an owner before the payroll file is locked.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The point is not to make the queue look tidy. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the timekeeping exceptions. In a typical case the reviewer needs the timekeeping record, the schedule and shift assignment, the supervisor note, the correction request, the approval record, and the payroll cutoff time. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The supervisor approves time corrections; payroll applies the approved record; the workforce manager resolves policy exceptions. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "A missing punch is filled with the scheduled time without evidence.",
          "A long shift is paid without checking the approved overtime. A correction is made after the payroll file is locked and never reaches the pay run. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Group exceptions by type and owner before the cutoff.",
          "Second, Require evidence for every manual correction.",
          "Third, Route overtime to the approving supervisor.",
          "Fourth, Confirm the correction appears in the payroll file."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the supervisor cannot approve before the cutoff, record the item as pending and agree the next payroll treatment rather than guessing. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track exceptions at cutoff by type, manual corrections without evidence, and corrections missing from payroll. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A missing punch is supported by the site log and the supervisor note. The supervisor approves the correction, and payroll confirms the hours appear in the file before the lock.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The cutoff note lists pending corrections, the owner, and the expected payroll period. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "timekeeping support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "worker-credential-expiry-tracker": {
    "title": "Track Worker Credential Expiry Before Assignment",
    "excerpt": "A credential tracker that links the requirement, the evidence, the expiry, and the assignment restriction.",
    "image": "/october-22-2026/worker-credential-expiry-tracker.svg",
    "sections": [
      {
        "heading": "Why worker credentials needs its own control",
        "paragraphs": [
          "A worker's safety credential expires in two weeks. The assignment schedule already includes the worker on a restricted site next month. Track Worker Credential Expiry Before Assignment turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. No worker is assigned to a task that requires a credential they no longer hold.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. A clean status is not the same as a controlled record. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the worker credentials. In a typical case the reviewer needs the credential and issuing body, the certificate or card, the expiry date, the task requirement, the assignment record, and the renewal request. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The workforce manager confirms the requirement; the worker provides the evidence; the site owner accepts the credential. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The expiry date is recorded but no one checks it against the schedule.",
          "A copy of the card is accepted without verifying the issuing body. The worker is removed from the schedule but the client is not told. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Map each credential to the tasks that require it.",
          "Second, Record the expiry date and set a reminder before it lapses.",
          "Third, Verify the credential with the issuing body or approved registry.",
          "Fourth, Block or reassign the worker before the expiry date."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If a renewal is delayed, remove the worker from the restricted assignment and record the client notification. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track credentials expiring in 30 days, assignments with a missing credential, and renewals completed before expiry. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The safety card expires before a restricted assignment. The manager reassigns the worker to a non-restricted task and asks for the renewal receipt. The client is told about the coverage change.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The assignment record shows the credential status and the replacement coverage. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "workforce compliance support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "assignment-end-access-removal": {
    "title": "Remove Access When an Assignment Ends",
    "excerpt": "An offboarding check that ties the end date, the access list, the equipment return, and the confirmation.",
    "image": "/october-22-2026/assignment-end-access-removal.svg",
    "sections": [
      {
        "heading": "Why assignment end access removal needs its own control",
        "paragraphs": [
          "An assignment ends on Friday. The worker's account is still active on Monday, and a shared password is still in the team document. Remove Access When an Assignment Ends turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. The worker loses access on time and the client receives a complete closure record.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The point is not to make the queue look tidy. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the assignment end access removal. In a typical case the reviewer needs the assignment end date, the system access list, the equipment and badge list, the client confirmation, the offboarding checklist, and the access removal log. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The workforce manager owns the offboarding; the client confirms the end date; the security owner removes access. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The access removal waits for the next weekly review.",
          "A shared credential is not rotated because it is not tied to the individual. Equipment return is assumed but not recorded. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Start the checklist before the end date.",
          "Second, List every system and physical access item.",
          "Third, Remove access and rotate shared credentials on the end date.",
          "Fourth, Record the client confirmation and the equipment return."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the client extends the assignment, record the new end date and keep the access review on the calendar. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track access removed by the end date, shared credentials rotated, and equipment returned. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The worker returns the laptop on the last day, and the security owner removes the account the same afternoon. The shared drive password is rotated, and the client receives the closure note.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The closure record shows the end date, the access removal, the equipment, and the client acknowledgment. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "offboarding support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "labor-requisition-intake": {
    "title": "Intake a Labor Requisition With Clear Requirements",
    "excerpt": "A requisition intake that captures the task, the shift, the skills, the tools, and the decision owner.",
    "image": "/october-22-2026/labor-requisition-intake.svg",
    "sections": [
      {
        "heading": "Why labor requisitions needs its own control",
        "paragraphs": [
          "A client asks for 'someone in operations' next week. The request has no shift, no tools, and no statement of what the person will own. Intake a Labor Requisition With Clear Requirements turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. Recruiting starts from a complete requirement instead of a series of clarifying calls.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The work is judged by what a second reviewer can reconstruct. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the labor requisitions. In a typical case the reviewer needs the requested start date and shift, the task list and expected output, the required skills and credentials, the tools and access needed, the supervision model, and the client decision owner. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The client defines the need; the workforce manager translates it into a role; the account owner approves the commercial terms. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The requisition is filled with a generic profile that does not match the tools.",
          "The start date is promised before the background or credential check. The supervision model is left unclear, so the worker escalates to the wrong person. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Use a requisition form with task, shift, skills, tools, and supervisor fields.",
          "Second, Confirm the start date after the checks are complete.",
          "Third, Name the client supervisor and the escalation path.",
          "Fourth, Record the approved rate and the role scope."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the client cannot define the task, propose a short discovery call rather than submitting a vague requisition. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track requisitions complete at intake, days from intake to qualified candidate, and start dates moved after commitment. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The client asks for an operations worker. The intake form shows the role is really inventory reconciliation with a specific system. The requisition is rewritten, and the candidate pool matches the tool requirement.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The requisition record carries the role scope, the checks, the rate, and the start date. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "workforce intake support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "overtime-approval-evidence": {
    "title": "Approve Overtime With Evidence Before Payroll",
    "excerpt": "An overtime control that links the request, the operational reason, the approval, and the payroll record.",
    "image": "/october-22-2026/overtime-approval-evidence.svg",
    "sections": [
      {
        "heading": "Why overtime approvals needs its own control",
        "paragraphs": [
          "A worker records ten hours of overtime. The supervisor remembers approving extra coverage, but the approval is in a chat and the reason is unclear. Approve Overtime With Evidence Before Payroll turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. Overtime is paid only when the work and the approval are both documented.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. Speed matters only when the evidence survives review. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the overtime approvals. In a typical case the reviewer needs the time record, the shift or task need, the supervisor request, the approval, the client authorization if required, and the payroll record. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The supervisor approves operational overtime; payroll applies the rule; the workforce manager resolves policy or client billing questions. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "Overtime is approved after the work without a contemporaneous note.",
          "The client is billed for overtime the client did not authorize. The approval is recorded in a channel that payroll cannot see. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Require the operational reason and the expected duration before the shift.",
          "Second, Record approval in the system payroll uses.",
          "Third, Check client authorization where the contract requires it.",
          "Fourth, Reconcile approved overtime to the payroll file."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If overtime was necessary for safety or coverage, record the reason and route the approval to the manager for after-the-fact review. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track overtime hours by reason, approvals missing from payroll, and client billing disputes over overtime. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A late delivery requires two extra hours. The supervisor records the reason and authorizes the time before the shift ends. Payroll matches the approval to the hours, and the client is billed under the agreed rate.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The payroll record shows the hours, the reason, the approver, and any client authorization. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "payroll support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "worker-classification-review-boundary": {
    "title": "Keep Classification Reviews Inside the Right Boundary",
    "excerpt": "A boundary guide for gathering classification evidence without making the legal determination.",
    "image": "/october-22-2026/worker-classification-review-boundary.svg",
    "sections": [
      {
        "heading": "Why worker classification reviews needs its own control",
        "paragraphs": [
          "A client asks whether a worker can be treated as a contractor. The team has the schedule, the supervision notes, and the contract, but no authority to decide. Keep Classification Reviews Inside the Right Boundary turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. The specialist prepares the facts, and the qualified owner makes the classification decision.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The point is not to make the queue look tidy. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the worker classification reviews. In a typical case the reviewer needs the contract and statement of work, the schedule and supervision model, the tools and equipment provided, the payment method, the client's control over the work, and the owner decision. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The workforce manager assembles the facts; legal or a qualified advisor determines classification; the client decides the engagement model. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The specialist answers the classification question directly.",
          "The file contains only the contract and omits the day-to-day control evidence. The decision is made without the client's actual working model. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Collect the contract, the schedule, and the supervision evidence.",
          "Second, Separate facts from the legal conclusion.",
          "Third, Route the question to the qualified owner.",
          "Fourth, Record the decision and the facts it relied on."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the client asks for a verbal answer, explain the boundary and provide the evidence packet instead. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track classification questions routed within a day, files with control evidence, and decisions without a recorded basis. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The contract describes an independent role, but the client sets the daily schedule and provides the tools. The specialist records both facts and routes the question. Legal reviews the working model, not just the contract.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The file shows the facts, the question, the owner, and the decision date. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "workforce compliance support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "site-supervisor-escalation-log": {
    "title": "Keep a Site Supervisor Escalation Log That Works",
    "excerpt": "An escalation log that records the issue, the impact, the owner, and the response time.",
    "image": "/october-22-2026/site-supervisor-escalation-log.svg",
    "sections": [
      {
        "heading": "Why supervisor escalations needs its own control",
        "paragraphs": [
          "A site supervisor raises the same staffing issue three times. Each message is in a different channel, and no one can see the history. Keep a Site Supervisor Escalation Log That Works turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. Escalations reach the right owner with enough context to act.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. A clean status is not the same as a controlled record. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the supervisor escalations. In a typical case the reviewer needs the issue and time raised, the site and shift, the impact on service, the owner assigned, the response and time, and the resolution. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The supervisor raises the issue; the workforce manager assigns the owner; the client decides any service change. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The issue is reopened because the prior context is missing.",
          "The escalation is assigned to a team rather than a person. The response time is not recorded, so the service level cannot be reviewed. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Use one log with a stable issue key.",
          "Second, Record the impact and the needed decision.",
          "Third, Assign one owner and a response time.",
          "Fourth, Close only with the resolution and the client confirmation where needed."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the issue affects safety, escalate immediately by the approved channel and record the call in the log. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track open escalations by age, repeat escalations for the same issue, and response time against the service level. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A night shift coverage issue is raised three times. The log links the messages, assigns the workforce manager, and records the client decision to change the start time. The next shift shows no repeat.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The log carries the history, the owner, and the next review time. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "escalation support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "equipment-accountability": {
    "title": "Track Equipment Accountability Across Shifts",
    "excerpt": "An equipment log that ties the item, the custodian, the condition, and the return before the shift closes.",
    "image": "/october-22-2026/equipment-accountability.svg",
    "sections": [
      {
        "heading": "Why equipment accountability needs its own control",
        "paragraphs": [
          "A scanner is missing at shift change. The log shows it was issued but not returned, and the custodian has already left. Track Equipment Accountability Across Shifts turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. The next shift knows what is available and who is responsible.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. A clean status is not the same as a controlled record. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the equipment accountability. In a typical case the reviewer needs the equipment ID and description, the issue time and custodian, the condition at issue, the return time and condition, the missing or damaged report, and the replacement or repair action. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The shift supervisor issues and receives equipment; the worker is accountable during the shift; the manager decides loss or damage action. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "Equipment is issued without an ID or a custodian.",
          "The return is recorded as complete without a condition check. A missing item is discovered at the next shift with no prior report. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Issue by equipment ID and named custodian.",
          "Second, Record the condition at issue and return.",
          "Third, Report a missing item before the shift closes.",
          "Fourth, Route loss or damage to the manager for a decision."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the custodian cannot be reached, record the item as missing and notify the manager before the next shift starts. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track items not returned at shift close, missing item reports, and repair or replacement cost. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The scanner is returned by a different worker. The supervisor records the handoff and checks the condition. The original custodian is noted, and the item remains accounted for.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The equipment log shows the custodian, the condition, and the open action. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "operations support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "late-timesheet-payroll-cutoff": {
    "title": "Handle Late Timesheets at the Payroll Cutoff",
    "excerpt": "A cutoff process for late or missing timesheets that protects the worker and the payroll file.",
    "image": "/october-22-2026/late-timesheet-payroll-cutoff.svg",
    "sections": [
      {
        "heading": "Why late timesheets needs its own control",
        "paragraphs": [
          "Two timesheets are missing on cutoff day. One worker is on leave, and the other says the app did not save the hours. Handle Late Timesheets at the Payroll Cutoff turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. The worker is paid correctly, and the payroll team knows which records are estimated and why.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The work is judged by what a second reviewer can reconstruct. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the late timesheets. In a typical case the reviewer needs the missing timesheet and period, the schedule and prior pattern, the worker or supervisor statement, the estimated hours basis, the approval, and the correction in the next cycle. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The supervisor confirms the hours; payroll applies the estimate; the workforce manager approves any exception. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The schedule is paid as if it were the actual time.",
          "The worker is not told the payment is estimated. The correction is not tracked into the next cycle. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Contact the worker and supervisor before estimating.",
          "Second, Record the basis for any estimate and label it.",
          "Third, Tell the worker what will be paid and when it will be corrected.",
          "Fourth, Track the correction into the next payroll."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the hours cannot be confirmed, pay the undisputed portion and hold the remainder with a named owner and date. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track late timesheets by reason, estimated payments, and corrections completed next cycle. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A worker on leave has no timesheet. The supervisor confirms the scheduled hours and marks them estimated. Payroll pays the undisputed amount, and the correction is scheduled for the next cycle.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The payroll note shows the estimate, the approval, and the correction date. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "payroll support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "roster-change-verification": {
    "title": "Verify Roster Changes Before They Reach the Client",
    "excerpt": "A roster change check that confirms the worker, the shift, the client approval, and the published schedule.",
    "image": "/october-22-2026/roster-change-verification.svg",
    "sections": [
      {
        "heading": "Why roster changes needs its own control",
        "paragraphs": [
          "A worker is moved to a different shift. The internal roster is updated, but the client portal still shows the old shift. Verify Roster Changes Before They Reach the Client turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. The client and the worker see the same schedule, and the change is traceable.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. A clean status is not the same as a controlled record. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the roster changes. In a typical case the reviewer needs the change request and reason, the worker and assignment, the client approval, the internal roster version, the client portal record, and the worker notification. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The workforce manager approves the change; the client confirms any site requirement; the scheduler publishes the roster. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "The change is published internally but not to the client portal.",
          "The worker is told verbally and no record is kept. A shift change creates a coverage gap that no one checks. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Record the change request and the approval.",
          "Second, Check coverage before publishing.",
          "Third, Update every system that displays the roster.",
          "Fourth, Notify the worker and confirm receipt."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the client portal cannot be updated before the shift, notify the client contact and record the temporary arrangement. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track roster mismatches between systems, changes without client approval, and coverage gaps after a change. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A worker moves from days to nights. The scheduler checks coverage, gets client approval, updates the portal, and messages the worker. The next day both systems show the same shift.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The roster record shows the change, the approval, the systems updated, and the notifications. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "workforce scheduling support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  },
  "safety-training-record-completeness": {
    "title": "Keep Safety Training Records Complete",
    "excerpt": "A training record check that ties the requirement, the completion evidence, the expiry, and the assignment.",
    "image": "/october-22-2026/safety-training-record-completeness.svg",
    "sections": [
      {
        "heading": "Why safety training records needs its own control",
        "paragraphs": [
          "A safety training record is missing a completion date. The worker is already on a site that requires the training. Keep Safety Training Records Complete turns that situation into a bounded queue item with one source trail, one accountable owner, and one recorded close. A worker is assigned only to work covered by a current training record.",
          "This guide is written for workforce operations teams that place and support Filipino staff. It separates the preparation an outsourced specialist can own from the decisions that stay with the workforce operations manager. The point is not to make the queue look tidy. A record that cannot show both parts is not ready for a customer, a client, or an auditor."
        ]
      },
      {
        "heading": "Start with the source record",
        "paragraphs": [
          "Begin with the source that actually governs the safety training records. In a typical case the reviewer needs the training requirement, the completion certificate or roster, the completion date, the expiry or refresher date, the assignment record, and the supervisor confirmation. Record where each item came from, the version or date observed, and the field it supports. Do not copy a value forward because it looks familiar.",
          "Keep the source and the interpretation in separate fields. A system status, a forwarded email, or a verbal confirmation may be a lead, but it is not proof that a record changed. The reviewer should be able to follow one path from the queue item to the source and back without opening a private folder."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The safety owner sets the requirement; the training provider issues the record; the workforce manager confirms the assignment. The specialist may collect, compare, label, calculate where the rule is fixed, and route the item. The accountable owner decides whether the evidence is sufficient, whether an exception is acceptable, and what the client or customer is told.",
          "Write that boundary into the task brief rather than leaving it in a manager's memory. Name the systems the specialist may use, the fields they may change, and the questions they must route. A short written boundary is easier to audit than a general instruction to use good judgment."
        ]
      },
      {
        "heading": "Where the process usually breaks",
        "paragraphs": [
          "A roster is accepted as proof without the worker's name or date.",
          "The refresher date is not tracked, so the record expires silently. The worker is assigned before the record is verified. These are ordinary failures, not evidence of bad intent. They happen when a queue is measured by activity and the evidence standard is assumed rather than written."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Map each site task to its training requirement.",
          "Second, Verify the worker name, course, and completion date.",
          "Third, Track the refresher date and remind before expiry.",
          "Fourth, Block the assignment until the record is complete."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "If the record is missing but the provider confirms completion, record the confirmation and follow up for the document. An exception should carry a reason code, the next owner, the date of the next check, and the action the specialist is not permitted to take. That structure keeps the item moving without letting the specialist guess.",
          "Use a small set of reason codes: missing source, conflicting source, wrong period, identity mismatch, stale approval, and system failure. The codes make the queue filterable and give the owner a clean way to see whether the problem is volume, training, access, or a rule that no longer fits the work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Track records missing a date, refreshers due in 60 days, and assignments without verified training. Report counts beside any rate, and show the age of open items rather than only the number closed. A large closed count can hide items that were reopened or closed without evidence.",
          "Sample a small set every week. Pick one high value item, one recent exception, and one item that was previously corrected. If the same gap appears twice, change the checklist or the source map instead of coaching the same person again."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The provider roster shows the worker completed the course, but the certificate has no date. The manager confirms the date with the provider, records the confirmation, and schedules the refresher.",
          "The reviewer records what was checked, what remains open, and which owner accepted the next action. The record does not need a long narrative. It needs enough detail that a colleague can repeat the check and reach the same state without asking the original preparer."
        ]
      },
      {
        "heading": "A short review checklist",
        "paragraphs": [
          "Before the item leaves the specialist, check five things: the source is current, the owner is named, the exception reason is recorded, the next action has a date, and the destination evidence matches the action. Any missing item keeps the case open.",
          "The checklist is deliberately short. A long list will be skipped under volume. Use the same five checks for an ordinary case and an exception, and record the result in the queue rather than in a separate document. If a check does not apply, mark it not applicable with a reason instead of leaving it blank."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The assignment record shows the training status and the next refresher date. Close only when the source, the approval, the action, and the destination evidence agree. If one of those is missing, keep the item open with a named owner and a date.",
          "At handoff, leave the source links, the open questions, and the next review date in the queue. The specialist should also note what would reopen a closed item, such as a client reply, a system reversal, or a revised document. That note is what makes the control durable after the original reviewer moves on.",
          "workforce compliance support can support the preparation described here. The accountable owner still makes the decision."
        ]
      }
    ],
    "sources": [
      {
        "name": "DOL recordkeeping fact sheet",
        "publisher": "U.S. Department of Labor",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "OSHA recordkeeping",
        "publisher": "Occupational Safety and Health Administration",
        "url": "https://www.osha.gov/recordkeeping",
        "checked": "October 22, 2026"
      },
      {
        "name": "GAO Standards for Internal Control",
        "publisher": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/products/gao-14-704g",
        "checked": "October 22, 2026"
      },
      {
        "name": "NIST Cybersecurity Framework",
        "publisher": "National Institute of Standards and Technology",
        "url": "https://www.nist.gov/cyberframework",
        "checked": "October 22, 2026"
      }
    ],
    "service": "/services/operations-support"
  }
} as const;

export const oct22BlogSlugs=new Set(oct22BlogPosts.map(x=>x.slug));

export function getOct22BlogMetadata(slug:string){
  const a=articles[slug as keyof typeof articles]; if(!a) return {};
  const canonical=`${site}/blog/${slug}`;
  return {title:a.title,description:a.excerpt,alternates:{canonical},openGraph:{title:a.title,description:a.excerpt,type:'article' as const,url:canonical,images:[a.image],publishedTime:published}};
}

export function renderOct22BlogArticle(slug:string){
  const a=articles[slug as keyof typeof articles];
  const canonical=`${site}/blog/${slug}`;
  const related=oct22BlogPosts.filter(x=>x.slug!==slug).slice(0,3);
  const sections=a.sections.map((section,index)=>({...section,id:`section-${index+1}`}));
  const schema={'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.excerpt,datePublished:published,dateModified:published,mainEntityOfPage:canonical,image:site+a.image,author:{'@type':'Organization',name:'Outsourced Labor',url:site},publisher:{'@type':'Organization',name:'Outsourced Labor',url:site}};
  return <><Header/><main id="main-content" className="article-page"><JsonLd data={schema}/><article className="container article-shell">
    <style>{`
      .o22-grid{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:36px;align-items:start}
      html,body{overflow-x:clip}.o22-toc{position:sticky;top:88px;align-self:start;max-height:calc(100vh - 110px);overflow:auto;border-left:3px solid #fda4af;padding:12px 14px;background:rgba(127,127,127,.06)}
      .o22-toc a{display:block;padding:6px 0;text-decoration:none}
      .o22-toc strong{display:block;margin-bottom:8px;text-transform:uppercase;letter-spacing:.08em;font-size:12px}
      .o22-sec h2{margin:40px 0 14px;line-height:1.25;scroll-margin-top:110px}
      .o22-sec p{line-height:1.75;margin:0 0 16px}
      .o22-mobile{display:none}
      @media(max-width:900px){.o22-grid{grid-template-columns:1fr}.o22-toc{display:none}.o22-mobile{display:block;position:sticky;top:8px;z-index:40;margin:0 0 18px auto;width:fit-content;max-width:calc(100% - 1rem);background:#fff;color:#17202a;border:1px solid #17202a;border-radius:999px;padding:8px 14px}.o22-mobile summary{cursor:pointer;font-weight:800;min-height:32px}.o22-mobile nav{max-height:60vh;overflow:auto;margin-top:8px}.o22-mobile a{display:block;padding:8px 0}}
    `}</style>
    <details className="o22-mobile"><summary>Contents</summary><nav aria-label="Table of contents mobile">{sections.map(s=><a key={s.id} href={`#${s.id}`}>{s.heading}</a>)}</nav></details>
    <header className="article-header"><p className="eyebrow">Philippines workforce operations guide</p><h1>{a.title}</h1><p className="lead">{a.excerpt}</p><div className="article-meta"><span>13 min read</span><time dateTime={published}>{visible}</time></div><img src={a.image} alt={a.title} width="1200" height="630"/></header>
    <div className="o22-grid">
      <div className="article-body">{sections.map(s=><section className="o22-sec" id={s.id} key={s.id}><h2>{s.heading}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}</div>
      <aside className="o22-toc o22-aside" aria-label="Table of contents"><strong>Contents</strong>{sections.map(s=><a key={s.id} href={`#${s.id}`}>{s.heading}</a>)}</aside>
    </div>
    <section className="source-list"><h2>Authoritative references</h2><ol>{a.sources.map(s=><li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a>, {s.publisher}; checked {s.checked}</li>)}</ol></section>
    <section><h2>Related October 22 guides</h2><ul>{related.map(item=><li key={item.slug}><a href={`/blog/${item.slug}`}>{item.title}</a></li>)}</ul></section>
    <aside className="card"><h2>Bounded service handoff</h2><p>A specialist prepares evidence while authorized owners retain workforce, pay, legal, safety, access, and client decisions.</p><a href={a.service}>Review the related service</a></aside>
  </article><CTA/></main><Footer/></>;
}
