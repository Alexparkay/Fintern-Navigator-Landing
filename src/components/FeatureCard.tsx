import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  className,
  delay = 0
}) => {
  return (
    <motion.div 
      className={cn(
        "relative overflow-hidden p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300", 
        className
      )} 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="relative z-10">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-blue-100/60">{description}</p>
      </div>

      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-purple-600/10 to-transparent blur-3xl pointer-events-none"></div>
    </motion.div>
  );
};

export default FeatureCard;
