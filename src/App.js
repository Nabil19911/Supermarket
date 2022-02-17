import { Box } from "@mui/material";
import "./App.css";
import Navigation from "./Components/layout/Navigation";
import HomePage from "./screens/homePage";

function App() {
  return (
    <Box maxWidth="1440px" sx={{ margin: "auto" }}>
      <Navigation />
      <HomePage />
    </Box>
  );
}

export default App;
