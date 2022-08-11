import React from "react";
import ServicesCrd from "../MovieComponents/ServicesCrd";
import "../MovieComponents/Services.css";
function Complaint(props) {
  return (
    <div>
      <div className="moviediv">
        {props.ServiceData.filter((e) =>
          e.name.toUpperCase().includes(props.filterName.toUpperCase())
        ).map((e) => (
          <ServicesCrd e={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}

export default Complaint;
