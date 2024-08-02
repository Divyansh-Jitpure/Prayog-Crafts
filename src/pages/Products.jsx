import React from "react";

const Product = ({ category, item, price, imgSrc }) => {
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/4">
      <a className="block h-48 overflow-hidden rounded">
        <img
          alt="Product"
          className="block h-full w-full object-cover object-center"
          src={
            !imgSrc
              ? "https://dummyimage.com/600x400/000/fff&text=Prayog+Craft"
              : imgSrc
          }
        />
      </a>
      <div className="mt-4">
        <h3 className="title-font mb-1 text-xs tracking-widest text-gray-500">
          {category}
        </h3>
        <h2 className="title-font text-lg font-medium text-gray-900">{item}</h2>
        <p className="mt-1">{price}₹</p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-12">
        <div className="-m-4 flex flex-wrap">
          <Product
            item="ABC"
            category="Art & Crafts"
            price={200}
            imgSrc="/PrayogCraftsHero.jpg"
          />
          <Product
            item="ABC"
            category="Art & Crafts"
            price={210}
            imgSrc="/PrayogCraftsHero.jpg"
          />
          <Product
            item="ABC"
            category="Art & Crafts"
            price={220}
            imgSrc="/PrayogCraftsHero.jpg"
          />
          <Product
            item="ABC"
            category="Art & Crafts"
            price={230}
            imgSrc="/PrayogCraftsHero.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
