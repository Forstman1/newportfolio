import { Icons } from "./icons";
import "../App.css";
import Card from "./ui/Card";
import { projects } from "../data/data";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id="projects"
      className="w-full flex flex-col justify-between gap-2 p-[50px] px-0 items-center h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
      >
        <Icons.portfolio className="w-[48px] h-[48px]" />
      </motion.div>

      <motion.p
        className="text-[14px] text-[#525252]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        PORTFOLIO SECTION
      </motion.p>

      <motion.p
        className="text-[34px] lg:text-[48px] text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Projects Showcase
      </motion.p>

      <motion.div
        className="flex justify-center items-center gap-8 mt-[50px] flex-wrap"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {projects.map((project, index) => {
          if (show === false) {
            if (index > 3) return;
          }

          return (
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, scale: 0.8, y: 30 }}
            //   animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
            //   transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
            //   whileHover={{ scale: 1.02, y: -5 }}
            //   className="w-auto md:w-full flex justify-center items-center"
            // >
            <Card
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              ref={ref}
              isInView={isInView}
              playstore={project.playstore}
              appstore={project.appstore}
            />
            // </motion.div>
          );
        })}
        <motion.button
          onClick={() => {
            setShow(!show);
          }}
          className="w-[70%] justify-center flex items-center gap-0 p-2 px-3 bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-full group/card"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="group-hover/card:text-white text-center text-white text-[20px]">
            {show ? "See less" : "See more"}
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
