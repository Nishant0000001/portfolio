import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import SectionWrapper from "./SectionWrapper"
import {
  FaLightbulb,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaAws,
  FaBug,
} from "react-icons/fa"
import {
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiSelenium,
  SiPostman,
  SiJira,
} from "react-icons/si"

/* ================= FLOW DATA ================= */

const FLOW = [
  {
    id: 0,
    title: "Idea & Logic",
    icon: FaLightbulb,
    color: "purple",
    tech: ["Problem Solving", "DSA", "System Thinking"],
  },
  {
    id: 1,
    title: "Frontend",
    icon: FaReact,
    color: "blue",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend",
    icon: FaNodeJs,
    color: "green",
    tech: ["Node.js", "Java", "REST APIs"],
  },
  {
    id: 3,
    title: "Database",
    icon: FaDatabase,
    color: "indigo",
    tech: ["PostgreSQL", "MySQL", "Schema Design"],
  },
  {
    id: 4,
    title: "Testing & QA",
    icon: FaBug,
    color: "pink",
    tech: ["Manual Testing", "Selenium", "Postman", "Jira"],
  },
  {
    id: 5,
    title: "Cloud & Deployment",
    icon: FaAws,
    color: "orange",
    tech: ["AWS", "Deployment", "CI/CD Basics"],
  },
]

/* ================= TECH ICON MAP ================= */

const TECH_ICONS = {
  "React.js": FaReact,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  Java: FaJava,
  PostgreSQL: SiPostgresql,
  Selenium: SiSelenium,
  Postman: SiPostman,
  Jira: SiJira,
}

/* ================= COLOR MAP ================= */

const COLOR_MAP = {
  purple: { bg: "bg-purple-500/15", border: "border-purple-500/60", glow: "shadow-[0_0_30px_rgba(168,85,247,0.4)]", text: "text-purple-400" },
  blue: { bg: "bg-blue-500/15", border: "border-blue-500/60", glow: "shadow-[0_0_30px_rgba(59,130,246,0.4)]", text: "text-blue-400" },
  green: { bg: "bg-green-500/15", border: "border-green-500/60", glow: "shadow-[0_0_30px_rgba(34,197,94,0.4)]", text: "text-green-400" },
  indigo: { bg: "bg-indigo-500/15", border: "border-indigo-500/60", glow: "shadow-[0_0_30px_rgba(99,102,241,0.4)]", text: "text-indigo-400" },
  pink: { bg: "bg-pink-500/15", border: "border-pink-500/60", glow: "shadow-[0_0_30px_rgba(236,72,153,0.4)]", text: "text-pink-400" },
  orange: { bg: "bg-orange-500/15", border: "border-orange-500/60", glow: "shadow-[0_0_30px_rgba(249,115,22,0.4)]", text: "text-orange-400" },
}

/* ================= COMPONENT ================= */

function Skills() {
  const [activeStep, setActiveStep] = useState(null)

  return (
    <SectionWrapper id="skills">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Development Flow
          </h2>
          <p className="text-white/60 mt-2 max-w-xl">
            From idea to deployment — including testing and quality assurance.
          </p>
          <div className="w-16 h-1 bg-purple-500/70 mt-3" />
        </div>

        {/* Mobile Hint (Top) */}
        <p className="md:hidden text-center text-white/40 text-sm mb-6">
          Tap a stage to explore the technologies
        </p>

        {/* FLOW */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-10">

          {/* MOBILE CENTER VERTICAL LINE */}
          <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/15 -translate-x-1/2" />

          {FLOW.map((step, index) => {
            const Icon = step.icon
            const isActive = activeStep === index
            const colors = COLOR_MAP[step.color]
            const isRight = index % 2 === 0

            return (
              <div key={step.id} className="relative flex flex-col items-center z-10">

                {/* Desktop connector */}
                {index !== FLOW.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-14 h-[2px] -translate-y-1/2 bg-white/15" />
                )}

                {/* Node */}
                <motion.div
                  onClick={() => setActiveStep(isActive ? null : index)}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-32 h-32 rounded-xl
                    flex flex-col items-center justify-center
                    cursor-pointer
                    backdrop-blur-md
                    border transition-all duration-300
                    ${
                      isActive
                        ? `${colors.bg} ${colors.border} ${colors.glow}`
                        : "bg-gray-900/40 border-white/10"
                    }
                  `}
                >
                  <Icon className={`text-2xl mb-2 ${colors.text}`} />
                  <h3 className="text-white font-semibold text-xs text-center">
                    {step.title}
                  </h3>
                </motion.div>

                {/* MOBILE BRANCH */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      <div
                        className={`md:hidden absolute top-1/2 h-[2px] w-8 bg-white/30 ${
                          isRight ? "left-1/2 ml-16" : "right-1/2 mr-16"
                        }`}
                      />

                      <motion.div
                        initial={{ opacity: 0, x: isRight ? 16 : -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isRight ? 16 : -16 }}
                        transition={{ duration: 0.25 }}
                        className={`
                          md:static
                          absolute
                          top-1/2
                          -translate-y-1/2
                          flex flex-col gap-3
                          ${isRight ? "left-[calc(50%+48px)]" : "right-[calc(50%+48px)]"}
                        `}
                      >
                        {step.tech.map((tech) => {
                          const TechIcon = TECH_ICONS[tech]
                          return (
                            <motion.div
                              key={tech}
                              className={`
                                flex items-center gap-3
                                px-4 py-2
                                rounded-lg
                                bg-gray-900/70
                                border border-white/10
                                text-sm text-white/80
                                whitespace-nowrap
                                ${colors.glow}
                              `}
                            >
                              {TechIcon && <TechIcon className={colors.text} />}
                              <span>{tech}</span>
                            </motion.div>
                          )
                        })}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

              </div>
            )
          })}
        </div>

        {/* Desktop Hint (Bottom) */}
        <p className="hidden md:block text-center text-white/40 text-sm mt-14">
          Tap a stage to explore the technologies
        </p>

        {/* Glow */}
        <div className="absolute -z-10 inset-0 flex justify-center items-center">
          <div className="w-[520px] h-[520px] bg-purple-600/10 blur-[200px]" />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Skills
