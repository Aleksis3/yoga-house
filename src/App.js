import { createTheme } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import Classes from "./components/Classes/Classes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Reserve from "./components/Reserve/Reserve";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f2",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    htmlFontSize: "62.5%",
    "@media (max-width:700px)": {
      htmlFontSize: "40%",
    },
  },
});

function App() {
  return (
    <div className="App" theme={theme}>
      <Header />
      <Hero />
      <Container maxWidth="xl">
        <Classes />
        <Reserve />
      </Container>
    </div>
  );
}

export default App;
