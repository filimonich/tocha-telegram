export const containers = document.querySelectorAll('.container');

// экспорт функции, которая аечатает текст
export function textPrinting(textContent, brCreate, i, className) {
  if (i < textContent.length) {
    // проверка, если i меньше длины текста
    if (textContent[i] === '\n') {
      // если есть \n заменить на элемент <br>
      brCreate.appendChild(document.createElement('br'));
    } else {
      // иначе создать элемент <span>
      const spanCreate = document.createElement('span');
      if (i >= 0 && i < 12) {
        // если i в диапазоне от 0 до 12, то добавить className к span
        spanCreate.classList.add(className);
      }
      spanCreate.innerText = textContent[i];
      // установить текстовое содержимое span равным текущему симвулу текста
      brCreate.appendChild(spanCreate);
      // добавить span в spanCreate
    }
    i++; // увеличить индекс i на 1
    setTimeout(() => textPrinting(textContent, brCreate, i, className), 50);
    // вызов функции с задержкой, скорость написания текста
  }
  return i; // возврат текущего значения i
}

// создать экземпляр класса IntersectionObserver для отслеживания
// пересечения элементов с viewport
const observer = new IntersectionObserver(handleIntersect);

export function observeContainers(containers) {
  // наблюдение за элементами
  containers.forEach(content => observer.observe(content));
}

function handleIntersect(entries, selectors) {
  // handleIntersect вызывается при пересечении элементов с viewport
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // если entry пересекается с viewport
      entry.target.classList.add('visible');
      // Добавить класс 'visible' к элементу entry.target
      entry.target
        .querySelectorAll(selectors)
        .forEach(el => el.classList.add('visible'));
      // для каждого элемента, selectors внутри entry.target
    }
  });
}
