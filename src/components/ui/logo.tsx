
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <h1 className="text-gradient-primary text-2xl font-bold tracking-tight sm:text-3xl">
        The Founder Factory
      </h1>
    </motion.div>
  );
}
