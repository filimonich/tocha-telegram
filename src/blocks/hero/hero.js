import {
  textPrinting,
  observeContainers,
  containers,
} from '/js/animations-appearance.js';

(() => {
  const textContent = 'Telegram чат\nна вашем сайте';
  const content = document.querySelector('.hero__headline');
  let i = 0;
  const className = 'headline-text';
  const selectors = '.hero__title, .header, .hero__picture';

  observeContainers(containers, selectors);

  // Вызываем функцию observeContents для начала наблюдения за элементами containers
  setTimeout(() => {
    i = textPrinting(textContent, content, i, className);
  }, 200); // с задержкой в 3000 миллисекунд
})();

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
