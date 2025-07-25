// ./frontend/src/components/buttons/FloatingLanguageToggle.tsx
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { motion } from "framer-motion";

// Matching color for the prompt component and the two language toggle components.
const FloatingLanguageToggleColor = theme.colors.light;

// Added "framer-motion" and using "motion" to style the toggle such that it matches the color of the prompt.
// As a result added the "initial", "animate", and "transition" properties.
const FloatingLanguageWrapper = styled(motion.div)`
  display: none;

  @media (max-width: ${theme.breakpoints.md}) and (orientation: portrait) {
    display: block;
    position: fixed;
    right: ${theme.spacing.md};
    top: calc(
      ${theme.spacing.md} * 2 + 6.5rem
    ); // or a fixed value like '4.5rem'. "{theme.spacing.md} * 2" accounts for header padding top + bottom. "3rem" estimates your header’s content height (Logo, NavLinks, etc.)
    z-index: 1000;
    //     background: ${theme.colors.glass.background}80; // Commented out when motion was implemented.
    //     backdrop-filter: blur(10px); // Commented out when motion was implemented.
    //     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1); // Commented out when motion was implemented.
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: 50px;
    transition: all ${theme.transitions.default};
  }
`;

const LanguageToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.colors.textLight};
  font-weight: 500;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: 1rem;
  border-radius: 4px;
  transition: all ${theme.transitions.default};

  &:hover,
  &:focus-visible {
    color: ${theme.colors.light};
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
  }
`;

// This component exists so that the language toggle can exist without crowding the header while being viewed via mobile in portrait orientation.
// Used to toggle between languages when viewing the app via mobile.
export const FloatingLanguageToggle = ({ handleLanguage, isPromptVisible }: { handleLanguage: () => void; isPromptVisible: boolean }) => {
  const { t } = useTranslation();
  return (
    <FloatingLanguageWrapper
      initial={false}
      animate={{
        backgroundColor: isPromptVisible ? FloatingLanguageToggleColor + "40" : theme.colors.glass.background + "80",
        boxShadow: isPromptVisible ? `0 0 0 2px ${FloatingLanguageToggleColor}60` : `0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
        border: isPromptVisible ? `1px solid ${FloatingLanguageToggleColor}` : `none`,
      }}
      transition={{ duration: 0.5 }}
    >
      <LanguageToggleButton onClick={handleLanguage}>{t("layout.eight")}</LanguageToggleButton>
    </FloatingLanguageWrapper>
  );
};
