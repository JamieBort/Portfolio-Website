// import Typography from "@mui/material/Typography";
import { Typography, Link } from "@mui/material";

export default function Header() {
  return (
    <>
      <Typography variant="h1" gutterBottom style={navStyle}>
        Jamie Bort
      </Typography>
      <Typography variant="h2" gutterBottom style={navStyle}>
        Software Engineer
      </Typography>
      {/* TODO: add navigation */}
      <Link href="#" color="inherit">
        Projects
      </Link>
      <Link href="#" color="inherit">
        Bio
      </Link>
      <Link href="#" color="inherit">
        Connect With Me
      </Link>
    </>
  );
}

const navStyle = { textAlign: "center" };
