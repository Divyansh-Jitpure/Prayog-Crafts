import React from "react";

const Product = () => {
  return (
    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
      <a class="block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          class="block h-full w-full object-cover object-center"
          src="https://dummyimage.com/420x260"
        />
      </a>
      <div class="mt-4">
        <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
          CATEGORY
        </h3>
        <h2 class="title-font text-lg font-medium text-gray-900">
          The Catalyzer
        </h2>
        <p class="mt-1">$16.00</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section class="body-font text-gray-600">
      <div class="container mx-auto px-5 pt-28">
        <div class="-m-4 flex flex-wrap">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
