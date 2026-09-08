import { ProgressBar } from './ProgressBar'

type TestHeaderProps = {
  current: number
  total: number
  onExit: () => void
}

export function TestHeader({ current, total, onExit }: TestHeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-2xl px-5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 sm:px-8">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-muted tabular-nums">
            Question {current} of {total}
          </span>

          <button
            type="button"
            onClick={onExit}
            aria-label="Exit test"
            className="-mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-muted transition-colors active:bg-line"
          >
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mt-3">
          {/* The current question counts as half a step, so question 1 already shows progress */}
          <ProgressBar value={current - 0.5} total={total} />
        </div>
      </div>
    </header>
  )
}
