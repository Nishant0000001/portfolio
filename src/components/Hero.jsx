import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion"
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiPostgresql, SiTailwindcss } from "react-icons/si"

const SKILLS = [
  { name: "Java", icon: FaJava, color: "text-orange-500", transform: "rotateY(0deg) translateZ(180px)" },
  { name: "React", icon: FaReact, color: "text-blue-400", transform: "rotateY(60deg) translateZ(180px)" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", transform: "rotateY(120deg) translateZ(180px)" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300", transform: "rotateY(180deg) translateZ(180px)" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", transform: "rotateY(240deg) translateZ(180px)" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", transform: "rotateY(300deg) translateZ(180px)" },
]

const Hero = () => {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const springX = useSpring(rotateX, { stiffness: 50, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 50, damping: 20 })

  useAnimationFrame((time) => {
    rotateY.set(rotateY.get() + 0.15)
    rotateX.set(Math.sin(time / 2500) * 8)
  })

  const handleDrag = (_, info) => {
    rotateX.set(rotateX.get() - info.delta.y * 0.4)
    rotateY.set(rotateY.get() + info.delta.x * 0.4)
  }

  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden">
      {/* Local Hero glow (kept, this is GOOD) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10 pt-24 lg:pt-0">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Nishant
            </span>
          </h1>

          <p className="mt-8 max-w-lg text-white/80 text-lg md:text-xl leading-relaxed border-l-4 border-purple-500/40 pl-6">
            I build modern, scalable web applications with clean UI,
            strong fundamentals, and real-world problem solving.
          </p>
        </motion.div>

        {/* RIGHT: 3D SKILLS CAROUSEL */}
        <div className="flex justify-center items-center [perspective:1500px]">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex items-center justify-center">

            <motion.div
              style={{
                rotateX: springX,
                rotateY: springY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-32 h-32 pointer-events-none"
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
                      size={60}
                      className={`${skill.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                    />
                  </div>
                )
              })}
            </motion.div>

            {/* Drag Controller */}
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0}
              onDrag={handleDrag}
              className="
                absolute inset-0 z-20
                cursor-grab active:cursor-grabbing
                rounded-full
                w-[300px] h-[300px]
                lg:w-[450px] lg:h-[450px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
