const { MONGODB_LIVE } = require('./environtment')
const mongoose = require('mongoose');

mongoose.connect(MONGODB_LIVE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const dbConfigMongo = mongoose.connection;
module.exports = dbConfigMongo