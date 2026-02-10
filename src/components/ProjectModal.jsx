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
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <FaTimes />
            </button>

            {/* Screenshots */}
            {project.screenshots && (
              <div className="mb-8">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black mb-4">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={project.screenshots[activeImage]}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                    />
                  </AnimatePresence>
                </div>

                <div className="flex gap-2 justify-center flex-wrap">
                  {project.screenshots.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`
                        w-16 h-10 rounded-md overflow-hidden
                        border transition-all
                        ${
                          activeImage === i
                            ? "border-purple-500 opacity-100"
                            : "border-white/10 opacity-60 hover:opacity-100"
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

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              {project.date && (
                <p className="text-white/50 text-sm mt-1">
                  {project.date}
                </p>
              )}
            </div>

            {/* Overview */}
            {project.fullDescription && (
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-2">
                  Project Overview
                </h4>
                <p className="text-white/80 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {/* Features */}
            {project.features && (
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-white/75 space-y-1">
                  {project.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">
                  Technical Challenges
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  {project.challenges.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Learnings */}
            {project.learned && (
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">
                  What I Learned
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  {project.learned.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {project.tech && (
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
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
              </div>
            )}

            {/* Links */}
            <div className="flex gap-6 pt-4 border-t border-white/10">
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
                  <FaExternalLinkAlt /> Live Demo
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
