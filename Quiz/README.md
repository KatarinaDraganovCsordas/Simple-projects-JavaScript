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
