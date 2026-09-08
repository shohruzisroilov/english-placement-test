import type { Question } from '@/lib/types'
import { makeQuestion } from './helpers'

const g = (
  id: string,
  level: Parameters<typeof makeQuestion>[2],
  question: string,
  correct: string,
  ...distractors: string[]
) => makeQuestion('grammar', id, level, question, correct, ...distractors)

export const grammarQuestions: Question[] = [
  // ─────────────────────────────── A1 ───────────────────────────────
  g('g-a1-01', 'A1', 'She _____ to school every day.', 'goes', 'go', 'going', 'went'),
  g('g-a1-02', 'A1', 'I _____ a student at this school.', 'am', 'is', 'are', 'be'),
  g('g-a1-03', 'A1', 'There _____ two books on the table.', 'are', 'is', 'am', 'be'),
  g('g-a1-04', 'A1', '_____ you like coffee?', 'Do', 'Does', 'Are', 'Is'),
  g('g-a1-05', 'A1', 'He is eating _____ apple.', 'an', 'a', 'the', 'some'),
  g('g-a1-06', 'A1', 'Look! They _____ watching TV.', 'are', 'is', 'am', 'be'),
  g('g-a1-07', 'A1', 'This is _____ car. It belongs to Tom.', "Tom's", 'Toms', 'Tom', 'of Tom'),
  g('g-a1-08', 'A1', "I don't have _____ money with me.", 'any', 'some', 'much of', 'a'),
  g('g-a1-09', 'A1', 'My sister _____ like fish.', "doesn't", "don't", "isn't", 'not'),
  g('g-a1-10', 'A1', 'We go to the park _____ Sunday.', 'on', 'in', 'at', 'to'),
  g('g-a1-11', 'A1', '_____ is your name?', 'What', 'Who', 'Where', 'How'),
  g('g-a1-12', 'A1', 'These _____ my friends from Tashkent.', 'are', 'is', 'am', 'be'),

  g('g-a1-13', 'A1', 'My brother _____ football on Saturdays.', 'plays', 'play', 'playing', 'played'),
  g('g-a1-14', 'A1', '_____ there a bank near here?', 'Is', 'Are', 'Do', 'Have'),
  g('g-a1-15', 'A1', 'My family lives _____ Tashkent.', 'in', 'on', 'at', 'to'),
  g('g-a1-16', 'A1', 'She _____ got a new bicycle.', 'has', 'have', 'is', 'are'),
  g('g-a1-17', 'A1', "We _____ like cold weather.", "don't", "doesn't", "isn't", 'not'),
  g('g-a1-18', 'A1', 'Where _____ your parents work?', 'do', 'does', 'is', 'are'),

  // ─────────────────────────────── A2 ───────────────────────────────
  g('g-a2-01', 'A2', 'I _____ to London last year.', 'went', 'go', 'have gone', 'going'),
  g('g-a2-02', 'A2', 'She is _____ than her sister.', 'taller', 'tallest', 'more tall', 'tall'),
  g('g-a2-03', 'A2', 'If it rains tomorrow, we _____ at home.', 'will stay', 'stayed', 'would stay', 'are staying'),
  g('g-a2-04', 'A2', "I _____ finished my homework yet.", "haven't", "didn't", "don't", 'am not'),
  g('g-a2-05', 'A2', 'He is the _____ student in the class.', 'best', 'better', 'good', 'most good'),
  g('g-a2-06', 'A2', "You _____ wear a helmet here. It's the rule.", 'must', 'can', 'might', 'would'),
  g('g-a2-07', 'A2', 'We _____ TV when the phone rang.', 'were watching', 'watched', 'are watching', 'have watched'),
  g('g-a2-08', 'A2', "I'm going _____ visit my aunt tomorrow.", 'to', 'for', 'at', 'on'),
  g('g-a2-09', 'A2', "There isn't _____ milk in the fridge.", 'much', 'many', 'a lot', 'few'),
  g('g-a2-10', 'A2', 'She has lived in this city _____ 2015.', 'since', 'for', 'from', 'during'),
  g('g-a2-11', 'A2', '_____ I open the window, please?', 'Could', 'Do', 'Am', 'Will'),
  g('g-a2-12', 'A2', 'He was _____ tired to walk home.', 'too', 'very', 'so', 'enough'),

  g('g-a2-13', 'A2', 'I have never _____ to Japan.', 'been', 'go', 'went', 'being'),
  g('g-a2-14', 'A2', 'They _____ dinner when I called.', 'were having', 'have', 'has', 'been having'),
  g('g-a2-15', 'A2', 'You _____ smoke in the hospital.', "mustn't", "don't must", 'not must', "haven't to"),
  g('g-a2-16', 'A2', 'There are _____ people waiting outside.', 'a few', 'a little', 'much', 'any'),
  g('g-a2-17', 'A2', 'We arrived _____ the airport at six.', 'at', 'to', 'about', 'by'),
  g('g-a2-18', 'A2', 'This book is _____ interesting than that one.', 'more', 'most', 'much', 'many'),

  // ─────────────────────────────── B1 ───────────────────────────────
  g('g-b1-01', 'B1', 'If I _____ more time, I would travel around Asia.', 'had', 'have', 'will have', 'would have'),
  g('g-b1-02', 'B1', 'The letter _____ yesterday morning.', 'was sent', 'sent', 'is sent', 'has sent'),
  g('g-b1-03', 'B1', 'She told me she _____ busy that evening.', 'was', 'is', 'has been', 'will be'),
  g('g-b1-04', 'B1', "I'm used _____ early in the morning.", 'to getting up', 'to get up', 'getting up', 'get up'),
  g('g-b1-05', 'B1', 'He suggested _____ a taxi to the airport.', 'taking', 'to take', 'take', 'took'),
  g('g-b1-06', 'B1', 'By the time we arrived, the film _____.', 'had started', 'has started', 'started', 'was starting'),
  g('g-b1-07', 'B1', 'This is the man _____ helped me yesterday.', 'who', 'which', 'whose', 'what'),
  g('g-b1-08', 'B1', "I'd rather _____ at home tonight.", 'stay', 'to stay', 'staying', 'stayed'),
  g('g-b1-09', 'B1', 'You _____ have told me earlier — I could have helped!', 'should', 'must', 'would', 'can'),
  g('g-b1-10', 'B1', "She's the woman _____ car was stolen last week.", 'whose', "who's", 'which', 'that'),
  g('g-b1-11', 'B1', "I haven't seen him _____ ages.", 'for', 'since', 'during', 'from'),
  g('g-b1-12', 'B1', 'He asked me where I _____.', 'lived', 'live', 'do live', 'am living'),

  g('g-b1-13', 'B1', 'The house _____ in 1920.', 'was built', 'built', 'is built', 'has built'),
  g('g-b1-14', 'B1', "I don't mind _____ late on Fridays.", 'working', 'to work', 'work', 'worked'),
  g('g-b1-15', 'B1', 'If I were you, I _____ apologise.', 'would', 'will', 'am', 'had'),
  g('g-b1-16', 'B1', 'She made me _____ the truth.', 'tell', 'to tell', 'telling', 'told'),
  g('g-b1-17', 'B1', "It's the best film _____ I've ever seen.", 'that', 'what', 'who', 'whose'),
  g('g-b1-18', 'B1', "He's not old enough _____ drive.", 'to', 'for', 'that', 'so'),

  // ─────────────────────────────── B2 ───────────────────────────────
  g('g-b2-01', 'B2', 'Had I known about the traffic, I _____ differently.', 'would have acted', 'would act', 'had acted', 'will act'),
  g('g-b2-02', 'B2', 'Not only _____ late, but he also forgot the tickets.', 'was he', 'he was', 'he is', 'did he'),
  g('g-b2-03', 'B2', "She's used to _____ under pressure.", 'working', 'work', 'be working', 'worked'),
  g('g-b2-04', 'B2', 'I wish I _____ told her the truth.', 'had', 'have', 'would', 'did'),
  g('g-b2-05', 'B2', 'The project _____ by the end of the month.', 'will have been completed', 'will completed', 'is completing', 'has completed'),
  g('g-b2-06', 'B2', 'Neither of the reports _____ ready yet.', 'is', 'are', 'were', 'have'),
  g('g-b2-07', 'B2', "It's high time we _____ this problem.", 'solved', 'solve', 'will solve', 'have solved'),
  g('g-b2-08', 'B2', 'He denied _____ the money from the office.', 'taking', 'to take', 'take', 'that he take'),
  g('g-b2-09', 'B2', 'Hardly _____ the house when it started to rain.', 'had we left', 'we had left', 'we left', 'did we left'),
  g('g-b2-10', 'B2', 'The more you practise, _____ you become.', 'the better', 'better', 'the best', 'more better'),
  g('g-b2-11', 'B2', 'I object to _____ like a child.', 'being treated', 'be treated', 'treat', 'treated'),
  g('g-b2-12', 'B2', "He must _____ the train — he isn't here yet.", 'have missed', 'miss', 'missed', 'be missing'),

  g('g-b2-13', 'B2', '_____ harder, she would have passed the exam.', 'Had she studied', 'If she studied', 'She had studied', 'Should she study'),
  g('g-b2-14', 'B2', 'It was _____ a boring film that I left early.', 'such', 'so', 'very', 'too'),
  g('g-b2-15', 'B2', 'The kitchen ceiling needs _____ again.', 'painting', 'to paint', 'paint', 'painted'),
  g('g-b2-16', 'B2', 'Under no circumstances _____ this door.', 'should you open', 'you should open', 'you open', 'should open'),

  // ─────────────────────────────── C1 ───────────────────────────────
  g('g-c1-01', 'C1', '_____ for your advice, I would have failed the interview.', 'Were it not', 'If it were', 'Had it been', 'Not being'),
  g('g-c1-02', 'C1', 'Little _____ that the meeting had already been cancelled.', 'did he know', 'he knew', 'he did know', 'knew he'),
  g('g-c1-03', 'C1', 'No sooner had she arrived _____ the phone rang.', 'than', 'when', 'then', 'that'),
  g('g-c1-04', 'C1', 'Such _____ the demand that they extended the run by a month.', 'was', 'is', 'were', 'had been'),
  g('g-c1-05', 'C1', "I'd sooner you _____ mention it again.", "didn't", "don't", "won't", "haven't"),
  g('g-c1-06', 'C1', 'Rarely _____ such a convincing performance.', 'have I seen', 'I have seen', 'I saw', 'did I saw'),
  g('g-c1-07', 'C1', 'The committee, _____ members were divided, postponed the vote.', 'whose', 'which', 'of which', 'whom'),
  g('g-c1-08', 'C1', 'He is said _____ abroad shortly after the trial.', 'to have moved', 'that he moved', 'to moving', 'having moved'),
  g('g-c1-09', 'C1', 'Only after the meeting _____ the full implications.', 'did we realise', 'we realised', 'had we realise', 'we did realise'),
  g('g-c1-10', 'C1', 'Should you _____ any difficulties, contact our office.', 'encounter', 'encountered', 'to encounter', 'encountering'),
  g('g-c1-11', 'C1', 'Far _____ me to criticise, but the design could be simpler.', 'be it from', 'from it be', 'it be from', 'is it from'),
  g('g-c1-12', 'C1', '_____ all the evidence, the verdict came as a surprise.', 'Given', 'Giving', 'Give', 'To give'),
  g('g-c1-13', 'C1', 'So convincing _____ the argument that nobody objected.', 'was', 'it was', 'that was', 'had'),
  g('g-c1-14', 'C1', '_____ he to refuse, we would have to start again.', 'Were', 'Was', 'If', 'Should'),
  g('g-c1-15', 'C1', 'It was not until 1990 _____ the law was finally changed.', 'that', 'when', 'which', 'then'),
  g('g-c1-16', 'C1', 'Never before _____ such chaos in the chamber.', 'had we witnessed', 'we had witnessed', 'we witnessed', 'did we witnessed'),
]
