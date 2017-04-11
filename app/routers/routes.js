
/* Route names before i18n */
const routeNames = [
  '404',
  'index',
  'info'
]

/* Route paths are provided by the i18n service */
let routes

module.exports = route => {
  if (!route) {
    return routes
  } else if (!routes) {
    return route
  }

  return routes[route] || routes['404']
}
