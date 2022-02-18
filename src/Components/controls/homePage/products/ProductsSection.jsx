import { Box } from "@mui/material";
import React from "react";
import { Heading, Section } from "../../../styleControl";
import { SeeMoreBtn } from "../../../utilities";
import ProductCarousel from "./ProductCarousel";

const veg = [
  { imageUrl: "/images/Product/veg/p1.png", title: "cucumber", price: "250" },
  { imageUrl: "/images/Product/veg/p2.png", title: "carrot", price: "150" },
  { imageUrl: "/images/Product/veg/p3.png", title: "tomato", price: "175" },
  { imageUrl: "/images/Product/veg/p4.png", title: "cabbage", price: "135" },
  { imageUrl: "/images/Product/veg/p5.png", title: "onion", price: "259" },
  {
    imageUrl: "/images/Product/veg/p6.png",
    title: "bell pepper",
    price: "350",
  },
  {
    imageUrl: "/images/Product/veg/p7.png",
    title: "green peas",
    price: "120",
  },
  { imageUrl: "/images/Product/veg/p8.png", title: "potato", price: "450" },
  {
    imageUrl: "/images/Product/veg/p9.png",
    title: "bitter melon",
    price: "150",
  },
  { imageUrl: "/images/Product/veg/p10.png", title: "broccoli", price: "150" },
];
const fruits = [
  { imageUrl: "/images/Product/fruits/p1.png", title: "apple", price: "150" },
  {
    imageUrl: "/images/Product/fruits/p2.png",
    title: "dragon fruit",
    price: "300",
  },
  { imageUrl: "/images/Product/fruits/p3.png", title: "kiwi", price: "150" },
  { imageUrl: "/images/Product/fruits/p4.png", title: "grapes", price: "400" },
  { imageUrl: "/images/Product/fruits/p5.png", title: "Banana", price: "350" },
  { imageUrl: "/images/Product/fruits/p6.png", title: "orange", price: "250" },
  { imageUrl: "/images/Product/fruits/p7.png", title: "papaya", price: "350" },
  {
    imageUrl: "/images/Product/fruits/p8.png",
    title: "sugar apple",
    price: "150",
  },
  {
    imageUrl: "/images/Product/fruits/p9.png",
    title: "black berry",
    price: "165",
  },
  {
    imageUrl: "/images/Product/fruits/p10.png",
    title: "gooseberry",
    price: "235",
  },
];
const bev = [
  { imageUrl: "/images/Product/bev/p1.png", title: "Burst", price: "231" },
  { imageUrl: "/images/Product/bev/p2.png", title: "7 up", price: "152" },
  { imageUrl: "/images/Product/bev/p3.png", title: "fanta", price: "563" },
  { imageUrl: "/images/Product/bev/p4.png", title: "Coca cola", price: "234" },
  { imageUrl: "/images/Product/bev/p5.png", title: "Cola tin", price: "153" },
  { imageUrl: "/images/Product/bev/p6.png", title: "dew", price: "150" },
  { imageUrl: "/images/Product/bev/p7.png", title: "mega fanta", price: "155" },
  { imageUrl: "/images/Product/bev/p8.png", title: "Juice", price: "155" },
  { imageUrl: "/images/Product/bev/p9.png", title: "Juice", price: "165" },
  { imageUrl: "/images/Product/bev/p10.png", title: "water", price: "168" },
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
