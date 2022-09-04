import dotenv from 'dotenv'
// 环境配置
dotenv.config()
// 数据库
import db from "./db"
db()
import Koa from 'koa'
import router from "./router";
import {Server} from "http";
// 日志访问级别
import AccessLogMiddleware from "./middleware/AccessLogMiddleware";

const app = new Koa

app
  .use(AccessLogMiddleware)
  .use(router.routes())

const run = (port: number): Server => {
  return app.listen(port)
}

export default run
