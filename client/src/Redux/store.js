import { configureStore } from "@reduxjs/toolkit"
import pokeReducer from "./pokeSlice.js"
import typeReducer from "./typeSlice.js";

const store = configureStore({
    reducer: {
      pokemon: pokeReducer,
      type: typeReducer,
    },
  });

export default store