import PropTypes from "prop-types";
import Projects from "./Projects";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

export default function ProjectSection({ title, sectionStyle }) {
  //   console.log(props.title);
  return (
    <>
      <Container style={sectionStyle.container}>
        <Typography variant="h2" gutterBottom style={sectionStyle.typography.h2}>
          {title}
        </Typography>
        <Projects />
      </Container>
    </>
  );
}

ProjectSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
