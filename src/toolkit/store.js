import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./services/slices/product"; // Use default export, not named
import medicineApi from "./services/api/medicine-api"; // Assuming medicineApi is set up using RTK Query

export const store = configureStore({
  reducer: {
    product: ProductSlice, // Corrected to use the reducer from the slice
    [medicineApi.reducerPath]: medicineApi.reducer, // RTK Query API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(medicineApi.middleware), // Add RTK Query middleware
});
