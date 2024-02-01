const { Pokemon, Type } = require("../db");

const axios = require("axios");

require("dotenv").config();

const { URL } = process.env;

const getInfoAPI = async ({ URL, id, name }) => {
    if(name){
        const responseAPI = await axios.get(`${URL}/${name}`);

        const filtradoInfoAPI = {
            id: responseAPI.data.id,
            name: responseAPI.data.name,
            imagen: responseAPI.data.sprites.front_default,
            types: responseAPI.data.types.map(type => type.type.name).join(", ")
          };

        return filtradoInfoAPI
    }
    if (URL && !id) {
        const responseAPI = await axios.get(`${URL}?offset=0&limit=50`);
        const segundaVuelta = responseAPI.data.results;
        const terceraVuelta = await segundaVuelta.map((pokemon) => {
            return pokemon.name
        })
        return terceraVuelta
    } else {
        const responseAPI = await axios.get(`${URL}/${id}`);

        const filtradoInfoAPI = {
            id: responseAPI.data.id,
            name: responseAPI.data.name,
            imagen: responseAPI.data.sprites.front_default,
            stats: responseAPI.data.stats.map((stat) => {
                const nameStat = stat.stat.name
        
                const baseStat = stat.base_stat
        
                return [nameStat, baseStat]
            }),
            height: responseAPI.data.height,
            weight: responseAPI.data.weight,
            types: responseAPI.data.types
          };

        return filtradoInfoAPI
    }

}

const getPokemonsControllers = async () => {
    try {
        const arrPokemonsDB = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through: {
                    attributes: []
                },
            }
        });
        const arrNamesPokemons = await getInfoAPI({ URL });
        const completeInfoPokemons = await Promise.all(arrNamesPokemons.map(name => getInfoAPI({ URL, name })));

        return [...arrPokemonsDB, ...completeInfoPokemons];
    }
    catch (error) {
        console.error("Error en getPokemonsControllers:", error);
        throw error;
    }
}

const getPokemonByNameControllers = async (name) => {
    try {
        if(name) {
            const pokemonDB = await Pokemon.findAll({where: {name: name}});
            return pokemonDB
        } else {
            const pokemonsByName = await getInfoAPI({ URL, name});
            return pokemonsByName
        }
    }
    catch (error) {
        console.error("Error en getPokemonByNameControllers:", error);
        throw error;
    }
}


const getPokemonByIdControllers = async (id, source) => {
    try {
        if (source === "Api") {
            const apiPokemon = await getInfoAPI({ URL, id });
            return apiPokemon;
        } 
        else {
            return await Pokemon.findByPk(id, {
                    include: {
                        model: Type,
                        attributes: ["name"],
                        through: {
                            attributes: []
                        },
                    }
                });
        }
    }
    catch (error) {
        console.error("Error en getPokemonByIdControllers:", error);
        throw error;
    }
}

const createPokemonControllers = async ({  name, imagen, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types  }) => {
    const newPokemon = await Pokemon.create({  name, imagen, hp, attack, defense, specialAttack, specialDefense, speed, height, weight, types });

    newPokemon.addType(types);

    return newPokemon
} 

module.exports = {
    getPokemonsControllers,
    getPokemonByIdControllers,
    getPokemonByNameControllers,
    createPokemonControllers
}