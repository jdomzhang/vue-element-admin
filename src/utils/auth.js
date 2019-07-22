export function getToken() {
  const payload = getTokenPayload() || {}
  return payload.token
}

export function setToken(token) {
  saveJwt(token)
}

export function removeToken() {
  clearStorage()
}

const saveJwt = jwt => {
  localStorage.setItem('adminjwt', jwt)
}

const restoreJwt = () => {
  return localStorage.getItem('adminjwt')
}

const clearStorage = () => {
  localStorage.clear()
}

const getTokenPayload = () => {
  var token = restoreJwt()
  if (!token) return {}
  try {
    var obj = JSON.parse(atob(token.replace(/.+\.(\w+)\..+/, '$1')))
    var isAdmin = obj.aid > 0
    var isExpired = obj.exp < Date.now() / 1000
    var isVisitor = !!obj.visitor
    var isValidAdmin = isAdmin && !isExpired
    var isExpiredAdmin = isAdmin && isExpired
    return {
      ...obj,
      token,
      isAdmin,
      isExpired,
      isValidAdmin,
      isExpiredAdmin,
      isVisitor
    }
  } catch (error) {
    return {}
  }
}
