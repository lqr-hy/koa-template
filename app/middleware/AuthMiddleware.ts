import { Context, Next } from 'koa'
import { verify } from '../../utils/auth'

function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers['authorization']
  console.log(token)
  if (token === undefined || token === '') {
    ctx.body = {
      msg: '请登录',
      code: 400
    }
    return 
  } else {
    const { error } = verify(token)
    if (!error) {
      ctx.body = {
        error,
        code: 401
      }
    }
  }
  return next()
}

export default AuthMiddleware
