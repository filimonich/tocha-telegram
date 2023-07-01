import { ContentManager } from '/js/animation.js';
(() => {

const options = {
  contentSelector: '.content',
  heroHeadlineSelector: '.hero__headline',
  text: 'Telegram чат\nна вашем сайте',
  typeDelay: 200
};

const contentManager = new ContentManager(options);


})();