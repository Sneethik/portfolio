import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaTools, FaJava, FaGithub, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiTailwindcss } from 'react-icons/si';

export default function About() {
  return (
    <section id="about" className="min-h-screen px-8 py-16 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.img
          src="/assets/profile.jpg"
          alt="Profile"
          className="w-52 h-52 object-cover rounded-full border-4 border-primary shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <div className="text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-4 text-primary drop-shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="max-w-2xl text-gray-300 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a passionate <span className="text-primary font-semibold">Java Developer</span> based in Hyderabad with a strong focus on backend development. I specialize in scalable systems, robust APIs, and intuitive web applications. I continuously explore new technologies and strive to write clean, efficient, and maintainable code.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start text-3xl text-primary"
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true }}
          >
            {[FaJava, SiSpringboot, FaGithub, FaReact, SiTailwindcss, SiMysql, FaDatabase].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="bg-gray-800 p-3 rounded-xl shadow-md hover:shadow-xl"
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/*
      <div className="mt-20 space-y-12">
        <motion.h3
          className="text-3xl font-semibold text-center mb-4 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience Timeline
        </motion.h3>

        <div className="border-l-2 border-primary pl-6 space-y-6 max-w-3xl mx-auto">
          {[
            { year: '2022', role: 'Intern - Java Developer', company: 'XYZ Tech', desc: 'Worked on microservice APIs using Spring Boot.' },
            { year: '2023', role: 'Junior Developer', company: 'ABC Innovations', desc: 'Built and deployed backend services and worked on React dashboards.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[22px] top-1.5" />
              <h4 className="text-xl font-bold">{item.year} — {item.role}</h4>
              <p className="text-gray-400">{item.company}</p>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      */}

      <div className="mt-20 max-w-4xl mx-auto">
        <motion.h3
          className="text-3xl font-semibold text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h3>

        <div className="space-y-4">
          {[['Java', 95], ['Spring Boot', 90], ['React', 85], ['MySQL', 88], ['Git & GitHub', 90]].map(([skill, value], i) => (
            <motion.div
              key={skill}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1">
                <span>{skill}</span>
                <span>{value}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-primary h-3 rounded-full"
                  style={{ width: `${value}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
