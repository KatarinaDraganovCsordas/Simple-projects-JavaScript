const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {text: "Shark", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Elephant", correct: false},
      {text: "Giraffe", correct: false},
    ]
  }, {
    question: "Which is the largest desert in the world?",
    answers: [
      {text: "Gobi", correct: false},
      {text: "Sahara", correct: false},
      {text: "Antarctica", correct: true},
      {text: "Kalahari", correct: false},
    ]
  }, {
    question: "Which is the smallest contry in the world?",
    answers: [
      {text: "Vatican City", correct: true},
      {text: "Bhutan", correct: false},
      {text: "Nepal", correct: false},
      {text: "Luxenburg", correct: false},
    ]
  }, {
    question: "Which is the smallest continent in the world?",
    answers: [
      {text: "Asia", correct: false},
      {text: "Australia", correct: true},
      {text: "Africa", correct: false},
      {text: "Arctic", correct: false},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

