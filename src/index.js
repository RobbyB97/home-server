// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')

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

// Run server
app.listen(port, () => {
  console.log('Server running at port:', port)
})
