import type { Level, Passage, Question, Section } from '@/lib/types'

const LETTERS = ['a', 'b', 'c', 'd'] as const

/**
 * Question factory. The first option is always the correct one, but
 * `correctAnswer` stores its `id`, and the options are shuffled before the
 * question is served (see lib/engine.ts).
 */
export function makeQuestion(
  section: Section,
  id: string,
  level: Level,
  question: string,
  correct: string,
  ...distractors: string[]
): Question {
  const texts = [correct, ...distractors]
  const options = texts.map((text, i) => ({ id: `${id}-${LETTERS[i]}`, text }))
  return {
    id,
    section,
    level,
    question,
    options,
    correctAnswer: options[0].id,
  }
}

export function makePassage(id: string, level: Level, title: string, text: string): Passage {
  return { id, level, title, text }
}

/** Reading question — tied to a passage. */
export function makeReadingQuestion(
  passage: Passage,
  index: number,
  question: string,
  correct: string,
  ...distractors: string[]
): Question {
  const q = makeQuestion('reading', `${passage.id}-q${index}`, passage.level, question, correct, ...distractors)
  return { ...q, passageId: passage.id }
}
