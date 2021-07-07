import { configureStore } from "@reduxjs/toolkit";
import leftModalSlice from "./toggleSlice/toggleSlice";
import userSlice from "./userSlice/userSlice";
import addProductSlice from "./AddProductSlice/AddProductSlice";

export const store = configureStore({
  reducer: {
    openModal: leftModalSlice,
    user: userSlice,
    cart: addProductSlice,
  },
});
