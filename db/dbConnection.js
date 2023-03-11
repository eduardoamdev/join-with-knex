const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "root",
    password: "root",
    database: "root",
  },
});

module.exports = { knex };
