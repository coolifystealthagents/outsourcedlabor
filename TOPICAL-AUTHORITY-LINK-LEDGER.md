# Service-led topical map and link ledger

Reviewed: 2026-08-26

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
| Workforce Reporting | `/services/workforce-reporting` | `/blog/philippines-operations-daily-dashboard` | Which queue signals should a manager see before deciding on staffing changes? | Let readers inspect the reporting support scope after the dashboard guide. |
| Operations Dispatch | `/services/operations-dispatch` | `/blog/outsourced-labor-shift-handoff` | How can a team keep urgent work moving across changing shifts? | Connect handoff planning to the dispatch support scope without promising coverage outcomes. |

## Delivery record and next execution candidate

- Delivered: `/blog/philippines-operations-support-sop` now renders a route-local link to `/services/sop-documentation` after the article body. Its narrow question remains how to write an operations SOP before the work is handed off.
- Delivered: `/blog/philippines-ecommerce-order-support` now renders a route-local link to `/services/order-operations` after the article body. The route keeps refund, pricing, and unusual customer commitments with the manager.
- Next candidate: inspect `/blog/philippines-backup-coverage-schedule` for a route-local link to `/services/workforce-scheduling`. The reader question is whether a coverage plan has enough detail to turn into a schedule. Add it only if the generated article does not already include that service route.

## Publishing order

1. Inspect the generated `/blog/philippines-backup-coverage-schedule` page first. Add the Workforce Scheduling link only if the existing body does not already send the reader to that service.
2. Verify the page title, H1, contextual phrase, target href, and the absence of a displaced generic or unrelated service link in the rebuilt output.
3. Keep organization authorship. The blog renderer has an Organization author and publisher, while the research renderer currently has no author field. There is no on-site individual author record to support an invented byline.
4. The sitemap derives service, blog, and research paths from the same route data. Any future public page change needs route-specific artifact and sitemap checks before deployment.
