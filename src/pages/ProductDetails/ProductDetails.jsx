import React from "react";
import { useLocation } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductBody from "./ProductBody";

const ProductDetails = () => {
  const itemKey = useLocation().state - 1;

  return (
    <div className="">
      <div className="container mx-auto flex flex-col items-center justify-evenly sm:mt-8 sm:flex-row sm:items-start">
        <ProductImages itemKey={itemKey} />
        <ProductBody itemKey={itemKey} />.
      </div>
    </div>
  );
};

export default ProductDetails;
