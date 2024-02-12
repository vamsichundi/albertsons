import React from "react";
import "./Main.css";
import Configuration from "../../features/SidebarComponents/Configuration";
import Scheduling from "../../features/SidebarComponents/Scheduling";
import Analysis from "../../features/SidebarComponents/Analysis";
import { Routes, Route, useNavigate } from "react-router-dom";
import Error401 from "../Errors/Error401";
import ProtectedRoute from "../Auth/ProtectedRoute";
import { Card } from "react-bootstrap";
import Experiments from "../../features/SidebarComponents/Experiments";
import Mappings from "../../features/SidebarComponents/Mappings";
import DataIngest from "../../features/SidebarComponents/dataIngest/DataIngest";

export const BackToHome = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="mb-2 backhome-btn" onClick={clickHandler}>
        {"<"} Back to Home Page
      </div>
      <hr className=" mt-0" />
    </div>
  );
};

const Main = () => {
  return (
    <>
      <div className="container">
        <div className=" container main-card">
          <Card className="card-content shadow">
            <Card.Body>
              <Routes>
                <Route
                  path=""
                  element={
                    <h1 className=" text-center">
                      Welcome to the Customer 360 Data Flow Framework
                    </h1>
                  }
                />
                <Route
                  path="/Configuration"
                  element={
                    <ProtectedRoute>
                      <Configuration />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Scheduling"
                  element={
                    <ProtectedRoute>
                      <Scheduling />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Analysis"
                  element={
                    <ProtectedRoute>
                      <Analysis />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Create-experiments"
                  element={
                    <ProtectedRoute>
                      <Experiments />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/Create-mappings"
                  element={
                    <ProtectedRoute>
                      <Mappings />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/data-ingest"
                  element={
                    <ProtectedRoute>
                      <DataIngest/>
                    </ProtectedRoute>
                  }
                />
                <Route path="/unauthorized" element={<Error401 />} />
              </Routes>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Main;
