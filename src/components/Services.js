import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRobot } from 'react-icons/fa';

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col items-center justify-center px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center text-primary drop-shadow"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      <motion.div
        className="max-w-6xl w-full grid md:grid-cols-3 gap-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="group p-6 bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.05] hover:rotate-x-6 hover:rotate-y-3 hover:brightness-110">
          <FaCode className="text-4xl text-teal-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-white transition-colors duration-300">Web Development</h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
            Building modern and responsive web applications using Java (React, Node.js, Spring Boot)
          </p>
        </div>

        <div className="group p-6 bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.05] hover:rotate-x-6 hover:rotate-y-3 hover:brightness-110">
          <FaServer className="text-4xl text-teal-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-white transition-colors duration-300">API Development</h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
            Creating RESTful APIs for seamless data exchange between front-end and back-end.
          </p>
        </div>

        <div className="group p-6 bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.05] hover:rotate-x-6 hover:rotate-y-3 hover:brightness-110">
          <FaRobot className="text-4xl text-teal-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-white transition-colors duration-300">Automation</h3>
          <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
            Developing scripts to automate tasks, data scraping, and workflow optimization.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
