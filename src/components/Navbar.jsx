import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import LogoImage from "C:/Users/nisha/Documents/Myportfolio/portfolio/src/assets/navbar/Artme.jpg"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-lg bg-black/40
        border-b border-white/5
      "
    >
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-all duration-300">
            <img
              src={LogoImage}
              alt="Nishant"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-bold text-lg md:text-xl text-white group-hover:text-purple-400 transition-colors whitespace-nowrap">
            Nishant <span className="hidden sm:inline">Bijalwan</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-sm font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="
                relative text-white/70 transition-all
                hover:text-white
                after:absolute after:-bottom-2 after:left-0
                after:w-0 after:h-[2px]
                after:bg-gradient-to-r after:from-purple-400 after:to-pink-600
                after:transition-all hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl z-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              absolute top-20 left-0 w-full
              bg-black/80 backdrop-blur-xl
              border-t border-white/10
            "
          >
            <div className="flex flex-col py-6 px-8 space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-white/80 text-lg font-medium
                    hover:text-purple-400 transition-colors
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
