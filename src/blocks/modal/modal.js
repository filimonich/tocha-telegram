(() => {
  const openButton = document.querySelector('.header__button-login');
  const closeButton = document.querySelector('.modal__close-button');
  const modal = document.querySelector('.modal');
  const togglePasswordButton = document.querySelector('.modal__toggle-password');
  const passwordInput = document.querySelector('#password');

  // функция переключения модального окна
  const toggleModal = () => {
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
  };
  // добовляем обработчик событий при клике
  openButton.addEventListener('click', toggleModal);
  closeButton.addEventListener('click', toggleModal);
  // добавляем обработчик событий к элементу
  togglePasswordButton.addEventListener('click', () => {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  });
})();
