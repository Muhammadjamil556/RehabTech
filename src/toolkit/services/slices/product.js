import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const ProductSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      // Check if item already exists in the cart
      const existingItem = state.items.find((item) => item.id === payload.id);
      if (existingItem) {
        // If exists, just increase the quantity
        existingItem.quantity += payload.quantity; // Assuming payload has quantity
      } else {
        // If not, add new item with quantity
        state.items.push({ ...payload, quantity: payload.quantity || 1 });
      }
    },
    removeFromCart: (state, { payload }) => {
      state.items = state.items.filter((_, index) => index !== payload);
    },
    updateCart: (state, { payload }) => {
      const { index, quantity } = payload; // Expecting payload to have index and new quantity
      const itemToUpdate = state.items[index];
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the quantity
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCart } = ProductSlice.actions;
export const selectCartItems = (state) => state.product.items;

export default ProductSlice.reducer;
