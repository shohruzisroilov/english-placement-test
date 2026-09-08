import { passagePool, questionPool, questionsForPassage } from '@/data/questions'
import { pickRandom, shuffle } from './random'
import { LEVELS, type Level, type Question, type Section, type ServedQuestion } from './types'

export const TEST_PLAN = {
  grammar: 12,
  vocabulary: 7,
  readingPassages: 2,
  questionsPerPassage: 3,
} as const

export const READING_QUESTIONS = TEST_PLAN.readingPassages * TEST_PLAN.questionsPerPassage
export const TOTAL_QUESTIONS = TEST_PLAN.grammar + TEST_PLAN.vocabulary + READING_QUESTIONS

/** The test starts at A2, not A1, so it does not open with a trivial question. */
const START_LEVEL: Level = 'A2'

export function sectionForIndex(index: number): Section {
  if (index < TEST_PLAN.grammar) return 'grammar'
  if (index < TEST_PLAN.grammar + TEST_PLAN.vocabulary) return 'vocabulary'
  return 'reading'
}

function stepLevel(level: Level, delta: number): Level {
  const i = LEVELS.indexOf(level)
  return LEVELS[Math.min(LEVELS.length - 1, Math.max(0, i + delta))]
}

/** Levels by proximity: the target first, then the nearest (easier one on a tie). */
function levelSearchOrder(target: Level): Level[] {
  const i = LEVELS.indexOf(target)
  return [...LEVELS].sort((a, b) => {
    const da = Math.abs(LEVELS.indexOf(a) - i)
    const db = Math.abs(LEVELS.indexOf(b) - i)
    if (da !== db) return da - db
    return LEVELS.indexOf(a) - LEVELS.indexOf(b)
  })
}

/**
 * The "brain" of the adaptive test.
 *
 * - Each question is picked after the previous answer, never in advance.
 * - Correct answer → +1 level, wrong answer → −1 level.
 * - The level stays fixed inside a reading block; once the block ends it moves
 *   up if at least 2 of 3 were correct, and down otherwise.
 * - Questions seen in earlier attempts (localStorage) are avoided when possible.
 */
export class TestEngine {
  readonly total = TOTAL_QUESTIONS

  private level: Level = START_LEVEL
  private servedCount = 0
  private readonly usedQuestionIds = new Set<string>()
  private readonly usedPassageIds = new Set<string>()
  private readonly seenQuestionIds: Set<string>
  private readonly seenPassageIds: Set<string>
  private queue: ServedQuestion[] = []
  private blockResults: boolean[] = []

  constructor(seenQuestionIds: string[] = [], seenPassageIds: string[] = []) {
    this.seenQuestionIds = new Set(seenQuestionIds)
    this.seenPassageIds = new Set(seenPassageIds)
  }

  get askedQuestionIds(): string[] {
    return [...this.usedQuestionIds]
  }

  get askedPassageIds(): string[] {
    return [...this.usedPassageIds]
  }

  /** The next question, or `null` once the test is over. */
  next(): ServedQuestion | null {
    if (this.servedCount >= this.total) return null

    const section = sectionForIndex(this.servedCount)
    const question =
      section === 'reading' ? this.nextReadingQuestion() : this.pickQuestion(section, this.level)

    if (!question) return null
    this.servedCount += 1
    return question
  }

  /** Records an answer and adjusts the level of the next question. */
  record(question: ServedQuestion, correct: boolean): void {
    if (question.section !== 'reading') {
      this.level = stepLevel(this.level, correct ? 1 : -1)
      return
    }

    this.blockResults.push(correct)
    if (this.blockResults.length < TEST_PLAN.questionsPerPassage) return

    const correctInBlock = this.blockResults.filter(Boolean).length
    this.level = stepLevel(this.level, correctInBlock >= 2 ? 1 : -1)
    this.blockResults = []
  }

  private nextReadingQuestion(): ServedQuestion | null {
    if (this.queue.length === 0) this.loadPassageBlock()
    return this.queue.shift() ?? null
  }

  private loadPassageBlock(): void {
    for (const level of levelSearchOrder(this.level)) {
      const available = passagePool(level).filter((p) => !this.usedPassageIds.has(p.id))
      if (available.length === 0) continue

      const fresh = available.filter((p) => !this.seenPassageIds.has(p.id))
      const passage = pickRandom(fresh.length > 0 ? fresh : available)
      if (!passage) continue

      this.usedPassageIds.add(passage.id)
      const questions = questionsForPassage(passage.id).slice(0, TEST_PLAN.questionsPerPassage)
      this.queue = questions.map((q, i) => {
        this.usedQuestionIds.add(q.id)
        return {
          ...this.serve(q),
          passage,
          passageIndex: i + 1,
          passageTotal: questions.length,
        }
      })
      return
    }
  }

  private pickQuestion(section: Section, target: Level): ServedQuestion | null {
    for (const level of levelSearchOrder(target)) {
      const available = questionPool(section, level).filter((q) => !this.usedQuestionIds.has(q.id))
      if (available.length === 0) continue

      // Prefer never-seen questions; if the pool runs dry, reuse older ones.
      const fresh = available.filter((q) => !this.seenQuestionIds.has(q.id))
      const question = pickRandom(fresh.length > 0 ? fresh : available)
      if (!question) continue

      this.usedQuestionIds.add(question.id)
      return this.serve(question)
    }
    return null
  }

  /** Options are reshuffled every time — the answer is checked by `id`. */
  private serve(question: Question): ServedQuestion {
    return { ...question, options: shuffle(question.options) }
  }
}
