import jwt from 'jsonwebtoken'
import config from '../app/config'

function sign (data: any) {
  return jwt.sign({
    data
  }, config.jwt.secret as string, {
    expiresIn:  config.jwt.expire
  })
}

// 验证token
function verify (token: string) {
  try {
    const decoded = jwt.verify(token, 'wrong-secret');
    return {
      admin: decoded,
      error: null
    }
  } catch(err) {
    // err
    return {
      admin: null,
      error: err
    }
  }
}

export {
  sign,
  verify
}