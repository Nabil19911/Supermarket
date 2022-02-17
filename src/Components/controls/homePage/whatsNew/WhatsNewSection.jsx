import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Heading, Section } from "../../../styleControl";
import { Buy } from "../../../utilities/";

const WhatsNewSection = () => {
  const isMobile = useMediaQuery({ maxWidth: "500px" });
  return (
    <Section>
      <Heading>What's New</Heading>
      <Box
        mt="150px"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-around",
          rowGap: 15,
        }}
      >
        <ItemBox
          size={isMobile ? "265px" : "550px"}
          imgUrl="\images\WhatsNew\new1.png"
          h1="product title"
          text="lorems"
          fontSize={isMobile ? "20px" : "30px"}
          imageSize={isMobile ? "200px" : "400px"}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            rowGap: 15,
            justifyContent: "space-around",
          }}
        >
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new2.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
            imageSize="200px"
          />
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new3.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
            imageSize="200px"
          />
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new4.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
            imageSize="200px"
          />
          <ItemBox
            size="265px"
            imgUrl="\images\WhatsNew\new5.png"
            h1="product title"
            text="lorems"
            fontSize="20px"
            imageSize="200px"
          />
        </Box>
      </Box>
    </Section>
  );
};

const ItemBox = ({ size, imgUrl, h1, text, fontSize, imageSize }) => {
  return (
    <Box
      sx={{
        minWidth: size,
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 0 10px -5px black",
        position: "relative",
      }}
    >
      <ProductImage imageSize={imageSize} src={imgUrl} />
      <Box sx={{ paddingTop: "50px" }}>
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
    </Box>
  );
};

const ProductImage = styled.img`
  width: ${props => props.imageSize};
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translate(-50%);
  filter: drop-shadow(0 -3px 3px #222);
`;
export default WhatsNewSection;
