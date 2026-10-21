'use client';

import { useEffect } from 'react';

const clean=(value:string)=>value.replace(/[\u2013\u2014]/g,' - ').replace(/\s--\s/g,' - ').replace(/\s{2,}/g,' ');

export function VisibleCopySanitizer(){
  useEffect(()=>{
    const sanitize=(root:Node)=>{
      const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
      const nodes:Text[]=[];
      while(walker.nextNode())nodes.push(walker.currentNode as Text);
      nodes.forEach(node=>{
        if(node.parentElement?.closest('script,style,code,pre'))return;
        const next=clean(node.data);
        if(next!==node.data)node.data=next;
      });
      if(root instanceof Element){
        root.querySelectorAll<HTMLElement>('[aria-label],[alt],[title]').forEach(element=>{
          ['aria-label','alt','title'].forEach(attribute=>{const value=element.getAttribute(attribute);if(value)element.setAttribute(attribute,clean(value))});
        });
      }
    };
    sanitize(document.body);
    const observer=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(sanitize)));
    observer.observe(document.body,{childList:true,subtree:true});
    return()=>observer.disconnect();
  },[]);
  return null;
}
