import { Theme } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";

const typography = (theme: Theme): Typography => ({
  ...theme.typography,
  fontFamily: `'Press Start 2P', cursive`,
  h1: {
    fontSize: "2.5rem",
    color: "#3B4CCA",
  },
  h2: {
    fontSize: "2rem",
    color: "#3B4CCA",
  },
  body1: {
    fontSize: "1rem",
    color: "#333333",
  },
  body2: {
    fontSize: "0.875rem",
    color: "#333333",
  },
  button: {
    fontSize: "1rem",
    color: "#3B4CCA",
  },
  caption: {
    fontSize: "0.75rem",
    color: "#333333",
  },
});

export default typography;
