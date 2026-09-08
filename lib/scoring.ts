import {
  LEVELS,
  LEVEL_NAME,
  LEVEL_WEIGHT,
  SECTIONS,
  type Answer,
  type Level,
  type SectionScore,
  type TestIntegrity,
  type TestResult,
} from './types'

/** The test opens at A2, so these first "warm-up" answers carry less weight. */
const WARMUP_QUESTIONS = 3
const WARMUP_WEIGHT = 0.5

/** Below this weighted accuracy the level is pushed down one step. */
const LUCKY_GUESS_FLOOR = 0.4

type WeightedAnswer = { answer: Answer; weight: number }

const levelIndex = (level: Level): number => LEVELS.indexOf(level) + 1

/**
 * Every answer casts a "vote" on the ability estimate: a correct answer says
 * the student is above the question's level, a wrong one says below. Adaptive
 * selection clusters questions around the true level, so the mean of these
 * votes converges quickly.
 */
const abilityVote = (answer: Answer): number => levelIndex(answer.level) + (answer.correct ? 0.5 : -0.5)

function ability(items: WeightedAnswer[]): number {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0)
  if (totalWeight === 0) return 1
  const total = items.reduce((sum, item) => sum + abilityVote(item.answer) * item.weight, 0)
  return total / totalWeight
}

/**
 * Thresholds calibrated by simulation: the mean ability of students at each
 * level was measured, and the cut points sit midway between neighbours. The
 * bands narrow at the top because the ladder cannot climb past C1, so ability
 * saturates there.
 */
const THRESHOLDS: ReadonlyArray<{ min: number; level: Level }> = [
  { min: 4.7, level: 'C1' },
  { min: 4.1, level: 'B2' },
  { min: 3.35, level: 'B1' },
  { min: 2.5, level: 'A2' },
]

function levelFromAbility(value: number): Level {
  return THRESHOLDS.find((t) => value >= t.min)?.level ?? 'A1'
}

function stepDown(level: Level): Level {
  return LEVELS[Math.max(0, LEVELS.indexOf(level) - 1)]
}

/**
 * The displayed score is difficulty-weighted accuracy: getting a C1 question
 * right is worth five times an A1 one.
 *
 * It is computed from the answers themselves rather than from ability, so the
 * contradiction "I answered everything right but the percentage is low" cannot
 * appear, and sections stay comparable with each other.
 */
function weightedAccuracy(answers: Answer[]): number {
  const max = answers.reduce((sum, a) => sum + LEVEL_WEIGHT[a.level], 0)
  if (max === 0) return 0
  const earned = answers.reduce((sum, a) => sum + (a.correct ? LEVEL_WEIGHT[a.level] : 0), 0)
  return earned / max
}

function scoreSection(answers: Answer[], section: SectionScore['section']): SectionScore {
  const sectionAnswers = answers.filter((answer) => answer.section === section)
  return {
    section,
    percent: Math.round(weightedAccuracy(sectionAnswers) * 100),
    asked: sectionAnswers.length,
    correct: sectionAnswers.filter((answer) => answer.correct).length,
  }
}

export function scoreTest(
  answers: Answer[],
  durationSeconds: number,
  integrity: TestIntegrity = { leaveCount: 0, awaySeconds: 0 },
): TestResult {
  const items: WeightedAnswer[] = answers.map((answer, i) => ({
    answer,
    weight: i < WARMUP_QUESTIONS ? WARMUP_WEIGHT : 1,
  }))

  const overallAbility = ability(items)
  let level = levelFromAbility(overallAbility)

  // Guard 1 — the level never exceeds the highest level answered correctly.
  const correctLevels = answers.filter((a) => a.correct).map((a) => levelIndex(a.level))
  const ceiling = correctLevels.length > 0 ? Math.max(...correctLevels) : 1
  if (levelIndex(level) > ceiling) level = LEVELS[ceiling - 1]

  // Guard 2 — protects against lucky guessing.
  const accuracy = weightedAccuracy(answers)
  if (accuracy < LUCKY_GUESS_FLOOR) level = stepDown(level)

  return {
    level,
    levelName: LEVEL_NAME[level],
    overallPercent: Math.round(accuracy * 100),
    sections: SECTIONS.map((section) => scoreSection(answers, section)),
    totalQuestions: answers.length,
    correctCount: answers.filter((a) => a.correct).length,
    durationSeconds,
    completedAt: Date.now(),
    integrity,
  }
}
