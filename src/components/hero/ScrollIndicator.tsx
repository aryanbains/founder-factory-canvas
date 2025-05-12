
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  const scrollIndicatorVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 6, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <motion.div
      className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      variants={scrollIndicatorVariants}
      initial="initial"
      animate="animate"
    >
      <ChevronDown className="text-foreground/60 h-8 w-8" />
    </motion.div>
  );
}
