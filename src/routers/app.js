const express = require('express')
const path = require('path')
const publicPages = path.join('../../public')

const router = new express.Router()

router.get('', (req, res) => {
  res.send(publicPages + '/portfolio1')
})
