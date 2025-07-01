import styled from "@emotion/styled";
import { motion, useScroll, useSpring } from "framer-motion";
import { theme } from "../../styles/theme";
import { useEffect, useState } from "react";

interface FloatingNavProps {
  isEnglish: boolean;
}

const NavContainer = styled(motion.nav)`
  position: fixed;
  right: ${theme.spacing.xl};
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  background: ${theme.colors.glass.background}80;
  backdrop-filter: blur(10px);
  padding: ${theme.spacing.lg};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1);

  @media print {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    right: ${theme.spacing.sm};
    padding: ${theme.spacing.md};
    gap: ${theme.spacing.lg};
    background: ${theme.colors.glass.background};
  }

  @media (max-height: 500px) {
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.sm};
  }
`;

const NavDot = styled(motion.button)<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => (props.active ? theme.colors.accent : "rgba(255, 255, 255, 0.3)")};
  border: 2px solid ${(props) => (props.active ? theme.colors.accent : "rgba(255, 255, 255, 0.5)")};
  cursor: pointer;
  position: relative;
  opacity: ${(props) => (props.active ? 1 : 0.7)};
  transition: all ${theme.transitions.default};

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 14px;
    height: 14px;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    border-color: ${theme.colors.accent};
    background: ${(props) => (props.active ? theme.colors.accent : "rgba(255, 255, 255, 0.5)")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.accent}40, 0 0 0 4px ${theme.colors.accent}20;
  }

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
    background: ${theme.colors.glass.card};
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: all ${theme.transitions.default};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    color: ${theme.colors.light};
    font-weight: 500;
    letter-spacing: 0.5px;

    @media (max-width: ${theme.breakpoints.sm}) {
      right: auto;
      left: -16px;
      transform: translate(-100%, -50%);
      font-size: 0.85rem;
      padding: 6px 12px;
    }
  }

  &:hover::before {
    opacity: 1;
    transform: translate(-100%, -50%);

    @media (min-width: ${theme.breakpoints.sm}) {
      right: 32px;
      transform: translateY(-50%) scale(1.02);
    }
  }

  @media (hover: none) {
    &:active {
      transform: scale(0.95);
    }
  }
`;

const ProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, ${theme.colors.accent}, ${theme.colors.accent}dd);
  transform-origin: 0%;
  z-index: 1000;
  box-shadow: 0 0 10px ${theme.colors.accent}80;

  @media print {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 2px;
  }
`;

// // Original
// const sections = [
//   { id: "about", name: "Home" },
//   { id: "projects", name: "Projects" },
//   { id: "skills", name: "Skills" },
//   { id: "contact", name: "Contact" },
// ];

// Updated
// TODO: change the name of sectionsComplete to sectionsBilingual
// TODO: Populate the sectionsComplete/sectionsBilingual array from the .json files in the `/frontend/public/locales/` directory.
const sectionsComplete = [
  { id: "about", name: "Home", nombre: "Casa" },
  { id: "projects", name: "Projects", nombre: "Proyectos" },
  { id: "skills", name: "Skills", nombre: "Habilidades" },
  { id: "contact", name: "Contact", nombre: "Contacto" },
];

// Side navigation component.
export const FloatingNav = ({ isEnglish }: FloatingNavProps) => {
  const [activeSection, setActiveSection] = useState("about");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      // New. (not replacing anything)
      const result = sectionsComplete.map(({ id, name, nombre }) => ({
        id,
        param: isEnglish ? nombre : name,
      }));

      // TODO: figure out what I meant by this comment.
      // Find which section is currently in view
      result.forEach(({ id, param }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(id);
            // Update aria-live region
            // TODO: Figure out what "aria-live region"/"liveRegion" is.
            const liveRegion = document.getElementById("section-announcer");
            if (liveRegion) {
              liveRegion.textContent = `Current section: ${param}`;
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isEnglish]);

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      const currentIndex = sectionsComplete.findIndex(({ id }) => id === sectionId);
      const nextIndex = e.key === "ArrowUp" ? Math.max(0, currentIndex - 1) : Math.min(sectionsComplete.length - 1, currentIndex + 1);
      const nextSection = sectionsComplete[nextIndex];

      document.getElementById(nextSection.id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ProgressBar
        style={{ scaleX }}
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
      />
      <div id="section-announcer" className="sr-only" role="status" aria-live="polite" />
      <NavContainer role="navigation" aria-label="Section navigation">
        {sectionsComplete.map(({ id, name, nombre }) => (
          <NavDot
            key={id}
            active={activeSection === id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
            onKeyDown={(e) => handleKeyDown(e, id)}
            data-tooltip={isEnglish ? nombre : name}
            tabIndex={0}
            aria-label={`${isEnglish ? nombre : name} section ${activeSection === id ? "(current section)" : ""}`}
            aria-current={activeSection === id ? "true" : undefined}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            role="button"
          />
        ))}
      </NavContainer>
    </>
  );
};
