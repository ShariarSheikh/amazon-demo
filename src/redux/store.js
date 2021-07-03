import { configureStore } from "@reduxjs/toolkit";
import leftModalSlice from "./toggleSlice/toggleSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    openModal: leftModalSlice,
    user: userSlice,
  },
});
