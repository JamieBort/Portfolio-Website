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
    <Container sx={sectionSX.body}>
      <Header sectionSX={sectionSX} />
      <Content sectionSX={sectionSX} />
      <Footer sectionSX={sectionSX} />
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

const headerHeight_contentTop = { xs: "95px", md: "60px" };
const contentBottom_footerHeight = "20px";

// All the static styles in the sx prop
const sectionSX = {
  body: { height: "100%", width: "100%" }, // NOTE: for container of Header, Content, and Footer in case the css functionality needs it.
  header: {
    // *** *** ***
    // To maintain the sticky header.
    position: "absolute",
    height: headerHeight_contentTop,
    overflow: "hidden",
    backgroundColor: { xs: "yellow", md: "red" },
    top: "0px",
    left: "0px",
    right: "0px",
    // *** *** ***

    // *** *** ***
    // My changes/additions.
    paddingLeft: "48px", // NOTE: My change. I added this paddingLeft.
    flexDirection: { xs: "column", md: "row" }, // NOTE: My change. I added this flexDirection.
    justifyContent: { xs: "center", md: "space-around" },
    alignItems: { xs: "flex-start", md: "center" },
    Typography: {
      backgroundColor: { xs: "brown", md: "orange" },
      my: "0px",
    },
  },
  content: {
    // *** *** ***
    // To maintain the scrollable content.
    position: "absolute",
    top: headerHeight_contentTop,
    bottom: contentBottom_footerHeight,
    overflow: "auto",
    left: "0px",
    right: "0px",
    // *** *** ***
  },
  footer: {
    // *** *** ***
    // To maintain the sticky footer.
    textAlign: "center",
    position: "absolute",
    height: contentBottom_footerHeight,
    overflow: "hidden",
    bottom: "0px",
    left: "0px",
    right: "0px",
    // *** *** ***
  },
};

// // Dynamic styles(the ones that change based on some variable) in the style prop.
// const sectionStyle = {
//   body: {},
//   header: {
//     typography: {},
//   },
//   content: {},
//   footer: {},
// };

// const section = { sectionStyle: sectionStyle, sectionSX: sectionSX };
