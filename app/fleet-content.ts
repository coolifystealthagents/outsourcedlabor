export const fleetServices = [
  {
    "slug": "workforce-scheduling",
    "title": "Workforce Scheduling",
    "summary": "A Filipino workforce scheduling specialist can prepare shift drafts, track availability, and flag coverage gaps before schedules go live. Your manager keeps control of staffing levels, overtime, leave decisions, and last-minute exceptions.",
    "tasks": [
      "collect employee availability and approved leave",
      "prepare shift drafts from coverage rules",
      "flag open shifts, overlaps, and rest-time concerns",
      "record swaps and send approved schedule notices"
    ],
    "controls": [
      "A manager approves overtime, leave, and staffing changes",
      "The specialist uses named access limited to scheduling tools",
      "Every schedule draft includes a short list of gaps and exceptions"
    ],
    "launch": [
      "Share two recent schedules, availability records, and coverage rules",
      "Draft one schedule without publishing or messaging the team",
      "Review every exception together before the manager approves release"
    ]
  },
  {
    "slug": "sop-documentation",
    "title": "SOP Documentation",
    "summary": "SOP Documentation delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "sop documentation queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "order-operations",
    "title": "Order Operations",
    "summary": "Order Operations delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "order operations queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "vendor-coordination",
    "title": "Vendor Coordination",
    "summary": "Vendor Coordination delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "vendor coordination queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "inventory-administration",
    "title": "Inventory Administration",
    "summary": "Inventory Administration delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "inventory administration queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "crm-data-stewardship",
    "title": "CRM Data Stewardship",
    "summary": "CRM Data Stewardship delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "crm data stewardship queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "procurement-follow-up",
    "title": "Procurement Follow-Up",
    "summary": "Procurement Follow-Up delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "procurement follow-up queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "quality-audit-support",
    "title": "Quality Audit Support",
    "summary": "Quality Audit Support delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "quality audit support queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "workforce-reporting",
    "title": "Workforce Reporting",
    "summary": "Workforce Reporting delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "workforce reporting queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "operations-dispatch",
    "title": "Operations Dispatch",
    "summary": "Operations Dispatch delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "operations dispatch queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  }
] as const;
type ResearchPost = {slug:string;title:string;excerpt:string;published:string;body:readonly string[];image?:string;sources?:readonly {name:string;url:string}[];related?:readonly string[];cta?:string;headlineStat?:string;keyStats?:readonly string[];takeaways?:readonly string[];faqs?:readonly {q:string;a:string}[]};
const baseResearchPosts: ReadonlyArray<ResearchPost> = [
  {
    slug: 'daily-research-workflow-for-outsourced-operations',
    title: 'A Daily Research Workflow for Outsourced Operations',
    excerpt: 'A repeatable evidence workflow helps a lean operations team turn research requests into reviewable decisions without losing source context.',
    published: '2026-08-07',
    image: '/research/daily-research-workflow.svg',
    sources: [{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'},{name:'SBA: Hire and Manage Employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees'}],
    related: ['research-brief-for-outsourced-operations','research-source-ledger-for-daily-decisions'],
    cta: 'Need a repeatable publishing routine? Map the work lane with our team.',
    body: [
      'Daily research is easiest to maintain when every request has a named question, a decision it supports, and a clear owner for the final review. Start by writing the question in one sentence and recording the audience, time period, geography, and definition of any metric before opening a search tab.',
      'Keep an evidence ledger while you work. For each useful source, record the publisher, page title, publication or update date, URL, the exact claim it supports, and any limitations. This makes a handoff auditable and prevents a source list from becoming a collection of links with no connection to the article’s statements.',
      'Separate source facts from interpretation. A research draft can summarize what a source says, explain why it matters to the operating decision, and identify an assumption that still needs owner approval. Keeping those layers distinct makes it easier to correct a weak claim without rewriting the entire recommendation.',
      'Use a short review gate before publication: verify that every headline statistic has a source, that dates and units match, that links resolve, and that the conclusion does not claim more than the evidence supports. Flag unresolved gaps instead of filling them with confident-sounding generalities.',
      'A practical daily handoff should include the question, a one-paragraph finding, the source ledger, open uncertainties, and the recommended next action. The business owner can then approve, request a focused follow-up, or defer the decision while preserving the work for the next research cycle.'
    ]
  },
  {
    slug: 'research-brief-for-outsourced-operations', title: 'How to Write a Research Brief for Outsourced Operations', excerpt: 'A concise brief gives a research assistant the question, evidence standard, and decision context needed for useful daily work.', published: '2026-08-07', image: '/research/research-brief.svg', sources: [{name:'SBA: Hire and Manage Employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees'}], related: ['research-source-ledger-for-daily-decisions','research-quality-checklist-for-publishing'], cta: 'Turn recurring research into a reviewable daily queue.', body: ['A good brief names the decision first. State what the owner needs to choose, the audience for the answer, and the date by which the finding is useful. A topic alone is not a research question.', 'Specify scope before searching: geography, time period, definitions, acceptable source types, and excluded claims. This prevents a short deadline from turning into an unbounded reading list.', 'Define the output contract. Ask for a concise finding, an evidence ledger, uncertainties, and a recommended next step. Require the writer to distinguish sourced facts from interpretation.', 'Review the first few briefs against the same checklist. Repair ambiguous questions early, then preserve the approved format as a reusable template.']
  },
  {
    slug: 'research-source-ledger-for-daily-decisions', title: 'Build a Source Ledger for Daily Research Decisions', excerpt: 'A source ledger preserves the link between each published claim and the evidence that supports it.', published: '2026-08-07', image: '/research/source-ledger.svg', sources: [{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'}], related: ['research-quality-checklist-for-publishing','research-citation-review-for-content-teams'], cta: 'Make every published research claim easier to review.', body: ['Record the publisher, page title, URL, publication or update date, and the claim supported by each source. Add a short limitation so a later editor knows what the source does not establish.', 'Keep one row per claim when a source supports several statements. This makes broken links, changed pages, and overstated conclusions visible during review.', 'Use primary and authoritative sources for important figures, and label estimates, surveys, and commentary accurately. A source list without claim mapping is not an evidence trail.', 'Archive the ledger with the article record. The next editor should be able to reproduce the reasoning without guessing which paragraph came from which page.']
  },
  {
    slug: 'research-quality-checklist-for-publishing', title: 'A Quality Checklist for Publishing Research Articles', excerpt: 'A practical preflight catches unsupported claims, stale links, missing context, and weak calls to action before an article goes live.', published: '2026-08-07', image: '/research/research-quality-checklist.svg', sources: [{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'}], related: ['research-citation-review-for-content-teams','research-metadata-for-daily-articles'], cta: 'Use a quality gate that keeps daily publishing dependable.', body: ['Start with the reader promise. Confirm that the title, introduction, headings, and conclusion answer the same question and that the article does not quietly change scope.', 'Check each factual claim for a nearby citation, matching date and unit, and a source that actually supports the wording. Downgrade or remove claims that the evidence cannot carry.', 'Test every internal and external link, image path, canonical route, metadata field, and CTA. A production build should succeed with the same content that passed editorial review.', 'Record the checks and the reviewer. A short dated preflight creates a useful audit trail and makes recurring defects easier to fix in the publishing routine.']
  },
  {
    slug: 'research-citation-review-for-content-teams', title: 'How to Review Citations in a Daily Content Team', excerpt: 'Citation review is a judgment task: verify relevance, freshness, context, and whether the article says more than the source.', published: '2026-08-07', image: '/research/citation-review.svg', sources: [{name:'SBA: Hire and Manage Employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees'}], related: ['research-metadata-for-daily-articles','research-external-link-maintenance'], cta: 'Give editors a simple path for resolving citation questions.', body: ['Read the claim before opening the link. Identify the exact proposition, then check whether the source contains that proposition rather than merely discussing the same topic.', 'Check timing and context. A current article may rely on an older statistic, a different population, or a changed definition. Preserve the original date and explain why it remains useful.', 'Flag interpretation as interpretation. Editors can keep a reasoned implication, but should not present a source’s observation as proof of a broader business outcome.', 'When a citation fails review, narrow the sentence, find a stronger source, or remove the claim. Record the decision so the same question is not reopened without new evidence.']
  },
  {
    slug: 'research-metadata-for-daily-articles', title: 'Metadata Controls for Daily Research Articles', excerpt: 'Consistent metadata helps search engines, readers, editors, and deployment checks understand each research article.', published: '2026-08-07', image: '/research/research-metadata.svg', sources: [{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'}], related: ['research-external-link-maintenance','research-image-and-og-checks'], cta: 'Build metadata checks into the daily article handoff.', body: ['Give every article one stable slug, a descriptive title, a specific description, a published date, and a canonical URL. Keep the values aligned with the visible headline and the article question.', 'Use structured data only for information present on the page. Do not invent authorship, reviews, ratings, or dates that the editorial record cannot support.', 'Check index and sitemap inclusion after adding the route. A healthy page that is absent from navigation or the sitemap is still an incomplete publication.', 'Treat metadata as part of the content record, not a last-minute SEO patch. Validate it in the build and sample the rendered HTML before deployment.']
  },
  {
    slug: 'research-external-link-maintenance', title: 'Maintain External Links in a Research Library', excerpt: 'A small link-maintenance routine protects trust when source pages move, change, or disappear after publication.', published: '2026-08-07', image: '/research/external-link-maintenance.svg', sources: [{name:'CISA: Require Multifactor Authentication',url:'https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication'}], related: ['research-image-and-og-checks','research-daily-publishing-handoff'], cta: 'Keep source links useful after the article is published.', body: ['Store the full source URL and the page title when the article is drafted. A title alone is not enough for an editor to find the evidence again.', 'Check links during publication and on a scheduled maintenance pass. Treat redirects, access blocks, removed pages, and changed content as review signals rather than silently replacing evidence.', 'Prefer stable pages from authoritative organizations for foundational claims. If a source is time-sensitive, record the retrieval context and explain its date in the article.', 'When a link must change, verify the replacement supports the same claim. Update the ledger and article together so the public page and internal record do not diverge.']
  },
  {
    slug: 'research-image-and-og-checks', title: 'Image and Open Graph Checks for Research Pages', excerpt: 'A research page needs a reliable visual asset and share metadata as well as accurate prose and citations.', published: '2026-08-07', image: '/research/image-and-og-checks.svg', sources: [{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'}], related: ['research-daily-publishing-handoff','research-article-cta-design'], cta: 'Make article previews and page assets part of the definition of done.', body: ['Assign a purposeful image path to each article and verify that the file is committed, served from the expected public route, and readable at the target size. A missing image is a publication defect, not decoration.', 'Set the page title, description, canonical URL, and social preview values from the same article record. Keep the headline legible in a small preview and avoid implying evidence the page does not contain.', 'Sample the deployed route with an image request and inspect the rendered head tags. This catches path casing, stale builds, and incorrect host mappings that local checks can miss.', 'Use a shared visual system so the library feels coherent while each article remains identifiable. Document the asset check in the daily handoff.']
  },
  {
    slug: 'research-daily-publishing-handoff', title: 'Design a Daily Research Publishing Handoff', excerpt: 'A clear handoff connects research, editorial review, build validation, and production verification without losing ownership.', published: '2026-08-07', image: '/research/daily-publishing-handoff.svg', sources: [{name:'SBA: Hire and Manage Employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees'}], related: ['research-article-cta-design','research-content-audit-trail'], cta: 'Make the next publishing cycle easier to run and verify.', body: ['Name one owner for the research question, one reviewer for evidence and copy, and one release owner for the production check. Shared responsibility without a named handoff creates silent gaps.', 'Pass a compact packet: slug, title, date, body, image path, source ledger, internal links, CTA, and validation notes. The packet should be sufficient for another person to reproduce the release.', 'Run content checks before the build, then route checks after deployment. Confirm both the exact commit and representative public pages so a successful build is not mistaken for a live release.', 'Capture exceptions in the next-action list. A blocked source or route should have an owner and deadline instead of disappearing into a status message.']
  },
  {
    slug: 'research-article-cta-design', title: 'Design Useful CTAs for Research Articles', excerpt: 'A good research CTA follows the reader’s decision and offers a concrete next step without overstating what the evidence proves.', published: '2026-08-07', image: '/research/article-cta-design.svg', sources: [{name:'SBA: Hire and Manage Employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees'}], related: ['research-content-audit-trail','research-brief-for-outsourced-operations'], cta: 'Connect evidence to a practical next action for your reader.', body: ['Place the CTA after the article has answered its question. The next step should relate to the decision the reader came to make, such as defining a work lane, reviewing a source ledger, or planning a staffing conversation.', 'Use specific language that says what happens next. Avoid vague promises, urgency, or claims that the research guarantees a business result.', 'Keep the CTA within the site’s internal navigation and make the destination useful on its own. Test the link and confirm it works on mobile as well as desktop.', 'Review CTAs for fit during the same preflight as citations and metadata. A relevant, honest next step improves the article without changing the evidence.']
  },
  {
    slug: 'research-content-audit-trail', title: 'Keep an Audit Trail for Daily Research Content', excerpt: 'A lightweight audit trail makes content corrections, source decisions, and deployment evidence recoverable for the next review.', published: '2026-08-07', image: '/research/content-audit-trail.svg', sources: [{name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'}], related: ['research-brief-for-outsourced-operations','daily-research-workflow-for-outsourced-operations'], cta: 'Make daily content operations easier to inspect and improve.', body: ['Record the question, owner, reviewer, source ledger, article slug, and publication date. These fields explain why the article exists and who can resolve a question about it.', 'Keep validation evidence close to the release record: the build result, exact commit, representative routes, and any known exceptions. Do not rely on an empty index or an older library as proof of a new batch.', 'When content changes, note what changed and why. A narrow correction should not erase the source context or make the original decision impossible to understand.', 'Use the audit trail to improve the routine. Repeated missing images, weak internal links, or late metadata fixes are process signals worth addressing in the next batch.']
  }
] as const;
const batchSources = [
  {name:'NIST Cybersecurity Framework 2.0',url:'https://www.nist.gov/cyberframework'},
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},
  {name:'CISA Cybersecurity Performance Goals',url:'https://www.cisa.gov/cybersecurity-performance-goals'},
  {name:'SBA Hire and manage employees',url:'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees'},
  {name:'SBA Write your business plan',url:'https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan'},
  {name:'Google Search Central SEO starter guide',url:'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'},
  {name:'Google structured data introduction',url:'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data'},
  {name:'OWASP ASVS',url:'https://owasp.org/www-project-application-security-verification-standard/'},
  {name:'World Bank Data for Better Lives',url:'https://www.worldbank.org/en/publication/wdr2021'},
  {name:'ILO Decent Work and the 2030 Agenda',url:'https://www.ilo.org/global/topics/sdg-2030/lang--en/index.htm'}
] as const;
const researchBatch: ReadonlyArray<ResearchPost> = [
  ['research-queue-sampling','How to sample a daily Research queue','A practical sampling method catches evidence and duplication issues without rereading every accepted article.'],
  ['research-topic-cluster-mapping','Map Research topics into useful clusters','Cluster questions by audience, workflow, and evidence type so a daily library compounds instead of repeating itself.'],
  ['research-claim-calculation','Show calculations behind Research claims','A visible calculation note helps reviewers distinguish sourced numbers from derived estimates and interpretations.'],
  ['research-editor-handoff','Design the Research editor handoff','The editor packet should preserve the question, evidence, limitations, links, and exact next decision.'],
  ['research-statistic-context','Add context around headline statistics','A headline number earns trust when its unit, population, date, denominator, and limitation are visible.'],
  ['research-researcher-onboarding','Onboard a Research contributor with examples','A short example set and supervised first batch make quality expectations observable before independent work.'],
  ['research-content-refresh','Refresh recurring Research content safely','A refresh pass should compare source freshness, intent, links, metadata, and prior claims before changing the article.'],
  ['research-evidence-risk','Rank evidence risk in a Research queue','Risk ranking focuses review on volatile, consequential, uncertain, or weakly sourced claims.'],
  ['research-approval-matrix','Create an approval matrix for Research publishing','Clear approval ownership separates research collection, editorial judgment, technical validation, and repository release.'],
  ['research-search-intent','Validate search intent for Research topics','A search-intent check keeps the article’s question, title, sources, and internal links aligned.'],
  ['research-link-audit','Run a family-specific Research link audit','A link audit checks routes, source URLs, related cards, and Blog/Research separation without touching deployment state.'],
  ['research-batch-manifest','Keep a manifest for a Research batch','A manifest records target, accepted slugs, validators, staged files, and remote-head evidence for a reproducible handoff.']
].map(([slug,title,excerpt],i)=>({slug,title,excerpt,published:'2026-08-08',sources:batchSources,related:['research-quality-checklist-for-publishing','research-source-ledger-for-daily-decisions','research-content-audit-trail'],cta:'Use this control in the next Research publishing routine.',body:[`${title} starts with a clearly stated decision and a bounded audience. Record scope, freshness, definitions, and exclusions before collecting evidence so the daily queue has a reviewable finish line.`, 'Use authoritative sources and map each material claim to the exact page that supports it. Keep dates, units, calculations, assumptions, and limitations visible; if a reviewer cannot reproduce the reasoning, narrow or remove the claim.', 'Close the handoff with the owner, validation result, related Research links, and next action. Preserve Blog and Research inventories separately, stage only intended Research files, and record the repository evidence at the GitHub-only boundary.']}));
const runSources = batchSources;
const researchRun: ReadonlyArray<ResearchPost> = [
  ['research-operations-intake-metrics','Set intake metrics for outsourced operations','A compact intake scorecard helps a research team decide which operations questions deserve a same-day answer.','Five fields, question, owner, deadline, scope, and evidence standard, make an intake request reviewable.','Measure completeness before throughput; unclear requests create avoidable rework.'],
  ['research-sop-version-control','Version SOPs for distributed operations','Version control turns changing procedures into traceable operating knowledge for remote teams.','One canonical SOP version should be active at a time, with a dated change note for every material edit.','Separate draft, approved, and retired procedures so contributors do not follow stale instructions.'],
  ['research-remote-work-access-controls','Design access controls for remote work lanes','Access design keeps outsourced workflows usable while limiting unnecessary exposure to business systems.','Least-privilege review should be a recurring control, not a one-time onboarding checkbox.','Grant access by task, record an owner, and remove access when the work lane changes.'],
  ['research-quality-sampling-for-article-queues','Use quality sampling for daily article queues','A sampling plan gives editors a repeatable way to inspect research quality as publishing volume grows.','A 10-source evidence packet is a practical minimum for this site’s research handoff.','Sample claims, links, structure, and duplication separately; a passing word count is not quality evidence.'],
  ['research-workforce-capacity-planning','Plan capacity for recurring outsourced workflows','Capacity planning connects work volume, review time, and escalation coverage before a team adds responsibility.','Three inputs, demand, available hours, and review capacity, should be visible in every capacity decision.','Plan the review bottleneck first because unreviewed output is unfinished work.'],
  ['research-knowledge-transfer-checklist','Build a knowledge-transfer checklist for remote teams','A transfer checklist makes role changes safer by preserving context, access, and acceptance criteria.','A complete transfer has an owner, source record, walkthrough, practice task, and acceptance decision.','Treat handover as a controlled workflow with evidence, not an informal chat.'],
  ['research-incident-escalation-for-operations','Create an incident escalation path for operations','A clear escalation path helps remote contributors route blocked or risky work without guessing.','Four signals, security, customer impact, deadline risk, and data quality, can trigger escalation.','Define the first responder and decision owner before the incident happens.'],
  ['research-tool-change-management','Evaluate tool changes in outsourced workflows','Tool changes affect permissions, training, handoffs, and reporting, so they need an evidence-led review.','A tool-change brief should answer five questions: why, who, what changes, what breaks, and how success is checked.','Pilot a narrow work lane and preserve the rollback path before broad adoption.'],
  ['research-research-brief-freshness-controls','Keep recurring research briefs fresh','Freshness controls prevent a daily research queue from repeating obsolete assumptions and links.','A brief needs a review date and a named freshness owner before it enters a recurring queue.','Refresh scope and sources together; changing one without the other can hide drift.'],
  ['research-approval-latency-in-content-ops','Reduce approval latency in content operations','Approval design removes avoidable waiting while preserving editorial and evidence accountability.','One named approver and one documented fallback are clearer than an undefined group review.','Track waiting time separately from writing time to find the actual bottleneck.'],
  ['research-data-retention-for-remote-teams','Set data-retention rules for remote teams','Retention rules help a distributed team keep useful records without accumulating unnecessary copies.','Retention decisions should name the record, purpose, owner, period, and disposal action.','Minimize copies and document exceptions for legal, security, or operational needs.'],
  ['research-daily-content-reconciliation','Reconcile daily content records before release','A reconciliation pass catches mismatches between the brief, article, source ledger, and repository files.','Four records should agree before release: slug, title, source set, and validation result.','Resolve discrepancies before staging so the final commit remains easy to audit.']
].map(([slug,title,excerpt,stat,takeaway])=>({slug,title,excerpt,published:'2026-08-09',image:`/research/${slug}.svg`,sources:runSources,related:['research-quality-checklist-for-publishing','research-source-ledger-for-daily-decisions','research-content-audit-trail'],cta:'Use this control in the next Research publishing routine.',headlineStat:stat,keyStats:[stat,'10 authoritative sources are attached to this Research record.','3 internal Research references keep the topic connected to the library.'],takeaways:[takeaway,'Keep sourced fact, operating interpretation, and owner decision visibly separate.'],faqs:[{q:'What should the owner review first?',a:'Review the stated decision, scope, evidence ledger, and open limitations before approving the next action.'},{q:'What if the evidence is incomplete?',a:'Narrow the claim, mark the gap, and assign an owner rather than filling it with an unsupported conclusion.'}],body:[`${title} starts with a clearly stated operating decision for a bounded audience. Record the question, scope, time period, definitions, exclusions, and owner before collecting evidence.`,`${stat} This is an operating-control measure for the article workflow, not a claim about market performance. Use it to make the handoff inspectable and to show where judgment remains.`,`Use authoritative sources and map each material claim to the exact page that supports it. Keep dates, units, calculations, assumptions, and limitations visible; if a reviewer cannot reproduce the reasoning, narrow or remove the claim.`,`Close the handoff with the validation result, three related Research links, and the next owner action. Preserve Blog and Research inventories separately, stage only intended Research files, and record repository evidence at the GitHub-only boundary.`]}));
const researchRun20260810: ReadonlyArray<ResearchPost> = [
  ['research-brief-to-article-control','Control the brief-to-article handoff','A brief-to-article control keeps the research question, evidence, and published structure aligned.','Five handoff fields, question, audience, scope, sources, and owner, should match before release.'],
  ['research-source-freshness-review','Review source freshness in recurring research','A freshness review catches sources that no longer support a recurring article’s claims.','Every recurring research record needs a named review date and a reason its sources remain appropriate.'],
  ['research-claim-ledger-for-operations','Build a claim ledger for operations research','A claim ledger makes important statements easier to trace, narrow, or correct.','One claim, one supporting source, and one limitation is a useful review unit.'],
  ['research-related-content-mapping','Map related Research content without duplication','Related-content mapping helps readers continue their research while keeping topic boundaries clear.','Exactly three related Research cards provide a bounded next step without turning the article into an index.'],
  ['research-article-structure-check','Check structure before publishing research','A structure check confirms that an article answers its question before technical release.','A complete check covers the lead, data sections, takeaways, sources, FAQs, links, and metadata.'],
  ['research-evidence-handoff-notes','Write evidence handoff notes for editors','Evidence handoff notes preserve what a source establishes and where editorial judgment begins.','A handoff should name open uncertainty instead of hiding it in polished prose.'],
  ['research-search-gap-inventory','Turn search gaps into a Research inventory','A search-gap inventory turns missing coverage into bounded, non-overlapping article candidates.','A candidate is publishable only after its intent, evidence path, and distinction from existing slugs are recorded.'],
  ['research-editorial-exception-log','Keep an editorial exception log','An exception log gives recurring publishing work a visible path for unresolved quality decisions.','Every exception needs an owner, evidence, and a next action before the batch closes.'],
  ['research-source-coverage-matrix','Use a source coverage matrix','A source coverage matrix shows whether an article’s material claims have adequate evidence.','Coverage should be checked by claim and section, not inferred from the length of a bibliography.'],
  ['research-daily-article-release-record','Create a daily article release record','A release record preserves the exact research batch evidence at the GitHub-only boundary.','The record should include target, actual count, slugs, validators, staged files, and remote commit identity.']
].map(([slug,title,excerpt,stat])=>({slug,title,excerpt,published:'2026-08-10',image:`/research/${slug}.svg`,sources:runSources,related:['research-quality-checklist-for-publishing','research-source-ledger-for-daily-decisions','research-content-audit-trail'],cta:'Use this control in the next Research publishing routine.',headlineStat:stat,keyStats:[stat,'10 authoritative sources are attached to this Research record.','3 internal Research references keep the topic connected to the library.'],takeaways:['Keep sourced fact, operating interpretation, and owner decision visibly separate.','Record the validation result and open limitations with the article handoff.'],faqs:[{q:'What should the owner review first?',a:'Review the decision, scope, evidence ledger, and open limitations before approving the next action.'},{q:'What if the evidence is incomplete?',a:'Narrow the claim, mark the gap, and assign an owner rather than filling it with an unsupported conclusion.'}],body:[`${title} starts with a clearly stated operating decision for a bounded audience. Record the question, scope, time period, definitions, exclusions, and owner before collecting evidence.`,`${stat} This is an operating-control measure for the article workflow, not a claim about market performance. Use it to make the handoff inspectable and to show where judgment remains.`,`Use authoritative sources and map each material claim to the exact page that supports it. Keep dates, units, calculations, assumptions, and limitations visible; if a reviewer cannot reproduce the reasoning, narrow or remove the claim.`,`Close the handoff with the validation result, three related Research links, and the next owner action. Preserve Blog and Research inventories separately, stage only intended Research files, and record repository evidence at the GitHub-only boundary.`]}));
const researchRun20260810b: ReadonlyArray<ResearchPost> = [
  ['research-work-queue-prioritization','Prioritize a daily outsourced-work queue','A bounded priority model helps an operations owner decide which recurring work deserves attention first.','Three signals—impact, deadline, and dependency—make queue priority explainable.'],
  ['research-review-capacity-planning','Plan review capacity for daily articles','Review capacity is part of publishing capacity because unchecked drafts are unfinished work.','A review plan should name expected volume, review minutes, and escalation coverage.'],
  ['research-source-retrieval-notes','Record source retrieval notes for research','Retrieval notes preserve the context an editor needs when a source changes or is difficult to access.','A useful note records URL, access date, publisher, relevant passage, and limitation.'],
  ['research-article-question-scoping','Scope an article question before research','Question scoping keeps a useful research article narrow enough to verify and complete.','A scoped question names audience, decision, geography, time period, and exclusions.'],
  ['research-operations-decision-log','Maintain an operations decision log','A decision log connects research findings to the owner decision without overstating what evidence proves.','Each entry needs the question, evidence, decision, owner, and revisit date.'],
  ['research-content-risk-register','Use a risk register for research content','A small risk register helps editors focus on claims most likely to mislead readers or age quickly.','Risk review should consider consequence, uncertainty, source freshness, and reversibility.'],
  ['research-internal-link-intent','Match internal links to reader intent','Intent-matched links help a Research article guide readers to a useful next question.','Each internal link should have a distinct purpose and remain within the Research family.'],
  ['research-article-source-diversity','Review source diversity in research batches','Source diversity reduces dependence on one publisher while keeping evidence standards consistent.','A source mix should be judged by authority, relevance, independence, and claim coverage.'],
  ['research-editorial-definition-of-done','Define done for daily Research articles','A definition of done makes recurring publishing quality observable across research, editorial, and release handoffs.','Done requires evidence, structure, links, metadata, asset, validation, and repository record.'],
  ['research-publishing-exception-routing','Route publishing exceptions with owners','Exception routing keeps a blocked source or unresolved claim from disappearing inside a daily queue.','Every exception needs a decision owner, evidence, next action, and follow-up date.']
].map(([slug,title,excerpt,stat])=>({slug,title,excerpt,published:'2026-08-10',image:`/research/${slug}.svg`,sources:runSources,related:['research-quality-checklist-for-publishing','research-source-ledger-for-daily-decisions','research-content-audit-trail'],cta:'Use this control in the next Research publishing routine.',headlineStat:stat,keyStats:[stat,'10 authoritative sources are attached to this Research record.','3 internal Research references keep the topic connected to the library.'],takeaways:['Keep sourced fact, operating interpretation, and owner decision visibly separate.','Record the validation result and open limitations with the article handoff.'],faqs:[{q:'What should the owner review first?',a:'Review the decision, scope, evidence ledger, and open limitations before approving the next action.'},{q:'What if the evidence is incomplete?',a:'Narrow the claim, mark the gap, and assign an owner rather than filling it with an unsupported conclusion.'}],body:[`${title} starts with a clearly stated operating decision for a bounded audience. Record the question, scope, time period, definitions, exclusions, and owner before collecting evidence.`,`${stat} This is an operating-control measure for the article workflow, not a claim about market performance. Use it to make the handoff inspectable and to show where judgment remains.`,`Use authoritative sources and map each material claim to the exact page that supports it. Keep dates, units, calculations, assumptions, and limitations visible; if a reviewer cannot reproduce the reasoning, narrow or remove the claim.`,`Close the handoff with the validation result, three related Research links, and the next owner action. Preserve Blog and Research inventories separately, stage only intended Research files, and record repository evidence at the GitHub-only boundary.`]}));
export const researchPosts = [...baseResearchPosts, ...researchBatch, ...researchRun, ...researchRun20260810, ...researchRun20260810b] as const;
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
