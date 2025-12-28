import { useState } from "react";
import { BsHouses } from "react-icons/bs";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar(){

    const nav =[
        {
            id:1,
            title: "Home",
            link: "home"
        },
        {
            id:2,
            title: "About Us",
            link: "about"
        },
        {
            id:3,
            title: "House Design",
            link: "design"
        },
        {
            id:4,
            title: "Get in touch",
            link: "git"
        },
    ]


    const [menuOpen, setMenuOpen] = useState(false)

    const menuClick =()=>{
        setMenuOpen(prev => !prev)
    }

    return(
        <>
            <nav className={`w-[90%] h-[4em] mx-auto bg-white/30 backdrop-blur-xl fixed top-3 left-[50%] translate-x-[-50%] z-40 rounded-full flex justify-between items-center border-2 `}>
                <label htmlFor="logo"
                className="flex  font-bold ml-5 "
                >
                    <BsHouses className="text-2xl"/>
                    <h1 className="underline">
                        OUSING
                    </h1>
                </label>

                

                <div className={`hidden md:flex justify-between items-center space-x-5 mr-5`}>
                    {nav.map((navItem) =>
                        <a key={navItem.id} href={`#${navItem.link}`} className="font-semibold hover:underline md:text-lg lg:text-xl">{navItem.title}</a>
                    )}    
                </div>         
                
                <div className="w-3 h3" />
                
                <div className="md:hidden mr-5 font-bold text-2xl w-10 h-7 pl-2 overflow-hidden">
                    <div className={`space-y-2 cursor-pointer  ${menuOpen ? `translate-y-[-2%]` : `translate-y-0`}`}>
                        {
                            menuOpen
                            ? <button className="cursor-pointer" onClick={menuClick}>
                                <FaXmark />   
                            </button>
                            : <button className="cursor-pointer" onClick={menuClick}>
                                <FaBars  />   
                            </button>
                        }  
                    </div>    
                </div>    
            </nav>
            <div className={`md:hidden flex flex-col justify-between items-center space-y-4 fixed top-0 left-5 w-[90%] z-10 bg-white/30 backdrop-blur-sm rounded-2xl animate-in navAnimation duration-300 ${menuOpen ? `translate-y-19` : `translate-y-[-150%]`}`}>
                    {nav.map((navItem) =>
                        <a key={navItem.id} className="font-semibold hover:underline items-start w-[30%] sm:text-sm md:text-base">{navItem.title}</a>
                    )}    
                </div>
        </>
    )
}