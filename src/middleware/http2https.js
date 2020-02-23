// Libraries
const chalk = require('chalk')


// Environment variables
const dev = !process.env.PORT


// Ensure secure connection
const http2https = (req, res, next) => {
    console.log(chalk.blue('Skipping secure redirect on dev environment'))
    return next()
}

module.exports = http2https