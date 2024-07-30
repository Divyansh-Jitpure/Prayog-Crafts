import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div class="container mx-auto flex flex-col items-center px-5 py-12 md:flex-row">
      {/* Hreo Left Section */}
      <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
        <img
          class="rounded-lg object-cover object-center"
          alt="hero"
          src="/PrayogCraftsHero.jpg"
        />
      </div>
      {/* Hreo Right Section */}
      <div class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
        {/* Hero Title */}
        <h1 class="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
          Discover the Future of Learning with Our Science Kits!
        </h1>
        {/* Hero Paragraph */}
        <p class="mb-8 leading-relaxed">
          Unlock the world of science and technology with our innovative DIY
          project kits! Each kit is meticulously crafted to provide hands-on
          experience and deep understanding in fields like physics, electronics,
          and more. Whether you're a curious beginner or an advanced enthusiast,
          our kits are designed to spark creativity and foster a love for
          learning.
        </p>
        {/* Button to Products */}
        <div class="flex justify-center">
          <button
            onClick={() => navigate("/products")}
            class="inline-flex items-center rounded border-0 bg-red-500 px-4 py-2 text-lg text-white hover:bg-red-600 focus:outline-none"
          >
            Products
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
