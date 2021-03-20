const e = require('express');
let portofolio = require('../models/portofolio');

module.exports = {
  getPortofolio: (req, res) => {
    res.json({
      message: "Portofolio has success",
      data: portofolio
    })
  },

  getPortofolioByID: (req, res) => {
    const id = req.params.id
    const porto = portofolio.find(item => item.id == id)

    if (!porto) {
      res.json({
        message: "ID Tidak ditemukan"
      })
    } else {
      res.json({
        message: "Portofolio by ID has success",
        data: porto
      })
    }
  }
}