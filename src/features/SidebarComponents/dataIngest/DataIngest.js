import React from "react";
import { Accordion  } from "react-bootstrap";
import ComponentWrapper from "../../../components/ComponentWrapper";
import "../Options.css";
import { Card, Col, Container, Stack,Button, Row } from "react-bootstrap";

const DataIngest = () => {
  const dataArray = [
    {
      formTitle: "Raw Ingest",
      formData: [
        {
          title: "Table-based Ingest",
          path: "/",
        },
        {
          title: "SQL-based Ingest",
          path: "/",
        },
        {
          title: "File-based Ingest",
          path: "/",
        },
        {
          title: "Stream-based Ingest",
          path: "/",
        },
      ],
    },
    {
      formTitle: "Conform Ingest",
      formData: [
        {
          title: "Conform-Processor Config",
          path: "/",
        },
        {
          title: "Hybrid-Processor Config",
          path: "/",
        },
      ],
    },
  ];

  return (
    <div>
      <ComponentWrapper>
        <div className="container">
          <Row className="input-label my-3">
            <Col md={12}>
              <h6><b>Data Ingest</b></h6>
            </Col>
          </Row>
          {dataArray.map((data, index) => {
            return (
              <Accordion key={index}>
                <Accordion.Item>
                  <Accordion.Header>{data.formTitle}</Accordion.Header>
                  <Accordion.Body>
                    <Container>
                      <Row>
                        {data.formData.map((data, index) => {
                          return (
                          <Col md="auto" key={data.title}>
                              <Button variant="outline-secondary" className="my-4">{data.title}</Button>
                          </Col>
                          )
                        })}
                      </Row>
                    </Container>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              )
            })}
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default DataIngest;

