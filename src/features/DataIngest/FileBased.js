import React from "react";
import { Accordion  } from "react-bootstrap";
import ComponentWrapper from "../../components/ComponentWrapper";
import "./DataIngest.css";
import { Col, Container, Button, Row } from "react-bootstrap";
import { useNavigate  } from "react-router-dom";
import { RoutesUrl } from "../../routing/routesUrls";
import { constants } from "../../constants/contants";

const FileBased = () => {
  let navigate = useNavigate();
  const dataArray = [
    {
      formTitle: constants.INGEST.NEW,
      formData: [
        {
          title: constants.INGEST.ADD_NEW_FILE,
          path: RoutesUrl.TABLE_BASED,
        },
      ],
    },
    {
      formTitle: constants.INGEST.EXISTING,
      formData: [
        {
          title: constants.INGEST.CONFIGURE_EXISTING_FILE,
          path: RoutesUrl.CONFORM_CONFIG,
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
              <h6><b>{constants.INGEST.DATA_FILE_BASED} </b></h6>
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

export default FileBased;