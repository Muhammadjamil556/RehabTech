// import { createSlice } from "@reduxjs/toolkit";
// import { getData } from "./actions";

// const productSlicer = createSlice({
//   name: "product",
//   initialState: {
//     productDetails: [],
//     isLoading: false,
//     data: null,
//     isError: false,
//   },
//   reducers: {
//     setInput: (state, action) => {
//       const data = state.productDetails.filter(
//         (product) =>
//           product.name &&
//           product.name.toLowerCase().includes(action.payload.toLowerCase())
//       );
//       state.data = data;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getData.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//       state.productDetails = action.payload;
//     });
//     builder.addCase(getData.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getData.rejected, (state, action) => {
//       console.log("error", action.payload);
//       state.isError = true;
//     });
//   },
// });
// export const { setInput } = productSlicer.actions;
// export default productSlicer.reducer;

// redux/productSlice.js// redux/productSlicer.js// redux/productSlicer.js
import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./actions";

const productSlicer = createSlice({
  name: "product",
  initialState: {
    productDetails: [],
    cartItems: [],
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    setInput: (state, action) => {
      const data = state.productDetails.filter(
        (product) =>
          product.name &&
          product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.data = data;
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      state.cartItems[index].quantity = quantity;
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item, index) => index !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.productDetails = action.payload;
      })
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { setInput, addToCart, updateQuantity, removeItem } =
  productSlicer.actions;
export default productSlicer.reducer;
