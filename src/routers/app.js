// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Config
const router = new express.Router()
const http2https = require('../middleware/http2https')

// Routes
router.get('', http2https, (req, res) => {
  try {
    res.render('portfolio/index')
  } catch (e) {
    res.send()
  }
})

module.exports = router
