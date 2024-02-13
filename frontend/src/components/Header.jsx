import Typography from "@mui/material/Typography";
// import { Typography, Link } from "@mui/material";
import PropTypes from "prop-types";
// import BrowserRouter from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header({ sectionStyle }) {
  return (
    <div style={sectionStyle.header}>
      <Typography variant="h1" gutterBottom style={navStyle}>
        Jamie Bort
      </Typography>
      <Typography variant="h2" gutterBottom style={navStyle}>
        Software Engineer
      </Typography>

      <BrowserRouter>
        <HashLink smooth to="#bio_section" color="inherit">
          Bio
        </HashLink>
        <HashLink smooth to="#projects_section" color="inherit">
          Projects
        </HashLink>
        <HashLink smooth to="#connectWithMe_section" color="inherit">
          Connect With Me
        </HashLink>
      </BrowserRouter>
    </div>
  );
}

const navStyle = { textAlign: "center" };

Header.propTypes = {
  sectionStyle: PropTypes.object,
};
