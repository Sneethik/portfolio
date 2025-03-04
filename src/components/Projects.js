import { motion } from "framer-motion";

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
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-teal-400 flex items-center gap-2">
            🏨 Hotel Booking System
          </h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            A <b>web-based hotel booking system</b> built with <b>Java, Servlets, MySQL, and JavaScript</b>.  
            Users can book, cancel, and manage hotel reservations seamlessly.
          </p>
        </motion.div>

        {/* Search Magnet */}
        <motion.div
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold text-teal-400 flex items-center gap-2">
            🔍 Search Magnet
          </h3>
          <p className="mt-3 text-gray-300 leading-relaxed">
            A <b>lost & found platform</b> where users can <b>upload lost items</b>,  
            and those who find them can <b>contact the owner</b> to return them.
            Helps in reuniting lost items with their owners.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
