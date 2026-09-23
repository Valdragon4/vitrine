'use client';

/**
 * Consentement à la mesure d'audience.
 *
 * PostHog n'est jamais initialisé tant que le choix n'a pas été fait : pas de
 * script chargé, pas de cookie posé, pas d'événement capturé. C'est la seule
 * lecture défendable du consentement — un bandeau qui s'affiche pendant que le
 * traceur tourne déjà ne consent à rien.
 *
 * Le choix vit dans `localStorage` et non dans un cookie : il n'a aucune raison
 * de partir à chaque requête vers le serveur.
 */

export type ConsentValue = 'granted' | 'denied';

const KEY = 'vm.consent.analytics';

/**
 * Incrémenter cette version redemande son choix à tout le monde. À faire si la
 * finalité du traitement change — pas pour une correction de formulation.
 */
const VERSION = 1;
const VERSION_KEY = 'vm.consent.version';

/** Émis quand le choix change, pour que la page réagisse sans rechargement. */
export const CONSENT_EVENT = 'vm:consent-change';

function safeGet(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    // Navigation privée, stockage bloqué : on se comporte comme si rien
    // n'avait été choisi, donc on ne mesure pas.
    return null;
  }
}

function safeSet(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* le choix ne survivra pas à la session, mais il vaut pour celle-ci */
  }
}

/** `null` = le choix n'a pas encore été fait. */
export function getConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;

  const version = safeGet(VERSION_KEY);
  if (version !== String(VERSION)) return null;

  const value = safeGet(KEY);
  return value === 'granted' || value === 'denied' ? value : null;
}

export function setConsent(value: ConsentValue): void {
  if (typeof window === 'undefined') return;
  safeSet(KEY, value);
  safeSet(VERSION_KEY, String(VERSION));
  window.dispatchEvent(new CustomEvent<ConsentValue>(CONSENT_EVENT, { detail: value }));
}

/** Rouvre le bandeau — utilisé par le lien « Cookies » du pied de page. */
export function resetConsent(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(KEY);
    window.localStorage.removeItem(VERSION_KEY);
  } catch {
    /* rien à faire */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

export function onConsentChange(handler: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, handler);
  return () => window.removeEventListener(CONSENT_EVENT, handler);
}
