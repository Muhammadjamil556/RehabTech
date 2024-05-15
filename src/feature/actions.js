import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";
export const getData = createAsyncThunk("medicine/data", async () => {
  const res = await axios.get("/api/v1/all-medicines");
  const data = await res.data.response;
  console.log(res);
  return data;
});
