import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ViewMore = ({ to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography
        sx={{ fontWeight: 500, color: "black", "&:hover": { color: "blue" } }}
      >
        View More
      </Typography>
    </Link>
  );
};

export default ViewMore;
