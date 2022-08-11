import React from "react";
import { Form } from "react-bootstrap";

function FilByTitel(props) {
  return (
    <div>
      <Form style={{ width: "450px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Services Name"
            value={props.filterName}
            onChange={(e) => props.setFilterName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default FilByTitel;
