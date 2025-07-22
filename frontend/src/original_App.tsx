// ./frontend/src/original_App.tsx file
import { lazy, Suspense, useState, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
import { About } from "./components/sections/About";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import styled from "@emotion/styled";
import i18n from "i18next"; // Using to change the language.

// Lazy load non-critical components. lazy lets you defer loading component’s code until it is rendered for the first time.
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

  // Per https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types,
  // "Intended for paged material and documents viewed on a screen in print preview mode."
  @media print {
    display: none;
  }
`;

function App() {
  // Keeping track of which language.
  // TODO: If "isEnglish" is not needed after https://github.com/JamieBort/Portfolio-Website/issues/52 is addressed, remove it completely.
  const [isEnglish, setEnglish] = useState(false);

  // State for whether to display the FloatingChoicePrompt component or not.
  const [isDisplay, setDisplay] = useState(true);

  const displayPromptKey = "displayPrompt";
  const displayPromptValue = "doNotRemindMe";

  const handleLanguage = () => {
    // const status = isEnglish ? "en" : "es-ES";
    const status = isEnglish ? "en" : "es";
    i18n.changeLanguage(status);
    setEnglish(!isEnglish);
  };

  // TODO: Write code so that the prompt disapears when tapped or clicked off of the component.

  // TODO: Add comment here. what does this do?
  const handlePrompt = () => {
    setDisplay(false);
    localStorage.setItem(displayPromptKey, displayPromptValue);
  };

  // Checks to see if the localStorage item, displayPromptKey is there. If so, do not to display the prompt.
  // TODO: Determine whether to add a dependency, remove the dependency array, or to leave the dependency array as is.
  useEffect(() => {
    try {
      if (localStorage.getItem(displayPromptKey) === displayPromptValue) setDisplay(false);
    } catch (error) {
      console.error("Error getting localStorage:", error);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout handleLanguage={handleLanguage} handlePrompt={handlePrompt} isEnglish={isEnglish} isDisplay={isDisplay}>
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
