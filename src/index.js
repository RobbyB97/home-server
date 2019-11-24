'use strict'

// Libraries
const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')


// Environment variables
const port = process.env.PORT
const dev = process.env.DEV
console.log(chalk.blue('Environment Variables:\n'), chalk.green(`Port: ${port}\n Dev: ${dev}`))


// (Uncomment when database in use)
//require('./db/mongoose')


// Connect local files
const publicPages = path.join(__dirname, '../public')

const mainRouter = require('./routers/app')
const weatherRouter = require('./routers/weather')
const portfolioRouter = require('./routers/portfolio')
const chatRouter = require('./routers/chat')


// Express config
const app = express()
app.use(express.static(publicPages))
app.use(express.json())


// Server config
let key = ''
let cert = ''
let ca = ''
let httpsOptions = {}
if (dev == 1) {
  	console.log(chalk.blue('Running server in dev environment'))
} else {
  	console.log(chalk.blue('Running server in prod environment'))
  
	// Connect SSL Certs
  	key = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/privkey.pem')
  	cert = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/fullchain.pem')
  	ca = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/chain.pem')

  	// HTTPS Config
  	httpsOptions = {
    	cert: cert,
    	key: key,
    	ca: ca
  	}
}


// Connect routers
app.use(mainRouter)
app.use(portfolioRouter)


// Run server
if (dev == 1) {
  // Dev
  http.createServer(app).listen(port, () => {
    console.log(chalk.bold.green(`Server is up on port ${port}`))
  })
} else {
  // Production
  https.createServer(httpsOptions, app).listen(443, () => {
    console.log(chalk.green(`Production HTTPS server running on port: ${port}`))
  })
}
