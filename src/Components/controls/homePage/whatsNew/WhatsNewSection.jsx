import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Heading, Section } from "../../../styleControl";
import { Buy } from "../../../utilities/";

const WhatsNewSection = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  return (
    <Section>
      <Heading>What's New</Heading>
      <Box
        mt="50px"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          gap: 2,
        }}
      >
        <ItemBox
          size={isMobile ? "265px" : "550px"}
          imgUrl="\images\WhatsNew\new3.png"
          h1="product title"
          text="lorems"
          fontSize={isMobile ? "20px" : "30px"}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new2.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
          />
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new4.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
          />
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new1.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
          />
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new5.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
          />
        </Box>
      </Box>
    </Section>
  );
};

const ItemBox = ({ size, imgUrl, h1, text, fontSize }) => {
  return (
    <Card
      sx={{
        minWidth: size,
        height: size,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 0 10px -5px black",
      }}
    >
      <Box sx={{ marginTop: "20px" }}>
        <Typography
          sx={{
            fontSize: fontSize,
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#7caf3c",
          }}
          mb="10px"
        >
          {h1}
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            fontWeight: 500,
            fontSize: "18px",
          }}
          mb="10px"
        >
          {text}
        </Typography>
        <Buy />
      </Box>
      <CardMedia
        component="img"
        sx={{ width: size }}
        image={imgUrl}
        alt="Elvive Shampo"
      />
    </Card>
  );
};
export default WhatsNewSection;
