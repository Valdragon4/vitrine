'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export const IN_APP_NAV_KEY = 'vm-in-app-nav';
const SCROLL_KEY = (path: string) => `vm-scroll:${path}`;
const RESTORE_KEY = 'vm-restore-scroll';

const store = {
  get: (k: string) => {
    try {
      return sessionStorage.getItem(k);
    } catch {
      return null;
    }
  },
  set: (k: string, v: string) => {
    try {
      sessionStorage.setItem(k, v);
    } catch {
      // Stockage indisponible (navigation privée stricte) : on perd la
      // mémoire de position, la navigation reste correcte.
    }
  },
  del: (k: string) => {
    try {
      sessionStorage.removeItem(k);
    } catch {
      /* idem */
    }
  },
};

/**
 * Mémoire de navigation du site, pour que « Retour » (le bouton de la page
 * projet comme celui du navigateur) ramène exactement à la hauteur quittée.
 *
 * La restauration native ne suffit pas : elle s'applique avant que la page
 * d'accueil ait retrouvé toute sa hauteur (scène 3D, images), et la position
 * est rognée. On note donc la position au moment du clic, et on la rétablit
 * au retour en réessayant tant que la page n'est pas assez haute.
 *
 * Retient aussi qu'au moins une navigation interne a eu lieu dans l'onglet :
 * un visiteur arrivé directement sur une page projet n'a pas de « page
 * précédente » sur le site.
 */
const NavigationTracker = () => {
  const pathname = usePathname();
  const first = useRef(true);
  const current = useRef(pathname);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Position notée au clic sur un lien interne, avant que la page change.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a || a.target === '_blank') return;
      const href = a.getAttribute('href') || '';
      if (!href.startsWith('/') || href.startsWith('/#')) return;
      store.set(SCROLL_KEY(current.current), String(Math.round(window.scrollY)));
    };
    // Tout retour arrière, bouton du site ou du navigateur, passe par ici.
    const onPop = () => store.set(RESTORE_KEY, '1');

    document.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onPop);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  useEffect(() => {
    current.current = pathname;
    if (first.current) {
      first.current = false;
    } else {
      store.set(IN_APP_NAV_KEY, '1');
    }

    if (store.get(RESTORE_KEY) !== '1') return;
    store.del(RESTORE_KEY);
    const saved = Number(store.get(SCROLL_KEY(pathname)));
    if (!Number.isFinite(saved) || saved <= 0) return;

    // Réessaie jusqu'à ce que la page soit assez haute pour tenir la
    // position, ou que l'on ait attendu deux secondes.
    const start = performance.now();
    let frame = 0;
    const tick = () => {
      window.scrollTo(0, saved);
      const reached = Math.abs(window.scrollY - saved) < 2;
      if (!reached && performance.now() - start < 2000) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
};

export default NavigationTracker;
