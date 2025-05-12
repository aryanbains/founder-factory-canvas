
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  quote: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      flipCard();
    } else if (e.key === "Escape" && isFlipped) {
      setIsFlipped(false);
    }
  };

  return (
    <motion.div 
      className="perspective-1000 w-full h-[440px]"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={flipCard}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`Team member: ${member.name}, ${member.role}. ${
          isFlipped ? "Showing quote" : "Showing photo"
        }`}
      >
        {/* Front face */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-lg overflow-hidden border border-foreground/10 backdrop-blur-sm ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-full h-3/4 bg-black/20">
            <img 
              src={member.photo} 
              alt={member.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-background/80 backdrop-blur-lg">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-foreground/70">{member.role}</p>
          </div>
        </div>

        {/* Back face */}
        <div 
          className={`absolute w-full h-full backface-hidden rounded-lg overflow-hidden border border-electric/30 backdrop-blur-md bg-onyx/90 p-6 flex flex-col justify-between rotate-y-180 ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-sm text-foreground/70 mb-6">{member.role}</p>
            <blockquote className="text-lg italic text-foreground/90 border-l-2 border-electric pl-4">
              "{member.quote}"
            </blockquote>
          </div>
          
          <div className="flex justify-end space-x-4">
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${member.name}'s LinkedIn profile`}
                className="text-foreground/60 hover:text-electric transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Twitter profile`}
                className="text-foreground/60 hover:text-electric transition-colors"
              >
                <Twitter size={20} />
              </a>
            )}
            {member.socials.github && (
              <a 
                href={member.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`${member.name}'s GitHub profile`}
                className="text-foreground/60 hover:text-electric transition-colors"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
