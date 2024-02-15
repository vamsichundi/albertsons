import React from "react";
import "./HomePage.css";
import { Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
       <div className="container">
        <div className="container main-card">
          <Card className="card-content shadow home-div">
              <Card.Body>
                  <div>Welcome to the Customer 360 Data Flow Framework</div>
              </Card.Body>
          </Card>
        </div>
        </div>
    </div>
  );
};

export default HomePage;
