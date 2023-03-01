import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { StyledAuth } from "../../components/styles/auth.styles";

export const AuthPage = () => {
  const location = useLocation();
  if (
    location.pathname !== "/auth/login" &&
    location.pathname !== "/auth/registration"
  ) {
    return <Navigate to={"/auth/login"} state={{ from: location }} />;
  }
  return (
    <StyledAuth>
      <Outlet />
    </StyledAuth>
  );
};
