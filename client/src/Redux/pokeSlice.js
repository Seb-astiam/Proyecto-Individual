import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: [],
    pokemonDetail: []
}

export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getAllPokemons: (state, actions) => {
            state.pokemons = actions.payload;
        },
        getPokemonByName: (state, actions) => {
            state.pokemons = actions.payload;
        },
        getPokemonById: (state, actions) => {
            state.pokemonDetail = actions.payload;
        }
    }
})

export const { getAllPokemons, getPokemonByName, getPokemonById } = pokeSlice.actions

export default pokeSlice.reducer