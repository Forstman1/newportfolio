import { Image } from "@chakra-ui/react";
import avatar from "../assets/avatar.jpeg";
import { Icons } from "./icons";
import { motion } from "framer-motion";
import { info } from "../data/data";

export default function Hero() {
  return (
    <motion.div
      //   initial={{ y: -100 }}
      //   animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full"
    >
      <div
        id="home"
        className="w-full  flex justify-evenly flex-col lg:flex-row p-[30px] lg:p-[50px]  gap-5 lg:gap-3 px-0  items-center h-full"
      >
        <div className="w-[90%] md:w-[70%] gap-3 lg:gap-0 lg:w-[368px]  lg:h-[352px] flex flex-col group/card duration-500 justify-around items-center bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0  rounded-[24px] cursor-pointer">
          <div className="w-[80%] flex justify-between items-center pt-3 duration-500">
            <Image
              className=" w-[64px] h-[64px] lg:w-[80px] lg:h-[80px] rounded-full"
              src={avatar}
              alt="avatar"
            />
            <Icons.Arrow className="w-[48px] h-[48px] text-[#525252] relative duration-500 left-0 group-hover/card:left-[20px]  " />
          </div>
          <div className="w-[80%] text-start text-white text-[24px] lg:text-[40px] flex-shrink-0">
            A Portfolio Brimming with Innovation
          </div>
          <div className="w-[80%] text-[#848484]  text-[16px] flex items-center pb-7 justify-start">
            {info.name} • Developer
          </div>
        </div>

        <div className="w-[90%] md:w-[70%] lg:w-[368px] h-[352px] flex items-center justify-between  flex-col  ">
          <div className="w-full h-[120px] bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-around hover:pr-2 cursor-pointer duration-500">
            <div className="flex flex-col">
              <div className="text-[#525252] text-[24px]">Title</div>
              <div className="text-white text-[24px] ">{info.title}</div>
            </div>
            <div>
              <Icons.star className="w-[48px] h-[48px]" />
            </div>
          </div>

          <div className="w-full flex gap-2 justify-between ">
            {info.socials.map((item, index) => (
              <a href={item.link} key={index} className="w-full">
                <div className="lg:w-[80px] h-[80px]  w-full  bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 hover:bg-[#0077b5] rounded-[24px] flex items-center justify-center cursor-pointer  text-[#858585]  hover:text-white duration-500 ">
                  <item.icon className="w-[32px] h-[32px]" />
                </div>
              </a>
            ))}
          </div>

          <div className="w-full h-[120px] bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-around hover:pr-2 cursor-pointer duration-500">
            <div className="flex flex-col">
              <div className="text-[#525252] text-[24px]">Based In</div>
              <div className="text-white text-[24px] ">{info.location}</div>
            </div>
            <div>
              <Icons.worldIcon className="w-[48px] h-[48px]  " />
            </div>
          </div>
        </div>

        <div className="w-[90%] md:w-[70%] lg:w-[368px] lg:h-[352px] p-5  flex flex-col items-center gap-4 justify-center bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] ">
          <Icons.vise className=" w-[36px] h-[36px] lg:w-[48px] lg:h-[48px]" />
          <div className="text-white text-[28px] lg:text-[40px] text-center">
            Wanna work together?
          </div>
          <button className=" bg-tertiary text-white text-[18px] lg:text-[22px] rounded-[24px] p-[12px] lg:p-[16px] hover:bg-primary duration-500">
            {info.email}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
