import React, { useState } from "react";
import { Route, Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const userRole = localStorage.getItem("userRoles");
  if (!userRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
