import React from "react";
import { lazy, Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import bgimg from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import WorkComponent from "../subComponents/WorkComponent";
import { Works } from "../data/WorkData";
import { mediaQueries } from "./Themes";
import Loading from "../subComponents/Loading";
import { motion } from "framer-motion";

const LogoName = lazy(() => import("../subComponents/LogoName"));
const HomeButton = lazy(() => import("../subComponents/HomeButton"));
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);

const MainContainer = styled.div`
  background-image: url(${bgimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  position: relative;
  height: auto;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  z-index: 3;
  ${mediaQueries(30)`
  padding-top: 7rem;
  

`};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
  ${mediaQueries(50)`
  grid-template-columns: 100%;

  

`};
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
function Work() {
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Container>
          <SocialIcons />
          <LogoName />
          <HomeButton />
          <ParticleComponent />
          <Center>
            <Grid variants={container} initial="hidden" animate="show">
              {Works.map((blog) => {
                return <WorkComponent key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </Suspense>
  );
}

export default Work;
