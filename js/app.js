// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const reviewScreen = document.getElementById('review-screen');
const finalResultsScreen = document.getElementById('final-results-screen');
const leaderboardScreen = document.getElementById('leaderboard-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const backToResultsBtn = document.getElementById('back-to-results');
const viewFinalResultsBtn = document.getElementById('view-final-results');
const viewLeaderboardBtn = document.getElementById('view-leaderboard');
const viewLeaderboardStartBtn = document.getElementById('view-leaderboard-btn');
const backToHomeBtn = document.getElementById('back-to-home');
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
const scoreHistoryContainer = document.getElementById('score-history');
const finalScoreDisplay = document.getElementById('final-score-display');
const scorePercentage = document.getElementById('score-percentage');
const scoreMessage = document.getElementById('score-message');
const correctAnswersCount = document.getElementById('correct-answers');
const totalQuestionsCount = document.getElementById('total-questions-count');
const timeTaken = document.getElementById('time-taken');
const scoreHistoryList = document.getElementById('score-history-list');
const quizResultsContainer = document.getElementById('quiz-results');
const detailedReviewBtn = document.getElementById('detailed-review-btn');
const printResultsBtn = document.getElementById('print-results-btn');
const finalRestartBtn = document.getElementById('final-restart-btn');
const leaderboardList = document.getElementById('leaderboard-list');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let quizData = [];
let userAnswers = [];
let currentQuestions = [];
let quizStartTime;
let quizEndTime;
let scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
const QUESTIONS_PER_QUIZ = 20;
let answerSelected = false; // Track if an answer has been selected for the current question

// Initialize the app
function init() {
    // Set initial high score
    highScoreElement.textContent = highScore;
    totalQuestionsElement.textContent = QUESTIONS_PER_QUIZ;
    totalQuestionsCount.textContent = QUESTIONS_PER_QUIZ;
    
    // Load questions and score history
    loadQuizData();
    updateScoreHistoryDisplay();
    
    // Event listeners
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', showNextQuestion);
    restartBtn.addEventListener('click', resetQuiz);
    reviewBtn.addEventListener('click', showReview);
    backToResultsBtn.addEventListener('click', showResults);
    viewFinalResultsBtn.addEventListener('click', showFinalResults);
    detailedReviewBtn.addEventListener('click', showReview);
    printResultsBtn.addEventListener('click', printResults);
    finalRestartBtn.addEventListener('click', resetQuiz);
    
    // Leaderboard event listeners
    if (viewLeaderboardBtn) viewLeaderboardBtn.addEventListener('click', showLeaderboard);
    if (viewLeaderboardStartBtn) viewLeaderboardStartBtn.addEventListener('click', showLeaderboard);
    if (backToHomeBtn) backToHomeBtn.addEventListener('click', backToHome);
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
    answerSelected = false;
    scoreElement.textContent = score;
    
    // Show quiz screen
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden');
    finalResultsScreen.classList.add('hidden');
    
    // Record start time
    quizStartTime = new Date();
    
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
    // Prevent multiple selections
    if (answerSelected) return;
    answerSelected = true;
    
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
        reference: currentQuestion.reference,
        options: currentQuestion.options.map(opt => opt.text)
    });
    
    // Show next button
    nextBtn.classList.remove('hidden');
}

