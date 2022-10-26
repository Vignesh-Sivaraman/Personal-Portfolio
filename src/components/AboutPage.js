// This is the About page

import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import Loading from "../subComponents/Loading";

const LogoName = lazy(() => import("../subComponents/LogoName"));
const HomeButton = lazy(() => import("../subComponents/HomeButton"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);

const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
// This is for the Image animation effect
const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 3%;
  animation: ${float} 4s ease infinite;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media (max-width: 1024px) {
    width: 70vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const AboutPage = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Suspense fallback={<Loading />}>
        <HomeButton />
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoName />

          <ParticleComponent />

          <SpaceMan
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              right: "5%",
              top: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            I'm a front-end developer located in India. I love to create simple
            yet beautiful websites with great user experience.
            <br />
            <br />
            I'm interested in the whole frontend stack Like trying new things
            and building great projects. I'm an independent freelancer and
            blogger. I love to write blogs and read books. <br />
            <br />I believe everything is an Art when you put your consciousness
            in it. You can connect with me via social links.{" "}
          </Main>
          <BigTitle text="Hi there..." top="10%" left="5%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
