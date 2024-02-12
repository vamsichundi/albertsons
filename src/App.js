import "./App.css";
import Login from "./features/Auth/Login";
import Home from "./features/Home";
import { authProvider } from "./auth/authprovider";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import Configuration from "./features/SidebarComponents/Configuration";
import Scheduling from "./features/SidebarComponents/Scheduling";
import Analysis from "./features/SidebarComponents/Analysis";
import Experiments from "./features/SidebarComponents/Experiments";
import Mappings from "./features/SidebarComponents/Mappings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error401 from "./features/Errors/Error401";
import ProtectedRoute from "./features/Auth/ProtectedRoute";
import DataIngest from "./features/SidebarComponents/dataIngest/DataIngest";
import './assets/css/index.css';
import React from "react";

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
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
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
                  <DataIngest />
                </ProtectedRoute>
              }
            />
            <Route path="/unauthorized" element={<Error401 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
