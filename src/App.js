import React, { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ServicesIOSS from "./screens/ServicesIOSS";
import ServicesFacialRepresentation from "./screens/ServicesFacialRepresentation";
import ServicesTaxpay from "./screens/ServicesTaxpay";
import ServicesPartnerships from "./screens/ServicesPartnerships";
import FAQScreen from "./screens/FAQScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import Login from "./screens/Login";
import SignupScreen from "./screens/SignupScreen";
import loader from "./assets/loader.svg";

function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loader} alt="loader" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={loading ? <LoadingScreen /> : <HomeScreen />}
        />
        <Route path="/services" element={<ServicesIOSS />} />
        <Route
          path="/services-facial-representation"
          element={<ServicesFacialRepresentation />}
        />
        <Route path="/services-taxpay" element={<ServicesTaxpay />} />
        <Route
          path="/services-partnerships"
          element={<ServicesPartnerships />}
        />
        <Route path="/faq" element={<FAQScreen />} />
        <Route path="/about" element={<AboutUsScreen />} />
        <Route path="/contact" element={<ContactUsScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignupScreen />} />
      </Routes>
    </>
  );
}
