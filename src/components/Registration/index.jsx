import React from "react";
import { AuthWrapper } from "../SmallComponents/auth-wrapper";
import { RegWrapper } from "../styles/auth.styles";
import { RegisterForm } from "../Registration/Register";

export const Registration = () => {
  return (
    <RegWrapper>
      <AuthWrapper />
      <RegisterForm />
    </RegWrapper>
  );
};
