// Libraries
const express = require('express')
const path = require('path')
const chalk = require('chalk')


// Config
const router = new express.Router()
const http2https = require('../middleware/http2https')


// Routes
router.get('/chat', http2https, (req, res) => {
    try {
        res.render('chat/index')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /chat: '))
        console.log(e)
    }
})


module.exports = router