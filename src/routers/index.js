import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/App bar";
import Footer from "../components/footer";
import Home from "../pages/home";
import { Login } from "../components/login";
import { Registration } from "../components/registration";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
