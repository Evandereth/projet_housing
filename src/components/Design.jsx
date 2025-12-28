import { IoBulbOutline, IoCheckmarkDone, IoRocket } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import img4 from "../img/img6.jpg"
import img1 from "../img/img1.jpg"
import img2 from "../img/img2.jpg"
import img3 from "../img/img3.jpg"


import { useState } from "react";

export default function Design(){
    

    const carousels =[
        {
            id:1,
            title:"Living Room",
            image: img1,
            deets: "A clean and spacious Living Room"
        },
        {
            id:2,
            title:"Dining Room",
            image: img2,
            deets: "Clean and Minimal Bedroom"
        },
        {
            id:3,
            title:"Guest Room",
            image: img3,
            deets: "A bedroom that is both functional and serene"
        },
        {
            id:4,
            title:"Cologne Room",
            image: img4,
            deets: "Minimalist space that meets all your needs"
        }
    ]


    const [ind, setInd] = useState(0)

    const width = 100;

    const next = () =>{
        setInd(prev => Math.min(prev+1, carousels.length))
    }

    const prevvy =()=>{
        setInd((prev) => Math.max(prev-1, 0))
    }


    
    


    return(
        <>
            <section className="my-8 overflow-hidden">
                <div className="w-[90%] mx-auto">
                     <h1 className={`text-4xl py-3 lg:w-120 font-bold`}>
                        Our Work is Built on Three Steps
                    </h1>
                </div>
               

                <div className={`w-[90%] lg:w-[95%] min-h-full mx-auto relative flex flex-col space-y-5 lg:flex-row justify-center items-center lg:items-end lg:space-x-4`}>

                    <div className={`p-2 relative w-full md:w-[50%]`}>
                    <div className="py-2 flex flex-col space-y-3 relative ">

                        <div className={`relative ml-5 pl-6 py-3 pr-2`}>
                            <div className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full absolute top-0 left-0 translate-x-[-50%] translate-y-[70%]">
                              <IoRocket />  
                            </div>
                            
                            <h1 className="py-2 text-2xl lg:text-3xl font-bold">
                                Start Project
                            </h1>
                            <p className="text-sm lg:text-lg">
                                Embark on your design infrastructure by initializing    your project. Share your vision and set the stage for  design experience
                            </p>
                        </div>

                        <div className={`relative ml-5 pl-6 py-3 pr-2`}>
                            <div className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full absolute top-0 left-0 translate-x-[-50%] translate-y-[70%]">
                              <IoBulbOutline />  
                            </div>
                            <h1 className="py-2 text-2xl lg:text-3xl font-bold">
                                Craft
                            </h1>
                            <p className="text-sm lg:text-lg">
                                Collaborate clearly to software design excellence   refining your vision and crafting brilliance into every aspect of your space
                            </p>
                        </div>

                        <div className={`relative ml-5 pl-6 py-3 pr-2`}>
                            <div className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full absolute top-0 left-0 translate-x-[-50%] translate-y-[70%]">
                              <IoCheckmarkDone />  
                            </div>
                            <h1 className="py-2 text-2xl lg:text-3xl font-bold">
                                Execute
                            </h1>
                            <p className="text-sm lg:text-lg">
                                Witness your vision becoming a reality so we execute    the esign given with precision. Celebrate the joy of   your blah blah blah
                            </p>
                        </div>
                    </div>
                    
                    </div>

                    <div className="w-[22em] lg:w-[50%] mx-auto">
                        
                        <div className=" w-full mx-auto relative flex flex-row space-x-5 overflow-hidden ">
                            
                            {
                                carousels.map(carousel => 
                                    <div key={carousel.id} className={`bg-gray-200/80 w-full rounded-2xl p-2 transition-transform ease-in-out duration-300`}
                                    style={{transform:`translateX(-${ind *width}%)`}}
                                    >
                                <div className="w-[15em] h-[10em] lg:w-[25em] lg:h-[15em] rounded-2xl relative">
                                    <img src={carousel.image} alt="" className="w-full h-full rounded-2xl"/>
                                    <div className="absolute inset-0 bg-black/10 rounded-2xl"/>
                                </div>
                                <h2 className="py-2 font-bold lg:text-xl">
                                    {carousel.title}
                                </h2>
                                <p>
                                    {carousel.deets}
                                </p>
                            </div>
                                )
                            }
                            

                            </div>
                            
                        <div className="my-5">
                             <button className={`cursor-pointer p-2 bg-black rounded-full text-white`} onClick={prevvy}>
                                <FaArrowLeft />
                            </button>

                            <button className={`cursor-pointer p-2 bg-black rounded-full text-white mx-2`} disabled={ind ===  carousels.   length-1} onClick={next}>
                                <FaArrowRight />
                            </button>
                        </div>
                       
                    </div>
                </div>
                
            </section>
        </>
    )
}