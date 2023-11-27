import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // this reducer is responsible to modify the app store
  // for each slice we willhave different reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
//now provide this store to my application
