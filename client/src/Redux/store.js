import { configureStore } from "@reduxjs/toolkit"
import pokeReducer from "./pokeSlice.js"

const store = configureStore({
    reducer: {
      pokemon: pokeReducer,
    },
  });

export default store