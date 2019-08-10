// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const chalk = require('chalk')

// Environment variables
const dev = process.env.DEV


// Config
const router = new express.Router()
const http2https = require('../middleware/http2https')


// Homepage
router.get('', http2https, (req, res) => {
  try {
    if (dev == 1) {
      return res.render('homepage/index')
    } 
    console.log(chalk.blue('Redirecting homepage to portfolio...'))
    res.redirect('/portfolio')
  } catch(e) {
    res.send()
  }
})

// Portfolio
router.get('/portfolio', http2https, (req, res) => {
  try {
    res.render('portfolio/index')
  } catch(e) {
    res.send()
  }
})

router.get('/react', http2https, (req, res) => {
  try {
    res.render('react/index')
  } catch(e) {
    res.send()
  }
})

module.exports = router
