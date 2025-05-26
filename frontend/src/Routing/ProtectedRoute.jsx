import React from 'react'
import { Outlet, Navigate } from "react-router-dom"

function ProtectedRoute() {
  // JWT token is a string, not JSON. No need to parse.
  let token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="auth" />;
}

export default ProtectedRoute