import { Icons } from "./icons";
import { skills, educationInfo, workInfo } from "../data/data";
import { useState } from "react";

export default function Experience() {
  const [selected, setSelected] = useState("Education");
  return (
    <div className="w-full  flex flex-col justify-between gap-4 p-[50px] px-0  items-center h-full">
      <Icons.tools className="w-[48px] h-[48px] " />
      <p className="text-[14px] text-center text-[#525252] ">
        BACKGROUND SECTION
      </p>
      <p className="text-[48px] text-center  text-white">Education & Career</p>
      <div className="p-1  bg-quaternary items-center justify-around rounded-full flex gap-2">
        <div
          onClick={() => {
            setSelected("Education");
          }}
          className={`p-2 px-5 ${
            selected === "Education" ? "bg-secondary text-white" : ""
          } rounded-full  text-[#848484] hover:text-white  duration-500 flex items-center justify-center gap-2 cursor-pointer`}
        >
          <Icons.education
            className={`w-[15px] h-[15px] ${
              selected === "Education" ? " text-tertiary" : ""
            }`}
          />
          Education
        </div>

        <div
          onClick={() => {
            setSelected("Work");
          }}
          className={`p-2 px-5 ${
            selected === "Work" ? "bg-secondary text-white" : ""
          }  rounded-full text-[#848484] hover:text-white  duration-500 flex items-center gap-2 cursor-pointer`}
        >
          <Icons.work
            className={`w-[15px] h-[15px] ${
              selected === "Work" ? " text-tertiary" : ""
            }`}
          />
          Career
        </div>
      </div>
      <div className="w-full h-[2px] "></div>
      <div className=" flex flex-col gap-6 items-center ">
        {selected === "Education" &&
          educationInfo.map((education, index) => (
            <div
              key={index}
              className="p-4  px-10 w-[90%] md:w-[400px] bg-quaternary flex  gap-4 items-start justify-start  rounded-2xl"
            >
              <div className="h-full">
                <Icons.education className="w-[48px] h-[48px] text-[#525252] " />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[20px] text-white">{education.title}</p>
                <p className="text-[14px] text-white ">
                  {education.description}
                </p>
                <p className="text-[14px]  text-[#525252] ">{education.date}</p>
              </div>
            </div>
          ))}
        {selected === "Work" &&
          workInfo.map((work, index) => (
            <div
              key={index}
              className="p-4 px-10 w-[90%] md:w-[400px] bg-quaternary flex  gap-5 items-start justify-start  rounded-2xl"
            >
              <div className="h-full">
                <Icons.work className="w-[48px] h-[48px] text-[#525252] " />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[20px] text-white">{work.title}</p>
                <p className="text-[14px] text-white ">{work.description}</p>
                <p className="text-[14px]  text-[#525252] ">{work.date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
