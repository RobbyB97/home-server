// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Routes
router.get('/weather', http2https, (req, res) => {
  try {
    res.render('weather/index', {
      title: 'Weather App',
      name: 'Robby'
    })
  } catch(e) {
    res.send()
  }
})

router.get('/weather/about', http2https, (req, res) => {
  try {
    res.render('weather/about/index', {
      title: 'About',
      name: 'Robby'
    })
  } catch(e) {
    res.send()
  }
})

router.get('/weather/help', http2https, (req, res) => {
  try {
    res.render('weather/help/index', {
      title: 'Help',
      name: 'Robby'
    })
  } catch(e) {
    res.send()
  }
})

module.exports = router