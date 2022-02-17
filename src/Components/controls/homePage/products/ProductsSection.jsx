import { Box } from "@mui/material";
import React from "react";
import { Heading, Section } from "../../../styleControl";
import { SeeMoreBtn } from "../../../utilities";
import ProductCarousel from "./ProductCarousel";

const veg = [
  { imageUrl: "/images/Product/veg/p1.png", title: "cucamber", price: "2.5" },
  { imageUrl: "/images/Product/veg/p2.png", title: "carrot", price: "1.5" },
  { imageUrl: "/images/Product/veg/p3.png", title: "tomato", price: "1.5" },
  { imageUrl: "/images/Product/veg/p4.png", title: "garbage", price: "1.5" },
  { imageUrl: "/images/Product/veg/p5.png", title: "onion", price: "2.5" },
  { imageUrl: "/images/Product/veg/p6.png", title: "Bell paper", price: "1.5" },
  {
    imageUrl: "/images/Product/veg/p7.png",
    title: "green piece",
    price: "1.2",
  },
  { imageUrl: "/images/Product/veg/p8.png", title: "potato", price: "1.5" },
  { imageUrl: "/images/Product/veg/p9.png", title: "grapes", price: "1.5" },
  { imageUrl: "/images/Product/veg/p10.png", title: "grapes", price: "1.5" },
];
const fruits = [
  { imageUrl: "/images/Product/fruits/p1.png", title: "apple", price: "2.5" },
  {
    imageUrl: "/images/Product/fruits/p2.png",
    title: "dragon fruit",
    price: "300",
  },
  { imageUrl: "/images/Product/fruits/p3.png", title: "kevy", price: "2.5" },
  { imageUrl: "/images/Product/fruits/p4.png", title: "grapes", price: "5" },
  { imageUrl: "/images/Product/fruits/p5.png", title: "Banana", price: "6" },
  { imageUrl: "/images/Product/fruits/p6.png", title: "orange", price: "1.5" },
  { imageUrl: "/images/Product/fruits/p7.png", title: "popaya", price: "1.5" },
  { imageUrl: "/images/Product/fruits/p8.png", title: "popaya", price: "1.5" },
  { imageUrl: "/images/Product/fruits/p9.png", title: "popaya", price: "1.5" },
  { imageUrl: "/images/Product/fruits/p10.png", title: "popaya", price: "1.5" },
];
const bev = [
  { imageUrl: "/images/Product/bev/p1.png", title: "Burst", price: "2.5" },
  { imageUrl: "/images/Product/bev/p2.png", title: "7 up", price: "1.5" },
  { imageUrl: "/images/Product/bev/p3.png", title: "fanta", price: "1.5" },
  { imageUrl: "/images/Product/bev/p4.png", title: "Coca cola", price: "1.5" },
  { imageUrl: "/images/Product/bev/p5.png", title: "Cola tin", price: "1.5" },
  { imageUrl: "/images/Product/bev/p6.png", title: "dew", price: "1.5" },
  { imageUrl: "/images/Product/bev/p7.png", title: "mega fent", price: "1.5" },
  { imageUrl: "/images/Product/bev/p8.png", title: "Juice", price: "1.5" },
  { imageUrl: "/images/Product/bev/p9.png", title: "Juice", price: "1.5" },
  { imageUrl: "/images/Product/bev/p10.png", title: "water", price: "1.5" },
];

const ProductsSection = () => {
  return (
    <Section>
      <Heading>products</Heading>
      <Box mt="50px" mb="50px">
        <ProductCarousel
          imagUrl="/images/Product/veg.png"
          title="vegetables"
          products={veg}
        />
        <ProductCarousel
          imagUrl="/images/Product/fruits.png"
          title="fruits"
          products={fruits}
        />
        <ProductCarousel
          imagUrl="/images/Product/bev.png"
          title="beverages"
          products={bev}
        />
      </Box>
      <SeeMoreBtn />
    </Section>
  );
};

export default ProductsSection;
