const express = require('express');
const router = express.Router()
const {
  getBlog,
  getBlogByID
} = require('../controller/blog.controller')

router.get('/', getBlog)

router.get('/:id', getBlogByID)

module.exports = router