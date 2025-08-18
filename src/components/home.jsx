import { useRef } from "react";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";
import Tools from "./tools";
import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import Experience from "./experience";
import { motion } from "framer-motion";

// Animation variants for staggered entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Home() {
    return (
        <motion.div 
          className="w-full flex flex-col items-center h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="w-full max-w-[1200px] flex flex-col items-center">
                <motion.div className="w-full" variants={itemVariants}>
                  <Navbar />
                </motion.div>
                <motion.div className="w-full" variants={itemVariants}>
                  <Hero />
                </motion.div>
                <motion.div className="w-full" variants={itemVariants}>
                  <About />
                </motion.div>
                <motion.div className="w-full flex justify-center items-center" variants={itemVariants}>
                  <Projects id="projects" />
                </motion.div>
                <motion.div className="w-full" variants={itemVariants}>
                  <Experience />
                </motion.div>
                <motion.div className="w-full" variants={itemVariants}>
                  <Tools />
                </motion.div>
                <motion.div className="w-full flex justify-center items-center" variants={itemVariants}>
                  <Contact />
                </motion.div>
                <motion.div className="w-full" variants={itemVariants}>
                  <Footer />
                </motion.div>
            </div>
        </motion.div>
    )
}