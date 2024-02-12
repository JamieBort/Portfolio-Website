// ./frontend/src/App.jsx

import BioSection from "./components/BioSection";
import ProjectSection from "./components/ProjectSection";
import ConnectWithMeSection from "./components/ConnectWithMeSection";
// import { Box, Container, Grid, Stack, Typography, Icon, Link } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Jamie Bort Software Engineer
      </Typography>

      <BioSection title="Bio" sectionStyle={sectionStyle} />

      <ProjectSection title="Projects" sectionStyle={sectionStyle} />

      <ConnectWithMeSection title="Connect With Me" sectionStyle={sectionStyle} />
    </>
  );
}

const sectionStyle = {
  container: {},
  typography: { h2: { textAlign: "center" }, body1: { textAlign: "" } },
  stack: {},
  link: {},
  // divUIType: {
  //   border: "1px solid DodgerBlue",
  //   marginTop: "5px",
  //   marginBottom: "5px",
  // },
  // divComponentType: {
  //   border: "1px solid red",
  //   marginTop: "5px",
  //   marginBottom: "5px",
  // },
  // p: {
  //   color: "green",
  //   textAlign: "center",
  // },
};
