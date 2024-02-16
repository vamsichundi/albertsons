import React from "react";
import "./Main.css";
import Configuration from "../Configuration/Configuration";
import Scheduling from "../Scheduling/Scheduling";
import Analysis from "../Analysis/Analysis";
import { Routes, Route, Navigate, Outlet  } from "react-router-dom";
import Error401 from "../Errors/Error401";
import { getPath, isAuthorizedRoute } from "../../routing/routes";
import Experiments from "../CreateExperiments/Experiments";
import Mappings from "../CreateMappings/Mappings";
import DataIngest from "../DataIngest/DataIngest";
import HomePage from "../HomePage/HomePage";
import { RoutesUrl } from '../../routing/routesUrls';
import TableBased from "../DataIngest/TableBased";
import SQLBased from "../DataIngest/SQLBased";
import StreamBased from "../DataIngest/StreamBased";
import FileBased from "../DataIngest/FileBased";
import ConformIngest from "../DataIngest/ConformIngest";
import HybridConfig from "../DataIngest/HybridConfig";
import AddNewTable from "../DataIngest/AddNewTable";
import AddNewAttribute from "../DataIngest/AddNewAttribute";
import ConfigureExistingTable from "../DataIngest/ConfigureExistingTable";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} /> 
        <Route path={getPath(RoutesUrl.CONFIGURATION)} element={isAuthorizedRoute(RoutesUrl.CONFIGURATION) ? <Configuration /> : <Navigate to="/" />} />
        <Route path={getPath(RoutesUrl.SCHEDULING)} element={<Scheduling />} />
        <Route path={getPath(RoutesUrl.ANALYSIS)} element= {<Analysis />} />
        <Route path={getPath(RoutesUrl.CREATE_EXPERIMENTS)} element={<Experiments />} />
        <Route path={getPath(RoutesUrl.CREATE_MAPPINGS)} element= {<Mappings />} />
        <Route path={getPath(RoutesUrl.INSIGHT)} element={<DataIngest />} />
        <Route path={getPath(RoutesUrl.DATA_INGEST)} element={<DataIngest />} />
        <Route path={getPath(RoutesUrl.DATABRICKS)} element={<Analysis />} />
        <Route path={getPath(RoutesUrl.TABLE_BASED)} element={<TableBased />} />
        <Route path={getPath(RoutesUrl.SQL_BASED)} element={<SQLBased />} />
        <Route path={getPath(RoutesUrl.FILE_BASED)} element= {<FileBased />} />
        <Route path={getPath(RoutesUrl.STREAM_BASED)} element={<StreamBased />} />
        <Route path={getPath(RoutesUrl.CONFORM_CONFIG)} element={<ConformIngest />} />
        <Route path={getPath(RoutesUrl.HYBRID_CONFIG)} element={<HybridConfig />} />
        <Route path={getPath(RoutesUrl.ADD_NEW_TABLE)} element={<AddNewTable />} />
        <Route path={getPath(RoutesUrl.ADD_NEW_ATTRIBUTE)} element={<AddNewAttribute />} />
        <Route path={getPath(RoutesUrl.CONFIGURE_EXISTING_TABLE)} element={<ConfigureExistingTable />} />
        <Route path={RoutesUrl.UNAUTHORIZED} element={<Error401 />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </>
  );
};

export default Main;
