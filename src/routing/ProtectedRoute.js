import React from "react";
import { Navigate, Route } from "react-router-dom";
import { getAuthorizedRoutes } from "./routes";

export const ProtectedRouteWrapper = ({ path, element }) => {
  const authorizedRoutes = getAuthorizedRoutes();
  if (!authorizedRoutes.include(path)) {
    return <Route path={"/unauthorized"} element={element} />
  }
  return <Route path={path} element={element} />
}

export const ProtectedRoute = ({ children }) => {
  if (authorizedRoutes.include()) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default ProtectedRoute;


