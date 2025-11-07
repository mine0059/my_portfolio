import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import MyImage from "../assets/chisom.png";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import Button from "../assets/button.svg";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <section id="home">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] text-[#C7C7C7] flex justify-between items-center px-6 md:px-14 py-6"
      >
        <Link
          to="/"
          onClick={handleHomeClick}
          className="font-bebas text-[1.75rem] md:text-[2rem]"
        >
          KODERBLAC
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <div className="relative w-6 h-6 transition-all duration-500 ease-in-out">
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45 transition-all duration-500 ease-in-out"></span>
              <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45 transition-all duration-500 ease-in-out"></span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center space-y-2 transition-all duration-500 ease-in-out">
              <span className="block w-6 h-0.5 bg-white rounded"></span>
              <span className="block w-6 h-0.5 bg-white rounded"></span>
            </div>
          )}
        </button>

        <nav className="hidden md:flex space-x-6 font-inter font-medium">
          <a href="#work" onClick={handleNavClick}>
            Work
          </a>
          <a href="#about" onClick={handleNavClick}>
            About
          </a>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </nav>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-[#0A0A0A] text-[#C7C7C7] flex flex-col items-start px-6 py-4 space-y-4 font-inter font-medium border-t border-[#484848] z-40"
          >
            {["Work", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i, type: "spring", stiffness: 200 }}
                whileHover={{ x: 5 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex flex-col justify-center items-center pt-60 pb-36 border-b border-b-[#484848] px-0 md:px-6 text-center"
      >
        <motion.img
          src={MyImage}
          alt="My Image"
          className="mb-8 w-19.25 md:w-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1
          className="text-[#FFFFFF] text-[3.5625rem] md:text-[6.3125rem] font-bebas leading-[90%]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          HI, I AM
        </motion.h1>

        <motion.h1
          className="text-[#FFFFFF] text-[3.5625rem] md:text-[6.3125rem] font-bebas leading-[90%]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          KODERBLAC.
        </motion.h1>

        <motion.div
          className="text-[#C7C7C7] font-manrope text-base md:text-lg my-2 md:my-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            A Nigeria-based front-end developer passionate about <br />
            building accessible and user friendly web products.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-3 flex-wrap justify-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.a
              href="mailto:koderblac@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={Button}
                alt="Contact Me"
                className="w-[130px] md:w-auto"
              />
            </motion.a>

            <motion.a
              href="http://www.linkedin.com/in/chisom-chukwuma-80b033205"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <img
                src={LinkedIn}
                alt="My LinkedIn"
                className="w-10 md:w-auto"
              />
            </motion.a>

            <motion.a
              href="https://github.com/CoderBlack25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <img src={GitHub} alt="My Github" className="w-10 md:w-auto" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Navbar;
