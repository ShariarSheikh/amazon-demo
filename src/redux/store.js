import { configureStore } from "@reduxjs/toolkit";
import leftModalSlice from "./toggleSlice/toggleSlice";

export const store = configureStore({
  reducer: {
    openModal: leftModalSlice,
  },
});
