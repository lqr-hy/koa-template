import { Context } from "vm";


function success<T = []> (ctx: Context, data?: T, msg: String = 'success', code: number = 0) {
  ctx.body = {
    code,
    msg,
    data
  }
}

function error<T = []> (ctx: Context, msg: String = 'error', data?: T,  code: number = 0) {
  ctx.body = {
    code,
    msg,
    data
  }
}

export default {
  success,
  error
}