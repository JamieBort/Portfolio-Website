import PropTypes from "prop-types";
import Section from "./Section";

export default function Bio({ title }) {
  //   console.log(props.title);
  return (
    <>
      <Section title={title}>
        <p>I write code and teach at Code the Dream, a software boot camp for underrepresented people.</p>
        <p>Below you will find some of my Projects.</p>
        <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
        <p>I invite you to Connect with Me on social media below.</p>
      </Section>
    </>
  );
}

Bio.propTypes = {
  title: PropTypes.string,
};
