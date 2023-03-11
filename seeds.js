const { knex } = require("./db/dbConnection");

const personas = [
  { nombre: "Ana Martínez López", dni: "12345678A", verificado: true },
  { nombre: "Luis Suarez Collado", dni: "87654321B", verificado: false },
  { nombre: "Pedro Nieto Albert", dni: "29978912C", verificado: true },
  { nombre: "Javier Sánchez Durán", dni: "45678912P", verificado: false },
  { nombre: "Manuel Segoviano Lanuza", dni: "45698910L", verificado: false },
  { nombre: "Sara Pérez Leiva", dni: "45608010M", verificado: true },
  { nombre: "Agustín Santos Tomás", dni: "75778992N", verificado: true },
];

const premios = [
  { cantidad: 100, dniGanador: "29978912C" },
  { cantidad: 50, dniGanador: "45698910L" },
  { cantidad: 25, dniGanador: "75778992N" },
];

// ATENCIÓN!!! ELIMINAREMOS LAS TABLAS ANTES DE CREAR LAS NUEVAS. OJO CON ESTA PASO!!!
const renovarData = async () => {
  try {
    await knex.schema.dropTableIfExists("personas");

    await knex.schema.createTable("personas", (table) => {
      table.increments("id");
      table.string("nombre");
      table.string("dni");
      table.boolean("verificado");
    });

    await knex("personas").insert(personas);

    await knex.schema.dropTableIfExists("premios");

    await knex.schema.createTable("premios", (table) => {
      table.increments("id");
      table.integer("cantidad");
      table.string("dniGanador");
    });

    await knex("premios").insert(premios);

    console.log("Información revonada");

    knex.destroy();
  } catch (error) {
    `Ha ocurrido el siguiente error al renovar la información: ${error}`;
  }
};

renovarData();
