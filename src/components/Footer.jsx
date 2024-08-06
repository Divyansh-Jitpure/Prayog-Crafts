import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-fit w-full items-center justify-between bg-[#98D8AA] px-4 sm:px-6">
      {/* Left */}
      <div className="flex items-center sm:hidden">
        <img
          onClick={() => navigate("/")}
          className="w-20 cursor-pointer"
          src="/logo.png"
          alt="logo"
        />
      </div>

      {/* Mobile Left  */}
      <div className="hidden items-center sm:flex">
        <img
          onClick={() => navigate("/")}
          className="w-20 cursor-pointer"
          src="/logo.png"
          alt="logo"
        />
        <span className="mx-4 h-10 border-l-2 border-black"></span>
        <p className="text-gray-500">© 2024 Prayog Crafts — </p>
        <a
          className="ml-1 text-gray-600"
          target="_blank"
          href="https://www.instagram.com/jitpureparas/"
        >
          @Paras Jitpure
        </a>
        <a
          className="ml-1 text-gray-600"
          target="_blank"
          href="https://www.instagram.com/one_djansh/"
        >
          @Divyansh Jitpure
        </a>
        <a
          className="ml-1 text-gray-600"
          target="_blank"
          href="https://www.instagram.com/anshuman_satankar_/"
        >
          @Anshuman Satankar
        </a>
      </div>

      {/* Right */}
      <div className="hidden flex-col items-center sm:flex">
        <button onClick={() => navigate("/terms")}>Terms of Service</button>
      </div>

      {/* Mobile Right */}
      <div className="flex flex-col items-center sm:hidden">
        <p>© 2024 Prayog Crafts</p>
        <button onClick={() => navigate("/terms")}>Terms of Service</button>
      </div>
    </div>
  );
};

export default Footer;
