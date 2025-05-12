
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";
import { TeamCard } from "@/components/team/TeamCard";
import teamData from "@/data/team.json";
import "../css/team-card.css";

const Team = () => {
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
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Meet the innovators and problem-solvers behind The Founder Factory.
            </p>
          </motion.div>

          {/* Team grid with staggered masonry layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 relative">
            {teamData.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className={`
                  ${index % 3 === 1 ? 'lg:mt-12' : ''}
                `}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Team;
