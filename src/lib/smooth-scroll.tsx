
import React, { useEffect, useState, createContext, useContext } from 'react';
import Lenis from '@studio-freight/lenis';

type SmoothScrollContextType = {
  lenis: Lenis | null;
};

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null });

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 0.35, // even more responsive
      easing: t => t, // linear easing for instant response
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(lenisInstance);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis }}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const ScrollToTop = () => {
  const { lenis } = useSmoothScroll();
  
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);
  
  return null;
};

export const scrollTo = (target: string | number | HTMLElement) => {
  const lenis = new Lenis();
  lenis.scrollTo(target);
};
