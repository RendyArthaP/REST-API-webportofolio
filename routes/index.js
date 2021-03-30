const express = require('express');
const router = express.Router()
const portofolioRouter = require('./portofolio.routes')
const uploadPortofolio = require('./uploadportofolio.routes')

router.get('/', (req, res) => {
  res.json({
    message: "Test"
  })
})

router.use('/portofolio', portofolioRouter)
router.use('/upload', uploadPortofolio)

module.exports = router