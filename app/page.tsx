import Link from 'next/link'
import { TOTAL_QUESTIONS } from '@/lib/engine'

const FACTS = [
  { label: 'Questions', value: `${TOTAL_QUESTIONS}` },
  { label: 'Time', value: '~15 min' },
  { label: 'Levels', value: 'A1 – C1' },
]

export default function StartPage() {
  return (
    <main className="mx-auto flex min-h-screen-safe w-full max-w-md flex-col justify-between px-6 pt-[max(3rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:max-w-xl sm:justify-center sm:gap-10 sm:px-8 sm:py-16 lg:max-w-2xl">
      <div className="flex flex-1 flex-col justify-center py-10 sm:flex-none sm:py-0">
        <h1 className="text-[38px] leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          English
          <br />
          Placement Test
        </h1>

        <p className="mt-4 text-[17px] leading-relaxed text-muted text-pretty sm:mt-6 sm:text-lg">
          Find your English level in 15 minutes. Answer the questions, then show your result to the
          administrator.
        </p>

        <dl className="mt-10 grid grid-cols-3 overflow-hidden rounded-card border border-line bg-surface sm:mt-12">
          {FACTS.map((fact, i) => (
            <div
              key={fact.label}
              className={i > 0 ? 'border-l border-line px-3 py-4 sm:px-5' : 'px-3 py-4 sm:px-5'}
            >
              <dt className="text-[11px] font-medium tracking-wide text-muted uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-[15px] font-semibold tabular-nums sm:text-lg">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 space-y-2 text-[15px] text-muted sm:text-base">
          <li>· Grammar, Vocabulary and Reading</li>
          <li>· One answer per question</li>
          <li>· No dictionary, no translator</li>
        </ul>
      </div>

      {/* Full width on phones for easy tapping, compact on larger screens */}
      <Link
        href="/test"
        className="flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-2xl bg-accent text-[17px] font-semibold text-white transition-colors active:bg-accent-ink sm:w-auto sm:self-start sm:px-16"
      >
        Start Test
      </Link>
    </main>
  )
}
