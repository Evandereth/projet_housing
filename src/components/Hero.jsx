
export default function Hero(){
    return(
        <>
            <section className={`w-full mt-3 min-h-screen lg:min-h-[50em] lg:bg-center rounded-2xl relative bg-[url('./img/img01.jpg')] bg-cover`}>
                <div className="absolute inset-0 bg-black/10 lg:bg-black/10 rounded-2xl" />

                <div className={`w-[85%] h-[10em] sm:w-[25em] md:w-[30em] md:h-[12em] lg:w-[35em] lg:h-[12em]  lg:bottom-20 rounded-2xl bg-white/50 backdrop-blur absolute bottom-10 left-3 p-3 flex flex-col justify-center items-start`}>
                    <p className="py-2 italic">
                        Crafting Tomorrow's Living Spaces.
                    </p>
                    <h1 className="text-2xl md:text-lg lg:text-3xl uppercase font-bold">
                        Discover you Luxury Dream Home.
                    </h1>
                </div>
            </section>
        </>
    )
}