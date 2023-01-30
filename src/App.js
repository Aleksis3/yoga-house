import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import Classes from "./components/Classes/Classes";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reserve from "./components/Reserve/Reserve";

const theme = createTheme({
  palette: {
    primary: {
      main: "#bf2aaa",
    },
    secondary: { main: "#6741d9" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 1536,
    },
  },
  // typography: {
  //   htmlFontSize: "10",
  //   "@media (max-width:700px)": {
  //     htmlFontSize: "4",
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Hero />
        <Container maxWidth="xl">
          <Classes />
          <Reserve />
          <Gallery />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
