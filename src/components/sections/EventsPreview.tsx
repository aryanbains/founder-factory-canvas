
import { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/EventCard";
import events from "@/data/events.json";

export function EventsPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollXProgress } = useScroll({
    container: containerRef
  });
  
  // Handle mouse wheel horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY) && e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex(Math.min(activeIndex + 1, events.length - 1));
      const cards = containerRef.current?.querySelectorAll('.event-card');
      cards?.[Math.min(activeIndex + 1, events.length - 1)]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex(Math.max(activeIndex - 1, 0));
      const cards = containerRef.current?.querySelectorAll('.event-card');
      cards?.[Math.max(activeIndex - 1, 0)]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const onCardVisible = (index: number) => {
    if (Math.abs(index - activeIndex) > 0) {
      setActiveIndex(index);
    }
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-onyx to-carbon/30">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-semibold">Upcoming Events</h2>
            <p className="text-foreground/70 mt-2">Join our workshops, hackathons, and meetups</p>
          </div>
          
          <Link to="/events">
            <div className="group">
              <Button variant="outline" className="gap-2 group-hover:gap-3 transition-all duration-300">
                View All
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </Link>
        </div>
      </Container>
      
      <div
        ref={containerRef}
        className="overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="region"
        aria-label="Events carousel"
      >
        <div className="flex px-8 gap-6 min-w-max">
          {events.map((event, i) => (
            <div
              key={event.slug}
              className="w-[350px] min-w-[350px] snap-center event-card"
              onFocus={() => onCardVisible(i)}
              onMouseEnter={() => onCardVisible(i)}
              tabIndex={0}
            >
              <EventCard
                {...event}
                isPriority={i < 3}
                isActive={i === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
      
      <Container>
        <div className="flex justify-center mt-8">
          <Link to="/events" className="inline-flex group">
            <Button className="bg-electric hover:bg-electric/90 gap-2 group-hover:gap-3 transition-all duration-300">
              View All Events
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
