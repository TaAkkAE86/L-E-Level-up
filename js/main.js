// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- STATE MANAGEMENT ---
    let userProgress = {
        level: 1,
        points: 0,
        completedLessons: [] // Array of lesson IDs
    };
    
    let currentLessonIndex = -1;

    // --- DOM ELEMENTS ---
    const userLevelEl = document.getElementById('user-level');
    const userPointsEl = document.getElementById('user-points');
    const levelsContainer = document.getElementById('levels-container');
    const learningPathView = document.getElementById('learning-path-view');
    const lessonView = document.getElementById('lesson-view');
    const backToPathBtn = document.getElementById('back-to-path-btn');
    
    const lessonTitle = document.getElementById('lesson-title');
    const lessonDescription = document.getElementById('lesson-description');
    const vocabList = document.getElementById('vocab-list');
    
    const quizForm = document.getElementById('quiz-form');
    const submitQuizBtn = document.getElementById('submit-quiz-btn');
    const quizResult = document.getElementById('quiz-result');
    const resultMessage = document.getElementById('result-message');
    const nextLessonBtn = document.getElementById('next-lesson-btn');

    // --- FUNCTIONS ---

    function saveProgress() {
        localStorage.setItem('englishForWorkProgress', JSON.stringify(userProgress));
    }

    function loadProgress() {
        const savedData = localStorage.getItem('englishForWorkProgress');
        if (savedData) {
            userProgress = JSON.parse(savedData);
        }
    }

    function updateHeaderStats() {
        userLevelEl.textContent = userProgress.level;
        userPointsEl.textContent = userProgress.points;
    }

    function renderLearningPath() {
        levelsContainer.innerHTML = '';
        let lastUnlockedLessonIndex = findLastUnlockedLessonIndex();

        lessonsData.forEach((lesson, index) => {
            const isCompleted = userProgress.completedLessons.includes(lesson.id);
            const isLocked = index > lastUnlockedLessonIndex;

            const lessonCard = document.createElement('div');
            lessonCard.className = 'lesson-card';
            
            let statusIcon = '🔒';
            let cardStatusClass = 'locked';

            if (isCompleted) {
                statusIcon = '✅';
                cardStatusClass = 'completed';
            } else if (!isLocked) {
                statusIcon = '📖';
                cardStatusClass = 'unlocked';
            }
            
            lessonCard.classList.add(cardStatusClass);
            lessonCard.innerHTML = `<span class="status-icon">${statusIcon}</span> <div><b>Level ${lesson.level}: ${lesson.title}</b><br>${lesson.description}</div>`;

            if (!isLocked) {
                lessonCard.addEventListener('click', () => showLesson(index));
            }
            levelsContainer.appendChild(lessonCard);
        });
    }
    
    function findLastUnlockedLessonIndex() {
        if (userProgress.completedLessons.length === 0) return 0;
        
        const lastCompletedId = userProgress.completedLessons[userProgress.completedLessons.length - 1];
        const lastCompletedIndex = lessonsData.findIndex(l => l.id === lastCompletedId);
        
        return Math.min(lastCompletedIndex + 1, lessonsData.length - 1);
    }

    function showLesson(lessonIndex) {
        currentLessonIndex = lessonIndex;
        const lesson = lessonsData[lessonIndex];

        // Populate lesson content
        lessonTitle.textContent = lesson.title;
        lessonDescription.textContent = lesson.description;
        vocabList.innerHTML = '';
        lesson.vocab.forEach(v => {
            const li = document.createElement('li');
            li.innerHTML = `<b>${v.word}</b>: ${v.meaning}`;
            vocabList.appendChild(li);
        });

        // Populate quiz
        renderQuiz(lesson.quiz);
        
        // Switch views
        learningPathView.classList.add('hidden');
        lessonView.classList.remove('hidden');
        quizResult.classList.add('hidden');
        submitQuizBtn.classList.remove('hidden');
    }

    function renderQuiz(quizData) {
        quizForm.innerHTML = '';
        quizData.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'quiz-question';
            
            let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
            if (q.type === 'multiple-choice') {
                q.options.forEach(opt => {
                    questionHTML += `
                        <label>
                            <input type="radio" name="q${index}" value="${opt}" required>
                            ${opt}
                        </label>`;
                });
            } else if (q.type === 'fill-in-the-blank') {
                questionHTML += `<input type="text" name="q${index}" autocomplete="off" required>`;
            }
            
            questionDiv.innerHTML = questionHTML;
            quizForm.appendChild(questionDiv);
        });
    }

    function handleSubmitQuiz(event) {
        event.preventDefault();
        const lesson = lessonsData[currentLessonIndex];
        const formData = new FormData(quizForm);
        let score = 0;
        
        lesson.quiz.forEach((q, index) => {
            const userAnswer = formData.get(`q${index}`).trim();
            if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                score++;
            }
        });

        const isCorrect = score === lesson.quiz.length;
        showQuizResult(isCorrect);

        if (isCorrect && !userProgress.completedLessons.includes(lesson.id)) {
            userProgress.completedLessons.push(lesson.id);
            userProgress.points += 10;
            // Simple level up logic
            if (userProgress.completedLessons.length > userProgress.level * 2) {
                userProgress.level++;
            }
            saveProgress();
            updateHeaderStats();
        }
    }
    
    function showQuizResult(isCorrect) {
        quizResult.classList.remove('hidden');
        submitQuizBtn.classList.add('hidden');
        
        if (isCorrect) {
            resultMessage.textContent = 'Excellent! You passed! 🎉';
            quizResult.className = 'correct';
            nextLessonBtn.classList.remove('hidden');
        } else {
            resultMessage.textContent = 'Not quite right. Try again! 💪';
            quizResult.className = 'incorrect';
            // Show a "try again" button instead of next lesson
            nextLessonBtn.classList.add('hidden');
            // We can add a try again button that calls showLesson(currentLessonIndex)
        }
    }
    
    function showLearningPath() {
        learningPathView.classList.remove('hidden');
        lessonView.classList.add('hidden');
        renderLearningPath(); // Re-render to show updated progress
    }

    // --- EVENT LISTENERS ---
    quizForm.addEventListener('submit', handleSubmitQuiz);
    backToPathBtn.addEventListener('click', showLearningPath);
    nextLessonBtn.addEventListener('click', showLearningPath);

    // --- INITIALIZATION ---
    function init() {
        loadProgress();
        updateHeaderStats();
        showLearningPath();
    }

    init();
});
