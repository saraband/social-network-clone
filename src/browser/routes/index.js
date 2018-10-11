/*
** TODO: Remove this later => OLD CODE
**  Route tag function
**  Returns a function that takes a url param object as argument
**  And returns the generated route
 */
/*
const route = (strings, ...keys) => {
  return params => {
    let str = ''
    strings.forEach((string, i) => {
      str += strings[i] + (keys[i] && keys[i](params) || '')
    })
    return str;
  }
}
*/

export const addParamsToUrl = (url, params) => {
  Object.keys(params).forEach(key => {
    url = url.replace(`:${key}`, params[key])
  })
  return url
}

/* ROUTES */
export const NEWS_FEED = '/'
export const SETTINGS = '/settings'
export const PROFILE = '/p/:userId'
export const MESSAGE = '/m/:messageId'
export const SIGNUP = '/signup'
export const LOGIN = '/login'
