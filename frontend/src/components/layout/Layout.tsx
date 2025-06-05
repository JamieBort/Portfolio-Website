import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { theme } from "../../styles/theme";
import { FloatingNav } from "../navigation/FloatingNav";
import { useKeyboardNavigation } from "../../hooks/useKeyboardNavigation";

/* ************* */
/* ADDED CONTENT */
// TODO: remove these comments

const ResumeDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={dropdownRef} role="listitem" aria-haspopup="true" aria-expanded={open} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Resume submenu"
        aria-controls="resume-submenu"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: theme.colors.textLight,
          fontWeight: 500,
          // padding: "0.25rem 0.5rem", // TODO: remove this
          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
          fontSize: "inherit",
          lineHeight: "1",
          height: "100%",
          borderRadius: "4px",
        }}
      >
        Resume
      </button>

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
            <a
              role="menuitem"
              href="https://drive.google.com/file/d/1RE8huUCm6keRpVslsrlMBZrsiEVyzG5n/view"
              target="_blank"
              aria-label="View Resume in English"
              onClick={handleLinkClick}
              style={{
                display: "block",
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                color: theme.colors.textLight,
              }}
            >
              English Version
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="https://drive.google.com/file/d/1EiuH0xMwimVTgSHMx3w2GK1g-90HTeBq/view"
              target="_blank"
              aria-label="Ver currículum en español"
              onClick={handleLinkClick}
              style={{
                display: "block",
                padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                color: theme.colors.textLight,
              }}
            >
              Versión en español
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

// TODO: remove these comments
/* ADDED CONTENT */
/* ************* */

interface LayoutProps {
  children: ReactNode;
}

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

const Logo = styled(motion.div)`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing.lg};

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

  /* ************* */
  /* ADDED CONTENT */
  // TODO: remove these comments
  /* ADDED CONTENT */
  /* ************* */

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.md};
  }
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

export const Layout = ({ children }: LayoutProps) => {
  useKeyboardNavigation();

  useEffect(() => {
    // Add keyboard navigation instructions to console
    console.info("Keyboard Navigation:\n", "- Arrow Up/Down or PageUp/PageDown: Navigate between sections\n", "- Home: Go to top\n", "- End: Go to bottom");
  }, []);

  // *************
  // ADDED CONTENT
  // TODO: remove these comments
  // ADDED CONTENT
  // *************

  return (
    <LayoutWrapper>
      <SkipLink href="#main-content">Skip to main content</SkipLink>

      <Header role="banner">
        {/* TODO: Address Resume button. It is getting cut off in mobile. */}
        {/* TODO: Figure out where and how to have two resumes. */}
        {/* TODO: Figure out where and how to have a language toggle button. */}
        <Nav role="navigation" aria-label="Main navigation">
          <div className="container">
            <Logo initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} role="heading" aria-level={1}>
              Jamie Bort
            </Logo>
            <NavLinks role="list">
              <a href="#about" role="listitem" aria-label="About section">
                About
              </a>
              <a href="#projects" role="listitem" aria-label="Projects section">
                Projects
              </a>
              <a href="#skills" role="listitem" aria-label="Skills section">
                Skills
              </a>
              <a href="#contact" role="listitem" aria-label="Contact section">
                Contact
              </a>
              {/* ************* */}
              {/* ADDED CONTENT */}
              {/* TODO: remove these comments */}
              <ResumeDropdown />
              // TODO: KEEP THIS
              {/* <details role="listitem" aria-label="Resume links" style={{ position: "relative" }}>
                <summary
                  aria-haspopup="menu"
                  aria-expanded="false"
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    color: theme.colors.textLight,
                    fontWeight: 500,
                    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                    borderRadius: "4px",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => e.currentTarget.setAttribute("aria-expanded", "true")}
                  onMouseLeave={(e) => e.currentTarget.setAttribute("aria-expanded", "false")}
                >
                  Resume
                </summary>
                <ul
                  role="menu"
                  aria-label="Resume submenu"
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: `${theme.spacing.xs} 0`,
                    position: "absolute",
                    background: theme.colors.glass.background,
                    borderRadius: "6px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    top: "100%",
                    left: 0,
                    minWidth: "10rem",
                    zIndex: 100,
                  }}
                >
                  <li role="none">
                    <a
                      role="menuitem"
                      href="https://drive.google.com/file/d/1RE8huUCm6keRpVslsrlMBZrsiEVyzG5n/view"
                      target="_blank"
                      aria-label="View Resume in English"
                      style={{ display: "block", padding: `${theme.spacing.xs} ${theme.spacing.sm}`, color: theme.colors.textLight }}
                    >
                      English Version
                    </a>
                  </li>
                  <li role="none">
                    <a
                      role="menuitem"
                      href="https://drive.google.com/file/d/1EiuH0xMwimVTgSHMx3w2GK1g-90HTeBq/view"
                      target="_blank"
                      aria-label="Ver currículum en español"
                      style={{ display: "block", padding: `${theme.spacing.xs} ${theme.spacing.sm}`, color: theme.colors.textLight }}
                    >
                      Versión en español 
                    </a>
                  </li>
                </ul>
              </details> */}
              {/* TODO: remove these comments */}
              {/* ADDED CONTENT */}
              {/* ************* */}
            </NavLinks>
          </div>
        </Nav>
      </Header>
      <Main id="main-content" role="main" tabIndex={-1}>
        {children}
      </Main>
      <FloatingNav />
      <Footer role="contentinfo">
        <div className="container">
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
