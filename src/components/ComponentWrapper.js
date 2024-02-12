import React from "react";
import BackToHome from "./BackToHome";
import '../features/Main/Main.css';
import { Card } from "react-bootstrap";

const ComponentWrapper = (props) => {
    return (
        <div className="container">
          <div className="container main-card">
            <BackToHome />
              <Card className="card-content shadow py-3">
                <Card.Body>
                  {props.children}
                </Card.Body>
              </Card>
            </div>
        </div>
    );
  };
  export default ComponentWrapper;