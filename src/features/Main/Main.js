import React from "react";
import "./Main.css";
import Configuration from "../Configuration/Configuration";
import Scheduling from "../Scheduling/Scheduling";
import Analysis from "../Analysis/Analysis";
import { Routes, Route, Navigate } from "react-router-dom";
import Error401 from "../Errors/Error401";
import { getPath, isAuthorizedRoute } from "../../routing/routes";
import Experiments from "../CreateExperiments/Experiments";
import Mappings from "../CreateMappings/Mappings";
import DataIngest from "../DataIngest/DataIngest";
import HomePage from "../HomePage/HomePage";
import { RoutesUrl } from '../../routing/routesUrls';

const Main = () => {
  return (
      <Routes>
        <Route path="" element={<HomePage />} /> 
        <Route path={getPath(RoutesUrl.CONFIGURATION)} element={isAuthorizedRoute(RoutesUrl.CONFIGURATION) ? <Configuration /> : <Navigate to="/" />} />
        <Route path={getPath(RoutesUrl.SCHEDULING)} element={<Scheduling />} />
        <Route path={getPath(RoutesUrl.ANALYSIS)} element= {<Analysis />} />
        <Route path={getPath(RoutesUrl.CREATE_EXPERIMENTS)} element={<Experiments />} />
        <Route path={getPath(RoutesUrl.CREATE_MAPPINGS)} element= {<Mappings />} />
        <Route path={getPath(RoutesUrl.DATA_INGEST)} element= {<DataIngest />} />
        <Route path={RoutesUrl.UNAUTHORIZED} element={<Error401 />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
  );
};

export default Main;
