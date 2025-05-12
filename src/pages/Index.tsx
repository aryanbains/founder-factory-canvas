
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";

const Index = () => {
  const titleSpring = useSpring({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    config: { tension: 100, friction: 20 },
    delay: 300,
  });

  return (
    <Layout>
      <section className="h-screen flex items-center justify-center">
        <Container>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 border border-electric/30 rounded-full text-sm text-electric mb-4">
                Welcome to
              </span>
            </motion.div>
            
            <animated.h1 
              style={titleSpring}
              className="text-5xl md:text-7xl font-bold mb-6 text-gradient-primary"
            >
              The Founder Factory
            </animated.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto"
            >
              Building the future of entrepreneurship.
            </motion.p>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Index;
