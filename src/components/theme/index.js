import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      blue: "#0061E0",
    },
    primary: { main: "#1F2937", light: "#1F2937" },
    secondary: {
      main: "#5CC2BA",
      light: "#4998DA",
      grey: "#7C8893",
      dark: "#42C1BA",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      footer: "#1F2937",
      main: "#424242",
      gradient: "linear-gradient(195.23deg, #42C1BA -4.6%, #1F2937 112.09%)",
    },
    text: {
      primary: "rgba(0, 67, 104, 0.6)",
      main: "#999999",
    },
    grey: {
      100: "#FFFBF0",
      500: "#4D4D4D",
    },
  },
});
export default theme;
