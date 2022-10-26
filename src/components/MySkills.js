import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SkillLogo from "../subComponents/SkillLogo";
import github from "../assets/Images/GitHub.png";
import html from "../assets/Images/html.png";
import { lazy, Suspense } from "react";
import Loading from "../subComponents/Loading";
import { Icon } from "@iconify/react";

const ParticleSkills = lazy(() => import("../subComponents/ParticleSkills"));

const HomeButton = lazy(() => import("../subComponents/HomeButton"));

const Box = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  width: 40%;
  max-height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  padding: 2rem;
  display: block;
  z-index: 3;
  overflow: hidden;
  .heading {
    width: 100%;
    text-align: left;
    color: #fff;
    opacity: 0.5;
  }
  @media (max-width: 1024px) {
    overflow: auto;
    width: 100%;
  }
`;

const SubBox = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 5px 3px 5px 2px #0ff;
  width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.div``;

function MySkills() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeButton />
      <Box>
        <ParticleSkills />
        <Main className="container">
          <div className="container heading my-3">
            <h3>Front-End Technologies</h3>
          </div>
          <SubBox className="container my-4 ">
            <div className="row px-2">
              <SkillLogo source={"vscode-icons:file-type-html"} />
              <SkillLogo source={"vscode-icons:file-type-css"} />
              <SkillLogo source={"logos:javascript"} />
              <SkillLogo source={"logos:bootstrap"} />
              <SkillLogo source={"logos:react"} />
            </div>
          </SubBox>
          <div className="container heading my-3">
            <h3>Back-End Technologies</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row px-2">
              <SkillLogo source={"vscode-icons:file-type-node"} />
              <SkillLogo source={"vscode-icons:file-type-sql"} />
              <SkillLogo source={"logos:mongodb-icon"} />
            </div>
          </SubBox>
          <div className="container heading my-3">
            <h3>Proficient tools</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row px-2">
              <SkillLogo source={"vscode-icons:file-type-vscode"} />
              <SkillLogo source={"fa6-brands:github"} color={"white"} />
              <SkillLogo source={"logos:firebase"} />
            </div>
          </SubBox>
        </Main>
      </Box>
    </Suspense>
  );
}

export default MySkills;
