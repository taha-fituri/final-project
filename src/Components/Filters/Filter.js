import React from "react";
import "./Filter.css";
import FilByTitel from "./FilByTitel";
function Filter(props) {
  return (
    <div className="filter">
      <FilByTitel
        filterName={props.filterName}
        setFilterName={props.setFilterName}
      />
    </div>
  );
}

export default Filter;
