import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../../DarkMode.css";
import "./Services.css";
import "../../App.css";

function MovieCrd(props) {
  return (
    <div className="Cardcontain">
      <Link to={`/services/${props.e.id}`} state={props.e}>
        <Card className="Card">
          <Card.Header style={{ fontSize: "x-large" }}>
            {props.e.name}
          </Card.Header>
          <Card.Body>
            <div className="carddiv">
              <div>
                <Card.Text style={{ width: "400px", fontSize: "large" }}>
                  {props.e.description}
                </Card.Text>
                <i className="fa-solid  fa-circle-arrow-right"></i>{" "}
              </div>
              <Card.Img
                variant="top"
                src={props.e.image}
                style={{ height: "350px", borderRadius: "4%" }}
              />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCrd;
