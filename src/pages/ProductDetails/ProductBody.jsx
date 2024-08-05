import React from "react";
import { ProductData } from "../../ProductData";
import { IoStar, IoStarHalf } from "react-icons/io5";

const ProductBody = ({ itemKey }) => {
  return (
    <div className="ml-[410px] w-[700px]">
      <h2 className="mb-2 text-2xl">{ProductData[itemKey].item}</h2>

      <span className="flex items-center">
        <span className="text-sm">4.5</span>
        <IoStar className="ml-1 text-blue-400" />
        <IoStar className="text-blue-400" />
        <IoStar className="text-blue-400" />
        <IoStar className="text-blue-400" />
        <IoStarHalf className="text-blue-400" />
      </span>

      <hr className="my-2 border-t-2" />

      <p className="flex text-2xl font-medium">
        ₹ {ProductData[itemKey].price}
        <span className="ml text-lg font-extralight text-blue-700">
          10% off
        </span>
      </p>

      <span className="text-sm font-extralight">
        MRP <del>₹2000</del> <br />
        <span className="font-normal">Inclusive of all taxes</span>
      </span>

      <hr className="my-2 border-t-2" />

      <h3 className="mb-3 text-xl font-medium">Specifications</h3>

      <table className="">
        <tr>
          <td className="w-32">Size</td>
          <td>12 In 1</td>
        </tr>
        <tr>
          <td>Kit Name</td>
          <td>{ProductData[itemKey].item}</td>
        </tr>
        <tr>
          <td>Theme</td>
          <td>Something, etc.</td>
        </tr>
        <tr>
          <td>Age Range</td>
          <td>Kids, Teenagers</td>
        </tr>
        <tr>
          <td>In The Box</td>
          <td>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            optio.
          </td>
        </tr>
      </table>
      <hr className="my-2 border-t-2" />
      <h3 className="mb-3 text-xl font-medium">Product Details</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat,
        praesentium. Porro nesciunt minus soluta reprehenderit ex odio ducimus
        veritatis quidem maiores culpa quos, similique quo, neque, dolorum
        possimus assumenda repellat earum obcaecati itaque repudiandae. Ducimus
        dolor maiores magni facilis, beatae eius tempora corrupti sunt itaque
        labore sequi optio, vitae dignissimos blanditiis totam nostrum officia
        modi, molestiae qui laborum sapiente laboriosam quos vero vel. Obcaecati
        blanditiis pariatur saepe deleniti quasi! Tempore praesentium expedita
        accusantium pariatur fugit voluptatibus esse et, sint facere architecto
        dicta libero officia eius perferendis, fugiat aperiam nihil quo ipsam
        atque! Ducimus, nemo. Quia vero quaerat ut non ab.
      </p>
      <hr className="mb-5 mt-2 border-t-2" />
    </div>
  );
};

export default ProductBody;
