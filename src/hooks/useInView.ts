import { useState, useEffect, useRef } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}
