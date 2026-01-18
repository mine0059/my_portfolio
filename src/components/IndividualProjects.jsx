import React, { useEffect, useRef, useState } from "react";
import LiveDemo from "../assets/Vector.png";
import GitHubCode from "../assets/Vector (1).png";
import ProjectLink from "./ProjectsLink.jsx";

const IndividualProjects = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const images = Array.isArray(props.projectimages) && props.projectimages.length > 0 ? props.projectimages : [];
  const slideCount = images.length;

  const startAutoplay = () => {
    if (props.autoplay === false || slideCount <= 1) return;
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, props.autoplayInterval || 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideCount]);

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
          transform: scale(1.02);
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
          className="project-image-container border-animated bg-[#1A1A1A] w-full max-w-[343px] h-[343px]
            sm:max-w-[400px] sm:h-[400px]
            md:max-w-[500px] md:h-[500px]
            lg:max-w-[600px] lg:h-[600px]
            rounded-xl flex justify-center items-center mx-auto md:mx-0 overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={stopAutoplay}
          onBlur={startAutoplay}
        >
          {slideCount > 0 ? (
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0 flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {images.map((img, idx) => (
                  <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center p-6">
                    <img
                      src={img.src}
                      alt={img.alt || `${props.projectname} image ${idx + 1}`}
                      className="max-w-full max-h-full object-contain"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                aria-label="Previous slide"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#0F0F0F]/70 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A]/90 transition"
                onClick={() => setCurrent((prev) => (prev - 1 + slideCount) % slideCount)}
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next slide"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0F0F0F]/70 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A]/90 transition"
                onClick={() => setCurrent((prev) => (prev + 1) % slideCount)}
              >
                ›
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrent(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition ${current === idx ? "bg-[#D3E97A]" : "bg-[#484848]"}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className={isHovered ? "floating-image" : ""}>{props.projectimage}</div>
          )}
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
            <h2 className="font-semibold text-[#FFFFFF] pb-7">TOOLS USED</h2>
          </div>

          <div
            className="flex flex-wrap gap-3 py-7 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards" }}
          >
            {(props.tools || []).map((tool, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#484848] text-[#C7C7C7] text-sm hover:border-[#D3E97A] hover:text-white transition"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D3E97A]"></span>
                {tool}
              </span>
            ))}
          </div>

          <div
            className="flex gap-6 pt-2 opacity-0"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards" }}
          >
            {props.demoLink && (
              <ProjectLink
                href={props.demoLink}
                text="LIVE DEMO"
                imgSrc={LiveDemo}
                alt="view project demo"
              />
            )}
            {props.githubLink && (
              <ProjectLink
                href={props.githubLink}
                text="SEE ON GITHUB"
                imgSrc={GitHubCode}
                alt="view project code"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualProjects;
