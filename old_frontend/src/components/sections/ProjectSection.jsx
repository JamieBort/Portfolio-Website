// ./frontend/src/components/sections/ProjectSection.jsx

import PropTypes from "prop-types";
import Projects from "./../Projects";
import { Container, Typography } from "@mui/material";
// TODO: Replace <Projects/> with a MUI component such as Container. NOTE: If the new component is a <Container/>, the existing <Container/> may need to change to a <Box/>
export default function ProjectSection({ title, sectionSX, selection }) {
  return (
    <Container id="projects_section" sx={sectionSX.container}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {/* <Projects /> */}

      {/* <Typography variant="body1">{selection}</Typography> */}
      <Projects selection={selection} />
    </Container>
  );
}

ProjectSection.propTypes = {
  title: PropTypes.string,
  sectionSX: PropTypes.object,
  selection: PropTypes.string,
};
