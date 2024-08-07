import React from "react";
import { ProductData } from "../../ProductData";

const ProductImages = ({ itemKey }) => {
  return (
    <div className="my-6 sm:sticky sm:top-20 sm:z-[-1] sm:my-0 sm:pt-2">
      <img
        className="max-w-[250px] sm:max-w-[300px]"
        src={
          !ProductData[itemKey].imgSrc
            ? "/ComingSoon.png"
            : ProductData[itemKey].imgSrc
        }
        alt="ProductImage"
      />
    </div>
  );
};

export default ProductImages;
