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
    question: 'What does HTML stands for',
    answers: [
      { text: 'Hypertext Machine language', correct: false },
      { text: 'Hypertext and links markup language.', correct: false },
      { text: 'Hypertext Markup Language', correct: true },
      { text: 'Hightext machine language', correct: false }
    ]
  },
  {
    question: 'How is document type initialized in HTML5?',
    answers: [
      { text: '</DOCTYPE HTML>', correct: false },
      { text: '</DOCTYPE>', correct: false },
      { text: '<!DOCTYPE HTML>', correct: true },
      { text: '</DOCTYPE html>', correct: false }
    ]
  },
  {
    question: 'Which of the following HTML Elements is used for making any text bold ?',
    answers: [
      { text: '<p>', correct: false },
      { text: '<i>', correct: false },
      { text: '<li>', correct: false },
      { text: '<b>', correct: true }
    ]
  },
  {
    question: 'Which of the following HTML element is used for creating an unordered list?',
    answers: [
      { text: '<ui>', correct: false },
      { text: '<i>', correct: false },
      { text: '<em>', correct: false },
      { text: '<ul>', correct: true }
    ]
  },
  {
  question: 'What is the purpose of using div tags in HTML?',
  answers: [
    { text: 'For creating different styles.', correct: false },
    { text: 'For creating different sections', correct: true },
    { text: 'For adding headings', correct: false },
    { text: 'For adding titles', correct: false }
  ]
}
]