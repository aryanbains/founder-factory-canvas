
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroCTAProps {
  delay?: number;
}

export function HeroCTA({ delay = 1 }: HeroCTAProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      <Button
        className="bg-electric hover:bg-electric/90 text-white px-8 py-6 text-lg"
        aria-label="Join the Founder Factory Community"
      >
        Join the Community
      </Button>
      <Button
        variant="outline"
        className="border-white/20 bg-transparent hover:bg-white hover:text-black px-8 py-6 text-lg"
        aria-label="View Upcoming Events"
      >
        Browse Events
      </Button>
    </motion.div>
  );
}
