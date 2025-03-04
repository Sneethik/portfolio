import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        className="w-16 h-16 border-4 border-t-transparent border-primary rounded-full"
      />
    </div>
  );
}
