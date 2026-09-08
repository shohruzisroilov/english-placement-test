'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import { ResultCard } from '@/components/ResultCard'
import { ReviewList, mistakesOf } from '@/components/ReviewList'
import { loadResult, loadReview } from '@/lib/storage'
import type { ReviewItem, TestResult } from '@/lib/types'

function formatCompletedAt(timestamp: number): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(timestamp))
}

const PRIMARY_BUTTON =
  'flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-2xl bg-accent text-[17px] font-semibold text-white transition-colors active:bg-accent-ink'
const SECONDARY_BUTTON =
  'flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-2xl border border-line bg-surface text-[17px] font-semibold transition-colors active:bg-paper'

export default function ResultPage() {
  const router = useRouter()
  const [result, setResult] = useState<TestResult | null>(null)
  const [review, setReview] = useState<ReviewItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [showReview, setShowReview] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)

  useEffect(() => {
    setResult(loadResult())
    setReview(loadReview())
    setLoaded(true)
  }, [])

  if (!loaded) {
    return <main className="min-h-screen-safe" aria-busy="true" />
  }

  if (!result) {
    return (
      <main className="mx-auto flex min-h-screen-safe w-full max-w-md flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-[17px] text-muted text-balance">
          No result found. Please take the test to see your English level.
        </p>
        <Link href="/" className={PRIMARY_BUTTON}>
          Go to start
        </Link>
      </main>
    )
  }

  const mistakeCount = mistakesOf(review).length

  if (showReview) {
    return (
      <main className="mx-auto w-full max-w-md px-5 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] sm:max-w-2xl sm:px-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Your mistakes</h1>
          <p className="mt-1.5 text-[15px] text-muted">
            {mistakeCount > 0
              ? `${mistakeCount} of ${result.totalQuestions} questions were answered incorrectly.`
              : `All ${result.totalQuestions} questions were answered correctly.`}
          </p>
        </header>

        <ReviewList items={review} />

        <button type="button" onClick={() => setShowReview(false)} className={`${SECONDARY_BUTTON} mt-8`}>
          Back to result
        </button>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-md px-5 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:max-w-lg sm:px-8 sm:pt-12">
      <ResultCard result={result} />

      <p className="mt-5 text-center text-[15px] leading-relaxed text-muted text-balance">
        Show this screen to your administrator.
        <span className="mt-1 block text-xs tabular-nums">
          {formatCompletedAt(result.completedAt)}
        </span>
      </p>

      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row-reverse">
        <button type="button" onClick={() => router.push('/test')} className={SECONDARY_BUTTON}>
          Take Test Again
        </button>

        {review.length > 0 && (
          <button type="button" onClick={() => setGateOpen(true)} className={SECONDARY_BUTTON}>
            Review my mistakes{mistakeCount > 0 ? ` (${mistakeCount})` : ''}
          </button>
        )}
      </div>

      {/* Mistakes open only after the result has been shown to the administrator */}
      <ConfirmDialog
        open={gateOpen}
        title="Show your result first"
        description="Please show this result screen to your administrator before you look at the answers."
        confirmLabel="I have shown it — show mistakes"
        cancelLabel="Not yet"
        primaryAction="confirm"
        onConfirm={() => {
          setGateOpen(false)
          setShowReview(true)
          window.scrollTo({ top: 0 })
        }}
        onCancel={() => setGateOpen(false)}
      />
    </main>
  )
}
