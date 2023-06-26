(() => {
  const openButton = document.querySelector('.header__button-login');
  const closeButton = document.querySelector('.modal__close-button');
  const modal = document.querySelector('.modal');
  const togglePasswordButton = document.querySelector(
    '.modal__toggle-password'
  );
  const passwordInput = document.querySelector('#password');
  const imgElement = document.querySelector('.modal__toggle-img');

  // функция переключения модального окна
  const toggleModal = () => {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  };
  // добовляем обработчик событий при клике
  openButton.addEventListener('click', toggleModal);
  closeButton.addEventListener('click', toggleModal);
  // Добавляем обработчик событий к элементу
  togglePasswordButton.addEventListener('click', () => {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    if (type === 'text') {
      // Если тип равен 'text', меняем атрибут src элемента img на новое изображение
      imgElement.src = 'images/eye-open.svg';
    } else {
      // В противном случае меняем атрибут src элемента img обратно на исходное изображение
      imgElement.src = 'images/eye-close.svg';
    }
  });
})();
