import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.body};
  font-family: "Pacifico", cursive;

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;

  @media (max-width: 1024px) {
    font-size: 1.5em;
    left: 1rem;
    top: 2rem;
  }
`;

const LogoName = () => {
  return <Logo>VS</Logo>;
};

export default LogoName;
