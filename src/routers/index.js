import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/App bar";
import Footer from "../components/footer";
import Home from "../pages/home";

import Medicine from "../pages/medicine/medicine";
import ComingSoon from "../components/coming soon";
import MedicineDetails from "../components/medicineDetails/medicineDetails"; // Import MedicineDetailPage component
import ExercisePage from "../pages/exercise";
import ExercisesDataMap from "../components/exercise card/exercisesDataMap";
import Appointment from "../components/appointment/appoinment";
import Doctors from "../components/doctorList/doctorsMaped";
import PatientDetails from "../components/patientDetails";
import CartPage from "../components/addCart/carts";
import FeedbackReporting from "../pages/feeback and reporting";
import ExercisesCatogory from "../pages/exercise/exercisesCatogory";
import ExercisePag from "../components/exercisewrapper";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine-store" element={<Medicine />} />
        <Route path="/MedicineDetails/:id" element={<MedicineDetails />} />{" "}
        {/* Add route for medicine detail page */}
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="/Physiotherapist-Consultation" element={<Doctors />} />
        <Route path="/Exercises" element={<ExercisePage />} />
        <Route path="/ExercisesCatogory/:id" element={<ExercisePag />} />
        <Route path="/Pose-detection" element={<ComingSoon />} />
        <Route path="/News" element={<ExercisesDataMap />} />
        <Route path="/PatientDetails" element={<PatientDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/FeedbackReporting" element={<FeedbackReporting />} />
        <Route path="*" element={"No Page Found"} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
