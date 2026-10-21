import { chromium } from 'playwright';
import fs from 'node:fs';
const base='http://127.0.0.1:3418';
const routes=['/','/services','/services/workforce-scheduling','/contact-us','/blog/outsourced-labor-availability-withdrawal-tracking','/research/research-outsourced-labor-shift-coverage-denominator','/thanks-whats-next','/does-not-exist-v3'];
const browser=await chromium.launch({headless:true});
const failures=[]; const results=[];
for(const size of [{name:'desktop',width:1440,height:900},{name:'mobile',width:390,height:844}]){
 const context=await browser.newContext({viewport:{width:size.width,height:size.height},reducedMotion:'reduce'});
 for(const route of routes){
  const page=await context.newPage(); const errors=[];
  page.on('pageerror',e=>errors.push(e.message)); page.on('console',m=>{if(m.type()==='error') errors.push(m.text())});
  const response=await page.goto(base+route,{waitUntil:'networkidle'});
  const audit=await page.evaluate(()=>({statusTitle:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth-window.innerWidth,badImgs:[...document.images].filter(i=>!i.alt.trim()||!i.complete||i.naturalWidth===0).map(i=>i.src),badPunctuation:/[\u2013\u2014]|\s--\s/.test(document.body.innerText),main:!!document.querySelector('#main-content')}));
  const unexpectedErrors=route==='/does-not-exist-v3'?errors.filter(error=>!error.includes('404')):errors;
  if((route==='/does-not-exist-v3'?response.status()!==404:response.status()!==200)||audit.h1!==1||audit.overflow>1||audit.badImgs.length||audit.badPunctuation||!audit.main||unexpectedErrors.length) failures.push({size:size.name,route,status:response.status(),audit,errors:unexpectedErrors});
  results.push({size:size.name,route,status:response.status(),...audit,errors:errors.length});
  if(size.name==='desktop'&&route==='/contact-us') await page.screenshot({path:'/tmp/outsourcedlabor-contact-desktop.png',fullPage:true});
  if(size.name==='mobile'&&route==='/contact-us') await page.screenshot({path:'/tmp/outsourcedlabor-contact-mobile.png',fullPage:true});
  await page.close();
 }
 await context.close();
}
const desktop=await browser.newPage({viewport:{width:1440,height:900}}); await desktop.goto(base+'/contact-us',{waitUntil:'networkidle'});
const contact=await desktop.evaluate(()=>{const track=document.querySelector('.sa-testimonial-track');const hero=document.querySelector('#contact-title')?.closest('section');const team=document.querySelector('img[src*="team-bacolod"]')?.closest('section');return {url:location.href,reviews:document.querySelectorAll('.sa-testimonial-card').length,teamAfterHero:!!hero&&hero.nextElementSibling===team,submitBottom:document.querySelector('button[type=submit]')?.getBoundingClientRect().bottom,viewport:innerHeight,animation:track?getComputedStyle(track).animationName:null}});
if(contact.reviews!==10||!contact.teamAfterHero||contact.submitBottom>contact.viewport) failures.push({contact});
const article=await browser.newPage({viewport:{width:1440,height:900}}); await article.goto(base+'/blog/outsourced-labor-availability-withdrawal-tracking',{waitUntil:'networkidle'}); const editorial=await article.evaluate(()=>{const toc=document.querySelector('.editorial-navigator');return {url:location.href,desktopToc:toc?getComputedStyle(toc).display:null,links:document.querySelectorAll('.editorial-navigator nav a').length,cta:!!document.querySelector('.editorial-inline-cta')}}); if(editorial.desktopToc==='none'||!editorial.desktopToc||editorial.links<2||!editorial.cta)failures.push({editorial});
const mobile=await browser.newPage({viewport:{width:390,height:844}}); await mobile.goto(base+'/',{waitUntil:'networkidle'}); const menuCount=await mobile.locator('.mobile-menu-button').count(); let mobileMenu={url:mobile.url(),menuCount}; if(menuCount){await mobile.click('.mobile-menu-button'); const openFocus=await mobile.evaluate(()=>({hidden:document.querySelector('#mobile-navigation')?.hasAttribute('hidden'),inside:document.querySelector('#mobile-navigation')?.contains(document.activeElement)})); await mobile.keyboard.press('Shift+Tab'); const trapped=await mobile.evaluate(()=>document.querySelector('#mobile-navigation')?.contains(document.activeElement)); await mobile.keyboard.press('Escape'); const escaped=await mobile.evaluate(()=>({hidden:document.querySelector('#mobile-navigation')?.hasAttribute('hidden'),button:document.activeElement?.classList.contains('mobile-menu-button')})); mobileMenu={...mobileMenu,openFocus,trapped,escaped}; if(openFocus.hidden||!openFocus.inside||!trapped||!escaped.hidden||!escaped.button)failures.push({mobileMenu})}else failures.push({mobileMenu});
const reduced=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}); const rp=await reduced.newPage(); await rp.goto(base+'/contact-us',{waitUntil:'networkidle'}); const motion=await rp.evaluate(()=>{const track=document.querySelector('.sa-testimonial-track');return track?getComputedStyle(track).animationName:null}); if(motion!=='none')failures.push({reducedMotion:motion});
await browser.close();
console.log(JSON.stringify({results,contact,editorial,motion,failures},null,2));
process.exit(failures.length?1:0);
