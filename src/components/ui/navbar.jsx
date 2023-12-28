
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
                <li className={`cursor-pointer bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "home" ? "text-white " : "text-white"} `}>home.</li>
                <li className={`cursor-pointer bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "about" ? "text-white " : "text-white"} `}>about.</li>
                <li className={`cursor-pointer bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "projectes" ? "text-white " : "text-white"} `} >projects.</li>
                <li className={`cursor-pointer bg-quaternary rounded-[24px] flex items-center justify-center w-[74px] h-[32px] text-[14px]  font-medium ${selected === "contact" ? "text-white " : "text-white"} `} >contact.</li>

            </div>
        </div>
    )
}
