import { createSlice } from "@reduxjs/toolkit";

//when we will do crreate slice it will return an object and it will have actions like add items and other and it also has reducers

const cartSlice = createSlice({
  //name of cart slice
  name: "cart",
  //initial state of cart slice (initial value) wjich we can modify using the reducer function
  initialState: {
    items: [],
  },
  reducers: {
    //different actions like small apis to communicate with redux store
    //this funciton will modify the state based on the action
    //basically this is a reduces function that will map to action
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

//react redux tool kit gives us this syntax
export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
//now we want to add this slice to my Store appstore.js
