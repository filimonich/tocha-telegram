(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
(() => {
  const openButton = document.querySelector(".header__button-login");
  const closeButton = document.querySelector(".modal__close-button");
  const modal = document.querySelector(".modal");
  const togglePasswordButton = document.querySelector(".modal__toggle-password");
  const modalContent = document.querySelector(".modal__content");
  const passwordInput = document.querySelector("#password");
  const toggleModal = () => {
    modal.style.display = modal.style.display === "block" ? "none" : "block";
    document.body.style.overflow = modal.style.display === "block" ? "hidden" : "";
  };
  openButton.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
  modal.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      modal.style.display = "none";
    }
  });
  togglePasswordButton.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });
})();
const containers = document.querySelectorAll(".container");
function textPrinting(textContent, brCreate, i, className) {
  if (i < textContent.length) {
    if (textContent[i] === "\n") {
      brCreate.appendChild(document.createElement("br"));
    } else {
      const spanCreate = document.createElement("span");
      if (i >= 0 && i < 12) {
        spanCreate.classList.add(className);
      }
      spanCreate.innerText = textContent[i];
      brCreate.appendChild(spanCreate);
    }
    i++;
    setTimeout(() => textPrinting(textContent, brCreate, i, className), 50);
  }
  return i;
}
const observerMap = /* @__PURE__ */ new Map();
function observeContainers(containers2, selectors) {
  containers2.forEach((content) => {
    const observer = new IntersectionObserver(
      (entries) => handleIntersect(entries, selectors)
    );
    observerMap.set(content, observer);
    observer.observe(content);
  });
}
function handleIntersect(entries, selectors) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      entry.target.querySelectorAll(selectors).forEach((el) => el.classList.add("visible"));
    }
  });
}
(() => {
  const textContent = "Telegram чат\nна вашем сайте";
  const content = document.querySelector(".hero__headline");
  let i = 0;
  const className = "headline-text";
  const selectors = ".hero__title, .header, .hero__picture";
  observeContainers(containers, selectors);
  setTimeout(() => {
    i = textPrinting(textContent, content, i, className);
  }, 3e3);
})();
console.log(1);
console.log("привет");
