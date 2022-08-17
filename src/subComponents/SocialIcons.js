import React from "react";
import styled from "styled-components";
import { Facebook, Github, Twitter } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  .social-Icon {
    fill: white;
  }

  @media (max-width: 1024px) {
    .social-Icon {
      fill: black;
    }
    left: 1rem;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.body};
  @media (max-width: 1024px) {
    background-color: ${(props) => props.theme.text};
  }
`;

// fill={DarkTheme.text}
function SocialIcons() {
  return (
    <Icons>
      <div>
        <a
          className="social-Icon"
          href={"https://www.google.co.in/"}
          target="_blank"
        >
          <Github width={25} height={25} />
        </a>
      </div>
      <div>
        <a
          className="social-Icon"
          href={"https://www.google.co.in/"}
          target="_blank"
        >
          <Facebook width={25} height={25} />
        </a>
      </div>
      <div>
        <a
          className="social-Icon"
          href={"https://www.google.co.in/"}
          target="_blank"
        >
          <Twitter width={25} height={25} />
        </a>
      </div>
      <Line />
    </Icons>
  );
}

export default SocialIcons;
