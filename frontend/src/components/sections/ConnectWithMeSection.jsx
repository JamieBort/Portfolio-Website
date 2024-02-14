// ./frontend/src/components/sections/ConnectWithMe.jsx

import PropTypes from "prop-types";
import { Container, Stack, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ConnectWithMeSection({ title }) {
  return (
    <Container
      id="connectWithMe_section"
      // sx={sectionStyle.container}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Stack direction="row" justifyContent="space-around">
        <Link href="http://www.github.com" target="_blank">
          <GitHubIcon fontSize="large" sx={{ width: "1.5em", height: "1.5em" }} />
        </Link>
        <Link href="http://www.github.com" target="_blank">
          <TwitterIcon fontSize="large" sx={{ width: "1.5em", height: "1.5em" }} />
        </Link>
        <Link href="http://www.github.com" target="_blank">
          <LinkedInIcon fontSize="large" sx={{ width: "1.5em", height: "1.5em" }} />
        </Link>
        <Link href="http://www.github.com" target="_blank">
          {/* NOTE: "width" and "height" here (below) adjusts the dimensions. */}
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
  // sectionStyle: PropTypes.object,
};
