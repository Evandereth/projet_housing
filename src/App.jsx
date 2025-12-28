import About from "./components/About"
import Design from "./components/Design"
import Footer from "./components/Footer"
import GIT from "./components/GIT"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className=" w-[95%] h-screen mx-auto relative">
      <section className="max-w-full h-full relative">
        <Navbar />
        <Hero />
        <Intro />
        <Design />
        <About />
        <GIT />
        <Footer />
      </section>
    </div>
  )
}

export default App
