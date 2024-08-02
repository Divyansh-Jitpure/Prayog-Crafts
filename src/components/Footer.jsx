import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-fit w-full items-center justify-between bg-[#98D8AA] px-4">
      {/* Left  */}
      <img
        onClick={() => navigate("/")}
        className="w-20 cursor-pointer"
        src="/logo.png"
        alt="logo"
      />
      {/* Right */}
      <div className="flex flex-col items-center">
        <p>© 2024 Prayog Crafts</p>
        <button onClick={() => navigate("/terms")}>Terms of Service</button>
      </div>
    </div>
  );
};

export default Footer;
