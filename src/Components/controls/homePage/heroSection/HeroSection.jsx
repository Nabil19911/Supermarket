import { Box } from "@mui/material";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <Box sx={{ background: "#F5F5F5" }} mt="-30px">
      <HeroCarousel />
    </Box>
  );
};

export default HeroSection;
