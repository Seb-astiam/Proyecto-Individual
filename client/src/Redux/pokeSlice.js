import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: []
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
        }
    }
})

export const { getAllPokemons, getPokemonByName } = pokeSlice.actions

export default pokeSlice.reducer