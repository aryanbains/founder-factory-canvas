
import { useState } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Container } from "@/components/ui/container";
import { ParticleField } from "@/components/hero/ParticleField";
import { AnimatedWord } from "@/components/hero/AnimatedWord";
import { ScrollIndicator } from "@/components/hero/ScrollIndicator";
import { HeroCTA } from "@/components/hero/HeroCTA";

export function Hero() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.06 
      }
    }
  };
  
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
    <section className="relative h-screen flex items-center justify-center">
      {/* Particle Canvas Background */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.8, delay: 0.2 }}
        >
          <Canvas camera={{ position: [0, 0, 2] }}>
            <ParticleField />
          </Canvas>
        </motion.div>
      )}
      
      {/* Fallback background for reduced motion */}
      {prefersReducedMotion && (
        <div className="absolute inset-0 bg-gradient-radial from-electric/10 to-transparent z-0" />
      )}
      
      <Container className="relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-[-0.02em] leading-[0.9] mb-6"
            variants={itemVariants}
          >
            {prefersReducedMotion ? (
              <span>THE FOUNDER FACTORY</span>
            ) : (
              <>
                <AnimatedWord text="THE" delay={0.1} />
                {' '}
                <AnimatedWord text="FOUNDER" delay={0.16} />
                {' '}
                <AnimatedWord text="FACTORY" delay={0.22} />
              </>
            )}
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            Brains behind bots. Vision behind ventures.
          </motion.p>
          
          {/* CTA Buttons */}
          <HeroCTA />
          
          {/* Scroll Indicator */}
          <ScrollIndicator />
        </motion.div>
      </Container>
    </section>
  );
}
