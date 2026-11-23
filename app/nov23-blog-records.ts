type Nov23BlogPost = {slug:string;title:string;excerpt:string;minutes:number;publicationDate:string;publishedAt:string;image:string;body:string[];takeaways:string[];faqs:{q:string;a:string}[];sources:{name:string;url:string;note:string}[];related:string[]};
export const november23BlogPosts: Nov23BlogPost[] = [
  {
    "slug": "build-a-carrier-pickup-manifest-check-for-a-delegated-warehouse-desk",
    "title": "Build a carrier pickup manifest check for a delegated warehouse desk",
    "excerpt": "A pickup manifest check that records the carrier, the parcel count, the seal, and the handoff, so a load leaves the dock with a matching record.",
    "minutes": 8,
    "publicationDate": "2026-11-23",
    "publishedAt": "2026-11-23",
    "image": "/daily23/outsourcedlabor/build-a-carrier-pickup-manifest-check-for-a-delegated-warehouse-desk.png",
    "body": [
      "## Record the carrier and the scheduled window",
      "Record the carrier, the route, the driver, and the scheduled window. Note the trailer or vehicle number and the dock door. A pickup without a carrier record is hard to trace. The manifest should show the appointment.",
      "Record the parcels prepared, the pallet count, and the seal number. Note the person who staged the load and the time. A count copied from the system without a physical check is a guess. The manifest should show the dock count.",
      "## Match the manifest to the load",
      "Compare the manifest with the scanned parcels and the physical count. Note each difference and the person who checked it. A missing parcel found after the truck leaves is a claim. The check should happen before the seal is applied.",
      "Record the seal application, the witness, and the time. Note any rework or rewrap. A seal applied over an uncounted load is not a control. The record should show the sequence.",
      "## Record the handoff and the exceptions",
      "Record the driver signature, the time, and any exception such as a damaged carton. Note the photo or note taken at the dock. A verbal exception is easy to dispute. The manifest should show the evidence.",
      "Record the parcels held back and the reason. Note the owner and the next pickup. A held parcel that is not recorded becomes a lost parcel. The manifest should show the open item.",
      "## Review the pickup records each week",
      "Review the pickups by carrier, count, and exception. A cluster may point to a dock or a scanning problem. Record the pattern and one change. The review should not expose customer data.",
      "Check that every pickup has a count, a seal, and a signature. A pickup without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
    "slug": "set-a-customer-return-label-exception-log-for-a-delegated-support-desk",
    "title": "Set a customer return label exception log for a delegated support desk",
    "excerpt": "A return label exception log that records the reason a label cannot be issued, the alternative, and the owner, so a return does not stall at the first obstacle.",
    "minutes": 8,
    "publicationDate": "2026-11-23",
    "publishedAt": "2026-11-23",
    "image": "/daily23/outsourcedlabor/set-a-customer-return-label-exception-log-for-a-delegated-support-desk.png",
    "body": [
      "## Record the request and the exception",
      "Record the order, the customer, the item, and the reason the standard label cannot be used. Note the date and the agent. An exception without a reason cannot be reviewed. The log should show the cause.",
      "Record the alternative offered, such as a drop-off code, a pickup, or a manual label. Note the cost and the approval. A workaround without approval may create a chargeback. The log should show the option.",
      "## Check the policy and the deadline",
      "Record the return window, the condition rule, and the policy source. Note the date the customer was told. A label issued outside the window may be refused. The log should show the check.",
      "Record the carrier cutoff and the expected delivery back. Note the person who confirmed it. A label that expires before the customer can ship is not a solution. The log should show the timing.",
      "## Tell the customer and record the response",
      "Send the alternative and the instructions in writing. Record the channel and the time. A verbal instruction is easy to misremember. The log should show the message.",
      "Record the customer's response and any new problem. Note the owner and the next step. An exception that turns into a second exception needs escalation. The log should show the path.",
      "## Review the exceptions each month",
      "Review the exceptions by reason, carrier, and outcome. A cluster may point to a label or a policy problem. Record the pattern and one change. The review should not expose customer data.",
      "Check that every exception has an alternative and an owner. An exception without either is the finding. Record the gap and the owner. The next review should show a cleaner log."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
    "slug": "create-a-freight-invoice-audit-checklist-for-a-delegated-billing-desk",
    "title": "Create a freight invoice audit checklist for a delegated billing desk",
    "excerpt": "A freight invoice audit that ties each charge to the rate, the weight, the accessorial, and the approval, so a duplicate or inflated charge is caught before payment.",
    "minutes": 8,
    "publicationDate": "2026-11-23",
    "publishedAt": "2026-11-23",
    "image": "/daily23/outsourcedlabor/create-a-freight-invoice-audit-checklist-for-a-delegated-billing-desk.png",
    "body": [
      "## Record the invoice and the shipment",
      "Record the carrier, the invoice, the shipment, the weight, and the service level. Note the rate reference and the date. An invoice without a shipment match is not auditable. The checklist should show the link.",
      "Record the accessorials, such as liftgate, detention, or fuel. Note the source and the approved amount. An accessorial without a reference is a common overcharge. The checklist should show the basis.",
      "## Compare the charge with the rate",
      "Compare the line with the contract rate and the quoted amount. Record each difference and the person who checked it. A small difference repeated across shipments is still a finding. The checklist should show the math.",
      "Record the weight and the dimension used. Note whether the carrier reweighed the shipment. A reweigh without evidence should be challenged. The checklist should show the source.",
      "## Route the dispute and the approval",
      "Record the dispute, the amount, the carrier contact, and the deadline. Note the owner. A dispute filed after the deadline is lost. The checklist should show the date.",
      "Record the credit or the approval to pay. Note the approver and the date. A payment without a resolution closes the case too early. The checklist should show the outcome.",
      "## Review the audit results each month",
      "Review the disputes by carrier, charge type, and outcome. A cluster may point to a rate or a data problem. Record the pattern and one change. The review should not expose pricing.",
      "Check that every audited invoice has a match and a decision. An invoice without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
    "slug": "build-a-warehouse-cycle-count-exception-record",
    "title": "Build a warehouse cycle count exception record",
    "excerpt": "A cycle count exception record that ties each variance to the bin, the count, the recount, and the adjustment, so a stock difference is resolved with evidence.",
    "minutes": 8,
    "publicationDate": "2026-11-23",
    "publishedAt": "2026-11-23",
    "image": "/daily23/outsourcedlabor/build-a-warehouse-cycle-count-exception-record.png",
    "body": [
      "## Record the bin and the first count",
      "Record the location, the SKU, the system quantity, and the counted quantity. Note the counter and the time. A count without a location is hard to repeat. The record should show the bin.",
      "Record the condition of the stock and any mixed or damaged item. Note the photo or note. A damaged item may explain part of the variance. The record should show the condition.",
      "## Recount before adjusting",
      "Assign a second counter and record the recount. Note the time and the result. A single count is not enough for an adjustment. The record should show the second check.",
      "Record the difference and the likely cause, such as a mis-scan, a mixed SKU, or a receiving error. Note the owner. A cause guessed without evidence becomes a recurring error. The record should show the basis.",
      "## Record the adjustment and the approval",
      "Record the adjustment, the reason code, and the approver. Note the date and the system entry. An adjustment without approval is a control gap. The record should show the decision.",
      "Record any customer order affected and the next step. Note the owner and the date. A variance that touches an order needs a service response. The record should show the action.",
      "## Review the exceptions each week",
      "Review the exceptions by bin, SKU, and counter. A cluster may point to a location or a process. Record the pattern and one change. The review should not rank the counter.",
      "Check that every exception has a recount and an approval. An exception without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
    "slug": "track-a-carrier-damage-claim-from-photo-to-settlement",
    "title": "Track a carrier damage claim from photo to settlement",
    "excerpt": "A damage claim tracker that records the photos, the inspection, the claim number, and the settlement, so a damaged shipment is recovered without a lost file.",
    "minutes": 8,
    "publicationDate": "2026-11-23",
    "publishedAt": "2026-11-23",
    "image": "/daily23/outsourcedlabor/track-a-carrier-damage-claim-from-photo-to-settlement.png",
    "body": [
      "## Record the damage and the photos",
      "Record the shipment, the carton, the damage, and the date discovered. Note the photos taken and the person who took them. A claim without a dated photo is weak. The tracker should show the evidence.",
      "Record the delivery exception and the receiver's note. Note whether the damage was noted at delivery. A claim filed later may be challenged. The tracker should show the timing.",
      "## File the claim with the carrier",
      "Record the claim number, the filing date, and the required documents. Note the carrier contact and the deadline. A claim filed after the deadline is lost. The tracker should show the date.",
      "Record the value proof and the repair or replacement estimate. Note the source and the approver. A value without a source is disputed. The tracker should show the basis.",
      "## Track the response and the settlement",
      "Record each carrier response, the requested information, and the date. Note the owner. A claim that is not followed up goes silent. The tracker should show the next step.",
      "Record the settlement, the amount, and the date. Note whether the customer was made whole. A settlement that is not applied leaves the loss open. The tracker should show the close.",
      "## Review the claims each quarter",
      "Review the claims by carrier, damage type, and outcome. A cluster may point to packaging or handling. Record the pattern and one change. The review should not expose customer data.",
      "Check that every claim has a photo, a filing date, and a settlement. A claim without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
    ],
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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

export const november23BlogDetails: Record<string,{updated:string;published:string;takeaways:string[];sections:{heading:string;paragraphs:string[]}[];faqs:{q:string;a:string}[];sources:{name:string;url:string;note:string}[];related:string[]}> = {
  "build-a-carrier-pickup-manifest-check-for-a-delegated-warehouse-desk": {
    "updated": "2026-11-23",
    "published": "2026-11-23",
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "sections": [
      {
        "heading": "Record the carrier and the scheduled window",
        "paragraphs": [
          "Record the carrier, the route, the driver, and the scheduled window. Note the trailer or vehicle number and the dock door. A pickup without a carrier record is hard to trace. The manifest should show the appointment.",
          "Record the parcels prepared, the pallet count, and the seal number. Note the person who staged the load and the time. A count copied from the system without a physical check is a guess. The manifest should show the dock count."
        ]
      },
      {
        "heading": "Match the manifest to the load",
        "paragraphs": [
          "Compare the manifest with the scanned parcels and the physical count. Note each difference and the person who checked it. A missing parcel found after the truck leaves is a claim. The check should happen before the seal is applied.",
          "Record the seal application, the witness, and the time. Note any rework or rewrap. A seal applied over an uncounted load is not a control. The record should show the sequence."
        ]
      },
      {
        "heading": "Record the handoff and the exceptions",
        "paragraphs": [
          "Record the driver signature, the time, and any exception such as a damaged carton. Note the photo or note taken at the dock. A verbal exception is easy to dispute. The manifest should show the evidence.",
          "Record the parcels held back and the reason. Note the owner and the next pickup. A held parcel that is not recorded becomes a lost parcel. The manifest should show the open item."
        ]
      },
      {
        "heading": "Review the pickup records each week",
        "paragraphs": [
          "Review the pickups by carrier, count, and exception. A cluster may point to a dock or a scanning problem. Record the pattern and one change. The review should not expose customer data.",
          "Check that every pickup has a count, a seal, and a signature. A pickup without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
  "set-a-customer-return-label-exception-log-for-a-delegated-support-desk": {
    "updated": "2026-11-23",
    "published": "2026-11-23",
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "sections": [
      {
        "heading": "Record the request and the exception",
        "paragraphs": [
          "Record the order, the customer, the item, and the reason the standard label cannot be used. Note the date and the agent. An exception without a reason cannot be reviewed. The log should show the cause.",
          "Record the alternative offered, such as a drop-off code, a pickup, or a manual label. Note the cost and the approval. A workaround without approval may create a chargeback. The log should show the option."
        ]
      },
      {
        "heading": "Check the policy and the deadline",
        "paragraphs": [
          "Record the return window, the condition rule, and the policy source. Note the date the customer was told. A label issued outside the window may be refused. The log should show the check.",
          "Record the carrier cutoff and the expected delivery back. Note the person who confirmed it. A label that expires before the customer can ship is not a solution. The log should show the timing."
        ]
      },
      {
        "heading": "Tell the customer and record the response",
        "paragraphs": [
          "Send the alternative and the instructions in writing. Record the channel and the time. A verbal instruction is easy to misremember. The log should show the message.",
          "Record the customer's response and any new problem. Note the owner and the next step. An exception that turns into a second exception needs escalation. The log should show the path."
        ]
      },
      {
        "heading": "Review the exceptions each month",
        "paragraphs": [
          "Review the exceptions by reason, carrier, and outcome. A cluster may point to a label or a policy problem. Record the pattern and one change. The review should not expose customer data.",
          "Check that every exception has an alternative and an owner. An exception without either is the finding. Record the gap and the owner. The next review should show a cleaner log."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
  "create-a-freight-invoice-audit-checklist-for-a-delegated-billing-desk": {
    "updated": "2026-11-23",
    "published": "2026-11-23",
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "sections": [
      {
        "heading": "Record the invoice and the shipment",
        "paragraphs": [
          "Record the carrier, the invoice, the shipment, the weight, and the service level. Note the rate reference and the date. An invoice without a shipment match is not auditable. The checklist should show the link.",
          "Record the accessorials, such as liftgate, detention, or fuel. Note the source and the approved amount. An accessorial without a reference is a common overcharge. The checklist should show the basis."
        ]
      },
      {
        "heading": "Compare the charge with the rate",
        "paragraphs": [
          "Compare the line with the contract rate and the quoted amount. Record each difference and the person who checked it. A small difference repeated across shipments is still a finding. The checklist should show the math.",
          "Record the weight and the dimension used. Note whether the carrier reweighed the shipment. A reweigh without evidence should be challenged. The checklist should show the source."
        ]
      },
      {
        "heading": "Route the dispute and the approval",
        "paragraphs": [
          "Record the dispute, the amount, the carrier contact, and the deadline. Note the owner. A dispute filed after the deadline is lost. The checklist should show the date.",
          "Record the credit or the approval to pay. Note the approver and the date. A payment without a resolution closes the case too early. The checklist should show the outcome."
        ]
      },
      {
        "heading": "Review the audit results each month",
        "paragraphs": [
          "Review the disputes by carrier, charge type, and outcome. A cluster may point to a rate or a data problem. Record the pattern and one change. The review should not expose pricing.",
          "Check that every audited invoice has a match and a decision. An invoice without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
  "build-a-warehouse-cycle-count-exception-record": {
    "updated": "2026-11-23",
    "published": "2026-11-23",
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "sections": [
      {
        "heading": "Record the bin and the first count",
        "paragraphs": [
          "Record the location, the SKU, the system quantity, and the counted quantity. Note the counter and the time. A count without a location is hard to repeat. The record should show the bin.",
          "Record the condition of the stock and any mixed or damaged item. Note the photo or note. A damaged item may explain part of the variance. The record should show the condition."
        ]
      },
      {
        "heading": "Recount before adjusting",
        "paragraphs": [
          "Assign a second counter and record the recount. Note the time and the result. A single count is not enough for an adjustment. The record should show the second check.",
          "Record the difference and the likely cause, such as a mis-scan, a mixed SKU, or a receiving error. Note the owner. A cause guessed without evidence becomes a recurring error. The record should show the basis."
        ]
      },
      {
        "heading": "Record the adjustment and the approval",
        "paragraphs": [
          "Record the adjustment, the reason code, and the approver. Note the date and the system entry. An adjustment without approval is a control gap. The record should show the decision.",
          "Record any customer order affected and the next step. Note the owner and the date. A variance that touches an order needs a service response. The record should show the action."
        ]
      },
      {
        "heading": "Review the exceptions each week",
        "paragraphs": [
          "Review the exceptions by bin, SKU, and counter. A cluster may point to a location or a process. Record the pattern and one change. The review should not rank the counter.",
          "Check that every exception has a recount and an approval. An exception without either is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
  "track-a-carrier-damage-claim-from-photo-to-settlement": {
    "updated": "2026-11-23",
    "published": "2026-11-23",
    "takeaways": [
      "Record the request and the source before acting.",
      "Name the owner, the date, and the next step.",
      "Keep the evidence with the record.",
      "Review the pattern each month."
    ],
    "sections": [
      {
        "heading": "Record the damage and the photos",
        "paragraphs": [
          "Record the shipment, the carton, the damage, and the date discovered. Note the photos taken and the person who took them. A claim without a dated photo is weak. The tracker should show the evidence.",
          "Record the delivery exception and the receiver's note. Note whether the damage was noted at delivery. A claim filed later may be challenged. The tracker should show the timing."
        ]
      },
      {
        "heading": "File the claim with the carrier",
        "paragraphs": [
          "Record the claim number, the filing date, and the required documents. Note the carrier contact and the deadline. A claim filed after the deadline is lost. The tracker should show the date.",
          "Record the value proof and the repair or replacement estimate. Note the source and the approver. A value without a source is disputed. The tracker should show the basis."
        ]
      },
      {
        "heading": "Track the response and the settlement",
        "paragraphs": [
          "Record each carrier response, the requested information, and the date. Note the owner. A claim that is not followed up goes silent. The tracker should show the next step.",
          "Record the settlement, the amount, and the date. Note whether the customer was made whole. A settlement that is not applied leaves the loss open. The tracker should show the close."
        ]
      },
      {
        "heading": "Review the claims each quarter",
        "paragraphs": [
          "Review the claims by carrier, damage type, and outcome. A cluster may point to packaging or handling. Record the pattern and one change. The review should not expose customer data.",
          "Check that every claim has a photo, a filing date, and a settlement. A claim without one is the finding. Record the gap and the owner. The next review should show a cleaner record."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What counts as complete?",
        "a": "A record with the source, the date, the owner, and the outcome."
      },
      {
        "q": "Should unclear cases be excluded?",
        "a": "No. Report them separately."
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
