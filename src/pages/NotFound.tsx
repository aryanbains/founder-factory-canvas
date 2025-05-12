
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";

const NotFound = () => {
  return (
    <Layout>
      <section className="h-screen flex items-center justify-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">404</h1>
            <p className="text-xl text-foreground/70 mb-8">
              The page you're looking for doesn't exist.
            </p>
            <a
              href="/"
              className="inline-block bg-electric hover:bg-electric/90 text-white px-6 py-3 rounded-md transition-colors"
            >
              Back to Home
            </a>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default NotFound;
