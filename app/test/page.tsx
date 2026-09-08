'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ConfirmDialog } from '@/components/ConfirmDialog'
import { FocusWarning } from '@/components/FocusWarning'
import { QuestionCard } from '@/components/QuestionCard'
import { TestHeader } from '@/components/TestHeader'
import { TestEngine, TOTAL_QUESTIONS } from '@/lib/engine'
import { useFocusGuard } from '@/lib/useFocusGuard'
import { scoreTest } from '@/lib/scoring'
import {
  clearResult,
  loadSeenPassageIds,
  loadSeenQuestionIds,
  rememberPassageIds,
  rememberQuestionIds,
  saveResult,
  saveReview,
} from '@/lib/storage'
import type { Answer, ReviewItem, ServedQuestion } from '@/lib/types'

export default function TestPage() {
  const router = useRouter()
  const engineRef = useRef<TestEngine | null>(null)
  const answersRef = useRef<Answer[]>([])
  const reviewRef = useRef<ReviewItem[]>([])
  const startedAtRef = useRef(0)

  const [question, setQuestion] = useState<ServedQuestion | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [answered, setAnswered] = useState(0)
  const [finishing, setFinishing] = useState(false)
  const [exitOpen, setExitOpen] = useState(false)

  // Tracking stops once the test ends — moving to the result page is not "leaving"
  const focus = useFocusGuard(!finishing)

  // The engine is built in the browser only — it reads history from localStorage.
  useEffect(() => {
    clearResult()
    const engine = new TestEngine(loadSeenQuestionIds(), loadSeenPassageIds())
    engineRef.current = engine
    startedAtRef.current = Date.now()
    setQuestion(engine.next())
  }, [])

  // Warn before an accidental reload or close.
  useEffect(() => {
    if (finishing) return
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      // Safari and older browsers still expect this
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [finishing])

  const finish = useCallback(() => {
    const engine = engineRef.current
    if (!engine) return

    setFinishing(true)
    const seconds = Math.round((Date.now() - startedAtRef.current) / 1000)
    saveResult(
      scoreTest(answersRef.current, seconds, {
        leaveCount: focus.leaveCount,
        awaySeconds: focus.awaySeconds,
      }),
    )
    saveReview(reviewRef.current)
    rememberQuestionIds(engine.askedQuestionIds)
    rememberPassageIds(engine.askedPassageIds)
    router.replace('/result')
  }, [focus.awaySeconds, focus.leaveCount, router])

  const handleNext = useCallback(() => {
    const engine = engineRef.current
    if (!engine || !question || !selectedId || finishing) return

    const correct = selectedId === question.correctAnswer
    answersRef.current.push({
      questionId: question.id,
      section: question.section,
      level: question.level,
      selectedId,
      correct,
    })
    reviewRef.current.push({
      section: question.section,
      question: question.question,
      options: question.options,
      selectedId,
      correctAnswer: question.correctAnswer,
      passageTitle: question.passage?.title,
      passageText: question.passage?.text,
    })
    engine.record(question, correct)

    const next = engine.next()
    if (!next) {
      finish()
      return
    }

    setQuestion(next)
    setSelectedId(null)
    setAnswered((count) => count + 1)
    window.scrollTo({ top: 0 })
  }, [finish, finishing, question, selectedId])

  if (!question) {
    return (
      <main className="flex min-h-screen-safe items-center justify-center px-6">
        <p className="text-[15px] text-muted">Preparing your test…</p>
      </main>
    )
  }

  const isLast = answered + 1 >= TOTAL_QUESTIONS

  return (
    <>
      <TestHeader current={answered + 1} total={TOTAL_QUESTIONS} onExit={() => setExitOpen(true)} />

      <main
        className="mx-auto w-full max-w-2xl px-5 pt-6 pb-40 select-none sm:px-8 sm:pt-10"
        onContextMenu={(event) => event.preventDefault()}
        onCopy={(event) => event.preventDefault()}
      >
        <QuestionCard question={question} selectedId={selectedId} onSelect={setSelectedId} />
      </main>

      {/* The answer is only recorded on "Next", so a mis-tap can still be changed. */}
      <div className="fixed inset-x-0 bottom-0 border-t border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-2xl px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-8">
          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedId || finishing}
            className="flex min-h-[58px] w-full cursor-pointer items-center justify-center rounded-2xl bg-accent text-[17px] font-semibold text-white transition-colors active:bg-accent-ink disabled:cursor-not-allowed disabled:bg-line disabled:text-muted"
          >
            {isLast ? 'Finish' : 'Next'}
          </button>
          <p className="mt-2 h-4 text-center text-xs text-muted">
            {selectedId ? '' : 'Select one answer to continue'}
          </p>
        </div>
      </div>

      <FocusWarning open={focus.warningOpen} count={focus.leaveCount} onContinue={focus.acknowledge} />

      <ConfirmDialog
        open={exitOpen}
        title="Exit the test?"
        description="Your answers will be lost and the test will start again from the beginning."
        confirmLabel="Exit test"
        cancelLabel="Continue test"
        onConfirm={() => {
          setFinishing(true)
          router.replace('/')
        }}
        onCancel={() => setExitOpen(false)}
      />
    </>
  )
}
