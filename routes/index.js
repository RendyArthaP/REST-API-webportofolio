const express = require('express');
const router = express.Router()
const portofolioRouter = require('./portofolio.routes')
const blogRouter = require('./blog.routes')

router.get('/', (req, res) => {
  res.json({
    message: "Test"
  })
})

router.use('/portofolio', portofolioRouter)

router.use('/blog', blogRouter)

module.exports = router