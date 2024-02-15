import React from "react";
import { Accordion  } from "react-bootstrap";
import ComponentWrapper from "../../components/ComponentWrapper";
import "./DataIngest.css";
import { Col, Container, Button, Row } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import { RoutesUrl } from "../../routing/routesUrls";
import { constants } from "../../constants/contants";


const DataIngest = () => {
  let navigate = useNavigate();
  const dataArray = [
    {
      formTitle: constants.INGEST.RAW_INGEST,
      formData: [
        {
          title: constants.INGEST.TABLE_BASED,
          path: RoutesUrl.TABLE_BASED,
        },
        {
          title: constants.INGEST.SQL_BASED,
          path: RoutesUrl.SQL_BASED,
        },
        {
          title: constants.INGEST.FILE_BASED,
          path: RoutesUrl.FILE_BASED,
        },
        {
          title: constants.INGEST.STREAM_BASED,
          path: RoutesUrl.STREAM_BASED,
        },
      ],
    },
    {
      formTitle: constants.INGEST.CONFORM_INGEST,
      formData: [
        {
          title: constants.INGEST.CONFORM_INGEST,
          path: RoutesUrl.CONFORM_CONFIG,
        },
        {
          title: constants.INGEST.HYBRID_PROCESSOR_CONFIG,
          path: RoutesUrl.HYBRID_CONFIG,
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
                              <Button variant="outline-secondary" onClick={() => navigate(data.path)} className="my-4">{data.title}</Button>
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

