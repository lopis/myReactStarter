'use strict';

/* Route names before i18n */
var routeNames = ['404', 'index', 'info'];

/* Route paths are provided by the i18n service */
var routes = void 0;

module.exports = function (route) {
  if (!route) {
    return routes;
  } else if (!routes) {
    return route;
  }

  return routes[route] || routes['404'];
};