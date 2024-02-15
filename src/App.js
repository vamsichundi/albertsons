import React from "react";
import "./App.css";
import Login from "./features/Login/Login";
import Home from "./features/HomeLayout/HomeLayout";
import { authProvider } from "./auth/authprovider";
import { AzureAD, AuthenticationState } from "react-aad-msal";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
            <Route path="" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
