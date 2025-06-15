import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = ['home', 'about', 'resume', 'services', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sections = navLinks.map(id => document.getElementById(id));
      const current = sections.find(
        section =>
          section &&
          section.offsetTop - 80 <= scrollTop &&
          scrollTop < section.offsetTop + section.offsetHeight - 80
      );
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="relative h-16 flex items-center justify-center">
        <motion.div
          className="absolute left-4 text-primary text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ rotateY: 10 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          MyPortfolio
        </motion.div>

        <motion.div className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <motion.a
              key={link}
              href={`#${link}`}
              className={`capitalize transition tracking-wide ${
                activeSection === link ? 'text-primary' : 'hover:text-primary'
              }`}
              whileHover={{ scale: 1.1, rotateZ: -1 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <div className="absolute right-16 hidden md:flex space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/banda-sneethik-reddy-926244287/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            whileHover={{ scale: 1.2, rotate: 5 }}
          >
            <FaLinkedinIn size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/Sneethik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            whileHover={{ scale: 1.2, rotate: -5 }}
          >
            <FaGithub size={20} />
          </motion.a>
        </div>

        <div className="absolute right-4 md:hidden">
          <button className="text-white" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 12h16v2H4v-2z" />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-black px-4 pb-6 pt-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <motion.a
                key={link}
                href={`#${link}`}
                className="block py-2 hover:text-primary capitalize"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.97 }}
              >
                {link}
              </motion.a>
            ))}

            <div className="flex space-x-4 pt-4">
              <motion.a
                href="https://www.linkedin.com/in/banda-sneethik-reddy-926244287/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedinIn size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/Sneethik"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
                whileHover={{ scale: 1.2 }}
              >
                <FaGithub size={20} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
