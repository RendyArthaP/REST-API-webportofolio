const mongoose = require('mongoose');
const PortofolioSchema = new mongoose.Schema({
  imagePortofolio: {
    type: String,
    require: true
  },
  titlePortofolio: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  linkDeploy: {
    type: String,
    require: true
  },
})

const Portofolio = mongoose.model("portofolio", PortofolioSchema)
module.exports = Portofolio