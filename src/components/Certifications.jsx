import { motion } from "framer-motion"
import SectionWrapper from "./SectionWrapper"
import { FaAws, FaCertificate, FaExternalLinkAlt } from "react-icons/fa"

const certifications = [
  {
    title: "AWS Cloud Quest – Cloud Practitioner",
    provider: "Amazon Web Services (AWS)",
    year: "Feb 2026",
    link: "https://www.credly.com/badges/338adde1-b4bf-4862-8658-2a1f9b76eb48/public_url",
    icon: <FaAws className="text-orange-400 text-3xl" />,
  },
  {
    title: "Getting Started with Enterprise-grade AI",
    provider: "IBM",
    year: "July 2024",
    link: "https://www.credly.com/badges/40d11fca-6ac5-4e6b-b3a5-491785a1479e",
    icon: <FaCertificate className="text-blue-400 text-3xl" />,
  },
]

function Certifications() {
  return (
    <SectionWrapper id="certifications">
      {/* Width only — padding handled by SectionWrapper */}
      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-white/60 mt-2 max-w-xl">
            Industry-recognized credentials supporting my technical expertise
          </p>
          <div className="w-12 h-1 bg-purple-500/50 mt-3" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                group
                bg-gray-900/35
                backdrop-blur-md
                border border-white/5
                rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-500/40
                hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]
              "
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  {cert.icon}
                </div>
                <span className="text-xs text-white/50">
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-1">
                {cert.title}
              </h3>

              <p className="text-white/60 text-sm mb-4">
                {cert.provider}
              </p>

              {/* Action */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-medium
                    text-purple-400
                    hover:text-purple-300
                    transition-colors
                  "
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Subtle local glow */}
        <div className="
          absolute -z-10
          bottom-0 left-1/2 -translate-x-1/2
          w-72 h-72
          bg-purple-600/5
          blur-[140px]
          rounded-full
        " />
      </div>
    </SectionWrapper>
  )
}

export default Certifications
