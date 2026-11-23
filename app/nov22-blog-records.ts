type Nov22BlogPost = {slug:string;title:string;excerpt:string;minutes:number;publicationDate:string;publishedAt:string;image:string;body:string[];takeaways:string[];faqs:{q:string;a:string}[];sources:{name:string;url:string;note:string}[];related:string[]};
export const november22BlogPosts: Nov22BlogPost[] = [
  {
    "slug": "build-a-returns-merchandise-authorization-log-for-a-delegated-support-desk",
    "title": "Build a returns-merchandise authorization log for a delegated support desk",
    "excerpt": "A return authorization log that ties each request to an order, a reason, a carrier scan, and a refund decision, so the desk can close a return without guessing.",
    "minutes": 7,
    "publicationDate": "2026-11-22",
    "publishedAt": "2026-11-22",
    "image": "/daily22/outsourcedlabor/build-a-returns-merchandise-authorization-log-for-a-delegated-support-desk.png",
    "body": [
      "## Open the record with the order and the reason",
      "A return starts with a customer request, not with a label. Record the order number, the item, the purchase date, and the reason the customer gave in their own words. Note the channel and the date the request arrived. The log should let a reviewer find the original sale without asking the desk.",
      "Classify the reason into a small set such as wrong item, damaged in transit, changed mind, or quality concern. The class drives the evidence the desk needs and the policy that applies. Record the class and the person who assigned it. A vague reason produces a vague return.",
      "Check the return window and the item condition rule before authorizing anything. Record the rule and the date it was checked. A request outside the window may still be reviewable, but the exception needs a named approver. The log should show the rule, not only the answer.",
      "Record the customer's preferred resolution, such as refund, replacement, or store credit. Note whether the desk explained the available options. A resolution chosen by the desk without the customer's input creates a second contact. Keep the preference beside the reason."
    ],
    "takeaways": [
      "Record the order, the reason, the authorization date, and the carrier scan before promising a refund.",
      "Separate a return that was authorized from one that was received and inspected.",
      "Give every exception a named owner and a due date.",
      "Review the log weekly for requests that never received a scan."
    ],
    "faqs": [
      {
        "q": "Does an authorization mean the refund is approved?",
        "a": "No. The authorization allows the return; the refund follows inspection and the policy check."
      },
      {
        "q": "What if the customer has no printer?",
        "a": "Record the alternative label method and the date it was sent so the return can still be tracked."
      },
      {
        "q": "Who owns a return that arrives damaged?",
        "a": "The desk records the condition and routes the decision to the named returns owner."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  {
    "slug": "set-a-carrier-claim-evidence-checklist-for-a-delegated-logistics-desk",
    "title": "Set a carrier-claim evidence checklist for a delegated logistics desk",
    "excerpt": "A carrier-claim checklist that ties each claim to the shipment, the tracking history, the value proof, and the filing deadline, so the desk can file a complete claim once.",
    "minutes": 7,
    "publicationDate": "2026-11-22",
    "publishedAt": "2026-11-22",
    "image": "/daily22/outsourcedlabor/set-a-carrier-claim-evidence-checklist-for-a-delegated-logistics-desk.png",
    "body": [
      "## Assemble the shipment facts first",
      "Record the tracking number, the ship date, the service level, the origin, the destination, and the declared value. Copy the facts from the label and the carrier record rather than from a chat summary. Note the date the shipment was handed to the carrier. The claim should describe one shipment, not a batch of similar orders.",
      "Capture the full tracking history, including the last scan and any exception code. Save a dated copy of the carrier page because the live page can change. Record the scan location and the time. A claim that cites only a missing package without the history is hard to review.",
      "Record the packaging and the item description as they appear in the order. Note whether the shipment was insured and at what value. Record the source of the value, such as the invoice or the order total. The claim should connect the declared value to a document the carrier can check.",
      "Name the person who assembled the claim and the reviewer who approved it. Record both dates. A claim filed by one person without a second check often misses a required attachment. The approval line also gives the client a contact for follow-up."
    ],
    "takeaways": [
      "Record the tracking history and the delivery exception before drafting the claim.",
      "Attach proof of value and proof of the customer's loss to every claim.",
      "Check the carrier's filing deadline and the required form before submission.",
      "Log the claim number and the response date so the desk can follow up."
    ],
    "faqs": [
      {
        "q": "Is a tracking number enough for a claim?",
        "a": "No. The carrier usually needs the shipment details, the value proof, and the loss description."
      },
      {
        "q": "What if the customer refuses to provide a statement?",
        "a": "Record the refusal and use the available records; note the gap in the claim file."
      },
      {
        "q": "Should the desk file before the customer confirms?",
        "a": "File only when the policy allows it and record the customer communication that supports the decision."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  {
    "slug": "create-a-customer-address-change-verification-record-for-a-delegated-order-desk",
    "title": "Create a customer address change verification record for a delegated order desk",
    "excerpt": "An address change record that ties each edit to the customer, the order, the verification method, and the carrier update, so a parcel is not rerouted on an unverified request.",
    "minutes": 7,
    "publicationDate": "2026-11-22",
    "publishedAt": "2026-11-22",
    "image": "/daily22/outsourcedlabor/create-a-customer-address-change-verification-record-for-a-delegated-order-desk.png",
    "body": [
      "## Confirm the order and the customer before the edit",
      "Ask for the order number and the email or phone number on the order. Compare the answer with the order record rather than with the caller's spelling. Record the verification method and the date. A change made to the wrong order can send a parcel to a stranger.",
      "Check whether the order has shipped and whether the carrier allows a change. Record the status and the carrier rule. An address edit after dispatch is a carrier request, not an order edit. The log should show which path was used.",
      "Record the old address and the new address exactly as the customer provided them. Note any unit, access code, or delivery instruction separately. A merged address field hides the part that changed. The record should make the difference obvious.",
      "Name the person who approved the change and the time it was made. Record the confirmation sent to the customer. An approval without a confirmation leaves the customer unsure. The log should show what the customer was told."
    ],
    "takeaways": [
      "Verify the customer and the order before changing any shipping address.",
      "Record the old address, the new address, and the verification method.",
      "Confirm the carrier accepted the change and note the cutoff risk.",
      "Escalate a change after dispatch instead of editing the order record."
    ],
    "faqs": [
      {
        "q": "Can the desk change an address after the parcel ships?",
        "a": "Only through the carrier's process, and the desk should record the carrier confirmation rather than editing the order."
      },
      {
        "q": "What counts as verification?",
        "a": "A method the policy names, such as a callback to the number on file or a signed confirmation."
      },
      {
        "q": "Should the desk share the full address in chat?",
        "a": "Share only the minimum needed and keep the full record in the order system."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  {
    "slug": "build-an-invoice-discrepancy-log-for-a-delegated-billing-desk",
    "title": "Build an invoice discrepancy log for a delegated billing desk",
    "excerpt": "An invoice discrepancy log that ties each dispute to the invoice line, the contract term, the customer evidence, and the resolution, so a billing question is closed with a record.",
    "minutes": 7,
    "publicationDate": "2026-11-22",
    "publishedAt": "2026-11-22",
    "image": "/daily22/outsourcedlabor/build-an-invoice-discrepancy-log-for-a-delegated-billing-desk.png",
    "body": [
      "## Record the invoice line and the customer's words",
      "Start with the invoice number, the line item, the amount, and the billing period. Ask the customer to identify the charge they dispute rather than summarizing the whole invoice. Record their description in their own words. The log should let a reviewer open the exact line.",
      "Check the contract, the rate card, or the approved change that supports the charge. Record the source and the date it was checked. A charge that cannot be tied to a term is a candidate for correction. The desk should not defend a line it cannot explain.",
      "Separate a billing error from a misunderstanding about the service. Record the category and the reason. A misunderstanding may need an explanation rather than a credit. The log should show which resolution path applies.",
      "Name the owner who will decide and the date the customer was told. Record any credit or correction and the approval. A decision without a customer confirmation remains open. The log should close with the outcome, not only the analysis."
    ],
    "takeaways": [
      "Record the invoice, the line, the amount, and the customer's specific dispute.",
      "Tie each discrepancy to a contract term or an approved rate.",
      "Separate a billing error from a customer misunderstanding.",
      "Record the credit, the correction, or the explanation and the owner."
    ],
    "faqs": [
      {
        "q": "Should the desk issue a credit immediately?",
        "a": "Only within the approved authority; otherwise record the request and route it to the billing owner."
      },
      {
        "q": "What if the contract is unclear?",
        "a": "Record the ambiguity and ask the owner for an interpretation before changing the invoice."
      },
      {
        "q": "How long should a discrepancy stay open?",
        "a": "Follow the client's service level and record the next follow-up date."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  {
    "slug": "set-a-shipment-hold-release-checklist-for-a-delegated-fulfillment-desk",
    "title": "Set a shipment hold release checklist for a delegated fulfillment desk",
    "excerpt": "A hold release checklist that records the reason for the hold, the approver, the evidence, and the release time, so a parcel is not released on an informal request.",
    "minutes": 7,
    "publicationDate": "2026-11-22",
    "publishedAt": "2026-11-22",
    "image": "/daily22/outsourcedlabor/set-a-shipment-hold-release-checklist-for-a-delegated-fulfillment-desk.png",
    "body": [
      "## Record the hold and its owner",
      "Every hold should have a reason code, a start time, and the person or system that placed it. Record the order and the parcel identifier. A hold without an owner becomes a permanent exception. The checklist should show who can answer the question.",
      "Separate a payment hold from a compliance, address, or inventory hold. Each type has a different release condition and a different approver. Record the type and the evidence required. The desk should not apply one release rule to every hold.",
      "Tell the customer the status and the expected next step without disclosing internal notes. Record the message and the date. A customer who is told only that the order is on hold will contact again. The record should show what was communicated.",
      "Set a review time for any hold that passes the expected release date. Record the reviewer and the escalation. A hold that is never reviewed becomes a lost parcel. The checklist should make the exception visible."
    ],
    "takeaways": [
      "Record why the shipment is on hold and who placed it.",
      "Name the approver who can release the hold and the evidence required.",
      "Confirm the payment, compliance, or inventory condition before release.",
      "Log the release time and the person who executed it."
    ],
    "faqs": [
      {
        "q": "Can a customer service agent release a hold?",
        "a": "Only when the written authority names that role and the condition is met."
      },
      {
        "q": "What if the hold reason is unclear?",
        "a": "Keep the parcel on hold and route the question to the owner who placed it."
      },
      {
        "q": "Should the desk tell the customer the internal reason?",
        "a": "Share the status and the next step, not internal notes or another customer's information."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  }
];
type Nov22BlogSection={heading:string;paragraphs:string[]};
export const november22BlogDetails: Record<string,{updated:string;published:string;takeaways:string[];sections:Nov22BlogSection[];faqs:{q:string;a:string}[];sources:{name:string;url:string;note:string}[];related:string[]}> = {
  "build-a-returns-merchandise-authorization-log-for-a-delegated-support-desk": {
    "updated": "2026-11-22",
    "published": "2026-11-22",
    "takeaways": [
      "Record the order, the reason, the authorization date, and the carrier scan before promising a refund.",
      "Separate a return that was authorized from one that was received and inspected.",
      "Give every exception a named owner and a due date.",
      "Review the log weekly for requests that never received a scan."
    ],
    "sections": [
      {
        "heading": "Open the record with the order and the reason",
        "paragraphs": [
          "A return starts with a customer request, not with a label. Record the order number, the item, the purchase date, and the reason the customer gave in their own words. Note the channel and the date the request arrived. The log should let a reviewer find the original sale without asking the desk.",
          "Classify the reason into a small set such as wrong item, damaged in transit, changed mind, or quality concern. The class drives the evidence the desk needs and the policy that applies. Record the class and the person who assigned it. A vague reason produces a vague return.",
          "Check the return window and the item condition rule before authorizing anything. Record the rule and the date it was checked. A request outside the window may still be reviewable, but the exception needs a named approver. The log should show the rule, not only the answer.",
          "Record the customer's preferred resolution, such as refund, replacement, or store credit. Note whether the desk explained the available options. A resolution chosen by the desk without the customer's input creates a second contact. Keep the preference beside the reason."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Does an authorization mean the refund is approved?",
        "a": "No. The authorization allows the return; the refund follows inspection and the policy check."
      },
      {
        "q": "What if the customer has no printer?",
        "a": "Record the alternative label method and the date it was sent so the return can still be tracked."
      },
      {
        "q": "Who owns a return that arrives damaged?",
        "a": "The desk records the condition and routes the decision to the named returns owner."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  "set-a-carrier-claim-evidence-checklist-for-a-delegated-logistics-desk": {
    "updated": "2026-11-22",
    "published": "2026-11-22",
    "takeaways": [
      "Record the tracking history and the delivery exception before drafting the claim.",
      "Attach proof of value and proof of the customer's loss to every claim.",
      "Check the carrier's filing deadline and the required form before submission.",
      "Log the claim number and the response date so the desk can follow up."
    ],
    "sections": [
      {
        "heading": "Assemble the shipment facts first",
        "paragraphs": [
          "Record the tracking number, the ship date, the service level, the origin, the destination, and the declared value. Copy the facts from the label and the carrier record rather than from a chat summary. Note the date the shipment was handed to the carrier. The claim should describe one shipment, not a batch of similar orders.",
          "Capture the full tracking history, including the last scan and any exception code. Save a dated copy of the carrier page because the live page can change. Record the scan location and the time. A claim that cites only a missing package without the history is hard to review.",
          "Record the packaging and the item description as they appear in the order. Note whether the shipment was insured and at what value. Record the source of the value, such as the invoice or the order total. The claim should connect the declared value to a document the carrier can check.",
          "Name the person who assembled the claim and the reviewer who approved it. Record both dates. A claim filed by one person without a second check often misses a required attachment. The approval line also gives the client a contact for follow-up."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is a tracking number enough for a claim?",
        "a": "No. The carrier usually needs the shipment details, the value proof, and the loss description."
      },
      {
        "q": "What if the customer refuses to provide a statement?",
        "a": "Record the refusal and use the available records; note the gap in the claim file."
      },
      {
        "q": "Should the desk file before the customer confirms?",
        "a": "File only when the policy allows it and record the customer communication that supports the decision."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  "create-a-customer-address-change-verification-record-for-a-delegated-order-desk": {
    "updated": "2026-11-22",
    "published": "2026-11-22",
    "takeaways": [
      "Verify the customer and the order before changing any shipping address.",
      "Record the old address, the new address, and the verification method.",
      "Confirm the carrier accepted the change and note the cutoff risk.",
      "Escalate a change after dispatch instead of editing the order record."
    ],
    "sections": [
      {
        "heading": "Confirm the order and the customer before the edit",
        "paragraphs": [
          "Ask for the order number and the email or phone number on the order. Compare the answer with the order record rather than with the caller's spelling. Record the verification method and the date. A change made to the wrong order can send a parcel to a stranger.",
          "Check whether the order has shipped and whether the carrier allows a change. Record the status and the carrier rule. An address edit after dispatch is a carrier request, not an order edit. The log should show which path was used.",
          "Record the old address and the new address exactly as the customer provided them. Note any unit, access code, or delivery instruction separately. A merged address field hides the part that changed. The record should make the difference obvious.",
          "Name the person who approved the change and the time it was made. Record the confirmation sent to the customer. An approval without a confirmation leaves the customer unsure. The log should show what the customer was told."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can the desk change an address after the parcel ships?",
        "a": "Only through the carrier's process, and the desk should record the carrier confirmation rather than editing the order."
      },
      {
        "q": "What counts as verification?",
        "a": "A method the policy names, such as a callback to the number on file or a signed confirmation."
      },
      {
        "q": "Should the desk share the full address in chat?",
        "a": "Share only the minimum needed and keep the full record in the order system."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  "build-an-invoice-discrepancy-log-for-a-delegated-billing-desk": {
    "updated": "2026-11-22",
    "published": "2026-11-22",
    "takeaways": [
      "Record the invoice, the line, the amount, and the customer's specific dispute.",
      "Tie each discrepancy to a contract term or an approved rate.",
      "Separate a billing error from a customer misunderstanding.",
      "Record the credit, the correction, or the explanation and the owner."
    ],
    "sections": [
      {
        "heading": "Record the invoice line and the customer's words",
        "paragraphs": [
          "Start with the invoice number, the line item, the amount, and the billing period. Ask the customer to identify the charge they dispute rather than summarizing the whole invoice. Record their description in their own words. The log should let a reviewer open the exact line.",
          "Check the contract, the rate card, or the approved change that supports the charge. Record the source and the date it was checked. A charge that cannot be tied to a term is a candidate for correction. The desk should not defend a line it cannot explain.",
          "Separate a billing error from a misunderstanding about the service. Record the category and the reason. A misunderstanding may need an explanation rather than a credit. The log should show which resolution path applies.",
          "Name the owner who will decide and the date the customer was told. Record any credit or correction and the approval. A decision without a customer confirmation remains open. The log should close with the outcome, not only the analysis."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Should the desk issue a credit immediately?",
        "a": "Only within the approved authority; otherwise record the request and route it to the billing owner."
      },
      {
        "q": "What if the contract is unclear?",
        "a": "Record the ambiguity and ask the owner for an interpretation before changing the invoice."
      },
      {
        "q": "How long should a discrepancy stay open?",
        "a": "Follow the client's service level and record the next follow-up date."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  },
  "set-a-shipment-hold-release-checklist-for-a-delegated-fulfillment-desk": {
    "updated": "2026-11-22",
    "published": "2026-11-22",
    "takeaways": [
      "Record why the shipment is on hold and who placed it.",
      "Name the approver who can release the hold and the evidence required.",
      "Confirm the payment, compliance, or inventory condition before release.",
      "Log the release time and the person who executed it."
    ],
    "sections": [
      {
        "heading": "Record the hold and its owner",
        "paragraphs": [
          "Every hold should have a reason code, a start time, and the person or system that placed it. Record the order and the parcel identifier. A hold without an owner becomes a permanent exception. The checklist should show who can answer the question.",
          "Separate a payment hold from a compliance, address, or inventory hold. Each type has a different release condition and a different approver. Record the type and the evidence required. The desk should not apply one release rule to every hold.",
          "Tell the customer the status and the expected next step without disclosing internal notes. Record the message and the date. A customer who is told only that the order is on hold will contact again. The record should show what was communicated.",
          "Set a review time for any hold that passes the expected release date. Record the reviewer and the escalation. A hold that is never reviewed becomes a lost parcel. The checklist should make the exception visible."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can a customer service agent release a hold?",
        "a": "Only when the written authority names that role and the condition is met."
      },
      {
        "q": "What if the hold reason is unclear?",
        "a": "Keep the parcel on hold and route the question to the owner who placed it."
      },
      {
        "q": "Should the desk tell the customer the internal reason?",
        "a": "Share the status and the next step, not internal notes or another customer's information."
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
        "note": "data-minimization and access controls for customer records"
      }
    ],
    "related": []
  }
};
