import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { AddBtn, AddControlBtn } from "../../../utilities/";

const DealCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "180px",
        padding: "15px",
        background: "#fddc6775",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "100%" }}
        image="\images\DealOfTheDay\elvive.png"
        alt="Elvive Shampo"
      />
      <Box>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "12px",
            }}
          >
            Elvive shampoo
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontWeight: 500,
              fontSize: "12px",
            }}
          >
            Rs. 250
          </Typography>
          <Box mt="10px">
            <AddControlBtn />
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default DealCard;
