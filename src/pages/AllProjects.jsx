import React from "react";
import { motion } from "framer-motion";
import IndividualProjects from "../components/IndividualProjects";
import { allProjects } from "../data/projects";

const AllProjects = () => {
  return (
    <motion.section
      className="pt-28 px-6 md:px-24 pb-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-[2.6875rem] pb-4 md:text-[4.75rem] font-bebas text-[#FFFFFF] leading-none"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
      >
        ALL PROJECTS
      </motion.h1>

      <motion.p
        className="text-base md:text-lg font-manrope text-[#C7C7C7]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        A complete collection of projects with mobile-focused screenshots and details.
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.25, delayChildren: 0.6 },
          },
        }}
      >
        {allProjects.map((p) => (
          <motion.div
            key={p.key}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          >
            <IndividualProjects
              projectname={p.projectname}
              projectdescription={p.projectdescription}
              projectimages={p.images}
              tools={p.tools}
              demoLink={p.demoLink}
              githubLink={p.githubLink}
              autoplay
              autoplayInterval={3500}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AllProjects;
