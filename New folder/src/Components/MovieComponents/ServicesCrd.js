import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Services.css";
import { Card, Button } from "react-bootstrap";

function MovieCrd(props) {
  return (
    <div className="Cardcontain">
      <Link to={`/services/${props.e.id}`} state={props.e}>
        <Card className="Card">
          <Card.Header style={{ fontSize: "x-large" }}>
            {" "}
            {props.e.name}
          </Card.Header>
          <Card.Body>
            <div className="carddiv">
              <div>
                {/* <Card.Title>{props.e.name}</Card.Title> */}
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </div>
              <Card.Img variant="top" src={props.e.image} height="350px" />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default MovieCrd;
