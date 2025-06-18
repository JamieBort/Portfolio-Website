// import { lazy, Suspense } from "react";
import { lazy, Suspense, useState } from "react";
// import { lazy, Suspense, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { About } from "./components/sections/About";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import styled from "@emotion/styled";
// import { useTranslation } from "react-i18next";
// import "./i18n";

// Lazy load non-critical components
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Contact = lazy(() => import("./components/sections/Contact"));

// Loading fallback component
const LoadingFallback = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.accent};
  font-size: 1.2rem;

  @media print {
    display: none;
  }
`;

function App() {
  const [isEnglish, setEnglish] = useState(true);
  console.log(isEnglish); // TODO: delete this line.
  const handleLanguage = () => {
    // const status = isEnglish ? "en" : "es";
    // console.log(status);
    setEnglish(!isEnglish);
  };

  // const { t,i18n } = useTranslation();
  // useEffect(() => {
  //   i18n.changeLanguage(navigator.language);
  // });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout handleLanguage={handleLanguage} isEnglish={isEnglish}>
        {/* About section is critical for LCP, so keep it eager loaded */}
        <About isEnglish={isEnglish} />

        {/* Wrap non-critical sections in Suspense */}
        <Suspense fallback={<LoadingFallback>Loading projects...</LoadingFallback>}>
          <Projects isEnglish={isEnglish} />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading skills...</LoadingFallback>}>
          <Skills isEnglish={isEnglish} />
        </Suspense>
        <Suspense fallback={<LoadingFallback>Loading contact...</LoadingFallback>}>
          <Contact isEnglish={isEnglish} />
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
