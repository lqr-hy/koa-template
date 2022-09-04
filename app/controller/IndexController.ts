import {Context} from "koa";

class IndexController {
  async index(ctx: Context) {
    ctx.body = [1, 23,]
  }
}

export default new IndexController()