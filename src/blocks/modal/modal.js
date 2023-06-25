(() => {

const openButton = document.querySelector('.header__login');
const closeButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const togglePasswordButton = document.querySelector('.modal__toggle-password');
const passwordInput = document.querySelector('#password');

const toggleModal = () => {
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
};

openButton.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);

togglePasswordButton.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Добавьте код здесь, чтобы изменить изображение
  const imgElement = document.querySelector('.modal__toggle-img');
  if (type === 'text') {
    // Измените атрибут src элемента img, чтобы показать другое изображение
    imgElement.src = 'images/eye-open.svg';
  } else {
    // Измените атрибут src элемента img обратно на исходное изображение
    imgElement.src = 'images/eye-close.svg';
  }
});




})();
