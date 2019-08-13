// Libraries
const express = require('express')
const path = require('path')
const chalk = require('chalk')


// Config
const router = new express.Router()
const http2https = require('../middleware/http2https')


// Routes
router.get('/react', http2https, (req, res) => {
    try {
        res.render('react/index')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})

router.get('/react/*', http2https, (req, res) => {
    try {
        res.render('react/index')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})


module.exports = router
