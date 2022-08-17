import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
  @media (max-width: 1024px) {
    border-right-width: initial;
    border-left-width: initial;
    border-right-color: initial;
    border-left-color: initial;
    background: linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 0px
        0px / 2px 100% no-repeat,
      linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 100% 0px;
    background-image: linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%),
      linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%);
    background-size: 2px 100%;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
    border-style: solid none;
    border-image: initial;
    border-top: 2px solid rgb(252, 246, 244);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-position: 0px 0px, 100% 0px;
    background-repeat: no-repeat;
    width: 70vw;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const SubBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  @media (max-width: 1024px) {
    width: 100%;
    height: 50%;
    .pic {
      width: 90%;
    }
    .desc {
      font-size: calc(0.5rem + 1vw) !important;
    }
  }
`;

const Text = styled.div`
  font-size: calc(0.9em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    font-size: calc(1rem + 1.5vw);
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1.5 }}
    >
      <SubBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Vignesh Siva.</h3>
          <h6 className="desc">
            I design and Code simple yet beautiful websites.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.75 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
