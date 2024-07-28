import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="body-font text-gray-600">
      <div className="top-0 mx-auto flex w-full flex-col flex-wrap items-center bg-white md:fixed md:flex-row">
        <a className="title-font mb-4 ml-4 flex items-center font-medium text-gray-900 md:mb-0">
          <img className="h-[70px] w-[70px]" src="/logo.png" alt="logo" />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link to={"/"} className="mr-5 text-xl hover:text-gray-900">
            Home
          </Link>
          <Link to={"/products"} className="mr-5 text-xl hover:text-gray-900">
            Products
          </Link>
          <Link to={"/about"} className="mr-5 text-xl hover:text-gray-900">
            About
          </Link>
        </nav>
        <button className="mr-4 mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
          Contacts
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
    </header>
  );
};

export default Navbar;
