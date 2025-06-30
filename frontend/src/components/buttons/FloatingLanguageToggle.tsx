import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

const FloatingLanguageWrapper = styled.div`
  display: none;

  // NOTE: New
  @media (max-width: ${theme.breakpoints.sm}) and (orientation: portrait) {
    display: block;
    position: fixed;
    right: ${theme.spacing.md};
    top: calc(
      ${theme.spacing.md} * 2 + 6.5rem
    ); // or a fixed value like '4.5rem'. "{theme.spacing.md} * 2" accounts for header padding top + bottom. "3rem" estimates your header’s content height (Logo, NavLinks, etc.)
    z-index: 1000;
    background: ${theme.colors.glass.background}80;
    backdrop-filter: blur(10px);
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  // // NOTE: Original
  //   @media (max-width: ${theme.breakpoints.md}) and (orientation: portrait) {
  //     display: block;
  //     position: fixed;
  //     right: ${theme.spacing.md};
  //     top: calc(
  //       ${theme.spacing.md} * 2 + 6.5rem
  //     ); // or a fixed value like '4.5rem'. "{theme.spacing.md} * 2" accounts for header padding top + bottom. "3rem" estimates your header’s content height (Logo, NavLinks, etc.)
  //     z-index: 1000;
  //     background: ${theme.colors.glass.background}80;
  //     backdrop-filter: blur(10px);
  //     padding: ${theme.spacing.sm} ${theme.spacing.md};
  //     border-radius: 50px;
  //     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  //   }
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

export const FloatingLanguageToggle = ({ handleLanguage }: { handleLanguage: () => void }) => {
  const { t } = useTranslation();
  return (
    <FloatingLanguageWrapper>
      <LanguageToggleButton onClick={handleLanguage}>{t("layout.eight")}</LanguageToggleButton>
    </FloatingLanguageWrapper>
  );
};
