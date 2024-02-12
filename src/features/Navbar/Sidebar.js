import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartLine, faFlaskVial, faSnowflake, faMoneyBillTransfer, faGear, faClock } from '@fortawesome/free-solid-svg-icons';

const getRoutes = (accountInfo) => {
  const routes = [];
  const az_developer = "az_developer";
  const az_analyst = "az_analyst";
  const roles = accountInfo.account.idTokenClaims.roles;
  if (roles.length > 0) {
    if (!roles.includes(az_developer)) {
      routes.push({ name: "Configuration", route: "/Configuration", icon: faGear });
      routes.push({ name: "Scheduling", route: "/Scheduling", icon:  faClock});
    }
    if (roles.includes(az_analyst) || roles.includes(az_developer)) {
      routes.push({ name: "Analysis", route: "/Analysis", icon: faChartLine });
      routes.push({ name: "Create Experiments", route: "/create-experiments", icon: faFlaskVial });
      routes.push({ name: "Create Mappings", route: "/create-mappings", icon: faSnowflake });
      routes.push({ name: "Data Ingest", route: "/data-ingest", icon: faMoneyBillTransfer });
    }
  }
  return routes;
};
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
