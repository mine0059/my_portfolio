import React from "react";

const ProjectLink = ({ href, text, imgSrc, alt }) => {
  return (
    <>
      <style>{`
        @keyframes slideRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes underlineExpand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .project-link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #D3E97A;
          transition: width 0.4s ease;
        }

        .project-link:hover::before {
          width: 100%;
        }

        .project-link:hover {
          transform: translateY(-3px);
          text-shadow: 0 0 20px rgba(211, 233, 122, 0.5);
        }

        .project-link:hover .link-icon {
          animation: slideRight 0.6s ease-in-out infinite;
        }

        .project-link:hover .link-text {
          animation: pulse 1s ease-in-out infinite;
        }

        .link-icon {
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 8px rgba(211, 233, 122, 0.6));
        }

        .project-link:active {
          transform: translateY(-1px) scale(0.98);
        }
      `}</style>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link flex justify-center items-center text-[#D3E97A] font-manrope font-bold underline underline-offset-6 gap-1.5 text-sm md:text-base"
      >
        <h2 className="link-text">{text}</h2>
        <img src={imgSrc} alt={alt} className="link-icon w-3 md:w-auto" />
      </a>
    </>
  );
};

export default ProjectLink;
