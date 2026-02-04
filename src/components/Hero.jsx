import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion"
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiPostgresql, SiTailwindcss } from "react-icons/si"
import { useEffect, useState } from "react"

/* =========================
   Responsive helpers
========================= */
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

  /* =========================
     Motion values
  ========================= */
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(rotateX, { stiffness: 50, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 50, damping: 20 })

  /* =========================
     Animation (desktop only)
  ========================= */
  useAnimationFrame((time) => {
    if (isMobile) return
    rotateY.set(rotateY.get() + 0.15)
    rotateX.set(Math.sin(time / 2500) * 8)
  })

  /* =========================
     Drag handler (desktop only)
  ========================= */
  const handleDrag = (_, info) => {
    rotateX.set(rotateX.get() - info.delta.y * 0.4)
    rotateY.set(rotateY.get() + info.delta.x * 0.4)
  }

  /* =========================
     Skills depth (responsive)
  ========================= */
  const DEPTH = isMobile ? 120 : 180

  const SKILLS = [
    { icon: FaJava, color: "text-orange-500", transform: `rotateY(0deg) translateZ(${DEPTH}px)` },
    { icon: FaReact, color: "text-blue-400", transform: `rotateY(60deg) translateZ(${DEPTH}px)` },
    { icon: FaNodeJs, color: "text-green-500", transform: `rotateY(120deg) translateZ(${DEPTH}px)` },
    { icon: SiPostgresql, color: "text-blue-300", transform: `rotateY(180deg) translateZ(${DEPTH}px)` },
    { icon: SiTailwindcss, color: "text-cyan-400", transform: `rotateY(240deg) translateZ(${DEPTH}px)` },
    { icon: SiJavascript, color: "text-yellow-400", transform: `rotateY(300deg) translateZ(${DEPTH}px)` },
  ]

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-start lg:items-center justify-center overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10 pt-16 sm:pt-20 lg:pt-0">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
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

        {/* RIGHT: 3D SKILLS */}
        <div className="flex justify-center items-center [perspective:1200px]">
          <div className="relative w-56 h-56 lg:w-80 lg:h-80 flex items-center justify-center">

            {/* 3D Core */}
            <motion.div
              style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-28 h-28 lg:w-32 lg:h-32 pointer-events-none"
            >
              {SKILLS.map((skill, i) => {
                const Icon = skill.icon
                return (
                  <div
                    key={i}
                    style={{ transform: skill.transform }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Icon
                      size={isMobile ? 44 : 60}
                      className={`${skill.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                    />
                  </div>
                )
              })}
            </motion.div>

            {/* Drag layer (desktop only) */}
            <motion.div
              drag={!isMobile}
              onDrag={isMobile ? undefined : handleDrag}
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0}
              className={`
                absolute inset-0 z-20 rounded-full
                ${isMobile ? "pointer-events-none" : "cursor-grab active:cursor-grabbing"}
                w-[220px] h-[220px]
                lg:w-[450px] lg:h-[450px]
              `}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
