import React, { useState } from "react";

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
    <div className="sticky top-0 z-40  flex items-center p-5  bg-secondary self-stretch bg-background justify-around  lg:justify-between">
      <div className="font-bold text-[20px] flex items-center gap-4">
        <div className="flex">
          <div className="text-tertiary">.</div>
          <div className="text-white">Sami</div>
        </div>
        <div className="w-[68px] h-[24px] bg-quaternary opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-lg text-[#848484] text-[12px] flex items-center justify-center">
          Portfolio
        </div>
      </div>
      <div className="hidden lg:flex  gap-1  lg:gap-[16px] font-bold">
        {sections.map((section, index) => (
          <a
            key={index}
            href={`
            #${section}`}
            onClick={(e) => {
              scrollToSection(e);
              setSelected(section);
            }}
            className={`cursor-pointer bg-quaternary opacity-100 border-solid border-[2px]  border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-center p-1 px-3  text-[14px] font-medium  ${
              selected === section
                ? "text-white"
                : "text-[#848484] hover:text-white"
            } `}
          >
            {section + "."}
          </a>
        ))}
      </div>
      {/* do humberger for navbar */}
      <div className="lg:hidden">
        <div
          onClick={() => setShowHamburger(!showHamburger)}
          className="cursor-pointer p-3 px-3 bg-quaternary  flex-col rounded-full flex items-center justify-center"
        >
          <div className="w-[14px] h-[2px] bg-[#848484]"></div>
          <div className="w-[14px] h-[2px] bg-[#848484] mt-1"></div>
          <div className="w-[14px] h-[2px] bg-[#848484] mt-1"></div>
        </div>
      </div>
      {showHamburger && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full h-screen bg-secondary flex flex-col items-center gap-4 p-4">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`
            #${section}`}
              onClick={(e) => {
                scrollToSection(e);
                setSelected(section);
                setShowHamburger(false);
              }}
              className={`cursor-pointer bg-quaternary opacity-100 border-solid border-[2px]  border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-center p-1 px-3  text-[14px] font-medium  ${
                selected === section
                  ? "text-white"
                  : "text-[#848484] hover:text-white"
              } `}
            >
              {section + "."}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
