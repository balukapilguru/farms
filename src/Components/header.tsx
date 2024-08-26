"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo/color.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

// Define navigation links
const navLinks = [
  {
    href: "/",
    label: "WHO ARE WE",
  },
  {
    href: "https://www.kapilfarms.in/#highlights--nav",
    label: "HIGHLIGHTS",
  },
  {
    href: "https://www.kapilfarms.in/#projects--nav",
    label: "OUR PROJECTS",
  },
  {
    href: "https://www.kapilfarms.in/#contact--nav",
    label: "CONTACT US",
  },
  {
    href: "/familyfarmland",
    label: "FAMILY FARM LAND",
  },
];

// Header component
const Header = () => {
  // State for toggling navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-5">
      {/* Logo */}
      <Image src={logo} alt="Logo" priority className="sm:w-24" />

      {/* Navbar */}
      <nav className="w-75">
        {/* Hamburger icon */}
        <span
          className="lg:hidden md:block sm:block px-5 text-2xl text-green cursor-pointer"
          onClick={toggleNav}
        >
          <FaBars />
        </span>

        {/* Navigation links */}
        <ul
          className={`lg:flex lg:gap-x-10 text-[16px] sm:absolute lg:relative ${
            isNavOpen ? "block" : "hidden"
          } sm:left-0 lg:bg-white sm:bg-green sm:z-50 md:w-42 sm:w-full sm:p-2 sm:mt-5 lg:m-0`}
        >
          {navLinks.map((link) => (
            <li key={link.href} className="sm:text-center sm:m-4 md:m-0 lg:m-0">
              <Link
                href={link.href}
                className="text-[16px] lg:text-green sm:text-white   "
                onClick={toggleNav}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div>
          <li class="text-[16px] lg:text-green sm:text-white sm:text-center lg:text-right md:text-right xl:text-right  sm:m-4 md:m-4 lg:m-0 td ">
            <a class="text-bold" href="tel:+91-9839837280">Call: +91-9839837280</a>
          </li>
          <li class="text-[16px] lg:text-green sm:text-white  sm:text-center sm:m-4 md:m-4 lg:m-0 td">
            <a class="text-bold" href="mailto:marketing@kapilfarms.in">Email: marketing@kapilfarms.in</a>
          </li>
        </div>
      </header>
  );
};

export default Header;
