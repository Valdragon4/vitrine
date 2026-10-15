'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { IN_APP_NAV_KEY } from './NavigationTracker';

/**
 * Revient à la page précédente du site, à la hauteur où on l'avait quittée
 * (historique du navigateur). Un visiteur arrivé directement sur cette page
 * n'a pas de page précédente sur le site : on l'envoie sur la liste.
 */
const BackButton = ({ fallback = '/#projets' }: { fallback?: string }) => {
  const router = useRouter();

  const goBack = () => {
    let inApp = false;
    try {
      inApp = sessionStorage.getItem(IN_APP_NAV_KEY) === '1';
    } catch {
      inApp = false;
    }
    if (inApp && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-2 min-h-[44px] px-4 py-3 rounded-md text-sm text-ink-300 hover:text-signal-400 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
      Retour
    </button>
  );
};

export default BackButton;
