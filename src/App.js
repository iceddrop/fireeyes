import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import ValidateOtp from "./component/ValidateOtp";
import LandingPage from "./pages/LandingPage/LandingPage";
import Team from "./pages/Team/Team";
import Home from "./pages/Home/Home";
import DashboardLayout from "./Layout/DashboardLayout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/validate-otp" element={<ValidateOtp />} />
        <Route path="/team" element={<Team />} />
        <Route path="/home" element={<DashboardLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
