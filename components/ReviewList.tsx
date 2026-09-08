import type { ReviewItem, Section } from '@/lib/types'

const SECTION_LABEL: Record<Section, string> = {
  grammar: 'Grammar',
  vocabulary: 'Vocabulary',
  reading: 'Reading',
}

type Mistake = {
  item: ReviewItem
  /** Original position in the test, so the student can tell which question it was. */
  number: number
}

type ReviewListProps = {
  items: ReviewItem[]
}

export function mistakesOf(items: ReviewItem[]): Mistake[] {
  return items
    .map((item, i) => ({ item, number: i + 1 }))
    .filter(({ item }) => item.selectedId !== item.correctAnswer)
}

export function ReviewList({ items }: ReviewListProps) {
  const mistakes = mistakesOf(items)

  if (mistakes.length === 0) {
    return (
      <p className="rounded-card border border-line bg-surface px-6 py-10 text-center text-[17px] text-muted">
        No mistakes — you answered every question correctly. 🎉
      </p>
    )
  }

  return (
    <ol className="flex flex-col gap-4">
      {mistakes.map(({ item, number }) => (
        <li key={number} className="rounded-card border border-line bg-surface p-5 sm:p-6">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
            <span className="text-muted">Question {number}</span>
            <span className="text-line">·</span>
            <span className="text-accent-ink">{SECTION_LABEL[item.section]}</span>
          </div>

          {item.passageText && (
            <div className="mt-3 rounded-xl bg-paper p-4">
              {item.passageTitle && (
                <p className="mb-1 text-sm font-semibold">{item.passageTitle}</p>
              )}
              <p className="text-[15px] leading-relaxed text-muted">{item.passageText}</p>
            </div>
          )}

          <p className="mt-3 text-[17px] leading-snug font-medium">{item.question}</p>

          <ul className="mt-4 flex flex-col gap-2">
            {item.options.map((option) => {
              const isCorrect = option.id === item.correctAnswer
              const isChosen = option.id === item.selectedId
              if (!isCorrect && !isChosen) {
                return (
                  <li key={option.id} className="px-3 py-2 text-[15px] text-muted/70">
                    {option.text}
                  </li>
                )
              }
              return (
                <li
                  key={option.id}
                  className={[
                    'flex items-start gap-2.5 rounded-xl border px-3 py-2.5 text-[15px]',
                    isCorrect
                      ? 'border-accent/40 bg-accent-soft text-accent-ink'
                      : 'border-wrong/30 bg-wrong-soft text-wrong',
                  ].join(' ')}
                >
                  <span aria-hidden className="mt-px font-semibold">
                    {isCorrect ? '✓' : '✕'}
                  </span>
                  <span className="flex-1 font-medium">{option.text}</span>
                  <span className="shrink-0 text-xs font-semibold tracking-wide uppercase opacity-70">
                    {isCorrect ? 'Correct' : 'Your answer'}
                  </span>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ol>
  )
}
