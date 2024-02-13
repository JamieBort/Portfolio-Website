// ./frontend/src/App.jsx

import Typography from "@mui/material/Typography";
import BioSection from "./components/BioSection";
import ProjectSection from "./components/ProjectSection";
import ConnectWithMeSection from "./components/ConnectWithMeSection";
import Header from "./components/Header";
// import { BrowserRouter } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

const Footer = () => <div style={sectionStyle.footer}>Footer</div>;
const Content = () => {
  return (
    <div style={sectionStyle.content}>
      <BioSection title="Bio" sectionStyle={sectionStyle} />

      {/* TODO: make this ProjectSection a min. height while the projects are loading. */}
      <ProjectSection title="Projects" sectionStyle={sectionStyle} />

      <ConnectWithMeSection title="Connect With Me" sectionStyle={sectionStyle} />
    </div>
  );
};

// TODO: add navigation.

export default function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header sectionStyle={sectionStyle} />
      {/* <div>
        <Typography variant="h1" gutterBottom style={sectionStyle.typography.h1}>
          Jamie Bort
        </Typography>
        <Typography variant="h2" gutterBottom style={sectionStyle.typography.h2}>
          Software Engineer
        </Typography>
        <BrowserRouter>
          <HashLink to="#bio_section" color="inherit">
            Bio
          </HashLink>
          <HashLink to="#projects_section" color="inherit">
            Projects
          </HashLink>
          <HashLink to="#connectWithMe_section" color="inherit">
            Connect With Me
          </HashLink>
        </BrowserRouter>
      </div> */}
      <Content />
      <Footer id="footer" />
    </div>
  );
}

const headerHeight_contentTop = "260px";
const contentBottom_footerHeight = "20px";
// const backgroundColor = "lightgreen";

const sectionStyle = {
  header: {
    position: "absolute",
    height: headerHeight_contentTop,
    overflow: "hidden",
    // backgroundColor: backgroundColor ,
    top: "0px",
    left: "0px",
    right: "0px",
  },
  content: {
    position: "absolute",
    top: headerHeight_contentTop,
    bottom: contentBottom_footerHeight,
    overflow: "auto",
    left: "0px",
    right: "0px",
  },
  footer: {
    textAlign: "center",
    position: "absolute",
    height: contentBottom_footerHeight,
    overflow: "hidden",
    // backgroundColor: backgroundColor,
    bottom: "0px",
    left: "0px",
    right: "0px",
  },
  container: {},
  typography: { h1: { textAlign: "center" }, h2: { textAlign: "center" }, body1: { textAlign: "" } },
  stack: {},
  link: {},
};
