import type { TestResult } from '@/lib/types'
import { LevelScale } from './LevelScale'
import { ScoreRow } from './ScoreRow'

type ResultCardProps = {
  result: TestResult
}

function formatAway(seconds: number): string {
  if (seconds < 60) return `${seconds} sec`
  return `${Math.round(seconds / 60)} min`
}

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const rest = seconds % 60
  return minutes > 0 ? `${minutes} min ${rest} sec` : `${rest} sec`
}

export function ResultCard({ result }: ResultCardProps) {
  const leaveCount = result.integrity?.leaveCount ?? 0

  return (
    <article className="overflow-hidden rounded-card border border-line bg-surface">
      <div className="border-b border-line px-6 pt-8 pb-7 text-center">
        <p className="text-sm font-medium text-muted">🎉 Test completed</p>

        <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
          Your English level
        </p>
        <p className="mt-1 text-7xl leading-none font-semibold tracking-tight text-accent">
          {result.level}
        </p>
        <p className="mt-2 text-lg font-medium">{result.levelName}</p>

        <div className="mx-auto mt-7 max-w-xs">
          <LevelScale level={result.level} />
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b border-line px-6 py-6">
        {result.sections.map((score) => (
          <ScoreRow key={score.section} score={score} />
        ))}
      </div>

      <dl className="grid grid-cols-2 divide-x divide-line">
        <div className="px-6 py-5">
          <dt className="text-xs font-medium tracking-wide text-muted uppercase">Recommended</dt>
          <dd className="mt-1 text-2xl font-semibold text-accent">{result.level}</dd>
        </div>
        <div className="px-6 py-5">
          <dt className="text-xs font-medium tracking-wide text-muted uppercase">Score</dt>
          <dd className="mt-1 text-2xl font-semibold tabular-nums">{result.overallPercent}%</dd>
        </div>
      </dl>

      <div className="border-t border-line px-6 py-4 text-center">
        <p className="text-xs text-muted tabular-nums">
          {result.correctCount} / {result.totalQuestions} correct ·{' '}
          {formatDuration(result.durationSeconds)}
        </p>
        {/* In an adaptive test the score rarely approaches 100% — explain why */}
        <p className="mt-1 text-[11px] text-muted/80">
          Questions get harder after every correct answer.
        </p>
      </div>

      {/* For the administrator: did the student switch to another app? */}
      {leaveCount > 0 ? (
        <p className="border-t border-line bg-wrong-soft px-6 py-3.5 text-center text-[13px] font-medium text-wrong">
          ⚠️ Left the test {leaveCount} {leaveCount === 1 ? 'time' : 'times'} ·{' '}
          {formatAway(result.integrity?.awaySeconds ?? 0)} away
        </p>
      ) : (
        <p className="border-t border-line px-6 py-3.5 text-center text-[13px] text-muted">
          ✓ Completed without leaving the page
        </p>
      )}
    </article>
  )
}
