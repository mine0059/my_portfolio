import React, { useState } from "react";
import LiveDemo from "../assets/Vector.png";
import GitHubCode from "../assets/Vector (1).png";
import ProjectLink from "./ProjectsLink.jsx";

const IndividualProjects = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(211, 233, 122, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(211, 233, 122, 0.6);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes borderRun {
          0%, 100% {
            border-color: #D3E97A;
          }
          50% {
            border-color: rgba(211, 233, 122, 0.5);
          }
        }

        .project-card {
          animation: fadeInUp 0.8s ease-out;
        }

        .project-image-container {
          animation: slideInLeft 0.8s ease-out;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-image-container:hover {
          transform: scale(1.05) rotate(2deg);
        }

        .project-details {
          animation: slideInRight 0.8s ease-out;
        }

        .project-title {
          color: #ffffff;
          transition: transform 0.3s ease;
        }

        .project-title:hover {
          transform: scale(1.05);
        }

        .info-row {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .info-row::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(211, 233, 122, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .info-row:hover::before {
          left: 100%;
        }

        .info-row:hover {
          transform: translateX(10px);
          border-color: #D3E97A !important;
        }

        .floating-image {
          animation: float 3s ease-in-out infinite;
        }

        .border-animated {
          animation: borderRun 3s linear infinite;
        }

        @media (max-width: 768px) {
          .project-image-container {
            animation: fadeInUp 0.8s ease-out;
          }
        }
      `}</style>

      <div className="project-card flex flex-col gap-16 pt-16 md:flex md:flex-row md:justify-between md:items-center">
        <div
          className="project-image-container border-animated bg-[#1A1A1A] w-[343px] h-[343px]
            sm:w-[400px] sm:h-[400px]
            md:w-[500px] md:h-[500px]
            lg:w-[600px] lg:h-[600px]
            rounded-xl flex justify-center items-center mx-auto md:mx-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={isHovered ? "floating-image" : ""}>
            {props.projectimage}
          </div>
        </div>

        <div className="project-details font-manrope py-10 md:flex-1 md:pl-36 text-justify">
          <h1 className="project-title text-2xl md:text-[2rem] font-medium pb-7">
            {props.projectname}
          </h1>

          <p
            className="text-[#C7C7C7] text-base md:text-lg pb-7 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s forwards" }}
          >
            {props.projectdescription}
          </p>

          <div
            className="border-b border-b-[#484848] opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.3s forwards" }}
          >
            <h2 className="font-semibold text-[#FFFFFF] pb-7">PROJECT INFO</h2>
          </div>

          <div
            className="info-row flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards" }}
          >
            <p>Client</p>
            <p>{props.client}</p>
          </div>

          <div
            className="info-row flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.5s forwards" }}
          >
            <p>Year</p>
            <p>{props.year}</p>
          </div>

          <div
            className="info-row flex justify-between font-medium text-[#C7C7C7] border-b border-b-[#484848] py-7 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards" }}
          >
            <p>Role</p>
            <p>{props.role}</p>
          </div>

          <div
            className="flex gap-6 pt-8 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.7s forwards" }}
          >
            <ProjectLink
              href={props.demoLink}
              text="LIVE DEMO"
              imgSrc={LiveDemo}
              alt="view project demo"
            />
            <ProjectLink
              href={props.githubLink}
              text="SEE ON GITHUB"
              imgSrc={GitHubCode}
              alt="view project code"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjects;
