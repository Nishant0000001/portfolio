import SectionWrapper from "./SectionWrapper"
import { motion } from "framer-motion"

function About() {
  return (
    <SectionWrapper id="about">
      {/* Content wrapper ONLY controls width, not padding */}
      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Me
            </span>
          </h2>
          <div className="w-12 h-1 bg-purple-500/50 mt-2" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="
            max-w-3xl
            text-white/80
            text-lg md:text-xl
            leading-relaxed
            border-l-4 border-purple-500/40
            pl-6
          ">
            I’m an MCA student with a strong interest in full-stack web development.
            I enjoy building clean, responsive, and scalable web applications using
            modern technologies. I focus on writing readable code, understanding
            system design basics, and continuously improving my problem-solving skills.
          </p>

          <p className="
            max-w-3xl
            text-white/80
            text-lg md:text-xl
            leading-relaxed
            pl-6
          ">
            Currently, I’m strengthening my skills in React, Node.js, databases,
            and backend fundamentals while working on real-world projects to prepare
            for software developer roles.
          </p>
        </motion.div>

        {/* Very subtle local glow (integrates with global background) */}
        <div className="
          absolute -z-10
          top-10 right-0
          w-64 h-64
          bg-purple-600/5
          blur-[120px]
          rounded-full
        " />
      </div>
    </SectionWrapper>
  )
}

export default About
