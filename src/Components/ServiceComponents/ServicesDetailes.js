import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "../../App.css";
import "./Services.css";
import "../../DarkMode.css";

function ServicesDetailes({ isAuth, servicesfun, serviceData }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState("");
  const [email, setEmail] = useState("");
  const addNewComplaint = (email, complaints) => {
    // servicesfun([{ ...serviceData, email: email, complaints: complaints }]);
    // console.log(serviceData);
    setComplaints("");
    setEmail("");
    // console.log(serviceData);
  };
  return (
    <div className="bigdiv">
      <div className="detailsdiv ">
        <div className="rate-name">
          <div className="pardiv" style={{ width: "800px" }}>
            <h2 className="titel1" style={{ fontSize: "xxx-large" }}>
              {location.state.name}
            </h2>
            <h3 className="titel1" style={{ fontWeight: "bold" }}>
              <i class="fa-solid fa-clipboard-check titel1"></i> <span /> Latest
              Achievements
            </h3>
            <h4 style={{ textAlign: "left" }}>
              {location.state.LatestAchievements}
            </h4>
            <h3 className="titel1" style={{ fontWeight: "bold" }}>
              <i class="fa-solid fa-clipboard-list titel1"></i> <span />
              Upcoming Achievements
            </h3>
            <h4 style={{ textAlign: "left" }}>
              {location.state.UpcomingAchievements}
            </h4>
            {
              isAuth ? (
                <div>
                  <h3
                    className="titel1"
                    style={{ fontWeight: "bold", textAlign: "left" }}
                  >
                    <i class="fa-solid fa-clipboard-question titel1"></i>{" "}
                    <span /> Citizen complaints
                  </h3>
                  <p style={{ textAlign: "left", fontSize: "x-large" }}>
                    {location.state.complaints}
                  </p>
                  <i class="fa-regular fa-circle-envelope titel1"></i>
                  <h3
                    className="titel1"
                    style={{ fontWeight: "bold", textAlign: "left" }}
                  >
                    <i class="fa-solid fa-envelope-open titel1"></i> <span />{" "}
                    Complainant's email
                  </h3>
                  <p style={{ textAlign: "left", fontSize: "x-large" }}>
                    {location.state.email}
                  </p>{" "}
                </div>
              ) : null
              // <div>
              //   <h3 style={{ fontWeight: "bold", textAlign: "left" }}>
              //     <i class="fa-solid fa-comment-lines"></i> <span />
              //     Service Description
              //   </h3>
              //   <h4 style={{ textAlign: "left" }}>
              //     {location.state.description}
              //   </h4>
              // </div>
            }
          </div>
          <div className="button-rate">
            <Button
              style={{ marginTop: "4%" }}
              variant="secondary"
              onClick={() => navigate("/cards")}
            >
              Go Back
            </Button>
          </div>
        </div>
        <img
          src={location.state.image}
          style={{ height: "400px", width: "500px", borderRadius: "4%" }}
          alt="movies"
        />
      </div>
      {isAuth !== true ? (
        <div>
          <Form style={{ width: "650px" }}>
            <div className="forms">
              <div className="shakwa">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Submit a complaint to the institution</Form.Label>
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
                  <Form.Label>Email address</Form.Label>
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
            variant="secondary"
            onClick={() => addNewComplaint(email, complaints)}
            type="submit"
          >
            Send complaint
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
