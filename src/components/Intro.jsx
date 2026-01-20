import React, {useState, useEffect} from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import LinkedInLogo from "../assets/bxl-linkedin.svg.svg";
import GithubLogo from "../assets/bxl-github.svg (1).svg";
import Twitter from "../assets/bxl-linkedin.svg (1).svg";
import Instagram from "../assets/bxl-instagram.svg.svg";

const careers = [
    "Software Engineer",
    "Mobile Developer",
    "Web Developer",
]

const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emmanuelmine/', img: LinkedInLogo },
  { name: 'Twitter', url: 'https://x.com/Ommanuel_', img: Twitter },
  { name: 'Instagram', url: '#', img: Instagram },
  { name: 'Github', url: 'https://github.com/mine0059', img: GithubLogo }
];

const Intro = () => {
    const [careerIndex, setCareerIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [darkenedCircles, setDarkenedCircle] = useState(new Array(6).fill(false));

    useEffect(() => {
        let timeout;
        const currentCareer = careers[careerIndex];

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                if (displayedText === "") {
                    setIsDeleting(false);
                    setCareerIndex((prev) => (prev + 1) % careers.length);
                }
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setDisplayedText(currentCareer.slice(0, displayedText.length + 1));
                if (displayedText === currentCareer) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }, 150);
        }

        return () => clearTimeout(timeout);
    }, [careerIndex, displayedText, isDeleting]);

    const baseSizes = [100, 200, 300, 400, 500, 800];

    const getResponsiveSize = (baseSize) => {
        if (window.innerWidth < 640) return baseSize * 0.25;  // Keep the smaller circle adjustment
        if (window.innerWidth < 768) return baseSize * 0.4;
        if (window.innerWidth < 1024) return baseSize * 0.6;
        return baseSize;
    };

    const [circleSizes, setCircleSizes] = useState(baseSizes.map(getResponsiveSize));

    useEffect(() => {
        const handleReSize = () => {
            setCircleSizes(baseSizes.map(getResponsiveSize));
        };

        window.addEventListener("resize", handleReSize);
        return () => window.removeEventListener("resize", handleReSize);
    }, []);

  return (
    <section id='intro' className='min-h-screen flex flex-col items-start justify-center relative px-5 sm:px-10 overflow-hidden'>
        {/* Intro text */}
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='max-w-4xl z-10'
        >
            <div className="ps-5 sm:ps-20">
                <div className="flex items-center gap-[3px]">
                    <p className="w-8 md:w-10 h-px bg-white"></p>
                    <p className='text-[#D3E97A] text-sm sm:text-xl uppercase tracking-widest leading-none ps-2'>
                        Hello,
                    </p>
                    <p className='text-white text-sm sm:text-xl uppercase tracking-widest leading-none ps-2'>
                        I am
                    </p>
                </div>
            </div>
        </motion.div>
        
        {/* Name */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='max-w-4xl ps-5 sm:ps-20 z-10'
        >
        <h1 className='text-white text-3xl sm:text-5xl md:text-7xl font-serif leading-tight'>
            Oghenemine Emmanuel.
            <br />
            <span className='text-2xl sm:text-5xl'>
                A <span className='text-[#D3E97A]'>{displayedText}</span>
                <span className='blinking-cursor'>|.</span>
            </span>
        </h1>
        </motion.div>

        {/* Animated semicircles */}
        <div className='absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-end w-1/2 md:w-auto'>
            {circleSizes.map((size, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.3, duration: 0.6 }}
                    onAnimationComplete={() => {
                        setTimeout(() => {
                            setDarkenedCircle((prev) => {
                                const updatedCircles = [...prev];
                                updatedCircles[index] = true;
                                return updatedCircles;
                            })
                        }, 600);
                    }}
                    className="rounded-full"
                    style={{
                        width: `${size * 2}px`,
                        height: `${size * 2}px`,
                        borderBottom: 'none',
                        position: 'absolute',
                        right: '-10%',
                        top: `calc(50% - ${size}px)`,
                        border: `2px solid ${
                            darkenedCircles[index] ? "#2A2620" : "#D3E97A"
                        }`,
                        transition: 'border-color 0.5s ease-in-out'
                    }}
                ></motion.div>
            ))}
        </div>

        {/* Social Media Links */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className='
        absolute right-5 hidden md:inline sm:right-10 top-1/2 
        transform -translate-y-1/2 
        flex mt-70 space-y-4 rotate-90
        text-gray-500 text-xs tracking-widest 
        rotate-90 origin-right uppercase z-10
        '
        >
        {socials.map(({ name, url, img })  => (
            <a
            key={name}
            href={url}
            className='ms-10 sm:ms-20 uppercase hover:text-[#D3E97A] transition'
            >
            {name}
            {/* <img
            src={img}
            alt={name}
            className="w-4 h-4 object-contain flex-shrink-0"
            />
            <span>{name}</span> */}
            </a>
        ))}
        </motion.div>
    </section>
  )
}

export default Intro
