import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledDashboard } from "../../components/styles/app.styles";
import { checkUserThunk } from "../../redux/provider/userSlice";
import { Loader } from "../Loader";

export const DashboardPage = () => {
  const { status, active } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserThunk());
  }, []);

  if (status === "loading") {
    return <Loader />;
  }

  if (!active) {
    return <h2>no subscription</h2>;
  }

  return <StyledDashboard>DashboardPage</StyledDashboard>;
};
