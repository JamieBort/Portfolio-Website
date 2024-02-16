// import Typography from "@mui/material/Typography";
import { Typography, Stack } from "@mui/material/";
import PropTypes from "prop-types";
// TODO: Hold off on implementing single page site navigation until my page is long enough to warrant it. See OPTION 2 below.
// import { BrowserRouter } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

// TODO: choose between Stack direction row or column below.
// TODO: style mobile landscape so that "Jamie Bort" and "Software Engineer" are side-by-side and the same font size.
// NOTE: for landscape (mobile or every landscape device) it should be direction="row".
export default function Header({ sectionSX }) {
  // console.log("sectionSX.header.Typography:", sectionSX.header.typography);
  // NOTE: OPTION 1
  return (
    // <Stack direction="column" spacing={2} sx={sectionStyle.header}>
    <Stack spacing={0} sx={sectionSX.header}>
      <Typography
        variant="h3"
        gutterBottom
        // Static styles.
        sx={sectionSX.header.Typography}
        // Dynamic styles.
        // style={sectionStyle.header}
      >
        Jamie Bort
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        // TODO: Determine the relationship between "sx" and "style". "sx" didn't work here while "style" did.
        // Static styles.
        sx={sectionSX.header.Typography}
        // Dynamic styles.
        // style={}
      >
        Software Engineer
      </Typography>
    </Stack>
  );

  // NOTE: OPTION 2
  // return (
  //   <Container sx={sectionStyle.header}>
  //     <Stack direction="row" spacing={2}>
  //       <Typography
  //         variant="h3"
  //         gutterBottom
  //         // sx={sectionStyle.typography.h3}
  //       >
  //         Jamie Bort
  //       </Typography>
  //       <Typography
  //         variant="h4"
  //         gutterBottom
  //         // sx={sectionStyle.typography.h3}
  //       >
  //         Software Engineer
  //       </Typography>
  //     </Stack>
  //     {/* TODO: move these links. Fix styling */}
  //     {/* <BrowserRouter>
  //       <HashLink smooth to="#bio_section" color="inherit">
  //         Bio
  //       </HashLink>
  //       <HashLink smooth to="#projects_section" color="inherit">
  //         Projects
  //       </HashLink>
  //       <HashLink smooth to="#connectWithMe_section" color="inherit">
  //         Connect With Me
  //       </HashLink>
  //     </BrowserRouter> */}
  //   </Container>
  // );
}

Header.propTypes = {
  sectionSX: PropTypes.object,
};
