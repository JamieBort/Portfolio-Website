import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
// TODO: Hold off on implementing single page site navigation until my page is long enough to warrant it.
// import { BrowserRouter } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

export default function Header({ sectionStyle }) {
  return (
    <div style={sectionStyle.header}>
      {/* TODO: fix font size here. */}
      <Typography
        variant="h3"
        gutterBottom
        // style={sectionStyle.typography.h3}
      >
        Jamie Bort
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        // style={sectionStyle.typography.h3}
      >
        Software Engineer
      </Typography>
      {/* TODO: move these links. Fix styling */}
      {/* <BrowserRouter>
        <HashLink smooth to="#bio_section" color="inherit">
          Bio
        </HashLink>
        <HashLink smooth to="#projects_section" color="inherit">
          Projects
        </HashLink>
        <HashLink smooth to="#connectWithMe_section" color="inherit">
          Connect With Me
        </HashLink>
      </BrowserRouter> */}
    </div>
  );
}

Header.propTypes = {
  sectionStyle: PropTypes.object,
};
