import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-12 md:flex-row">
        <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src="/PrayogCraftsHero.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
            Discover the Future of Learning with Our Science Kits!
          </h1>
          <p className="mb-8 leading-relaxed">
            Unlock the world of science and technology with our innovative DIY
            project kits! Each kit is meticulously crafted to provide hands-on
            experience and deep understanding in fields like physics,
            electronics, and more. Whether you're a curious beginner or an
            advanced enthusiast, our kits are designed to spark creativity and
            foster a love for learning.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/products")}
              className="inline-flex items-center rounded border-0 bg-red-500 px-4 py-2 text-lg text-white hover:bg-red-600 focus:outline-none"
            >
              Button
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
