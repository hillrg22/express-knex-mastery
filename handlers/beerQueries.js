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
  knex('beer')
    .where('id', id)
    .update(body)
    .returning('*')
}

deleteBeer = (id) =>{
  knex('beer')
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
