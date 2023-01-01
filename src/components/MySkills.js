import React from "react";
import styled from "styled-components";
import SkillLogo from "../subComponents/SkillLogo";
import { lazy, Suspense } from "react";
import Loading from "../subComponents/Loading";
import LogoName from "../subComponents/LogoName";
// logo images

import htmlLogo from "../assets/Images/html.png";
import cssLogo from "../assets/Images/css.png";
import jsLogo from "../assets/Images/js.png";
import bootstrapLogo from "../assets/Images/Bootstrap.png";
import reactLogo from "../assets/Images/react.png";
import nodeLogo from "../assets/Images/node.png";
import sqlLogo from "../assets/Images/sql.png";
import mongoDBLogo from "../assets/Images/mongodb.png";
import gitLogo from "../assets/Images/git.png";
import firebaseLogo from "../assets/Images/firebase.png";
import awsLogo from "../assets/Images/aws.png";

const ParticleSkills = lazy(() => import("../subComponents/ParticleSkills"));

const HomeButton = lazy(() => import("../subComponents/HomeButton"));

const Box = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
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

function MySkills() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeButton />
      <LogoName />
      <Box>
        <ParticleSkills />
        <Main className="container">
          <div className="container heading my-3">
            <h3 style={{ color: "white" }}>Front-End Technologies</h3>
          </div>
          <SubBox className="container my-4 ">
            <div className="row px-2">
              <SkillLogo source={htmlLogo} />
              <SkillLogo source={cssLogo} />
              <SkillLogo source={jsLogo} />
              <SkillLogo source={bootstrapLogo} />
              <SkillLogo source={reactLogo} />
            </div>
          </SubBox>
          <div className="container heading my-3">
            <h3>Back-End Technologies</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row px-2">
              <SkillLogo source={nodeLogo} />
              <SkillLogo source={sqlLogo} />
              <SkillLogo source={mongoDBLogo} />
            </div>
          </SubBox>
          <div className="container heading my-3">
            <h3>Proficient tools</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row px-2">
              <SkillLogo source={gitLogo} />
              <SkillLogo source={firebaseLogo} />
              <SkillLogo source={awsLogo} />
            </div>
          </SubBox>
        </Main>
      </Box>
    </Suspense>
  );
}

export default MySkills;
