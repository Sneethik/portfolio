import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center px-8">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>
      <motion.div
        className="max-w-4xl text-center text-gray-300 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <div className="p-4 bg-gray-800 rounded-md">
          <h3 className="font-semibold mb-2">Web Development</h3>
          <p>Building modern and responsive web applications with Java (React,NodeJs,SpringBoot)</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-md">
          <h3 className="font-semibold mb-2">API Development</h3>
          <p>Creating Restful APIs for seamless data exchange between front-end and back-end.</p>
        </div>
        <div className="p-4 bg-gray-800 rounded-md">
          <h3 className="font-semibold mb-2">Automation</h3>
          <p>Developing scripts to automate tasks, data scraping, and workflow optimization.</p>
        </div>
      </motion.div>
    </section>
  );
}
