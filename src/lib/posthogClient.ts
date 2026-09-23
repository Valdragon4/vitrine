'use client';

import posthog from 'posthog-js';
import { getConsent } from './consent';

let isInitialized = false;

function isConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_POSTHOG_KEY && process.env.NEXT_PUBLIC_POSTHOG_HOST
  );
}

/**
 * Démarre la mesure d'audience. N'est appelée que sur consentement explicite :
 * au chargement si le choix était déjà « accepter », ou à l'instant où le
 * visiteur clique sur « Accepter ».
 *
 * La vue de page courante est capturée dans la foulée : sans cela, accepter
 * depuis l'accueil ne compterait la visite qu'à la page suivante.
 */
export function startPosthog(): void {
  if (typeof window === 'undefined' || !isConfigured()) return;

  if (isInitialized) {
    // Déjà chargé mais désactivé par un refus antérieur : on réactive.
    if (posthog.has_opted_out_capturing?.()) {
      posthog.opt_in_capturing();
      posthog.capture('$pageview');
    }
    return;
  }

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: true,
    // Le consentement est porté par l'application, pas par la bannière
    // intégrée de PostHog.
    opt_out_capturing_by_default: false,
  });

  isInitialized = true;
}

/**
 * Coupe la mesure et efface ce qui a pu être posé. Appelée sur refus, y
 * compris lorsque le visiteur revient sur une acceptation précédente.
 */
export function stopPosthog(): void {
  if (typeof window === 'undefined' || !isInitialized) return;
  try {
    posthog.opt_out_capturing();
    posthog.reset(true);
  } catch {
    /* rien à faire */
  }
}

/** Applique le choix enregistré. Sans choix, on ne mesure pas. */
export function syncPosthogWithConsent(): void {
  const consent = getConsent();
  if (consent === 'granted') startPosthog();
  else stopPosthog();
}

/**
 * Capture un événement uniquement si le consentement a été donné. Les
 * composants passent par ici plutôt que d'appeler `posthog` directement :
 * sinon un appel isolé peut initialiser la mesure dans le dos du visiteur.
 */
export function captureIfConsented(
  event: string,
  properties?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;
  if (getConsent() !== 'granted' || !isInitialized) return;
  posthog.capture(event, properties);
}

export default posthog;
