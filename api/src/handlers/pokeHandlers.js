const { getPokemonsControllers, getPokemonByIdControllers, getPokemonByNameControllers, createPokemonControllers } = require("../controllers/pokeControllers.js");

const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;

    try{
        if(name){
            const pokemonByName = await getPokemonByNameControllers(name)
            return res.status(200).json(pokemonByName);
         } else {
             const arrPokemons = await getPokemonsControllers();
             return res.status(200).json(arrPokemons)
         }
    }
    catch (error) {
        return res.status(404).json({ error: "No se pudo conectar a la API" });
    }
}

const getPokemonByIdHandler = async (req, res) => {
    const { idPokemon } = req.params;
    const source = idPokemon.length < 5 ? "Api" : "BDD"

    try{
        const pokemon = await getPokemonByIdControllers(idPokemon, source);
        return res.status(200).json(pokemon);
    }
    catch (error) {
        return res.status(404).json({error: "Error al encontrar este pokemon"})
    }
}

const createPokemonHandler = async (req, res) => {
    const { 
        name, 
        imagen, 
        vida, 
        ataque, 
        defensa, 
        velocidad, 
        altura, 
        peso,
        types  } = req.body;

    
    try {
        const pokeCreate = await createPokemonControllers({ name, imagen, vida, ataque, defensa, velocidad, altura, peso, types });
        return res.status(201).json(pokeCreate);
    }
    catch (error) {
        console.error("Error en la creacion del pokemon: ", error.messages);
    }
}


module.exports = {
    getPokemonsHandler,
    getPokemonByIdHandler,
    createPokemonHandler
}