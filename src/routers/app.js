// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const router = new express.Router()

// Routes
router.get('', (req, res) => {
  try {
    res.render('portfolio/index')
  } catch (e) {
    res.send()
  }
})

module.exports = router
