import { Image } from "@chakra-ui/react";
import avatar from "../assets/avatar.jpeg";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import { info } from "../data/data";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <div
        id="home"
        className="w-full flex justify-evenly flex-col lg:flex-row p-[30px] lg:p-[50px] gap-5 lg:gap-3 px-0 items-center h-full"
      >
        <motion.div 
          className="w-[90%] md:w-[70%] gap-3 lg:gap-0 lg:w-[368px] lg:h-[352px] flex flex-col group/card duration-500 justify-around items-center bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] cursor-pointer"
          initial={{ opacity: 0, x: -50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
        >
          <div className="w-[80%] flex justify-between items-center pt-3 duration-500">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <Image
                className="w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] rounded-full"
                src={avatar}
                alt="avatar"
              />
            </motion.div>
            <Icons.Arrow className="w-[48px] h-[48px] text-[#525252] relative duration-500 left-0 group-hover/card:left-[20px]" />
          </div>
          <motion.div 
            className="w-[80%] text-start text-white text-[24px] lg:text-[40px] flex-shrink-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A Portfolio Brimming with Innovation
          </motion.div>
          <motion.div 
            className="w-[80%] text-[#848484] text-[16px] flex items-center pb-7 justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {info.name} • Developer
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-[90%] md:w-[70%] lg:w-[368px] h-[352px] flex items-center justify-between flex-col"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className="w-full h-[120px] bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-around hover:pr-2 cursor-pointer duration-500"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div className="flex flex-col">
              <div className="text-[#525252] text-[24px]">Title</div>
              <div className="text-white text-[24px]">{info.title}</div>
            </div>
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            >
              <Icons.star className="w-[48px] h-[48px]" />
            </motion.div>
          </motion.div>

          <div className="w-full flex gap-2 justify-between">
            {info.socials.map((item, index) => (
              <motion.a 
                href={item.link} 
                key={index} 
                className="w-full" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="lg:w-[80px] h-[80px] w-full bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 hover:bg-[#0077b5] rounded-[24px] flex items-center justify-center cursor-pointer text-[#858585] hover:text-white duration-500">
                  <item.icon className="w-[32px] h-[32px]" />
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="w-full h-[120px] bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-around hover:pr-2 cursor-pointer duration-500"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ scale: 1.02, x: -5 }}
          >
            <div className="flex flex-col">
              <div className="text-[#525252] text-[24px]">Based In</div>
              <div className="text-white text-[24px]">{info.location}</div>
            </div>
            <motion.div
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
            >
              <Icons.worldIcon className="w-[48px] h-[48px]" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-[90%] md:w-[70%] lg:w-[368px] lg:h-[352px] p-5 flex flex-col items-center gap-4 justify-center bg-quaternary opacity-100 border-solid border-[2px] border-[#292929] border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px]"
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.02, 
            rotateY: -5,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
          >
            <Icons.vise className="w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]" />
          </motion.div>
          <motion.div 
            className="text-white text-[28px] lg:text-[40px] text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Wanna work together?
          </motion.div>
          <motion.button 
            onClick={() => window.location.href = `mailto:${info.email}`} 
            className="bg-tertiary text-white text-[18px] lg:text-[22px] rounded-[24px] p-[12px] lg:p-[16px] hover:bg-primary duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {info.email}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
