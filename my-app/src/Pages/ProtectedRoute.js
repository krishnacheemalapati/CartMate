import React from "react";
import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, to }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to={to} />;
  }

  return children;
}

export default ProtectedRoute;
