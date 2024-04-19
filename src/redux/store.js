import { configureStore } from "@reduxjs/toolkit";
import product from "../feature/productSlicer";

export const store = configureStore({
  reducer: { product },
});
