
import React, { useState } from 'react'






export default function Navbar() {
    const [selected, setSelected] = useState('home')

    return (

        <div className="sticky  top-0 z-40 flex  items-center p-5 px-0  bg-secondary gap-[16px] self-stretch  bg-background  justify-between  ">
            <div className='font-bold text-[20px] flex items-center gap-4'>
                <div className='flex'>
                <div className=' text-tertiary'>.</div><div className='text-white'>Sami</div>
                </div>
                <div className='w-[68px] h-[24px] bg-quaternary rounded-lg text-[#848484] text-[12px] flex items-center justify-center '>Portfolio</div>
            </div>
            <div className="flex gap-[16px] font-bold">
                <a className={`bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "home" ? "text-white " : "text-white"} `} href="#home">home</a>
                <a className={`bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "projectes" ? "text-white " : "text-white"} `} href="#projects">projects</a>
                <a className={`bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "about" ? "text-white " : "text-white"} `} href="#about">about</a>
            </div>
        </div>
    )
}
