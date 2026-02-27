'use client'

import posthog from 'posthog-js'

let isInitialized = false

export function initPosthog() {
  if (isInitialized || typeof window === 'undefined') return

  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !process.env.NEXT_PUBLIC_POSTHOG_HOST) {
    return
  }

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    // Utilise la configuration par défaut recommandée par PostHog
    // (équivalent du flag `defaults` sur les nouvelles versions de Next)
    capture_pageview: true,
  })

  isInitialized = true
}

export default posthog

