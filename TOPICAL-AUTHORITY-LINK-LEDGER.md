# Service-led topical map and link ledger

Reviewed: 2026-09-24

This ledger records only routes generated from the current site data. It is a planning record, not a claim that every proposed body link is already live. Each future edit must confirm the source sentence in generated HTML, preserve the article's narrow question, and add only one reader-useful service handoff.

## Confirmed service pillars

| Service pillar | Confirmed route | Supporting page to inspect | Reader's next question | Proposed body-link purpose |
| --- | --- | --- | --- | --- |
| Workforce Scheduling | `/services/workforce-scheduling` | `/blog/philippines-backup-coverage-schedule` | How should coverage and handoffs be prepared when a regular worker is unavailable? | Let a reader move from the coverage plan to the defined scheduling support scope. |
| SOP Documentation | `/services/sop-documentation` | `/blog/philippines-operations-support-sop` | What should an operations SOP include before it is handed off? | Point from the SOP setup decision to documentation support with owner review. |
| Order Operations | `/services/order-operations` | `/blog/philippines-ecommerce-order-support` | Which order updates and exceptions can be prepared by a support role? | Connect the ecommerce queue guidance to the service scope for order work. |
| Vendor Coordination | `/services/vendor-coordination` | `/blog/outsourced-labor-planning` | Which recurring vendor follow-ups are ready for a clearly bounded role? | Offer a direct route to the vendor coordination scope after the reader has defined recurring work. |
| Inventory Administration | `/services/inventory-administration` | `/blog/filipino-data-entry-quality-checks` | How can a team check records before inventory updates are accepted? | Connect record-quality guidance to the inventory administration service boundary. |
| CRM Data Stewardship | `/services/crm-data-stewardship` | `/blog/philippines-admin-assistant-onboarding` | What access, examples, and review should be ready before CRM support begins? | Move from onboarding preparation to the CRM service scope. |
| Procurement Follow-Up | `/services/procurement-follow-up` | `/blog/outsourced-labor-task-queue-design` | How should a buyer make follow-up work visible and route blocked items? | Offer the procurement service only where the queue and owner decision are already defined. |
| Quality Audit Support | `/services/quality-audit-support` | `/blog/outsourced-labor-quality-scorecard` | Which quality checks belong in a review before a manager accepts the work? | Connect the scorecard decision to the QA support scope. |
| Workforce Reporting | `/services/workforce-reporting` | `/blog/philippines-weekly-kpi-source-reconciliation` | How can a manager reconcile a weekly KPI before deciding what it means? | Let a reader move from a source-checked KPI worksheet to the reporting support scope without handing over metric definitions or business decisions. |
| Operations Dispatch | `/services/operations-dispatch` | `/blog/outsourced-labor-shift-handoff` | How can a team keep urgent work moving across changing shifts? | Connect handoff planning to the dispatch support scope without promising coverage outcomes. |

## Delivery record and next execution candidate

- Delivered: `/blog/philippines-operations-support-sop` renders one route-local link to `/services/sop-documentation` after the article body. Its narrow question remains how to write an operations SOP before the work is handed off.
- Delivered: `/blog/philippines-ecommerce-order-support` renders one route-local link to `/services/order-operations` after the article body. The route keeps refund, pricing, and unusual customer commitments with the manager.
- Delivered: `/blog/philippines-backup-coverage-schedule` renders one route-local link to `/services/workforce-scheduling` after the article body. Its narrow question remains whether a coverage plan has enough detail to turn into a schedule.
- Delivered: `/blog/outsourced-labor-planning` renders one route-local link to `/services/vendor-coordination` after the article body. Its narrow question remains which recurring vendor follow-ups are ready for a clearly bounded role; the manager retains exceptions and final approval.
- Delivered: `/blog/filipino-data-entry-quality-checks` renders one route-local link to `/services/inventory-administration` after the article body. Its narrow question remains how a team can check records before inventory updates are accepted. Rendered-source commit: `ecc7c17ec4a315cc8d65dcbf6f21d1d638b2e57a`.
- Delivered locally: `/blog/philippines-admin-assistant-onboarding` now renders one route-local link to `/services/crm-data-stewardship`. The reader question remains what access, examples, and review should be ready before CRM support begins. Rendered source: `f5d8a154c632a18be3adbc0b100ffb2d5bc2524a`.
- Delivered locally: `/blog/outsourced-labor-quality-scorecard` now renders one route-local link to `/services/quality-audit-support`. The scorecard still asks how a manager can review samples before accepting work. Rendered source: `d1a133e7bb86b5d285ef1049e4c51e7bcc9070d2`.
- Delivered: `/blog/philippines-weekly-kpi-source-reconciliation` renders one route-local link to `/services/workforce-reporting`. Its narrow question is how to reconcile a weekly KPI worksheet before a manager interprets the result; the specialist prepares evidence while the client owner keeps metric definitions and business decisions. Rendered source: `50148f3af1145c6d2fbadfc695db982eb093059f`.

