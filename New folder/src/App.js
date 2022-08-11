import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ServicesList from "./Components/MovieComponents/ServicesList";
import { ServiceData } from "./Sources/ServiceData";
import { Routes, Route } from "react-router";
import ServicesDetailes from "./Components/MovieComponents/ServicesDetailes";
import Complaint from "./Components/Complaint/Complaint";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  const [services, setServices] = useState(ServiceData);
  const [filterName, setFilterName] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <NavBar
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        filterName={filterName}
        setFilterName={setFilterName}
        serviceData={services}
        servicesfun={setServices}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="movielist">
                <ServicesList ServiceData={services} filterName={filterName} />
              </div>
            </>
          }
        />
        <Route
          path="services/:id"
          element={
            <ServicesDetailes
              isAuth={isAuth}
              serviceData={services}
              servicesfun={setServices}
            />
          }
        />
        <Route
          path="/Complaint"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Complaint ServiceData={services} filterName={filterName} />
            </PrivateRoute>
          }
        />
        <Route path="/Footer" element={null} />
        <Route path="*" element={<h2>Error to find page ! </h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
