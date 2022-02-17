import React, { useState } from "react";
import styled from "styled-components";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin-bottom: 25px;
`;
const Arrow = styled.div`
  background: #7caf3c;
  width: 50px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 15px 15px 0;
  &:hover {
    background: #7baf3cc3;
  }
`;

const Wrapper = styled.div`
  width: auto;
  overflow-x: hidden;
`;

const Silders = styled.div`
  display: flex;
  transform: translateX(${props => props.slideIndex * -200}px);
  transition: transform 0.5s ease;
`;

const ProductCarousel = ({ imagUrl, title, products }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = () => {
    setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0);
  };
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: `url(${imagUrl})`,
          minWidth: "200px",
          height: "400px",
          borderRadius: "15px 0 0 15px",
        }}
      >
        <Box sx={{ margin: "25px auto auto 20px", textAlign: "left" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
          <Link
            to="#"
            style={{
              textDecoration: "none",
              color: "black",
              textTransform: "capitalize",
            }}
          >
            View all
          </Link>
        </Box>
      </Box>
      <Wrapper>
        <Silders slideIndex={slideIndex}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Silders>
      </Wrapper>
      <Arrow onClick={handleClick}>
        <ChevronRightIcon sx={{ color: "white" }} />
      </Arrow>
    </Container>
  );
};

export default ProductCarousel;
