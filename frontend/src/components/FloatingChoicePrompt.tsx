// ./frontend/src/components/FloatingChoicePrompt.tsx
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

interface FloatingChoicePromptProps {
  handlePromptButton: () => void;
  handleClickOutside: () => void;
  isPromptVisible: boolean;
}

// Matching color for the prompt component and the two language toggle components.
const FloatingPromptWrapperColor = theme.colors.light;

// Using "motion" to style the prompt such that it matches the color of the two language toggles.
// As a result added the "initial", "animate", and "transition" properties.
const FloatingPromptWrapper = motion(styled.div`
  position: fixed;
  top: calc(4.5rem + ${theme.spacing.md}); // Just below the fixed header
  right: ${theme.spacing.xl};
  z-index: 1200;
  max-width: 350px;
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(10px);
  padding: ${theme.spacing.lg};
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  color: ${theme.colors.textLight};

  p {
    margin-bottom: ${theme.spacing.sm};
    line-height: 1.5;
    font-size: 0.95rem;
  }

  button {
    background: transparent;
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.md};
    border-radius: 8px;
    cursor: pointer;
    transition: all ${theme.transitions.default};

    &:hover {
      background: ${theme.colors.accent}20;
      color: ${theme.colors.light};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.colors.accent}40;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    right: ${theme.spacing.sm};
    top: 5.5rem;
    max-width: 65%;
  }

  /* This is the new rule for portrait mobile */
  @media (max-width: ${theme.breakpoints.sm}) and (orientation: portrait) {
    right: calc(${theme.spacing.sm} + 8rem); // shift left more to uncover the toggle
  }
`);

// The component notifies the end user that they have two languages to choose from. And that they can elect to see this prompt next time. Or not.
// This component informs the end user about the language options. And asks if they'd like to see this prompt/component again next time.
export const FloatingChoicePrompt = ({ handlePromptButton, handleClickOutside, isPromptVisible }: FloatingChoicePromptProps) => {
  const { t } = useTranslation();

  // This "wrapperRef" returned object will persist for the full lifetime of the component.
  // We're passing a "null" object as the initial value.
  // We're using a type argument to cast the "wrapperRef" to the type of HTMLInputElement.
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Hook to hide prompt when clicked or tapped outside of the prompt.
  useClickOutside(wrapperRef as React.RefObject<HTMLElement>, handleClickOutside);

  return (
    // TODO: Tweak the animation. See console output.
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} ref={wrapperRef} aria-live="polite" role="dialog">
      <FloatingPromptWrapper
        initial={false}
        animate={{
          backgroundColor: isPromptVisible ? FloatingPromptWrapperColor + "40" : theme.colors.glass.background + "80",
          boxShadow: isPromptVisible ? `0 0 0 2px ${FloatingPromptWrapperColor}60` : `0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)`,
          border: isPromptVisible ? `1px solid ${FloatingPromptWrapperColor}` : `none`,
        }}
        transition={{ duration: 0.5 }}
      >
        <p>{t("floatingChoicePrompt.01")}</p>
        <p>{t("floatingChoicePrompt.02")}</p>
        <Trans
          i18nKey="floatingChoicePrompt.03"
          components={{
            CustomComponent02: <button onClick={handlePromptButton} />,
          }}
        />
      </FloatingPromptWrapper>
    </motion.div>
  );
};
