// The FloatingChoicePrompt file.
// TODO: Write code that shows the FloatingChoicePrompt when the page loads for the first time.

import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

// Desired behavior.
// It loads when the page loads for the first time.
// The user selects the button to confirm that this

const FloatingLanguagePromptWrapper = styled.div`
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

// TODO: Refactor file so that the body of this function is in the handleLanguage function.
// const removeKey=(param00: string)=>{
//     localStorage.removeItem("myKey");
//     console.log(`${param00} is removed`);
// }

// TODO: Refactor file so that the body of this function is in the handleLanguage function.
const addKey = (param00: string) => {
  try {
    localStorage.setItem("myOtherKey", "value");
    console.log(`${param00} is added`);
  } catch (error) {
    console.error("Error setting localStorage:", error);
  }
};

// TODO: Add comment here. what does this do?
export const FloatingChoicePrompt = () => {
  const handleLanguage = (param01: string) => {
    // removeKey(param01);
    addKey(param01);
  };

  const { t } = useTranslation();

  return (
    // This provides animation.
    // TODO: Tweak the animation.
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {/* <FloatingLanguagePromptWrapper>
        <p>{t("floatingChoicePrompt.01")}</p>
        <p>{t("floatingChoicePrompt.02")}</p>
        <p>{t("floatingChoicePrompt.03")}</p>

        // <p>{t("floatingChoicePrompt.04")}</p>
        // <button onClick={() => handleLanguage("temp_param")}>
        //   <p>{t("floatingChoicePrompt.05")}</p>
        // </button> 

        <p>{t("floatingChoicePrompt.07")}</p>
        <button onClick={() => handleLanguage("temp_param")}>
          <p>{t("floatingChoicePrompt.06")}</p>
        </button>
      </FloatingLanguagePromptWrapper> */}

      <FloatingLanguagePromptWrapper>
        <p>{t("floatingChoicePrompt02.01")}</p>
        <p>{t("floatingChoicePrompt02.02")}</p>
        <Trans
          i18nKey="floatingChoicePrompt02.03"
          components={{
            CustomComponent02: <button onClick={() => handleLanguage("temp_param")}></button>,
          }}
        ></Trans>
      </FloatingLanguagePromptWrapper>
    </motion.div>
  );
};
