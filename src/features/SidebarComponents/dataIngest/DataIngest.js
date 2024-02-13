import React from "react";
import { Accordion  } from "react-bootstrap";
import ComponentWrapper from "../../../components/ComponentWrapper";

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
                <h3 className="text-center mb-3">
                  <b>Data Ingest</b>
          </h3>
          {dataArray.map((data, index) => {
            return (
              <Accordion key={index}>
                <Accordion.Item>
                                  <Accordion.Header>{data.formTitle}</Accordion.Header>
                {data.formData.map((data, index) => {
                  return (
                    <Accordion.Body role="button">
                      {data.title}
                    </Accordion.Body>
                      )
                    })}
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
