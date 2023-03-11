# Join with Knex

<img src="./images/knex-logo.png" alt="knex logo" />

## Descripción

Es esta práctica vamos a aprender cómo se hace un join con Knex y, para ello vamos a hacerlo sobre una base de datos PostgreSQL.

## Qué es Knex

Knex.js es un constructor de consultas SQL para JavaScript que te permite crear y ejecutar consultas estándar SQL para varios sistemas de gestión de bases de datos, como PostgreSQL, MySQL, SQLite3, Oracle, etc . Knex.js te ofrece una interfaz fluida y sencilla para construir las consultas usando métodos encadenados, sin tener que escribir el SQL a mano. Además, Knex.js te permite crear y modificar el esquema de la base de datos, gestionar las migraciones y las semillas, y trabajar con promesas y callbacks.

## Contexto

Tenemos una base de datos con dos tablas. La primera tabla contiene usuarios con nombre, dni y un booleano que indica si están verificados o no mientras que la segunda alberga premios asignados a un usuario por su dni.
Aprovechado que podemos hacer un join entre las dos tablas utilizando los dnis vamos a hacer una consulta a la base de datos que nos devuelva los usuarios premiados siempre y cuando estén ya verificados.

## Consulta

La consulta que hemos realizado es la que se muestra a continuación:

```js
const premiados = await knex
  .select("premios.id", "premios.cantidad", "personas.nombre")
  .from("premios")
  .join("personas", "premios.dniGanador", "personas.dni")
  .where("verificado", "=", "true");
```

El proceso que se sigue es el siguiente:

- Selecciona las columnas “premios.id”, “premios.cantidad” y “personas.nombre” de las tablas “premios” y “personas”.

- Hace un join entre las tablas “premios” y “personas” usando la columna “premios.dniGanador” como clave foránea de la tabla “premios” y la columna “personas.dni” como clave primaria de la tabla “personas”.

- Filtra los resultados para que solo se incluyan los premios que tienen la columna “verificado” igual a “true”.

- Devuelve un array de objetos con los datos de los premios verificados y sus ganadores.
