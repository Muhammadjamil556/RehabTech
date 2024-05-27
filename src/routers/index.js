// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "../components/App bar";
// import Footer from "../components/footer";
// import Home from "../pages/home";
// import { Login } from "../components/login";
// import { Registration } from "../components/registration";
// import Medicine from "../pages/medicine/medicine";
// import ComingSoon from "../components/coming soon";

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/*" element={<Home />} />
//         <Route path="/signup" element={<Registration />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/medicine-store" element={<Medicine />} />
//         <Route path="/Physiotherapist-Consultation" element={<ComingSoon />} />
//         <Route path="/Exercises" element={<ComingSoon />} />
//         <Route path="/Pose-detection" element={<ComingSoon />} />
//         <Route path="/News" element={<ComingSoon />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/App bar";
import Footer from "../components/footer";
import Home from "../pages/home";
import { Login } from "../components/login";
import { Registration } from "../components/registration";
import Medicine from "../pages/medicine/medicine";
import ComingSoon from "../components/coming soon";
import MedicineDetails from "../components/medicineDetails/medicineDetails"; // Import MedicineDetailPage component
import ExercisePage from "../pages/exercise";
import ExercisesListCard from "../components/exercise card";
import ExercisesDataMap from "../components/exercise card/exercisesDataMap";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/signup" element={<Registration />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/medicine-store" element={<Medicine />} />
        <Route path="/MedicineDetails/:id" element={<MedicineDetails />} />{" "}
        {/* Add route for medicine detail page */}
        <Route path="/Physiotherapist-Consultation" element={<ComingSoon />} />
        <Route path="/cart" element={<ComingSoon />} />
        <Route path="/Exercises" element={<ExercisePage />} />
        <Route path="/Pose-detection" element={<ComingSoon />} />
        <Route path="/News" element={<ExercisesDataMap />} />
        <Route path="*" element={'No Page Found'} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
