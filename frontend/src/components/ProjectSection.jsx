import PropTypes from "prop-types";
import Section from "./Section";
import Projects from "./Projects";

export default function ProjectSection({ title }) {
  //   console.log(props.title);
  return (
    <>
      <Section title={title}>
        <Projects />
      </Section>
    </>
  );
}

ProjectSection.propTypes = {
  title: PropTypes.string,
};
