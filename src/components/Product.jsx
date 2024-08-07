import React from "react";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ProductData } from "../ProductData";
import StarRating from "./StarRating";

const Product = ({ itemKey }) => {
  const navigate = useNavigate();
  return (
    <div className="mx-1 my-1 w-full rounded border p-4 shadow-xl md:w-1/2 lg:w-1/4">
      <div className="block h-48 overflow-hidden rounded">
        <img
          onClick={() =>
            ProductData[itemKey].imgSrc &&
            navigate("/products/" + ProductData[itemKey].item, {
              state: itemKey + 1,
            })
          }
          alt="Product"
          className="block h-full w-full cursor-pointer object-cover object-center"
          src={
            !ProductData[itemKey].imgSrc
              ? "/ComingSoon.png"
              : ProductData[itemKey].imgSrc
          }
        />
      </div>
      <div className="mt-4">
        <h3 className="title-font text-xs text-gray-500">
          {ProductData[itemKey].category}
        </h3>
        <h2
          onClick={() =>
            ProductData[itemKey].imgSrc &&
            navigate("/products/" + ProductData[itemKey].item, {
              state: itemKey + 1,
            })
          }
          className="title-font w-fit cursor-pointer text-xl font-medium text-gray-900"
        >
          {ProductData[itemKey].item}
        </h2>

        <div className="flex items-start justify-between">
          <div className="">
            <p className="flex text-xl font-medium">
              ₹ {ProductData[itemKey].price}
              <span className="ml text-sm font-extralight text-blue-700">
                {ProductData[itemKey].discount}% off
              </span>
            </p>
            <span className="text-sm font-extralight">
              MRP <del>₹{ProductData[itemKey].mrp}</del> <br />
            </span>
          </div>
          <span className="flex">
            <span className="mr-1">{ProductData[itemKey].rating}</span>
            <StarRating itemKey={itemKey} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Product;
