import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Projects from "./projects";
import Tools from "./tools";
import Navbar from "./ui/navbar";



export default function Home() {

    return (
        <div className="w-full  flex flex-col items-center h-full">
            <div className="w-full max-w-[1200px] flex flex-col items-center">

                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Tools />
                <Contact />
            </div>
        </div>
    )
}