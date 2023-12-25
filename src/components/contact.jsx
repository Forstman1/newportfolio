
import {Input } from '@chakra-ui/react'
import { Icons } from './icons'

export default function Contact() {
    return (
        <div className="w-[550px]  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full">
            {/* <p>CONTACT</p>
            <p>Get In Touch</p> */}
            <Icons.tools className='w-[48px] h-[48px] ' />
                <p className="text-[14px] text-[#525252] ">CONTACT</p>
                <p className="text-[48px] text-white">Get In Touch</p>
            <div className="w-full flex flex-wrap">
                
            </div>
        </div>
    )
}