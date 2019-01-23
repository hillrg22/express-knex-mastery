const knex = require('../db/connection.js')


getAllBeers = () => {
  return knex('beer')
}

getOneBeer = (id) => {
  return knex('beer')
    .where('id', id)
}

postOneBeer = (body) => {
  return knex('beer')
    .insert(body)
    .returning('*')
}

updateBeer = (id, body) => {
  return knex('beer')
    .where('id', id)
    .update(body)
    .returning('*')
}

deleteBeer = (id) =>{
  return knex('beer')
  .where('id', id)
  .del()
  .returning('*')
}

module.exports = {
  getAllBeers,
  getOneBeer,
  postOneBeer,
  updateBeer,
  deleteBeer

}
