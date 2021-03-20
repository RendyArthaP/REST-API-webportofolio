const express = require('express');
const router = express.Router()
const {
  getPortofolio,
  getPortofolioByID
} = require('../controller/portofolio.controller')

router.get('/', getPortofolio),

  router.get('/:id', getPortofolioByID)

module.exports = router