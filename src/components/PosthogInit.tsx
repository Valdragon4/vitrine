'use client'

import { useEffect } from 'react'
import { initPosthog } from '@/lib/posthogClient'

export function PosthogInit() {
  useEffect(() => {
    initPosthog()
  }, [])

  return null
}

