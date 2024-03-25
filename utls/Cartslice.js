import { createSlice } from "@reduxjs/toolkit";

const Cartslice = createSlice({
    name: 'cart1',
    initialState: { 
        items1: []},
    reducers:{
        AddItem: (state, action) => {
            state.items1.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items1.pop()
        },
        clearItem: (state) => {
            state.items1.length = 0
        }
    }
})

export const {AddItem, removeItem, clearItem} = Cartslice.actions

export default Cartslice.reducer;