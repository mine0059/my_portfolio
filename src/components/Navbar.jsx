import React from "react";
import { Link, useLocation } from "react-router-dom";
import MyImage from "../assets/chisom.png";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import Button from "../assets/button.svg";

const Navbar = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="home">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] text-[#C7C7C7] flex justify-between items-center px-14 py-6">
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-bebas text-[32px]"
        >
          CHUKWUMA CHISOM
        </Link>

        <nav className="space-x-6 font-inter font-medium">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="flex flex-col justify-center items-center pt-60 pb-36 border-b border-b-[#484848]">
        <img src={MyImage} alt="My Image" className="mb-8" />

        <h1 className="text-[#FFFFFF] text-[6.3125rem] font-bebas leading-[90%]">
          HI, I AM
        </h1>
        <h1 className="text-[#FFFFFF] text-[6.3125rem] font-bebas leading-[90%]">
          CHUKWUMA CHISOM.
        </h1>

        <p className="text-[#C7C7C7] font-manrope text-lg">
          A Nigeria-based front-end developer passionate about
        </p>
        <p className="text-[#C7C7C7] font-manrope text-lg mb-8">
          building accessible and user friendly web products.
        </p>

        <div className="flex gap-3">
          <a href="mailto:koderblac@gmail.com">
            <img src={Button} alt="Contact Me" />
          </a>

          <a
            href="http://www.linkedin.com/in/chisom-chukwuma-80b033205"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="My LinkedIn" />
          </a>

          <a
            href="https://github.com/CoderBlack25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="My Github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
