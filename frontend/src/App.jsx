// ./frontend/src/App.jsx

import Header from "./components/body/Header";
import Content from "./components/body/Content";
import Footer from "./components/body/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: red[500],
  //   },
  // },
});

export default function App() {
  // TODO: determine of I can remain with option 1 below.
  return (
    // NOTE: option 1:
    <>
      <ThemeProvider theme={theme}>
        <Header sectionStyle={sectionStyle} />
        <Content sectionStyle={sectionStyle} />
        <Footer id="footer" sectionStyle={sectionStyle} />
      </ThemeProvider>
    </>
    // NOTE: option 2:
    // <div style={{ height: "100%", width: "100%" }}>
    //   <Header sectionStyle={sectionStyle} />
    //   <Content sectionStyle={sectionStyle} />
    //   <Footer id="footer" sectionStyle={sectionStyle} />
    // </div>
  );
}

const headerHeight_contentTop = "130px";
const contentBottom_footerHeight = "20px";
// const backgroundColor = "lightgreen";

const sectionStyle = {
  // body: { height: "100%", width: "100%" }, // NOTE: option 2 above.
  header: {
    position: "absolute",
    height: headerHeight_contentTop,
    overflow: "hidden",
    // backgroundColor: backgroundColor ,
    top: "0px",
    left: "0px",
    right: "0px",
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
  // typography: { h3: { textAlign: "center" }, h4: { textAlign: "center" }, body1: { textAlign: "" } },
  stack: {},
  link: {},
};
