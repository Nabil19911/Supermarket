import { Box } from "@mui/material";

const Section = ({ children }) => {
  return (
    <Box
      sx={{ margin: "50px auto auto auto", width: "90%", textAlign: "center" }}
    >
      {children}
    </Box>
  );
};

export default Section;
