
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";

const Events = () => {
  return (
    <Layout>
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Coming Soon.
            </p>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default Events;
