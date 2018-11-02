const express = require('express')
const router = express.Router()
const beers = require('../beers.js')
const knex = require('../db/connection.js')


router.get('/', (req,res) => {
  knex('beer')
  .then(beers => {
    res.json({beers: beers})
  })
})












module.exports = router
