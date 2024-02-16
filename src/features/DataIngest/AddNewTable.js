import React from "react";
import ComponentWrapper from "../../components/ComponentWrapper";
import "./DataIngest.css";
import { Col, Button, Form, Row } from "react-bootstrap";
import { constants } from "../../constants/contants";

const AddNewTable = () => {
  return (
    <div className="container">
      <ComponentWrapper>
        <div className="container">
          <Row className="input-label my-3">
            <Col md={12}>
              <h6><b>{constants.INGEST.TABLE_BASED_NEW_TABLE} </b></h6>
            </Col>
          </Row>
          <div className="p-4 my-4">
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label><b>{constants.INGEST.GENERAL_CONFIGURATION}:</b></Form.Label>
                  <Col md="6">
                    <Form.Control as="textarea" rows={3} />
                  </Col>
                </Form.Group>
                <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
                  <Form.Label><b>{constants.INGEST.TABLE_NAME}:</b></Form.Label>
                  <Col md="6">
                    <Form.Control type="text" placeholder="Schema.table" readOnly />
                  </Col>
                </Form.Group>
                <Button variant="success" type="submit">
                  {constants.INGEST.CREATE_RAW_PROCESSOR}
                </Button>
              </Form>
            </Row>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default AddNewTable;
