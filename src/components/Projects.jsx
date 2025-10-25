import React from "react";
import IndividualProjects from "./IndividualProjects";
import ProjectImage1 from "../assets/work.png";
import ProjectImage2 from "../assets/image 10.png";
import ProjectImage3 from "../assets/image 9.png";

const Projects = () => {
  return (
    <section id="work" className="pt-24">
      <div className="px-24 py-14 border-b border-b-[#484848] pb-36">
        <h1 className="text-[76px] font-bebas text-[#FFFFFF] leading-none">
          FEATURED PROJECTS
        </h1>

        <p className="text-lg font-manrope text-[#C7C7C7]">
          Here are some of the selected projects that showcase my passion for
        </p>

        <p className="text-lg font-manrope text-[#C7C7C7]">
          front-end development.
        </p>

        <div>
          <IndividualProjects
            projectname="Promotional landing page for our favorite show"
            projectdescription="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures."
            client="WarnerMedia"
            year="2023"
            role="Front-end Developer"
            projectimage={<img src={ProjectImage1} alt="Project 1" />}
          />

          <IndividualProjects
            projectname="Blog site for World News"
            projectdescription="Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development."
            client="World News"
            year="2022"
            role="Front-end Developer"
            projectimage={<img src={ProjectImage2} alt="Project 2" />}
          />

          <IndividualProjects
            projectname="E-commerce product page"
            projectdescription="Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development."
            client="E-commerce"
            year="2022"
            role="Front-end Developer"
            projectimage={<img src={ProjectImage3} alt="Project 3" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
