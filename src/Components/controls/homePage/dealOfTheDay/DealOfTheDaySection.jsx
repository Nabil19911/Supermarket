import React, { Component } from "react";
import { Box, Grid } from "@mui/material";

import Slider from "react-slick";
import { settings } from "./CarouselSetting";
import { Heading, Section } from "../../../styleControl";
import { LeftArrow, RightArrow } from "../../../utilities";
import DealCard from "./DealCard";

class CustomSlide extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Box sx={{ padding: "5px" }}>
        <DealCard />
      </Box>
    );
  }
}

const Arrows = props => {
  return (
    <Box
      sx={{
        display: props.isMobile ? "flex" : "none",
        justifyContent: "space-evenly",
        width: "100px",
      }}
    >
      <button
        onClick={props.previous}
        style={{
          background: "none",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <LeftArrow />
      </button>
      <button
        onClick={props.next}
        style={{
          background: "none",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <RightArrow />
      </button>
    </Box>
  );
};

class CustomArrowCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth > 500,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <Section>
        <Box
          sx={{
            background: "white",
            padding: { xs: "40px auto", sm: "30px" },
            borderRadius: "15px",
          }}
        >
          <Grid
            container
            alignItems={"center"}
            justifyContent={{ xs: "center", sm: "space-between" }}
          >
            <Heading>Deal of the day</Heading>
            <Arrows
              isMobile={this.state.isMobile}
              previous={this.previous}
              next={this.next}
            />
          </Grid>
          <Box
            sx={{
              width: {
                sm: "100%",
                md: "90%",
              },
              margin: " 50px auto auto auto",
              maxWidth: "1230px",
            }}
          >
            <Slider ref={c => (this.slider = c)} {...settings}>
              <CustomSlide>1</CustomSlide>
              <CustomSlide>2</CustomSlide>
              <CustomSlide>3</CustomSlide>
              <CustomSlide>4</CustomSlide>
            </Slider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Arrows
                isMobile={!this.state.isMobile}
                previous={this.previous}
                next={this.next}
              />
            </Box>
          </Box>
        </Box>
      </Section>
    );
  }
}

const DealOfTheDaySection = () => {
  return (
    <Box>
      <CustomArrowCarousel />
    </Box>
  );
};

export default DealOfTheDaySection;
