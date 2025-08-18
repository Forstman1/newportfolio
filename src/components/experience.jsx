import { Icons } from "./icons";
import { skills, educationInfo, workInfo } from "../data/data";
import { useState } from "react";
import agenzLogo from "../assets/agenz.png";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const [selected, setSelected] = useState("Work");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col justify-between gap-4 p-[50px] px-0 items-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
      >
        <Icons.tools className="w-[48px] h-[48px]" />
      </motion.div>
      
      <motion.p 
        className="text-[14px] text-center text-[#525252]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        BACKGROUND SECTION
      </motion.p>
      
      <motion.p 
        className="text-[48px] text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Education & Career
      </motion.p>
      
      <motion.div 
        className="p-1 bg-quaternary items-center justify-around rounded-full flex gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          onClick={() => {
            setSelected("Education");
          }}
          className={`p-2 px-5 ${
            selected === "Education" ? "bg-secondary text-white" : ""
          } rounded-full text-[#848484] hover:text-white duration-500 flex items-center justify-center gap-2 cursor-pointer`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={selected === "Education" ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={selected === "Education" ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icons.education
              className={`w-[15px] h-[15px] ${
                selected === "Education" ? "text-tertiary" : ""
              }`}
            />
          </motion.div>
          Education
        </motion.div>

        <motion.div
          onClick={() => {
            setSelected("Work");
          }}
          className={`p-2 px-5 ${
            selected === "Work" ? "bg-secondary text-white" : ""
          } rounded-full text-[#848484] hover:text-white duration-500 flex items-center gap-2 cursor-pointer`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          animate={selected === "Work" ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={selected === "Work" ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icons.work
              className={`w-[15px] h-[15px] ${
                selected === "Work" ? "text-tertiary" : ""
              }`}
            />
          </motion.div>
          Career
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-full h-[2px]"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      />
      
      <motion.div 
        className="flex flex-col gap-6 items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <AnimatePresence mode="wait">
          {selected === "Education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 items-center w-full"
            >
              {educationInfo.map((education, index) => (
                <motion.div
                  key={index}
                  className="p-4 px-10 w-[90%] md:w-[400px] bg-quaternary flex gap-4 items-start justify-start rounded-2xl"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                >
                  <motion.div 
                    className="h-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    <Icons.education className="w-[48px] h-[48px] text-[#525252]" />
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.p 
                      className="text-[20px] text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    >
                      {education.title}
                    </motion.p>
                    <motion.p 
                      className="text-[14px] text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    >
                      {education.description}
                    </motion.p>
                    <motion.p 
                      className="text-[14px] text-[#525252]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    >
                      {education.date}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {selected === "Work" && (
            <motion.div
              key="work"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 items-center w-full"
            >
              {workInfo.map((work, index) => (
                <motion.div
                  key={index}
                  className="p-4 px-10 w-[90%] md:w-[400px] bg-quaternary flex gap-4 items-start justify-start rounded-2xl"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                >
                  <motion.div 
                    className="h-full w-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    {work?.logo ? (
                      <motion.img
                        src={agenzLogo}
                        alt="logo"
                        className="w-[40px] h-[40px] text-[#525252]"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      />
                    ) : (
                      <Icons.work className="w-[48px] h-[48px] text-[#525252]" />
                    )}
                  </motion.div>
                  <motion.div 
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    <motion.p 
                      className="text-[20px] text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    >
                      {work.title}
                    </motion.p>
                    <motion.p 
                      className="text-[14px] text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    >
                      {work.description}
                    </motion.p>
                    <motion.p 
                      className="text-[14px] text-[#525252]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    >
                      {work.startDate && work.endDate ? (
                        `${work.startDate} - ${work.endDate}`
                      ) : (
                        `${work.startDate} - Present`
                      )}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
