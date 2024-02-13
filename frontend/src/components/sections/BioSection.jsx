import PropTypes from "prop-types";
import { Container, Typography, Link } from "@mui/material";

export default function BioSection({ title, sectionStyle }) {
  return (
    <Container id="bio_section" style={sectionStyle.container}>
      <Typography
        variant="h5"
        gutterBottom
        // style={sectionStyle.typography.h5}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        // style={sectionStyle.typography.body1}
      >
        I write code and teach at{" "}
        <Link href="https://codethedream.org/" underline="hover">
          Code the Dream
        </Link>
        , a software boot camp for underrepresented people.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        // style={sectionStyle.typography.body1}
      >
        Below you will find some of my Projects. I am currently in the process of changing this static portfolio website so that it is hosted with a Vite + React front end and Node
        Express back end. More info can be found in the{" "}
        <Link href="https://github.com/JamieBort/jamiebort.github.io?tab=readme-ov-file#about" underline="hover">
          About section of the README
        </Link>{" "}
        file.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        // style={sectionStyle.typography.body1}
      >
        When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        // style={sectionStyle.typography.body1}
      >
        I invite you to Connect with Me on social media below.
      </Typography>
    </Container>
  );
}

BioSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
