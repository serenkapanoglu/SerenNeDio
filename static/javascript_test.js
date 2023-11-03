const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const scoreElement = document.getElementById('score')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let correct
let score=0



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})





function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
score=0;
updatedScore()

}

function setNextQuestion(){
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

function selectAnswer(e){
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
if(shuffledQuestions.length > currentQuestionIndex+1){
    nextButton.classList.remove('hide')
}else{
    startButton.innerText='Restart'
    startButton.classList.remove('hide')
}

}

function updatedScore(){
    scoreElement.innerText=`Score: ${score}`
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [ // 12
  {
    question: 'Which of the following is correct about JavaScript?',
    answers: [
      { text: 'JavaScript is a lightweight, interpreted programming language.', correct: false },
      { text: 'JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.', correct: false },
      { text: ' The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.', correct: false },
      { text: 'All of the above.', correct: true }
    ]
  },
  {
    question: 'Which built-in method returns the length of the string?',
    answers: [
      { text: 'length()', correct: true },
      { text: 'size()', correct: false },
      { text: 'index()', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: ' Which built-in method returns the characters in a string beginning at the specified location?',
    answers: [
      { text: 'substr()', correct: true },
      { text: 'getSubstring()', correct: false },
      { text: 'slice()', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Which of the following function of Array object joins all elements of an array into a string?',
    answers: [
      { text: 'concat()', correct: false },
      { text: 'join()', correct: true },
      { text: 'pop()', correct: false },
      { text: 'map()', correct: false }
    ]
  },
  {
  question: 'Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?',
  answers: [
    { text: 'pop()', correct: false },
    { text: 'push()', correct: false },
    { text: 'reduce()', correct: false },
    { text: 'reduceRight()', correct: true }
  ]
}
]







