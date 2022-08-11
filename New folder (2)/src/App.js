import React, { useState } from "react";
import { Routes, Route } from "react-router";
import { ServiceData } from "./Sources/ServiceData";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ServicesList from "./Components/ServiceComponents/ServicesList";
import ServicesDetailes from "./Components/ServiceComponents/ServicesDetailes";
import Complaint from "./Components/Complaint/Complaint";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import "./App.css";
import "./DarkMode.css";
import Home from "./Components/Home/Home";
import About from "./Components/Footer/About";
import Login from "./Components/LogIn/Login";

function App() {
  const [pargraph, setPargraph] = useState("");
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
        pargraph={pargraph}
        setPargraph={setPargraph}
      />

      <Routes>
        <Route path="/" element={<Home pargraph={pargraph} />} />
        <Route
          path="/cards"
          element={
            <>
              <div className="servicelist">
                <ServicesList
                  isAuth={isAuth}
                  ServiceData={services}
                  filterName={filterName}
                  setFilterName={setFilterName}
                />
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
              <Complaint
                ServiceData={services}
                filterName={filterName}
                setFilterName={setFilterName}
              />
            </PrivateRoute>
          }
        />
        <Route path="/Footer" element={<About />} />
        <Route
          path="/login"
          element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route path="*" element={<h2>Error to find page ! </h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
