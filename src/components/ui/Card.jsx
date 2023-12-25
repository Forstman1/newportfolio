import { Icons } from "../icons";



export default function Card({ title, description, image, link }) {


    return (
        <div className="w-[560px] h-[502px] flex-col items-center justify-around bg-[#1A1A1A] hover:bg-[#292929] rounded-[24px]  group/card duration-500 ">
            <div className="flex-col flex items-center justify-around p-2 w-full h-full ">

                <div className="flex justify-between items-center w-[90%]">
                    <div className="flex flex-col">
                        <p className="text-white text-[24px]">Haze Template</p>
                        <p className="text-[16px] text-[#858585] ">Landing Page for Members</p>
                    </div>
                    <div className="flex items-center ">
                        <div className="w-[32px] h-[32px] relative rounded-full bg-black right-[-15px] group-hover/card:bg-tertiary duration-500"></div>
                        <Icons.Arrow className="w-[50px] text-[#525252] h-[42px] relative  left-[0px] group-hover/card:left-[5px]  group-hover/card:text-white duration-500 " />

                    </div>
                </div>

                <div className="w-[90%] h-[382px] bg-orange-300 rounded-lg group-hover/card:rotate-[3deg] duration-500"></div>
            </div>
        </div>
    )
}