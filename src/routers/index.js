import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/App bar";
import Footer from "../components/footer";
import Home from "../pages/home";
import { Login } from "../components/login";
import { Registration } from "../components/registration";
import Medicine from "../pages/medicine/medicine";
import ComingSoon from "../components/coming soon";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<ComingSoon />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/medicine-store" element={<Medicine />} />
        <Route path="/Physiotherapist-Consultation" element={<ComingSoon />} />
        <Route path="/Exercises" element={<ComingSoon />} />
        <Route path="/Pose-detection" element={<ComingSoon />} />
        <Route path="/News" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
