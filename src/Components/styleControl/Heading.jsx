import { Typography } from "@mui/material";
import React from "react";
import AlbumIcon from "@mui/icons-material/Album";
import { useMediaQuery } from "react-responsive";

const Heading = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{
        fontSize: "20px",
        fontWeight: 600,
        textTransform: "uppercase",
        textAlign: { xs: "center", sm: "left" },
        paddingTop: { xs: "25px", sm: "auto" },
      }}
    >
      <AlbumIcon sx={{ color: "#00DD6C", fontSize: 15 }} /> {children}{" "}
      {isMobile && <AlbumIcon sx={{ color: "#00DD6C", fontSize: 15 }} />}
    </Typography>
  );
};

export default Heading;
