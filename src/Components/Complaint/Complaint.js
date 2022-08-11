import React from "react";
import ServicesCrd from "../ServiceComponents/ServicesCrd";
import "../ServiceComponents/Services.css";
import Filter from "../../Components/Filters/Filter";
import "../../Components/ServiceComponents/Services.css";
function Complaint(props) {
  return (
    <div>
      <div className="filterdiv1" style={{ marginTop: "7%" }}>
        <Filter
          filterName={props.filterName}
          setFilterName={props.setFilterName}
        />
      </div>
      <div style={{ marginTop: "1%" }} className="servicediv">
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
