const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')

const { getAllBeers,
        getOneBeer,
        postOneBeer,
        updateBeer,
        deleteBeer

      } = require('../handlers/beerQueries')


router.get('/', (req,res,next) => {
  getAllBeers()
  .then(beers => {
    res.json({beers: beers})
  })

})

router.get('/:id', (req,res,next) =>{
  const id = req.params.id
  getOneBeer(id)
  .then((beer) =>{
    if(!beer.length){
      next()
    }
    else{
    res.json({beer: beer[0]})
    }
  })
})

router.post('/', (req,res,next) =>{
  const body = req.body
    postOneBeer(body)
    .then((beer) =>{
      console.log(beer)
      res.json({beer: beer})
    })
})

router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const body = req.body
    updateBeer(id, body)
    .then(updatedBeer =>{
      res.json({beer: updatedBeer[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  deleteBeer(id)
  .then(deletedBeer => {
    res.json({student:deletedBeer[0]})
  })
})





module.exports = router
