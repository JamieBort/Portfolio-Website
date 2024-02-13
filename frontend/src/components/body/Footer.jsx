// ./frontend/src/App.jsx

// import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function Footer({ sectionStyle }) {
  return <div style={sectionStyle.footer}>{Date()}</div>;
}

Footer.propTypes = {
  sectionStyle: PropTypes.object,
};
