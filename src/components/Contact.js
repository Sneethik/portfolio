import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-8 text-center text-primary drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.div
        className="group relative max-w-xl p-8 text-center bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.05] hover:rotate-x-6 hover:rotate-y-3 hover:brightness-110"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
          Feel free to reach out via email:
        </p>
        <a
          href="mailto:sneethikreddy2@gmail.com"
          className="inline-flex items-center justify-center mt-4 text-lg font-semibold text-teal-400 hover:text-white transition-colors duration-300"
        >
          <FaEnvelope className="mr-2 text-xl" /> sneethikreddy2@gmail.com
        </a>
        <p className="mt-6 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
          Or connect on social media!
        </p>
      </motion.div>
    </section>
  );
}
