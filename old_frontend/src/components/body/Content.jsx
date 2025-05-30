// ./frontend/src/App.jsx

import PropTypes from "prop-types";
// import BioSection from "./../BioSection";
import BioSection from "./../sections/BioSection";
import ProjectSection from "./../sections/ProjectSection";
import ConnectWithMeSection from "./../sections/ConnectWithMeSection";
import Container from "@mui/material/Container";

export default function Content({ sectionSX }) {
  // TODO: Replace <BioSection/>, <ProjectSection/>, and <ConnectWithMeSection/> each with a MUI component such as Container. NOTE: If the new component is a <Container/>, the existing <Container/> may need to change to a <Box/>
  return (
    <Container sx={sectionSX.content}>
      <BioSection title="Bio" sectionSX={sectionSX} />

      {/* TODO: make this ProjectSection a min. height while the projects are loading. */}
      {/* <ProjectSection title="Projects" sectionSX={sectionSX} /> */}
      <ProjectSection title="Projects" sectionSX={sectionSX} selection="horizontalList" />
      {/* <ProjectSection title="Projects" sectionSX={sectionSX} selection="basicGrid" /> */}

      <ConnectWithMeSection title="Connect With Me" sectionSX={sectionSX} />
    </Container>
  );
}

Content.propTypes = {
  sectionSX: PropTypes.object,
};
