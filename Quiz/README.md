# Quiz Application
This project is a simple JavaScript-based quiz application that dynamically presents multiple-choice
questions to users. Users select answers, receive immediate feedback, and see their final score upon 
completion. The app has a reset feature, allowing users to play the quiz multiple times.

## Features
* Dynamically generated questions and answer choices
* Immediate feedback on selected answers
* Final score display at the end of the quiz
* Option to restart the quiz after completion

## Code Overview
1. Data Structure
The questions and answers are stored in a JavaScript array of objects, where each object contains:

* question: the question text
* answers: an array of answer objects, each with:
* text: the answer choice text
* correct: a boolean indicating if the answer is correct

2. Main Functions
* startQuiz(): Initializes the quiz by resetting the current question index and score, updating the button text, and calling showQuestion() to load the first question.

* showQuestion(): Renders the current question and answer choices. Each answer choice is displayed as a button, with an event listener attached to handle answer selection.

* resetState(): Clears previous question elements and hides the "Next" button.

* selectAnswer(e): Handles the answer selection logic. It checks if the selected answer is correct, highlights the correct answer, and enables the "Next" button.

* showScore(): Displays the final score after the last question and changes the "Next" button text to "Play Again."

* handleNextButton(): Advances to the next question or displays the final score if all questions have been answered.

3. Event Listeners -
   The Next button triggers handleNextButton() to move to the next question or restart the quiz.

## Usage
1. Open the HTML file that contains this JavaScript code in a web browser.
2. The quiz will start automatically with the first question displayed.
3. Select an answer to see if it is correct.
4. Click "Next" to proceed to the following question.
5. At the end of the quiz, the total score will be shown.
6. Click "Play Again" to restart the quiz.

## Customization
You can modify or add questions in the questions array to change the quiz content. To add a new question, insert a new object in the questions array following the existing structure.
