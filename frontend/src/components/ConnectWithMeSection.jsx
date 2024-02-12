import PropTypes from "prop-types";
// import Section from "./Section";
import { Box, Container, Grid, Stack, Typography, Icon, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

import { green } from "@mui/material/colors";

// import { GitHubIcon } from "@mui/icons-material/";

// import SvgIcon from "@material-ui/core/SvgIcon";
// import { makeStyles } from "@material-ui/styles";
// import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import GitHubIcon from '@material-ui/icons/GitHub';
// import Link from '@material-ui/core/Link';

// export default function Icons() {
//   return (
// <Stack direction="row" spacing={3}>
//   <Icon>add_circle</Icon>
//   <Icon color="primary">add_circle</Icon>
//   <Icon sx={{ color: green[500] }}>add_circle</Icon>
//   <Icon fontSize="small">add_circle</Icon>
//   <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
// </Stack>
// );
// }

// import { SVGProps } from "react";
// import { SVGProps } from 'react';

// const MdiStackOverflow = (SVGProps) => {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...SVGProps}>
//       <path
//         fill="currentColor"
//         d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76zm1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62zm2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37zm4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21zM6.59 18.41v-1.8h8.98v1.8z"
//       ></path>
//     </svg>
//   );
// };

export default function ConnectWithMeSection({ title, sectionStyle }) {
  // const useStyles = makeStyles({
  //   root: {
  //     "& .MuiBottomNavigationAction-root": {
  //       minWdith: 0,
  //       maxWidth: 250,
  //     },
  //   },
  // });
  // const classes = useStyles();
  // const StackOverflowIcon = (
  //   <SvgIcon fontSize="medium">
  //     <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
  //   </SvgIcon>
  // );

  return (
    <>
      <Container style={sectionStyle.container}>
        <Typography variant="h2" gutterBottom style={sectionStyle.typography.h2}>
          {title}
        </Typography>
        <Stack direction="row" spacing={3}>
          <Link href="http://www.github.com" target="_blank">
            <GitHubIcon sx={{ color: "red" }} />
          </Link>
          <Link href="http://www.github.com" target="_blank">
            <TwitterIcon sx={{ color: "orange" }} fontSize="large" />
          </Link>
          <Link href="http://www.github.com" target="_blank" sx={{ color: "red" }}>
            <LinkedInIcon />
          </Link>
          {/* <BottomNavigation width="auto" style={{ background: "#222" }}>
          <BottomNavigationAction className={classes.root} style={{ padding: 0, color: "white" }} icon={StackOverflowIcon}></BottomNavigationAction>
        </BottomNavigation> */}

          {/* <MdiStackOverflow />
        <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
        <FontAwesomeIcon icon={faStackOverflow} /> */}
          {/* <Icon icon={StackOverflowIcon} /> */}

          {/* <Icon>add_circle</Icon>
      <Icon color="primary">add_circle</Icon>
      <Icon sx={{ color: green[500] }}>add_circle</Icon>
      <Icon fontSize="small">add_circle</Icon>
      <Icon sx={{ fontSize: 30 }}>add_circle</Icon> */}
          {/* <Icon fontSize="medium"> */}
          {/* <LinkedInIcon sx={{ color: green[500] }} fontSize="large" /> */}
          {/* </Icon> */}
        </Stack>
      </Container>
      {/* <Section title={title}>
        <span>LinkedIn</span>
        <span>Twitter</span>
        <span>Stack Overflow</span>
        <span>GitHub</span>
      </Section> */}
    </>
  );
}

ConnectWithMeSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
