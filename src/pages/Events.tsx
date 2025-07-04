
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      year: date.getFullYear(),
      fullDate: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
  };

  const getEventStatus = (dateString: string) => {
    const eventDate = new Date(dateString);
    return eventDate >= today ? "upcoming" : "past";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
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
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm p-1">
              <Button 
                variant={filter === "all" ? "default" : "ghost"}
                className={`rounded-lg px-6 py-2 transition-all duration-300 ${
                  filter === "all" 
                    ? "bg-electric text-white shadow-lg shadow-electric/25" 
                    : "text-foreground/70 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setFilter("all")}
              >
                All Events
              </Button>
              <Button 
                variant={filter === "upcoming" ? "default" : "ghost"}
                className={`rounded-lg px-6 py-2 transition-all duration-300 ${
                  filter === "upcoming" 
                    ? "bg-electric text-white shadow-lg shadow-electric/25" 
                    : "text-foreground/70 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setFilter("upcoming")}
              >
                Upcoming
              </Button>
              <Button 
                variant={filter === "past" ? "default" : "ghost"}
                className={`rounded-lg px-6 py-2 transition-all duration-300 ${
                  filter === "past" 
                    ? "bg-electric text-white shadow-lg shadow-electric/25" 
                    : "text-foreground/70 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setFilter("past")}
              >
                Past Events
              </Button>
            </div>
          </div>
          
          <motion.div 
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => {
                const dateInfo = formatDate(event.date);
                const status = getEventStatus(event.date);
                
                return (
                  <motion.div key={event.slug} variants={itemVariants}>
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm hover:border-electric/30 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-[1fr,400px]' : 'lg:grid-cols-[400px,1fr]'} gap-0`}>
                        <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} relative overflow-hidden`}>
                          <div 
                            className="aspect-[4/3] lg:aspect-auto lg:h-full bg-cover bg-center"
                            style={{ 
                              backgroundImage: `url(${event.coverImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute top-6 right-6">
                              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                status === 'upcoming' 
                                  ? 'bg-electric/20 text-electric border border-electric/30' 
                                  : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                              }`}>
                                {status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} p-8 lg:p-12 flex flex-col justify-center`}>
                          <div className="flex items-center gap-4 mb-6">
                            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-electric/10 border border-electric/20">
                              <span className="text-2xl font-bold text-electric">{dateInfo.day}</span>
                              <span className="text-xs text-electric/70 uppercase">{dateInfo.month}</span>
                            </div>
                            <div>
                              <div className="flex items-center text-foreground/60 text-sm mb-1">
                                <Calendar className="w-4 h-4 mr-2" />
                                {dateInfo.fullDate}
                              </div>
                              <div className="flex items-center text-foreground/60 text-sm">
                                <Clock className="w-4 h-4 mr-2" />
                                9:00 AM - 6:00 PM
                              </div>
                            </div>
                          </div>
                          
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-electric transition-colors duration-300">
                            {event.title}
                          </h2>
                          
                          <p className="text-foreground/70 text-lg mb-6 leading-relaxed">
                            {event.shortDesc}
                          </p>
                          
                          <div className="flex items-center gap-3 mb-8">
                            <MapPin className="w-4 h-4 text-foreground/50" />
                            <span className="text-foreground/60">Delhi, India</span>
                            <Users className="w-4 h-4 text-foreground/50 ml-4" />
                            <span className="text-foreground/60">500+ Attendees</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-8">
                            {event.tags.map((tag, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-sm rounded-full bg-electric/10 text-electric border border-electric/20 hover:bg-electric/20 transition-colors duration-200"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex gap-4">
                            <Button 
                              className={`${
                                status === 'upcoming' 
                                  ? 'bg-electric hover:bg-electric/90 shadow-lg shadow-electric/25' 
                                  : 'bg-gray-600 hover:bg-gray-700'
                              } transition-all duration-300`}
                              disabled={status === 'past'}
                            >
                              {status === 'upcoming' ? 'Register Now' : 'Event Completed'}
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-white/20 hover:border-electric/50 hover:bg-electric/5 transition-all duration-300"
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div variants={itemVariants} className="text-center py-24">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-electric/10 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-electric/60" />
                  </div>
                  <p className="text-foreground/70 text-lg mb-4">
                    No events found for the selected filter.
                  </p>
                  <p className="text-foreground/50 text-sm">
                    Try selecting a different filter or check back later for new events.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default Events;
