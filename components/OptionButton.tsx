type OptionButtonProps = {
  letter: string
  text: string
  selected: boolean
  onSelect: () => void
}

export function OptionButton({ letter, text, selected, onSelect }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={[
        'flex w-full cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left transition-colors',
        'min-h-[60px] active:scale-[0.995]',
        selected
          ? 'border-accent bg-accent-soft'
          : 'border-line bg-surface active:border-muted/40',
      ].join(' ')}
    >
      <span
        className={[
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold',
          selected ? 'bg-accent text-white' : 'bg-paper text-muted',
        ].join(' ')}
        aria-hidden
      >
        {letter}
      </span>
      <span
        className={[
          'text-[17px] leading-snug',
          selected ? 'font-medium text-accent-ink' : 'text-ink',
        ].join(' ')}
      >
        {text}
      </span>
    </button>
  )
}
