import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="body-font sticky top-0 bg-[#98D8AA] text-gray-600">
      <div className="container mx-auto flex w-full items-center justify-between">
        <a className="title-font mb-4 ml-4 flex items-center font-medium text-gray-900 md:mb-0">
          <img
            className="h-[70px] w-[70px]"
            src="/logoTransparent.png"
            alt="logo"
          />
          {/* <span className="ml-3 text-xl">Tailblocks</span> */}
        </a>

        <nav
          className={
            !isOpen
              ? "absolute left-0 top-[-300%] flex min-h-[30vh] w-full flex-col items-center justify-around bg-[#98D8AA] text-base md:static md:ml-auto md:mr-auto md:min-h-fit md:w-auto md:flex-row md:bg-transparent"
              : "absolute left-0 top-[100%] flex min-h-[20vh] w-full flex-col items-center justify-around bg-[#98D8AA] text-base md:static md:ml-auto md:mr-auto md:min-h-fit md:w-auto md:flex-row md:bg-transparent"
          }
        >
          <Link to={"/"} className="text-xl hover:text-gray-900 md:mr-5">
            Home
          </Link>
          <Link
            to={"/products"}
            className="text-xl hover:text-gray-900 md:mr-5"
          >
            Products
          </Link>
          <Link to={"/about"} className="text-xl hover:text-gray-900 md:mr-5">
            About
          </Link>
        </nav>

        <div className="flex items-center">
          <button className="mr-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0">
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
          </button>{" "}
          <button onClick={handleMenu} className="mr-4">
            <IoMenu className="text-4xl md:hidden" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
