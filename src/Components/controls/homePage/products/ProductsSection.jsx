import { Box, Typography } from "@mui/material";
import React from "react";
import { Heading, Section } from "../../../styleControl";
import ProductCarousel from "./ProductCarousel";

const ProductsSection = () => {
  return (
    <Section>
      <Heading>products</Heading>
      <Box mt="50px" mb="50px">
        <ProductCarousel
          imagUrl="/images/Product/fruits.png"
          title="fruits"
          products={""}
        />
        <ProductCarousel
          imagUrl="/images/Product/veg.png"
          title="vegetables"
          products={""}
        />
        <ProductCarousel
          imagUrl="/images/Product/bev.png"
          title="beverages"
          products={""}
        />
      </Box>
    </Section>
  );
};

export default ProductsSection;
