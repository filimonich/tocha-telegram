(() => {
  (() => {
    // открытие и закрытие меню и меню-профиля
    const hamburgerButton = document.querySelector('.hamburger-js');
    const menuElement = document.querySelector('.menu');
    const dropMenuProfile = document.querySelector('.header__menu-drop');
    const menuProfile = document.querySelector('.header__menu-profile');

    function toggleMainMenu() {
      hamburgerButton.classList.toggle('hamburger--active');
      menuElement.classList.toggle('menu--active');
      menuElement.classList.add('menu--close');
      setTimeout(() => {
        menuElement.classList.remove('menu--close');
      }, 2000);
    }

    function closeMainMenu() {
      hamburgerButton.classList.remove('hamburger--active');
      menuElement.classList.remove('menu--active');
      setTimeout(() => {
        menuElement.classList.remove('menu--close');
      }, 200);
    }

    function handleMainMenuItemClick(event) {
      if (event.target.classList.contains('menu__link')) {
        toggleMainMenu();
      }
    }

    function handleDocumentClick(event) {
      if (event.target !== hamburgerButton) {
        closeMainMenu();
      }
    }

    menuElement.addEventListener('click', handleMainMenuItemClick);
    hamburgerButton.addEventListener('click', toggleMainMenu);
    document.addEventListener('click', handleDocumentClick);
  })();
})();
