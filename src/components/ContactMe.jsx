import React from "react";
import LinkedInLogo from "../assets/bxl-linkedin.svg.svg";
import GithubLogo from "../assets/bxl-github.svg.svg";
import Twitter from "../assets/bxl-linkedin.svg (1).svg";
import Instagram from "../assets/bxl-instagram.svg.svg";
import Form from "./Form.jsx";

const ContactMe = () => {
  return (
    <section id="contact" className="pt-24">
      <div>
        <div className="px-24 py-14 border-b flex">
          <div className="flex flex-col justify-between flex-1">
            <div>
              <h1 className="font-bebas text-[4.75rem] text-[#FFFFFF] leading-none">
                LET'S CONNECT
              </h1>

              <p className="font-manrope text-lg text-[#C7C7C7]">
                Say hello at {""}
                <a
                  href="#"
                  className="text-[#FFFFFF] underline underline-offset-6 decoration-[#D3E97A]"
                >
                  koderblac@gmail.com
                </a>
              </p>

              <p className="font-manrope text-lg text-[#C7C7C7]">
                For more info, here's my{" "}
                <a
                  href="#"
                  className="text-[#FFFFFF] underline underline-offset-6 decoration-[#D3E97A]"
                >
                  resume
                </a>
              </p>

              <div className="flex gap-6 pt-10">
                <a
                  href="http://www.linkedin.com/in/chisom-chukwuma-80b033205"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedInLogo} alt="" />
                </a>

                <a
                  href="https://github.com/CoderBlack25"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={GithubLogo} alt="" />
                </a>

                <a
                  href="https://x.com/koder_blac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Twitter} alt="" />
                </a>

                <a
                  href="https://www.instagram.com/koder_blac/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Instagram} alt="" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-[#C7C7C7] font-manrope ">
                © 2025 Chukwuma Chisom
              </p>
            </div>
          </div>

          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
