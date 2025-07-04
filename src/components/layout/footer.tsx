import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-carbon py-8 border-t border-electric">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">The Founder Factory</h3>
            <p className="text-sm text-foreground/70">
              Brains behind bots. Vision behind ventures.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
                </a>
              </li>
              <li>
                <a href="/events" className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group">
                  Events
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
                </a>
              </li>
              <li>
                <a href="/team" className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group">
                  Team
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group">
                  Twitter
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group">
                  LinkedIn
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors relative group">
                  Instagram
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-foreground/10 text-sm text-foreground/50 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} The Founder Factory. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-foreground transition-colors relative group">
              Privacy
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric/50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
            </a>
            <a href="#" className="hover:text-foreground transition-colors relative group">
              Terms
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-electric/50 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-\[cubic-bezier(0.25,0.46,0.45,0.94)\]"></span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
