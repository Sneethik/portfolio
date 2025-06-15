import { motion } from "framer-motion";
import { FaGraduationCap, FaProjectDiagram, FaLaptopCode } from "react-icons/fa";

export default function Resume() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white perspective-[1000px]"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-center text-primary drop-shadow"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Resume
      </motion.h2>

      <div className="max-w-4xl w-full space-y-10">
        {/* Education Section */}
        <motion.div
          className="group p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 transform group-hover:scale-[1.05] group-hover:rotate-x-3 group-hover:rotate-y-3 group-hover:brightness-110"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4 mb-3">
            <FaGraduationCap className="text-2xl text-primary group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-teal-400 group-hover:text-white transition-colors duration-300">Education</h3>
          </div>
          <p className="text-lg text-gray-300 group-hover:text-gray-100 transition-colors duration-300">🎓 B.Tech in Data Science from <b>Anurag University</b></p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="group p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 transform group-hover:scale-[1.05] group-hover:rotate-x-3 group-hover:rotate-y-3 group-hover:brightness-110"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <FaLaptopCode className="text-2xl text-primary group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-teal-400 group-hover:text-white transition-colors duration-300">Technical Skills</h3>
          </div>
          <ul className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
            <li>✅ Python</li>
            <li>✅ Java</li>
            <li>✅ JavaScript</li>
            <li>✅ SQL (MySQL)</li>
            <li>✅ React & Tailwind CSS</li>
            <li>✅ Servlets & Web Dev</li>
            <li>✅ DSA</li>
            <li>✅ ML Basics</li>
          </ul>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="group p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 transform group-hover:scale-[1.05] group-hover:rotate-x-3 group-hover:rotate-y-3 group-hover:brightness-110"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-3">
            <FaProjectDiagram className="text-2xl text-primary group-hover:scale-125 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold text-teal-400 group-hover:text-white transition-colors duration-300">Projects</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
            <li>📌 Developed a <b>Hotel Booking System</b> using Java, MySQL, and JavaScript</li>
            <li>📌 Built a <b>Portfolio Website</b> with modern UI, animations, and responsive design</li>
          </ul>
        </motion.div>

        {/* Experience Timeline (commented) */}
        {/**
        <motion.div
          className="p-8 bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">Experience</h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4 ml-2">
              <p className="text-sm">[Commented Out for Future Use]</p>
            </div>
          </div>
        </motion.div>
        * */}
      </div>
    </section>
  );
}
