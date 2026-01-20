import React, { useEffect, useState } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const navLinks = [
        {name: 'INTRO', to: 'intro'},
        {name: 'ME', to: 'me'},
        {name: 'WORKS', to: 'works'},
        {name: 'ABOUT', to: 'about'},
        {name: 'SAY HELLO', to: 'contact'},
    ];


    const [activeSection, setActiveSection] = useState('intro');
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let newActiveSection = activeSection;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 100) {
                    newActiveSection = section.id;
                }
            });

            setActiveSection(newActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Set active state based on route when not on home
    useEffect(() => {
        if (location.pathname === '/projects') {
            setActiveSection('work');
        } else if (location.pathname === '/more-about-me') {
            setActiveSection('about');
        } else {
            setActiveSection('intro');
        }
    }, [location.pathname]);

    const scrollToId = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const handleNavClick = (id) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToId(id), 120);
        } else {
            scrollToId(id);
        }
    };
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.3,
        delay: 0.3,
      }}
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-[#141516] z-50 border border-gray-700 flex flex-col md:flex-row md:justify-center"
    >
      <div className="flex items-center justify-between w-full md:hidden p-4">
        <span
          className="text-gray-400 text-sm uppercase tracking-wider cursor-pointer hover:text-[#D3E97A]"
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          Mine.
        </span>
        <Menu
          className="text-gray-400 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div className="hidden md:flex w-full">
        <div
          className="flex-1 py-4 text-gray-400 text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-700 hover:text-white"
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="pl-6">Mine.</span>
        </div>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`flex-1 py-4 text-gray-400 text-xs md:text-sm uppercase tracking-wider cursor-pointer transition-all duration-300 border-b md:border-b-0 md:border-r border-gray-700 
              ${
                activeSection === link.to
                  ? "bg-[#2c2c2d] text-yellow-200 opacity-60"
                  : "hover:text-white"
              } 
              ${index === navLinks.length - 1 ? "md:border-r-0" : ""}`}
            onClick={() => handleNavClick(link.to)}
          >
            <div className="pl-6">{link.name}</div>
          </div>
        ))}
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} md:hidden flex-col w-full`}>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`py-4 text-gray-400 text-xs uppercase tracking-wider cursor-pointer transition-all duration-300 border-b border-gray-700 
              ${
                activeSection === link.to
                  ? "bg-[#2c2c2d] text-yellow-300 opacity-60"
                  : "hover:text-white"
              }`}
            onClick={() => handleNavClick(link.to)}
          >
            <div className="pl-6">{link.name}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Navigation
