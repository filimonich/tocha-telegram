// import { textPrinting, observeContents } from '/js/animations-appearance.js';


// export 
function textPrinting(text, contentBr, i, className) {
  if (i < text.length) {
    if (text[i] === '\n') {
      contentBr.appendChild(document.createElement('br'));
    } else {
      const spanItem = document.createElement('span');
      if (i >= 0 && i < 12) {
        spanItem.classList.add(className);
      }
      spanItem.innerText = text[i];
      contentBr.appendChild(spanItem);
    }
    i++;
    setTimeout(() => textPrinting(text, contentBr, i, className), 100);
  }
  return i;
}

// создать экземпляр класса IntersectionObserver для отслеживания
// пересечения элементов с viewport
const observer = new IntersectionObserver(handleIntersect);


// export 
function observeContents(contents, selectors) {
  contents.forEach(content => observer.observe(content));
}

function handleIntersect(entries, selectors) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target
        .querySelectorAll(selectors)
        .forEach(el => el.classList.add('visible'));
    }
  });
}




const contents = document.querySelectorAll('.content');
const text = 'Telegram чат\nна вашем сайте';
const content = document.querySelector('.hero__headline');
let i = 0;
const className = 'telegram-chat';
const selectors = '.hero__title, .header, .hero__picture';

observeContents(contents, selectors);
setTimeout(() => {
  i = textPrinting(text, content, i, className);
}, 3000);

// добавляет классы "visible" поочередно к элементам для запуска анимаций

// const title = document.querySelector('.hero__title');
// const header = document.querySelector('.header');
// const picture = document.querySelector('.hero__picture');

// setTimeout(() => {
//   title.classList.add('visible');
// }, 0);

// setTimeout(() => {
//   header.classList.add('visible');
// }, 1000); // задержка должна быть равной продолжительности первой анимации

// setTimeout(() => {
//   picture.classList.add('visible');
// }, 2000); // задержка должна быть равной сумме продолжительностей первой и второй анимаций

// (() => {
// })();
