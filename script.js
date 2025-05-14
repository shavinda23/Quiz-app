
const questionPool = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: 2
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: 2
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "South Africa", "Australia", "Brazil"],
        answer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
    },
    {
        question: "Which language has the most native speakers?",
        options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
        answer: 3
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: 2
    },
    {
        question: "Which year did World War II end?",
        options: ["1943", "1945", "1947", "1950"],
        answer: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: 2
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
        answer: 1
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: 1
    },
    {
        question: "What is the largest continent by area?",
        options: ["Africa", "North America", "Asia", "Europe"],
        answer: 2
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: 2
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound Sterling", "Yen"],
        answer: 2
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["206", "300", "150", "412"],
        answer: 0
    },
    {
        question: "Which country is the largest by area?",
        options: ["China", "United States", "Canada", "Russia"],
        answer: 3
    },
    {
        question: "What is the main component of the Sun?",
        options: ["Liquid Lava", "Hydrogen", "Oxygen", "Carbon"],
        answer: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        answer: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        answer: 1
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Elephant", "Lion", "Gorilla"],
        answer: 2
    },
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctica"],
        answer: 3
    },
    {
        question: "How many colors are in a rainbow?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "Which organ pumps blood throughout the body?",
        options: ["Liver", "Heart", "Brain", "Lungs"],
        answer: 1
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: 2
    },
    {
        question: "Which country invented tea?",
        options: ["India", "China", "Japan", "England"],
        answer: 1
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
        answer: 2
    },
    {
        question: "Which planet has the most moons?",
        options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
        answer: 1
    },
    {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: 2
    },
    {
        question: "Which country is both an island and a continent?",
        options: ["Greenland", "Australia", "Madagascar", "New Zealand"],
        answer: 1
    },
    {
        question: "How many time zones are there in Russia?",
        options: ["6", "8", "10", "11"],
        answer: 3
    },
    {
        question: "Which country has the most pyramids?",
        options: ["Egypt", "Mexico", "Sudan", "Peru"],
        answer: 2
    },
    {
        question: "What is the most spoken language in the world?",
        options: ["English", "Mandarin", "Spanish", "Hindi"],
        answer: 1
    },
    {
        question: "Which country has the longest coastline?",
        options: ["Russia", "Canada", "Australia", "United States"],
        answer: 1
    },
    {
        question: "What is the largest species of shark?",
        options: ["Great White Shark", "Whale Shark", "Tiger Shark", "Hammerhead Shark"],
        answer: 1
    },
    {
        question: "Which country is the largest producer of coffee?",
        options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
        answer: 2
    },
    {
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Pronghorn Antelope", "Quarter Horse"],
        answer: 1
    },
    {
        question: "Which planet has rings?",
        options: ["Jupiter", "Saturn", "Uranus", "All of the above"],
        answer: 3
    }
];


const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const progressBar = document.getElementById('progress');
const scoreElement = document.getElementById('score');
const percentageElement = document.getElementById('percentage');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedOptions = [];
let score = 0;
let quizCompleted = false;


function initQuiz() {

    currentQuestions = getRandomQuestions(questionPool, 20);
    currentQuestionIndex = 0;
    selectedOptions = new Array(currentQuestions.length).fill(null);
    score = 0;
    quizCompleted = false;
    

    startScreen.style.display = 'none';
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    

    loadQuestion();
}


function getRandomQuestions(pool, count) {

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${question.question}`;
    

    optionsElement.innerHTML = '';
    

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        

        if (selectedOptions[currentQuestionIndex] === index) {
            optionElement.classList.add('selected');
        }
        

        optionElement.addEventListener('click', () => selectOption(index));
        
        optionsElement.appendChild(optionElement);
    });
    

    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Submit' : 'Next';
    
 
    feedbackElement.textContent = '';
}


function selectOption(optionIndex) {

    if (quizCompleted) return;
    
    const options = document.querySelectorAll('.option');
    

    options.forEach(option => {
        option.classList.remove('selected');
    });
    

    options[optionIndex].classList.add('selected');
    

    selectedOptions[currentQuestionIndex] = optionIndex;
    

    if (quizCompleted) {
        const question = currentQuestions[currentQuestionIndex];
        if (optionIndex === question.answer) {
            options[optionIndex].classList.add('correct');
        } else {
            options[optionIndex].classList.add('incorrect');

            options[question.answer].classList.add('correct');
        }
    }
}


function nextQuestion() {

    if (currentQuestionIndex === currentQuestions.length - 1) {
        showResults();
        return;
    }
    
    currentQuestionIndex++;
    loadQuestion();
}


function prevQuestion() {
    currentQuestionIndex--;
    loadQuestion();
}


function showResults() {

    score = 0;
    currentQuestions.forEach((question, index) => {
        if (selectedOptions[index] === question.answer) {
            score++;
        }
    });
    

    const percentage = (score / currentQuestions.length) * 100;
    

    scoreElement.textContent = `You scored ${score} out of ${currentQuestions.length}`;
    percentageElement.textContent = `Percentage: ${percentage.toFixed(1)}%`;
    

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    

    quizCompleted = true;
}


startBtn.addEventListener('click', initQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
restartBtn.addEventListener('click', () => {
    resultContainer.style.display = 'none';
    startScreen.style.display = 'block';
});