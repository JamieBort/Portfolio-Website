import PropTypes from "prop-types";
import Section from "./Section";

export default function ConnectWithMe({ title }) {
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

ConnectWithMe.propTypes = {
  title: PropTypes.string,
};
