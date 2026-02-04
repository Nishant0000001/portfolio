import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import SectionWrapper from "./SectionWrapper"

function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="relative max-w-7xl mx-auto">

        {/* Softer ambient glow (no scene break) */}
        <div
          className="
            absolute -z-10
            bottom-0 left-1/2 -translate-x-1/2
            w-80 h-80
            bg-purple-600/5
            blur-[140px]
            rounded-full
            pointer-events-none
          "
        />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Connect
            </span>
          </h2>

          <p className="text-white/60 mt-3 max-w-xl">
            Open to internships, entry-level roles, and meaningful collaborations.
          </p>

          <div className="w-12 h-1 bg-purple-500/50 mt-4" />
        </motion.div>

        {/* Content flow (stack-first, then card) */}
        <div className="space-y-10">

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              max-w-3xl
              text-white/80
              text-lg md:text-xl
              leading-relaxed
              border-l-4 border-purple-500/40
              pl-6
            "
          >
            I enjoy collaborating on meaningful projects and learning through
            real-world challenges. If you think my skills align with your
            team or project, feel free to reach out.
          </motion.p>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              max-w-md
              bg-gray-900/35
              backdrop-blur-md
              border border-white/5
              rounded-2xl p-6
              space-y-5
            "
          >
            {/* Email */}
            <a
              href="mailto:nishantbijalwan1@gmail.com"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-purple-400 text-lg" />
              <span className="text-sm md:text-base">
                nishantbijalwan1@gmail.com
              </span>
            </a>

            {/* Phone */}
            <a
              href="tel:+918439885434"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors"
            >
              <FaPhoneAlt className="text-purple-400 text-lg" />
              <span className="text-sm md:text-base">
                +91 84398 85434
              </span>
            </a>

            <div className="h-px bg-white/10" />

            {/* Social Links */}
            <div className="flex gap-8 text-2xl text-white/50">
              <a
                href="https://github.com/Nishant0000001"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nishantbijalwan/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
