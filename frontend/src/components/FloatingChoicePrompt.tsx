// ./frontend/src/components/original_FloatingChoicePrompt.tsx
// TODO: Write code that shows the FloatingChoicePrompt when the page loads for the first time.

import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

const FloatingPromptWrapper = styled.div`
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
    max-width: 90%;
  }
`;

// TODO: Add comment here. What does this do?
export const FloatingChoicePrompt = ({ handlePrompt }: { handlePrompt: () => void }) => {
  const { t } = useTranslation();

  return (
    // This provides animation.
    // TODO: Tweak the animation.
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <FloatingPromptWrapper>
        <p>{t("floatingChoicePrompt02.01")}</p>
        <p>{t("floatingChoicePrompt02.02")}</p>
        {/* <button onClick={handlePrompt}>push</button> */}
        <Trans
          i18nKey="floatingChoicePrompt02.03"
          components={{
            CustomComponent02: <button onClick={handlePrompt}></button>,
          }}
        ></Trans>
      </FloatingPromptWrapper>
    </motion.div>
  );
};
