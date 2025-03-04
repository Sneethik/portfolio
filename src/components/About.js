import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center px-8">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-xl text-center text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        I'm a passionate Java developer based in Hyderabad. I specialize in building efficient, scalable backend systems, web applications, and more. I love exploring new technologies and improving my craft.
      </motion.p>
    </section>
  );
}
