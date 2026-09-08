export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'] as const
export type Level = (typeof LEVELS)[number]

export const SECTIONS = ['grammar', 'vocabulary', 'reading'] as const
export type Section = (typeof SECTIONS)[number]

export type Option = {
  id: string
  text: string
}

/** Raw question from the bank. `correctAnswer` is an option `id`, not an index. */
export type Question = {
  id: string
  section: Section
  level: Level
  question: string
  options: Option[]
  correctAnswer: string
  /** Reading only: the passage this question belongs to. */
  passageId?: string
}

export type Passage = {
  id: string
  level: Level
  title: string
  text: string
}

/** A question as served to the student, with its options shuffled. */
export type ServedQuestion = Omit<Question, 'options'> & {
  options: Option[]
  passage?: Passage
  /** Position within the reading block (1-based), used to show progress. */
  passageIndex?: number
  passageTotal?: number
}

export type Answer = {
  questionId: string
  section: Section
  level: Level
  selectedId: string
  correct: boolean
}

/**
 * Record kept so the student can review their mistakes after the test.
 * Deliberately free of technical data — no ids, levels or scoring internals.
 */
export type ReviewItem = {
  section: Section
  question: string
  /** Options in exactly the order the student saw them. */
  options: Option[]
  selectedId: string
  correctAnswer: string
  passageTitle?: string
  passageText?: string
}

export type SectionScore = {
  section: Section
  /** Difficulty-weighted accuracy, 0–100. */
  percent: number
  asked: number
  correct: number
}

/** Signals of how "clean" the attempt was — meant for the administrator. */
export type TestIntegrity = {
  /** How many times the student switched to another app or tab. */
  leaveCount: number
  /** Total time spent away, in seconds. */
  awaySeconds: number
}

export type TestResult = {
  level: Level
  levelName: string
  overallPercent: number
  sections: SectionScore[]
  totalQuestions: number
  correctCount: number
  durationSeconds: number
  completedAt: number
  /** May be missing on results stored by an older version. */
  integrity?: TestIntegrity
}

export const LEVEL_WEIGHT: Record<Level, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
}

export const LEVEL_NAME: Record<Level, string> = {
  A1: 'Beginner',
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper-Intermediate',
  C1: 'Advanced',
}
