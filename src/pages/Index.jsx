import React from "react";
import ProductList from "../components/ProductsList";
import Payment from "../components/Payment";
import Carou from "../components/Carou";

const Index = () => {
  return (
    <div className="">
      <Carou />
      <Payment />
      <ProductList />
    </div>
  );
};

export default Index;
