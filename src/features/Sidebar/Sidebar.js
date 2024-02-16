import React from "react";
import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { getRoutes } from "../../routing/routes";

const Sidebar = ({ accountInfo }) => {
  const navigate = useNavigate();
  const options = getRoutes(accountInfo);
  return (
    <div className="sidebar">
      <div className="sticky">
        <ul className="mt-2">
          <li>
          <FontAwesomeIcon icon={faHouse} className="mx-1 px-1"/>
            <Link className="menu-opt" to="/">Home</Link>
          </li>
          {options.map((option) => (
            <li
              className="menu-item"
              key={option.name}
              // style={liStyle}
              onClick={() => {
                navigate(option.route);
              }}
            >
              <FontAwesomeIcon icon={option.icon}  className="mx-1 px-1" />
              <Link className="menu-opt" to={option.route}> 
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
