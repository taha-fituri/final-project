import React, { useState } from "react";
import "../../DarkMode.css";
import { Button, Modal, Form } from "react-bootstrap";

function Modal1({ serviceData, servicesfun }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [UpcomingAchievements, setUpcomingAchievements] = useState("");
  const [LatestAchievements, setLatestAchievements] = useState("");
  const [image, setImage] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const addNewService = (
    image,
    LatestAchievements,
    UpcomingAchievements,
    name,
    description
  ) => {
    servicesfun([
      ...serviceData,
      {
        image: image,
        LatestAchievements: LatestAchievements,
        UpcomingAchievements: UpcomingAchievements,
        name: name,
        description: description,
      },
    ]);
    handleClose();
    setImage("");
    setUpcomingAchievements("");
    setName("");
    setLatestAchievements("");
    console.log(serviceData);
  };

  return (
    <div>
      <Button
        variant="secondary"
        style={{ width: "150px", marginBottom: "9%" }}
        onClick={handleShow}
      >
        Add New Service
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalbag" closeButton>
          <Modal.Title>Enter Service Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbag">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the service name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description of service</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter service description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Latest Achievements</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Latest Achievements"
                value={LatestAchievements}
                onChange={(e) => setLatestAchievements(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Upcoming Achievements</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Upcoming Achievements"
                value={UpcomingAchievements}
                onChange={(e) => setUpcomingAchievements(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Service image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Movie image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modalbag">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              addNewService(
                image,
                LatestAchievements,
                UpcomingAchievements,
                name,
                description
              )
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modal1;
