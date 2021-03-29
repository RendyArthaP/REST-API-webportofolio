const express = require('express');
const router = express.Router()
const {
  getPortofolio,
  getPortofolioByID,
  addPortofolio,
  updatePortofolio,
  deletePortofolio
} = require('../controller/portofolio.controller')

router.get('/', getPortofolio),
router.get('/:id', getPortofolioByID)
router.post('/', addPortofolio)
router.put('/:id', updatePortofolio)
router.delete('/:id', deletePortofolio)

module.exports = router