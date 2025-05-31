import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name:'favorites',
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorites:(state,action)=>{
            // With reducers this can be done in a mutable way
            state.ids.push(action.payload.id);
        },
        removeFavorites:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }

});
// Methods are not called manually but dispatched using the export below
export const addFavorite = favoritesSlice.actions.addFavorites;
export const removeFavorite = favoritesSlice.actions.removeFavorites;
export default favoritesSlice.reducer;