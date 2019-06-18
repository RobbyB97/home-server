'use strict'

// Libraries
const express = require('express')
const https = require('https')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')

// Connect local files and db
//require('./db/mongoose')
const publicPages = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const key = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/privkey.pem')
const cert = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/fullchain.pem')
const ca = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/chain.pem')

// Express config
const port = 443
const app = express()
app.use(express.static(publicPages))
app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Routers
const mainRouter = require('./routers/app')
const weatherRouter = require('./routers/weather')
app.use(mainRouter)
app.use(weatherRouter)

hbs.registerPartials(partialsPath)

// HTTPS Config
const httpsOptions = {
  cert: cert,
  key: key,
  ca: ca
}

// Run server
https.createServer(httpsOptions, app).listen(443, () => {
  console.log('HTTPS running... Port: 443')
})
