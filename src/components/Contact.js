import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { LightTheme } from "./Themes";
import Loading from "../subComponents/Loading";
import { motion } from "framer-motion";

const LogoName = lazy(() => import("../subComponents/LogoName"));
const HomeButton = lazy(() => import("../subComponents/HomeButton"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  overflow: hidden;
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.body};
  color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 90vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  /* left: calc(5rem + 5vw); */
  margin: 25px auto;
  /* top: 10rem; */

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

const Contacts = () => {
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

          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            <div>
              Please fill in the below details <br /> or <br /> mail @
              viki18596@gmail.com
            </div>
            <div>
              {" "}
              <form
                method="post"
                action="https://getform.io/f/b697b6ee-82be-4700-8d98-2e37127d697c"
              >
                <div>
                  <input
                    className="my-4 p-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    style={{ width: "100%" }}
                  />
                </div>
                <div>
                  <textarea
                    className="p-2"
                    name="message"
                    rows="10"
                    placeholder="Message"
                    style={{ width: "100%" }}
                  ></textarea>
                </div>
                <div>
                  <button className=" border-2 bg-primary text-white mt-4 px-4 py-3 my-8 mx-auto flex items-center formbtn ">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </Main>
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default Contacts;
