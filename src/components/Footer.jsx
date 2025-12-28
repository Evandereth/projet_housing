import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";


export default function Footer(){
    return(
        <>
            <footer className="w-full h-[7em] rounded-3xl my-4 bg-transparent backdrop-blur-md flex flex-col justify-center items-center">
                <div className="border-b w-full">
                    <div className="flex flex-row justify-center items-center space-x-3 py-2">   
                        <a href="#" className="cursor-pointer">< FaXTwitter /></a>
                        <a href="#" className="cursor-pointer">< IoIosGlobe /></a>
                        <a href="#" className="cursor-pointer">< FaInstagram /></a>
                        <a href="#" className="cursor-pointer"> <FaEnvelope /> </a>       
                    </div>
                </div>
                <div className="py-2">
                    &copy; 2025 Built with ❤️ || Evander.
                </div>
            </footer>
        </>
    )
}