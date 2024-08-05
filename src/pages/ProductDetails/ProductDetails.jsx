import React from "react";
import { useLocation } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductBody from "./ProductBody";

const ProductDetails = () => {
  const itemKey = useLocation().state - 1;

  return (
    <div className="container mx-auto mt-10 flex justify-evenly">
      <ProductImages itemKey={itemKey} />
      <ProductBody itemKey={itemKey} />
    </div>
  );
};

export default ProductDetails;
