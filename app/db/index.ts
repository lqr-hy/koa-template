import { Sequelize } from "sequelize-typescript"
import config from "../config"
import path from "path"
import { dbLogger } from "../logger"

const sequelize = new Sequelize(config.db.dbName as string, config.db.dbUser as string, config.db.dbPassword, {
  host: config.db.dbHost,
  port: Number(config.db.dbPort),
  // 数据库类型
  dialect: 'mysql',
  // 数据访问日志
  logging: msg => dbLogger.info(msg),
  define: {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
  },
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