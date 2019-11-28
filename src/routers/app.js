// Libraries
const express = require('express')
const path = require('path')
const chalk = require('chalk')


// Config
const router = new express.Router()
const http2https = require('../middleware/http2https')


// Homepage
router.get('', http2https, (req, res) => {
	try {
        return res.return('/index')
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /react: '))
        console.log(e)
    }
})

// Portfolio
router.get('/portfolio', http2https, (req, res) => {
  	try {
    	return res.render('portfolio/index')
  	} catch(e) {
		res.send()
		console.log(chalk.red('An error occured on /react: '))
        console.log(e)
  	}
})

module.exports = router
