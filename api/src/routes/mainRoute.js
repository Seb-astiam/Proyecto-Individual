const { Router } = require('express');

const { pokeRoute } = require("./pokeRoute");
const { typeRoute } = require('./typeRoute');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRoute = Router();

// Configurar los routers
// Ejemplo: mainRoute.use('/auth', authRouter);

mainRoute.use("/pokemons", pokeRoute);
mainRoute.use("/type", typeRoute);


module.exports = mainRoute;
