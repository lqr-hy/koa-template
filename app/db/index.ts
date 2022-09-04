import { Sequelize } from "sequelize-typescript"
import config from "../config"
import path from "path"
console.log(config.db.dbHost, 'pp')
const sequelize = new Sequelize(config.db.dbName as string, config.db.dbUser as string, config.db.dbPassword, {
  host: config.db.dbHost,
  port: Number(config.db.dbPort),
  dialect: 'mysql',
  // 映射路径
  models: [path.join(__dirname, '..', 'model/**/*.ts'), path.join(__dirname, '..', 'model/**/*.js')]
})

const db = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default db