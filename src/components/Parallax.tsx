'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  /** Amplitude du décalage. + = l'élément « traîne » derrière le scroll. */
  speed?: number;
  className?: string;
}

/**
 * Décale verticalement son contenu en fonction de sa position dans le viewport,
 * pour un effet de profondeur au scroll. Transform appliqué directement au DOM
 * (pas de re-render React), throttlé en requestAnimationFrame.
 * Désactivé si l'utilisateur préfère les animations réduites.
 */
const Parallax = ({ children, speed = 0.12, className }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    let raf = 0;
    const apply = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translate3d(0, ${(-centerOffset * speed).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
};

export default Parallax;
