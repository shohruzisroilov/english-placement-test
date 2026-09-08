import { LEVELS, type Level } from '@/lib/types'

type LevelScaleProps = {
  level: Level
}

/** A1 → C1 ladder: shows at a glance where the student stands. */
export function LevelScale({ level }: LevelScaleProps) {
  const reached = LEVELS.indexOf(level)

  return (
    <div className="flex items-end gap-1.5" aria-hidden>
      {LEVELS.map((item, i) => {
        const isCurrent = i === reached
        const isPassed = i < reached
        return (
          <div key={item} className="flex flex-1 flex-col items-center gap-1.5">
            <div
              className={[
                'w-full rounded-full transition-colors',
                isCurrent ? 'h-3 bg-accent' : isPassed ? 'h-1.5 bg-accent/35' : 'h-1.5 bg-line',
              ].join(' ')}
            />
            <span
              className={[
                'text-[11px] font-semibold tracking-wide',
                isCurrent ? 'text-accent-ink' : 'text-muted/70',
              ].join(' ')}
            >
              {item}
            </span>
          </div>
        )
      })}
    </div>
  )
}
