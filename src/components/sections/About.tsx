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
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
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
    </section>
  );
}
