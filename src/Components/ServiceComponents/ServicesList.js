import React from "react";
import ServicesCrd from "./ServicesCrd";
import Filter from "../../Components/Filters/Filter";
import "./Services.css";
import "../../DarkMode.css";
function ServicesList(props) {
  return (
    <>
      <br />
      {/* <div className="search"> */}
      <div className="filterdiv1">
        <Filter
          filterName={props.filterName}
          setFilterName={props.setFilterName}
        />
      </div>
      <div>
        <h2>Municipal public services</h2>{" "}
        <h5 className="pargraph1" style={{ width: "600px" }}>
          In view of the principle of transparency and listening to public
          opinion, especially with regard to public services and service sectors
          that follow the municipality of Tajoura on it, we give you the
          opportunity to express your opinion and to see everything new and
          coming from the municipality in this field.
        </h5>
      </div>
      {/* </div> */}
      <div className="servicediv">
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
