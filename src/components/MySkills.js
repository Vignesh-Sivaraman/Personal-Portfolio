import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SkillLogo from "../subComponents/SkillLogo";
import github from "../assets/Images/GitHub.png";
import { lazy, Suspense } from "react";
import Loading from "../subComponents/Loading";

const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);

const HomeButton = lazy(() => import("../subComponents/HomeButton"));

const Box = styled.div`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled.div`
  width: 50%;
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
  width: 100%;

  @media (max-width: 1024px) {
    width: 70%;
  }
`;

function MySkills() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeButton />
      <Box>
        <ParticleComponent />
        <Main className="container">
          <div className="container heading my-3">
            <h3>Front-End Technologies</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row">
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                }
              />
            </div>
          </SubBox>
          <div className="container heading my-3">
            <h3>Back-End Technologies</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row">
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                }
              />
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
                }
              />
            </div>
          </SubBox>
          <div className="container heading my-3">
            <h3>Proficient tools</h3>
          </div>
          <SubBox className="container my-4">
            <div className="row">
              <SkillLogo
                source={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                }
              />
              <SkillLogo source={github} />
            </div>
          </SubBox>
        </Main>
      </Box>
    </Suspense>
  );
}

export default MySkills;
