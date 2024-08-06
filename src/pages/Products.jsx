import React from "react";
import { ProductData } from "../ProductData";
import { useNavigate } from "react-router-dom";

const Product = ({ category, item, price, imgSrc, itemKey }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/products/" + item, { state: itemKey + 1 })}
      className="w-full cursor-pointer p-4 md:w-1/2 lg:w-1/4"
    >
      <div className="block h-48 overflow-hidden rounded">
        <img
          alt="Product"
          className="block h-full w-full object-cover object-center"
          src={
            !imgSrc
              ? "https://dummyimage.com/600x400/000/fff&text=Prayog+Craft"
              : imgSrc
          }
        />
      </div>
      <div className="mt-4">
        <h3 className="title-font text-xs text-gray-500">{category}</h3>
        <h2 className="title-font text-xl font-medium text-gray-900">{item}</h2>
        <p className="flex text-xl font-medium">
          ₹ {ProductData[itemKey].price}
          <span className="ml text-sm font-extralight text-blue-700">
            {ProductData[itemKey].discount}% off
          </span>
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-12">
        <div className="-m-4 flex flex-wrap">
          {ProductData.map((product, index) => {
            return (
              <Product
                key={index}
                itemKey={index}
                item={product.item}
                category={product.category}
                price={product.price}
                imgSrc={product.imgSrc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
