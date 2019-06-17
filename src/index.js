'use strict'

// Libraries
const express = require('express')
const https = require('https')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')

// Connect local files and db
//require('./db/mongoose')
const appRouters = require('./routers/app')
const publicPages = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const key = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/privkey.pem')
const cert = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/fullchain.pem')
const ca = fs.readFileSync('/etc/letsencrypt/live/bergers.dev/chain.pem')

// Express config
const port = 3000
const app = express()
app.use(express.static(publicPages))
app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(appRouters)

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

//app.listen(port, () => {
//  console.log('Server running at port:', port)
//})
