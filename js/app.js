'use strict';

const init = () => {
  const router = new Router([
    new Route('home', 'home.html', true),
    new Route('about', 'about.html'),
  ]);
};

init();