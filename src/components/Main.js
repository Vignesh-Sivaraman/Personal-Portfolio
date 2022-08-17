import React from "react";
import styled, { keyframes } from "styled-components";
import LogoName from "../subComponents/LogoName";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import Loading from "../subComponents/Loading";

const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
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
  background-color: #000;
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
  top: 85%;
  left: 92%;
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
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

function Main() {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  // const handleClick = () => setClick(!click);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "about" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;
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
          transition={{ type: "spring", duration: 0.5, delay: 0 }}
        />
        <Container>
          <LogoName></LogoName>
          <SocialIcons></SocialIcons>
          <Corner>
            <YinYang width={120} height={120} fill="currentColor" />
          </Corner>
          <BottomBar>
            <ABOUT
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
              to="/about"
            >
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
