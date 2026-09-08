import type { Passage, Question } from '@/lib/types'
import { makePassage, makeReadingQuestion } from './helpers'

// ─────────────────────────────── A1 ───────────────────────────────
const pA1a = makePassage(
  'r-a1-a',
  'A1',
  "Anna's Day",
  `Anna is a student. She gets up at seven o'clock every morning. She has breakfast with her mother and then she goes to school by bus. School starts at eight. Anna likes English and art, but she does not like maths. After school she plays with her friends in the park. She goes home at five o'clock.`,
)

const pA1b = makePassage(
  'r-a1-b',
  'A1',
  'The Small Shop',
  `There is a small shop near my house. It opens at nine in the morning and closes at eight in the evening. The shop sells bread, milk, fruit and vegetables. It is closed on Sunday. The woman in the shop is very friendly and she knows my name. I buy bread there every morning.`,
)

// ─────────────────────────────── A2 ───────────────────────────────
const pA2a = makePassage(
  'r-a2-a',
  'A2',
  'A New City',
  `Last summer Mark moved to Barcelona for a new job. At first everything was difficult. He did not speak Spanish and he did not know anybody in the city, so he often felt lonely in the evenings. Then he joined a football club near his flat. He met new people there and later started Spanish lessons twice a week. Now, six months later, Mark can have simple conversations in Spanish and he has good friends. He says that moving was the best decision of his life.`,
)

const pA2b = makePassage(
  'r-a2-b',
  'A2',
  'The Lost Phone',
  `On Friday evening Lucy took the train home from work. She was very tired and fell asleep. When the train arrived at her station, she got off quickly. Ten minutes later she realised that her phone was not in her bag. She went back to the station and spoke to a man in the office. He asked for her number and called it. A passenger had found the phone and given it to the driver. Lucy got her phone back the next morning.`,
)

// ─────────────────────────────── B1 ───────────────────────────────
const pB1a = makePassage(
  'r-b1-a',
  'B1',
  'Working from Home',
  `Ten years ago, working from home was unusual in most companies. Today millions of people do it for at least part of the week. Employees say they save time and money because they do not travel, and many find that they concentrate better without office noise. However, the change is not perfect. Some workers complain that they feel isolated, and younger employees in particular say they learn less when they cannot watch experienced colleagues at work. Many companies have therefore chosen a middle way: staff work from home for two or three days and come to the office for the rest of the week.`,
)

const pB1b = makePassage(
  'r-b1-b',
  'B1',
  'The Night Market',
  `Every Thursday the old square in the town centre turns into a night market. The stalls appear after six o'clock and stay open until midnight. Most of them sell food, but there are also second-hand books, plants and handmade jewellery. The market began five years ago as a small experiment by three local families who simply wanted to sell their vegetables. Nobody expected it to grow. Today around forty stalls take part, and the cafés around the square say their sales have doubled on Thursday nights. Not everyone is happy, however: a few residents complain about the noise, and the council is now discussing an earlier closing time.`,
)

// ─────────────────────────────── B2 ───────────────────────────────
const pB2a = makePassage(
  'r-b2-a',
  'B2',
  'Sleep and Memory',
  `For a long time sleep was regarded as a period of simple rest, a pause between the demands of one day and the next. Research over the past two decades has overturned that view. During deep sleep the brain appears to replay the electrical patterns produced while learning, strengthening the connections that store new information. Students who sleep after studying consistently outperform those who stay awake for the same number of hours, even when total study time is identical. The implication is uncomfortable for anyone who works late: a night spent revising may destroy more knowledge than it creates. Some researchers now argue that schools should treat sleep as part of the curriculum rather than as time lost.`,
)

const pB2b = makePassage(
  'r-b2-b',
  'B2',
  'The Cost of Cheap Clothes',
  `The price of clothing in Europe has fallen steadily since the 1990s, while the number of garments bought per person has roughly doubled. Retailers describe this as democratisation: fashion that was once expensive is now within reach of almost everyone. Critics point to the hidden bill. Producing a single cotton shirt requires around 2,500 litres of water, and most discarded clothes are burned or buried rather than recycled. What makes the problem difficult is not ignorance but habit; surveys show that shoppers are broadly aware of the environmental cost, yet behaviour changes slowly. A handful of brands now offer repair services, though sceptics regard these schemes as marketing rather than genuine reform.`,
)

