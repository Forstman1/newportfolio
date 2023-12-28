import { Icons } from "../icons";
import { Image } from '@chakra-ui/react'



export default function Card({ title, description, image, link }) {


    return (
        <div className="w-[560px] h-[502px] flex-col items-center justify-around bg-[#1A1A1A] hover:bg-[#292929] rounded-[24px]  group/card duration-500 cursor-pointer">
            <div className="flex-col flex items-center justify-around p-2 w-full h-full ">

                <div className="flex justify-between items-center w-[90%]">
                    <div className="flex flex-col">
                        <p className="text-white text-[24px]">{title}</p>
                        <p className="text-[14px] text-[#858585] ">{description}</p>
                    </div>
                    <div className="flex items-center ">
                        <div className="w-[32px] h-[32px] relative rounded-full bg-black right-[-15px] group-hover/card:bg-tertiary duration-500"></div>
                        <Icons.Arrow className="w-[50px] text-[#525252] h-[42px] relative  left-[0px] group-hover/card:left-[5px]  group-hover/card:text-white duration-500 " />

                    </div>
                </div>

                <div className="w-[90%] h-[382px] rounded-lg group-hover/card:rotate-[3deg] duration-500">
                    <Image src={image} alt="Segun Adebayo" className="w-full h-full rounded-lg" />
                </div>
            </div>
        </div>
    )
}