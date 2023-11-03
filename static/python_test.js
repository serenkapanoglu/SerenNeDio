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
    question: 'Which of the following is false statement in python',
    answers: [
      { text: 'int(144)==144', correct: false },
      { text: 'int(144.0)==144', correct: false },
      { text: 'int(144.0.5)==144', correct: false },
      { text: 'None of the above', correct: true }
    ]
  },
  {
    question: 'How you can lift the pen of in turtle?',
    answers: [
      { text: 'Turtle.lift()', correct: false },
      { text: 'Turtle.liftup()', correct: false },
      { text: 'Turtle.penup()', correct: true },
      { text: 'Turtle.up()', correct: false }
    ]
  },
  {
    question: 'In the following options which are python libraries which are used for data analysis and scientific computations',
    answers: [
      { text: 'Numpy', correct: false },
      { text: 'Scipy', correct: false },
      { text: 'Pandas', correct: false },
      { text: 'All the above', correct: true }
    ]
  },
  {
    question: 'How can we check whether the object is instance of class or not. Let us consider an object O which is instance of class B.',
    answers: [
      { text: 'B.isinstance(O)', correct: false },
      { text: 'O.isinstance(B)', correct: false },
      { text: 'isinstance(O,B)', correct: true },
      { text: 'isinstance(B,O)', correct: false }
    ]
  },
  {
  question: 'Which function can be used on the file to display a dialog for saving a file?',
  answers: [
    { text: 'Filename = savefilename()', correct: false },
    { text: 'Filename = asksavefilename()', correct: false },
    { text: 'Fielname = asksaveasfilename()', correct: true },
    { text: 'No such option in python.', correct: false }
  ]
}
]