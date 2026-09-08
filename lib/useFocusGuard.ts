'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Brief focus losses (tapping the address bar, a notification banner) are
 * ignored — only an absence longer than this counts as leaving the test.
 */
const MIN_AWAY_MS = 1500

export type FocusGuard = {
  /** How many times the student left the test. */
  leaveCount: number
  /** Total time spent away, in seconds. */
  awaySeconds: number
  /** Came back, but has not acknowledged the warning yet. */
  warningOpen: boolean
  acknowledge: () => void
}

/**
 * Detects the student switching to another app or tab during the test.
 *
 * A browser cannot block this, so the approach is: detect → warn on return →
 * report it to the administrator on the result screen.
 */
export function useFocusGuard(enabled: boolean): FocusGuard {
  const [leaveCount, setLeaveCount] = useState(0)
  const [awayMs, setAwayMs] = useState(0)
  const [warningOpen, setWarningOpen] = useState(false)
  const leftAtRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) return

    const leave = () => {
      if (leftAtRef.current === null) leftAtRef.current = Date.now()
    }

    const back = () => {
      const leftAt = leftAtRef.current
      if (leftAt === null) return
      leftAtRef.current = null

      const elapsed = Date.now() - leftAt
      if (elapsed < MIN_AWAY_MS) return

      setAwayMs((total) => total + elapsed)
      setLeaveCount((count) => count + 1)
      setWarningOpen(true)
    }

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') leave()
      else back()
    }

    // visibilitychange is the main signal for app switching on phones,
    // while blur/focus catches window switching on desktop.
    document.addEventListener('visibilitychange', onVisibilityChange)
    window.addEventListener('blur', leave)
    window.addEventListener('focus', back)

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('blur', leave)
      window.removeEventListener('focus', back)
    }
  }, [enabled])

  const acknowledge = useCallback(() => setWarningOpen(false), [])

  return { leaveCount, awaySeconds: Math.round(awayMs / 1000), warningOpen, acknowledge }
}
