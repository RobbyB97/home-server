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
        return res.return('react/index')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})

router.get('/style_guide', http2https, (req, res) => {
    try {
        return res.redirect('/react')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})

router.get('/skills', http2https, (req, res) => {
    try {
        return res.redirect('/react')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})

router.get('/experience', http2https, (req, res) => {
    try {
        return res.redirect('/react')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})


module.exports = router
