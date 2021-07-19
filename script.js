const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question:
      "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
    a: "p {background-color : yellow;}",
    b: "p {background-color : #yellow;}",
    c: "all {background-color : yellow;}",
    d: "all p {background-color : #yellow;}",
    correct: "a",
  },
  {
    question:
      "Which of the following property is used as the shorthand property of margin properties?",
    a: "margin-left",
    b: "margin-right",
    c: "margin",
    d: "margin-all",
    correct: "c",
  },
  {
    question:
      "The CSS property used to specify the transparency of an element is -",
    a: "opacity",
    b: "filter",
    c: "visibility",
    d: "overlay",
    correct: "a",
  },
  {
    question:
      "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
    a: "word-break",
    b: "text-indent",
    c: "writing-mode",
    d: "text-direction",
    correct: "c",
  },
  {
    question:
      "The CSS property used to make the rounded borders, or rounded corners around an element is",
    a: "border-collapse",
    b: "border-radius",
    c: "border-spacing",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Are the negative values allowed in padding property?",
    a: "Yes",
    b: "No",
    c: "Can't Say",
    d: "Maybe",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Retry</button>
            `;
    }
  }
});
