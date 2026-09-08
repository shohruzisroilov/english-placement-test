import type { ReviewItem, TestResult } from './types'

const SEEN_QUESTIONS = 'ept.seen.questions.v1'
const SEEN_PASSAGES = 'ept.seen.passages.v1'
const LAST_RESULT = 'ept.last.result.v1'
const LAST_REVIEW = 'ept.last.review.v1'

/** Questions from the last ~6 attempts are remembered (25 × 6 = 150). */
const MAX_SEEN_QUESTIONS = 150
const MAX_SEEN_PASSAGES = 10

function readList(key: string): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : []
  } catch {
    return []
  }
}

function writeList(key: string, ids: string[], max: number): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(ids.slice(-max)))
  } catch {
    /* private mode or full storage — the test keeps working anyway */
  }
}

export function loadSeenQuestionIds(): string[] {
  return readList(SEEN_QUESTIONS)
}

export function loadSeenPassageIds(): string[] {
  return readList(SEEN_PASSAGES)
}

/** Appends the ids of a finished attempt to the history (FIFO). */
export function rememberQuestionIds(ids: string[]): void {
  const merged = [...readList(SEEN_QUESTIONS).filter((id) => !ids.includes(id)), ...ids]
  writeList(SEEN_QUESTIONS, merged, MAX_SEEN_QUESTIONS)
}

export function rememberPassageIds(ids: string[]): void {
  const merged = [...readList(SEEN_PASSAGES).filter((id) => !ids.includes(id)), ...ids]
  writeList(SEEN_PASSAGES, merged, MAX_SEEN_PASSAGES)
}

/**
 * The result goes to sessionStorage, but a copy is kept in memory too: if the
 * browser blocks storage (private mode, exhausted quota) the student must not
 * finish the test and land on a "no result found" screen.
 */
let memoryResult: TestResult | null = null
let memoryReview: ReviewItem[] | null = null

export function saveResult(result: TestResult): void {
  memoryResult = result
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(LAST_RESULT, JSON.stringify(result))
  } catch {
    /* the in-memory copy is enough */
  }
}

export function loadResult(): TestResult | null {
  if (memoryResult) return memoryResult
  if (typeof window === 'undefined') return null
  try {
    const raw = window.sessionStorage.getItem(LAST_RESULT)
    return raw ? (JSON.parse(raw) as TestResult) : null
  } catch {
    return null
  }
}

/** Answer history for the mistakes review (this session only). */
export function saveReview(items: ReviewItem[]): void {
  memoryReview = items
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.setItem(LAST_REVIEW, JSON.stringify(items))
  } catch {
    /* ignore */
  }
}

export function loadReview(): ReviewItem[] {
  if (memoryReview) return memoryReview
  if (typeof window === 'undefined') return []
  try {
    const raw = window.sessionStorage.getItem(LAST_REVIEW)
    const parsed: unknown = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? (parsed as ReviewItem[]) : []
  } catch {
    return []
  }
}

export function clearResult(): void {
  memoryResult = null
  memoryReview = null
  if (typeof window === 'undefined') return
  try {
    window.sessionStorage.removeItem(LAST_RESULT)
    window.sessionStorage.removeItem(LAST_REVIEW)
  } catch {
    /* ignore */
  }
}
