import PropTypes from "prop-types";
import Section from "./Section";

export default function ConnectWithMeSection({ title }) {
  //   console.log(props.title);
  return (
    <>
      <Section title={title}>
        <span>LinkedIn</span>
        <span>Twitter</span>
        <span>Stack Overflow</span>
        <span>GitHub</span>
      </Section>
    </>
  );
}

ConnectWithMeSection.propTypes = {
  title: PropTypes.string,
};
