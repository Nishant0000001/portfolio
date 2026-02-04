import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa"
import { useState } from "react"

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/70 backdrop-blur-md px-4
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full max-w-3xl
              bg-[#0a0a0a]
              border border-white/10
              rounded-2xl
              p-6 md:p-8
              max-h-[90vh] overflow-y-auto
            "
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <FaTimes />
            </button>

            {/* IMAGE CAROUSEL */}
            {project.screenshots && (
              <div className="mb-6">
                <img
                  src={project.screenshots[activeImage]}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xl mb-3"
                />

                {/* Thumbnails */}
                <div className="flex gap-2 justify-center">
                  {project.screenshots.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`
                        w-16 h-10 rounded-md overflow-hidden
                        border transition-all
                        ${
                          activeImage === i
                            ? "border-purple-500"
                            : "border-white/10 opacity-60"
                        }
                      `}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>

            {/* Date */}
            {project.date && (
              <p className="text-white/50 text-sm mb-6">
                {project.date}
              </p>
            )}

            {/* FULL DESCRIPTION */}
            {project.fullDescription && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">
                  Description
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {/* FEATURES */}
            {project.features && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">
                  Features
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  {project.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* CHALLENGES */}
            {project.challenges && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">
                  Challenges
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  {project.challenges.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* WHAT I LEARNED (🔥 INTERVIEW GOLD) */}
            {project.learned && (
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">
                  What I Learned
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  {project.learned.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* TECH STACK */}
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs px-3 py-1
                      rounded-full
                      bg-white/5 text-white/70
                      border border-white/10
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* LINKS */}
            <div className="flex gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white"
                >
                  <FaGithub /> GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
