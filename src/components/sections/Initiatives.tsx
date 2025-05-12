
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Brain, Rocket, Award, BookOpen, BarChart3, Lightbulb } from "lucide-react";

interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isActive: boolean;
}

const InitiativeCard = ({ icon, title, description, isActive }: InitiativeCardProps) => {
  return (
    <motion.div
      className="w-full md:w-[320px] h-auto md:h-[440px] p-6 rounded-xl border border-white/6 backdrop-blur-sm flex flex-col gap-6"
      animate={{
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? 1.04 : 1,
        borderColor: isActive ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0.06)"
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center">
        <div className="text-electric">
          {icon}
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl font-semibold mb-3">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </motion.div>
  );
};

export function Initiatives() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const initiatives = [
    {
      icon: <Brain size={32} />,
      title: "Startup Failure Analysis",
      description: "Decode the missteps of fallen giants and extract priceless lessons."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "AI-Driven Problem Solving",
      description: "Deploy cutting-edge models to crack real-world puzzles."
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Revenue Challenges",
      description: "Turn theory into cash with weekend money-making sprints."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning from Failures",
      description: "Candid fireside chats with founders who've been to zero and back."
    },
    {
      icon: <Rocket size={32} />,
      title: "Business Model Redesign",
      description: "Hack business blueprints for 10× efficiency and scale."
    },
    {
      icon: <Award size={32} />,
      title: "Skill Development",
      description: "Master high-value skills that hire at ₹₹₹ or launch at 🚀."
    }
  ];
  
  // Use the scroll progress to determine which initiative is active
  const activeIndex = useTransform(
    scrollYProgress,
    [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1],
    [0, 0, 1, 2, 3, 4, 5]
  );
  
  // For reducing-motion users, we'll use a different approach
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section 
      ref={containerRef}
      className="min-h-screen py-24 bg-gradient-to-b from-onyx to-carbon/40"
      style={{ 
        perspective: "1000px"
      }}
    >
      <Container className="h-full">
        <div className="sticky top-24 flex flex-col md:flex-row gap-12 md:gap-8">
          <div className="w-full md:w-2/5 space-y-8 md:space-y-16 md:min-h-[600px]">
            {prefersReducedMotion ? (
              <div className="space-y-12">
                {initiatives.map((initiative, i) => (
                  <InitiativeCard 
                    key={i}
                    icon={initiative.icon}
                    title={initiative.title}
                    description={initiative.description}
                    isActive={true}
                  />
                ))}
              </div>
            ) : (
              <div className="relative h-[600px]">
                {initiatives.map((initiative, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-0 left-0 w-full"
                    style={{
                      opacity: useTransform(
                        activeIndex,
                        i => i === i ? 1 : 0
                      ),
                      y: useTransform(
                        activeIndex,
                        v => (v === i ? 0 : v < i ? -50 : 50)
                      ),
                    }}
                  >
                    <InitiativeCard 
                      icon={initiative.icon}
                      title={initiative.title}
                      description={initiative.description}
                      isActive={activeIndex.get() === i}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          <div className="w-full md:w-3/5 md:pl-12">
            <motion.h2
              className="text-4xl md:text-6xl font-bold leading-tight"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
                y: useTransform(scrollYProgress, [0, 0.1], [50, 0])
              }}
            >
              Six groundbreaking initiatives to <span className="text-gradient-primary">elevate founders</span> at every stage
            </motion.h2>
            
            <motion.p
              className="text-xl text-foreground/70 mt-6 max-w-xl"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
                y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
              }}
            >
              Our programs are designed to break through barriers, challenge conventions, and accelerate your growth—whether you're just starting out or scaling to new heights.
            </motion.p>
          </div>
        </div>
      </Container>
    </section>
  );
}
