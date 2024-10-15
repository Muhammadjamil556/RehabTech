import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the base query function
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    // Get the access token from localStorage
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

// Create a base query function with authentication handling
const baseQueryWithAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    logoutUser();
  }
  return result;
};

// Function to handle user logout
export const logoutUser = () => {
  // Remove items from localStorage
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");

  // Optionally, navigate to login page or show a message
  window.location.reload();
};

export default baseQueryWithAuth;
