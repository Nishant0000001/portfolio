import { motion } from "framer-motion"

function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="
        relative
        py-20 md:py-24
        px-6 md:px-20
        overflow-hidden
      "
    >
      {/* Ultra-subtle depth layer (NOT a section divider) */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015),transparent_70%)]
          pointer-events-none
        "
      />

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
