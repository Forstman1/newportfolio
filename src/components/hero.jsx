
import { Image } from '@chakra-ui/react'
import avatar from '../assets/avatar.jpeg'
import { Icons } from './icons'

export default function Hero() {

    return (
        <div className="w-full  flex justify-between p-[50px] px-0  items-center h-full">

            <div className='w-[368px] h-[352px] flex flex-col justify-around items-center  bg-quaternary rounded-[24px] cursor-pointer'>
                <div className='w-[80%] flex justify-between items-center pt-3'>
                    <Image className='w-[80px] h-[80px] rounded-full' src={avatar} alt='avatar' />
                    <Icons.Arrow className='w-[48px] h-[48px] text-[#525252] ' />
                </div>
                <div className='w-[80%] text-white text-[40px] flex-shrink-0' >A Portfolio Brimming with Innovation</div>
                <div className='w-[80%] text-[#848484]  text-[16px] flex items-center pb-7 justify-start'>Sami Hafid • Developer</div>
            </div>

            <div className='w-[368px] h-[352px] flex items-center justify-between  flex-col  '>


                <div className='w-full h-[120px] bg-quaternary rounded-[24px] flex items-center justify-around hover:pr-2 cursor-pointer duration-500'>
                    <div className='flex flex-col'>
                        <div className='text-[#525252] text-[28px]'>Title</div>
                        <div className='text-white text-[28px] '>Web Developer</div>
                    </div>
                    <div>
                        <Icons.star className='w-[48px] h-[48px]' />
                    </div>
                </div>


                <div className='w-full flex justify-between '>
                    <div className='w-[80px] h-[80px] bg-quaternary hover:bg-[#1DA1F2]  rounded-[24px] flex items-center justify-center cursor-pointer text-[#858585]  hover:text-white duration-500 '>
                        <Icons.twitter className='w-[32px] h-[32px]' />
                    </div>
                    <div className='w-[80px] h-[80px] bg-quaternary hover:bg-[#6F278D] rounded-[24px] flex items-center justify-center cursor-pointer text-[#858585]  hover:text-white duration-500 '>
                        <Icons.instagram className='w-[32px] h-[32px]' />
                    </div>
                    <div className='w-[80px] h-[80px] bg-quaternary hover:bg-black rounded-[24px] flex items-center justify-center cursor-pointer text-[#858585]  hover:text-white duration-500  '>
                        <Icons.github className='w-[32px] h-[32px]  ' />
                    </div>
                    <div className='w-[80px] h-[80px] bg-quaternary hover:bg-[#0077b5] rounded-[24px] flex items-center justify-center cursor-pointer  text-[#858585]  hover:text-white duration-500 '>
                        <Icons.linkedin className='w-[32px] h-[32px]' />
                    </div>

                </div>


                <div className='w-full h-[120px] bg-quaternary rounded-[24px] flex items-center justify-around hover:pr-2 cursor-pointer duration-500'>
                    <div className='flex flex-col'>
                        <div className='text-[#525252] text-[28px]'>Based In</div>
                        <div className='text-white text-[28px] '>Morocco, Casa</div>
                    </div>
                    <div>
                        <Icons.worldIcon className='w-[48px] h-[48px]  ' />
                    </div>
                </div>

            </div>



            <div className='w-[368px] h-[352px]  flex flex-col items-center gap-4 justify-center bg-quaternary rounded-[24px] '>
                <Icons.vise className='w-[48px] h-[48px]' />
                <div className='text-white text-[40px] text-center'>Wanna work together?</div>
                <button className=' bg-tertiary text-white text-[22px] rounded-[24px] p-[16px] hover:bg-primary duration-500' >sami.hafid.hs@gmail.com</button>
            </div>


        </div>
    )
}