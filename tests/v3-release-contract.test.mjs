import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const read=(f)=>fs.readFileSync(path.join(process.cwd(),f),'utf8');

test('navigation is exactly the approved primary set',()=>{
  const s=read('app/site-navigation.tsx');
  assert.match(s,/Home/); assert.match(s,/Services/); assert.match(s,/Contact Us/);
  assert.match(s,/Escape/); assert.match(s,/focus/); assert.match(s,/Tab/);
});

test('Stealth Agents parent branding is global',()=>{
  const s=read('app/components.tsx');
  assert.match(s,/Powered by/); assert.match(s,/stealth-agents-logo\.png/g);
  assert.match(s,/Header/); assert.match(s,/Footer/);
});

test('contact experience has the approved ten reviews and team plate',()=>{
  const reviews=read('app/booking-components.tsx');
  const names=['Chad Sublet','Erika Giron','Alex Behrens','Aisha Wonderfull','Owen Hone','Sarah Jacoby','Martine Cadet','Rich Cochran','George Assi','Kevin Carabajal'];
  for(const name of names) assert.match(reviews,new RegExp(name));
  assert.equal((reviews.match(/name: '/g)||[]).length,10);
  assert.match(read('app/globals.css'),/prefers-reduced-motion/);
  const contact=read('app/contact-us/page.tsx');
  assert.ok(contact.indexOf('styles.team')>contact.indexOf('</section>'));
  assert.match(contact,/Official team, Bacolod/);
  assert.match(contact,/stealth-agents-team-bacolod\.jpg/);
});

test('all services have page-specific operational depth',()=>{
  const details=read('app/service-details.ts');
  assert.equal((details.match(/^  '[^']+': \{/gm)||[]).length,10);
  for(const term of ['inputs','outcomes','scenarios','quality','faqs','imageAlt']) assert.match(details,new RegExp(term));
  const page=read('app/services/[slug]/page.tsx');
  for(const heading of ['Inputs your team provides','Outputs you can review','Quality controls','FAQ']) assert.match(page,new RegExp(heading));
});

test('editorial details gain TOC, related links, and conversion CTA',()=>{
  const s=read('app/editorial-navigator.tsx');
  for(const term of ['On this page','Related reading','Discuss this workflow','IntersectionObserver','details']) assert.match(s,new RegExp(term));
  assert.match(read('app/blog/layout.tsx'),/EditorialNavigator/);
  assert.match(read('app/research/layout.tsx'),/EditorialNavigator/);
});

test('conversion routes, canonical redirects, and security headers are configured',()=>{
  assert.match(read('app/contact/page.tsx'),/redirect\('\/contact-us'\)/);
  assert.match(read('app/thanks-whats-next/page.tsx'),/What happens next/i);
  const config=read('next.config.mjs');
  for(const term of ['x-forwarded-proto','www.outsourcedlabor.com','Strict-Transport-Security','Content-Security-Policy','X-Frame-Options']) assert.match(config,new RegExp(term));
});

test('contact API protections remain present',()=>{
  const s=read('app/api/contact/route.ts');
  for(const term of ['64_000','honeypot','limited','origin','content-type','MATTERMOST','email']) assert.match(s,new RegExp(term,'i'));
});

test('required first-party brand assets exist',()=>{
  for(const f of ['public/brand/stealth-agents-logo.png','public/brand/stealth-agents-team-bacolod.jpg','public/brand/stealth-agents-filipina-virtual-assistant.webp']) assert.ok(fs.statSync(path.join(process.cwd(),f)).size>0);
});
