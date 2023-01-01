import React from "react";
import styled from "styled-components";
import { Github, Design, Develope, Link } from "../components/AllSvgs";
import resume from "../assets/Images/resume.png";

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
    fill: ${(props) => props.theme.body};
  }

  @media (max-width: 1024px) {
    .social-Icon {
      fill: ${(props) => props.theme.text};
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
          title="Github"
          className="social-Icon"
          href={"https://github.com/Vignesh-Sivaraman"}
          target="_blank"
          rel="noreferrer"
        >
          <Github width={25} height={25} />
        </a>
      </div>
      <div>
        <a
          title="Resume"
          className="social-Icon"
          href={
            "https://drive.google.com/file/d/1SjpEwojJl3Qo4A3W35SmDp3CilFuoqjx/view?usp=sharing"
          }
          target="_blank"
          rel="noreferrer"
        >
          <Develope width={25} height={25} />
        </a>
      </div>

      <Line />
    </Icons>
  );
}

export default SocialIcons;