// Show next question or end quiz
function showNextQuestion() {
    // Reset answer selected flag
    answerSelected = false;
    
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
    
    // Record end time and calculate duration
    quizEndTime = new Date();
    const timeDiff = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    const timeString = `${minutes}m ${seconds}s`;
    
    // Add to score history
    const quizResult = {
        date: new Date().toISOString(),
        score,
        total: currentQuestions.length,
        timeTaken: timeString,
        percentage: Math.round((score / currentQuestions.length) * 100)
    };
    
    scoreHistory.unshift(quizResult);
    // Keep only the last 10 results
    if (scoreHistory.length > 10) {
        scoreHistory = scoreHistory.slice(0, 10);
    }
    
    // Save to localStorage
    localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
    
    // Update the score history display
    updateScoreHistoryDisplay();
    
    // Update result screen
    finalScoreElement.textContent = `${score} / ${currentQuestions.length}`;
    
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
    
    // Also update final results screen
    updateFinalResults(quizResult);
    updateQuizResults(quizResult);
    
    // Add score to leaderboard
    if (window.leaderboard) {
        window.leaderboard.addEntry('Elsie', score, currentQuestions.length, timeDiff);
    }
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

// Update the score history display
function updateScoreHistoryDisplay() {
    if (!scoreHistoryList) return;
    
    scoreHistoryList.innerHTML = '';
    
    if (scoreHistory.length === 0) {
        scoreHistoryList.innerHTML = '<p>No quiz attempts yet. Complete a quiz to see your history.</p>';
        return;
    }
    
    scoreHistory.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = 'score-history-item';
        resultItem.innerHTML = `
            <span class="history-score">${result.score}/${result.total} (${result.percentage}%)</span>
            <span class="history-time">${new Date(result.date).toLocaleString()}</span>
            <span class="history-duration">${result.timeTaken}</span>
        `;
        resultItem.addEventListener('click', () => showFinalResults(result));
        scoreHistoryList.appendChild(resultItem);
    });
}

// Update the final results screen
function updateFinalResults(result) {
    if (!result) return;
    
    finalScoreDisplay.textContent = `${result.score} / ${result.total}`;
    scorePercentage.textContent = `${result.percentage}%`;
    correctAnswersCount.textContent = result.score;
    totalQuestionsCount.textContent = result.total;
    timeTaken.textContent = result.timeTaken;
    
    // Set score message
    let message = '';
    if (result.percentage >= 90) {
        message = 'Outstanding Performance!';
    } else if (result.percentage >= 75) {
        message = 'Great Job!';
    } else if (result.percentage >= 50) {
        message = 'Good Effort!';
    } else {
        message = 'Keep Practicing!';
    }
    scoreMessage.textContent = message;
    
    // Update the quiz results container with question-by-question breakdown
    updateQuizResults(result);
}