## Public verification status — 2026-09-15

- Preserve rendered-source commit `f5d8a154c632a18be3adbc0b100ffb2d5bc2524a`; do not add a duplicate CRM handoff. Local build proof found the expected H1, canonical, one route-local CRM link, visible updated date, Open Graph and Article modified date, Organization author/publisher, destination artifact, and sitemap locations. This sitemap intentionally has no `<lastmod>` values.
- Cache-busted apex and `www` route responses were HTTP 200 HTML with the expected H1 and apex canonical, but both omitted the CRM marker, CRM href, and `article:modified_time`. Both sitemaps were HTTP 200 XML, included the canonical route, and had no `<lastmod>`. No approved deployment target or workflow was found, so this is `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale` rather than a live release.

## Public verification status — 2026-09-17

- Rendered source: `0e120b2b1d691196dd64d9c3f4ee13e0ae116688` added one route-local Procurement Follow-Up handoff to `/blog/outsourced-labor-task-queue-design`. Local production artifacts contained the expected H1 and canonical, exactly one `/services/procurement-follow-up` href inside `<main>`, Open Graph and Article modified date `2026-09-17`, the Organization author/publisher, destination H1, and the canonical sitemap entry. This sitemap intentionally has no `<lastmod>` values.
- Preserve rendered-source commit `0e120b2b1d691196dd64d9c3f4ee13e0ae116688`; do not add a duplicate procurement handoff. Cache-busted apex and `www` responses were HTTP 200 HTML with the expected H1 and apex canonical, but both omitted the new route-local marker, service href, and modified date. No approved deployment target or workflow was found, so the release is `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`, not live.

## Publishing order

1. Treat the Vendor Coordination, Inventory Administration, and Workforce Reporting handoffs as delivered. The Workforce Reporting source is `/blog/philippines-weekly-kpi-source-reconciliation`, not the older generic dashboard fallback. Before selecting another reporting candidate, confirm the generated source still contains exactly one route-local link to `/services/workforce-reporting`.
2. Treat the CRM Data Stewardship, Procurement Follow-Up, Quality Audit Support, and Operations Dispatch handoffs as delivered locally and pending public verification. Do not recreate any of them; audit a verified-absent mapped pair only after a fresh build.
3. Keep organization authorship. The blog renderer has an Organization author and publisher, while the research renderer currently has no author field. There is no on-site individual author record to support an invented byline.
4. The sitemap derives service, blog, and research paths from the same route data. Any future public page change needs route-specific artifact and sitemap checks before deployment.

## Public verification status — 2026-09-18

- Rendered source: `d1a133e7bb86b5d285ef1049e4c51e7bcc9070d2` added one route-local Quality Audit Support handoff to `/blog/outsourced-labor-quality-scorecard`. Local production artifacts contain the expected H1 and canonical, one `/services/quality-audit-support` href inside `<main>`, the visible handoff marker, Open Graph `article:modified_time` and Article `dateModified` `2026-09-18`, Article `datePublished` `2026-08-07`, Organization author/publisher, destination H1/canonical, and both sitemap locations. This sitemap intentionally has no `<lastmod>` values.
- Preserve rendered-source commit `d1a133e7bb86b5d285ef1049e4c51e7bcc9070d2`; do not add a duplicate quality-audit handoff. Cache-busted apex and `www` route and sitemap probes each returned `403 text/plain` without a body, so no served H1, canonical, marker, href, date, or sitemap facts were inferred. No repository-approved deployment target or workflow was found. This is `deployment_pending_public_verification / deployment_configuration_unavailable / public_unavailable`, not a live release. Recheck the same endpoints through an authorized deployment path before any new quality-audit CTA work.

## Public verification status — 2026-09-23

- Rendered source: `d5aeb3564716bedf73102bc039b8863781f6e0e6` upgraded `/blog/outsourced-labor-shift-handoff` from the generic fallback into a route-specific shift-handoff guide and added one route-local Operations Dispatch handoff to `/services/operations-dispatch`. Local production artifacts contained the expected H1 and canonical, the visible "Give every open item a next owner" marker, exactly one service href inside `<main>`, visible updated date `2026-09-23`, Article published and modified dates, Organization author/publisher, two citations, and the canonical sitemap entry. This sitemap intentionally has no `<lastmod>` values.
- Preserve rendered-source commit `d5aeb3564716bedf73102bc039b8863781f6e0e6`; do not add a duplicate Operations Dispatch handoff. Cache-busted apex and `www` route responses were HTTP 200 HTML with the expected H1 and apex canonical, but both omitted the new marker, service href, and updated date. Both sitemaps were HTTP 200 XML and included the canonical route; neither supports a freshness claim because this sitemap has no `<lastmod>`. No repository-approved deployment target or workflow was found, so this is `deployment_pending_public_verification / deployment_configuration_unavailable / public_stale`, not live.
