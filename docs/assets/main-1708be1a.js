(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".header__login"),r=document.querySelector(".modal__close-button"),s=document.querySelector(".modal"),c=document.querySelector(".modal__toggle-password"),e=document.querySelector("#password"),t=document.querySelector(".modal__toggle-img"),o=()=>{s.style.display=s.style.display==="block"?"none":"block"};n.addEventListener("click",o),r.addEventListener("click",o),c.addEventListener("click",()=>{const l=e.getAttribute("type")==="password"?"text":"password";e.setAttribute("type",l),l==="text"?t.src="images/eye-open.svg":t.src="images/eye-close.svg"})})();console.log(1);console.log("привет");