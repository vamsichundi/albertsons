import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import "./Nav.css";
import albert from '../../assets/images/albert.png'

const Nav = ({ logout }) => {
  const userName = localStorage.getItem("userName").split(" ");
  const name =  userName[0];
  return (
    <div>
      <Navbar
        className="Navbar justify-content-between shadow-sm" expand="lg"
      >
        <Navbar.Brand href="/">
          <img className="brand-logo" src={albert} alt="" />
        </Navbar.Brand>
        <>
          
          <NavDropdown className="text-dark drop-down nav-drop-down" title={name}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      </Navbar>
    </div>
  );
};

export default Nav;
