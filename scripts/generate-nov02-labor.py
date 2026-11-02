#!/usr/bin/env python3
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parents[1]; DATE='2026-11-02'; DISPLAY='November 2, 2026'
topics=[
 ('outsourcedlabor-shift-coverage-01-2026-11-02','Track shift coverage with a named next owner','shift coverage','the site supervisor'),
 ('outsourcedlabor-timekeeping-exception-02-2026-11-02','Route a timekeeping exception without changing hours','timekeeping exceptions','the payroll owner'),
 ('outsourcedlabor-assignment-end-03-2026-11-02','Prepare an assignment-end handoff packet','assignment-end handoffs','the site supervisor'),
 ('outsourcedlabor-overtime-approval-04-2026-11-02','Keep overtime approval evidence tied to the roster','overtime approvals','the operations manager'),
 ('outsourcedlabor-worker-onboarding-05-2026-11-02','Prepare a worker onboarding evidence pack','worker onboarding','the onboarding owner'),
 ('outsourcedlabor-client-request-06-2026-11-02','Route a client staffing request without promising coverage','client staffing requests','the account manager'),
 ('outsourcedlabor-quality-sample-07-2026-11-02','Run a quality sample without vanity metrics','quality sampling','the quality lead'),
 ('outsourcedlabor-absenteeism-08-2026-11-02','Track absenteeism without judging the person','absenteeism tracking','the site supervisor'),
 ('outsourcedlabor-payroll-input-09-2026-11-02','Reconcile payroll input before the cutoff','payroll input','the payroll owner'),
 ('outsourcedlabor-compliance-doc-10-2026-11-02','Maintain a worker compliance document pack','worker compliance documents','the compliance owner'),
 ('outsourcedlabor-performance-review-11-2026-11-02','Prepare a performance review from source records','performance reviews','the operations manager'),
 ('outsourcedlabor-continuity-12-2026-11-02','Test coverage continuity before leave','coverage continuity','the operations manager'),
]
research=[
 ('outsourcedlabor-research-coverage-handoff-01-2026-11-02','How reliable is the shift-coverage handoff record?','coverage handoff','the site supervisor'),
 ('outsourcedlabor-research-timekeeping-aging-02-2026-11-02','How old do timekeeping exceptions become before review?','timekeeping exception aging','the payroll owner'),
 ('outsourcedlabor-research-assignment-end-03-2026-11-02','What evidence should an assignment-end packet preserve?','assignment-end evidence','the site supervisor'),
 ('outsourcedlabor-research-onboarding-access-04-2026-11-02','What coverage risk remains in worker onboarding access?','onboarding access','the onboarding owner'),
 ('outsourcedlabor-research-quality-sample-05-2026-11-02','What signal quality should a labor quality sample expect?','quality sample signal','the quality lead'),
]
sources=[('U.S. Department of Labor','https://www.dol.gov/'),('Occupational Safety and Health Administration','https://www.osha.gov/'),('NIST Cybersecurity Framework','https://www.nist.gov/cyberframework'),('U.S. Small Business Administration','https://www.sba.gov/'),('Federal Trade Commission','https://www.ftc.gov/')]
def paras(focus,owner,stop):
 return [f"A {focus} case without a named owner can move through the workforce queue while nobody can say what was checked. The {owner} keeps the staffing, pay, access, and client-commitment decisions; the assistant may prepare the record and route exceptions.",f"The approved source is named before work starts. The record shows the worker or shift, source version, reviewer, next action, and evidence that closed the case. Keep restricted worker data in the approved system.",f"The stop condition is: {stop}. When it appears, preserve the facts and route the exact missing item instead of guessing.",f"Start with the oldest unresolved item and the nearest shift or payroll cutoff. At handoff, name what moved, what is waiting, who accepted the next check, and which evidence is missing.",f"A sent message or uploaded file proves activity, not an approved shift, payment, or access outcome. Verification belongs in the destination record or client-visible result."]
