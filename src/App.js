import { Route, Routes, useLocation } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Loading from "./subComponents/Loading";

const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkills = lazy(() => import("./components/MySkills"));

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Suspense fallback={<Loading />}>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<MySkills />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
