const route = (strings, ...keys) => {
  return params => {
    let str = ''
    strings.forEach((string, i) => {
      str += strings[i] + (keys[i] && keys[i](params) || '')
    })
    return str
  }
}

export const PROFILE_STATIC = '/profile/:userId'
export const PROFILE_EDIT_STATIC = '/profile/:userId/edit'
export const SETTINGS_STATIC = '/settings/:userId'
export const NEWS_FEED_STATIC = '/'
export const SIGNUP_STATIC = '/signup'

export const PROFILE = route`/profile/${params => params.userId}`
export const PROFILE_EDIT = route`/profile/${params => params.userId}/edit`
export const SETTINGS = route`/settings/${params => params.userId}`