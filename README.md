# Join with Knex

## Descripción

Es esta práctica vamos a aprender cómo se hace un join con knex y, para ello vamos a hacerlo sobre una base de datos PostgreSQL.

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
