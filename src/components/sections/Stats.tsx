
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container } from "@/components/ui/container";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const StatItem = ({ 
  value, 
  label, 
  suffix = "", 
  prefix = "", 
  duration = 1.4 
}: StatItemProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const startTimestamp = performance.now();
    const step = (timestamp: number) => {
      // EaseOutExpo easing function
      const easeOutExpo = (t: number): number => (t === 1) ? 1 : 1 - Math.pow(2, -10 * t);
      
      const runtime = timestamp - startTimestamp;
      const progress = runtime / (duration * 1000);
      const easeProgress = easeOutExpo(Math.min(progress, 1));
      
      const currentCount = Math.round(easeProgress * end);
      
      setCount(currentCount);
      
      if (runtime < duration * 1000) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, value, duration]);
  
  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center p-6 bg-onyx border border-white/8 rounded-xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.08)]"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-2">
        {prefix}{suffix === "∞" ? "∞" : count}{suffix}
      </h3>
      <p className="text-foreground/70 text-center">{label}</p>
    </motion.div>
  );
};

export function Stats() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  return (
    <section className="py-24 bg-gradient-to-b from-carbon/30 to-onyx">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Impact in Numbers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-8">
          <StatItem 
            value={prefersReducedMotion ? 2300 : 0}
            label="Hours of Mentorship" 
            suffix="+"
          />
          <StatItem 
            value={prefersReducedMotion ? 47 : 0}
            label="Cr Combined Revenue Generated" 
            prefix="₹" 
            suffix=" Cr"
          />
          <StatItem 
            value={prefersReducedMotion ? 120 : 0}
            label="Startup Ideas Incubated" 
            suffix="+"
          />
          <StatItem 
            value={prefersReducedMotion ? 27 : 0}
            label="Industry-Backed Workshops"
          />
          <StatItem 
            value={0} 
            label="Coffee Cups Consumed" 
            suffix="∞"
          />
        </div>
      </Container>
    </section>
  );
}
