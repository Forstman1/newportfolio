
import { Icons } from './icons'


const data = [
    {
        title: 'Docker',
        image: 'https://cdn.svgporn.com/logos/docker-icon.svg',
        link: 'https://www.docker.com/'
    },

    {
        title: 'Git',
        image: 'https://cdn.svgporn.com/logos/git-icon.svg',
        link: 'https://git-scm.com/'
    },
    {
        title: 'React',
        image: 'https://cdn.svgporn.com/logos/react.svg',
        link: 'https://reactjs.org/'
    },
    {
        title: 'Node',
        image: 'https://cdn.svgporn.com/logos/nodejs-icon.svg',
        link: 'https://nodejs.org/en/'

    },
    {
        title: 'Typescript',
        image: 'https://cdn.svgporn.com/logos/typescript-icon.svg',
        link: 'https://www.typescriptlang.org/'
    }

]

export default function Tools() {

    return (
            
            <div className="w-full  flex flex-col justify-between gap-2 p-[50px] px-0  items-center h-full">
                <Icons.tools className='w-[48px] h-[48px] ' />
                <p className="text-[14px] text-[#525252] ">TOOLS SECTION</p>
                <p className="text-[48px] text-white">Tools & Software</p>
    
                <div className='w-[900px] h-[220px] bg-[#000000] rounded-[24px] flex flex-col'>
                    <div className='h-[28px] w-full rounded-t-[24px] text-[#515151] text-center text-[12px] flex items-center justify-center bg-primary'>HERE ARE THE TOOLS AND SOFTWARE I USE</div>
                    <div className=' w-full flex items-center justify-around h-full'>
                        {data.map((item, index) => (
                            <div key={index} className='flex flex-col items-center justify-around gap-2 group/item'>
                                <div className='w-3 h-3 bg-primary rounded-full group-hover/item:bg-tertiary  group-hover/item:w-5 group-hover/item:h-5 duration-500'></div>
                                <div className='w-[115px] h-[115px] bg-quaternary rounded-[24px] flex items-center justify-center group-hover/item:w-[125px] group-hover/item:h-[125px] group-hover/item:bg-black border-quaternary  group-hover/item:border-primary  group-hover/item:border duration-500 cursor-pointer'>
                                    <img className='w-[80px] h-[80px]' src={item.image} alt={item.title} />

                                </div>
                            </div>
                        
                        ))}
                    </div>
                </div>
            </div>
        )
    }