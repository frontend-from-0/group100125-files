/*
===========================================================
  FLASHCARD PRACTICE APP
===========================================================
In this project, you'll create a Flashcard app to store
and practice study questions and answers.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'flashcards' with a few sample
   questions and answers.
2. Each flashcard is an object with 'question' and 'answer'.
*/

const flashcards = [
  {
    question: 'What is HTML?',
    answer: 'A language for making web pages',
  },
  {
    question: 'What does CSS do?',
    answer: 'Styles the web page',
  },
];

/*
-----------------------------------------------------------
  STEP 2: Show All Flashcards
-----------------------------------------------------------
Function: showAllFlashcards()
- Loops over the 'flashcards' array.
- Logs the question and answer for each card.
- HOMEWORK: Make questions equal in length so it's easier to read output
*/
function showAllFlashcards() {
  console.log('All available flashcard:');
  for (const flashcard of flashcards) {
    console.log(`${flashcard.question} --- ${flashcard.answer}`);
  }
  console.log();
}
showAllFlashcards();

/*
-----------------------------------------------------------
  STEP 3: Add a New Flashcard
-----------------------------------------------------------
Function: addFlashcard(question, answer)
- Creates a new flashcard object and adds it to 'flashcards'.
- Checks if a flashcard with the same question already exists.
- Logs a message if added or if already exists.
*/
function addFlashcard(question, answer) {
  console.log();
  console.log('Adding a new flashcards...');

  const flashcard = {
    question: question,
    answer: answer,
  }; // is the same as: const flashcard = {question, answer};

  for (const card of flashcards) {
    if (card.question === question) {
      console.log(`Flashcard with question \'${question}\' already exists`);
      return;
    }
  }
  flashcards.push(flashcard);
  console.log(`Added a new flashcard with question: \'${question}\'`);
  console.log();
}

addFlashcard('What is HTML?', 'A language for making web pages');
addFlashcard('What is JS?', 'A programming language');

showAllFlashcards();

/*
-----------------------------------------------------------
  STEP 4: Practice Flashcard
-----------------------------------------------------------
Function: practiceFlashcard(index)
- Shows the question at a given index.
- Waits for user to "flip" (just simulate it here).
- Shows the answer.

NOTE: For simplicity, we'll just log both.
*/

function practiceFlashcard(index) {
  if (index >= 0 && index < flashcards.length) {
    console.log('Question: ', flashcards[index].question);
    setTimeout(
      () => console.log('The answer is:', flashcards[index].answer)
    , 3000);

  } else {
    console.log(`Flashcard with index ${index} is not in the list. Use index from 0 to ${flashcards.length - 1}`);
  }
}

practiceFlashcard(2);
console.log('---');
practiceFlashcard(5);
/*
-----------------------------------------------------------
  STEP 5: Update a Flashcard
-----------------------------------------------------------
Function: updateFlashcard(question, newQuestion, newAnswer)
- Finds flashcard by question and updates it.
- Logs if updated or not found.
*/

/*
-----------------------------------------------------------
  STEP 6: Remove a Flashcard
-----------------------------------------------------------
Function: removeFlashcard(question)
- Finds the index of the flashcard and removes it.
- Logs if removed or not found.
*/

/*
-----------------------------------------------------------
  STEP 7: Test the App
-----------------------------------------------------------
Use these function calls to test your app.
*/

/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Random Practice:
   - Choose a random flashcard each time.
2. Category or Topic Tag:
   - Add tags like "HTML", "JS", "CSS" to flashcards.
3. Flip Mode:
   - First show only question, then show answer after delay.
*/
