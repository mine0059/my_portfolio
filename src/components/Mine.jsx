import React from 'react'
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import MyImage from "../assets/mine_3.png";
import LinkedIn from "../assets/bxl-linkedin.svg.svg";
import GitHub from "../assets/bxl-github.svg (1).svg";
import DownloadResume from "../assets/button (1).svg";
import { viewResume, downloadResume } from "../utils/resume";


const Mine = () => {
  return (
    <section
    id='me'
    // className='min-h-screen flex flex-col items-center px-4 md:px-10'
    className='flex flex-col items-center px-4 md:px-10 md:min-h-screen'
    >
    {/* Mine section */}
    <div
    className="w-full max-w-7xl flex flex-col md:flex-row items-start gap-10 relative"
    // className="w-full max-w-7xl flex flex-col md:flex-row items-start gap-6 md:gap-10 relative"
    >
    {/* Image */}
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1 }}
    className='w-full md:w-1/2'
    // className="w-full md:w-1/2 max-w-md lg:max-w-lg mx-auto"
    >
        <img 
        src={MyImage} 
        alt="Oghenemine Emmanuel" 
        className='w-full h-full rounded-lg shadow-lg' 
        // className="w-full max-h-[350px] object-cover md:max-h-none rounded-lg shadow-lg"
        />
    </motion.div>


    {/* Text and Button Container */}
    <motion.div
    // initial={{ opacity: 0, y: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0, }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1, delay: 0.2 }}
    className='w-full flex flex-col md:w-[52%] lg:w-[55%] md:ml-[-2%] lg:ml-[-5%] text-white md:justify-center'
    >
     <div className="mb-6">
        <div className="flex items-center gap-[3px]">
            <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
            <p className='text-[#D3E97A] text-xl uppercase tracking-widest leading-none ps-2'>
              Mine
            </p>
        </div>
    </div>  
    <p className='text-grey-300 text-lg md:text-2xl leading-relaxed mb-8 md:mb-16'>
        Software Engineer specialized in Flutter and Node.js, 
        with over 3 years of experience building production grade applications. 
        I design clean architectural projects, integrate backend services, 
        and maintain production code, i also build developer tools, 
        including a publicly published modular Firebase authentication SDK.
    </p>

    <motion.div
    className="flex gap-3 flex-wrap"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
>
    <motion.div
    className="flex items-center gap-5"
    initial={{ opacity: 0, y: -15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <motion.button
            type="button"
            onClick={viewResume}
            aria-label="View Resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="focus:outline-none"
        >
            <img
                src={DownloadResume}
                alt="View Resume"
                className="w-[130px] md:w-auto"
            />
        </motion.button>
        <button
            type="button"
            onClick={downloadResume}
            aria-label="Download Resume"
            className="text-[#D3E97A] underline underline-offset-4 text-sm md:text-base"
        >
            Download
        </button>
    </motion.div>

    <motion.a
        href="https://www.linkedin.com/in/emmanuelmine/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 250 }}
    >
        <img
        src={LinkedIn}
        alt="My LinkedIn"
        className="w-10 md:w-auto"
        />
    </motion.a>

    <motion.a
        href="https://github.com/mine0059"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 250 }}
    >
        <img src={GitHub} alt="My Github" className="w-10 md:w-auto" />
    </motion.a>
    </motion.div>
    </motion.div>

    </motion.div>
    </div>
    </section>
  )
}

export default Mine
