import PropTypes from "prop-types";
import Projects from "./Projects";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function ProjectSection({ title, sectionStyle }) {
  //   console.log(props.title);
  return (
    <div id="projects_section">
      <Container style={sectionStyle.container}>
        <Typography
          variant="h5"
          gutterBottom
          // style={sectionStyle.typography.h5}
        >
          {title}
        </Typography>
        <Projects />
      </Container>
    </div>
  );
}

ProjectSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
