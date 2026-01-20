import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LinkedInLogo from "../assets/bxl-linkedin.svg.svg";
import GithubLogo from "../assets/bxl-github.svg (1).svg";
import Twitter from "../assets/bxl-linkedin.svg (1).svg";
import Instagram from "../assets/bxl-instagram.svg.svg";
import Form from "./Form.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ContactMe = () => {
  return (
    <section id="contact" className="pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="px-6 md:px-24 py-14 md:flex"
      >
        <motion.div
          variants={fadeUp}
          className="flex flex-col flex-1 space-y-4 md:space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="font-bebas text-[2.6875rem] pb-4 md:text-[4.75rem] text-[#FFFFFF] leading-none"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-manrope text-base md:text-lg text-[#C7C7C7]"
          >
            Say hello at{" "}
            <motion.div
              className="inline-block"
              whileHover={{
                scaleX: 1.05,
                originX: 0,
                color: "#e4ff83",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {" "}
              <a
                href="mailto:koderblac@gmail.com"
                className="text-[#FFFFFF] underline underline-offset-6 decoration-[#D3E97A]"
              >
                oghenemineemma@gmail.com
              </a>
            </motion.div>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-manrope text-base md:text-lg text-[#C7C7C7]"
          >
            For more info, here's my{" "}
            <motion.div
              className="inline-flex items-center gap-3"
              whileHover={{ scale: 1.02, originX: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFFFFF] underline underline-offset-6 decoration-[#D3E97A]"
                aria-label="View Resume"
              >
                view resume
              </a>
              <button
                type="button"
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/resume.pdf';
                  a.download = 'Oghenemine_Resume.pdf';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="text-[#D3E97A] text-sm underline underline-offset-4"
                aria-label="Download Resume"
              >
                download
              </button>
            </motion.div>
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-9 md:gap-6 pt-10">
            {[
              {
                href: "https://www.linkedin.com/in/emmanuelmine/",
                img: LinkedInLogo,
                alt: "LinkedIn",
              },
              {
                href: "https://github.com/mine0059",
                img: GithubLogo,
                alt: "GitHub",
              },
              {
                href: "https://x.com/Ommanuel_",
                img: Twitter,
                alt: "Twitter",
              },
              {
                href: "#",
                img: Instagram,
                alt: "Instagram",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={social.img} alt={social.alt} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Form />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-[#C7C7C7] font-manrope pl-6 md:pl-24 py-20 text-left">
          © 2025 Emmanuel Mine. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactMe;
