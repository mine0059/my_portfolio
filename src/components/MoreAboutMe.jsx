import React, { useEffect} from "react";
import { Menu, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import DownloadResume from "../assets/button (1).svg";
import { viewResume, downloadResume } from "../utils/resume";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import DesktopImage from "../assets/desktop.jpeg";
import Experience from "./Experience";
import MyCapabilities from "./MyCapabilities";
import ContactMe from "./ContactMe";

const MoreAboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-[#0A0A0A] text-[#C7C7C7] min-h-screen text-justify"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

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
              I am a Software Engineer based in Nigeria.
            </h2>

            <p className="text-base md:text-lg text-[#C7C7C7] font-manrope">
              Flutter developer focused on clean architecture, scalable state management, 
           and high-quality mobile experiences. Experienced with Dart, Firebase, BLoC/Riverpod, 
           and Material 3, with backend experience in Node.js, Express, MongoDB, and REST API design.
            </p>

            <div className="flex gap-3 pt-6">
              <button
                type="button"
                onClick={viewResume}
                aria-label="View Resume"
                className="transform transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-105 active:scale-95"
              >
                <img src={DownloadResume} alt="view resume" />
              </button>
              <button
                type="button"
                onClick={downloadResume}
                aria-label="Download Resume"
                className="text-[#D3E97A] underline underline-offset-4 text-sm md:text-base"
              >
                Download
              </button>

              <a
                href="https://www.linkedin.com/in/emmanuelmine/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition duration-300 ease-out hover:scale-110 hover:-rotate-3 active:scale-90"
              >
                <img src={LinkedIn} alt="My LinkedIn" />
              </a>

              <a
                href="https://github.com/mine0059"
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
          <img src={DesktopImage} alt="hero image" className="w-full h-auto" />
        </motion.div>

        <MyCapabilities />
      </div>

      <Experience />
      <ContactMe />
    </motion.div>
  );
};

export default MoreAboutMe;
