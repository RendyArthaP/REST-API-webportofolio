let portofolio = require('../models/portofolio');

module.exports = {
  getPortofolio: async (req, res) => {
    const portos = await portofolio.find()

    try {
      res.status(200).json({
        message: "Get portofolio success",
        data: portos
      })
    } catch(error) {
      console.log(error)
    }
  },

  getPortofolioByID: async (req, res) => {
    const ids = req.params.id
    const porto = await portofolio.findOne(ids)

    try {
      if (!porto) {
        res.status(500).json({
          message: "ID Tidak ditemukan"
        })
      } else {
        res.status(200).json({
          message: "Get portofolio by ID success",
          data: porto
        })
      }
    } catch(error) {
      console.log(error)
    }

    
  },
  
  addPortofolio: async (req, res) => {
    const portos = await portofolio.create(req.body)

    try {
      res.status(200).json({
        message: "Input data portofolio success",
        data: portofolio
      })
    } catch(error) {
      console.log(error)
    }
  },  

  updatePortofolio: async (req, res) => {
    const ids = req.params.id
    const inputUpdatePortofolio = req.body

    try {
      await portofolio.findByIdAndUpdate(ids, inputUpdatePortofolio)
      res.status(200).json({
        message: "Update portofolio success"
      })
    } catch(error) {
      console.log(error)
    }
  },

  deletePortofolio: async (req, res) => {
    const ids = req.params.id

    try {
      await portofolio.findByIdAndDelete(ids)
      res.status(200).json({
        message: "Delete portofolio success"
      })
    } catch(error) {
      console.log(error)
    }
  }
}