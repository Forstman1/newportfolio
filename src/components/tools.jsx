import { Icons } from "./icons";
import { skills } from "../data/data";

export default function Tools() {
  return (
    <div className="w-full  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full">
      <Icons.tools className="w-[48px] h-[48px] " />
      <p className="text-[14px] text-center text-[#525252] ">TOOLS SECTION</p>
      <p className="text-[48px] text-center text-white">Tools & Software</p>

      <div className="w-[90%] md:w-[80%]  lg:w-[900px] h-[220px] bg-[#000000] rounded-[24px] flex flex-col">
        <div className="h-[28px] w-full rounded-t-[24px] text-[#515151] text-center text-[12px] flex items-center justify-center bg-primary">
          HERE ARE THE TOOLS AND SOFTWARE I USE
        </div>
        <div className=" w-full flex items-center gap-2 p-3 justify-around h-full">
          {skills.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full items-center justify-around gap-2 group/item"
            >
              <div className="w-3 h-3 bg-primary rounded-full group-hover/item:bg-tertiary  group-hover/item:w-5 group-hover/item:h-5  duration-500"></div>
              <div className="w-full lg:w-[115px] h-[50px] md:h-[60px]  lg:h-[115px] bg-quaternary opacity-100 border-solid border-[2px]  border-t-1 border-b-0 border-l-0 border-r-0 rounded-[24px] flex items-center justify-center group-hover/item:lg:w-[125px] group-hover/item:lg:h-[125px]  group-hover/item:h-[70px] group-hover/item:bg-black border-quaternary  group-hover/item:border-primary  group-hover/item:border duration-500 cursor-pointer">
                <img
                  className="lg:w-[80px] w-[30px] h-[30px]  lg:h-[80px] "
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
