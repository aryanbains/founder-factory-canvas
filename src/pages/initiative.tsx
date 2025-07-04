import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Brain, Rocket, Award, BookOpen, BarChart3, Lightbulb, ArrowRight, Calendar, Users, MapPin, Clock } from "lucide-react";
import { useEffect } from "react";

// Add custom CSS for scrollbar hiding
const scrollbarHideStyle = `
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
`;

const Initiatives = () => {
  // Add scrollbar-hide style to document head
  useEffect(() => {
    // Create style element
    const styleEl = document.createElement('style');
    styleEl.innerHTML = scrollbarHideStyle;
    document.head.appendChild(styleEl);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Animation variants
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

  // Initiative data
  const initiatives = [
    {
      icon: <Brain size={32} />,
      title: "Startup Failure Analysis",
      description: "We decode the missteps of fallen giants and extract priceless lessons through detailed case studies, expert panels, and interactive workshops.",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
      stats: "21+ Startups Analyzed"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "AI-Driven Problem Solving",
      description: "Our AI-THON hackathons and workshops deploy cutting-edge models to crack real-world puzzles, fostering innovation and practical solutions.",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      stats: "500+ Participants"
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Revenue Challenges",
      description: "Turn theory into cash with our weekend money-making sprints, where teams compete to generate real revenue from innovative business models.",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      stats: "₹1.2M+ Generated"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning from Failures",
      description: "Candid fireside chats with founders who've been to zero and back, sharing raw insights about resilience, pivoting, and overcoming setbacks.",
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30",
      stats: "12+ Founder Stories"
    },
    {
      icon: <Rocket size={32} />,
      title: "Business Model Redesign",
      description: "Hack business blueprints for 10× efficiency and scale through collaborative workshops that challenge conventional thinking and foster innovation.",
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30",
      stats: "35+ Models Transformed"
    },
    {
      icon: <Award size={32} />,
      title: "Skill Development",
      description: "Master high-value skills that hire at premium rates or launch successful ventures through our intensive bootcamps and mentorship programs.",
      color: "from-cyan-500/20 to-teal-500/20",
      borderColor: "border-cyan-500/30",
      stats: "1000+ Skills Upgraded"
    }
  ];

  // Featured initiative details
  const featuredInitiative = {
    title: "AI-THON 1.0",
    subtitle: "Delhi NCR's Largest AI Hackathon",
    date: "April 15-16, 2023",
    location: "Delhi, India",
    attendees: "500+ Participants",
    description: "Our flagship AI hackathon brought together the brightest minds to build impactful AI agents and real-world solutions. Participants from across India collaborated in an intense 36-hour coding marathon, mentored by industry experts and AI researchers.",
    highlights: [
      "36-hour non-stop innovation challenge",
      "20+ industry mentors and AI experts",
      "₹5,00,000 prize pool across categories",
      "Workshops on cutting-edge AI technologies",
      "Networking with top tech companies and VCs"
    ],
    image: "https://i.ibb.co/kn87zsZ/IMG-20250505-WA0047.jpg"
  };

  // Upcoming initiatives
  const upcomingInitiatives = [
    {
      title: "Founder's Retreat 2.0",
      date: "June 10-12, 2023",
      description: "A weekend getaway for founders to reflect, strategize, and connect with fellow entrepreneurs in a serene environment.",
      tags: ["Networking", "Strategy", "Wellness"]
    },
    {
      title: "Tech Talent Fair",
      date: "July 22, 2023",
      description: "Connecting top technical talent with innovative startups and established tech companies through speed interviews and skill showcases.",
      tags: ["Recruitment", "Careers", "Tech"]
    },
    {
      title: "AI-THON 2.0",
      date: "September 8-10, 2023",
      description: "The second edition of our successful AI hackathon, now expanded to include specialized tracks for different AI applications and industries.",
      tags: ["AI", "Hackathon", "Innovation"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Our Initiatives</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Groundbreaking programs designed to transform ideas into successful ventures and elevate founders at every stage.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 bg-gradient-to-b from-onyx to-carbon/40">
        <Container>
          <motion.div
            className="flex overflow-x-auto pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl border ${initiative.borderColor} bg-gradient-to-br ${initiative.color} backdrop-blur-sm p-8 flex flex-col h-full transition-all duration-500 hover:scale-[1.02] hover:shadow-lg flex-shrink-0 w-[75vw] md:w-auto scroll-snap-align-start`}
                style={{ scrollSnapAlign: 'start', minWidth: '280px' }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <div className="text-white">
                    {initiative.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{initiative.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">{initiative.description}</p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="text-sm font-medium text-electric">{initiative.stats}</span>
                  <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent hover:text-electric">
                    <span className="mr-2">Learn more</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Featured Initiative */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-electric/5 to-rose/5 backdrop-blur-sm"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-electric/10 text-electric text-sm font-medium mb-6">
                  Featured Initiative
                </div>

                <h2 className="text-4xl font-bold mb-2">{featuredInitiative.title}</h2>
                <h3 className="text-2xl text-foreground/70 mb-6">{featuredInitiative.subtitle}</h3>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center text-foreground/60 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {featuredInitiative.date}
                  </div>
                  <div className="flex items-center text-foreground/60 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {featuredInitiative.location}
                  </div>
                  <div className="flex items-center text-foreground/60 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {featuredInitiative.attendees}
                  </div>
                </div>

                <p className="text-foreground/70 mb-6">
                  {featuredInitiative.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {featuredInitiative.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-electric/20 flex items-center justify-center mr-3 mt-1">
                        <div className="w-2 h-2 rounded-full bg-electric"></div>
                      </div>
                      <span className="text-foreground/80">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full md:w-auto bg-electric hover:bg-electric/90 text-white">
                  View Case Study
                </Button>
              </div>

              <div className="relative h-[300px] md:h-auto bg-gradient-to-br from-electric/20 to-rose/20">
                <img
                  src={featuredInitiative.image}
                  alt={featuredInitiative.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Upcoming Initiatives */}
      <section className="py-16 bg-gradient-to-b from-carbon/40 to-onyx">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Upcoming Initiatives</h2>
            <p className="text-foreground/70">Join us for these exciting upcoming programs and events.</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {upcomingInitiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-electric/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-electric/10 border border-electric/20">
                    <Calendar className="w-6 h-6 text-electric" />
                  </div>
                  <div className="text-sm text-foreground/60">
                    {initiative.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                <p className="text-foreground/70 text-sm mb-6">{initiative.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {initiative.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-electric/10 text-electric border border-electric/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 hover:border-electric/30 hover:text-electric">
              View All Upcoming Events
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to join our next initiative?</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Whether you're a first-time founder or a seasoned entrepreneur, our initiatives are designed to help you grow, learn, and connect.
            </p>
            <Button className="bg-electric hover:bg-electric/90 text-white px-8 py-6 text-lg">
              Apply Now
            </Button>
          </motion.div>
        </Container>
      </section>
    </Layout>
  );
};

export default Initiatives;