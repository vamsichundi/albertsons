import React from "react";
import "./App.css";
import Login from "./features/Login/Login";
import Home from "./features/HomeLayout/HomeLayout";
import { authProvider } from "./auth/authprovider";
import { getPath, isAuthorizedRoute } from "./routing/routes";
import { RoutesUrl } from './routing/routesUrls';
import { AzureAD, AuthenticationState } from "react-aad-msal";
import Configuration from "./features/Configuration/Configuration";
import Scheduling from "./features/Scheduling/Scheduling";
import Analysis from "./features/Analysis/Analysis";
import Experiments from "./features/CreateExperiments/Experiments";
import Mappings from "./features/CreateMappings/Mappings";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Error401 from "./features/Errors/Error401";
import DataIngest from "./features/DataIngest/DataIngest";
import './assets/css/index.css';

function HomeLayout() {
  return (
    <AzureAD provider={authProvider} forceLogin={false} forceLogout={true}>
      {({ login, logout, authenticationState, error, accountInfo }) => {
        localStorage.setItem("userName", accountInfo?.account.name);
        localStorage.setItem(
          "userRoles",
          JSON.stringify(accountInfo?.account.idTokenClaims.roles)
        );
        switch (authenticationState) {
          case AuthenticationState.Authenticated:
            return <Home logout={logout} accountInfo={accountInfo} />;
          case AuthenticationState.Unauthenticated:
            return <Login login={login} logout={logout} />;
          case AuthenticationState.InProgress:
            return <p>Authenticating...</p>;
        }
      }}
    </AzureAD>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route
              path=""
              element={
                  <Home />
              }
            />
            <Route path={getPath(RoutesUrl.CONFIGURATION)} element={isAuthorizedRoute(RoutesUrl.CONFIGURATION) ? <Configuration /> : <Navigate to={RoutesUrl.UNAUTHORIZED} />} />
            <Route path={getPath(RoutesUrl.SCHEDULING)} element={<Scheduling />} />
            <Route path={getPath(RoutesUrl.ANALYSIS)} element= {<Analysis />} />
            <Route path={getPath(RoutesUrl.CREATE_EXPERIMENTS)} element={<Experiments />} />
            <Route path={getPath(RoutesUrl.CREATE_MAPPINGS)} element= {<Mappings />} />
            <Route path={getPath(RoutesUrl.DATA_INGEST)} element= {<DataIngest />} />
            <Route path={RoutesUrl.UNAUTHORIZED} element={<Error401 />} />
            <Route path="*" element={<Navigate to="/" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
