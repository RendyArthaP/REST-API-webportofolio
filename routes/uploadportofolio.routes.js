const express = require('express');
const router = express.Router()
const { storagePortofolio } = require('../middleware');
const { addImagePortofolio } = require('../controller/uploadportofolio.controller')

router.post('/portofolio/:id', storagePortofolio.single('portofolio'), addImagePortofolio)

module.exports = router