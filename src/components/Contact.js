import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="max-w-xl text-center text-gray-300 space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        <p>Feel free to reach out via email:</p>
        <p className="font-semibold">sneethikreddy2@gmail.com</p>
        <p>Or connect on social media!</p>
      </motion.div>
    </section>
  );
}
