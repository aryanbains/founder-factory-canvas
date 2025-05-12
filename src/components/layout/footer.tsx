
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-carbon py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Founder Factory</h3>
            <p className="text-sm text-foreground/70">
              Building the future of entrepreneurship.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/team" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10 text-sm text-foreground/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} The Founder Factory. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
