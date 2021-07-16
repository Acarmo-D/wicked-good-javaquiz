const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var startTimer = document.getElementById('time-box')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex ++
    setNextQuestion()
})
function startGame() {
    console.log('start')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() -.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
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
        button.addEventListener('click' , selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild 
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target 
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else{
        startButton.innerText = 'Restart'
        startButton.classList.remmove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element,correct) {
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



const questions = [
    {
        question: "what does HTML stand for?",
        answers: [
            {text:'Hyper Text Markup Language' , correct: true },
            {text:'Hyper Type Madeup Lingo', correct: false },
            {text:'Hyper Tamale Markup Lingo', correct: false },
            {text:'Hyper Type Minty lime', correct: false }
        ]
    },
    {
        question: "what does CSS stand for?",
        answers: [
            {text:'Cool sheet Styles' , correct: false },
            {text:'Crazy stained sheet', correct: false },
            {text:'cascading style sheet', correct:true},
            {text:'caring stan sheet', correct: false }
        ]
    },
    {
        question: "How do you write Hello World in an alert box?",
        answers: [
            {text:'alert(Hello World)' , correct: true },
            {text:'alertBox=Hello World', correct: false },
            {text:'msgBox(Hello World', correct: false},
            {text:'alertBox(Hello World)', correct: false}
        ]
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        answers: [
            {text:'[Javascript]' , correct: false },
            {text:'<js>', correct: false },
            {text:'<script>' , correct: true },
            {text:'<link>' , correct: false }
        ]
    },
    {
        question: "What is the command to display a prompt?",
        answers: [
            {text:'display:Text Here' , correct: false },
            {text:'console.log= Text Here', correct: false },
            {text:'prompt(Text Here)', correct: true },
            {text:'var Text Here', correct: false }
        ]

    }, {
        question: "what values can confirm() return?",
        answers: [
            {text:'True or False' , correct: true },
            {text:'Yes or No', correct: false },
            {text:'up or down', correct: false },
            {text:'left or right', correct: false }
        ]
    }
]