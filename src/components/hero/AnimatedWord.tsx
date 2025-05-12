
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface AnimatedWordProps {
  text: string;
  delay?: number;
}

export const AnimatedWord = ({ text, delay = 0 }: AnimatedWordProps) => {
  const chars = text.split('');
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const charVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: delay + i * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };
  
  return (
    <motion.div
      ref={ref}
      className="inline-block"
      initial="hidden"
      animate={controls}
    >
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={charVariants}
          className="inline-block"
          style={{ 
            display: char === ' ' ? 'inline-block' : undefined,
            width: char === ' ' ? '0.5em' : undefined 
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};
