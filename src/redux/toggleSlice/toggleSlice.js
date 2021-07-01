import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = false;

export const leftModalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    openModalLeft: (state) => {
      return !state;
    },
  },
});

export const { openModalLeft } = leftModalSlice.actions;

export default leftModalSlice.reducer;
