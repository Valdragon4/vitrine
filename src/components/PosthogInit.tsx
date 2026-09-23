'use client';

import { useEffect } from 'react';
import { syncPosthogWithConsent } from '@/lib/posthogClient';
import { onConsentChange } from '@/lib/consent';

/**
 * N'initialise PostHog que si le consentement a déjà été donné lors d'une
 * visite précédente. Le premier consentement, lui, démarre la mesure
 * directement depuis le bandeau — sans rechargement.
 */
export function PosthogInit() {
  useEffect(() => {
    syncPosthogWithConsent();
    return onConsentChange(syncPosthogWithConsent);
  }, []);

  return null;
}
