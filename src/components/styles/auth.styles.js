import styled from "styled-components";

export const StyledAuth = styled.div`
  width: 100%;
  height: 100%;
`;

export const RegWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegFormWrapper = styled.div`
  width: 600px;
  height: 100%;

  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    height: 100%;
  }
`;

export const AuthWrapperStyled = styled.div`
  width: calc(100% - 600px);
  height: 100%;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: none;
  }
`;
