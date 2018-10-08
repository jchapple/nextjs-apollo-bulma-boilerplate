import cookie from 'cookie'
import isNode from './isNode'

export default function getTokenFromCookie(headers) {
  if (!headers.cookie) {
    return null
  }

  const cookies = cookie.parse(isNode() ? headers.cookie : document.cookie)
  return cookies.token
}