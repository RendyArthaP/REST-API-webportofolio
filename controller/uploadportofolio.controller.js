const Portofolio = require('../models/portofolio');

module.exports = {
  addImagePortofolio: async (req, res) => {
    await Portofolio.findByIdAndUpdate(req.params.id, {imagePortofolio: req.file.path})
    res.json({
      message: "Upload success"
    })
  }
}