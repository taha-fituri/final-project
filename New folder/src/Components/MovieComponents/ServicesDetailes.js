import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import "./Services.css";

function ServicesDetailes({ isAuth, servicesfun, serviceData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState("");
  const [email, setEmail] = useState("");
  const addNewComplaint = (email, complaints) => {
    servicesfun([{ ...serviceData, email: email, complaints: complaints }]);
    console.log(serviceData);

    setComplaints("");
    setEmail("");
    console.log(serviceData);
  };
  return (
    <div className="bigdiv">
      <div className="detailsdiv ">
        <div className="rate-name">
          <div className="pardiv" style={{ width: "800px" }}>
            <h2 style={{ color: "white" }}>{location.state.name}</h2>
            <h2>Latest Achievements</h2>
            <p>{location.state.LatestAchievements}</p>
            <h2>Upcoming Achievements</h2>
            <p>{location.state.UpcomingAchievements}</p>
            {isAuth ? (
              <div>
                <h2>Citizen complaints</h2>
                <p>{location.state.complaints}</p>
                <h3>{location.state.email}</h3>{" "}
              </div>
            ) : (
              <h4 style={{ color: "white" }}>{location.state.description}</h4>
            )}
          </div>
          <div className="button-rate">
            <Button
              style={{ marginTop: "4%" }}
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Go Back
            </Button>
          </div>
        </div>
        <img src={location.state.image} height="400px" alt="movies" />
      </div>
      {isAuth !== true ? (
        <div>
          <Form style={{ width: "650px" }}>
            <div className="forms">
              <div className="shakwa">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ color: "black" }}>
                    Submit a complaint to the institution
                  </Form.Label>
                  <Form.Control
                    type="text"
                    style={{ height: "200px" }}
                    placeholder="Enter your Cpmplaint"
                    value={complaints}
                    onChange={(e) => setComplaints(e.target.value)}
                  />
                </Form.Group>
              </div>
              <div className="email">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{ color: "black" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Latest Achievements"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
          </Form>
          <Button
            variant="primary"
            onClick={() => addNewComplaint(email, complaints)}
            type="submit"
          >
            Submit
          </Button>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
        </div>
      ) : null}
    </div>
  );
}

export default ServicesDetailes;
