import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="mx-4 my-4 flex flex-col items-center text-center md:mx-auto md:w-1/2">
      <FaQuoteRight className="h-8 w-8 text-gray-400" />
      <h2 className="my-2 text-2xl font-medium">
        Empowering Minds through Hands-On Learning
      </h2>
      <p className="text-lg text-gray-500">
        At PRAYOG CRAFTS, we believe in the power of curiosity and creativity.
        Our mission is to provide high-quality, innovative DIY science and
        electronics kits that make learning fun and accessible for everyone.
        Each kit is thoughtfully designed by our team of experts to ignite a
        passion for science and technology, encouraging exploration and
        discovery. <br />
        <br /> Our journey began with a simple idea: to create educational tools
        that inspire and educate. Today, we offer a wide range of kits that
        cater to various interests and skill levels, from basic circuit building
        to advanced physics experiments. We are committed to providing excellent
        customer support and continuously expanding our product line to include
        the latest advancements in science and technology.
      </p>
      <span className="my-2 inline-block h-1 w-10 rounded bg-[#FF6D60]"></span>
      <h2 className="text-lg font-medium tracking-wider">Paras Jitpure</h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  );
};

export default About;
