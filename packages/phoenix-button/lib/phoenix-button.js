import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: green;
`;

const Button = ({ children }) => <ButtonStyled>{children}</ButtonStyled>;

export { Button };
