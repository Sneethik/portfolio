import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center">
      <div>
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sneethik Reddy
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I&apos;m a  Java Developer from Hyderabad
        </motion.h2>
        <motion.a
          href="#about"
          className="inline-block px-6 py-3 bg-primary text-black rounded-md font-semibold hover:bg-opacity-80 transition"
          whileHover={{ scale: 1.05 }}
        >
          About Me
        </motion.a>
      </div>
    </section>
  );
}
