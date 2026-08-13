'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ensureScrollListener } from '@/lib/scroll';

// Scène Three.js chargée à la demande, côté client uniquement.
const Scene = dynamic(() => import('./Scene'), { ssr: false });

/**
 * Fond du site : un dégradé graphite très sobre + une vignette. Sert de socle
 * (et de fallback complet quand la 3D est désactivée : mobile / reduced-motion).
 */
const StaticBackdrop = () => (
  <>
    <div className="absolute inset-0 bg-[#0a0a0b]" />
    <div
      className="absolute inset-0 opacity-[0.5]"
      style={{
        background:
          'radial-gradient(1200px 700px at 78% 12%, rgba(245,158,11,0.06), transparent 60%), radial-gradient(900px 900px at 15% 90%, rgba(255,255,255,0.03), transparent 55%)',
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)',
      }}
    />
  </>
);

const SceneBackground = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    ensureScrollListener();
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 767px)').matches;
    setEnabled(!reduced && !small);
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <StaticBackdrop />
      {enabled && (
        <div className="absolute inset-0">
          <Scene />
        </div>
      )}
    </div>
  );
};

export default SceneBackground;
