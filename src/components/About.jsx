import { BsHouses } from "react-icons/bs";
import img01 from "../img/img5.jpg"


export default function About(){
    return(
        <>
            <section id="#about" className={`w-full h-full relative mt-3 py-5 bg-gray-200/30 backdrop-blur-lg rounded-2xl`}>
                <div className="w-full py-3 text-center md:mx-auto ">
                    <h1 className="uppercase font-bold text-4xl">
                        about us.
                    </h1>
                </div>

                <div className=" w-full md:w-[90%] lg:w-[85%] mx-auto mt-7 flex flex-col md:flex-row space-y-2 justify-center items-start">  
                    <div className=" w-[80%] md:space-y-0 lg:space-x-1 md:w-[30%] mx-auto flex space-x-1 justify-start items-center  font-bold">
                        <BsHouses className="text-4xl"/>
                            <h1 className="underline text-2xl">
                                OUSING
                            </h1>
                    </div>

                    <div className="w-[90%] mx-auto p-2 md:w-[70%] lg:pr-2 ">
                        <p className="lg:text-xl">
                            Housing, which based in Miami, was created in 2021 from James Brown after his long-term experience with the  uberfamous Bob Risky. Many of his clients like Hunchonin groups and Eyan May Weather, will follow him in his new adventure and many others such as Kuti.
                            <br /><br/>
                            After a fortunate encounter with the copywriter and content Manager, Housing gains another fundamental member of his creative team. Jennifer, as at the time was already collaborating with big international brands.
                            <br/><br/>
                            blah!
                        </p>
                    </div>

                </div>

                <div className="w-[95%] h-[12em] md:h-[20em] xl:w-[80em] lg:w-[50em] lg:h-[20em] xl:h-[30em] mx-auto mt-2 mb-3 rounded-2xl lg:rounded-3xl bg-blue-200 relative">
                    <img className="w-full h-full bg-cover bg-center rounded-2xl" src={img01} alt="" />
                    <div className="absolute inset-0 bg-black/10 rounded-2xl lg:rounded-3xl"/>
                </div>

            </section>
        </>
    )
}