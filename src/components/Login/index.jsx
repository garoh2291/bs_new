import React from "react";
import { LoginForm } from "./LoginForm";
import { AuthWrapper } from "../SmallComponents/auth-wrapper";
import { RegWrapper } from "../styles/auth.styles";

export const Login = () => {
  return (
    <RegWrapper>
      <AuthWrapper />
      <LoginForm />
    </RegWrapper>
  );
};
