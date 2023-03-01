import { ThemeProvider } from "styled-components";
import { StyledApp } from "./components/styles/app.styles";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter } from "react-router-dom";
import { RouteComponent } from "./Routes";

const theme = {
  colors: {
    header: "rgb(var(--tmdbDarkBlue))",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "800px",
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          <RouteComponent />
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
