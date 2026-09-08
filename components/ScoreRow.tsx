import type { SectionScore } from '@/lib/types'

const SECTION_LABEL: Record<SectionScore['section'], string> = {
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  reading: 'Reading',
}

type ScoreRowProps = {
  score: SectionScore
}

export function ScoreRow({ score }: ScoreRowProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[15px] font-medium">{SECTION_LABEL[score.section]}</span>
        <span className="flex items-baseline gap-2 tabular-nums">
          <span className="text-xs text-muted">
            {score.correct}/{score.asked}
          </span>
          <span className="text-[15px] font-semibold">{score.percent}%</span>
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-line">
        <div className="h-full rounded-full bg-accent" style={{ width: `${score.percent}%` }} />
      </div>
    </div>
  )
}
