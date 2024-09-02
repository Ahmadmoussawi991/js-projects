const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
        answer: 0
    }
];

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    for (let i = 0; i < question.options.length; i++) {
        const option = document.createElement('li');
        option.innerHTML = `<input type="radio" id="option${i + 1}" name="option"><label for="option${i + 1}">${question.options[i]}</label>`;
        optionsElement.appendChild(option);
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = questions[currentQuestion].answer;
        if (selectedOption.id === `option${answer + 1}`) {
            score++;
        }        
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    submitButton.disabled = true;
}

submitButton.addEventListener('click', checkAnswer);

displayQuestion();