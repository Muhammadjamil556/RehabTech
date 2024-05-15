import { createSlice } from "@reduxjs/toolkit";
import { getData } from "./actions";

const productSlicer = createSlice({
  name: "product",
  initialState: {
    productDetails: [],
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
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.productDetails = action.payload;
    });
    builder.addCase(getData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state, action) => {
      console.log("error", action.payload);
      state.isError = true;
    });
  },
});
export const { setInput } = productSlicer.actions;
export default productSlicer.reducer;
