import { motion } from "framer-motion"
import SectionWrapper from "./SectionWrapper"
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa"
import {
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si"

const SKILLS_DATA = [
  { name: "Java", icon: FaJava, color: "text-orange-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "HTML", icon: FaHtml5, color: "text-red-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "Databases", icon: FaDatabase, color: "text-purple-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
]

function Skills() {
  return (
    <SectionWrapper id="skills">
      {/* Width only — padding handled by SectionWrapper */}
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Skills
            </span>
          </h2>

          <p className="text-white/60 mt-3 max-w-xl">
            Technologies I’ve used to build full-stack applications, APIs,
            and database-driven systems.
          </p>
          <div className="w-12 h-1 bg-purple-500/50 mt-2" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {SKILLS_DATA.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="
                  group relative
                  bg-gray-900/30
                  border border-white/5
                  rounded-xl p-6
                  flex flex-col items-center gap-4
                  transition-all duration-300
                  hover:border-purple-500/40
                  hover:bg-gray-900/40
                "
              >
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={36}
                    className={`${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />
                </div>

                <p className="
                  relative z-10
                  text-white/70
                  group-hover:text-white
                  font-medium text-xs
                  tracking-wider uppercase
                ">
                  {skill.name}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Subtle local glow (integrates with global canvas) */}
        <div className="
          absolute -z-10
          bottom-0 left-1/3
          w-72 h-72
          bg-purple-600/5
          blur-[140px]
          rounded-full
        " />
      </div>
    </SectionWrapper>
  )
}

export default Skills
