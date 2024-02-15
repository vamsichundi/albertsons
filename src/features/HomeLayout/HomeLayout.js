import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./HomeLayout.css";
import Nav from "../Navbar/Nav";
import { Outlet  } from "react-router-dom";

const HomeLayout = ({ logout, accountInfo }) => {
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

export default HomeLayout;
