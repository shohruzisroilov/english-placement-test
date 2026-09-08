'use client'

type FocusWarningProps = {
  open: boolean
  count: number
  onContinue: () => void
}

/**
 * Full-screen warning shown when the student comes back after leaving the test.
 * The background is opaque, so the question stays hidden.
 */
export function FocusWarning({ open, count, onContinue }: FocusWarningProps) {
  if (!open) return null

  const repeated = count >= 3

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper px-6"
      role="alertdialog"
      aria-modal="true"
      aria-label="You left the test"
    >
      <div className="w-full max-w-sm text-center">
        <div
          aria-hidden
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-wrong-soft text-3xl"
        >
          ⚠️
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight">You left the test</h2>

        <p className="mt-3 text-[16px] leading-relaxed text-muted text-balance">
          {repeated
            ? 'The test must be completed without leaving this page. Your administrator will see that this happened.'
            : 'Please stay on this page until the test is finished. Using other apps during the test is not allowed.'}
        </p>

        <p className="mt-5 inline-flex rounded-full bg-wrong-soft px-4 py-1.5 text-sm font-semibold text-wrong tabular-nums">
          Recorded: {count} {count === 1 ? 'time' : 'times'}
        </p>

        <button
          type="button"
          onClick={onContinue}
          className="mt-8 flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-2xl bg-accent text-[17px] font-semibold text-white transition-colors active:bg-accent-ink"
        >
          Continue test
        </button>
      </div>
    </div>
  )
}
