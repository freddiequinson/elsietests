// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToResultsBtn = document.getElementById('back-to-results');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const progressBar = document.getElementById('progressBar');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highScore');
const finalScoreElement = document.getElementById('final-score');
const totalQuestionsElement = document.getElementById('total-questions');
const resultMessageElement = document.getElementById('result-message');
const improvementTipsElement = document.getElementById('improvement-tips');
const reviewContainer = document.getElementById('review-container');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let quizData = [];
let userAnswers = [];
let currentQuestions = [];
const QUESTIONS_PER_QUIZ = 20;

// Initialize the app
function init() {
    // Set initial high score
    highScoreElement.textContent = highScore;
    totalQuestionsElement.textContent = QUESTIONS_PER_QUIZ;
    
    // Load questions
    loadQuizData();
    
    // Event listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', resetQuiz);
    reviewBtn.addEventListener('click', showReview);
    backToResultsBtn.addEventListener('click', showResults);
}

// Load quiz data from questions.js
function loadQuizData() {
    // Show loading state
    startBtn.disabled = true;
    startBtn.innerHTML = '<div class="spinner"></div> Loading Questions...';
    
    // Simulate loading (in a real app, this would be an API call)
    setTimeout(() => {
        // Select random questions
        selectRandomQuestions();
        startBtn.disabled = false;
        startBtn.textContent = 'Start Quiz';
    }, 500);
}

// Select random questions for the quiz
function selectRandomQuestions() {
    // Create a copy of the questions array to avoid mutating the original
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, QUESTIONS_PER_QUIZ);
}

// Start the quiz
function startQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    scoreElement.textContent = score;
    
    // Show quiz screen
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden');
    
    // Show first question
    showQuestion();
}

// Show current question
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = (currentQuestionIndex / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Set question text
    questionElement.textContent = `${questionNumber}. ${question.question}`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create and append options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option.text;
        optionElement.dataset.index = index;
        
        // Add click event
        optionElement.addEventListener('click', () => selectOption(optionElement, index));
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide next button until an option is selected
    nextBtn.classList.add('hidden');
}

// Handle option selection
function selectOption(selectedElement, selectedIndex) {
    // Disable all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        option.style.cursor = 'not-allowed';
    });
    
    // Get current question
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    
    // Mark selected option
    selectedElement.classList.add('selected');
    
    // Show correct/incorrect feedback
    if (isCorrect) {
        selectedElement.classList.add('correct');
        score++;
        scoreElement.textContent = score;
    } else {
        selectedElement.classList.add('incorrect');
        // Also show the correct answer
        options[currentQuestion.correctAnswer].classList.add('correct');
    }
    
    // Store user's answer
    userAnswers.push({
        question: currentQuestion.question,
        userAnswer: selectedIndex,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect,
        explanation: currentQuestion.explanation,
        reference: currentQuestion.reference
    });
    
    // Show next button
    nextBtn.classList.remove('hidden');
}

// Show next question or end quiz
function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// End the quiz and show results
function endQuiz() {
    // Update high score if needed
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreElement.textContent = highScore;
    }
    
    // Update result screen
    finalScoreElement.textContent = score;
    
    // Set result message
    const percentage = (score / currentQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = 'Outstanding! You have an excellent understanding of network fundamentals!';
    } else if (percentage >= 75) {
        message = 'Great job! You have a solid grasp of networking concepts!';
    } else if (percentage >= 50) {
        message = 'Good effort! Review the explanations to improve your knowledge.';
    } else {
        message = 'Keep practicing! Review the explanations and try again.';
    }
    
    resultMessageElement.textContent = message;
    
    // Show improvement tips
    showImprovementTips();
    
    // Show result screen
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

// Show improvement tips based on performance
function showImprovementTips() {
    // Clear previous tips
    improvementTipsElement.innerHTML = '';
    
    // Count incorrect answers by category
    const incorrectByCategory = {};
    
    userAnswers.forEach((answer, index) => {
        if (!answer.isCorrect) {
            const question = currentQuestions[index];
            const category = question.category || 'General';
            
            if (!incorrectByCategory[category]) {
                incorrectByCategory[category] = [];
            }
            
            incorrectByCategory[category].push({
                question: question.question,
                explanation: question.explanation,
                reference: question.reference
            });
        }
    });
    
    // If no incorrect answers
    if (Object.keys(incorrectByCategory).length === 0) {
        const tip = document.createElement('div');
        tip.innerHTML = '<p>Perfect! You answered all questions correctly. Keep up the great work!</p>';
        improvementTipsElement.appendChild(tip);
        return;
    }
    
    // Add tips for each category with incorrect answers
    for (const [category, questions] of Object.entries(incorrectByCategory)) {
        const tip = document.createElement('div');
        tip.className = 'improvement-tip';
        
        let tipHTML = `<h3>${category}</h3>`;
        tipHTML += `<p>You had ${questions.length} incorrect ${questions.length === 1 ? 'answer' : 'answers'} in this category. Review these concepts:</p>`;
        
        questions.forEach((q, i) => {
            tipHTML += `
                <div class="tip-question">
                    <p><strong>Question:</strong> ${q.question}</p>
                    <p><strong>Explanation:</strong> ${q.explanation}</p>
                    ${q.reference ? `<p><a href="${q.reference}" target="_blank" class="reference-link">Learn more about this topic</a></p>` : ''}
                </div>
            `;
        });
        
        tip.innerHTML = tipHTML;
        improvementTipsElement.appendChild(tip);
    }
}

// Show review of all answers
function showReview() {
    // Hide result screen, show review screen
    resultScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    
    // Clear previous review
    reviewContainer.innerHTML = '';
    
    // Add each question and answer to the review
    userAnswers.forEach((answer, index) => {
        const question = currentQuestions[index];
        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        
        let reviewHTML = `
            <div class="review-question">
                <strong>Question ${index + 1}:</strong> ${question.question}
            </div>
        `;
        
        // Add all options with styling for selected/correct answers
        question.options.forEach((option, i) => {
            let optionClass = '';
            
            if (i === answer.userAnswer && i === answer.correctAnswer) {
                optionClass = 'correct';
            } else if (i === answer.userAnswer) {
                optionClass = 'incorrect';
            } else if (i === answer.correctAnswer) {
                optionClass = 'correct';
            }
            
            reviewHTML += `
                <div class="review-answer ${optionClass}">
                    ${option.text}
                    ${i === answer.correctAnswer ? ' <i class="fas fa-check"></i>' : ''}
                    ${i === answer.userAnswer && !answer.isCorrect ? ' <i class="fas fa-times"></i>' : ''}
                </div>
            `;
        });
        
        // Add explanation if available
        if (question.explanation) {
            reviewHTML += `
                <div class="review-explanation">
                    <h4>Explanation:</h4>
                    <p>${question.explanation}</p>
                    ${question.reference ? `<p><a href="${question.reference}" target="_blank" class="reference-link">Learn more about this topic</a></p>` : ''}
                </div>
            `;
        }
        
        reviewItem.innerHTML = reviewHTML;
        reviewContainer.appendChild(reviewItem);
    });
}

// Show results screen
function showResults() {
    reviewScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
}

// Reset the quiz
function resetQuiz() {
    // Select new random questions
    selectRandomQuestions();
    
    // Reset UI
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    progressBar.style.width = '0%';
    
    // Reset quiz state will happen when starting a new quiz
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
