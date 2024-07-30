import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ title, place, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col py-2">
      <div
        onClick={toggleAccordion}
        className={
          place === "top"
            ? "mx-auto w-fit cursor-pointer list-none rounded-lg border-b-4 border-[#FF6D60] px-3 text-2xl font-medium"
            : "hidden"
        }
      >
        {title}
      </div>
      <div
        ref={contentRef}
        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="mx-auto w-1/2 py-4">{content}</p>
      </div>
      <div
        onClick={toggleAccordion}
        className={
          place === "bottom"
            ? "mx-auto w-fit cursor-pointer list-none rounded-lg border-b-4 border-black px-3 py-1 text-2xl font-medium"
            : "hidden"
        }
      >
        {title}
      </div>
    </div>
  );
};

export default Accordion;
