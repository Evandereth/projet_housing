import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";


export default function GIT(){


    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return(
        <>
            <section className="w-full mt-10 min-h-1/2 h-auto relative">
                <div className="w-[95%] lg:w-full mx-auto flex flex-col lg:flex-row space-y-5 lg:space-x-2 justify-between items-start">
                    <div className="w-full lg:w-[60%] lg:min-h-[22em]">
                    <h1 className="text-3xl font-bold pb-3 lg:w-[50%] lg:text-4xl">
                        Get in Touch With Us Today
                    </h1>
                    <p className="py-3 lg:text-lg">
                        Ready to tackle your home improvement projects? Whether you need a quick fix, a renovation or regular maintenance. We are here to help.
                    </p>

                    <div className="flex flex-col space-y-3 mt-4">
                        <label className="flex space-x-2 items-center">
                            <div className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full">
                                <FaPhoneAlt />
                            </div>
                            
                            <p className="text-sm lg:text-md">
                                +44187387817
                            </p>
                        </label>

                        <label className="flex space-x-2 items-center">
                            <div className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full">
                                <FaLocationDot />
                            </div>
                            
                            <p className="text-sm lg:text-md">
                                New York
                            </p>
                        </label>

                        <label className="flex space-x-2 items-center">
                            <div className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full">
                                <FaEnvelope />
                            </div>
                            
                            <p className="text-sm lg:text-md">
                                yourhousingneeds@gmail.com
                            </p>
                        </label>
                    </div>
                    </div>

                    <div className="lg:w-[40%] bg-gray-200/80 backdrop-blur-md w-full min-h-full py-5 rounded-2xl relative">
                    <form onSubmit={handleSubmit}>
                        <div className="w-[90%] mx-auto flex flex-col justify-center items-start my-5">
                            <label>
                                Your Name
                            </label>
                            <input type="text" placeholder="Name..." className="bg-white/90 backdrop-blur-lg px-4 py-2 w-full rounded-full"/>
                        </div>

                        <div className="w-[90%] mx-auto flex flex-col justify-center items-start my-5">
                            <label>
                                Your Phone
                            </label>
                            <input type="text" placeholder="Phone..." className="bg-white/90 backdrop-blur-lg px-4 py-2 w-full rounded-full"/>
                        </div>

                        <div className="w-[90%] mx-auto flex flex-col justify-center items-start my-5">
                            <label>
                                Share Your Concern
                            </label>
                            <input type="text" placeholder="Concern..." className="bg-white/90 backdrop-blur-lg px-4 py-2 w-full rounded-full"/>
                        </div>

                        <button className="bg-black text-white flex justify-center items-center gap-2 px-3 py-2 ml-5 mt-5 rounded-full cursor-pointer" onClick={handleSubmit}>
                            <FiSend />
                            Submit
                        </button>
                    </form>
                    </div>
                </div>
                
            </section>
        </>
    )
}