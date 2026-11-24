type Nov24BlogPost = {slug:string;title:string;excerpt:string;minutes:number;publicationDate:string;publishedAt:string;image:string;body:string[];takeaways:string[];faqs:{q:string;a:string}[];sources:{name:string;url:string;note:string}[];related:string[]};
export const november24BlogPosts: Nov24BlogPost[] = [
  {
    "slug": "build-a-dock-appointment-sheet-for-a-delegated-receiving-desk",
    "title": "Build a dock appointment sheet for a delegated receiving desk",
    "excerpt": "A dock appointment sheet that records the arrival window, the door, the carrier, and the receiving owner, so a truck is not left waiting without a checked-in load.",
    "minutes": 8,
    "publicationDate": "2026-11-24",
    "publishedAt": "2026-11-24",
    "image": "/daily24/outsourcedlabor/build-a-dock-appointment-sheet-for-a-delegated-receiving-desk.png",
    "body": [
      "## Start the dock appointment sheet at the point of work",
      "Log the case, the date, and the person handling it. Add the source request and the yard board reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
      "Log the the door assignment and arrival window before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check.",
      "## Match the dock appointment sheet to the evidence",
      "Compare the written entry with the yard board record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
      "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision.",
      "## Record the handoff and the owner",
      "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
      "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message.",
      "## Review the dock appointment sheet each morning",
      "Review the entries by receiving lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the door assignment and arrival window, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner dock appointment sheet and less a truck idling with no confirmed unloading slot."
    ],
    "takeaways": [
      "Book the appointment before the truck leaves the previous stop.",
      "Write the door and the window on the sheet, not only in the message thread.",
      "Name the receiving owner for each slot.",
      "Review no-shows and early arrivals every morning."
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the door assignment and arrival window, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  {
    "slug": "set-a-returns-triage-note-for-an-outsourced-support-team",
    "title": "Set a returns triage note for an outsourced support team",
    "excerpt": "A returns triage note that records the reason code, the item condition, the disposition, and the owner, so a return does not stall at the first missing detail.",
    "minutes": 8,
    "publicationDate": "2026-11-24",
    "publishedAt": "2026-11-24",
    "image": "/daily24/outsourcedlabor/set-a-returns-triage-note-for-an-outsourced-support-team.png",
    "body": [
      "## Start the returns triage note at the point of work",
      "Log the case, the date, and the person handling it. Add the source request and the help desk reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
      "Log the the reason code and item condition before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check.",
      "## Match the returns triage note to the evidence",
      "Compare the written entry with the help desk record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
      "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision.",
      "## Record the handoff and the owner",
      "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
      "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message.",
      "## Review the returns triage note each shift",
      "Review the entries by support lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the reason code and item condition, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner returns triage note and less a return sitting in the queue without a disposition."
    ],
    "takeaways": [
      "Require a reason code before the return is accepted.",
      "Record the condition as seen, not as the customer described it.",
      "Name the disposition and the person who chose it.",
      "Escalate a second exception instead of reopening the first."
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the reason code and item condition, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  {
    "slug": "create-a-pallet-label-exception-log-for-a-delegated-warehouse-desk",
    "title": "Create a pallet label exception log for a delegated warehouse desk",
    "excerpt": "A pallet label exception log that records the failed scan, the reprinted label, the verifier, and the time, so a mislabeled pallet is caught before it ships.",
    "minutes": 8,
    "publicationDate": "2026-11-24",
    "publishedAt": "2026-11-24",
    "image": "/daily24/outsourcedlabor/create-a-pallet-label-exception-log-for-a-delegated-warehouse-desk.png",
    "body": [
      "## Start the pallet label exception log at the point of work",
      "Log the case, the date, and the person handling it. Add the source request and the warehouse system reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
      "Log the the reprinted label and the scan result before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check.",
      "## Match the pallet label exception log to the evidence",
      "Compare the written entry with the warehouse system record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
      "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision.",
      "## Record the handoff and the owner",
      "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
      "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message.",
      "## Review the pallet label exception log each week",
      "Review the entries by warehouse lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the reprinted label and the scan result, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner pallet label exception log and less a pallet leaving with a label that does not match the load."
    ],
    "takeaways": [
      "Log the failed scan at the point of failure.",
      "Record the old label and the new label number together.",
      "Require a second scan before the pallet is wrapped.",
      "Review repeated failures by printer and by shift."
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the reprinted label and the scan result, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  {
    "slug": "track-a-cycle-count-recount-request-from-the-floor",
    "title": "Track a cycle count recount request from the floor",
    "excerpt": "A recount request that records the bin, the first count, the second counter, and the variance reason, so a stock adjustment rests on evidence rather than one person's count.",
    "minutes": 8,
    "publicationDate": "2026-11-24",
    "publishedAt": "2026-11-24",
    "image": "/daily24/outsourcedlabor/track-a-cycle-count-recount-request-from-the-floor.png",
    "body": [
      "## Start the recount request at the point of work",
      "Log the case, the date, and the person handling it. Add the source request and the inventory system reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
      "Log the the second count and the variance reason before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check.",
      "## Match the recount request to the evidence",
      "Compare the written entry with the inventory system record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
      "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision.",
      "## Record the handoff and the owner",
      "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
      "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message.",
      "## Review the recount request each week",
      "Review the entries by inventory lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the second count and the variance reason, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner recount request and less an adjustment made from a single count."
    ],
    "takeaways": [
      "Hold the adjustment until a second counter signs.",
      "Record the bin, SKU, and condition at the first count.",
      "Write the variance reason in plain words.",
      "Review recounts by bin location, not by counter name."
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the second count and the variance reason, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  {
    "slug": "record-a-shift-handover-equipment-check",
    "title": "Record a shift handover equipment check",
    "excerpt": "A handover equipment check that records the forklift, the scanner, the fault, and the receiving supervisor, so equipment is not used after a known fault.",
    "minutes": 8,
    "publicationDate": "2026-11-24",
    "publishedAt": "2026-11-24",
    "image": "/daily24/outsourcedlabor/record-a-shift-handover-equipment-check.png",
    "body": [
      "## Start the handover equipment check at the point of work",
      "Log the case, the date, and the person handling it. Add the source request and the asset register reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
      "Log the the asset tag and the fault noted before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check.",
      "## Match the handover equipment check to the evidence",
      "Compare the written entry with the asset register record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
      "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision.",
      "## Record the handoff and the owner",
      "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
      "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message.",
      "## Review the handover equipment check at each shift change",
      "Review the entries by shift supervisor, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
      "Check that each entry has the asset tag and the fault noted, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner handover equipment check and less equipment used after a fault was already known."
    ],
    "takeaways": [
      "Check the asset at the change of shift, not at the end of the week.",
      "Record the fault and the person who tagged the equipment.",
      "Name the supervisor who accepted the handover.",
      "Keep a faulted asset out of the queue until it is cleared."
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the asset tag and the fault noted, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  }
];
export const november24BlogDetails: Record<string,{updated:string;published:string;takeaways:string[];sections:{heading:string;paragraphs:string[]}[];faqs:{q:string;a:string}[];sources:{name:string;url:string;note:string}[];related:string[]}> = {
  "build-a-dock-appointment-sheet-for-a-delegated-receiving-desk": {
    "updated": "2026-11-24",
    "published": "2026-11-24",
    "takeaways": [
      "Book the appointment before the truck leaves the previous stop.",
      "Write the door and the window on the sheet, not only in the message thread.",
      "Name the receiving owner for each slot.",
      "Review no-shows and early arrivals every morning."
    ],
    "sections": [
      {
        "heading": "Start the dock appointment sheet at the point of work",
        "paragraphs": [
          "Log the case, the date, and the person handling it. Add the source request and the yard board reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
          "Log the the door assignment and arrival window before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check."
        ]
      },
      {
        "heading": "Match the dock appointment sheet to the evidence",
        "paragraphs": [
          "Compare the written entry with the yard board record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
          "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision."
        ]
      },
      {
        "heading": "Record the handoff and the owner",
        "paragraphs": [
          "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
          "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message."
        ]
      },
      {
        "heading": "Review the dock appointment sheet each morning",
        "paragraphs": [
          "Review the entries by receiving lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the door assignment and arrival window, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner dock appointment sheet and less a truck idling with no confirmed unloading slot."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the door assignment and arrival window, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  "set-a-returns-triage-note-for-an-outsourced-support-team": {
    "updated": "2026-11-24",
    "published": "2026-11-24",
    "takeaways": [
      "Require a reason code before the return is accepted.",
      "Record the condition as seen, not as the customer described it.",
      "Name the disposition and the person who chose it.",
      "Escalate a second exception instead of reopening the first."
    ],
    "sections": [
      {
        "heading": "Start the returns triage note at the point of work",
        "paragraphs": [
          "Log the case, the date, and the person handling it. Add the source request and the help desk reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
          "Log the the reason code and item condition before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check."
        ]
      },
      {
        "heading": "Match the returns triage note to the evidence",
        "paragraphs": [
          "Compare the written entry with the help desk record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
          "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision."
        ]
      },
      {
        "heading": "Record the handoff and the owner",
        "paragraphs": [
          "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
          "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message."
        ]
      },
      {
        "heading": "Review the returns triage note each shift",
        "paragraphs": [
          "Review the entries by support lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the reason code and item condition, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner returns triage note and less a return sitting in the queue without a disposition."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the reason code and item condition, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  "create-a-pallet-label-exception-log-for-a-delegated-warehouse-desk": {
    "updated": "2026-11-24",
    "published": "2026-11-24",
    "takeaways": [
      "Log the failed scan at the point of failure.",
      "Record the old label and the new label number together.",
      "Require a second scan before the pallet is wrapped.",
      "Review repeated failures by printer and by shift."
    ],
    "sections": [
      {
        "heading": "Start the pallet label exception log at the point of work",
        "paragraphs": [
          "Log the case, the date, and the person handling it. Add the source request and the warehouse system reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
          "Log the the reprinted label and the scan result before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check."
        ]
      },
      {
        "heading": "Match the pallet label exception log to the evidence",
        "paragraphs": [
          "Compare the written entry with the warehouse system record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
          "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision."
        ]
      },
      {
        "heading": "Record the handoff and the owner",
        "paragraphs": [
          "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
          "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message."
        ]
      },
      {
        "heading": "Review the pallet label exception log each week",
        "paragraphs": [
          "Review the entries by warehouse lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the reprinted label and the scan result, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner pallet label exception log and less a pallet leaving with a label that does not match the load."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the reprinted label and the scan result, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  "track-a-cycle-count-recount-request-from-the-floor": {
    "updated": "2026-11-24",
    "published": "2026-11-24",
    "takeaways": [
      "Hold the adjustment until a second counter signs.",
      "Record the bin, SKU, and condition at the first count.",
      "Write the variance reason in plain words.",
      "Review recounts by bin location, not by counter name."
    ],
    "sections": [
      {
        "heading": "Start the recount request at the point of work",
        "paragraphs": [
          "Log the case, the date, and the person handling it. Add the source request and the inventory system reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
          "Log the the second count and the variance reason before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check."
        ]
      },
      {
        "heading": "Match the recount request to the evidence",
        "paragraphs": [
          "Compare the written entry with the inventory system record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
          "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision."
        ]
      },
      {
        "heading": "Record the handoff and the owner",
        "paragraphs": [
          "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
          "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message."
        ]
      },
      {
        "heading": "Review the recount request each week",
        "paragraphs": [
          "Review the entries by inventory lead, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the second count and the variance reason, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner recount request and less an adjustment made from a single count."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the second count and the variance reason, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  },
  "record-a-shift-handover-equipment-check": {
    "updated": "2026-11-24",
    "published": "2026-11-24",
    "takeaways": [
      "Check the asset at the change of shift, not at the end of the week.",
      "Record the fault and the person who tagged the equipment.",
      "Name the supervisor who accepted the handover.",
      "Keep a faulted asset out of the queue until it is cleared."
    ],
    "sections": [
      {
        "heading": "Start the handover equipment check at the point of work",
        "paragraphs": [
          "Log the case, the date, and the person handling it. Add the source request and the asset register reference. An entry lacking a source cannot easily be trace. The entry must make the origin.",
          "Log the the asset tag and the fault noted before the item moves. Add the time and the condition found. A later reconstruction proves nothing. The entry must make the first check."
        ]
      },
      {
        "heading": "Match the handover equipment check to the evidence",
        "paragraphs": [
          "Compare the written entry with the asset register record and the physical item. Add every difference and who checked it. A mismatch found after handoff costs more to fix. The entry must make the comparison.",
          "Log the exception and the reason it occurred. Add the person who approved the exception. An exception lacking an approver becomes a precedent. The entry must make the decision."
        ]
      },
      {
        "heading": "Record the handoff and the owner",
        "paragraphs": [
          "Log the handoff time, the receiving person, and any open item. Add the next action and its deadline. A handoff lacking a named owner proves nothing. The entry must make the transfer.",
          "Log the customer or internal message that went out. Add the channel and the time. A verbal promise cannot easily be prove later. The entry must make the message."
        ]
      },
      {
        "heading": "Review the handover equipment check at each shift change",
        "paragraphs": [
          "Review the entries by shift supervisor, reason, and outcome. A cluster may point to a template or a training gap. Add the pattern and one change. The review should not expose customer data.",
          "Check that each entry has the asset tag and the fault noted, an owner, and a close. An entry missing any of them is the finding. Log the gap and assign it. The next review should show a cleaner handover equipment check and less equipment used after a fault was already known."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What makes the record complete?",
        "a": "A dated entry with the asset tag and the fault noted, a named owner, and a recorded outcome."
      },
      {
        "q": "Should unclear cases be left out?",
        "a": "No. Count them separately and say why they were unclear."
      }
    ],
    "sources": [
      {
        "name": "U.S. Postal Service, Domestic Mail Manual",
        "url": "https://pe.usps.com/text/dmm300/dmm300_landing.htm",
        "note": "carrier rules for tracking, claims, and address changes"
      },
      {
        "name": "U.S. Department of Labor, Recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/recordkeeping",
        "note": "general recordkeeping expectations for delegated work"
      },
      {
        "name": "National Institute of Standards and Technology, Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework",
        "note": "data-minimization and access controls"
      }
    ],
    "related": []
  }
};
