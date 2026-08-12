'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// La scène Three.js n'est chargée que côté client, à la demande :
// le bundle three/R3F ne pénalise ni le SSR ni le premier rendu.
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

/**
 * Fallback statique (aucun coût GPU) : un halo dégradé discret qui reste
 * cohérent avec le design même quand la 3D est désactivée
 * (mobile, prefers-reduced-motion, ou avant chargement).
 */
const StaticFallback = () => (
  <div
    aria-hidden
    className="absolute inset-0"
    style={{
      background:
        'radial-gradient(circle at 70% 45%, rgba(56,189,248,0.16) 0%, transparent 45%), radial-gradient(circle at 55% 60%, rgba(129,140,248,0.14) 0%, transparent 50%)',
    }}
  />
);

/**
 * Couche décorative du hero.
 * - Décoratif uniquement : aucun contenu informatif ne dépend de la 3D.
 * - Désactivée si l'utilisateur préfère les animations réduites.
 * - Désactivée sur petits écrans / pointeurs grossiers (perf & batterie).
 * - Ne s'anime que lorsque le hero est visible à l'écran.
 */
const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const smallScreen = window.matchMedia('(max-width: 767px)').matches;

    setEnabled(!reducedMotion && !coarsePointer && !smallScreen);
  }, []);

  // Coupe le rendu quand le hero n'est plus visible (économie de ressources).
  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '100px' }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <StaticFallback />
      {enabled && inView && <HeroScene />}
    </div>
  );
};

export default HeroCanvas;
