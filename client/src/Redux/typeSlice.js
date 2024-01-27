import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    types: []
}

export const typeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {
        getAllTypes: (state, actions) => {
            state.types = actions.payload
        }
    }
})

export const { getAllTypes } = typeSlice.actions

export default typeSlice.reducer