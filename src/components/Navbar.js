import { useState } from 'react';
import { motion } from 'framer-motion';
// Import icons from react-icons
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <div className="relative h-16 flex items-center justify-center">
        {/* Logo at extreme left */}
        <motion.div
          className="absolute left-4 text-primary text-2xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          MyPortfolio
        </motion.div>

        {/* Navigation Links (centered on larger screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-primary transition">
            Home
          </a>
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
          <a href="#resume" className="hover:text-primary transition">
            Resume
          </a>
          <a href="#services" className="hover:text-primary transition">
            Services
          </a>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Icons on the extreme right (desktop only) */}
        <div className="absolute right-16 hidden md:flex space-x-4">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaLinkedinIn size={20} />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Mobile Menu Button (on the right) */}
        <div className="absolute right-4 md:hidden">
          <button
            className="text-white"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16v2H4V5zm0 12h16v2H4v-2z"
                />
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

      {/* Mobile Menu (collapsible) */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4">
          <a
            href="#home"
            className="block py-2 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#resume"
            className="block py-2 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-primary"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>

          {/* Icons in mobile menu (optional) */}
          <div className="flex space-x-4 pt-4">
            <a
              href="https://www.linkedin.com/in/banda-sneethik-reddy-926244287/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/Sneethik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
