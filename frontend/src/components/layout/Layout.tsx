import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { theme } from "../../styles/theme";
import { FloatingNav } from "../navigation/FloatingNav";
// import { NavLinkButton } from "../buttons/NavLinkButton";
// import { FloatingLanguageToggle } from "../FloatingLanguageToggle";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";
import { useTranslation } from "react-i18next";
import { FloatingLanguageToggle } from "../buttons/FloatingLanguageToggle";

// NOTE: regarding the various components in the `Nav` component;
// specifically the `Logo` component, the `<a/>`/`NavLinks` components, the `ResumeDropdown` component, and the `LanguageToggle` component,
// the button:focus styling does not match.

interface LayoutProps {
  children: ReactNode;
  handleLanguage: () => void;
  isEnglish: boolean;
}

// NOTE: New
const DesktopLanguageWrapper = styled.div`
  position: fixed;
  top: calc(
    ${theme.spacing.md} + 6.5px
  ); // To make the text in the LanguageToggle component horizontally aligned with the text in the anchor tags (<a>) inside the NavLinks component, in spite of the LanguageToggle is outside the .container, manually tweak this value as needed offset the DesktopLanguageWrapper so that it aligns visually with the nav links' text baseline.
  // top: ${theme.spacing.md};

  right: calc(${theme.spacing.xl} + 18px); // This 15px aligns the component up over the FloatingNav component.
  // right: ${theme.spacing.xl};

  z-index: 1001; // Higher than header backdrop but lower than modals
  // padding: 0 0 0 10px;
  // background: lightgray; // TODO: delete this line.

  // // NOTE: New
  // @media (max-width: ${theme.breakpoints.sm}) and (orientation: portrait) {
  //   display: none;
  // }

  // NOTE: Original
  @media (max-width: ${theme.breakpoints.md}) and (orientation: portrait) {
    display: none;
  }
`;

// // NOTE: Original
// const DesktopLanguageWrapper = styled.div`
//   display: block;

//   @media (max-width: ${theme.breakpoints.md}) and (orientation: portrait) {
//     display: none;
//   }
// `;

// NOTE: temporary
const LanguageToggle = ({ handleLanguage }: { handleLanguage: () => void }) => {
  const { t } = useTranslation();
  return <NavLinkButton onClick={handleLanguage}>{t("layout.eight")}</NavLinkButton>;
};

// NOTE: NEW
const ResumeDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setOpen(false);

  const DropdownWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
  `;

  return (
    <DropdownWrapper ref={dropdownRef} role="listitem" aria-haspopup="true" aria-expanded={open}>
      <NavLinkButton onClick={() => setOpen(!open)} aria-label="Toggle Resume submenu" aria-controls="resume-submenu">
        {t("layout.five")}
      </NavLinkButton>

      {open && (
        <ul
          id="resume-submenu"
          role="menu"
          aria-label="Resume submenu"
          style={{
            listStyle: "none",
            margin: 0,
            padding: `${theme.spacing.xs} 0`,
            position: "absolute",
            top: "100%",
            left: 0,
            background: theme.colors.glass.background,
            borderRadius: "6px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            minWidth: "10rem",
            zIndex: 100,
          }}
        >
          <li role="none">
            <DropdownLink role="menuitem" href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="..." onClick={handleLinkClick}>
              {t("layout.six")}
            </DropdownLink>
          </li>
          <li role="none">
            <DropdownLink role="menuitem" href="..." target="_blank" rel="noopener noreferrer" aria-label="..." onClick={handleLinkClick}>
              {t("layout.seven")}
            </DropdownLink>
          </li>
        </ul>
      )}
    </DropdownWrapper>
  );
};

// NOTE: NEW - This does not replace anything.
const DropdownLink = styled.a`
  display: block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  color: ${theme.colors.textLight};
  border-radius: 4px;
  transition: all ${theme.transitions.default};

  &:hover,
  &:focus-visible {
    color: ${theme.colors.light};
    background-color: rgba(255, 255, 255, 0.1);
    outline: none;
  }
`;

const LayoutWrapper = styled.div`
  @media print {
    background: white !important;
    color: black !important;

    * {
      color: black !important;
      text-shadow: none !important;
      box-shadow: none !important;
    }

    section {
      min-height: auto !important;
      padding: 2rem 0 !important;
      page-break-inside: avoid;
    }

    a[href]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
    }
  }

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
  background: transparent;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 30%, ${theme.colors.accent}15 0%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }
`;

const Header = styled.header`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  padding: ${theme.spacing.md} 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media print {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to bottom, ${theme.colors.glass.background}, transparent);
  }
`;

const Nav = styled.nav`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 ${theme.spacing.md};
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
`;

// TODO: Remove this as soon as it is not needed.
// const Logo = styled(motion.div)`
//   color: ${theme.colors.light};
//   font-family: ${theme.fonts.heading};
//   font-size: 1.5rem;
//   font-weight: 700;
// `;

