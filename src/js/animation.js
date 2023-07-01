export class ContentManager {
  constructor(options) {
    // Выберите все элементы, соответствующие опции contentSelector
    this.contents = document.querySelectorAll(options.contentSelector);
    // Установите текст для набора
    this.text = options.text;
    // Выберите элемент, соответствующий опции heroHeadlineSelector
    this.content = document.querySelector(options.heroHeadlineSelector);
    // Установите задержку между набором символов, по умолчанию 200 мс
    this.typeDelay = options.typeDelay || 200;
    // Инициализируйте индекс текущего символа, который набирается
    this.index = 0;
    // Создайте новый экземпляр ContentObserver для наблюдения за содержимым
    this.contentObserver = new ContentObserver(this.contents);
    // Начните набирать текст
    this.type();
  }

  type() {
    // Если еще остались символы для набора
    if (this.index < this.text.length) {
      // Если текущий символ - это новая строка
      if (this.text[this.index] === '\n') {
        // Добавьте разрыв строки к элементу содержимого
        this.content.appendChild(document.createElement('br'));
      } else {
        // Создайте новый элемент span для хранения текущего символа
        const span = document.createElement('span');
        // Если индекс находится между 0 и 12 (включительно)
        if (this.index >= 0 && this.index < 12) {
          // Добавьте класс для стилизации как чат Telegram
          span.classList.add('telegram-chat');
        }
        // Установите текст span на текущий символ
        span.innerText = this.text[this.index];
        // Добавьте span к элементу содержимого
        this.content.appendChild(span);
      }
      // Увеличьте индекс, чтобы перейти к следующему символу
      this.index++;
      // Снова вызовите метод type после задержки
      setTimeout(this.type.bind(this), this.typeDelay);
    }
  }
}

class ContentObserver {
  constructor(contents) {
    // Установите содержимое для наблюдения
    this.contents = contents;
    // Создайте новый экземпляр IntersectionObserver с функцией обратного вызова
    this.observer = new IntersectionObserver(this.handleIntersect.bind(this));
    // Начните наблюдать за содержимым
    this.observeContents();
  }

  handleIntersect(entries) {
    // Для каждой записи в массиве записей
    entries.forEach(entry => {
      // Если запись пересекается с областью просмотра
      if (entry.isIntersecting) {
        // Добавьте класс visible к целевому элементу
        entry.target.classList.add('visible');
        // Добавьте класс visible ко всем дочерним элементам, соответствующим данным селекторам
        entry.target.querySelectorAll('.hero__title, .header, .hero__picture').forEach(el => el.classList.add('visible'));
      }
    });
  }

  observeContents() {
    // Для каждого элемента содержимого начните наблюдать за ним с помощью экземпляра observer
    this.contents.forEach(content => this.observer.observe(content));
  }
}
