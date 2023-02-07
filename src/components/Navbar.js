import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] z-[99999999] flex justify-between items-center px-6  bg-[#f8f8f8] text-[#595959]">
      <div>
        <a href="/">
          <img
            src="./images/main-logo.png"
            alt="Internation Student Ally"
            className="h-[85px] mt-4"
          />
        </a>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/schools">Schools</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 mr-4 mt-5">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center"
        }
      >
        {/* <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="/">
            Home
          </Link>
        </li> */}
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="/about">
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link
            onClick={handleClick}
            to="/services"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="/schools">
            Schools
          </Link>
        </li>
        <li className="py-6 text-2xl">
          {" "}
          <Link onClick={handleClick} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