// Update the quiz results with question-by-question breakdown
function updateQuizResults(result = null) {
    if (!quizResultsContainer) return;
    
    // Use the provided result or the current quiz data
    const questionsToShow = result ? 
        result.questions || currentQuestions : 
        currentQuestions;
    
    const userAnswersToShow = result ? 
        result.userAnswers || userAnswers : 
        userAnswers;
    
    let html = '';
    
    questionsToShow.forEach((question, index) => {
        const userAnswer = userAnswersToShow[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const options = question.options || [];
        
        let optionsHtml = '<div class="result-options">';
        
        options.forEach((option, optionIndex) => {
            const isUserAnswer = optionIndex === userAnswer;
            const isCorrectAnswer = optionIndex === question.correctAnswer;
            let optionClass = '';
            
            if (isUserAnswer && isCorrectAnswer) {
                optionClass = 'correct-answer';
            } else if (isUserAnswer && !isCorrectAnswer) {
                optionClass = 'incorrect-answer';
            } else if (isCorrectAnswer) {
                optionClass = 'correct-answer';
            }
            
            optionsHtml += `
                <div class="result-option ${optionClass}">
                    ${option.text}
                </div>
            `;
        });
        
        optionsHtml += '</div>';
        
        // Get the category name or use a default
        const category = question.category || 'General';
        
        html += `
            <div class="quiz-result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-item-header">
                    <span class="result-question-number">Question ${index + 1}</span>
                    <span class="result-category">${category}</span>
                    <span class="result-status ${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                </div>
                <h4>${question.question}</h4>
                ${optionsHtml}
                <div class="result-explanation">
                    <p><strong>Explanation:</strong> ${question.explanation || 'No explanation available.'}</p>
                    ${question.reference ? `<p class="reference"><strong>Reference:</strong> <a href="${question.reference}" target="_blank" rel="noopener noreferrer">View Reference</a></p>` : ''}
                </div>
            </div>
        `;
    });
    
    quizResultsContainer.innerHTML = html;
}

// Show final results screen
function showFinalResults(result = null) {
    // Hide other screens
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden');
    
    // If no result provided but we have user answers, use the current quiz results
    if (!result && userAnswers.length > 0) {
        const percentage = Math.round((score / currentQuestions.length) * 100);
        result = {
            date: new Date().toISOString(),
            score: score,
            total: currentQuestions.length,
            timeTaken: quizEndTime ? (quizEndTime - quizStartTime) / 1000 : 0,
            userAnswers: [...userAnswers],
            questions: [...currentQuestions],
            percentage: percentage
        };
    }
    
    // Update the UI with the result
    if (result) {
        updateFinalResults(result);
        updateQuizResults(result);
    }
    
    // Show the final results screen
    finalResultsScreen.classList.remove('hidden');
    
    // Update score history display
    updateScoreHistoryDisplay();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Print the quiz results
function printResults() {
    // Create a print-specific stylesheet
    const printStyles = `
        @media print {
            body * {
                visibility: hidden;
            }
            .final-results-container,
            .final-results-container * {
                visibility: visible;
            }
            .final-results-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                padding: 20px;
            }
            .result-actions,
            .score-history,
            .btn {
                display: none !important;
            }
            .quiz-result-item {
                page-break-inside: avoid;
                margin-bottom: 20px;
                padding: 15px;
                border: 1px solid #eee;
                border-radius: 5px;
            }
            .score-summary {
                page-break-after: avoid;
            }
            .quiz-results h3 {
                page-break-before: always;
                padding-top: 20px;
            }
            @page {
                size: auto;
                margin: 15mm;
            }
        }
    `;
    
    // Create a style element for print styles
    const style = document.createElement('style');
    style.innerHTML = printStyles;
    
    // Create a clone of the results container for printing
    const printContents = finalResultsScreen.cloneNode(true);
    printContents.appendChild(style);
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Write the HTML content to the new window
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Quiz Results</title>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    padding: 20px;
                }
                .print-header {
                    text-align: center;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #f0f0f0;
                }
                .print-header h1 {
                    margin: 0;
                    color: #4a6fa5;
                }
                .print-meta {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 10px;
                    font-size: 0.9em;
                    color: #666;
                }
                .print-footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 10px;
                    border-top: 1px solid #f0f0f0;
                    font-size: 0.8em;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="print-header">
                <h1>Quiz Results</h1>
                <div class="print-meta">
                    <span>Date: ${new Date().toLocaleDateString()}</span>
                    <span>Score: ${score}/${QUESTIONS_PER_QUIZ} (${Math.round((score / QUESTIONS_PER_QUIZ) * 100)}%)</span>
                </div>
            </div>
            ${printContents.innerHTML}
            <div class="print-footer">
                <p>Generated by Network Fundamentals Quiz App</p>
            </div>
            <script>
                // Close the print dialog after printing
                window.onbeforeprint = function() {
                    setTimeout(function() {
                        window.close();
                    }, 1000);
                };
                // Print when the window loads
                window.onload = function() {
                    setTimeout(function() {
                        window.print();
                    }, 500);
                };
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

// Show leaderboard screen
function showLeaderboard(e) {
    if (e) e.preventDefault();
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    
    // Show leaderboard
    leaderboardScreen.classList.remove('hidden');
    
    // Update leaderboard display if leaderboard is available
    if (window.leaderboard) {
        window.leaderboard.render('leaderboard-list', window.leaderboard.currentFilter || 'all');
    }
}

// Go back to home from leaderboard
function backToHome() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.add('hidden');
    });
    startScreen.classList.remove('hidden');
}

// Reset the quiz
function resetQuiz() {
    // Select new random questions
    selectRandomQuestions();
    
    // Reset UI
    resultScreen.classList.add('hidden');
    finalResultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    progressBar.style.width = '0%';
    
    // Reset quiz state will happen when starting a new quiz
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Load leaderboard script
    const leaderboardScript = document.createElement('script');
    leaderboardScript.src = 'js/leaderboard.js';
    document.head.appendChild(leaderboardScript);
    
    // Initialize the app
    init();
});
