import React from "react";

const Product = ({ category, item, price, imgSrc }) => {
  return (
    <div class="w-full p-4 md:w-1/2 lg:w-1/4">
      <a class="block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          class="block h-full w-full object-cover object-center"
          src={!imgSrc ? "https://dummyimage.com/420x260" : imgSrc}
        />
      </a>
      <div class="mt-4">
        <h3 class="title-font mb-1 text-xs tracking-widest text-gray-500">
          {category}
        </h3>
        <h2 class="title-font text-lg font-medium text-gray-900">{item}</h2>
        <p class="mt-1">{price}₹</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section class="body-font text-gray-600">
      <div class="container mx-auto px-5 py-12">
        <div class="-m-4 flex flex-wrap">
          <Product
            item="ABC"
            category="Crafts"
            price={200}
            imgSrc="/PrayogCraftsHero.jpg"
          />
          <Product
            item="ABC"
            category="Crafts"
            price={210}
            imgSrc="/PrayogCraftsHero.jpg"
          />
          <Product
            item="ABC"
            category="Crafts"
            price={220}
            imgSrc="/PrayogCraftsHero.jpg"
          />
          <Product
            item="ABC"
            category="Crafts"
            price={230}
            imgSrc="/PrayogCraftsHero.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
