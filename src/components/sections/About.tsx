import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
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
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <SectionTitle title="About Me" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary"
        >
          <motion.p variants={itemVariants}>
            Full-stack developer with 2 years of experience building scalable,
            user-focused web applications.
          </motion.p>

          <motion.p variants={itemVariants}>
            I focus on clean solutions, performance, and maintainable
            JavaScript across frontend and backend.
          </motion.p>

          <motion.p variants={itemVariants}>
            AI assists my workflow, but every output is reviewed and validated.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
