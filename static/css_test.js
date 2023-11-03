const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreElement = document.getElementById('score')


let shuffledQuestions, currentQuestionIndex
let correct
let score=0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  console.log(score);
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  score=0
  updatedScore();
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
correct = selectedButton.dataset.correct
  if(correct){
    score++
  }
  updatedScore()
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function updatedScore(){
  scoreElement.innerText=`Score: ${score}`;
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [ // 12
  {
    question: 'Which of the following selector matches all elements of a type?',
    answers: [
      { text: 'The Type Selector', correct: true },
      { text: 'The Universal Selector', correct: false },
      { text: 'The Descendant Selector', correct: false },
      { text: 'The Class Selector', correct: false }
    ]
  },
  {
    question: 'Which of the following property changes the style of bottom border?',
    answers: [
      { text: ':border-bottom-style', correct: true },
      { text: ':border-top-style', correct: false },
      { text: ':border-left-style', correct: false },
      { text: ':border-right-style', correct: false }
    ]
  },
  {
    question: 'Which of the following property serves as shorthand for the padding properties?',
    answers: [
      { text: 'padding-top', correct: false },
      { text: 'padding', correct: true },
      { text: 'padding-left', correct: false },
      { text: 'padding-right', correct: true }
    ]
  },
  {
    question: 'Which of the below is the abbreviation of CSS?',
    answers: [
      { text: 'Cascade sheets style', correct: false },
      { text: 'Color and style sheets', correct: false },
      { text: 'Cascading style sheets', correct: true },
      { text: 'Coded Style Sheet', correct: false }
    ]
  },
  {
  question: 'Which of the below CSS properties represent the order of flex items in the grid container ?',
  answers: [
    { text: 'order', correct: true },
    { text: 'float', correct: false },
    { text: 'overflow', correct: false },
    { text: 'All of the above', correct: false }
  ]
}
]