// ./frontend/src/App.jsx

import PropTypes from "prop-types";
import BioSection from "./../BioSection";
import ProjectSection from "./../ProjectSection";
import ConnectWithMeSection from "./../ConnectWithMeSection";

export default function Content({ sectionStyle }) {
  return (
    <div style={sectionStyle.content}>
      <BioSection title="Bio" sectionStyle={sectionStyle} />

      {/* TODO: make this ProjectSection a min. height while the projects are loading. */}
      <ProjectSection title="Projects" sectionStyle={sectionStyle} />

      <ConnectWithMeSection title="Connect With Me" sectionStyle={sectionStyle} />
    </div>
  );
}

Content.propTypes = {
  sectionStyle: PropTypes.object,
};
