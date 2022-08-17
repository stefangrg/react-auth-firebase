import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthProvider";

export default function PrivateRoute({ children }) {

  const auth = useAuth();

  return auth.check() ? children : <Navigate to="/login" />;

}