// ─────────────────────────────── C1 ───────────────────────────────
const pC1a = makePassage(
  'r-c1-a',
  'C1',
  'The Limits of Prediction',
  `Forecasting has become the characteristic intellectual activity of our age. Economists, epidemiologists and climate scientists are all asked, with increasing insistence, to say what will happen next. Yet the record of prediction is uneven in a revealing way. Where systems are governed by stable physical laws, forecasts can be remarkably accurate; where human behaviour intervenes, they deteriorate quickly. The reason is not merely complexity but reflexivity: a published forecast alters the very behaviour it describes. A warning of shortage produces hoarding; a prediction of collapse can help to precipitate one. This suggests that the value of many forecasts lies less in their accuracy than in their capacity to provoke the actions that make them false — a paradox forecasters rarely advertise.`,
)

const pC1b = makePassage(
  'r-c1-b',
  'C1',
  'Reading the Ruins',
  `Archaeology has always been vulnerable to the stories archaeologists wish to tell. A settlement excavated in the 1930s was described as a fortress, its thick walls read as evidence of a warrior society; the same site, re-examined with modern techniques, yielded grain stores and no weapons at all. The walls, it now seems, were built to keep out floodwater. Such reversals are not rare, and they are instructive. Material remains do not speak; they are made to speak by the questions put to them, and those questions are shaped by the preoccupations of the interpreter's own century. The discipline's recent turn towards scientific methods offers a partial corrective, though isotope analysis and radiocarbon dating answer only the questions they were designed to answer. Interpretation, with all its hazards, remains unavoidable.`,
)

const pA1c = makePassage(
  'r-a1-c',
  'A1',
  'My Brother',
  `My brother's name is Timur. He is twelve years old and he has short black hair. He likes football and computer games, but he does not like vegetables. On Saturday he plays football with his friends in the street. On Sunday he helps our father in the garden.`,
)

const pA2c = makePassage(
  'r-a2-c',
  'A2',
  'The Cooking Class',
  `Every Wednesday evening Sara goes to a cooking class in the city centre. There are eight students in the class and one teacher. Last week they made bread and vegetable soup. Sara was surprised, because the bread was much easier than she expected. She took it home and her family ate all of it in ten minutes. Next week the class will learn how to make cakes. Sara says the class is the best part of her week.`,
)

const pB1c = makePassage(
  'r-b1-c',
  'B1',
  'Learning a Language as an Adult',
  `People often say that children learn languages easily and adults do not. Research suggests that the truth is more complicated. Children usually end up with a better accent, but adults learn grammar and vocabulary faster in the first year, because they can use what they already know about their own language. The real difference is time and confidence: a child hears the language for hours every day and is not afraid of making mistakes, while an adult may practise for twenty minutes and then stop out of embarrassment. Teachers therefore say that the most useful thing an adult learner can do is to speak early and often, even badly.`,
)

const pB2c = makePassage(
  'r-b2-c',
  'B2',
  'The Return of the Wolf',
  `When wolves were reintroduced to a national park in the 1990s, the aim was modest: to restore a missing predator. The consequences went far beyond that. Deer, which had grazed the valleys without interruption for decades, began to avoid the open riverbanks. Willow and aspen recovered, birds returned to the new growth, and beavers, finding material to build with, created ponds that changed the course of streams. Ecologists describe this as a trophic cascade, though some caution that the story has been told too neatly: rainfall and human management also changed during the same period. What is not disputed is that removing one species reshaped the landscape, and returning it reshaped the landscape again.`,
)

const pC1c = makePassage(
  'r-c1-c',
  'C1',
  'The Quiet Decline of the Footnote',
  `The footnote was once the scholar's conscience: the place where a claim met its evidence and where an author could argue quietly with predecessors. Its decline is usually blamed on the internet, but the causes are older and duller — publishers seeking cheaper typesetting, editors pursuing readability, and a reading public assumed to be impatient. What is lost is not merely a citation but a habit of mind. A footnote obliges a writer to distinguish between what is known and what is merely asserted, and it offers the reader a route out of the argument towards the sources. Hyperlinks were supposed to inherit this function; in practice they lead outward without ever inviting the reader back, and they rot within a decade.`,
)

export const passages: Passage[] = [
  ...[pA1a, pA1b, pA1c],
  ...[pA2a, pA2b, pA2c],
  ...[pB1a, pB1b, pB1c],
  ...[pB2a, pB2b, pB2c],
  ...[pC1a, pC1b, pC1c],
]

