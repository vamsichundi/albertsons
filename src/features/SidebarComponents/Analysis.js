import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../../features/Main/Main.css";
import { BackToHome } from "../../features/Main/Main";
import ComponentWrapper from "../../components/ComponentWrapper";

const Analysis = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = () => {
    window.open(
      "https://adb-1317346605604634.14.azuredatabricks.net/onboarding?o=1317346605604634",
      "_blank",
      "noreferrer"
    );
    handleClose();
  };
  return (
    <div>
      <ComponentWrapper>
      <div className="container">
        <div className="mx-3">
          Note*:{" "}
          <b>
            Please Click on the View Analysis Button to see Azure Databrick
            Analysis portal
          </b>
          <p className="mt-3">
            <Button variant="success" size="sm" onClick={handleShow}>
              View Analysis
            </Button>
          </p>
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>
                Alert: Redirecting to a different Window
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Please click Open to view to the Analysis in new window or click
              cancel to deny it
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" size="sm" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" size="sm" onClick={handleClick}>
                Open
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      </ComponentWrapper>
      
    </div>
  );
};

export default Analysis;
