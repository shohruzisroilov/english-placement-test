import type { Question } from '@/lib/types'
import { makeQuestion } from './helpers'

const v = (
  id: string,
  level: Parameters<typeof makeQuestion>[2],
  question: string,
  correct: string,
  ...distractors: string[]
) => makeQuestion('vocabulary', id, level, question, correct, ...distractors)

export const vocabularyQuestions: Question[] = [
  // ─────────────────────────────── A1 ───────────────────────────────
  v('v-a1-01', 'A1', 'The opposite of "big" is _____.', 'small', 'short', 'tall', 'long'),
  v('v-a1-02', 'A1', 'We usually eat breakfast in the _____.', 'morning', 'night', 'evening', 'afternoon'),
  v('v-a1-03', 'A1', 'A person who teaches children is a _____.', 'teacher', 'doctor', 'driver', 'farmer'),
  v('v-a1-04', 'A1', 'You wear _____ on your feet.', 'shoes', 'gloves', 'a hat', 'a scarf'),
  v('v-a1-05', 'A1', 'The opposite of "hot" is _____.', 'cold', 'warm', 'wet', 'dry'),
  v('v-a1-06', 'A1', 'Monday, Tuesday, _____, Thursday.', 'Wednesday', 'Sunday', 'March', 'Weekend'),
  v('v-a1-07', 'A1', 'We buy food at the _____.', 'supermarket', 'library', 'bank', 'cinema'),
  v('v-a1-08', 'A1', 'An animal that says "meow" is a _____.', 'cat', 'dog', 'bird', 'horse'),
  v('v-a1-09', 'A1', "My father's brother is my _____.", 'uncle', 'cousin', 'nephew', 'grandfather'),
  v('v-a1-10', 'A1', 'The opposite of "cheap" is _____.', 'expensive', 'free', 'rich', 'easy'),

  v('v-a1-11', 'A1', 'We sleep in the _____.', 'bedroom', 'kitchen', 'garden', 'garage'),
  v('v-a1-12', 'A1', 'The opposite of "old" (for people) is _____.', 'young', 'new', 'small', 'short'),
  v('v-a1-13', 'A1', 'A doctor works in a _____.', 'hospital', 'school', 'shop', 'bank'),
  v('v-a1-14', 'A1', 'You read a _____.', 'book', 'chair', 'spoon', 'window'),
  v('v-a1-15', 'A1', "My mother's daughter is my _____.", 'sister', 'aunt', 'niece', 'cousin'),

  // ─────────────────────────────── A2 ───────────────────────────────
  v('v-a2-01', 'A2', "I'm very _____ in learning Spanish.", 'interested', 'interesting', 'interest', 'interests'),
  v('v-a2-02', 'A2', 'Could you _____ me a favour?', 'do', 'make', 'take', 'give'),
  v('v-a2-03', 'A2', 'She _____ a photo of the mountains.', 'took', 'made', 'did', 'got'),
  v('v-a2-04', 'A2', 'We need to _____ a decision today.', 'make', 'do', 'take', 'get'),
  v('v-a2-05', 'A2', 'The opposite of "arrive" is _____.', 'leave', 'stay', 'enter', 'return'),
  v('v-a2-06', 'A2', 'It was a very _____ film — I cried at the end.', 'sad', 'bored', 'angry', 'tired'),
  v('v-a2-07', 'A2', "Turn _____ the light, please. It's dark in here.", 'on', 'off', 'up', 'down'),
  v('v-a2-08', 'A2', 'A place where tourists sleep on holiday is a _____.', 'hotel', 'hospital', 'office', 'station'),
  v('v-a2-09', 'A2', "He's very _____ — he always helps other people.", 'kind', 'lazy', 'rude', 'quiet'),
  v('v-a2-10', 'A2', 'I _____ money every month to buy a bicycle.', 'save', 'spend', 'pay', 'lend'),

  v('v-a2-11', 'A2', 'I usually _____ up at seven o\'clock.', 'get', 'take', 'make', 'do'),
  v('v-a2-12', 'A2', "She's very good _____ mathematics.", 'at', 'in', 'on', 'for'),
  v('v-a2-13', 'A2', 'The opposite of "noisy" is _____.', 'quiet', 'clean', 'empty', 'slow'),
  v('v-a2-14', 'A2', 'Can you _____ me your pen for a minute?', 'lend', 'borrow', 'take', 'bring'),
  v('v-a2-15', 'A2', 'He _____ his homework every evening.', 'does', 'makes', 'takes', 'gives'),

  // ─────────────────────────────── B1 ───────────────────────────────
  v('v-b1-01', 'B1', "I can't _____ to buy a new phone this year.", 'afford', 'effort', 'offer', 'allow'),
  v('v-b1-02', 'B1', 'You should _____ an effort to arrive on time.', 'make', 'do', 'take', 'put'),
  v('v-b1-03', 'B1', 'I ran _____ an old friend at the station yesterday.', 'into', 'over', 'out', 'after'),
  v('v-b1-04', 'B1', 'The meeting was _____ until next Monday.', 'postponed', 'prevented', 'refused', 'avoided'),
  v('v-b1-05', 'B1', 'He has a good _____ of humour.', 'sense', 'feeling', 'mind', 'idea'),
  v('v-b1-06', 'B1', "I'm looking _____ to seeing you again.", 'forward', 'ahead', 'up', 'after'),
  v('v-b1-07', 'B1', 'The opposite of "generous" is _____.', 'mean', 'kind', 'rich', 'careful'),
  v('v-b1-08', 'B1', 'He _____ up smoking two years ago.', 'gave', 'put', 'took', 'made'),
  v('v-b1-09', 'B1', "It's a real _____ that you can't come to the wedding.", 'shame', 'sorry', 'harm', 'fault'),
  v('v-b1-10', 'B1', 'Prices have _____ sharply since January.', 'risen', 'raised', 'arisen', 'lifted'),

  v('v-b1-11', 'B1', 'The train was delayed _____ the bad weather.', 'because of', 'because', 'so', 'although'),
  v('v-b1-12', 'B1', "She's responsible _____ the whole department.", 'for', 'of', 'to', 'with'),
  v('v-b1-13', 'B1', "I couldn't _____ out what he was saying.", 'make', 'take', 'give', 'bring'),
  v('v-b1-14', 'B1', 'They _____ off the meeting until Friday.', 'put', 'took', 'got', 'made'),
  v('v-b1-15', 'B1', 'The film was based _____ a true story.', 'on', 'in', 'at', 'from'),

  // ─────────────────────────────── B2 ───────────────────────────────
  v('v-b2-01', 'B2', 'His argument was so _____ that nobody could disagree.', 'compelling', 'compelled', 'compulsory', 'competent'),
  v('v-b2-02', 'B2', 'You should take _____ of the free training courses.', 'advantage', 'benefit', 'profit', 'chance'),
  v('v-b2-03', 'B2', "She's extremely _____ about detail in her work.", 'meticulous', 'minute', 'mild', 'modest'),
  v('v-b2-04', 'B2', 'The company is on the _____ of bankruptcy.', 'verge', 'border', 'margin', 'limit'),
  v('v-b2-05', 'B2', 'I take _____ at the suggestion that I lied.', 'offence', 'offend', 'offensive', 'offended'),
  v('v-b2-06', 'B2', 'She _____ the blame for the whole mistake.', 'took', 'made', 'did', 'held'),
  v('v-b2-07', 'B2', 'The results were _____ with our earlier predictions.', 'consistent', 'constant', 'consequent', 'considerate'),
  v('v-b2-08', 'B2', 'The team made a _____ effort to finish before the deadline.', 'concerted', 'concerned', 'conserved', 'concurrent'),
  v('v-b2-09', 'B2', 'After long negotiations they reached a _____.', 'compromise', 'commitment', 'comparison', 'component'),
  v('v-b2-10', 'B2', 'The project was badly _____ by a lack of funding.', 'hampered', 'hastened', 'heightened', 'harnessed'),

  v('v-b2-11', 'B2', 'The government has pledged to _____ child poverty.', 'tackle', 'grasp', 'seize', 'catch'),
  v('v-b2-12', 'B2', 'He has a vested _____ in the outcome of the vote.', 'interest', 'concern', 'benefit', 'share'),
  v('v-b2-13', 'B2', 'The decision drew _____ criticism from the press.', 'widespread', 'wide', 'broad', 'large'),
  v('v-b2-14', 'B2', 'She managed to _____ the tension in the room.', 'defuse', 'diffuse', 'refuse', 'confuse'),
  v('v-b2-15', 'B2', 'The evidence is _____ to prove his guilt.', 'insufficient', 'unsatisfied', 'incapable', 'unable'),

  // ─────────────────────────────── C1 ───────────────────────────────
  v('v-c1-01', 'C1', 'Her explanation was so _____ that it left everyone confused.', 'convoluted', 'concise', 'coherent', 'candid'),
  v('v-c1-02', 'C1', "The politician's answer was deliberately _____.", 'ambiguous', 'ambitious', 'amiable', 'amenable'),
  v('v-c1-03', 'C1', 'The town has _____ over the last decade.', 'burgeoned', 'bulged', 'bloated', 'brimmed'),
  v('v-c1-04', 'C1', 'She defended her position with _____ conviction.', 'unwavering', 'unwilling', 'unwitting', 'unwieldy'),
  v('v-c1-05', 'C1', 'The report _____ the need for urgent reform.', 'underscores', 'undermines', 'undertakes', 'undergoes'),
  v('v-c1-06', 'C1', 'His success can be _____ to years of quiet preparation.', 'attributed', 'contributed', 'distributed', 'substituted'),
  v('v-c1-07', 'C1', 'A _____ argument looks convincing but is actually false.', 'specious', 'spacious', 'suspicious', 'superficial'),
  v('v-c1-08', 'C1', "The two accounts were _____ — they couldn't both be true.", 'irreconcilable', 'irrefutable', 'irreversible', 'irrelevant'),
  v('v-c1-09', 'C1', 'He has a well-known _____ for exaggeration.', 'penchant', 'pendant', 'pension', 'pittance'),
  v('v-c1-10', 'C1', 'The new findings _____ our original hypothesis.', 'corroborate', 'collaborate', 'cooperate', 'contemplate'),
  v('v-c1-11', 'C1', 'The two versions of events are at _____ with each other.', 'odds', 'ends', 'risk', 'fault'),
  v('v-c1-12', 'C1', 'She has an _____ eye for detail.', 'unerring', 'unending', 'unearthly', 'unyielding'),
  v('v-c1-13', 'C1', 'The proposal was met with _____ approval from the board.', 'tacit', 'tactful', 'tactile', 'tactical'),
  v('v-c1-14', 'C1', 'The scandal effectively _____ his political career.', 'derailed', 'detained', 'deterred', 'deferred'),
  v('v-c1-15', 'C1', 'The new findings _____ doubt on the earlier study.', 'cast', 'put', 'gave', 'made'),
]
