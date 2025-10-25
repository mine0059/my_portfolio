import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadResume from "../assets/button (1).svg";
import LinkedIn from "../assets/Frame 3.svg";
import GitHub from "../assets/Frame 4.svg";
import HeroImage from "../assets/image (21).png";
import Experience from "./Experience";
import MyCapabilities from "./MyCapabilities";
import ContactMe from "./ContactMe";

const MoreAboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#C7C7C7] min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] px-14 py-6 flex justify-between items-center">
        <Link to="/" className="font-bebas text-[32px]">
          CHUKWUMA CHISOM
        </Link>

        <nav className="space-x-6 font-inter font-medium">
          <a href="#stack">Tech Stack</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className="px-12 pt-40 border-b border-b-[#484848]">
        <div className="flex pb-20">
          <div className="flex-[1]">
            <h1 className="text-[6.3125rem] text-[#FFFFFF] font-bebas leading-none">
              About me
            </h1>
          </div>

          <div className="flex flex-col flex-[1] space-y-6">
            <h2 className="text-[2rem] text-[#FFFFFF] font-manrope font-medium">
              I am a front-end developer based in Nigeria and have a
              Biochemistry background.
            </h2>

            <p className="text-lg text-[#C7C7C7] font-manrope">
              I am a front-end developer based in Nigeria looking for exciting
              opportunities. I have a Biochemistry background and like to focus
              on proper design execution and accessibility when developing.
              Passionate and curious about solving problems. Currently, I'm
              exploring React, Webflow, Framer, and a bit of Python. While I am
              not programming, I enjoy watching movies, reading, and exploring
              the Web3 space to improve my skills.
            </p>

            <div className="flex gap-3 pt-6">
              <a href="">
                <img src={DownloadResume} alt="download resume" />
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
        </div>

        <div className="flex justify-center items-center pb-24">
          <img src={HeroImage} alt="hero image" className="w-full h-auto" />
        </div>

        <MyCapabilities />
      </div>

      <Experience />
      <ContactMe />
    </div>
  );
};

export default MoreAboutMe;
