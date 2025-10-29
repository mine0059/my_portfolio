import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import IndividualProjects from "./IndividualProjects";
import ProjectImage1 from "../assets/work.png";
import ProjectImage2 from "../assets/image 10.png";
import ProjectImage3 from "../assets/image 9.png";

const Projects = () => {
  return (
    <motion.section
      id="work"
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
        </motion.p>

        <motion.p
          className="text-base md:text-lg font-manrope text-[#C7C7C7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <IndividualProjects
              projectname="Promotional landing page for our favorite show"
              projectdescription="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."
              client="WarnerMedia"
              year="2023"
              role="Front-end Developer"
              projectimage={
                <img
                  src={ProjectImage1}
                  alt="Project 1"
                  className="max-w-full max-h-full object-contain"
                />
              }
              demoLink="https://zeefas.com/"
              githubLink="https://sedo.com/us/"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <IndividualProjects
              projectname="Blog site for World News"
              projectdescription="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development."
              client="World News"
              year="2022"
              role="Front-end Developer"
              projectimage={
                <img
                  src={ProjectImage2}
                  alt="Project 2"
                  className="max-w-full max-h-full object-contain"
                />
              }
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <IndividualProjects
              projectname="E-commerce product page"
              projectdescription="Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development."
              client="E-commerce"
              year="2022"
              role="Front-end Developer"
              projectimage={
                <img
                  src={ProjectImage3}
                  alt="Project 3"
                  className="max-w-full max-h-full object-contain"
                />
              }
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
