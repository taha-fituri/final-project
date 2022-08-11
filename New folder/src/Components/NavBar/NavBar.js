import "../../App.css";
import "../NavBar/NavBar.css";
import { NavLink } from "react-router-dom";
import logo from "../../Sources/Images/Untitled-1.png";
// import React, { useState } from "react";
import Modal1 from "../../Components/Modal/Modal";

import Filter from "../../Components/Filters/Filter";
import { Container, Nav, Form, Navbar, Button } from "react-bootstrap";
function NavBar({
  filterName,
  setFilterName,
  serviceData,
  servicesfun,
  setIsAuth,
  isAuth,
}) {
  // const [filterName, setFilterName] = useState("");
  // const [filterRate, setFilterRate] = useState(1);
  return (
    <Navbar fixed="top" className="color-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "white", fontSize: "x-large" }}>
          <img src={logo} alt="test" height="70px"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/Complaint"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              Complaints
            </NavLink>
            <NavLink
              to="/Footer"
              className={(navLink) =>
                navLink.isActive ? "selectedLink" : "navLink"
              }
            >
              About
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <div className="filterdiv">
              <Filter filterName={filterName} setFilterName={setFilterName} />
              {isAuth ? (
                <Modal1 serviceData={serviceData} servicesfun={servicesfun} />
              ) : null}

              <Form className="d-flex" style={{ marginLeft: "2%" }}>
                <Button
                  variant="outline-light"
                  onClick={() => setIsAuth(!isAuth)}
                >
                  {isAuth ? "Logout" : "Login"}
                </Button>
              </Form>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
