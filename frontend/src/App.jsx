// ./frontend/src/App.jsx

import Header from "./components/body/Header";
import Content from "./components/body/Content";
import Footer from "./components/body/Footer";
import Container from "@mui/material/Container";

// TODO: Decide among OPTION 1 and OPTION 2 and OPTION 3.
// TODO: Replace <Header/>, <Content/>, and <Footer/> each with a MUI component such as Container. NOTE: If the new component is a <Container/>, the existing <Container/> may need to change to a <Box/>
export default function App() {
  // // NOTE: OPTION 1
  // return (
  //   <>
  //     <Header sectionStyle={sectionStyle} />
  //     <Content sectionStyle={sectionStyle} />
  //     <Footer sectionStyle={sectionStyle} />
  //   </>
  // );

  // // NOTE: OPTION 2
  return (
    <Container sx={sectionStyle.body}>
      <Header sectionStyle={sectionStyle} />
      <Content sectionStyle={sectionStyle} />
      <Footer sectionStyle={sectionStyle} />
    </Container>
  );

  // // NOTE: OPTION 3
  // return (
  //   <Box sx={sectionStyle.body}>
  //     <Header sectionStyle={sectionStyle} />
  //     <Content sectionStyle={sectionStyle} />
  //     <Footer sectionStyle={sectionStyle} />
  //   </Box>
  // );
}

const headerHeight_contentTop = "130px";
const contentBottom_footerHeight = "20px";
// const backgroundColor = "lightgreen";

const sectionStyle = {
  body: { height: "100%", width: "100%" }, // NOTE: for container of Header, Content, and Footer in case the css functionality needs it.
  header: {
    position: "absolute",
    height: headerHeight_contentTop,
    overflow: "hidden",
    // backgroundColor: backgroundColor ,
    top: "0px",
    left: "0px",
    right: "0px",
    paddingLeft: "48px", // NOTE: My change. I added this paddingLeft.
    flexDirection: { xs: "column", md: "row" }, // NOTE: My change. I added this flexDirection.
  },
  content: {
    position: "absolute",
    top: headerHeight_contentTop,
    bottom: contentBottom_footerHeight,
    overflow: "auto",
    left: "0px",
    right: "0px",
  },
  footer: {
    textAlign: "center",
    position: "absolute",
    height: contentBottom_footerHeight,
    overflow: "hidden",
    // backgroundColor: backgroundColor,
    bottom: "0px",
    left: "0px",
    right: "0px",
  },
  container: {},
  // typography: { h3: { textAlign: "center" }, h4: { textAlign: "center" }, body1: { textAlign: "" } }, // NOTE: first attempt to use the default mui Typography variant styles.
  stack: {},
  link: {},
};
