'use strict'

// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const fs = require('fs')

// Connect local files and db
//require('./db/mongoose')
const appRouters = require('./routers/dev')
const publicPages = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Express config
const port = 3000
const app = express()
app.use(express.static(publicPages))
app.use(express.json())
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(appRouters)

hbs.registerPartials(partialsPath)

// Run server

app.listen(port, () => {
  console.log('Server running at port:', port)
})
