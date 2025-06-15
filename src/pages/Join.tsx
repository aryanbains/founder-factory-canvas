
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Code, 
  Rocket, 
  Sparkles,
  Users,
  Brain,
  Target
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const benefits = [
  {
    icon: Brain,
    title: "AI & Tech Learning",
    description: "Access cutting-edge workshops and mentorship in AI and emerging technologies"
  },
  {
    icon: Users,
    title: "Network & Community",
    description: "Connect with like-minded innovators, entrepreneurs, and industry leaders"
  },
  {
    icon: Rocket,
    title: "Launch Your Startup",
    description: "Get support, resources, and guidance to turn your ideas into reality"
  },
  {
    icon: Target,
    title: "Exclusive Events",
    description: "Priority access to hackathons, pitch competitions, and industry meetups"
  }
];

export default function Join() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    year: "",
    interests: "",
    experience: "",
    motivation: "",
    skills: "",
    commitment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted! 🚀",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      institution: "",
      year: "",
      interests: "",
      experience: "",
      motivation: "",
      skills: "",
      commitment: ""
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-onyx via-carbon to-onyx">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <Container>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <Sparkles className="w-16 h-16 text-electric mx-auto mb-4" />
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                Join The
                <span className="text-gradient-primary bg-gradient-to-r from-electric to-rose bg-clip-text text-transparent">
                  {" "}Revolution
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed"
              >
                Ready to shape the future? Join our community of innovators, builders, and visionaries 
                who are redefining what's possible with technology and entrepreneurship.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 text-sm md:text-base"
              >
                <span className="bg-electric/20 text-electric px-4 py-2 rounded-full">
                  🚀 Early Access to Events
                </span>
                <span className="bg-rose/20 text-rose px-4 py-2 rounded-full">
                  🧠 AI Learning Resources
                </span>
                <span className="bg-electric/20 text-electric px-4 py-2 rounded-full">
                  🤝 Mentorship Programs
                </span>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-carbon/50 backdrop-blur-sm p-6 rounded-2xl border border-electric/20 text-center group hover:border-electric/40 transition-all duration-300"
                >
                  <benefit.icon className="w-12 h-12 text-electric mx-auto mb-4 group-hover:text-rose transition-colors" />
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Application Form Section */}
        <section className="py-16">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-4xl mx-auto"
            >
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Your Journey Starts Here
                </h2>
                <p className="text-xl text-foreground/80">
                  Tell us about yourself and let's build the future together
                </p>
              </motion.div>

              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="bg-carbon/30 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-electric/20 space-y-8"
              >
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-electric flex items-center gap-2">
                    <User className="w-6 h-6" />
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="bg-onyx/50 border-electric/30 focus:border-electric"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="bg-onyx/50 border-electric/30 focus:border-electric"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="bg-onyx/50 border-electric/30 focus:border-electric"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="institution" className="text-sm font-medium">Institution/Company</Label>
                      <Input
                        id="institution"
                        value={formData.institution}
                        onChange={(e) => handleInputChange("institution", e.target.value)}
                        placeholder="University or Company name"
                        className="bg-onyx/50 border-electric/30 focus:border-electric"
                      />
                    </div>
                  </div>
                </div>

                {/* Academic/Professional Background */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-rose flex items-center gap-2">
                    <GraduationCap className="w-6 h-6" />
                    Background
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-sm font-medium">Academic Year/Experience Level</Label>
                      <Select onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger className="bg-onyx/50 border-electric/30 focus:border-electric">
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="freshman">Freshman/1st Year</SelectItem>
                          <SelectItem value="sophomore">Sophomore/2nd Year</SelectItem>
                          <SelectItem value="junior">Junior/3rd Year</SelectItem>
                          <SelectItem value="senior">Senior/4th Year</SelectItem>
                          <SelectItem value="graduate">Graduate Student</SelectItem>
                          <SelectItem value="professional">Working Professional</SelectItem>
                          <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interests" className="text-sm font-medium">Primary Interests</Label>
                      <Select onValueChange={(value) => handleInputChange("interests", value)}>
                        <SelectTrigger className="bg-onyx/50 border-electric/30 focus:border-electric">
                          <SelectValue placeholder="What interests you most?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="web-dev">Web Development</SelectItem>
                          <SelectItem value="blockchain">Blockchain & Web3</SelectItem>
                          <SelectItem value="mobile">Mobile Development</SelectItem>
                          <SelectItem value="entrepreneurship">Entrepreneurship</SelectItem>
                          <SelectItem value="product">Product Management</SelectItem>
                          <SelectItem value="design">UI/UX Design</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Experience & Skills */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-electric flex items-center gap-2">
                    <Code className="w-6 h-6" />
                    Skills & Experience
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="skills" className="text-sm font-medium">Technical Skills</Label>
                      <Textarea
                        id="skills"
                        value={formData.skills}
                        onChange={(e) => handleInputChange("skills", e.target.value)}
                        placeholder="List your technical skills (programming languages, frameworks, tools, etc.)"
                        className="bg-onyx/50 border-electric/30 focus:border-electric min-h-[100px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-sm font-medium">Relevant Experience</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="Tell us about your projects, internships, hackathons, or any relevant experience"
                        className="bg-onyx/50 border-electric/30 focus:border-electric min-h-[120px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Motivation & Commitment */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-rose flex items-center gap-2">
                    <Rocket className="w-6 h-6" />
                    Your Vision
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="motivation" className="text-sm font-medium">Why do you want to join The Founder Factory? *</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                        placeholder="Share your motivation, goals, and what you hope to achieve with us"
                        className="bg-onyx/50 border-electric/30 focus:border-electric min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="commitment" className="text-sm font-medium">Commitment Level</Label>
                      <Select onValueChange={(value) => handleInputChange("commitment", value)}>
                        <SelectTrigger className="bg-onyx/50 border-electric/30 focus:border-electric">
                          <SelectValue placeholder="How active do you plan to be?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high">Highly Active (Weekly events & projects)</SelectItem>
                          <SelectItem value="medium">Moderately Active (Bi-weekly participation)</SelectItem>
                          <SelectItem value="casual">Casual (Monthly events & networking)</SelectItem>
                          <SelectItem value="events">Event-focused (Hackathons & workshops)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-6"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-electric to-rose hover:from-electric/80 hover:to-rose/80 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting Application...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Rocket className="w-5 h-5" />
                        Launch My Journey
                      </div>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="text-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Questions? We're Here to Help
                </h2>
                <p className="text-xl text-foreground/80 mb-8">
                  Reach out to us anytime for more information about joining our community
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-electric text-electric hover:bg-electric hover:text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    className="border-rose text-rose hover:bg-rose hover:text-white"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Join Discord
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </div>
    </Layout>
  );
}
