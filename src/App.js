import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading period
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {/* Floating icons in background */}
      <motion.img
        src="/assets/React.png"
        alt="Floating Icon 1"
        className="hidden md:block absolute top-20 left-10 w-12 h-12 pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <motion.img
        src="/assets/React.png"
        alt="F"
        className="hidden md:block absolute bottom-20 right-10 w-12 h-12 pointer-events-none"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />

      <Home />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
