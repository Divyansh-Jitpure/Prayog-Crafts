import React from "react";
import { ProductData } from "../../ProductData";

const ProductImages = ({ itemKey }) => {
  return (
    <div className="my-6 sm:sticky sm:top-20 sm:z-[-1] sm:my-0 sm:pt-2">
      <img
        className="w-[300px] sm:w-[500px]"
        src={ProductData[itemKey].imgSrc}
        alt="ProductImage"
      />
    </div>
  );
};

export default ProductImages;
