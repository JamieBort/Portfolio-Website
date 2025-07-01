import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

// This replicates the anchor link styles inside NavLinks, including hover and border-radius.
export const NavLinkButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${theme.colors.textLight};
  font-weight: 500;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  font-size: inherit;
  line-height: 1;
  border-radius: 4px;
  transition: all ${theme.transitions.default};

  &:hover,
  &:focus-visible {
    color: ${theme.colors.light};
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
  }
`;
