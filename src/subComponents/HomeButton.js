import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Home = styled.button`
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 5;
  background-color: transparent;
  border: none;
  h3 {
    color: ${(props) => props.theme.body};
    font-family: "Ubuntu", cursive;
  }
`;

const HomeButton = () => {
  return (
    <Home>
      <NavLink to="/">
        <h3>Home</h3>
      </NavLink>
    </Home>
  );
};

export default HomeButton;
