import type { Level, Passage, Question, Section } from '@/lib/types'
import { grammarQuestions } from './grammar'
import { vocabularyQuestions } from './vocabulary'
import { passages, readingQuestions } from './reading'

export const questionBank: Question[] = [...grammarQuestions, ...vocabularyQuestions, ...readingQuestions]

export { passages }

const byPassage = new Map<string, Question[]>()
for (const q of readingQuestions) {
  if (!q.passageId) continue
  const list = byPassage.get(q.passageId) ?? []
  list.push(q)
  byPassage.set(q.passageId, list)
}

/** Questions of a single passage, in their original order. */
export function questionsForPassage(passageId: string): Question[] {
  return byPassage.get(passageId) ?? []
}

const pool = new Map<string, Question[]>()
for (const q of [...grammarQuestions, ...vocabularyQuestions]) {
  const key = `${q.section}:${q.level}`
  const list = pool.get(key) ?? []
  list.push(q)
  pool.set(key, list)
}

/** All grammar/vocabulary questions of a given level. */
export function questionPool(section: Section, level: Level): Question[] {
  return pool.get(`${section}:${level}`) ?? []
}

export function passagePool(level: Level): Passage[] {
  return passages.filter((p) => p.level === level)
}