blogs=[]; details={}
for slug,title,focus,owner in topics:
 p=paras(focus,owner,'the request changes pay, access, safety, a client promise, or a legal or employment obligation')
 body=['## Why the '+focus+' needs its own control',p[0],p[1],'## What the '+focus+' record must show',p[4],'## Where the VA’s work stops',p[2],'## The daily '+focus+' routine',p[3],'## Exceptions that should stop the case',p[2],'## How to verify and close',p[4],'## The monthly '+focus+' review','Sample normal, exception, and reopened records against the same written rule. End with one process change, one owner, and one check date.']
 blogs.append({'slug':slug,'title':title,'excerpt':f'A source-bounded workforce outsourcing guide for workforce operations managers, focused on {focus} and bounded by honest evidence.','minutes':6,'publicationDate':DATE,'publishedAt':DATE,'image':f'/daily02/outsourcedlabor/{slug}.png','body':body})
 details[slug]={'updated':DATE,'takeaways':[p[0],p[3],p[2]],'sections':[{'heading':'Why the '+focus+' needs its own control','paragraphs':[p[0],p[1]]},{'heading':'What the record must show','paragraphs':[p[4],p[1]]},{'heading':'Where the work stops','paragraphs':[p[2],p[3]]},{'heading':'Verify and close','paragraphs':[p[4],p[3]]}],'sources':[{'name':n,'url':u} for n,u in sources],'serviceHandoff':{'href':'/services','label':'See the workforce service','body':'Use the evidence and boundary language in the role brief.'}}
research_records=[]
for slug,title,focus,owner in research:
 p=paras(focus,owner,'the source is missing, records disagree, or the request requires a pay, access, safety, or employment decision')
 heads=['Research question and scope','Population and unit of analysis','Definitions that make the measure reproducible','Evidence standard and data dictionary','Sampling and collection','Analysis and reporting','Limitations and sources of error','Review cadence and next action']
 body=[]
 for i,h in enumerate(heads): body += ['## '+h,p[i%len(p)]+' '+p[(i+2)%len(p)]]
 body += ['## Sources']+[f'- [{n}]({u}) — checked {DISPLAY}.' for n,u in sources]
 research_records.append({'slug':slug,'title':title,'excerpt':f'A repeatable measurement protocol for {focus} in workforce outsourcing, with definitions, sampling, limits, and reporting.','published':DATE,'image':f'/daily02/outsourcedlabor/{slug}.png','body':body})
blog_ts='export const november02BlogPosts = '+json.dumps(blogs,indent=2,ensure_ascii=False)+';\n\nexport const november02BlogDetails = '+json.dumps(details,indent=2,ensure_ascii=False)+';\n'
(ROOT/'app/nov02-blog-records.ts').write_text(blog_ts)
(ROOT/'app/research/nov02-research-records.ts').write_text('export const november02ResearchRecords = '+json.dumps(research_records,indent=2,ensure_ascii=False)+';\n')
# register blog posts/details
p=ROOT/'app/data.ts'; t=p.read_text()
if 'november02BlogPosts' not in t:
 t=t.replace("import { october28BlogPosts, october28BlogDetails } from './oct28-blog-records';","import { october28BlogPosts, october28BlogDetails } from './oct28-blog-records';\nimport { november02BlogPosts, november02BlogDetails } from './nov02-blog-records';")
 t=t.replace('const allBlogPosts = [\n  ...october27BlogPosts,','const allBlogPosts = [\n  ...november02BlogPosts,\n  ...october27BlogPosts,')
 t=t.replace('export const blogDetails = { ...october28BlogDetails,','export const blogDetails = { ...november02BlogDetails, ...october28BlogDetails,')
 t=t.replace('  const october28Rank =','  const november02Rank = Number(november02BlogPosts.some((post) => post.slug === b.slug)) - Number(november02BlogPosts.some((post) => post.slug === a.slug));\n  if (november02Rank) return november02Rank;\n  const october28Rank =')
 p.write_text(t)
# register research
p=ROOT/'app/fleet-content.ts'; t=p.read_text()
if 'november02ResearchRecords' not in t:
 t=t.replace("import { october28ResearchRecords } from './research/oct28-research-records';","import { october28ResearchRecords } from './research/oct28-research-records';\nimport { november02ResearchRecords } from './research/nov02-research-records';")
 t=t.replace('export const researchPosts = [...october28ResearchRecords,','export const researchPosts = [...november02ResearchRecords, ...october28ResearchRecords,')
 p.write_text(t)
print('generated',len(blogs)+len(research_records))
