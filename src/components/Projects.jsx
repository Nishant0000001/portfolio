import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { useState } from "react"
import SectionWrapper from "./SectionWrapper"
import ProjectModal from "./ProjectModal"

// Project Images
import quizImg1 from "../assets/projects/quiz1.png"
import quizImg2 from "../assets/projects/quiz2.png"
import quizImg3 from "../assets/projects/quiz3.png"
import quizImg4 from "../assets/projects/quiz4.png"
import quizImg5 from "../assets/projects/quiz5.png"
import transportImg from "../assets/projects/transport.png"
import transportImg1 from "../assets/projects/transport1.png"
import examImg from "../assets/projects/exam.png"
import examImg1 from "../assets/projects/exam1.png"

const projects = [
  {
    title: "Smart Quiz Application",
    highlight: "Flagship Project",
    description:
      "A production-style quiz platform with role-based access, real-time scoring, and backend logic powered by data structures.",

    fullDescription:
      "Smart Quiz Application is a complete quiz management platform designed with real-world use in mind. It supports separate admin and user roles, dynamic quiz creation, timed assessments, and real-time evaluation using structured backend logic.",

    features: [
      "Role-based authentication (Admin & User)",
      "Dynamic quiz creation and management",
      "Real-time score calculation",
      "Timer-based quiz system",
      "Leaderboard implemented using BST logic",
    ],

    challenges: [
      "Designing efficient quiz flow using data structures",
      "Managing real-time state updates",
      "Handling edge cases during quiz submission",
    ],

    learned: [
      "Designing scalable full-stack applications",
      "Applying data structures in real-world scenarios",
      "Improving backend validation and API design",
    ],

    screenshots: [quizImg1, quizImg2, quizImg3, quizImg4, quizImg5],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "C"],
    github: "https://github.com/Nishant0000001/SmartQuiz",
    live: "https://nishant-smart-quiz.vercel.app/",
    image: quizImg1,
    date: "Nov 2024 – Dec 2024",
  },

  {
    title: "Transport Management System",
    description:
      "A backend-focused system for managing vehicles, routes, and operational data using a structured database design.",

    fullDescription:
      "Transport Management System is designed to handle vehicle records, route planning, and transport scheduling with a clean backend architecture and relational database model.",

    features: [
      "Vehicle and route management",
      "Relational database-driven records",
      "Clean and minimal user interface",
    ],

    challenges: [
      "Database schema design",
      "Handling relational data efficiently",
    ],

    learned: [
      "Backend system design with Java",
      "SQL query optimization and normalization",
    ],

    screenshots: [transportImg, transportImg1],
    tech: ["Java", "MySQL"],
    github: "https://github.com/yourusername/transport-system",
    live: "#",
    image: transportImg,
    date: "Jan 2024",
  },

  {
    title: "Online Examination System",
    description:
      "A web-based examination platform supporting secure login, timed exams, and automated result processing.",

    fullDescription:
      "Online Examination System allows authenticated users to attempt timed online exams with automatic evaluation and controlled submission handling.",

    features: [
      "Secure authentication",
      "Timed online examinations",
      "Automatic result evaluation",
    ],

    challenges: [
      "Managing session-based authentication",
      "Preventing invalid or duplicate submissions",
    ],

    learned: [
      "Understanding JSP lifecycle",
      "Improving backend validation techniques",
    ],

    screenshots: [examImg, examImg1],
    tech: ["Java", "JSP", "MySQL"],
    github: "https://github.com/yourusername/exam-system",
    live: "#",
    image: examImg,
    date: "2023",
  },
]

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Projects
            </span>
          </h2>
          <p className="text-white/60 mt-3 max-w-xl">
            A selection of real-world projects showcasing my approach to
            full-stack development and backend logic.
          </p>
          <div className="w-14 h-1 bg-purple-500/60 mt-3" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                max-w-sm w-full
                cursor-pointer group relative
                bg-gray-900/35 backdrop-blur-md
                border border-white/10
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:border-purple-500/50
                hover:bg-gray-900/50
                hover:shadow-[0_0_45px_rgba(168,85,247,0.18)]
              "
            >
              {/* Highlight Badge */}
              {project.highlight && (
                <span className="
                  absolute top-3 right-3 z-20
                  text-xs px-3 py-1 rounded-full
                  bg-purple-500/20 text-purple-300
                ">
                  {project.highlight}
                </span>
              )}

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400">
                  {project.title}
                </h3>

                <p className="text-white/75 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-3 py-1 bg-white/5 text-white/65 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-white/60 hover:text-white"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-white/60 hover:text-white"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SectionWrapper>
  )
}

export default Projects
