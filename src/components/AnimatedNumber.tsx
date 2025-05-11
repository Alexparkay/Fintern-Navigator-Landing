
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  duration = 2000, 
  prefix = '',
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    
    hasAnimated.current = true;
    let start = 0;
    const end = value;
    
    // First three quarters of the animation go quicker
    const incrementTime = (duration / end) * 0.75;
    
    // Don't start at 0
    if (end > 100) {
      start = Math.floor(end / 10);
    }
    
    if (start === end) return;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedNumber;
