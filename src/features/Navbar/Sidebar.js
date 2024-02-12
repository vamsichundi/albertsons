import React from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

// const linkStyle = {
//   margin: "1rem",
//   textDecoration: "none",
// };

// const liStyle = {
//   borderBottom: "1px solid",
// };

const getRoutes = (accountInfo) => {
  const routes = [];
  const az_developer = "az_developer";
  const az_analyst = "az_analyst";
  const roles = accountInfo.account.idTokenClaims.roles;
  if (roles.length > 0) {
    if (!roles.includes(az_developer)) {
      routes.push({ name: "Configuration", route: "/Configuration" });
      routes.push({ name: "Scheduling", route: "/Scheduling" });
    }
    if (roles.includes(az_analyst) || roles.includes(az_developer)) {
      routes.push({ name: "Analysis", route: "/Analysis" });
      routes.push({ name: "Create Experiments", route: "/create-experiments" });
      routes.push({ name: "Create Mappings", route: "/create-mappings" });
      routes.push({ name: "Data Ingest", route: "/data-ingest" });
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
        <ul className="mt-5">
          <li>
            <Link className="menu-opt" to="/">Home Page</Link>
          </li>
          {options.map((option) => (
            <li
              key={option.name}
              // style={liStyle}
              onClick={() => {
                navigate(option.route);
              }}
            >
              <Link className="menu-opt" to={option.route} 
              // style={linkStyle}
              >
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
