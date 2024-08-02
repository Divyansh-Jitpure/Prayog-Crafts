import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 flex h-fit w-full items-center justify-between bg-[#98D8AA] px-4 sm:px-8">
      {/* Left "LOGO" */}
      <img className="w-20" src="/logo.png" alt="logo" />
      {/* Right */}
      <div className="hidden items-center sm:flex">
        <Link
          className="mx-3 text-xl font-medium transition-all hover:border-b-4 hover:text-gray-700"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="mx-3 text-xl font-medium transition-all hover:border-b-4 hover:text-gray-700"
          to={"/products"}
        >
          Products
        </Link>
        <Link
          className="mx-3 text-xl font-medium transition-all hover:border-b-4 hover:text-gray-700"
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="mx-3 text-xl font-medium transition-all hover:border-b-4 hover:text-gray-700"
          to={"/ourteam"}
        >
          Our Team
        </Link>
      </div>

      <div className="flex items-center">
        {/* Contact Btn */}
        <button className="flex h-fit items-center rounded-lg bg-gray-100 px-3 py-1 font-medium hover:bg-gray-200">
          Contacts
          <FaArrowRight className="ml-2" />
        </button>

        {/* Menu Btn*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ml-2 p-1 transition-all hover:rounded-full hover:text-gray-700 active:bg-slate-50 sm:hidden sm:hover:bg-slate-50"
        >
          <IoMenu className="text-4xl" />
        </button>
      </div>
      {/* SubMenu */}
      <div
        className={`${isOpen ? "flex" : "hidden"} absolute right-0 top-20 w-full rounded-b-lg bg-[#98D8AA] py-3 sm:hidden`}
      >
        {/* SubMenu Links */}
        <div className="flex w-full flex-col items-center justify-center sm:hidden">
          <Link
            className="mx-3 w-full p-2 text-center text-xl font-medium transition-all hover:bg-[#55dc7b] hover:text-gray-700 active:bg-[#55dc7b]"
            to={"/"}
            onClick={() => setIsOpen(false)} // Close submenu on link click
          >
            Home
          </Link>
          <Link
            className="mx-3 w-full p-2 text-center text-xl font-medium transition-all hover:bg-[#55dc7b] hover:text-gray-700 active:bg-[#55dc7b]"
            to={"/products"}
            onClick={() => setIsOpen(false)} // Close submenu on link click
          >
            Products
          </Link>
          <Link
            className="mx-3 w-full p-2 text-center text-xl font-medium transition-all hover:bg-[#55dc7b] hover:text-gray-700 active:bg-[#55dc7b]"
            to={"/about"}
            onClick={() => setIsOpen(false)} // Close submenu on link click
          >
            About
          </Link>
          <Link
            className="mx-3 w-full p-2 text-center text-xl font-medium transition-all hover:bg-[#55dc7b] hover:text-gray-700 active:bg-[#55dc7b]"
            to={"/ourteam"}
            onClick={() => setIsOpen(false)} // Close submenu on link click
          >
            Our Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
