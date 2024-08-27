"use client";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="bg-green fixed right-5 bottom-5 w-10 h-10 text-white rounded-full flex justify-center items-center text-3xl"
          onClick={scrollToTop}
        >
          <MdKeyboardDoubleArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
