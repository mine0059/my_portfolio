import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MyCapabilities = () => {
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div>
        <motion.div
          className="flex flex-col md:flex md:flex-row px-0 md:px-12 pb-30"
          variants={container}
        >
          <motion.div className="flex-1" variants={item}>
            <h1 className="font-bebas text-[#FFFFFF] text-[2.6875rem] md:text-[4.75rem] leading-none pb-6">
              MY TECH STACK
            </h1>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 flex-1 pl-0 md:pl-64"
            variants={container}
          >
            <motion.p
              className="font-manrope text-[#C7C7C7] text-base md:text-lg"
              variants={item}
            >
              I am always looking to add more skills. Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={container}
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MyCapabilities;
