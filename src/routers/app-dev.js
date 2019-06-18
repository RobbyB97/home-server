// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Config
const router = new express.Router()

// Routes
router.get('', (req, res) => {
  try {
    res.render('portfolio/index')
  } catch(e) {
    res.send()
  }
})

router.get('/weather', (req, res) => {
  try {
    res.render('weather/index', {
      title: 'Weather App',
      name: 'Robby'
    })
  } catch(e) {
    res.send()
  }
})

module.exports = router