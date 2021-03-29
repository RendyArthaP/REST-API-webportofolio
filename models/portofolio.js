const mongoose = require('mongoose');
const PortofolioSchema = new mongoose.Schema({
  imagePortofolio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "imageportofolio"
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
  linkGithub: {
    type: String,
    require:true
  }
})

const Portofolio = mongoose.model("portofolio", PortofolioSchema)
module.exports = Portofolio