import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Heading, Section } from "../../../styleControl";

const TopCategoriesSection = () => {
  return (
    <Section>
      <Box sx={{ background: "white", padding: "30px", borderRadius: "15px" }}>
        <Heading>Top Categories</Heading>
        <Grid
          container
          justifyContent="space-evenly"
          alignContent="space-between"
          gap={2}
          sx={{
            width: {
              xs: "auto",
              sm: "600px",
              lg: "auto",
            },
            margin: "50px auto",
          }}
        >
          <Box sx={{ marginBottom: { xs: "15px", lg: 0 } }}>
            <Scale>
              <Link to="#">
                <Image src="\images\TopCategory\F-V-2.png" />
              </Link>
            </Scale>
            <Typography
              mt="15px"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              Fruits
            </Typography>
          </Box>
          <Box sx={{ marginBottom: { xs: "15px", lg: 0 } }}>
            <Scale>
              <Link to="#">
                <Image src="\images\TopCategory\computer-device.png" />
              </Link>
            </Scale>
            <Typography
              mt="15px"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              electronics
            </Typography>
          </Box>
          <Box sx={{ marginBottom: { xs: "15px", lg: 0 } }}>
            <Scale>
              <Link to="#">
                <Image src="\images\TopCategory\bakery.png" />
              </Link>
            </Scale>
            <Typography
              mt="15px"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              bakery
            </Typography>
          </Box>
          <Box sx={{ marginBottom: { xs: "15px", lg: 0 } }}>
            <Scale>
              <Link to="#">
                <Image src="\images\TopCategory\fish.png" />
              </Link>
            </Scale>
            <Typography
              mt="15px"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              fresh fish
            </Typography>
          </Box>
          <Box sx={{ marginBottom: { xs: "15px", lg: 0 } }}>
            <Scale>
              <Link to="#">
                <Image src="\images\TopCategory\Fresh-meat.png" />
              </Link>
            </Scale>
            <Typography
              mt="15px"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              fresh meat
            </Typography>
          </Box>
          <Box sx={{ marginBottom: { xs: "15px", lg: 0 } }}>
            <Scale>
              <Link to="#">
                <Image src="\images\TopCategory\smart-phone.png" />
              </Link>
            </Scale>
            <Typography
              mt="15px"
              sx={{ textTransform: "uppercase", fontWeight: 600 }}
            >
              mobiles
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Section>
  );
};

const Image = styled.img`
  transform: scale(1);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Scale = ({ children }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: "100%",
        background: "#7baf3c18",
      }}
    >
      {children}
    </Box>
  );
};
export default TopCategoriesSection;
