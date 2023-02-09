import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []   //Initial value of cart is empty
    },
    reducers: {


        // action : Reducer function
        //        : (Initial state, data which is coming)  



        addItem: (state, action) => {
            state.items.push(action.payload); //action.payload => Sending information
        },

        removeItem: (state, action) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items = []; //Here we don't want to send anything
        }
    }

});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;