import React from "react";
import { ProductData } from "../../ProductData";
import StarRating from "../../components/StarRating";

const ProductBody = ({ itemKey }) => {
  return (
    <div className="mx-3 sm:w-[700px] sm:pt-2">
      <p className="text-sm text-gray-500">{ProductData[itemKey].category}</p>
      <h2 className="mb-2 text-2xl">{ProductData[itemKey].item}</h2>

      <span className="flex">
        <span className="mr-1 text-sm">{ProductData[itemKey].rating}</span>
        <StarRating itemKey={itemKey} />
      </span>

      <hr className="my-2 border-t-2" />

      <p className="flex text-2xl font-medium">
        ₹ {ProductData[itemKey].price}
        <span className="ml text-lg font-extralight text-blue-700">
          {ProductData[itemKey].discount}% off
        </span>
      </p>

      <span className="text-sm font-extralight">
        MRP <del>₹{ProductData[itemKey].mrp}</del> <br />
        <span className="font-normal">Inclusive of all taxes</span>
      </span>
      <br />
      <button className="my-2 rounded-lg bg-[#FF6D60] px-2 py-1 active:bg-[#ff4b3b] sm:hover:bg-[#ff4b3b]">
        Buy Now
      </button>

      <hr className="my-2 border-t-2" />

      <h3 className="mb-3 text-xl font-medium">Specifications</h3>

      <table className="">
        <tr>
          <td className="w-32">Size</td>
          <td>{ProductData[itemKey].specs.size}</td>
        </tr>
        <tr>
          <td>Kit Name</td>
          <td>{ProductData[itemKey].item}</td>
        </tr>
        <tr>
          <td>Application</td>
          <td>{ProductData[itemKey].specs.application}</td>
        </tr>
        <tr>
          <td>Age Range</td>
          <td>{ProductData[itemKey].specs.ageRange}</td>
        </tr>
        <tr>
          <td>In The Box</td>
          <td>{ProductData[itemKey].specs.inTheBox}</td>
        </tr>
      </table>
      <hr className="my-2 border-t-2" />
      <h3 className="mb-3 text-xl font-medium">Product Details</h3>
      <p className="mb-3">{ProductData[itemKey].description.content}</p>
      {/* <pre className="mb-3">{ProductData[itemKey].description.moreData}</pre> */}
      {/* <hr className="mb-5 mt-2 border-t-2" /> */}
    </div>
  );
};

export default ProductBody;
