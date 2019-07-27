// Libraries
const chalk = require('chalk')


// Environment variables
const dev = process.env.DEV


// Ensure secure connection
const http2https = (req, res, next) => {
  if (dev == 1) {
    console.log(chalk.blue('Skipping secure redirect on dev environment'))
    return next()
  } else {
    if(req.secure){
      return next()
    };
    console.log(chalk.blue('Redirecting to https...'))
    res.redirect('https://' + req.hostname + req.url)
  }
}

module.exports = http2https