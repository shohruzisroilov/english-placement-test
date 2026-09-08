type ProgressBarProps = {
  value: number
  total: number
}

export function ProgressBar({ value, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.min(100, Math.max(0, (value / total) * 100)) : 0

  return (
    <div
      className="h-1.5 w-full overflow-hidden rounded-full bg-line"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={total}
      aria-valuenow={Math.round(value)}
      aria-label="Test progress"
    >
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-300 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
