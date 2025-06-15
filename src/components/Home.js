import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-black text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 60, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          Sneethik Reddy
        </motion.h1>

        <motion.h2
          className="text-lg md:text-2xl mb-10 text-gray-400"
          initial={{ opacity: 0, y: 30, rotateY: 45 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          I&apos;m a Java Developer from Hyderabad
        </motion.h2>

        <motion.a
          href="#about"
          className="inline-block px-8 py-4 rounded-lg font-bold text-black bg-gradient-to-r from-cyan-400 to-lime-400 shadow-lg hover:shadow-cyan-400/50 transition-all"
          whileHover={{
            scale: 1.1,
            rotate: 2,
            boxShadow: '0px 0px 20px rgba(34, 211, 238, 0.6)',
          }}
        >
          About Me
        </motion.a>
      </motion.div>

      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-lime-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
