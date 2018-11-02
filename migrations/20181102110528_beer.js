exports.up = function(knex, Promise) {
  //code to run to set up our tables
    //create schema
  return knex.schema.createTable('beer', function (table) {
    table.increments('id')
    table.string('name')
    table.string('imageUrl')
    table.decimal('abv')
    table.string('review', 10000)
  })
}

exports.down = function(knex, Promise) {
  // code to run to remove tables & restart
  return knex.schema.dropTableIfExists('beer')
};
