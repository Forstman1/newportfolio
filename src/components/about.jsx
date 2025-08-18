import { Icons } from "./icons";
import { Image } from "@chakra-ui/react";
import avatar from "../assets/avatar.jpeg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "../App.css";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="about"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      <div className="w-full flex flex-col justify-between gap-2 p-0 lg:p-[50px] px-0 items-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          <Icons.hexagonIcon className="w-[48px] h-[48px] text-[#1DA1F2]" />
        </motion.div>
        
        <motion.p 
          className="text-[14px] text-[#525252]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          ABOUT ME SECTION
        </motion.p>
        
        <motion.p 
          className="text-[28px] lg:text-[48px] text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Who's the creative mind?
        </motion.p>
        
        <motion.div 
          className="flex lg:flex-row flex-col items-center gap-8 mt-[50px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="h-full lg:w-[320px] w-[90%] rounded-[24px] bg-primary items-center justify-center flex flex-col hover:rotate-[-4deg] duration-500"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -15 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02, 
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Image
                src={avatar}
                alt="avatar"
                className="w-[95%] m-2 rounded-[12px]"
              />
            </motion.div>
            <motion.p 
              className="quote"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Daring to redefine boundaries :)
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center justify-between w-[320px]"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 15 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <motion.p 
              className="text-white text-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Sami Hafid
            </motion.p>
            <motion.p 
              className="text-[18px] text-center text-[#858585]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              I'm Sami Hafid, a passionate and experienced mobile Developer, coffee
              lover based in Casablanca. With over 2 years of
              expertise in the field, I have dedicated myself to creating
              exceptional user experiences that blend functionality and
              aesthetics seamlessly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: 1.8, type: "spring" }}
            >
              <Icons.signitureIcon className="w-[66px] h-[34px] text-[#1DA1F2]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
