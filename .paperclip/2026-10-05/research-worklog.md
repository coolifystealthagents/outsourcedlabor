# October 5 Research worklog

Cycle task: OUTAAAAAAAA-75. Handoff target: OUTAAAAAAAA-76. Repository `coolifystealthagents/outsourcedlabor`, baseline `d805fae407f1a5a56c7d7b7ef2e64bacba79939d`, local branch `routine/outaaaaaaaa-75-20261005`. Publication timezone is UTC. The cycle label is not a publication date; the Blog integrator must set the actual date immediately before the single combined push.

## Inventory audit

Audited every slug and title in `app/research/*.ts`, the durable Research ledger, the September 28 and October 2 manifests, and the production inventory. No October 5 Research work existed. Prior worktrees and records remain untouched. The five selected questions do not reuse a prior slug or merely rename a previous study.

## Independent study briefs

1. `research-outsourced-cash-application-exception-study` — Determine which remittances a Philippines-based accounts-receivable specialist can match and which ambiguous receipts require finance ownership. Unit: one receipt-to-open-item decision. Distinct method: blind replay of matching decisions, with unmatched cash and false-match costs reported separately. Sources: GAO Green Book, FinCEN email-compromise advisory, NIST CSF 2.0.
2. `research-philippines-payment-dispute-evidence-boundary` — Test whether support can assemble a reproducible payment-dispute packet without deciding liability or making a customer promise. Unit: one disputed transaction and its deadline chain. Distinct method: evidence-chain completeness and deadline survivability under reviewer reconstruction. Sources: CFPB Regulation Z dispute guidance, FTC truth-in-advertising guidance, NIST Privacy Framework.
3. `research-outsourced-supplier-insurance-evidence-monitoring` — Evaluate a bounded supplier-certificate monitoring lane without treating a certificate as proof of coverage. Unit: one supplier, requirement, policy document, and review date. Distinct method: document-state and dependency mapping with owner confirmation. Sources: GAO Green Book, NIST CSF 2.0, FTC data-security guidance.
4. `research-philippines-workforce-offboarding-completeness` — Measure whether access, assets, queues, and retained knowledge reach a recoverable state after a worker leaves. Unit: one offboarding event across named systems. Distinct method: timed independent access and work-recovery tests, not checklist completion. Sources: CISA identity and access guidance, NIST SP 800-53 Rev. 5, NIST CSF 2.0.
5. `research-outsourced-catalog-price-change-control` — Decide which catalog price changes can be prepared offshore while commercial and legal owners retain pricing authority. Unit: one SKU/channel/market/effective-window change. Distinct method: pre/post propagation reconciliation across storefront, feed, cart, and promotion states. Sources: FTC Advertising FAQs, FTC online-advertising guidance, GAO Green Book.

## Qualitative originality design

Each article will use a different reader decision, observation unit, evidence model, sampling method, failure mechanism, worked example, and conclusion. Repeated section sequences and reusable prose blocks are prohibited. Final review must compare substantive sentences and paragraphs against all five new articles and the prior corpus, in addition to the five-word-shingle metric.

## Source check

Authoritative source pages were checked on 2026-10-05. Current drafting uses source propositions only within their stated scope; no authority is represented as endorsing OutsourcedLabor.com or proving a staffing outcome.

## Completed local handoff

All five independently structured records are implemented in `app/research/oct5-research-records.ts` and wired ahead of prior Research inventory in `app/fleet-content.ts`. Body-only lengths are 1,267; 1,209; 1,201; 1,274; and 1,241 words. The validator reports zero repeated substantive paragraphs, zero repeated substantive sentences, zero prior-corpus slug collisions, and 0.004177 maximum pairwise five-word-shingle containment. Qualitative review found distinct decision units, evidence models, methods, worked examples, argument sequences, and reader outcomes.

Locked dependencies installed with `npm ci --include=dev`; `npm run lint` passed. `npm run build` passed and emitted all five routes among 705 static pages, with only the repository's pre-existing CSS `flex-start` warning. Local production-server checks returned HTTP 200 for every route and confirmed each title, canonical, visible date, `datePublished`, substantive body, and image reference; the Research index and sitemap contain all five. The shared SVG returned HTTP 200 as `image/svg+xml`, 3,384 bytes, with a valid SVG signature. Direct source checks found nine HTTP 200 responses; GAO and three FTC pages return automated-client 403 responses, while no source is 404 after replacing the stale CISA citation with its current Zero Trust Maturity Model page.

The site timezone is UTC. The record date remains provisional until OUTAAAAAAAA-76 reconciles it against the actual first-publication date immediately before the sole combined push. Research has not pushed, deployed, or accessed Coolify. The durable manifest is `.paperclip/2026-10-05/research.json`; the reproducible QA command is `node scripts/validate-oct5-research.mjs`.
