'use strict'

// Libraries
const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')


// Environment variables
const port = process.env.PORT || 3000
const dev = process.env.PORT ? false : true
console.log(chalk.blue('Environment Variables:\n'), chalk.green(`Port: ${port}\n Dev: ${dev}`))


// Connect local files
const publicPath = path.join(__dirname, '../public')
const mainRouter = require('./routers/app')


// Express config
const app = express()
app.use(express.static(publicPath))
app.use(express.json())
app.use(mainRouter)


// Server config
let key = ''
let cert = ''
let ca = ''
let httpsOptions = {}

// Dev
if (dev) {
  	console.log(chalk.blue('Running server in dev environment'))

// Prod
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


// Run server
if (dev) {
  // Dev
  http.createServer(app).listen(port, () => {
    console.log(chalk.bold.green(`Server is up on port ${port}`))
  })
} else {
  // Production
  https.createServer(httpsOptions, app).listen(port, () => {
    console.log(chalk.green(`Production HTTPS server running on port: ${port}`))
  })
}
