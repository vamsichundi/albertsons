import React from "react";
import { BackToHome } from "../../../features/Main/Main";
import { Row, Col, Card } from "react-bootstrap";

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
      <BackToHome />
      <div className="container">
        <h3 className="text-center mb-3">
          <b>Data Ingest</b>
        </h3>
        {dataArray.map((data, index) => {
          return (
            <>
              <Row key={index}>
                <Col md={3}>
                  <div className="form-title">{data.formTitle}</div>
                </Col>
                <Col md={6}>
                  {data.formData.map((data, index) => {
                    return (
                      <Card key={index} className="mb-3 shadow-sm" role="button">
                        <Card.Body>
                          <div className="text-center">{data.title}</div>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Col>
              </Row>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DataIngest;
