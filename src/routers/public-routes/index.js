import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../../pages/signin";
import SignUp from "../../pages/signup";
import PasswordResetPage from "../../pages/PasswordResetPage";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        {["/", "/signin"].map((path, key) => (
          <Route key={key} exact path={path} element={<SignIn />} />
        ))}

        <Route path={"/signup"} exact element={<SignUp />} />
        <Route path="/password-reset/:token" element={<PasswordResetPage />} />
        <Route path="*" element={<div>No Page Found</div>} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
