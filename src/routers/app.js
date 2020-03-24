// Libraries
const express = require('express')
const path = require('path')
const chalk = require('chalk')


// Config
const router = new express.Router()
const publicPath = path.join(__dirname, '../../public/')


// Routes
router.get('/', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /: '))
        console.log(e)
    }
})

router.get('/style_guide', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))
        
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /style_guide: '))
        console.log(e)
    }
})

router.get('/skills', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))
        
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /skills: '))
        console.log(e)
    }
})

router.get('/experience', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))
    
    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /experience: '))
        console.log(e)
    }
})

router.get('/projects', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /projects: '))
        console.log(e)
    }
})


router.get('/resume', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on /resume: '))
        console.log(e)
    }
})


router.get('/*', (req, res) => {
    try {
        return res.sendFile(path.join(publicPath, 'index.html'))

    } catch(e) {
        res.send()
        console.log(chalk.red('An error occured on the wildcard: '))
        console.log(e)
    }
})


module.exports = router
