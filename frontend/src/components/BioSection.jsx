import PropTypes from "prop-types";
import Section from "./Section";
import { Box, Container, Grid, Stack } from "@mui/material";

export default function BioSection({ title }) {
  //   console.log(props.title);
  return (
    <>
      {/* <Box style={style.componentLevel}>
        <h2>Box</h2>
        <p>I write code and teach at Code the Dream, a software boot camp for underrepresented people.</p>
        <p>Below you will find some of my Projects.</p>
        <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
        <p>I invite you to Connect with Me on social media below.</p>
      </Box> */}
      <Container style={style.componentLevel}>
        <h2>{title}</h2>
        {/* <h2>Container</h2> */}
        <p>I write code and teach at Code the Dream, a software boot camp for underrepresented people.</p>
        <p>Below you will find some of my Projects.</p>
        <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
        <p>I invite you to Connect with Me on social media below.</p>
      </Container>
      {/* <Grid style={style.componentLevel}>
        <h2>Grid</h2>
        <p>I write code and teach at Code the Dream, a software boot camp for underrepresented people.</p>
        <p>Below you will find some of my Projects.</p>
        <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
        <p>I invite you to Connect with Me on social media below.</p>
      </Grid>
      <Stack style={style.componentLevel}>
        <h2>Stack</h2>
        <p>I write code and teach at Code the Dream, a software boot camp for underrepresented people.</p>
        <p>Below you will find some of my Projects.</p>
        <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
        <p>I invite you to Connect with Me on social media below.</p>
      </Stack> */}
      {/* <Section title={title}>
        <p>I write code and teach at Code the Dream, a software boot camp for underrepresented people.</p>
        <p>Below you will find some of my Projects.</p>
        <p>When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.</p>
        <p>I invite you to Connect with Me on social media below.</p>
      </Section> */}
    </>
  );
}

const style = {
  componentLevel: {
    border: "1px solid green",
    margin: "5px 0 5px 0",
    // marginBottom: "5px",
  },
  divUIType: {
    border: "1px solid DodgerBlue",
    marginTop: "5px",
    marginBottom: "5px",
  },
  divComponentType: {
    border: "1px solid red",
    marginTop: "5px",
    marginBottom: "5px",
  },
  p: {
    color: "green",
    textAlign: "center",
  },
};

BioSection.propTypes = {
  title: PropTypes.string,
};
