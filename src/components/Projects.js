import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center tracking-wide"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Hotel Booking System */}
        <motion.div
          className="group relative bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.05] hover:rotate-x-6 hover:rotate-y-3 hover:brightness-110"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold text-teal-400 group-hover:text-white transition-colors duration-300">
              🏨 Hotel Booking System
            </h3>
            <a
              href="https://github.com/your-hotel-booking-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaGithub className="text-2xl text-white hover:text-teal-400" />
            </a>
          </div>
          <p className="mt-3 text-gray-300 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
            A <b>web-based hotel booking system</b> built with <b>Java, Servlets, MySQL, and JavaScript</b>. Users can book, cancel, and manage hotel reservations seamlessly.
          </p>
        </motion.div>

        {/* Search Magnet */}
        <motion.div
          className="group relative bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.05] hover:rotate-x-6 hover:rotate-y-3 hover:brightness-110"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold text-teal-400 group-hover:text-white transition-colors duration-300">
              🔍 Search Magnet
            </h3>
            <a
              href="https://github.com/your-search-magnet-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaGithub className="text-2xl text-white hover:text-teal-400" />
            </a>
          </div>
          <p className="mt-3 text-gray-300 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
            A <b>lost & found platform</b> where users can <b>upload lost items</b>, and those who find them can <b>contact the owner</b> to return them. Helps in reuniting lost items with their owners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
