
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

// Particle animation component
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += 0.0008;
      pointsRef.current.rotation.y += 0.0005;
    }
  });
  
  const [positions] = useState(() => {
    const positions = new Float32Array(2000 * 3);
    const p = new THREE.Vector3();
    
    for (let i = 0; i < positions.length; i += 3) {
      p.set(
        Math.random() * 2 - 1,
        Math.random() * 2 - 1,
        Math.random() * 2 - 1
      ).normalize().multiplyScalar(Math.random() * 2);
      
      positions[i] = p.x;
      positions[i + 1] = p.y;
      positions[i + 2] = p.z;
    }
    
    return positions;
  });
  
  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#1E90FF"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Word animation component for staggered text reveal
const AnimatedWord = ({ text, delay = 0 }: { text: string; delay?: number }) => {
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

export function Hero() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.1 
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
    <section className="relative h-screen flex items-center justify-center">
      {/* Particle Canvas Background */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
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
            className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-[-0.04em] mb-6"
            variants={itemVariants}
          >
            {prefersReducedMotion ? (
              <span>THE FOUNDER FACTORY</span>
            ) : (
              <>
                <AnimatedWord text="THE" delay={0.1} />
                {' '}
                <AnimatedWord text="FOUNDER" delay={0.3} />
                {' '}
                <AnimatedWord text="FACTORY" delay={0.5} />
              </>
            )}
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            Brains behind bots. Vision behind ventures.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
          >
            <Button
              className="bg-electric hover:bg-electric/90 text-white px-8 py-6 text-lg"
              aria-label="Join the Founder Factory Community"
            >
              Join the Community
            </Button>
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white hover:text-black px-8 py-6 text-lg"
              aria-label="View Upcoming Events"
            >
              Browse Events
            </Button>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            variants={scrollIndicatorVariants}
            initial="initial"
            animate="animate"
          >
            <ChevronDown className="text-foreground/60 h-8 w-8" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
