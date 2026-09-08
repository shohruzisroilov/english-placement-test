import type { ServedQuestion } from '@/lib/types'
import { OptionButton } from './OptionButton'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

type QuestionCardProps = {
  question: ServedQuestion
  selectedId: string | null
  onSelect: (optionId: string) => void
}

export function QuestionCard({ question, selectedId, onSelect }: QuestionCardProps) {
  const { passage, passageIndex, passageTotal } = question

  return (
    <div>
      {passage && (
        <section className="mb-5 rounded-card border border-line bg-surface p-5 sm:mb-6 sm:p-6">
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <h2 className="text-base font-semibold">{passage.title}</h2>
            {passageIndex && passageTotal && (
              <span className="shrink-0 text-xs font-medium text-muted tabular-nums">
                {passageIndex} / {passageTotal}
              </span>
            )}
          </div>
          {/* Long passages scroll inside the card so the question stays visible */}
          <p className="max-h-[34vh] overflow-y-auto text-[16px] leading-relaxed text-ink/85 sm:max-h-[42vh] sm:text-[17px]">
            {passage.text}
          </p>
        </section>
      )}

      <h1 className="text-[21px] leading-snug font-semibold text-balance sm:text-2xl">{question.question}</h1>

      <div className="mt-5 flex flex-col gap-2.5" role="group" aria-label="Answer options">
        {question.options.map((option, i) => (
          <OptionButton
            key={option.id}
            letter={LETTERS[i]}
            text={option.text}
            selected={selectedId === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  )
}
