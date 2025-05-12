
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface EventCardProps {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  shortDesc: string;
  tags: string[];
  isPriority?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export function EventCard({ 
  slug, 
  title, 
  date, 
  coverImage, 
  shortDesc, 
  tags,
  isPriority = false,
  isActive = false,
  onClick
}: EventCardProps) {
  const formattedDate = format(new Date(date), 'MMM dd, yyyy');

  return (
    <motion.div 
      className="h-full"
      animate={{
        opacity: isActive ? 1 : 0.8,
        scale: isActive ? 1.05 : 1
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full border-0 bg-transparent">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
        </div>
        
        <CardContent className="p-5">
          <div className="flex items-center text-sm text-foreground/70 mb-2">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{shortDesc}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={i}
                className="text-xs bg-electric/10 text-electric px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
