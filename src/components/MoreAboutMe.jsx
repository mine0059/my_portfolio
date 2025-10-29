import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import DownloadResume from "../assets/button (1).svg";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import HeroImage from "../assets/image (21).png";
import Experience from "./Experience";
import MyCapabilities from "./MyCapabilities";
import ContactMe from "./ContactMe";

const MoreAboutMe = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavClick = (sectionId) => {
    navigate("/");
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.div
      className="bg-[#0A0A0A] text-[#C7C7C7] min-h-screen text-justify"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] px-6 md:px-14 py-6 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bebas text-[28px] md:text-[32px] text-white"
        >
          KODERBLAC
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <div className="flex flex-col justify-between w-6 h-3">
              <span className="block h-0.5 bg-white rounded"></span>
              <span className="block h-0.5 bg-white rounded"></span>
            </div>
          )}
        </button>

        <nav className="hidden md:flex space-x-6 font-inter font-medium">
          <button
            onClick={() => handleNavClick("#work")}
            className="cursor-pointer hover:text-white"
          >
            Work
          </button>
          <button
            onClick={() => handleNavClick("#about")}
            className="cursor-pointer hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="cursor-pointer hover:text-white"
          >
            Contact
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[72px] left-0 w-full bg-[#0A0A0A] text-[#C7C7C7] flex flex-col items-start px-6 py-4 space-y-4 font-inter font-medium border-t border-[#484848] z-40"
          >
            <button
              onClick={() => handleNavClick("#work")}
              className="cursor-pointer hover:text-white"
            >
              Work
            </button>
            <button
              onClick={() => handleNavClick("#about")}
              className="cursor-pointer hover:text-white"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="cursor-pointer hover:text-white"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="px-6 md:px-12 pt-40 border-b border-b-[#484848]">
        <motion.div
          className="flex flex-col md:flex-row pb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex-1">
            <h1 className="text-[3.5rem] md:text-[6.3125rem] pb-4 text-[#FFFFFF] font-bebas leading-none">
              About me
            </h1>
          </div>

          <div className="flex flex-col flex-1 space-y-6">
            <h2 className="text-[1.5rem] md:text-[2rem] text-[#FFFFFF] font-manrope font-medium">
              I am a front-end developer based in Nigeria and have a
              Biochemistry background.
            </h2>

            <p className="text-base md:text-lg text-[#C7C7C7] font-manrope">
              I am a front-end developer based in Nigeria looking for exciting
              opportunities. I have a Biochemistry background and like to focus
              on proper design execution and accessibility when developing.
              Passionate and curious about solving problems. Currently, I'm
              exploring React, Webflow, Framer, and a bit of Python. While I am
              not programming, I enjoy watching movies, reading, and exploring
              the Web3 space to improve my skills.
            </p>

            <div className="flex gap-3 pt-6">
              <a
                href=""
                className="transform transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95"
              >
                <img src={DownloadResume} alt="download resume" />
              </a>

              <a
                href="http://www.linkedin.com/in/chisom-chukwuma-80b033205"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-300 ease-out hover:scale-110 hover:-rotate-3 active:scale-90"
              >
                <img src={LinkedIn} alt="My LinkedIn" />
              </a>

              <a
                href="https://github.com/CoderBlack25"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-300 ease-out hover:scale-110 hover:-rotate-3 active:scale-90"
              >
                <img src={GitHub} alt="My Github" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center pb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img src={HeroImage} alt="hero image" className="w-full h-auto" />
        </motion.div>

        <MyCapabilities />
      </div>

      <Experience />
      <ContactMe />
    </motion.div>
  );
};

export default MoreAboutMe;
