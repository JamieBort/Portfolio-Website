// ./frontend/src/App.jsx

import BioSection from "./components/BioSection";
import ProjectSection from "./components/ProjectSection";
import ConnectWithMeSection from "./components/ConnectWithMeSection";
import { Box, Container, Grid, Stack, Typography, Icon } from "@mui/material";
import Projects from "./components/Projects";

import { green } from "@mui/material/colors";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import { GitHubIcon } from "@mui/icons-material/";

// export default function Icons() {
//   return (
// <Stack direction="row" spacing={3}>
//   <Icon>add_circle</Icon>
//   <Icon color="primary">add_circle</Icon>
//   <Icon sx={{ color: green[500] }}>add_circle</Icon>
//   <Icon fontSize="small">add_circle</Icon>
//   <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
// </Stack>
// );
// }

export default function App() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Jamie Bort Software Engineer
      </Typography>
      <Container>
        <Typography variant="h2" gutterBottom>
          Bio
        </Typography>
        <Typography variant="body1" gutterBottom>
          I write code and teach at Code the Dream, a software boot camp for underrepresented people.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Below you will find some of my Projects.
        </Typography>
        <Typography variant="body1" gutterBottom>
          When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I invite you to Connect with Me on social media below.
        </Typography>
      </Container>
      {/* <BioSection title="BioSection" /> */}

      <Container>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
        <Projects />
      </Container>
      {/* <ProjectSection title="Projects" /> */}

      <Container>
        <Typography variant="h2" gutterBottom>
          Connect With Me
        </Typography>
        <Stack direction="row" spacing={3}>
          {/* <Icon>add_circle</Icon>
        <Icon color="primary">add_circle</Icon>
        <Icon sx={{ color: green[500] }}>add_circle</Icon>
        <Icon fontSize="small">add_circle</Icon>
        <Icon sx={{ fontSize: 30 }}>add_circle</Icon> */}
          {/* <Icon fontSize="medium"> */}
          <LinkedInIcon sx={{ color: green[500] }} fontSize="large" />
          {/* </Icon> */}
          <LinkedInIcon />
          <TwitterIcon sx={{ color: "orange" }} fontSize="large" />
          <GitHubIcon />
        </Stack>
      </Container>

      {/* <ConnectWithMeSection title="Connect With Me" /> */}
    </>
  );
}
