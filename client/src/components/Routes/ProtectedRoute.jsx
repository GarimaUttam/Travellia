import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  if (loading === false) {
    if (isAuthenticated === false) {
      return <Navigate to="/" />;
    }
    return children;
  }
};

export default ProtectedRoute;
