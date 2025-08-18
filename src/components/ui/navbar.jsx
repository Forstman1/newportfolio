import React, { useState } from "react";
import { Icons } from "../icons";
import { motion } from "framer-motion";

export default function Navbar() {
  const [selected, setSelected] = useState("home");
  const sections = ["home", "about", "projects", "contact"];
  const [showHamburger, setShowHamburger] = useState(false);

  function scrollToSection(event) {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.div 
      className="sticky top-0 z-40 flex w-full items-center p-5 bg-secondary self-stretch bg-background justify-around lg:justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="font-bold text-[20px] flex items-center gap-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex">
          <motion.div 
            className="text-tertiary"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          >
            .
          </motion.div>
          <div className="text-white">Sami</div>
        </div>
        <motion.div 
          className="w-[68px] h-[24px] bg-quaternary border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-lg text-[#848484] text-[12px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Portfolio
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hidden lg:flex gap-1 lg:gap-[16px] font-bold"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {sections.map((section, index) => (
          <motion.a
            key={index}
            href={`#${section}`}
            onClick={(e) => {
              scrollToSection(e);
              setSelected(section);
            }}
            className={`cursor-pointer bg-quaternary border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-center p-1 px-3 text-[14px] font-medium ${
              selected === section
                ? "text-white"
                : "text-[#848484] hover:text-white"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {section + "."}
          </motion.a>
        ))}
      </motion.div>
      
      {/* Hamburger menu */}
      <motion.div 
        className="lg:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          onClick={() => setShowHamburger(!showHamburger)}
          className="cursor-pointer p-3 px-3 bg-quaternary flex-col rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div 
            className="w-[14px] h-[2px] bg-[#848484]"
            animate={showHamburger ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div 
            className="w-[14px] h-[2px] bg-[#848484] mt-1"
            animate={showHamburger ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div 
            className="w-[14px] h-[2px] bg-[#848484] mt-1"
            animate={showHamburger ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.div>
      </motion.div>

      {showHamburger && (
        <motion.div 
          className="lg:hidden absolute top-[60px] left-0 w-full h-screen bg-secondary flex flex-col items-center gap-4 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {sections.map((section, index) => (
            <motion.a
              key={index}
              href={`#${section}`}
              onClick={(e) => {
                scrollToSection(e);
                setSelected(section);
                setShowHamburger(false);
              }}
              className={`cursor-pointer bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-center p-1 px-3 text-[14px] font-medium ${
                selected === section
                  ? "text-white"
                  : "text-[#848484] hover:text-white"
              }`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              {section + "."}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
