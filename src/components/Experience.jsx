import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import MyExperience from "./MyExperience";

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="pt-20"
    >
      <div>
        <div className="flex flex-col md:flex md:flex-row py-16 px-6 md:px-24 border-b border-b-[#484848] pb-36 overflow-hidden">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-bebas text-[#FFFFFF] text-[2.6875rem] md:text-[4.75rem] leading-none pb-12"
            >
              MY EXPERIENCE
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-8 flex-1 pl-0 md:pl-64"
          >
            <MyExperience
              position="Software Engineer"
              date="Nov 2024 — Present"
              company="Bluetag Technology"
              description="Work as a Frontend/Mobile developer for bluetag technology, architected a clean state management solution using Bloc for scalable data flow. and implemented modular UI components to enhance code reusability across multiple projects. Collaborated with cross-functional teams to deliver high-quality mobile applications on time."
            />
            <MyExperience
              position="Mobile Developer"
              date="Nov 2025 — DEC 2025"
              company="HNG Tech Internship"
              description="Developed and maintained mobile applications using Flutter, ensuring high performance and responsiveness User-Agent chat for effective collaboration. Implemented state management solutions using Riverpod and provider to handle complex data flows efficiently. Collaborated with designers and backend developers to create seamless user experiences."
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
