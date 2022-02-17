import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import styled from "styled-components";
import { settings } from "./CarouselSetting";
import { Link } from "react-router-dom";

class CustomImageSlide extends React.Component {
  render() {
    const { url } = this.props;
    return <img src={url} style={{ width: "100%", borderRadius: "15px" }} />;
  }
}

const HeroCarousel = () => {
  return (
    <Box pt="60px" pb="30px">
      <Box
        sx={{
          margin: "auto",
          width: "90%",
          textAlign: "center",
        }}
      >
        <Slider {...settings}>
          <Link to="#">
            <CustomImageSlide url="\images\Banner\Banner1.png" />
          </Link>
          <Link to="#">
            <CustomImageSlide url="\images\Banner\Banner2.png" />
          </Link>
          <Link to="#">
            <CustomImageSlide url="\images\Banner\Banner3.png" />
          </Link>
        </Slider>
      </Box>
    </Box>
  );
};

const Image = styled.img`
  width: 90%;
`;
export default HeroCarousel;
