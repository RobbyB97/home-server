'use strict'

// Libraries
const express = require('express')
const https = require('https')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')

// Connect local files and db
require('./db/mongoose')
const appRouters = require('./routers/app')
const publicPages = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

// Express config
const port = 443
const app = express()
app.use(express.static(publicPages))
app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(appRouters)

// HTTPS Config
const httpsOptions = {
  cert: fs.readFileSync('//etc/letsencrypt/live/fullchain.pem'),
  key: fs.readFileSync('//etc/letsencrypt/live/privkey.pem')
}

// Run server

https.createServer(httpsOptions, app).listen(port, () => {
  console.log('HTTPS running... Port: ' + port)
})

//app.listen(port, () => {
//  console.log('Server running at port:', port)
//})
