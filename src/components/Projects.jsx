import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import IndividualProjects from "./IndividualProjects";
import { featuredProjects } from "../data/projects";

const Projects = () => {
  return (
    <motion.section
      id="works"
      className="pt-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="px-6 md:px-24 py-14 border-b border-b-[#484848] pb-36"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <motion.h1
          className="text-[2.6875rem] pb-4 md:text-[4.75rem] font-bebas text-[#FFFFFF] leading-none"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        >
          FEATURED PROJECTS
        </motion.h1>

        <motion.p
          className="text-base md:text-lg font-manrope text-[#C7C7C7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.25, delayChildren: 1 },
            },
          }}
        >
          {featuredProjects.map((p) => (
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

          {/* View more link placeholder - wire to /projects when page exists */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="/projects"
              className="project-link text-[#D3E97A] font-manrope font-bold underline underline-offset-6"
            >
              View more projects
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
