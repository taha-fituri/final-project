import React from "react";
import ServicesCrd from "./ServicesCrd";
import "./Services.css";

function ServicesList(props) {
  return (
    <>
      <br />
      <div>
        <h2 style={{ color: "white" }}>Municipal public services</h2>{" "}
        <h5 className="pargraph1" style={{ color: "white", width: "600px" }}>
          In view of the principle of transparency and listening to public
          opinion, especially with regard to public services and service sectors
          that follow the municipality of Tajoura on it, we give you the
          opportunity to express your opinion and to see everything new and
          coming from the municipality in this field.
        </h5>
      </div>
      <div className="moviediv">
        {props.ServiceData.filter((e) =>
          e.name.toUpperCase().includes(props.filterName.toUpperCase())
        ).map((e) => (
          <ServicesCrd e={e} key={e.id} />
        ))}
      </div>
    </>
  );
}

export default ServicesList;
