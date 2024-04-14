import React from "react";
import { ThemeProvider } from "@mui/styles";
import theme from "./components/theme";
import AppRoutes from "./routers";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
