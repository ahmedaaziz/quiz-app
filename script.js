const quizData = [
  {
    question: "What is the name of Capital of Egypt",
    a: "Alexandria",
    b: "Luxur",
    c: "Sharm Elsheik",
    d: "Cairo",
    correct: "d",
  },
  {
    question: "What is the best programming language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "a",
  },
  {
    question: "Who is the president of US?",
    a: "John kinnedy",
    b: "Donal Trump",
    c: "Joe Biden",
    d: "Barak Obama",
    correct: "c",
  },
  {
    question: "What does HTML stands For?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Application Programming Interface",
    correct: "a",
  },
  {
    question: "What year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None Of Above",
    correct: "b",
  },
];
const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit_btn = document.getElementById("submitAnswer");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  console.log("firstquiz index", currentQuiz);
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit_btn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    // Check if current question index is less than questions length
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // TODO : show results
      quiz.innerHTML = `
      <h2 >You answered correctly ${score}/${quizData.length} questions.</h2>
      <button onclick="location.reload()">Reload test</button>
      `;
    }
  }
});
