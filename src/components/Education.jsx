import { motion } from "framer-motion"
import SectionWrapper from "./SectionWrapper"
import { FaGraduationCap } from "react-icons/fa"

const education = [
  {
    year: "2024 – 2026",
    degree: "Master of Computer Applications (MCA)",
    institute: "Graphic Era University",
    description:
      "Focused on software development, backend systems, databases, and building application-oriented solutions aligned with industry practices.",
  },
  {
    year: "2021 – 2024",
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Dev Sanskriti Vishwavidyalaya",
    description:
      "Developed strong programming fundamentals and applied them through academic and practical full-stack projects.",
  },
]

function Education() {
  return (
    <SectionWrapper id="education">
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>

          <p className="text-white/60 mt-3 max-w-xl">
            Academic foundation supporting my growth as a software developer.
          </p>

          <div className="w-14 h-1 bg-purple-500/60 mt-3" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-16 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              {/* Timeline Icon */}
              <div
                className="
                  absolute -left-[24px] top-2
                  w-10 h-10 rounded-full
                  bg-gradient-to-r from-purple-500 to-pink-500
                  flex items-center justify-center
                  shadow-[0_0_25px_rgba(168,85,247,0.6)]
                  z-10
                "
              >
                <FaGraduationCap className="text-white text-lg" />
              </div>

              {/* Education Card */}
              <div
                className="
                  bg-gray-900/40
                  backdrop-blur-md
                  border border-white/10
                  rounded-2xl p-6
                  transition-all duration-300
                  hover:border-purple-500/50
                  hover:shadow-[0_0_45px_rgba(168,85,247,0.15)]
                "
              >
                <span className="text-xs text-purple-400 font-semibold">
                  {edu.year}
                </span>

                <h3 className="text-lg font-semibold text-white mt-2">
                  {edu.degree}
                </h3>

                <p className="text-white/70 text-sm mt-1">
                  {edu.institute}
                </p>

                <p className="text-white/55 text-sm mt-3 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle local glow */}
        <div
          className="
            absolute -z-10
            top-1/3 left-0
            w-72 h-72
            bg-purple-600/5
            blur-[160px]
            rounded-full
          "
        />
      </div>
    </SectionWrapper>
  )
}

export default Education
