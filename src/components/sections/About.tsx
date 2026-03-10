import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1, // ⬅️ 1 second gap between paragraphs
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};


export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_12rem] lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14">
          <div className="max-w-3xl">
            <SectionTitle title="About Me" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-base text-text-secondary leading-relaxed"
            >
              <motion.p variants={itemVariants}>
                Full-stack developer with 2 years of experience building scalable,
                user-focused web applications.
              </motion.p>

              <motion.p variants={itemVariants} className="opacity-90">
                I focus on clean solutions, performance, and maintainable
                JavaScript across frontend and backend.
              </motion.p>

              <motion.p variants={itemVariants} className="opacity-70">
                AI assists my workflow, but every output is reviewed and validated.
              </motion.p>
            </motion.div>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="sticky top-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0 overflow-hidden rounded-full border border-border bg-bg-secondary">
              <img
                src="/echoboy.png"
                className="h-full w-full object-cover opacity-80"
                draggable={false}
                alt="Kalab Tadesse portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
