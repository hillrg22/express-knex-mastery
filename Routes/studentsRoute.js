const express = require('express')
const router = express.Router()
const students = require('../students.js')
const knex = require('../db/connection.js')

router.get('/', (req,res) => {
  knex('student')
  .then(students => {
    res.json({students: students})
  })
})










module.exports = router
