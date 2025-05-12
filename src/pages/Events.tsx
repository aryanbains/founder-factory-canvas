
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";
import { EventCard } from "@/components/ui/EventCard";
import { Button } from "@/components/ui/button";
import events from "@/data/events.json";

type EventFilter = "all" | "upcoming" | "past";

const Events = () => {
  const [filter, setFilter] = useState<EventFilter>("all");
  
  const today = new Date();
  
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    
    if (filter === "upcoming") {
      return eventDate >= today;
    }
    
    if (filter === "past") {
      return eventDate < today;
    }
    
    return true;
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
              Where innovation meets action. Join our community events to learn, connect, and grow.
            </p>
          </motion.div>
          
          <div className="flex justify-end mb-8">
            <div className="inline-flex rounded-md shadow-sm">
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                className={`rounded-l-md rounded-r-none ${filter === "all" ? "bg-electric" : ""}`}
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button 
                variant={filter === "upcoming" ? "default" : "outline"}
                className={`rounded-none border-x-0 ${filter === "upcoming" ? "bg-electric" : ""}`}
                onClick={() => setFilter("upcoming")}
              >
                Upcoming
              </Button>
              <Button 
                variant={filter === "past" ? "default" : "outline"}
                className={`rounded-r-md rounded-l-none ${filter === "past" ? "bg-electric" : ""}`}
                onClick={() => setFilter("past")}
              >
                Past
              </Button>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, i) => (
                <motion.div key={event.slug} variants={itemVariants}>
                  <EventCard {...event} isPriority={i < 3} />
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-foreground/70 text-lg">
                  No events found for the selected filter.
                </p>
              </div>
            )}
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default Events;
