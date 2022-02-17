import React from "react";
import DealOfTheDaySection from "../../Components/controls/homePage/dealOfTheDay/DealOfTheDaySection";
import HeroSection from "../../Components/controls/homePage/heroSection/HeroSection";
import ProductsSection from "../../Components/controls/homePage/products/ProductsSection";
import TopCategoriesSection from "../../Components/controls/homePage/topCategories/TopCategoriesSection";
import WhatsNewSection from "../../Components/controls/homePage/whatsNew/WhatsNewSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DealOfTheDaySection />
      <TopCategoriesSection />
      <WhatsNewSection />
      <ProductsSection />
    </>
  );
};

export default HomePage;
