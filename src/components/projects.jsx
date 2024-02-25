import { Icons } from "./icons";
import "../App.css";
import Card from "./ui/Card";
import { projects } from "../data/data";
import { useState } from "react";

export default function Projects() {
  const [show, setShow] = useState(false);
  return (
    <div
      id="projects"
      className="w-full  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full"
    >
      <Icons.portfolio className="w-[48px] h-[48px] " />
      <p className="text-[14px] text-[#525252] ">PORTFOLIO SECTION</p>
      <p className="text-[34px] lg:text-[48px] text-white">Projects Showcase</p>

      <div className="flex justify-center gap-8 mt-[50px] flex-wrap">
        {projects.map((project, index) => {
          if (show === false) {
            if (index > 3) return;
          }

          return (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          );
        })}
        <button
          onClick={() => {
            setShow(!show);
          }}
          className=" w-[70%] justify-center flex  items-center gap-0 p-2 px-3 bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-full group/card"
        >
          <div className="group-hover/card:text-white text-center text-white text-[20px] ">
            {show ? "See less" : "See more"}
          </div>
        </button>
      </div>
    </div>
  );
}
