const { MONGODB_LIVE, PORT} = require('./environtment')
const dbConfigMongo = require('./db')

module.exports = {
  MONGODB_LIVE,
  PORT,
  dbConfigMongo
}