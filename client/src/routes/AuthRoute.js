import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context";

export default function AuthRoute({ children }) {
  const auth = useContext(AuthContext);
  const userToken = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  if (!userToken || userToken === "undefined" || !user) auth.setStatus(false);
  else auth.setStatus(true);
  return !userToken || userToken === "undefined" ? (
    <Navigate to="/signin" />
  ) : (
    children
  );
}
