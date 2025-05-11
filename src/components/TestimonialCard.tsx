
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarIndex?: number;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatarIndex = 1,
  className,
  delay = 0
}) => {
  // Generate a consistent avatar based on the index
  const avatarColors = [
    'bg-finter-blue text-white',
    'bg-finter-accent text-white',
    'bg-finter-highlight text-white',
    'bg-finter-primary text-white',
    'bg-finter-yellow text-finter-primary',
  ];
  
  const avatarColor = avatarColors[(avatarIndex - 1) % avatarColors.length];
  const initials = author.split(' ').map(name => name[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <Card className={cn("overflow-hidden backdrop-blur-md bg-white/70", className)}>
        <CardContent className="p-6 relative">
          <Quote className="text-finter-accent/20 absolute top-4 right-4" size={40} />
          <p className="text-finter-secondary text-base mb-4 pt-4 relative z-10">
            "{quote}"
          </p>
          <div className="flex items-center mt-6">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-3", avatarColor)}>
              <span className="font-medium text-sm">{initials}</span>
            </div>
            <div>
              <h4 className="font-medium text-finter-primary">{author}</h4>
              <p className="text-sm text-finter-secondary">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
