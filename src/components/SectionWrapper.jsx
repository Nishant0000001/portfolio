import { motion } from "framer-motion"

function SectionWrapper({ id, children }) {
  return (
    <section
      id={id}
      className="
        relative w-full
        pt-8 pb-6           /* MOBILE spacing */
        md:pt-24 md:pb-20    /* DESKTOP spacing */
        px-5 md:px-20
        overflow-hidden
      "
    >
      {/* Ultra-subtle depth layer */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015),transparent_70%)]
          pointer-events-none
        "
      />

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}  
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
