import { Box } from "@mui/material";
import "./App.css";
import Footer from "./Components/layout/Footer";
import Navigation from "./Components/layout/Navigation";
import HomePage from "./screens/homePage";

function App() {
  return (
    <Box maxWidth="1440px" sx={{ margin: "auto" }}>
      <Navigation />
      <HomePage />
      <Footer />
    </Box>
  );
}

export default App;
