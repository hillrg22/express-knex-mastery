const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')

router.get('/', (req,res) => {
  knex('student')
  .then(students => {
    res.json({students: students})
  })
})


router.get('/:id', (req,res) =>{
const id = req.params.id
  knex('student')
  .where('id',id)
  .then((student) =>{
    res.json({student: student[0]})
  })
})

router.post('/', (req,res) =>{
  // const body = req.body
  knex('student')
    .insert(req.body)
    .returning('*')
    .then((student) =>{
      console.log(student)
      res.json({student: student})
    })
})







module.exports = router
