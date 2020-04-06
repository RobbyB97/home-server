export {}

/* Libraries */
const express = require('express')
const https = require('https')
const http = require('http')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')


/* Config */
const port = process.env.PORT || 3000
const dev = !process.env.PORT

console.log(chalk.blue('Environment Variables:\n'), chalk.green(`Port: ${port}\n Dev: ${dev}`))

const publicPath = path.join(__dirname, '../public')
const mainRouter = require('./routers/app')

const app = express()
app.use(express.static(publicPath))
app.use(express.json())
app.use(mainRouter)

console.log(chalk.blue(`Running server in ${dev ? "dev" : "prod"} environment`))


/* Run server */
http.createServer(app).listen(port, () => {
	console.log(chalk.bold.green(`Server is up on port ${port}`))
})