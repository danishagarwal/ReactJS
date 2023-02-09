import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

//Configuring store which will contain slices
const store = configureStore({


    reducer: {
        // Name of Slice : Slice Imported
        cart: cartSlice,
    }
});

export default store;


/**
 *          STEPS TO CONFIGURE REDUX
 * 
 * Create Store
 *  -configureStore
 * 
 * Provide Store to app
 *  - <Provider/>
 * 
 * Create Slice
 *  -createSlice ({
 *      name :
 *      Initial State : 
 *      reducer : {
 *         addItem}
 *   })
 * 
 * Put that slice in configureStore
 * 
 */