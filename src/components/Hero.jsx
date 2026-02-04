import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion"
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiPostgresql, SiTailwindcss } from "react-icons/si"
import { useEffect, useState } from "react"

/* ---------------------------
   Mobile detector
--------------------------- */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return isMobile
}

const Hero = () => {
  const isMobile = useIsMobile()

  /* ---------------------------
     Motion values
  --------------------------- */
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(rotateX, { stiffness: 40, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 40, damping: 18 })

  /* ---------------------------
     Auto rotation (ALL devices)
  --------------------------- */
  useAnimationFrame((time) => {
    rotateY.set(rotateY.get() + 0.12)
    rotateX.set(Math.sin(time / 2600) * 6)
  })

  /* ---------------------------
     Drag (desktop only)
  --------------------------- */
  const handleDrag = (_, info) => {
    rotateX.set(rotateX.get() - info.delta.y * 0.3)
    rotateY.set(rotateY.get() + info.delta.x * 0.3)
  }

  /* ---------------------------
     3D depth (responsive)
  --------------------------- */
  const DEPTH = isMobile ? 110 : 180

  const SKILLS = [
    { icon: FaJava, color: "text-orange-500", t: `rotateY(0deg) translateZ(${DEPTH}px)` },
    { icon: FaReact, color: "text-blue-400", t: `rotateY(60deg) translateZ(${DEPTH}px)` },
    { icon: FaNodeJs, color: "text-green-500", t: `rotateY(120deg) translateZ(${DEPTH}px)` },
    { icon: SiPostgresql, color: "text-blue-300", t: `rotateY(180deg) translateZ(${DEPTH}px)` },
    { icon: SiTailwindcss, color: "text-cyan-400", t: `rotateY(240deg) translateZ(${DEPTH}px)` },
    { icon: SiJavascript, color: "text-yellow-400", t: `rotateY(300deg) translateZ(${DEPTH}px)` },
  ]

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[420px] h-[420px] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="
        relative z-10 w-full max-w-7xl
        px-6 md:px-24
        grid grid-cols-1 lg:grid-cols-2
        gap-12 lg:gap-20
        items-center
        py-20 lg:py-0
      ">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Nishant
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-white/80 text-lg md:text-xl leading-relaxed border-l-4 border-purple-500/40 pl-6">
            I build modern, scalable web applications with clean UI,
            strong fundamentals, and real-world problem solving.
          </p>
        </motion.div>

        {/* 3D SKILLS */}
        <div className="flex justify-center items-center [perspective:1200px]">
          <div className="relative w-56 h-56 lg:w-80 lg:h-80">

            <motion.div
              style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {SKILLS.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={i}
                    style={{ transform: s.t }}
                    className="absolute"
                  >
                    <Icon
                      size={isMobile ? 42 : 60}
                      className={`${s.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                    />
                  </div>
                )
              })}
            </motion.div>

            {/* Drag overlay ONLY on desktop */}
            {!isMobile && (
              <motion.div
                drag
                onDrag={handleDrag}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
