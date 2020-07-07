'use strict';

class Router {
  constructor(routes) {
    if (!routes) {
      throw 'Error: routes param is mandatory';
    }
    this.routes = routes;
    this.rootElement = document.getElementById('app');

    this.init();
  }

  init() {
    window.addEventListener('hashchange', e => {
      console.log('hashchange event');
      this.hasChanged();
    });
    this.hasChanged();
  }

  hasChanged() {
    if (window.location.hash.length > 0) {
      const activeRoute = this.routes.find(route => route.isActiveRoute(this.getHashedPath()))
      if (!activeRoute)  {
        throw 'Error identifying the active route';
      }
      this.goToRoute(activeRoute.htmlName);
    } else {
      const defaultRoute = this.routes.find(route => route.default);
      if (!defaultRoute)  {
        throw 'Error identifying the default route';
      }
      this.goToRoute(defaultRoute.htmlName);
    }
  }

  goToRoute(htmlName) {
    const url = `views/${htmlName}`;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = (contextCall) => {
      if (contextCall.readyState === 4 && contextCall.status === 200) {
        this.rootElement.innerHTML = contextCall.resposeText;
      }
    };
    xhttp.open('GET', url, true);
    // xhttp.open('GET', chrome.extension.getURL(url), true);
    xhttp.send();
  }

  /** @return the hashed section of the url */
  getHashedPath() {
    return window.location.hash.substr(1);
  }
}