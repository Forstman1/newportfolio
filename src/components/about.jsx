import { Icons } from "./icons";
import { Image } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpeg'
import { motion } from 'framer-motion';

import '../App.css'

export default function About() {
    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
            className='w-full'
        >
            <div className="w-full  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full">
                <Icons.hexagonIcon className='w-[48px] h-[48px] text-[#1DA1F2]' />
                <p className="text-[14px] text-[#525252] ">ABOUT ME SECTION</p>
                <p className="text-[48px] text-white">Who's the creative mind?</p>
                <div className="flex h-[360px] gap-8 mt-[50px]">


                    <div className="h-full w-[320px] rounded-[24px] bg-primary items-center justify-center flex flex-col hover:rotate-[-4deg]	 duration-500 ">
                        <Image src={avatar} alt='avatar' className='w-[95%] m-2  rounded-[12px]' />
                        <p className="quote ">Daring to redefine boundaries :)</p>
                    </div>


                    <div className="flex flex-col justify-between w-[320px]">
                        <p className="text-white text-[24px]">Sami Hafid</p>
                        <p className="text-[18px] text-[#858585]">I'm Sami Hafid, a passionate and
                            experienced Web Developer,
                            coffee lover, art enthusiast based in
                            Casablanca. With over 2 years of
                            expertise in the field, I have
                            dedicated myself to creating
                            exceptional user experiences that
                            blend functionality and aesthetics
                            seamlessly.</p>
                        <Icons.signitureIcon className='w-[66px] h-[34px] text-[#1DA1F2]' />

                    </div>

                </div>
            </div>
        </motion.div>

    )
}