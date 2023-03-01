import { AuthWrapperStyled } from "../styles/auth.styles";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthWrapper = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const toPage = pathname === "/auth/login" ? "Registration" : "Login";

  const handleNavigate = () => {
    if (pathname === "/auth/login") {
      navigate("/auth/registration");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <AuthWrapperStyled>
      <Button variant="outlined" onClick={handleNavigate}>
        Click for {toPage}
      </Button>
    </AuthWrapperStyled>
  );
};
