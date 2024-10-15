import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const ProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((_, index) => index !== payload);
    },
  },
});

export const { addToCart, removeFromCart } = ProductSlice.actions;
export const selectCartItems = (state) => state?.product?.items;

export default ProductSlice.reducer;
