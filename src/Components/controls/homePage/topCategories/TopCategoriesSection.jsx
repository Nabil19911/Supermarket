import { Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Heading, Section } from "../../../styleControl";

const TopCategoriesSection = () => {
  return (
    <Section>
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
        <Scale>
          <Link to="#">
            <Image src="\images\TopCategory\F-V-2-.png" />
          </Link>
        </Scale>
        <Scale>
          <Link to="#">
            <Image src="\images\TopCategory\computer-device.png" />
          </Link>
        </Scale>
        <Scale>
          <Link to="#">
            <Image src="\images\TopCategory\bakery.png" />
          </Link>
        </Scale>
        <Scale>
          <Link to="#">
            <Image src="\images\TopCategory\fish.png" />
          </Link>
        </Scale>
        <Scale>
          <Link to="#">
            <Image src="\images\TopCategory\Fresh-meat.png" />
          </Link>
        </Scale>
        <Scale>
          <Link to="#">
            <Image src="\images\TopCategory\smart-phone.png" />
          </Link>
        </Scale>
      </Grid>
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
        background: "#F5F5F5",
      }}
    >
      {children}
    </Box>
  );
};
export default TopCategoriesSection;
