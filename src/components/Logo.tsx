import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <motion.div 
          className="h-10 w-10 rounded-full bg-gradient-to-br from-finter-accent to-finter-highlight flex items-center justify-center shadow-md relative z-10 animate-glow"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="text-white font-bold text-xl">F</span>
        </motion.div>
        <div className="absolute -inset-1 bg-gradient-to-br from-finter-accent/30 to-finter-highlight/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="font-bold text-xl text-white">Fintern Navigator</div>
    </div>
  );
};

export default Logo;
