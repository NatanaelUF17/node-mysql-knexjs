// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'knex_test',
    },
    migrations: {
      tableName: 'users_migrations'
    },
  },
};
