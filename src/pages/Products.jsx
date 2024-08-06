import React from "react";
import { ProductData } from "../ProductData";
import Product from "../components/Product";

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
