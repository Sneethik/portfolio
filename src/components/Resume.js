import { motion } from "framer-motion";

export default function Resume() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="resume" className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Resume
      </motion.h2>

      <div className="max-w-3xl w-full space-y-6">
        {/* Education Section */}
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-xl font-semibold text-teal-400">Education</h3>
          <p className="mt-2">🎓 B.Tech in Data Science from <b>Anurag University</b></p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-teal-400">Technical Skills</h3>
          <ul className="mt-2 grid grid-cols-2 gap-3 text-sm">
            <li>✅ Python</li>
            <li>✅ Java</li>
            <li>✅ JavaScript</li>
            <li>✅ SQL (MySQL)</li>
            <li>✅ React & Tailwind CSS</li>
            <li>✅ Servlets & Web Development</li>
            <li>✅ Data Structures & Algorithms</li>
            <li>✅ Machine Learning Basics</li>
          </ul>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-teal-400">Projects</h3>
          <p className="mt-2">📌 Developed a <b>Hotel Booking System</b> using Java, MySQL, and JavaScript</p>
          <p className="mt-1">📌 Built a <b>Portfolio Website</b> with animations & modern UI</p>
        </motion.div>
      </div>
    </section>
  );
}
