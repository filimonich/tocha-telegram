(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();(()=>{const s=document.querySelector(".header__button-login"),o=document.querySelector(".modal__close-button"),e=document.querySelector(".modal"),n=document.querySelector(".modal__toggle-password"),t=document.querySelector(".modal__content"),r=document.querySelector("#password"),c=()=>{e.style.display=e.style.display==="block"?"none":"block"};s.addEventListener("click",c),o.addEventListener("click",c),e.addEventListener("click",l=>{t.contains(l.target)||(e.style.display="none")}),n.addEventListener("click",()=>{const l=r.getAttribute("type")==="password"?"text":"password";r.setAttribute("type",l)})})();const d=document.querySelectorAll(".container");function i(s,o,e,n){if(e<s.length){if(s[e]===`
`)o.appendChild(document.createElement("br"));else{const t=document.createElement("span");e>=0&&e<12&&t.classList.add(n),t.innerText=s[e],o.appendChild(t)}e++,setTimeout(()=>i(s,o,e,n),50)}return e}const a=new Map;function u(s,o){s.forEach(e=>{const n=new IntersectionObserver(t=>p(t,o));a.set(e,n),n.observe(e)})}function p(s,o){s.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),e.target.querySelectorAll(o).forEach(n=>n.classList.add("visible")))})}(()=>{const s=`Telegram чат
на вашем сайте`,o=document.querySelector(".hero__headline");let e=0;const n="headline-text";u(d,".hero__title, .header, .hero__picture"),setTimeout(()=>{e=i(s,o,e,n)},3e3)})();console.log(1);console.log("привет");
