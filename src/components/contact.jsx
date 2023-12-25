
import { Input, Button } from '@chakra-ui/react'
import { Icons } from './icons'

export default function Contact() {
    return (
        <div className="w-[550px]  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full">
            {/* <p>CONTACT</p>
            <p>Get In Touch</p> */}
            <Icons.tools className='w-[48px] h-[48px] ' />
            <p className="text-[14px] text-[#525252] ">CONTACT</p>
            <p className="text-[48px] text-white">Get In Touch</p>
            <div className="w-full flex gap-5 flex-wrap">
                <div className='flex gap-2 w-full'>

                    <Input className="w-full h-[50px] bg-quaternary  border-none focus:outline-none rounded-[10px] text-[#636363] text-[14px] px-[20px] py-[10px]   " placeholder="Name" />
                    <Input className="w-full h-[50px] bg-quaternary  border-none focus:outline-none rounded-[10px] text-[#636363] text-[14px] px-[20px] py-[10px]   " placeholder="Email" />
                </div>
                <Input className="h-[160px] w-full  bg-quaternary  border-none focus:outline-none rounded-[10px] text-[#636363] text-[14px] px-[20px] py-[10px]  " placeholder="Message" />
                <Button className='w-full h-[50px] bg-tertiary text-white rounded-[10px]'>Send</Button>
            </div>
        </div>
    )
}