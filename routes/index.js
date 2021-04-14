const express = require('express');
const router = express.Router()
const portofolioRouter = require('./portofolio.routes')

router.get('/', (req, res) => {
  res.json({
    message: "Test"
  })
})

router.use('/portofolio', portofolioRouter)

module.exports = router