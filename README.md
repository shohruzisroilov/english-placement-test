# English Placement Test

A web app that determines a new student's English level (**A1 – C1**) in about
12–15 minutes. It works the same on phones, tablets and computers (mobile-first,
but adapted to every screen). No backend, no database, no login — everything runs
in the frontend.

**Flow:** `/` → Start → `/test` (25 questions) → `/result` → the student shows the
result to the administrator.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Deploy

Every route is static (`○ prerendered`) and there is no backend. Push to Vercel, or
run `npm run build && npm start` on any Node host. For plain static hosting without
Node, add `output: 'export'` to `next.config.ts` and upload the `out/` folder.

## Structure

```
app/            /  /test  /result  pages
components/     QuestionCard, OptionButton, ProgressBar, TestHeader, ResultCard,
                ScoreRow, LevelScale, ReviewList, FocusWarning, ConfirmDialog
data/questions/ question bank: grammar.ts, vocabulary.ts, reading.ts
lib/            engine.ts (adaptive selection), scoring.ts (score + CEFR),
                storage.ts (localStorage history), useFocusGuard.ts, types.ts, random.ts
```

## How the test is built

| Section | Questions | Notes |
| --- | --- | --- |
| Grammar | 12 | each question is picked after the previous answer |
| Vocabulary | 7 | continues from the level reached in grammar |
| Reading | 6 | 2 passages × 3 questions |

**Adaptive rule:** the test starts at **A2**, so it never opens with a trivial
question. A correct answer moves up one level, a wrong answer moves down one
(within A1…C1). The level stays fixed inside a reading block; when the block ends
it moves up if at least 2 of 3 were correct, and down otherwise.

During the test only the question number and the progress bar are visible — the
section name (Grammar / Vocabulary / Reading) is not shown to the student; it
appears only in the score breakdown on the result page.

**There is no Back button.** Instead, an answer is recorded only when `Next` is
pressed, so the student can freely change their choice on the current question.
This protects against mis-taps without breaking the adaptive chain — the standard
solution in computer-adaptive tests.

## No repeated questions

- Bank: **206 questions** (86 grammar + 75 vocabulary + 45 reading) and
  **15 passages**, 15–18 per level.
- Used question and passage ids are stored in `localStorage` (last ~6 attempts).
- Selection prefers **never-seen** questions; if the pool runs dry, older ones are
  reused, so the test never breaks.
- Option order is reshuffled every time with Fisher–Yates. The correct answer is
  stored as an option `id`, not an index, which makes shuffling safe.

Measured result: **0 repeats in the 1st and 2nd attempts**, about 6 in the 3rd (for
a student who stays at one level). Need more? Just add questions to
`data/questions/` — nothing else has to change.

## Anti-cheating

A browser **cannot prevent** a student from switching to another app — no web app
can. So the approach is: *detect → warn → report to the administrator*.

1. **Leave detection** (`lib/useFocusGuard.ts`) — `visibilitychange` (app switching
   on phones) plus `blur`/`focus` (window switching on desktop). Focus losses
   shorter than 1.5 seconds are ignored, so tapping the address bar or a
   notification banner does not raise a false alarm.
2. **Full-screen warning on return** — the question is completely covered and the
   student cannot continue until `Continue test` is pressed. From the third time
   the wording becomes firmer.
3. **A marker on the result** — on the screen the administrator sees:
   `⚠️ Left the test 3 times · 2 min away`, or `✓ Completed without leaving the page`.
4. **Copying and translating made harder** — text selection (`user-select: none`),
   the context menu and the `copy` event are blocked on the test page. This closes
   the easiest route: long-pressing to "Translate" or "Search" on a phone.

**Limits, stated plainly:** this is a signal, not a lock. If the student uses a
second phone or disables JavaScript, the app cannot tell. Real supervision comes
from the administrator being present; this feature only flags suspicious attempts.

## Reviewing mistakes

The result page has a **"Review my mistakes (N)"** button. Pressing it first shows a
reminder — *show the result to your administrator* — and then opens the list of
mistakes: every wrong question, the option the student chose (✕) and the correct
answer (✓), together with the passage for reading questions.

Answers are kept in `sessionStorage` (`ept.last.review.v1`), so they disappear when
the browser closes and are cleared when a new test starts. The student never sees
technical data such as question ids, levels or scoring internals.

## Responsive

| Screen | Behaviour |
| --- | --- |
| Phone (<640px) | single column, full-width buttons, `Next` pinned to the bottom |
| Tablet (≥640px) | wider container, result buttons side by side |
| Desktop (≥1024px) | larger type, centred content, line length capped for reading |

No horizontal scrolling and a complete test run are verified automatically at all
three sizes.

## Score and CEFR

**The displayed score** is difficulty-weighted accuracy (`A1=1 … C1=5`): getting a
C1 question right is worth five times an A1 one. Section percentages use the same
formula, so "6/6 correct = 100%" always holds — no contradictions.

**The level** is derived differently. Every answer casts a vote on an *ability*
estimate:

```
vote    = question level + (correct ? +0.5 : −0.5)
ability = mean of the votes   (the first 3 warm-up questions count half)
```

Adaptive selection clusters questions around the true level, so this mean converges
quickly. The thresholds were calibrated by simulation:

| ability | Level |
| --- | --- |
| < 2.50 | A1 |
| 2.50 – 4.10 | A2 / B1 (cut points 2.50 / 3.35) |
| 4.10 – 4.70 | B2 |
| ≥ 4.70 | C1 |

Two guards: (1) the level never exceeds the highest level answered correctly, and
(2) if weighted accuracy falls below 40% the level drops one step.

**Accuracy (simulation, 400 synthetic students per level):** exact match 58–93%,
and **99–100% within ±1 level**.

## Adding questions

In `data/questions/grammar.ts` or `vocabulary.ts`:

```ts
g('g-b1-19', 'B1', 'He asked me where I _____.', 'lived', 'live', 'do live', 'am living'),
//  id        level   question                    ↑ correct answer, then distractors
```

For reading, create a text with `makePassage(...)`, add it to the `passages` array,
and write three questions with `makeReadingQuestion(passage, 1..3, ...)`.

## Out of scope for this MVP

Admin panel, backend, database, auth, registration, group management, payments,
Telegram/SMS, AI APIs, Listening / Speaking / Writing — all for later versions.

Note: the "I have shown it to the administrator" confirmation before the mistakes
review is a UI reminder only. Without a backend and login it cannot be enforced —
a student can press the button regardless.
