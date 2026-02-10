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
    focus: "Cloud fundamentals • AWS services • Deployment basics",
  },
  {
    title: "Getting Started with Enterprise-grade AI",
    provider: "IBM",
    year: "July 2024",
    link: "https://www.credly.com/badges/40d11fca-6ac5-4e6b-b3a5-491785a1479e",
    icon: <FaCertificate className="text-blue-400 text-3xl" />,
    focus: "Enterprise AI concepts • Responsible AI • Real-world use cases",
  },
]

function Certifications() {
  return (
    <SectionWrapper id="certifications">
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

          <p className="text-white/60 mt-3 max-w-xl">
            Credentials that strengthen my understanding of cloud platforms,
            system deployment, and emerging enterprise technologies.
          </p>

          <div className="w-14 h-1 bg-purple-500/60 mt-3" />
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
                bg-gray-900/40
                backdrop-blur-md
                border border-white/10
                rounded-2xl p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-500/50
                hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
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

              <p className="text-white/65 text-sm">
                {cert.provider}
              </p>

              {/* Focus */}
              <p className="text-white/50 text-sm mt-3 leading-relaxed">
                {cert.focus}
              </p>

              {/* Action */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2 mt-4
                    text-sm font-medium
                    text-purple-400
                    hover:text-purple-300
                    transition-colors
                  "
                >
                  View Credential
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Subtle local glow */}
        <div
          className="
            absolute -z-10
            bottom-0 left-1/2 -translate-x-1/2
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

export default Certifications