const Logo = styled(motion.a)`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.lg};
  // background: lightblue; // TODO: delete this line.
  margin: 0 90px 0 0; // NOTE: This is preventing the Resume button from sliding underneath the Toggle button. TODO: consider using other units. Consider using something global/universal such as "theme.spacing....".

  a {
    color: ${theme.colors.textLight};
    transition: all ${theme.transitions.default};
    font-weight: 500;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: 4px;

    &:hover {
      color: ${theme.colors.light};
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  div:hover {
    color: ${theme.colors.light};
    background-color: rgba(255, 255, 255, 0.1);
  }

  // @media (max-width: 900px) {
  //   // flex-direction: column;
  //   // align-items: flex-start;
  // }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.md};
  }
`;

// NOTE: New
// This replicates the anchor link styles inside NavLinks, including hover and border-radius.
const NavLinkButton = styled.button`
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

  // // NOTE: temporary
  // // NEW: Responsive styling
  // @media (max-width: ${theme.breakpoints.sm}) {
  //   display: none;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 4.5rem;
  width: 100%;
  overflow-x: hidden;
`;

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: ${theme.colors.accent};
  color: ${theme.colors.textDark};
  padding: ${theme.spacing.sm};
  z-index: 9999;
  transition: top 0.2s;

  &:focus {
    top: 0;
  }
`;

const Footer = styled.footer`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.lg} 0;
  text-align: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, ${theme.colors.glass.background}, transparent);
  }
`;

// // NOTE: temporary
// export const Layout = ({ children, isEnglish }: LayoutProps) => {
// NOTE: original
export const Layout = ({ children, handleLanguage, isEnglish }: LayoutProps) => {
  // console.log(isEnglish); // TODO: delete this line
  const { t } = useTranslation();
  useKeyboardNavigation();

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info("Keyboard Navigation:\n", "- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n", "- Home: Go to top\n", "- End: Go to bottom");
  }, []);

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        {/* TODO: Figure out where and how to have a language toggle button. See the https://github.com/JamieBort/Portfolio-Website/issues/52 Issue */}
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            {/* <h1 style={{ margin: 0 }}> */}
            <Logo
              href="https://jamiebort.com/"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              role="heading"
              aria-level={1}
              aria-label="Go to jamiebort.com homepage"
            >
              Jamie Bort
            </Logo>
            {/* </h1> */}
            {/* <Logo initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} role="heading" aria-level={1}>
              Jamie Bort
            </Logo> */}
            <NavLinks role="list">
              <a href="#about" role="listitem" aria-label="About section">
                {t("layout.one")}
              </a>
              <a href="#projects" role="listitem" aria-label="Projects section">
                {t("layout.two")}
              </a>
              <a href="#skills" role="listitem" aria-label="Skills section">
                {t("layout.three")}
              </a>
              <a href="#contact" role="listitem" aria-label="Contact section">
                {t("layout.four")}
              </a>
              <ResumeDropdown />
            </NavLinks>
          </div>
          {/* NOTE: temporary */}
          {/* <LanguageToggle handleLanguage={handleLanguage} /> */}
          {/* NOTE: temporary */}
          {/* <FloatingLanguageToggle handleLanguage={handleLanguage} /> */}
          <DesktopLanguageWrapper>
            <LanguageToggle handleLanguage={handleLanguage} />
          </DesktopLanguageWrapper>
        </Nav>
        {/* Below Nav: always render — only shown on mobile portrait */}
        {/* <FloatingLanguageToggle handleLanguage={handleLanguage} /> */}
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      {/* NOTE: Add FloatingLanguageToggle here?  */}
      <FloatingLanguageToggle handleLanguage={handleLanguage} />
      <FloatingNav isEnglish={isEnglish} />
      <Footer role="contentinfo">
        <div className="container">
          {/* TODO: Clean this area up. Specifically remove the comments. And update the GPLv3 logo such that it fits the appearance of my website better and is linked locally. See the https://github.com/JamieBort/Portfolio-Website/issues/53 Issue. */}
          {/* Original */}
          {/* <p>© {new Date().getFullYear()}</p> */}
          {/* <img
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/License_icon-gpl-3.svg/256px-License_icon-gpl-3.svg.png"}
            style={{ margin: "auto", width: `5%`, height: `auto` }}
          /> */}

          <img
            src={"https://user-images.githubusercontent.com/1911063/27259538-8770ecaa-5415-11e7-8788-87c1ef9b2c21.png"}
            style={{ margin: "auto", width: `5%`, height: `auto` }}
          />
          {/* <img src={"https://www.gnu.org/graphics/gplv3-or-later.svg"} style={{ margin: "auto", width: `5%`, height: `auto` }} /> */}
        </div>
      </Footer>
    </LayoutWrapper>
  );
};
