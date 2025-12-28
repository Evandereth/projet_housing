import { BsFillSuitSpadeFill } from "react-icons/bs"
import img01 from "../img/img02.jpg"
import img4 from "../img/img4.jpg"


export default function Intro(){
    return(
        <>
            <section id="#home" className="w-full h-full mt-10 relative overflow-hidden">
                <div className="w-[20em] h-[10em] md:w-[25em] md:h-[13em] lg:w-[40em] lg:h-[20em] absolute top-0 left-0 -translate-x-40 rounded-2xl lg:rounded-3xl">
                    <img src={img01} alt="" className="w-full h-full bg-cover bg-center rounded-2xl lg:rounded-3xl"/>
                    <div className="absolute inset-0 bg-black/10 rounded-2xl lg:rounded-3xl"/>
                </div>

                <div className="w-[20em] h-[10em] lg:w-[40em] md:w-[25em] md:h-[13em] lg:h-[20em] absolute bottom-0 right-0 translate-x-40 rounded-2xl lg:rounded-3xl ">
                    <img src={img4} alt="" className="w-full h-full bg-cover bg-center rounded-2xl lg:rounded-3xl"/>
                    <div className="absolute inset-0 bg-black/10 rounded-2xl lg:rounded-3xl"/>

                </div>

                <div className="mx-auto my-[5%] w-[20em] h-[90%] lg:w-[30em] flex flex-col justify-center items-center space-y-3">

                    < BsFillSuitSpadeFill className="text-3xl" />
                    <h1 className="text-3xl lg:text-4xl text-center italic font-semibold">
                        If you can dream it, we can build it
                    </h1>

                    <p className="text-center p-1 text-sm lg:text-base">
                        We adapt a uniquely personalized perspective to each project to deliver stunning spaces of optimal function. Renouned for our architectural understanding and masterful craftmanship, our portfolio of residential projects.
                    </p>

                    <button className="w-[10em] py-2 bg-black text-white cursor-pointer">
                        Get in Touch
                    </button>
                </div>

            </section>
        </>
    )
}