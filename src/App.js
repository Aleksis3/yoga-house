import { Button, createMuiTheme, createTheme } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const theme = createTheme({
  typography: {
    // Tell MUI what's the font-size on the html element is.
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
    </div>
  );
}

export default App;
