'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, onConsentChange } from '@/lib/consent';
import { startPosthog, stopPosthog } from '@/lib/posthogClient';

/**
 * Bandeau de consentement à la mesure d'audience.
 *
 * Il ne s'affiche que tant qu'aucun choix n'a été fait. Accepter démarre la
 * mesure immédiatement, dans la page courante et sans rechargement ; refuser
 * coupe et efface ce qui aurait pu être posé.
 */
const CookieBanner = () => {
  // `null` tant que le composant n'est pas monté : le serveur ne peut pas
  // connaître le choix, et afficher puis retirer le bandeau ferait clignoter.
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reopened = useRef(false);

  useEffect(() => {
    setMounted(true);
    setVisible(getConsent() === null);

    return onConsentChange(() => {
      const next = getConsent() === null;
      // Rouvert depuis le pied de page : on y amène le focus.
      reopened.current = next;
      setVisible(next);
    });
  }, []);

  useEffect(() => {
    if (visible && reopened.current) {
      ref.current?.focus();
      reopened.current = false;
    }
  }, [visible]);

  if (!mounted || !visible) return null;

  const accept = () => {
    setConsent('granted');
    startPosthog(); // démarrage immédiat, la vue courante est comptée
    setVisible(false);
  };

  const refuse = () => {
    setConsent('denied');
    stopPosthog();
    setVisible(false);
  };

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-titre"
      aria-describedby="consent-texte"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5"
    >
      <div className="max-w-3xl mx-auto rounded-2xl border border-zinc-600 bg-[#141416] p-5 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
          <div className="min-w-0">
            <p id="consent-titre" className="font-display text-base font-semibold text-zinc-50">
              Mesure d&apos;audience
            </p>
            <p
              id="consent-texte"
              className="mt-1.5 text-[13px] text-zinc-300 leading-relaxed max-w-[38rem]"
            >
              J&apos;aimerais savoir quelles pages sont consultées, pour améliorer ce
              site. Cela dépose un cookie et enregistre votre navigation sur le site.
              Rien n&apos;est mesuré tant que vous n&apos;avez pas accepté, et vous
              pouvez changer d&apos;avis à tout moment depuis le pied de page.{' '}
              <Link
                href="/politique-confidentialite"
                className="text-amber-400 hover:text-amber-300 underline decoration-amber-400/40 underline-offset-2 transition-colors"
              >
                En savoir plus
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 lg:flex-shrink-0">
            <button
              type="button"
              onClick={refuse}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={accept}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold bg-amber-500 text-zinc-950 hover:bg-amber-400 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
