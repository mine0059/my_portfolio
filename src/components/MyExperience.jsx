import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const MyExperience = ({ position, date, company, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, rotateX: -30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.9,
      }}
      whileHover={{
        scale: 1.03,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.4 },
      }}
      className="space-y-6 bg-[#0F0F0F]/50 p-6 rounded-xl border border-[#1E1E1E] shadow-lg shadow-[#D3E97A]/10"
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <h2 className="text-[#FFFFFF] font-manrope font-medium text-lg md:text-2xl">
          {position}
        </h2>
        <p className="font-manrope text-[#C7C7C7] text-base md:text-lg">
          {date}
        </p>
      </div>

      <p className="text-[#D3E97A] text-base md:text-lg font-manrope font-semibold">
        {company}
      </p>

      <p className="font-manrope text-[#C7C7C7] text-base md:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default MyExperience;
