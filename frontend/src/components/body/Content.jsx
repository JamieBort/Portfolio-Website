// ./frontend/src/App.jsx

import PropTypes from "prop-types";
// import BioSection from "./../BioSection";
import BioSection from "./../sections/BioSection";
import ProjectSection from "./../sections/ProjectSection";
import ConnectWithMeSection from "./../sections/ConnectWithMeSection";
import Container from "@mui/material/Container";

export default function Content({ sectionStyle }) {
  // TODO: Replace <BioSection/>, <ProjectSection/>, and <ConnectWithMeSection/> each with a MUI component such as Container. NOTE: If the new component is a <Container/>, the existing <Container/> may need to change to a <Box/>
  return (
    <Container sx={sectionStyle.content}>
      <BioSection title="Bio" sectionStyle={sectionStyle} />

      {/* TODO: make this ProjectSection a min. height while the projects are loading. */}
      {/* <ProjectSection title="Projects" sectionStyle={sectionStyle} /> */}
      <ProjectSection title="Projects" sectionStyle={sectionStyle} selection="horizontalList" />
      {/* <ProjectSection title="Projects" sectionStyle={sectionStyle} selection="basicGrid" /> */}

      <ConnectWithMeSection title="Connect With Me" sectionStyle={sectionStyle} />
    </Container>
  );
}

Content.propTypes = {
  sectionStyle: PropTypes.object,
};
