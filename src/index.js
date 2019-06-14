// Libraries
const express = require('express')
const path = require('path')
const hbs = require('hbs')

// Connect local files and db
require('./db/mongoose')
const appRouters = require('./routers/app')
const publicPages = path.join('../public')

// Express config
const port = 3000
const app = express()
app.use(express.json())
app.use(appRouters)

// Run server
app.listen(port, () => {
  console.log('Server running at port:', port)
})
