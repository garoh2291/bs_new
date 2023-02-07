import { ThemeProvider } from "styled-components";
import { StyledApp } from "./components/styles/app.styles";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter } from "react-router-dom";

const theme = {
  colors: {
    header: "rgb(var(--tmdbDarkBlue))",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "980px",
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp></StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
