import { createSlice } from "@reduxjs/toolkit";

export const addProductSlice = createSlice({
  name: "add product",
  initialState: {
    items: [],
  },

  reducers: {
    addProduct: (state, action) => {
      const product = {
        title: action.payload.title,
        photo: action.payload.photo,
        price: action.payload.price,
        id: action.payload.id,
        device: action.payload.device,
      };
      state.items.push(product);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItems) => cartItems.id === action.payload.id
      );
      let newCartItems = [...state.items];

      if (index >= 0) {
        newCartItems.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not cart`
        );
      }
      //...
      state.items = newCartItems;
    },
  },
});

export const { addProduct, removeFromCart } = addProductSlice.actions;

export const selectProduct = (state) => state.cart.items;

export default addProductSlice.reducer;
