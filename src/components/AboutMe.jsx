import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="pt-20">
      <motion.div
        className="px-6 md:px-24 py-14 border-b border-b-[#484848] md:flex pb-36"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="md:flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-bebas text-[#FFFFFF] text-[2.6875rem] pb-4 md:text-[4.75rem] leading-none">
            ABOUT ME
          </h1>
        </motion.div>

        <motion.div
          className="md:flex-1 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-manrope text-[#FFFFFF] text-2xl md:text-[2rem] font-medium text-justify"
          >
            I am a front-end developer based in Nigeria and have a Biochemistry
            background.
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-manrope text-[#C7C7C7] text-base md:text-lg text-justify"
          >
            I am a front-end developer based in Nigeria looking for exciting
            opportunities. Has Biochemistry background. Likes to focus on proper
            design execution and accessibility when developing. Passionate and
            curious about solving problems. Currently, I'm exploring React,
            Webflow, Framer and a bit of Python. While I am not programming, I
            enjoy watching Movies, Reading and Exploring the Web3 Space.
            Learning more to improve skill.
          </motion.p>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-manrope text-[#FFFFFF] text-2xl md:text-[2rem] font-medium"
          >
            My Capabilities
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-manrope text-[#C7C7C7] text-base md:text-lg text-justify"
          >
            I am always looking to add more skills. Morbi egestas neque eu
            blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
            purus faucibus tristique ut et dolor.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[
              "HTML",
              "CSS",
              "JAVASCRIPT",
              "REACT",
              "FIGMA",
              "TAILWIND CSS",
            ].map((tech) => (
              <motion.button
                key={tech}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05, borderColor: "#d3e97a" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-[#ffffff] font-manrope font-bold rounded-[6.25rem] border border-[#484848] px-6 py-4 text-sm md:px-10 md:py-5 md:text-base"
              >
                {tech}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              whileHover={{
                scaleX: 1.05,
                originX: 0,
                color: "#e4ff83",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to="/more-about-me"
                className="text-[#D3E97A] font-manrope font-bold underline underline-offset-6 text-sm md:text-base"
              >
                MORE ABOUT ME
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
