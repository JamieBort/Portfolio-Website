import PropTypes from "prop-types";
import Section from "./Section";
import BackendDataFetch from "./BackendDataFetch";
// import BackendDataFetch from "./../BackendDataFetch";
// import Card from "./cards/CoreUICustomCard";

export default function Project({ title }) {
  //   console.log(props.title);
  return (
    <>
      <Section title={title}>
        <p>Just Cards</p>
        {/* <Card /> */}

        <BackendDataFetch />
      </Section>
    </>
  );
}

Project.propTypes = {
  title: PropTypes.string,
};
