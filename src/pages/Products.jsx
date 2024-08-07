import React from "react";
import { ProductData } from "../ProductData";
import Product from "../components/Product";

const Products = () => {
  return (
    <section className="body-font flex flex-col items-center text-gray-600">
      <h1 className="my-4 text-4xl font-medium">Products</h1>
      <div className="container mx-auto mb-6 flex flex-wrap px-5">
        {ProductData.map((product, index) => {
          return <Product key={index} itemKey={index} />;
        })}
      </div>
    </section>
  );
};

export default Products;
