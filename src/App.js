import { ThemeProvider } from "@mui/styles";

import theme from "./components/theme";
import AppRoutes from "./routers";

import CardsMape from "./components/card/cardsMape";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CardsMape /> */}
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
