import { Icons } from "./icons";
import { Image } from '@chakra-ui/react'
import '../App.css'
import Card from "./ui/Card";


export default function Projects() {

    return (

        <div className="w-full  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full">
            <Icons.portfolio className='w-[48px] h-[48px] ' />
            <p className="text-[14px] text-[#525252] ">PORTFOLIO SECTION</p>
            <p className="text-[48px] text-white">Projects Showcase</p>

            <div className="flex justify-center gap-8 mt-[50px] flex-wrap">

                <Card />
                <Card />
                <Card />
                <Card />
                

            </div>
        </div>
    )
}