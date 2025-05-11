import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BackgroundBlurProps {
  className?: string;
  baseDelay?: number;
}

const BackgroundBlur: React.FC<BackgroundBlurProps> = ({ 
  className,
  baseDelay = 0
}) => {
  return (
    <motion.div 
      className={cn(
        "absolute rounded-full blur-[100px] pointer-events-none z-0",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ 
        duration: 1.5,
        delay: baseDelay 
      }}
    />
  );
};

export default BackgroundBlur; 