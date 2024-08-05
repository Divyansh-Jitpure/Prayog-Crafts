import React from "react";
import { ProductData } from "../../ProductData";

const ProductImages = ({ itemKey }) => {
  return (
    <div className="fixed left-16 w-[400px]">
      <img
        className="w-[500px]"
        src={ProductData[itemKey].imgSrc}
        alt="ProductImage"
      />
    </div>
  );
};

export default ProductImages;
