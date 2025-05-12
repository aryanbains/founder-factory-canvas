
import { useEffect } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { PageTransition } from "./page-transition";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import { initGA, logPageView } from "@/lib/analytics";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    logPageView();
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
