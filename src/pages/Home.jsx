import React from "react";
const Home = () => {
  return (
    <>
      <section class="body-font text-gray-600">
        <div class="container mx-auto flex flex-col items-center px-5 pt-28 md:flex-row">
          <div class="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
            <img
              class="rounded object-cover object-center"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div class="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h1 class="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex items-center rounded border-0 bg-red-500 px-6 py-2 text-lg text-white hover:bg-red-600 focus:outline-none">
                Products
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-1 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
