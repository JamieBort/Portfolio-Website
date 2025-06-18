import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { keyframes } from "@emotion/react";
import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import "../../i18n";

interface AboutProps {
  isEnglish: boolean;
}

const FaGithub = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaGithub })));
const FaLinkedin = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaLinkedin })));
const FaEnvelope = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaEnvelope })));

const AboutSection = styled.section`
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: ${theme.breakpoints.sm}) {
      width: 90%;
    }
  }
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  width: 100%;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: ${theme.spacing.lg};
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const fadeUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  animation: ${fadeUpKeyframes} 0.5s ease-out forwards;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.light};
  line-height: 1.1;
  letter-spacing: -0.02em;
  // white-space: nowrap;
`;

// // NOTE: Not currently using this.
// // TODO: Keep Subtitle for now, in case I want to use it again.
// const Subtitle = styled.h2`
//   animation: ${fadeUpKeyframes} 0.5s ease-out 0.2s forwards;
//   opacity: 0;
//   font-size: clamp(1.5rem, 3vw, 2.25rem);
//   margin-bottom: ${theme.spacing.lg};
//   opacity: 0.9;
//   font-weight: 500;
// `;

const Description = styled.p`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.4s forwards;
  opacity: 0;
  font-size: clamp(1rem, 1.2vw, 1.2rem);
  max-width: 600px;
  margin-bottom: ${theme.spacing.xl};
  opacity: 0.8;
  line-height: 1.7;
`;

const SocialLinks = styled.div`
  animation: ${fadeUpKeyframes} 0.5s ease-out 0.6s forwards;
  opacity: 0;
  display: flex;
  gap: ${theme.spacing.md};

  a {
    color: ${theme.colors.textLight};
    font-size: 1.5rem;
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.glass.background};

    &:hover {
      color: ${theme.colors.light};
      transform: translateY(-3px);
      background: ${theme.colors.glass.card};
      box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
    }
  }

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.lg};

    a {
      font-size: 1.75rem;
    }
  }
`;

export const About = ({ isEnglish }: AboutProps) => {
  console.log(isEnglish); // TODO: delete this line.
  const { t } = useTranslation();

  return (
    <AboutSection id="about" role="region" aria-label="Introduction">
      <div className="container">
        <AboutContent>
          <div>
            <Title role="heading" aria-level={2}>
              {t("bioTitle")}
            </Title>
            {/* TODO: Keep <<Subtitle>> for now, in case I want to use it again. */}
            {/* <Subtitle role="heading" aria-level={3}>
              Full Stack Developer
            </Subtitle> */}
            <Description role="paragraph">
              <p>I create elegant solutions to complex problems, specializing in modern web development with a focus on user experience and clean code.</p>
              <p>
                I write code and teach at <a href="https://codethedream.org/">Code the Dream</a>, a software boot camp for underrepresented people. Below you will find some of my
                Projects.
              </p>
              <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
            </Description>
            <SocialLinks role="list" aria-label="Social media links">
              <a href="https://github.com/jamiebort/" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" role="listitem">
                <Suspense fallback={<div style={{ width: "1.5rem", height: "1.5rem" }} />}>
                  <FaGithub aria-hidden="true" />
                </Suspense>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/jamie-bort" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" role="listitem">
                <Suspense fallback={<div style={{ width: "1.5rem", height: "1.5rem" }} />}>
                  <FaLinkedin aria-hidden="true" />
                </Suspense>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:jamiebort@gmail.com" aria-label="Send me an email at jamiebort@gmail.com" role="listitem">
                <Suspense fallback={<div style={{ width: "1.5rem", height: "1.5rem" }} />}>
                  <FaEnvelope aria-hidden="true" />
                </Suspense>
                <span className="sr-only">Email</span>
              </a>
            </SocialLinks>
          </div>
        </AboutContent>
      </div>
    </AboutSection>
  );
};
