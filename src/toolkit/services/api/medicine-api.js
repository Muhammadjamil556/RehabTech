import { createApi } from "@reduxjs/toolkit/query/react";
import BaseUrl from "../../../utils/config";

// Define the medicineApi using createApi
export const medicineApi = createApi({
  reducerPath: "medicineApi",
  baseQuery: BaseUrl,
  endpoints: (builder) => ({
    getAllMedicines: builder.query({
      query: () => "/api/v1/all-medicines",
    }),
    getMedicineById: builder.query({
      query: (id) => `/api/v1/all-medicines/${id}`,
    }),
  }),
});

// Export hooks for the queries
export const { useGetAllMedicinesQuery, useGetMedicineByIdQuery } = medicineApi;

export default medicineApi;
