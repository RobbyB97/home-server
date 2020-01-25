// Libraries
const express = require('express')
const path = require('path')
const chalk = require('chalk')


// Config
const router = new express.Router()
const http2https = require('../middleware/http2https')
const publicPath = path.join(__dirname, '../../public/')


// Routes
router.get('/', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /: '))
        console.log(e)
    }
})

router.get('/style_guide', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))
        
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /style_guide: '))
        console.log(e)
    }
})

router.get('/skills', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))
        
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /skills: '))
        console.log(e)
    }
})

router.get('/experience', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))
    
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /experience: '))
        console.log(e)
    }
})

router.get('/projects', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /projects: '))
        console.log(e)
    }
})


router.get('/resume', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /resume: '))
        console.log(e)
    }
})


router.get('/*', http2https, (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'wildcard.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on the wildcard: '))
        console.log(e)
    }
})


module.exports = router
