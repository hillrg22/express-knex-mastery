const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res) => {
  knex('beer')
  .then(beers => {
    res.json({beers: beers})
  })
})

router.get('/:id', (req,res) =>{
const id = req.params.id
  knex('beer')
  .where('id',id)
  .then((beer) =>{
    res.json({beer: beer[0]})
  })
})

router.post('/', (req,res) =>{
  // const body = req.body
  knex('beer')
    .insert(req.body)
    .returning('*')
    .then((beer) =>{
      console.log(beer)
      res.json({beer: beer})
    })
})

router.put('/:id', (req,res) => {
  const id = req.params.id
  const body = req.body

  knex('beer')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedBeer =>{
      res.json({beer: updatedBeer[0]})
    })
})

router.delete('/:id', (req,res) => {
  const id = req.params.id
  knex('beer')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedBeer => {
    res.json({student:deletedBeer[0]})
  })
})





module.exports = router
