import { Typography } from "@mui/material";
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
      }}
    >
      <AlbumIcon sx={{ color: "#00DD6C", fontSize: 15 }} /> {children}{" "}
      {isMobile && <AlbumIcon sx={{ color: "#00DD6C", fontSize: 15 }} />}
    </Typography>
  );
};

export default Heading;
