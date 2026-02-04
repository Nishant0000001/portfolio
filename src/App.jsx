import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Education from "./components/Education"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="relative bg-[#0a0a0a] text-white overflow-hidden">

      {/* GLOBAL AMBIENT BACKGROUND (SAME AS HERO) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Primary center glow */}
        <div className="
          absolute top-[10%] left-1/2 -translate-x-1/2
          w-[700px] h-[700px]
          bg-purple-900/10
          rounded-full
          blur-[160px]
        " />

        {/* Secondary soft glow */}
        <div className="
          absolute top-[60%] right-[10%]
          w-[500px] h-[500px]
          bg-pink-900/10
          rounded-full
          blur-[140px]
        " />
      </div>

      {/* SITE CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </div>

    </div>
  )
}

export default App
