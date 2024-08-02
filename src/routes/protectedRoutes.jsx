import React, { useEffect } from "react";
import { stateLogged } from "../store/utils";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ children, url = "/" }) => {
  const { isAuthenticated, checkAuth } = stateLogged();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthenticated) {
    return <Navigate to={url} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;