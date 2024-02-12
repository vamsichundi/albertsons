import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { BackToHome } from "../../features/Main/Main";
import "./Options.css";

const Mappings = () => {
  return (
    <div>
      <BackToHome />
      <p className="form-title">Component Config</p>
      <p className="form-title">Placement Detials</p>
      <hr />
      <Container>
        <Row className="input-label">
          <Col md={3}>
            <div>CHANNEL</div>
          </Col>
          <Col md={3}>
            <div>COMPONENT PAGE</div>
          </Col>
          <Col md={3}>
            <div>COMPONENT ZONE</div>
          </Col>
          <Col md={3}>
            <div>COMPONENT SLOT</div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={3}>
            <div>
              <Form.Select className="form-control">
                <option value="">Small Channel</option>
              </Form.Select>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Form.Select className="form-control">
                <option value="">Select Componet Page</option>
              </Form.Select>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Form.Select className="form-control">
                <option value="">Select Component Zone</option>
              </Form.Select>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <Form.Select className="form-control">
                <option value="">Select Component Slot</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
      </Container>
      <p className="form-title mt-5">Model Mapping</p>
      <hr />
      <Card className="form-card">
        <Card.Body>
          <div className="form-title mb-3">Priority - 1</div>
          <Row>
            <Col md={3}>
              <div>
                <Form.Select className="form-control">
                  <option value="">Component Type</option>
                </Form.Select>
              </div>
            </Col>
            <Col md={5}>
              <div>
                <Form.Select className="form-control">
                  <option value="">Select Model</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* <Row className="mt-5">
        <Col md={3}>
          <div className="input-label">CHANNEL</div>
          <div className="mt-2">
            <Form.Select size="sm">
              <option value="">Small Channel</option>
            </Form.Select>
          </div>
        </Col>
        <Col md={3}>
          <div className="input-label">COMPONENT PAGE</div>
          <div className="mt-2">
            <Form.Select size="sm">
              <option value="">Select Componet Page</option>
            </Form.Select>
          </div>
        </Col>
        <Col md={3}>
          <div className="input-label">COMPONENT ZONE</div>
          <div className="mt-2">
            <Form.Select size="sm">
              <option value="">Select Component Zone</option>
            </Form.Select>
          </div>
        </Col>
        <Col md={3}>
          <div className="input-label">COMPONENT SLOT</div>
          <div className="mt-2">
            <Form.Select size="sm">
              <option value="">Select Component Slot</option>
            </Form.Select>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Mappings;
