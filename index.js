const { knex } = require("./db/dbConnection");

const obtenerPremiados = async () => {
  const premiados = await knex
    .select("premios.id", "premios.cantidad", "personas.nombre")
    .from("premios")
    .join("personas", "premios.dniGanador", "personas.dni")
    .where("verificado", "=", "true");

  return premiados;
};

const init = async () => {
  const premiados = await obtenerPremiados();

  console.log("Los premiados que se encuentran ya verificados son:");

  premiados.forEach((premiado) => {
    console.log(premiado.nombre);
  });

  process.exit(0);
};

init();
