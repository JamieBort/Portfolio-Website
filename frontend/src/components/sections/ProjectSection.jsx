import PropTypes from "prop-types";
import Projects from "./../Projects";
import { Container, Typography } from "@mui/material";
// TODO: Replace <Projects/> with a MUI component such as Container. NOTE: If the new component is a <Container/>, the existing <Container/> may need to change to a <Box/>
export default function ProjectSection({ title, sectionStyle }) {
  return (
    <Container id="projects_section" sx={sectionStyle.container}>
      <Typography
        variant="h5"
        gutterBottom
        // sx={sectionStyle.typography.h5}
      >
        {title}
      </Typography>
      <Projects />
    </Container>
  );
}

ProjectSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
