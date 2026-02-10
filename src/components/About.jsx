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
          <p
            className="
              max-w-3xl
              text-white/85
              text-lg md:text-xl
              leading-relaxed
              border-l-4 border-purple-500/60
              pl-6
            "
          >
            I’m an MCA student actively preparing for a career in software
            development. I focus on building complete web applications that
            involve frontend, backend, databases, and real-world logic —
            not just isolated features or demos.
          </p>

          <p
            className="
              max-w-3xl
              text-white/75
              text-lg md:text-xl
              leading-relaxed
              pl-6
            "
          >
            My approach is simple: understand the problem deeply, design clean
            solutions, and write maintainable code. I care about how systems
            behave, how data flows, and how users experience the product.
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
