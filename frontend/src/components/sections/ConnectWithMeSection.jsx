import PropTypes from "prop-types";
import { Container, Stack, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Chip from "@mui/material/Chip";
// import SvgIcon from "@material-ui/core/SvgIcon";

// const StackOverflowIcon = (
//   <SvgIcon fontSize="small">
//     <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
//   </SvgIcon>
// );

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76zm1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62zm2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37zm4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21zM6.59 18.41v-1.8h8.98v1.8z"></path></svg> */
}

// import React from 'react';
// import type { SVGProps } from 'react';

// export function MdiStackOverflow(props: SVGProps<SVGSVGElement>) {
// 	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76zm1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62zm2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37zm4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21zM6.59 18.41v-1.8h8.98v1.8z"></path></svg>);
// }

export default function ConnectWithMeSection({ title, sectionStyle }) {
  return (
    <Container id="connectWithMe_section" sx={sectionStyle.container}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      {/* TODO: style the icons */}
      {/* TODO: consider not using icons */}
      <Stack direction="row" justifyContent="space-around">
        <Link href="http://www.github.com" target="_blank">
          <GitHubIcon fontSize="large" />
        </Link>
        <Link href="http://www.github.com" target="_blank">
          <TwitterIcon fontSize="large" />
        </Link>
        <Link href="http://www.github.com" target="_blank">
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link href="http://www.github.com" target="_blank">
          {/* <Chip icon={StackOverflowIcon} /> */}

          <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38zM6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76zm1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62zm2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37zm4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21zM6.59 18.41v-1.8h8.98v1.8z"
            ></path>
          </svg>
        </Link>
      </Stack>
    </Container>
  );
}

ConnectWithMeSection.propTypes = {
  title: PropTypes.string,
  sectionStyle: PropTypes.object,
};