export const readingQuestions: Question[] = [
  // A1 — Anna's Day
  makeReadingQuestion(pA1a, 1, 'What time does Anna get up?', "At seven o'clock", "At eight o'clock", "At five o'clock", "At six o'clock"),
  makeReadingQuestion(pA1a, 2, 'How does Anna go to school?', 'By bus', 'By car', 'On foot', 'By bike'),
  makeReadingQuestion(pA1a, 3, 'What does Anna do after school?', 'She plays in the park', 'She goes shopping', 'She watches television', 'She helps her mother'),

  // A1 — The Small Shop
  makeReadingQuestion(pA1b, 1, 'When does the shop close?', 'At eight in the evening', 'At nine in the morning', 'At five in the afternoon', 'At midnight'),
  makeReadingQuestion(pA1b, 2, 'What can you buy in the shop?', 'Fruit and milk', 'Books', 'Clothes', 'Medicine'),
  makeReadingQuestion(pA1b, 3, 'Which day is the shop closed?', 'Sunday', 'Saturday', 'Monday', 'Friday'),

  // A2 — A New City
  makeReadingQuestion(pA2a, 1, 'Why was life difficult for Mark at first?', 'He spoke no Spanish and knew nobody', 'He did not like his new job', 'He had no money', 'His flat was too small'),
  makeReadingQuestion(pA2a, 2, 'What did Mark do first to change his situation?', 'He joined a football club', 'He started Spanish lessons', 'He changed his job', 'He moved to another flat'),
  makeReadingQuestion(pA2a, 3, 'How does Mark feel about the move now?', 'He is happy that he moved', 'He regrets his decision', 'He wants to go back home', 'He has not decided yet'),

  // A2 — The Lost Phone
  makeReadingQuestion(pA2b, 1, 'Why did Lucy lose her phone?', 'She fell asleep and left it on the train', 'Someone took it from her bag', 'She dropped it in the street', 'She forgot it at work'),
  makeReadingQuestion(pA2b, 2, 'Who found the phone?', 'Another passenger', 'The train driver', 'The man in the office', 'A police officer'),
  makeReadingQuestion(pA2b, 3, 'When did Lucy get her phone back?', 'The next morning', 'The same evening', 'A week later', 'She never got it back'),

  // B1 — Working from Home
  makeReadingQuestion(pB1a, 1, 'Which advantage of home working does the text mention?', 'Workers save travel time and money', 'Workers are paid more', 'Offices become larger', 'Meetings become shorter'),
  makeReadingQuestion(pB1a, 2, 'What problem do younger employees describe?', 'They learn less without experienced colleagues nearby', 'Their internet connection is slow', 'They work far more hours', 'They dislike their managers'),
  makeReadingQuestion(pB1a, 3, 'What solution have many companies chosen?', 'A mixture of home days and office days', 'Closing their offices completely', 'Ending home working entirely', 'Employing only older staff'),

  // B1 — The Night Market
  makeReadingQuestion(pB1b, 1, 'How did the market begin?', 'Three families wanted to sell vegetables', 'The council organised it', 'A café owner started it', 'Tourists asked for it'),
  makeReadingQuestion(pB1b, 2, 'What effect has the market had on nearby cafés?', 'Their Thursday sales have doubled', 'They have been forced to close', 'They now sell only food', 'They have moved to another square'),
  makeReadingQuestion(pB1b, 3, 'Why is the council discussing the market?', 'Some residents complain about the noise', 'The stalls do not pay rent', 'Too few people come', 'The square needs repairing'),

  // B2 — Sleep and Memory
  makeReadingQuestion(pB2a, 1, 'What belief has recent research overturned?', 'That sleep is merely a period of rest', 'That students need fewer exams', 'That memory cannot be measured', 'That schools start too early'),
  makeReadingQuestion(pB2a, 2, 'What does the brain appear to do during deep sleep?', 'Replay learning patterns and strengthen connections', 'Shut down all electrical activity', 'Delete unnecessary memories only', 'Produce entirely new brain cells'),
  makeReadingQuestion(pB2a, 3, 'What does the writer suggest about revising late at night?', 'It may destroy more knowledge than it creates', 'It is the most efficient way to study', 'It works only for younger students', 'It should replace daytime study'),

  // B2 — The Cost of Cheap Clothes
  makeReadingQuestion(pB2b, 1, 'What contrast does the writer draw?', 'Falling prices against rising hidden costs', 'European factories against Asian ones', 'Old fashion against new fashion', 'Cotton against synthetic fabric'),
  makeReadingQuestion(pB2b, 2, 'According to the text, why is the problem hard to solve?', 'Shoppers know the costs but their habits change slowly', 'People have never heard of the issue', 'Clothes cannot be recycled at all', 'Governments refuse to discuss it'),
  makeReadingQuestion(pB2b, 3, "How does the writer present brands' repair services?", 'As something sceptics doubt the motives of', 'As a complete solution to the problem', 'As unaffordable for ordinary customers', 'As a legal requirement'),

  // C1 — The Limits of Prediction
  makeReadingQuestion(pC1a, 1, 'What distinction does the writer draw about forecasting?', 'Physical systems are predictable in ways human behaviour is not', 'Short forecasts are better than long ones', 'Scientists outperform economists in every field', 'Traditional methods beat computer models'),
  makeReadingQuestion(pC1a, 2, 'What does the writer mean by "reflexivity"?', 'A published forecast changes the behaviour it predicts', 'Forecasters repeat one another’s conclusions', 'Predictions must be revised continuously', 'Data always reflects past events'),
  makeReadingQuestion(pC1a, 3, 'What is the paradox mentioned at the end?', 'A valuable forecast may cause the actions that prove it wrong', 'Forecasters are never believed by the public', 'Accuracy can never be measured at all', 'Warnings are always ignored by governments'),

  // C1 — Reading the Ruins
  makeReadingQuestion(pC1b, 1, 'Why does the writer mention the 1930s excavation?', 'To show how assumptions can shape interpretation', 'To praise the skill of early archaeologists', 'To date the settlement more precisely', 'To describe ancient methods of warfare'),
  makeReadingQuestion(pC1b, 2, 'What does the writer say about material remains?', 'Their meaning depends on the questions asked of them', 'They speak clearly for themselves', 'They are almost never found intact', 'They are usually destroyed by excavation'),
  makeReadingQuestion(pC1b, 3, "What is the writer's view of scientific methods in archaeology?", 'Useful, but limited to the questions they were designed for', 'A complete replacement for interpretation', 'Fundamentally unreliable and misleading', 'Too expensive to be used widely'),

  // A1 — My Brother
  makeReadingQuestion(pA1c, 1, 'How old is Timur?', 'Twelve', 'Ten', 'Twenty', 'Two'),
  makeReadingQuestion(pA1c, 2, 'What does Timur not like?', 'Vegetables', 'Football', 'Computer games', 'His friends'),
  makeReadingQuestion(pA1c, 3, 'What does Timur do on Sunday?', 'He helps his father', 'He plays football', 'He goes to school', 'He watches television'),

  // A2 — The Cooking Class
  makeReadingQuestion(pA2c, 1, 'How often does Sara go to the class?', 'Once a week', 'Every day', 'Twice a week', 'Once a month'),
  makeReadingQuestion(pA2c, 2, 'Why was Sara surprised?', 'Making bread was easier than she expected', 'The class was full', 'The teacher was late', 'The soup was cold'),
  makeReadingQuestion(pA2c, 3, 'What will the class do next week?', 'Make cakes', 'Make bread again', 'Visit a restaurant', 'Take an exam'),

  // B1 — Learning a Language as an Adult
  makeReadingQuestion(pB1c, 1, 'According to the text, what do adults do better than children?', 'Learn grammar and vocabulary quickly at first', 'Copy an accent', 'Remember words for longer', 'Read difficult texts'),
  makeReadingQuestion(pB1c, 2, 'What does the writer say the real difference is?', 'The amount of practice and the learner’s confidence', 'The age of the brain', 'The teaching method', 'The language chosen'),
  makeReadingQuestion(pB1c, 3, 'What advice do teachers give adult learners?', 'Start speaking early, even with mistakes', 'Study all the grammar rules first', 'Only listen during the first year', 'Learn together with children'),

  // B2 — The Return of the Wolf
  makeReadingQuestion(pB2c, 1, 'What was the original aim of reintroducing wolves?', 'To restore a predator that was missing', 'To attract more tourists', 'To protect the beavers', 'To reduce the number of birds'),
  makeReadingQuestion(pB2c, 2, 'How did the wolves affect the trees?', 'Deer avoided the riverbanks, so willow and aspen recovered', 'The wolves spread seeds as they travelled', 'Beavers stopped cutting trees down', 'The park planted new woodland'),
  makeReadingQuestion(pB2c, 3, 'What caution do some ecologists express?', 'Other factors changed during the same period', 'The wolves never actually returned', 'The park was far too small', 'Deer numbers rose again immediately'),

  // C1 — The Quiet Decline of the Footnote
  makeReadingQuestion(pC1c, 1, 'What does the writer say caused the decline of the footnote?', 'Practical publishing pressures rather than the internet alone', 'A change in academic regulations', 'The disappearance of research libraries', 'An improvement in readers’ memories'),
  makeReadingQuestion(pC1c, 2, 'What does the writer value most about footnotes?', 'They force a distinction between evidence and assertion', 'They make a text appear longer', 'They impress examiners', 'They reduce printing costs'),
  makeReadingQuestion(pC1c, 3, 'What is the writer’s view of hyperlinks?', 'They fail to do what footnotes did', 'They are a perfect replacement', 'They should be banned from journals', 'They are too expensive to maintain'),
]
