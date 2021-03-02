
exports.up = function(knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('lastName')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
