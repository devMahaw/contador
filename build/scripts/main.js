document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".value");var t=document.querySelector(".plus"),n=document.querySelector(".minus"),d=document.querySelector(".reset");const r=()=>{e.innerHTML=c};let c=0,o=0;t.addEventListener("mousedown",()=>{o=setInterval(()=>{c+=1,r()},100)}),t.addEventListener("click",()=>{c+=1,r()}),n.addEventListener("mousedown",()=>{o=setInterval(()=>{--c,r()},100)}),n.addEventListener("click",()=>{--c,r()}),d.addEventListener("click",()=>{c=0,r()}),document.addEventListener("mouseup",()=>clearInterval(o))});