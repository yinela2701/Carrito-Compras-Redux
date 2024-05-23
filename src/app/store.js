import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/cart/counterSlice";
import cartReducer from "../feature/cart/cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

