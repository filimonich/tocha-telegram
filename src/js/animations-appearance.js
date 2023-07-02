
// export function type(text, content, i, className) {
//   if (i < text.length) {
//     if (text[i] === '\n') {
//       content.appendChild(document.createElement('br'));
//     } else {
//       const span = document.createElement('span');
//       if (i >= 0 && i < 12) {
//         span.classList.add(className);
//       }
//       span.innerText = text[i];
//       content.appendChild(span);
//     }
//     i++;
//     setTimeout(() => type(text, content, i, className), 100);
//   }
//   return i;
// }

// const observer = new IntersectionObserver(handleIntersect);

// export function observeContents(contents, selectors) {
//   contents.forEach(content => observer.observe(content));
// }

// function handleIntersect(entries, selectors) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       entry.target
//         .querySelectorAll(selectors)
//         .forEach(el => el.classList.add('visible'));
//     }
//   });
// }

