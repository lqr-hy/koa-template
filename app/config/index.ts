const config = {
  server: {
    port: process.env.SERVER_PORT
  },
  db: {
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
  },
  log: {
    appenders: {
      cheese: { type: "file", filename: "logs/cheese.log" },
      access: { type: "file", filename: "logs/access.log" }
    },
    categories: { default: { appenders: ["cheese"], level: "info" }, access: { appenders: ["access"], level: "info" } }
  }
}

export default config