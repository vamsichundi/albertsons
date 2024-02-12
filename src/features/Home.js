import React from "react";
import Sidebar from "./Navbar/Sidebar";
import Main from "./Main/Main";
import "./Home.css";
import Nav from "./Navbar/Nav";

const Home = ({ logout, accountInfo }) => {
  return (
    <div>
      <Nav logout={logout} />
      <div className="content">
        <Sidebar accountInfo={accountInfo} />
        <div className="main-content">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
