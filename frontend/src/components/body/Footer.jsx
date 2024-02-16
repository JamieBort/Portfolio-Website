// ./frontend/src/App.jsx

import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Footer({ sectionSX }) {
  return (
    <Typography variant="body2" sx={sectionSX.footer}>
      {`\u00A9`}
      {new Date().getFullYear()}
    </Typography>
  );
}

Footer.propTypes = {
  sectionSX: PropTypes.object,
};
