import React from "react";
import styled, { keyframes } from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Loading from "../subComponents/Loading";

const LogoName = lazy(() => import("./../subComponents/LogoName"));

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100%;
  max-height: calc(100vh - calc(100vh - 100%));
  overflow: hidden;
  position: fixed;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const DarkDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  background-color: #333a56;
  bottom: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  @media (max-width: 1024px) {
    height: 50% !important;
    right: 0px;
    width: 100%;
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Corner = styled.button`
  position: absolute;
  top: 90%;
  left: 95%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
    top: 90%;
    left: 90%;
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => props.theme.body};
  text-decoration: none;
  z-index: 1;
  @media (max-width: 1024px) {
    color: ${(props) => props.theme.text};
  }
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;

  text-decoration: none;
  @media (max-width: 1024px) {
    text-shadow: 0 0 4px #000;
    color: ${(props) => props.theme.body};
  }
`;
const CONTACT = styled(NavLink)`
  color: ${(props) => props.theme.body};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media (max-width: 1024px) {
    text-shadow: 0 0 4px #000;
  }
`;

// This function is written for the page transition
function Main() {
  const [path, setpath] = useState("");

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "about" ? "100%" : "-100%"}`,
  };
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ type: "ease-in", duration: 0.1, delay: 0 }}
        />
        <Container>
          <LogoName></LogoName>
          <SocialIcons></SocialIcons>
          <Corner>
            <YinYang width={120} height={120} fill="#333a56" />
          </Corner>
          <WORK onClick={() => setpath("work")} to="/work">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work
            </motion.h2>
          </WORK>

          <CONTACT to="/contact">
            <motion.h2
              onClick={() => setpath("contact")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Reach me
            </motion.h2>
          </CONTACT>

          <BottomBar>
            <ABOUT to="/about">
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About.
              </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills.
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>
        <Intro />
      </MainContainer>
    </Suspense>
  );
}

export default Main;
