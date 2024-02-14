import PropTypes from "prop-types";
import { Container, Typography, Link } from "@mui/material";

export default function BioSection({ title, sectionStyle }) {
  return (
    <Container id="bio_section" sx={sectionStyle.container}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        I write code and teach at{" "}
        <Link href="https://codethedream.org/" underline="hover">
          Code the Dream
        </Link>
        , a software boot camp for underrepresented people.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Below you will find some of my Projects.
      </Typography>
      <Typography variant="body1" gutterBottom>
        I am currently in the process of changing this static portfolio website so that it is hosted with a Vite + React front end and Node Express back end. More info can be found
        in the{" "}
        <Link href="https://github.com/JamieBort/jamiebort.github.io?tab=readme-ov-file#about" underline="hover">
          About section of the README
        </Link>{" "}
        file.
      </Typography>
      <Typography variant="body1" gutterBottom>
        When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.
      </Typography>
      {/* TODO: when the page is long enough to warrant single page navigation, create a "Connect with Me" button below. */}
      <Typography variant="body1" gutterBottom>
        Connect with me on social media below.
      </Typography>
    </Container>
  );
}

BioSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
