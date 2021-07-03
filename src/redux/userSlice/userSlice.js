import { createSlice } from "@reduxjs/toolkit";
import { fireAuth } from "../../firebase.config";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
    },
    signOutUser: (state) => {
      fireAuth
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
      state.user = null;
    },
  },
});

export const { signInUser, signOutUser } = userSlice.actions;
//selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
