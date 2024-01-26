const { Router } = require('express');

const { getPokemonsHandler, getPokemonByIdHandler, createPokemonHandler } = require("../handlers/pokeHandlers.js")

const pokeRoute = Router();

pokeRoute.get("/", getPokemonsHandler);
pokeRoute.get("/:idPokemon", getPokemonByIdHandler);

pokeRoute.post("/", createPokemonHandler);

module.exports = {
    pokeRoute
}