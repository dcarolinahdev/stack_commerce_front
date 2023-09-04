import React from "react";
import ProductList from "../components/ProductsList/ProductsList";
import Carousel from "../components/Carousel/Carousel";
import Payment from "../components/Payment";

const Index = () => {
  return (
    <div className="">
      <Carousel />
      <Payment />
      <ProductList />
    </div>
  );
};

export default Index;
