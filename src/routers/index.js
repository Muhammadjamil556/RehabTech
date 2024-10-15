import React from "react";
import PublicRoutes from "./public-routes";
import PrivateRoutes from "./private-routes";

const AppRouting = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("accessToken"); // Corrected token key

  // Show private routes if user and token are present, otherwise show public routes
  return <div>{user && token ? <PrivateRoutes /> : <PublicRoutes />}</div>;
};

export default AppRouting;
