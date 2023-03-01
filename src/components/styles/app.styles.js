import styled from "styled-components";

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  /*background-color: rgb(var(--tmdbLightBlue));*/

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: auto;
  }
`;

export const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
`;
